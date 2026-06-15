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

export const DEFAULT_SETTINGS: Settings = {
  calorieTarget: 2000,
  proteinFloor: 100,
  weeklyBudget: 55,
  activeWeek: "Week 1 — Pasta",
};

export const EMPTY_LEDGER: Ledger = {
  version: 1,
  settings: DEFAULT_SETTINGS,
  entries: [],
};
