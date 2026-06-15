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
 */
export function scaleQty(qty: string, factor: number): string {
  if (factor === 1 || !qty) return qty;
  return qty.replace(NUMERIC_TOKEN, (token) => {
    const n = numericQuantity(token);
    if (Number.isNaN(n)) return token;
    const scaled = n * factor;
    return formatQuantity(scaled) ?? String(Math.round(scaled * 1000) / 1000);
  });
}
