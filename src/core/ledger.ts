// Pure, isomorphic ledger logic. NO DOM, NO Node, NO React imports here.
// Everything is a pure function of its inputs so it can be unit-tested in
// isolation and reused by both the browser UI and the CLI. This is the safest
// surface for an agent to modify — change behaviour here and the tests will
// tell you if you broke an invariant.

import type { Entry, Ledger, Settings, Summary, WeekGroup } from "../types";
import { EMPTY_LEDGER } from "./constants";

export function defaultLedger(): Ledger {
  return structuredClone(EMPTY_LEDGER);
}

/** Generate a stable, collision-resistant id for a new entry. */
export function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

/** Validate a candidate entry. Returns all problems found, not just the first. */
export function validateEntry(e: Partial<Entry>): ValidationResult {
  const errors: string[] = [];
  if (!e.date || !DATE_RE.test(e.date)) errors.push("date must be YYYY-MM-DD");
  if (!e.week || !e.week.trim()) errors.push("week is required");
  if (e.calories == null || e.calories < 0 || !Number.isFinite(e.calories))
    errors.push("calories must be a number >= 0");
  if (e.protein == null || e.protein < 0 || !Number.isFinite(e.protein))
    errors.push("protein must be a number >= 0");
  if (e.cost == null || e.cost < 0 || !Number.isFinite(e.cost))
    errors.push("cost must be a number >= 0");
  if (typeof e.zeroWaste !== "boolean") errors.push("zeroWaste must be true/false");
  return { ok: errors.length === 0, errors };
}

/**
 * Insert or replace an entry. If an entry with the same id exists it is
 * replaced; otherwise the entry is appended. Returns a NEW ledger (immutable).
 */
export function upsertEntry(ledger: Ledger, entry: Entry): Ledger {
  const exists = ledger.entries.some((e) => e.id === entry.id);
  const entries = exists
    ? ledger.entries.map((e) => (e.id === entry.id ? entry : e))
    : [...ledger.entries, entry];
  return { ...ledger, entries };
}

export function removeEntry(ledger: Ledger, id: string): Ledger {
  return { ...ledger, entries: ledger.entries.filter((e) => e.id !== id) };
}

export function updateSettings(ledger: Ledger, patch: Partial<Settings>): Ledger {
  return { ...ledger, settings: { ...ledger.settings, ...patch } };
}

/**
 * The single definition of a "kept" night: you cooked the dinner and wasted
 * nothing. Calories, protein, and cost are tracked as targets to aim at, but
 * they do NOT gate — the challenge is exploring cucina povera nightly, not
 * dieting. Referenced by the UI badges, the streak counter, and the CLI
 * `stats` command — keep it here only.
 *
 * Takes `_settings` for signature stability (the planner and callers pass it),
 * though the rule no longer depends on any target.
 */
export function mealPasses(entry: Entry, _settings: Settings): boolean {
  return entry.zeroWaste;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

export function summarize(entries: Entry[]): Summary {
  const cost = entries.reduce((a, e) => a + e.cost, 0);
  const calories = entries.reduce((a, e) => a + e.calories, 0);
  const protein = entries.reduce((a, e) => a + e.protein, 0);
  const meals = entries.length;
  return {
    cost: round2(cost),
    calories,
    protein,
    meals,
    avgCalories: meals ? Math.round(calories / meals) : 0,
    avgProtein: meals ? Math.round(protein / meals) : 0,
    costPerKcal: calories > 0 ? round2(cost / (calories / 1000)) : null,
    costPerProtein: protein > 0 ? round2(cost / (protein / 100)) : null,
  };
}

/** Entries sorted ascending by date (stable for equal dates). */
export function sortedByDate(entries: Entry[]): Entry[] {
  return [...entries].sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

/**
 * Current streak: count back from the most recent logged night while each is
 * "kept", stopping at the first miss. Counts logged nights, not calendar gaps.
 */
export function currentStreak(ledger: Ledger): number {
  const sorted = sortedByDate(ledger.entries);
  let streak = 0;
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (mealPasses(sorted[i], ledger.settings)) streak++;
    else break;
  }
  return streak;
}

/** Group entries by week label, ordered by each week's earliest date. */
export function weekGroups(ledger: Ledger): WeekGroup[] {
  const sorted = sortedByDate(ledger.entries);
  const order: string[] = [];
  const map = new Map<string, Entry[]>();
  for (const e of sorted) {
    if (!map.has(e.week)) {
      map.set(e.week, []);
      order.push(e.week);
    }
    map.get(e.week)!.push(e);
  }
  return order.map((week) => {
    const entries = map.get(week)!;
    return { week, entries, summary: summarize(entries) };
  });
}

export function weekSummary(ledger: Ledger, week: string): Summary {
  return summarize(ledger.entries.filter((e) => e.week === week));
}
