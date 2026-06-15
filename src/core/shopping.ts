// PURE shopping-list engine for the cooking challenge.
//
// No I/O, no DOM, no React, no Math.random / Date.now. Same moat discipline as
// ledger.ts and planner.ts: the UI and any caller import these functions
// verbatim and never re-implement the aggregation.
//
// It does one job: take the recipes that anchor a week's dinners and collapse
// their ingredient lines into ONE consolidated shopping list — merged by item,
// costs summed, quantities collated, fresh split from pantry (spansWeeks), and
// every line bucketed into an aisle. A second entry point normalizes a curated,
// hand-authored ShoppingItem[] into the same shape so both render identically.

import type { Recipe, IngredientLine, ShoppingItem } from "../content/types";

export type ShoppingCategory =
  | "Produce"
  | "Protein & Eggs"
  | "Beans, Grains & Pasta"
  | "Dairy"
  | "Bread & Tortillas"
  | "Pantry & Spices"
  | "Other";

/** Aisle order for display — produce first, staples last. */
export const SHOPPING_CATEGORY_ORDER: readonly ShoppingCategory[] = [
  "Produce",
  "Protein & Eggs",
  "Beans, Grains & Pasta",
  "Dairy",
  "Bread & Tortillas",
  "Pantry & Spices",
  "Other",
];

/** One consolidated line on the list. */
export interface ShoppingLine {
  /** Clean display name (prep descriptors and parentheticals stripped). */
  item: string;
  /** Stable key used for merging and as a checkbox id. */
  key: string;
  /** Collated quantities across the dishes that use the item. */
  quantities: string[];
  /** Summed best-effort USD across those dishes. */
  cost: number;
  /** Amortized pantry staple (oil, spice, cheese…) — bought once, spans weeks. */
  pantry: boolean;
  /** Aisle bucket. */
  category: ShoppingCategory;
  /** Dish titles this item came from (provenance). */
  fromDishes: string[];
  /** Curated note, carried through from an authored list. */
  note?: string;
}

export interface ShoppingList {
  lines: ShoppingLine[];
  /** Sum of every line's cost. */
  totalCost: number;
  /** Sum of non-pantry (fresh) lines — the recurring weekly spend. */
  freshCost: number;
  /** Sum of pantry lines — the up-front staple investment. */
  pantryCost: number;
  /** How many distinct dishes fed into the list (0 for authored lists). */
  dishCount: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Strip prep descriptors and parentheticals: "red onion, finely chopped" →
 *  "red onion"; "lentils (or cooked)" → "lentils". */
function cleanName(raw: string): string {
  let s = raw.replace(/\([^)]*\)/g, " "); // drop parentheticals
  const comma = s.indexOf(",");
  if (comma >= 0) s = s.slice(0, comma); // drop the first clause onward
  return s.replace(/\s+/g, " ").trim();
}

/** Light singularizer so "carrots"/"carrot" and "chiles"/"chile" merge. Drops a
 *  single trailing "s" (the head noun is last in these item names); leaves
 *  "-ss" words and very short words alone. Best-effort, key-only. */
function singularize(s: string): string {
  return s.length > 3 && s.endsWith("s") && !s.endsWith("ss") ? s.slice(0, -1) : s;
}

const mergeKey = (raw: string): string => singularize(cleanName(raw).toLowerCase());

