// Content model for the Cucina Povera Challenge.
//
// This is the "curated truth" layer: hand-vetted recipes, week plans, and prose
// that the app reads. The AI menu generator (hybrid approach) DRAFTS weeks by
// assembling from this library — it never invents the cost/macro numbers, it
// only sequences vetted dishes. So every field here is meant to be trustworthy.
//
// Keep this file pure types — no logic, no I/O. Mirrors the discipline in
// src/core/ledger.ts.

/** A cuisine family. Italian is cuisine #1; the engine is cuisine-agnostic. */
export type Cuisine = "italian" | (string & {});

/** Where a dish fits in a day. */
export type DishRole = "breakfast" | "lunch" | "dinner" | "base" | "side";

/** Calories + protein. The two numbers the challenge engine actually scores. */
export interface Macros {
  calories: number;
  /** grams */
  protein: number;
}

/** One ingredient line, with best-effort cost attribution for this dish. */
export interface IngredientLine {
  item: string;
  /** Human quantity as written, e.g. "1 1/2 cups", "12 oz". */
  qty: string;
  /** USD attributable to THIS recipe's use of the item (best-effort, optional). */
  cost?: number;
  /** Pantry staple amortized across weeks (oil, cheese, anchovy, garlic, herbs). */
  spansWeeks?: boolean;
}

export interface Recipe {
  /** Stable kebab-case id, e.g. "pasta-e-ceci". */
  slug: string;
  title: string;
  cuisine: Cuisine;
  /** One-line description. */
  blurb: string;
  servings: number;
  /** Per-serving macros, from the "About X cal and Yg protein per serving" line. */
  perServing: Macros;
  /** Best-effort USD per serving; omit if not estimable. */
  estCostPerServing?: number;
  /** Where this dish can slot into a day. */
  roles: DishRole[];
  ingredients: IngredientLine[];
  /** Ordered method steps. */
  method: string[];
  /** The "modern move" — the technique that elevates the peasant root. */
  modernMove?: string;
  notes?: string;
  /** True for the zero-waste hero dishes (frittata di pasta, pappa, etc.). */
  zeroWasteHero?: boolean;
  tags: string[];
}

export type Weekday = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

/** One day in a week plan. `dinner`/`lunch`/`breakfast` hold a recipe slug when
 *  one exists, otherwise free-text prose for dishes not yet in the library. */
export interface WeekDay {
  day: Weekday;
  isCookDay?: boolean;
  breakfast?: string;
  lunch?: string;
  dinner: string;
  estCalories: number;
  /** grams */
  estProtein: number;
}

/** One line on the week's shopping list. */
export interface ShoppingItem {
  item: string;
  qty: string;
  /** USD for this line. */
  cost: number;
  /** Pantry staple that carries into later weeks. */
  spansWeeks?: boolean;
  note?: string;
}

/** The themed identity of a week — what every week in the arc has, even before
 *  it's built out into a full day-by-day plan. The seven-week arc is a list of
 *  these; the generator turns one into a full `WeekPlan`. */
export interface WeekTheme {
  /** Stable id, e.g. "week-1-pasta". */
  slug: string;
  /** Position in the arc (bonus weeks continue the numbering). */
  number: number;
  cuisine: Cuisine;
  /** Short theme name, e.g. "Pasta". */
  theme: string;
  /** Full display title, e.g. "Week 1 — Pasta". */
  title: string;
  /** The prose describing the week's palette and its place in the arc. */
  description: string;
  /** Candidate dishes for the week (free text; some map to library recipes). */
  dishes: string[];
  /** Where the protein floor comes from this week. */
  proteinNote?: string;
  /** The one allowed luxury this week. */
  preciousThread: string;
  /** True for the off-arc bonus weeks (Sicilian, Garden). */
  bonus?: boolean;
}

/** A fully built-out week: a theme plus the executable plan — the Sunday engine,
 *  seven days, and a costed shopping list. */
export interface WeekPlan extends WeekTheme {
  /** The Sunday "engine" — batch-cook items that carry the week. */
  engine: string[];
  /** Seven days, Sun..Sat. */
  days: WeekDay[];
  shopping: ShoppingItem[];
  /** First-shop total including pantry staples (higher). */
  firstShopTotal?: number;
  /** Steady-state weekly cost once staples are stocked. */
  steadyStateWeekly?: number;
}

/** A prose page: the history essay, manifesto, challenge rules, budget notes. */
export interface ContentDoc {
  /** Stable id, e.g. "history", "manifesto", "challenge", "budget". */
  slug: string;
  title: string;
  kind: "essay" | "manifesto" | "challenge" | "reference";
  /** Markdown body. */
  body: string;
}
