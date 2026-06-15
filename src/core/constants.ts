import type { Settings, Ledger } from "../types";

/** The challenge's themed weeks. Swap freely; entries store the label verbatim. */
export const WEEK_PRESETS = [
  "Week 1 — Pasta",
  "Week 2 — Bread",
  "Week 3 — Eggs",
  "Week 4 — Legumes",
  "Bonus — Sicilian",
  "Bonus — Garden",
] as const;

// Per-MEAL targets, not per-day. The challenge is one cucina povera dinner a
// night — these are goals to aim at, shown alongside the entry. Only zero-waste
// gates whether a night is "kept" (see `mealPasses`); calories, protein, and
// cost are tracked and compared to these, but never pass/fail.
export const DEFAULT_SETTINGS: Settings = {
  calorieTarget: 700,
  proteinFloor: 15,
  weeklyBudget: 14,
  activeWeek: "Week 1 — Pasta",
};

export const EMPTY_LEDGER: Ledger = {
  version: 1,
  settings: DEFAULT_SETTINGS,
  entries: [],
};