// Ordered keyword rules — first match wins, so compound/pantry items that would
// otherwise look like produce (tomato paste, fish sauce) are caught first.
const CATEGORY_RULES: ReadonlyArray<[ShoppingCategory, RegExp]> = [
  [
    "Pantry & Spices",
    /\b(oil|olive oil|salt|sugar|vinegar|soy|fish sauce|tomato paste|stock|broth|berbere|niter|spice|cumin|paprika|oregano|turmeric|cinnamon|clove|cardamom|korarima|fenugreek|sesame|tahini|miso|dashi|tamarind|caper|sambal|chili flake|chile flake|garam|masala|curry|bouillon|baking|cornstarch|starch|honey|molasses|fish-sauce|kecap|gochujang|doenjang|harissa|anchov|olives?)(?:e?s)?\b/i,
  ],
  [
    "Dairy",
    /\b(cheese|queso|crema|cream|yogurt|yoghurt|milk|butter|ghee|ayib|ricotta|feta|paneer|labneh|kefir|smetana|sour cream)(?:e?s)?\b/i,
  ],
  [
    "Bread & Tortillas",
    /\b(bread|tortilla|injera|taita|pita|khubz|roti|naan|chapati|loaf|baguette|breadcrumb|crumbs?|pangrattato|totopo|matzo|matzah|rye|cracker|phyllo|filo)(?:e?s)?\b/i,
  ],
  [
    "Protein & Eggs",
    /\b(chicken|beef|pork|lamb|goat|fish|shrimp|prawn|crawfish|crab|sardine|herring|mackerel|tuna|cod|bacon|chorizo|andouille|sausage|meat|egg|eggs|tofu|tahu|tempe|tempeh|seitan|gizzard|liver|ham)(?:e?s)?\b/i,
  ],
  [
    "Beans, Grains & Pasta",
    /\b(lentil|misir|chickpea|garbanzo|bean|fava|faba|pea|split pea|kik|rice|masa|maize|hominy|teff|flour|pasta|spaghetti|noodle|macaroni|bulgur|burghul|freekeh|barley|polenta|cornmeal|grits|oat|grain|dal|daal|mung|moong|quinoa|couscous|semolina)(?:e?s)?\b/i,
  ],
  [
    "Produce",
    /\b(onion|shallot|garlic|ginger|galangal|tomato|tomatillo|chile|chili|chilli|pepper|capsicum|potato|carrot|cabbage|green|collard|kale|spinach|chard|lettuce|cilantro|coriander|parsley|herb|basil|mint|dill|scallion|leek|celery|cucumber|eggplant|aubergine|zucchini|courgette|squash|kabocha|pumpkin|okra|nopal|mushroom|corn|elote|avocado|plantain|banana|yam|cassava|vine|blossom|flower|lemon|lime|orange|pomegranate|tamarind pod|beet|radish|daikon|turnip|sprout|nopales|guava|mango|apple|fruit|vegetable|veg|kangkung|bayam|cactus|fennel|artichoke|pumpkin)(?:e?s)?\b/i,
  ],
];

/** Bucket an item name into an aisle. */
export function categorizeItem(item: string): ShoppingCategory {
  const name = cleanName(item);
  for (const [cat, re] of CATEGORY_RULES) if (re.test(name)) return cat;
  return "Other";
}

function sortLines(lines: ShoppingLine[]): ShoppingLine[] {
  const order = new Map(SHOPPING_CATEGORY_ORDER.map((c, i) => [c, i]));
  return [...lines].sort((a, b) => {
    const ca = order.get(a.category) ?? 99;
    const cb = order.get(b.category) ?? 99;
    if (ca !== cb) return ca - cb;
    // fresh before pantry within an aisle, then alphabetical for determinism
    if (a.pantry !== b.pantry) return a.pantry ? 1 : -1;
    return a.item < b.item ? -1 : a.item > b.item ? 1 : 0;
  });
}

function totals(lines: ShoppingLine[]): Pick<ShoppingList, "totalCost" | "freshCost" | "pantryCost"> {
  let total = 0,
    fresh = 0,
    pantry = 0;
  for (const l of lines) {
    total += l.cost;
    if (l.pantry) pantry += l.cost;
    else fresh += l.cost;
  }
  return { totalCost: round2(total), freshCost: round2(fresh), pantryCost: round2(pantry) };
}

/**
 * Build a consolidated shopping list from the recipes that anchor a week's
 * dinners. Recipes are de-duplicated by slug first (a dish cooked on several
 * nights is one batch of shopping), then every ingredient line is merged by
 * cleaned item name: quantities collated, costs summed, pantry flag ANDed (an
 * item is "pantry" only if every use of it is a spans-weeks staple).
 */
