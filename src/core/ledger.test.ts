import { describe, it, expect } from "vitest";
import {
  defaultLedger,
  validateEntry,
  upsertEntry,
  removeEntry,
  mealPasses,
  summarize,
  currentStreak,
  weekGroups,
  makeId,
} from "./ledger";
import type { Entry } from "../types";

const entry = (over: Partial<Entry> = {}): Entry => ({
  id: makeId(),
  date: "2026-06-14",
  week: "Week 1 — Pasta",
  dish: "pasta e ceci",
  calories: 1900,
  protein: 105,
  cost: 7.5,
  zeroWaste: true,
  ...over,
});

describe("validateEntry", () => {
  it("accepts a well-formed entry", () => {
    expect(validateEntry(entry()).ok).toBe(true);
  });
  it("rejects a bad date", () => {
    const r = validateEntry(entry({ date: "14/06/2026" }));
    expect(r.ok).toBe(false);
    expect(r.errors.join()).toMatch(/date/);
  });
  it("rejects negative numbers", () => {
    expect(validateEntry(entry({ cost: -1 })).ok).toBe(false);
  });
});

describe("upsertEntry / removeEntry", () => {
  it("appends new and replaces existing by id", () => {
    const l0 = defaultLedger();
    const e = entry();
    const l1 = upsertEntry(l0, e);
    expect(l1.entries).toHaveLength(1);
    const l2 = upsertEntry(l1, { ...e, dish: "changed" });
    expect(l2.entries).toHaveLength(1);
    expect(l2.entries[0].dish).toBe("changed");
    const l3 = removeEntry(l2, e.id);
    expect(l3.entries).toHaveLength(0);
  });
  it("does not mutate the input ledger", () => {
    const l0 = defaultLedger();
    upsertEntry(l0, entry());
    expect(l0.entries).toHaveLength(0);
  });
});

describe("mealPasses", () => {
  const s = defaultLedger().settings;
  it("passes a kept night (cooked + zero waste)", () => {
    expect(mealPasses(entry(), s)).toBe(true);
  });
  it("ignores calories — a target, not a gate", () => {
    expect(mealPasses(entry({ calories: 5000 }), s)).toBe(true);
  });
  it("ignores protein — a target, not a gate", () => {
    expect(mealPasses(entry({ protein: 0 }), s)).toBe(true);
  });
  it("ignores cost — a target, not a gate", () => {
    expect(mealPasses(entry({ cost: 999 }), s)).toBe(true);
  });
  it("fails when waste occurred", () => {
    expect(mealPasses(entry({ zeroWaste: false }), s)).toBe(false);
  });
});

describe("summarize", () => {
  it("computes efficiency stats", () => {
    const s = summarize([
      entry({ cost: 8, calories: 2000, protein: 100 }),
      entry({ cost: 4, calories: 2000, protein: 100 }),
    ]);
    expect(s.cost).toBe(12);
    expect(s.costPerKcal).toBe(3); // 12 / (4000/1000)
    expect(s.costPerProtein).toBe(6); // 12 / (200/100)
    expect(s.avgCalories).toBe(2000);
  });
  it("returns null efficiency when nothing logged", () => {
    const s = summarize([]);
    expect(s.costPerKcal).toBeNull();
    expect(s.costPerProtein).toBeNull();
  });
});

describe("currentStreak", () => {
  it("counts trailing kept nights and stops at a miss", () => {
    let l = defaultLedger();
    l = upsertEntry(l, entry({ date: "2026-06-10", zeroWaste: false })); // miss: wasted food
    l = upsertEntry(l, entry({ date: "2026-06-11" }));
    l = upsertEntry(l, entry({ date: "2026-06-12" }));
    expect(currentStreak(l)).toBe(2);
  });
});

describe("weekGroups", () => {
  it("groups by week in date order", () => {
    let l = defaultLedger();
    l = upsertEntry(l, entry({ date: "2026-06-14", week: "Week 1 — Pasta" }));
    l = upsertEntry(l, entry({ date: "2026-06-21", week: "Week 4 — Legumes" }));
    const g = weekGroups(l);
    expect(g.map((x) => x.week)).toEqual(["Week 1 — Pasta", "Week 4 — Legumes"]);
  });
});
