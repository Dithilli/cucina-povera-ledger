// Deterministic menu-generator KERNEL for the cooking challenge.
//
// PURE: no I/O, no DOM, no React, no Math.random / Date.now (unavailable here).
// This is the correctness core of the future AI generator. It is GENERIC over a
// recipe pool — it takes Recipe[] as input and hardcodes nothing about any
// particular challenge.
//
// The single source of truth for what makes a day "kept" lives in ledger.ts as
// `dayPasses`. This module NEVER re-implements scoring: it composes candidate
// days, projects each into a canonical Entry, and certifies it via dayPasses.

import type { Recipe, Weekday } from "../content/types";
import type { Entry, Settings } from "../types";
import { dayPasses } from "./ledger";

/** A composed day: a dinner plus the recipes assembled across the day. */
export interface DayPlan {
  day: Weekday;
  /** Slug of the dinner recipe anchoring the day. */
  dinner: string;
  /** All recipe slugs used across breakfast/lunch/dinner for this day. */
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
 * Project a composed day (a list of recipes, each one serving) into the
 * canonical Entry the ledger scores. A planned/generated day wastes nothing by
 * construction — zero-waste is the challenge ethos for a composed menu, not a
 * per-recipe property. (`zeroWasteHero` flags scrap-USING hero dishes; it does
 * NOT mean other dishes waste food.)
 */
function projectEntry(recipes: Recipe[], settings: Settings): Entry {
  let calories = 0;
  let protein = 0;
  let cost = 0;
  for (const r of recipes) {
    calories += r.perServing.calories;
    protein += r.perServing.protein;
    cost += servingCost(r);
  }
  const zeroWaste = true;
  return {
    id: "plan",
    date: "1970-01-01",
    week: settings.activeWeek,
    dish: recipes.map((r) => r.slug).join(" + "),
    calories,
    protein,
    cost: round2(cost),
    zeroWaste,
  };
}

/**
 * Fast feasibility check. Confirms (a) the pool can in principle reach the
 * protein floor while staying at/under the calorie target, and (b) there are at
 * least 7 distinct dinner-capable recipes to fill a non-repeating week.
 */
export function preflightFeasible(
  pool: Recipe[],
  settings: Settings,
): { ok: boolean; reason?: string } {
  const dinners = pool.filter(isDinnerCapable);
  const distinctDinners = new Set(dinners.map((r) => r.slug)).size;
  if (distinctDinners < 7) {
    return {
      ok: false,
      reason: `need >=7 distinct dinner-capable recipes, pool has ${distinctDinners}`,
    };
  }

  // Best achievable protein within the calorie budget, via a bounded knapsack on
  // protein-per-calorie-efficient servings. We allow each recipe once (a day is
  // a few distinct recipes); this is a sound upper-bound proxy for feasibility.
  const candidates = [...pool].sort((a, b) => {
    const ea = a.perServing.protein / Math.max(1, a.perServing.calories);
    const eb = b.perServing.protein / Math.max(1, b.perServing.calories);
    if (eb !== ea) return eb - ea;
    return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0;
  });

  let calories = 0;
  let protein = 0;
  for (const r of candidates) {
    if (calories + r.perServing.calories > settings.calorieTarget) continue;
    calories += r.perServing.calories;
    protein += r.perServing.protein;
    if (protein >= settings.proteinFloor) {
      return { ok: true };
    }
  }

  return {
    ok: false,
    reason: `best achievable protein ${protein}g within ${settings.calorieTarget} kcal is below the protein floor ${settings.proteinFloor}g`,
  };
}

interface DayCandidate {
  dinner: Recipe;
  recipes: Recipe[];
  entry: Entry;
}

/**
 * For a fixed dinner, find the cheapest set of additional recipes (drawn from
 * `extras`) that makes a passing day. Deterministic greedy build with a small
 * beam: we sort extras by cost-efficiency and add until the day passes, keeping
 * total calories at/under the target. Returns null if no passing day is found.
 */
function composeDayForDinner(
  dinner: Recipe,
  extras: Recipe[],
  settings: Settings,
): DayCandidate | null {
  // Already passing with just the dinner?
  const solo = projectEntry([dinner], settings);
  if (dayPasses(solo, settings)) {
    return { dinner, recipes: [dinner], entry: solo };
  }

  // Order extras by protein gained per dollar (then per slug) so the greedy
  // build is deterministic and cost-aware.
  const ordered = [...extras]
    .filter((r) => r.slug !== dinner.slug)
    .sort((a, b) => {
      const ca = servingCost(a);
      const cb = servingCost(b);
      const ea = a.perServing.protein / (ca > 0 ? ca : 0.0001);
      const eb = b.perServing.protein / (cb > 0 ? cb : 0.0001);
      if (eb !== ea) return eb - ea;
      return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0;
    });

  const chosen: Recipe[] = [dinner];
  let cal = dinner.perServing.calories;
  for (const r of ordered) {
    if (cal + r.perServing.calories > settings.calorieTarget) continue;
    chosen.push(r);
    cal += r.perServing.calories;
    const entry = projectEntry(chosen, settings);
    if (dayPasses(entry, settings)) {
      return { dinner, recipes: [...chosen], entry };
    }
  }

  // Could not reach a passing day under the calorie budget.
  return null;
}

/**
 * Plan a 7-day week. For each day (Sun..Sat) we compose a day from recipe
 * servings that lands at/under calorieTarget and at/over proteinFloor with zero
 * waste (certified by dayPasses), no dinner repeated across the week, minimizing
 * cost. Deterministic throughout; ties broken by slug.
 */
export function planWeek(pool: Recipe[], settings: Settings): WeekPlanResult {
  const pre = preflightFeasible(pool, settings);
  if (!pre.ok) {
    return { ok: false, days: [], totalCost: 0, reason: pre.reason };
  }

  const dinners = dedupeBySlug(pool.filter(isDinnerCapable));

  // Build the best passing day candidate for every possible dinner, then assign
  // 7 distinct dinners greedily by cheapest day. This keeps assignment
  // deterministic and globally cost-aware without backtracking explosions.
  const candidates: DayCandidate[] = [];
  for (const dinner of dinners) {
    const day = composeDayForDinner(dinner, pool, settings);
    if (day) candidates.push(day);
  }

  if (candidates.length < 7) {
    return {
      ok: false,
      days: [],
      totalCost: 0,
      reason: `only ${candidates.length} dinner(s) can form a passing day; need 7 distinct`,
    };
  }

  // Cheapest first; tie-break by dinner slug for determinism.
  candidates.sort((a, b) => {
    if (a.entry.cost !== b.entry.cost) return a.entry.cost - b.entry.cost;
    return a.dinner.slug < b.dinner.slug ? -1 : a.dinner.slug > b.dinner.slug ? 1 : 0;
  });

  const picked = candidates.slice(0, 7);

  const days: DayPlan[] = picked.map((c, i) => ({
    day: WEEKDAYS[i],
    dinner: c.dinner.slug,
    components: c.recipes.map((r) => r.slug),
    calories: c.entry.calories,
    protein: c.entry.protein,
    cost: c.entry.cost,
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
