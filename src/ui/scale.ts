// Recipe serving scaler. The hard part — parsing mixed numbers / vulgar
// fractions and formatting a number back into kitchen-friendly fractions — is
// done by the maintained `numeric-quantity` / `format-quantity` libraries
// (OSS-first, per CLAUDE.md). We only scale the *numbers* inside a free-text
// quantity and leave prose like "to taste" or "a handful" untouched.
import { numericQuantity } from "numeric-quantity";
import { formatQuantity } from "format-quantity";

// Matches a numeric token: a mixed number ("1 1/2"), a whole+vulgar ("1½"),
// a plain fraction ("1/2"), a lone vulgar fraction ("½"), or a decimal/integer
// ("1.5", "2"). Order matters — most specific alternatives come first.
const VULGAR = "¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞";
const NUMERIC_TOKEN = new RegExp(
  `\\d+\\s+\\d+/\\d+|\\d+\\s*[${VULGAR}]|\\d+/\\d+|[${VULGAR}]|\\d+(?:\\.\\d+)?`,
  "g"
);

/**
 * Scale every numeric quantity in a free-text `qty` string by `factor`,
 * re-rendering each as a kitchen fraction. Non-numeric prose is returned
 * verbatim. `scaleQty("1 1/2 cups", 0.25)` -> `"3/8 cups"`.
 *
 * Numbers inside parentheses are treated as fixed package/can sizes and are
 * NOT scaled — doubling servings means two 28-oz cans, not one 56-oz can.
 * `scaleQty("1 (28 oz) can", 2)` -> `"2 (28 oz) can"`.
 */
export function scaleQty(qty: string, factor: number): string {
  if (factor === 1 || !qty) return qty;
  // Split into parenthetical groups (left untouched) and the prose around them.
  return qty.replace(/\([^)]*\)|[^()]+/g, (segment) =>
    segment.startsWith("(") ? segment : scaleSegment(segment, factor)
  );
}

function scaleSegment(segment: string, factor: number): string {
  return segment.replace(NUMERIC_TOKEN, (token) => {
    const n = numericQuantity(token);
    if (Number.isNaN(n)) return token;
    const scaled = n * factor;
    const formatted = formatQuantity(scaled);
    // format-quantity returns a raw decimal STRING (not null) when it can't snap
    // the value to a kitchen fraction, so the old `?? round` fallback was dead
    // code that never fired. Catch an ugly long-decimal result and round it to a
    // sane precision instead of printing "0.08333333333333333".
    if (formatted == null || /\.\d{3,}/.test(formatted)) {
      return String(Math.round(scaled * 100) / 100);
    }
    return formatted;
  });
}
