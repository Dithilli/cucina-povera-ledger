// Domain model for the Cucina Povera ledger.
// This file is the single source of truth for the data shape. The pure core,
// the React UI, and the CLI all import from here. Changing a field here is a
// schema change — bump `Ledger.version` and update `migrate()` in core/ledger.ts.

export interface Entry {
  /** Stable unique id. */
  id: string;
  /** ISO calendar date, YYYY-MM-DD (local, no time component). */
  date: string;
  /** Week label, e.g. "Week 1 — Pasta". One of WEEK_PRESETS or a custom string. */
  week: string;
  /** Free text — what was cooked that night. */
  dish: string;
  /** Calories in the meal. */
  calories: number;
  /** Protein in grams. */
  protein: number;
  /** Cost in dollars (USD), as the cook entered it (prices are regional). */
  cost: number;
  /** Whether the meal wasted nothing. The one thing that gates a "kept" night. */
  zeroWaste: boolean;
}

export interface Settings {
  /** Per-meal calorie target. A goal shown next to the meal — it does NOT gate. */
  calorieTarget: number;
  /** Per-meal protein target in grams. A goal shown next to the meal — it does NOT gate. */
  proteinFloor: number;
  /** Weekly dinner budget in dollars — a target, not a cap (prices are regional). */
  weeklyBudget: number;
  /** Currently selected week for new entries. */
  activeWeek: string;
}

export interface Ledger {
  /** Schema version. Bump on any breaking shape change. */
  version: 1;
  settings: Settings;
  entries: Entry[];
}

/** Aggregate stats over a set of entries. */
export interface Summary {
  cost: number;
  calories: number;
  protein: number;
  /** Number of meals (nights) logged in this set. */
  meals: number;
  avgCalories: number;
  avgProtein: number;
  /** Dollars per 1,000 kcal, or null when no calories logged. */
  costPerKcal: number | null;
  /** Dollars per 100g protein, or null when no protein logged. */
  costPerProtein: number | null;
}

export interface WeekGroup {
  week: string;
  entries: Entry[];
  summary: Summary;
}

/** One dinner lifted out of a plan (curated, deterministic, or AI) so the ledger
 *  can offer it as a one-tap quick-log. Macros prefill the entry form. */
export interface PlannedDinner {
  /** Display name — the recipe title, or the raw dinner string if not in the library. */
  title: string;
  calories: number;
  protein: number;
  cost: number;
}

/** A whole week handed from the challenge view to the ledger: its label becomes
 *  the active week, and its dinners become quick-log chips. This is the
 *  generate→log loop — a planned menu becomes the thing you log against. */
export interface PlannedWeek {
  /** Becomes `Settings.activeWeek`; new entries tag to it. */
  label: string;
  dinners: PlannedDinner[];
}
