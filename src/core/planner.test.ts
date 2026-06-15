import { describe, it, expect } from "vitest";
import { planWeek, preflightFeasible } from "./planner";
import type { DayPlan } from "./planner";
import { dayPasses } from "./ledger";
import type { Entry, Settings } from "../types";
import type { Recipe } from "../content/types";

// Inline fixture pool — deliberately NOT importing real content, so the kernel's
// genericity is exercised against synthetic recipes.

const recipe = (over: Partial<Recipe> & Pick<Recipe, "slug">): Recipe => ({
  title: over.slug,
  cuisine: "italian",
  blurb: "",
  servings: 4,
  perServing: { calories: 500, protein: 20 },
  estCostPerServing: 1,
  roles: ["dinner"],
  ingredients: [],
  method: [],
  tags: [],
  ...over,
});

// 10 zero-waste-hero recipes. Each ~700 kcal / 38g protein per serving means a
// single dinner serving already clears protein at/under the calorie target, so
// every dinner can anchor a passing day on its own.
const POOL: Recipe[] = [
  recipe({ slug: "alpha", perServing: { calories: 700, protein: 40 }, estCostPerServing: 1.2, zeroWasteHero: true }),
  recipe({ slug: "bravo", perServing: { calories: 720, protein: 42 }, estCostPerServing: 0.9, zeroWasteHero: true }),
  recipe({ slug: "charlie", perServing: { calories: 680, protein: 38 }, estCostPerServing: 1.5, zeroWasteHero: true }),
  recipe({ slug: "delta", perServing: { calories: 750, protein: 45 }, estCostPerServing: 1.1, zeroWasteHero: true }),
  recipe({ slug: "echo", perServing: { calories: 690, protein: 39 }, estCostPerServing: 0.8, zeroWasteHero: true }),
  recipe({ slug: "foxtrot", perServing: { calories: 710, protein: 41 }, estCostPerServing: 1.3, zeroWasteHero: true }),
  recipe({ slug: "golf", perServing: { calories: 700, protein: 40 }, estCostPerServing: 1.0, zeroWasteHero: true }),
  recipe({ slug: "hotel", perServing: { calories: 730, protein: 43 }, estCostPerServing: 1.4, zeroWasteHero: true }),
  recipe({ slug: "india", perServing: { calories: 660, protein: 37 }, estCostPerServing: 0.7, zeroWasteHero: true }),
  recipe({ slug: "juliet", perServing: { calories: 740, protein: 44 }, estCostPerServing: 1.6, zeroWasteHero: true }),
];

const SETTINGS: Settings = {
  calorieTarget: 2000,
  proteinFloor: 35,
  weeklyBudget: 50,
  activeWeek: "Week 1 — Test",
};

const asEntry = (d: DayPlan): Entry => ({
  id: d.dinner,
  date: "1970-01-01",
  week: SETTINGS.activeWeek,
  dish: d.components.join(" + "),
  calories: d.calories,
  protein: d.protein,
  cost: d.cost,
  // Mirror the planner's projection: zeroWaste only when all components are heroes.
  zeroWaste: d.components.every((slug) => POOL.find((r) => r.slug === slug)?.zeroWasteHero === true),
});

describe("preflightFeasible", () => {
  it("passes for a healthy pool", () => {
    expect(preflightFeasible(POOL, SETTINGS).ok).toBe(true);
  });

  it("fails when fewer than 7 dinner-capable recipes", () => {
    const tiny = POOL.slice(0, 5);
    const res = preflightFeasible(tiny, SETTINGS);
    expect(res.ok).toBe(false);
    expect(res.reason).toMatch(/7 distinct dinner/);
  });

  it("fails when protein floor is unreachable in the calorie budget", () => {
    const res = preflightFeasible(POOL, { ...SETTINGS, proteinFloor: 9999 });
    expect(res.ok).toBe(false);
    expect(res.reason).toMatch(/protein floor/);
  });
});

describe("planWeek", () => {
  it("(1) every day passes dayPasses and no dinner repeats", () => {
    const res = planWeek(POOL, SETTINGS);
    expect(res.ok).toBe(true);
    expect(res.days).toHaveLength(7);

    for (const d of res.days) {
      expect(dayPasses(asEntry(d), SETTINGS)).toBe(true);
    }

    const dinners = res.days.map((d) => d.dinner);
    expect(new Set(dinners).size).toBe(7);
  });

  it("(2) totalCost equals the sum of day costs", () => {
    const res = planWeek(POOL, SETTINGS);
    expect(res.ok).toBe(true);
    const sum = Math.round(res.days.reduce((a, d) => a + d.cost, 0) * 100) / 100;
    expect(res.totalCost).toBe(sum);
  });

  it("(3) an impossible (low-protein) pool returns ok:false with a reason", () => {
    const lowProtein: Recipe[] = POOL.map((r) =>
      recipe({ ...r, perServing: { calories: 800, protein: 5 } }),
    );
    const res = planWeek(lowProtein, SETTINGS);
    expect(res.ok).toBe(false);
    expect(res.reason).toBeTruthy();
    expect(res.days).toHaveLength(0);
  });

  it("(4) determinism: two calls yield identical results", () => {
    const a = planWeek(POOL, SETTINGS);
    const b = planWeek(POOL, SETTINGS);
    expect(a).toEqual(b);
  });

  it("picks the cheapest 7 dinners when more than 7 are available", () => {
    const res = planWeek(POOL, SETTINGS);
    expect(res.ok).toBe(true);
    // The two most expensive single-serving dinners (juliet 1.6, hotel 1.4)
    // should be dropped in favor of cheaper ones.
    const dinners = new Set(res.days.map((d) => d.dinner));
    expect(dinners.has("juliet")).toBe(false);
  });
});
