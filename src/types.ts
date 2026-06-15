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
  /** Free text — what was cooked. */
  dish: string;
  /** Calories consumed that day. */
  calories: number;
  /** Protein in grams. */
  protein: number;
  /** Cost in dollars (USD). */
  cost: number;
  /** Whether the day wasted nothing. */
  zeroWaste: boolean;
}

export interface Settings {
  /** Daily calorie ceiling. A day must land at or under this to be "kept". */
  calorieTarget: number;
  /** Daily protein minimum in grams. A day must meet or exceed this to be "kept". */
  proteinFloor: number;
  /** Weekly grocery budget cap in dollars. */
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
  days: number;
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