export function buildShoppingList(dinners: Recipe[]): ShoppingList {
  const seen = new Set<string>();
  const distinct: Recipe[] = [];
  for (const r of dinners) {
    if (seen.has(r.slug)) continue;
    seen.add(r.slug);
    distinct.push(r);
  }

  const acc = new Map<
    string,
    {
      item: string;
      quantities: string[];
      cost: number;
      pantry: boolean;
      fromDishes: Set<string>;
    }
  >();

  for (const r of distinct) {
    for (const ing of r.ingredients as IngredientLine[]) {
      const key = mergeKey(ing.item);
      if (!key) continue;
      let line = acc.get(key);
      if (!line) {
        line = { item: cleanName(ing.item), quantities: [], cost: 0, pantry: true, fromDishes: new Set() };
        acc.set(key, line);
      }
      const qty = (ing.qty ?? "").trim();
      if (qty && !line.quantities.includes(qty)) line.quantities.push(qty);
      line.cost += ing.cost ?? 0;
      line.pantry = line.pantry && !!ing.spansWeeks; // pantry only if always a staple
      line.fromDishes.add(r.title);
    }
  }

  const lines: ShoppingLine[] = [...acc.entries()].map(([key, l]) => ({
    item: l.item,
    key,
    quantities: l.quantities,
    cost: round2(l.cost),
    pantry: l.pantry,
    category: categorizeItem(l.item),
    fromDishes: [...l.fromDishes],
  }));

  const sorted = sortLines(lines);
  return { lines: sorted, dishCount: distinct.length, ...totals(sorted) };
}

/**
 * Normalize a curated, hand-authored ShoppingItem[] into the same ShoppingList
 * shape, preserving the authored quantity and note on each line.
 */
export function shoppingListFromAuthored(items: ShoppingItem[]): ShoppingList {
  const lines: ShoppingLine[] = items.map((it) => {
    const qty = (it.qty ?? "").trim();
    return {
      item: it.item,
      key: mergeKey(it.item) || it.item.toLowerCase(),
      quantities: qty ? [qty] : [],
      cost: round2(it.cost ?? 0),
      pantry: !!it.spansWeeks,
      category: categorizeItem(it.item),
      fromDishes: [],
      note: it.note,
    };
  });
  const sorted = sortLines(lines);
  return { lines: sorted, dishCount: 0, ...totals(sorted) };
}

/**
 * Find every known recipe slug embedded in a prose dinner line (whole-word,
 * longest-first so multi-word slugs win). Pure mirror of the UI's linkify scan,
 * used to turn a curated week's prose dinners into the set of recipes to shop
 * for. Returns slugs in first-seen order, de-duplicated.
 */
export function extractRecipeSlugs(text: string, slugs: Iterable<string>): string[] {
  const all = [...slugs].sort((a, b) => b.length - a.length);
  if (all.length === 0) return [];
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`\\b(?:${all.map(esc).join("|")})\\b`, "g");
  const out: string[] = [];
  const seen = new Set<string>();
  for (let m = re.exec(text); m !== null; m = re.exec(text)) {
    if (!seen.has(m[0])) {
      seen.add(m[0]);
      out.push(m[0]);
    }
  }
  return out;
}

/** Render a list as plain text for copy/export — grouped by aisle, checkboxes,
 *  totals footer. Pure string building so it's testable. */
export function shoppingListToText(list: ShoppingList, title = "Shopping list"): string {
  const lines: string[] = [title, "=".repeat(title.length), ""];
  let current: ShoppingCategory | null = null;
  for (const l of list.lines) {
    if (l.category !== current) {
      current = l.category;
      lines.push(`${current}:`);
    }
    const qty = l.quantities.length ? ` — ${l.quantities.join(" + ")}` : "";
    const cost = l.cost ? ` ($${l.cost.toFixed(2)})` : "";
    const pantry = l.pantry ? " [pantry]" : "";
    lines.push(`  [ ] ${l.item}${qty}${cost}${pantry}`);
  }
  lines.push("");
  lines.push(
    `Total $${list.totalCost.toFixed(2)}  ·  fresh $${list.freshCost.toFixed(2)}  ·  pantry $${list.pantryCost.toFixed(2)}`,
  );
  return lines.join("\n");
}
