// Deterministic menu-generator KERNEL for the cooking challenge.
//
// PURE: no I/O, no DOM, no React, no Math.random / Date.now (unavailable here).
// This is the correctness core of the future AI generator. It is GENERIC over a
// recipe pool — it takes Recipe[] as input and hardcodes nothing about any
// particular challenge.
//
// The single source of truth for what makes a night "kept" lives in ledger.ts
// as `mealPasses`. This module NEVER re-implements scoring: it projects each
// candidate dinner into a canonical Entry and certifies it via mealPasses.
//
// The challenge is one cucina povera dinner a night, so a "day" in the plan is
// just that night's dinner — one meal, not a stacked full day. Dinners are
// ranked cheapest-first (cost is the cucina povera target).

import type { Recipe, Weekday } from "../content/types";
import type { Entry, Settings } from "../types";
import { mealPasses } from "./ledger";

/** A planned night: the dinner that anchors it. */
export interface DayPlan {
  day: Weekday;
  /** Slug of the dinner recipe for this night. */
  dinner: string;
  /** Recipe slugs used (just the dinner — kept as an array for API stability). */
  components: string[];
  calories: number;
  protein: number;
  cost: number;
}

export interface WeekPlanResult {
  ok: boolean;
  days: DayPlan[];
  totalCost: number;
  /** The binding constraint, populated when !ok. */
  reason?: string;
}

const WEEKDAYS: readonly Weekday[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Cost of one serving of a recipe; recipes without an estimate count as free. */
function servingCost(r: Recipe): number {
  return r.estCostPerServing ?? 0;
}

function isDinnerCapable(r: Recipe): boolean {
  return r.roles.includes("dinner");
}

/**
 * Project a single dinner (one serving) into the canonical Entry the ledger
 * scores. A planned dinner wastes nothing by construction — zero-waste is the
 * challenge ethos for a composed menu, not a per-recipe property.
 */
function projectEntry(dinner: Recipe, settings: Settings): Entry {
  return {
    id: "plan",
    date: "1970-01-01",
    week: settings.activeWeek,
    dish: dinner.slug,
    calories: dinner.perServing.calories,
    protein: dinner.perServing.protein,
    cost: round2(servingCost(dinner)),
    zeroWaste: true,
  };
}

/**
 * Fast feasibility check: there must be at least 7 distinct dinner-capable
 * recipes to fill a non-repeating week. Macros and cost no longer gate (they're
 * targets, not requirements), so any dinner can anchor a night.
 */
export function preflightFeasible(
  pool: Recipe[],
  _settings?: Settings,
): { ok: boolean; reason?: string } {
  const dinners = pool.filter(isDinnerCapable);
  const distinctDinners = new Set(dinners.map((r) => r.slug)).size;
  if (distinctDinners < 7) {
    return {
      ok: false,
      reason: `need >=7 distinct dinner-capable recipes, pool has ${distinctDinners}`,
    };
  }
  return { ok: true };
}

/** One valid candidate night (no weekday assigned yet), certified by mealPasses. */
export interface CandidateDay {
  /** Slug of the dinner recipe for this night. */
  dinner: string;
  /** Recipe slugs used (just the dinner). */
  components: string[];
  calories: number;
  protein: number;
  cost: number;
}

/**
 * Every dinner that can anchor a kept night, cheapest first (ties by slug).
 * This is the deterministic candidate set the AI stylist chooses among — the
 * model selects and sequences 7 of these; it never invents macros or cost.
 */
export function weekCandidates(
  pool: Recipe[],
  settings: Settings,
): { ok: boolean; candidates: CandidateDay[]; reason?: string } {
  const pre = preflightFeasible(pool, settings);
  if (!pre.ok) return { ok: false, candidates: [], reason: pre.reason };

  const dinners = dedupeBySlug(pool.filter(isDinnerCapable));
  const built = dinners
    .map((dinner) => ({ dinner, entry: projectEntry(dinner, settings) }))
    .filter(({ entry }) => mealPasses(entry, settings));

  if (built.length < 7) {
    return {
      ok: false,
      candidates: [],
      reason: `only ${built.length} dinner(s) can anchor a kept night; need 7 distinct`,
    };
  }

  built.sort((a, b) => {
    if (a.entry.cost !== b.entry.cost) return a.entry.cost - b.entry.cost;
    return a.dinner.slug < b.dinner.slug ? -1 : a.dinner.slug > b.dinner.slug ? 1 : 0;
  });

  const candidates: CandidateDay[] = built.map(({ dinner, entry }) => ({
    dinner: dinner.slug,
    components: [dinner.slug],
    calories: entry.calories,
    protein: entry.protein,
    cost: entry.cost,
  }));

  return { ok: true, candidates };
}

/**
 * Plan a 7-night week deterministically: take the 7 cheapest kept dinners and
 * assign them Sun..Sat. No dinner repeats; every night certified by mealPasses
 * (inside weekCandidates). Ties broken by slug throughout.
 */
export function planWeek(pool: Recipe[], settings: Settings): WeekPlanResult {
  const res = weekCandidates(pool, settings);
  if (!res.ok) return { ok: false, days: [], totalCost: 0, reason: res.reason };

  const picked = res.candidates.slice(0, 7);
  const days: DayPlan[] = picked.map((c, i) => ({
    day: WEEKDAYS[i],
    dinner: c.dinner,
    components: c.components,
    calories: c.calories,
    protein: c.protein,
    cost: c.cost,
  }));

  const totalCost = round2(days.reduce((a, d) => a + d.cost, 0));
  return { ok: true, days, totalCost };
}

function dedupeBySlug(recipes: Recipe[]): Recipe[] {
  const seen = new Set<string>();
  const out: Recipe[] = [];
  for (const r of [...recipes].sort((a, b) =>
    a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0,
  )) {
    if (seen.has(r.slug)) continue;
    seen.add(r.slug);
    out.push(r);
  }
  return out;
}
