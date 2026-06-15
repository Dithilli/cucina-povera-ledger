import { describe, it, expect } from "vitest";
import type { Recipe, IngredientLine, ShoppingItem } from "../content/types";
import {
  buildShoppingList,
  shoppingListFromAuthored,
  categorizeItem,
  extractRecipeSlugs,
  shoppingListToText,
} from "./shopping";

function recipe(slug: string, ingredients: IngredientLine[]): Recipe {
  return {
    slug,
    title: slug,
    cuisine: "test",
    blurb: "",
    servings: 4,
    perServing: { calories: 500, protein: 20 },
    roles: ["dinner"],
    ingredients,
    method: [],
    tags: [],
  };
}

describe("categorizeItem", () => {
  it("buckets common items into the right aisle", () => {
    expect(categorizeItem("red onion, finely chopped")).toBe("Produce");
    expect(categorizeItem("bone-in chicken pieces")).toBe("Protein & Eggs");
    expect(categorizeItem("split red lentils (dry)")).toBe("Beans, Grains & Pasta");
    expect(categorizeItem("queso fresco, crumbled")).toBe("Dairy");
    expect(categorizeItem("corn tortillas")).toBe("Bread & Tortillas");
    expect(categorizeItem("extra-virgin olive oil")).toBe("Pantry & Spices");
  });

  it("prefers pantry compounds over a produce look-alike", () => {
    // "tomato paste" contains "tomato" but must read as pantry, not produce
    expect(categorizeItem("tomato paste")).toBe("Pantry & Spices");
    expect(categorizeItem("fish sauce")).toBe("Pantry & Spices");
  });

  it("falls back to Other", () => {
    expect(categorizeItem("xyzzy")).toBe("Other");
  });
});

describe("buildShoppingList", () => {
  const a = recipe("a", [
    { item: "red onion, finely chopped", qty: "2 large", cost: 1.0 },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ]);
  const b = recipe("b", [
    { item: "red onion", qty: "1 small", cost: 0.5 },
    { item: "olive oil", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "chicken thighs", qty: "1 lb", cost: 3.0 },
  ]);

  it("merges the same item across dishes, summing cost and collating quantities", () => {
    const list = buildShoppingList([a, b]);
    const onion = list.lines.find((l) => l.key === "red onion");
    expect(onion).toBeTruthy();
    expect(onion!.cost).toBe(1.5); // 1.0 + 0.5
    expect(onion!.quantities).toEqual(["2 large", "1 small"]);
    expect(onion!.fromDishes.sort()).toEqual(["a", "b"]);
    expect(onion!.pantry).toBe(false);
  });

  it("marks an item pantry only when every use is a spans-weeks staple", () => {
    const list = buildShoppingList([a, b]);
    const oil = list.lines.find((l) => l.key === "olive oil")!;
    expect(oil.pantry).toBe(true);
    expect(oil.cost).toBe(0.7);
  });

  it("computes total / fresh / pantry splits", () => {
    const list = buildShoppingList([a, b]);
    // fresh: onion 1.5 + chicken 3.0 = 4.5 ; pantry: oil 0.7 + salt 0 = 0.7
    expect(list.freshCost).toBe(4.5);
    expect(list.pantryCost).toBe(0.7);
    expect(list.totalCost).toBe(5.2);
    expect(list.dishCount).toBe(2);
  });

  it("de-duplicates a recipe used on multiple nights (one batch of shopping)", () => {
    const list = buildShoppingList([a, a, a]);
    expect(list.dishCount).toBe(1);
    const onion = list.lines.find((l) => l.key === "red onion")!;
    expect(onion.cost).toBe(1.0); // counted once, not 3×
  });

  it("sorts produce before pantry", () => {
    const list = buildShoppingList([a, b]);
    const cats = list.lines.map((l) => l.category);
    expect(cats.indexOf("Produce")).toBeLessThan(cats.indexOf("Pantry & Spices"));
  });
});

describe("shoppingListFromAuthored", () => {
  it("preserves authored quantity, note, and pantry flag", () => {
    const items: ShoppingItem[] = [
      { item: "Ivory teff flour", qty: "~3 lb", cost: 9.0, note: "the precious thread" },
      { item: "Berbere spices", qty: "a batch", cost: 4.0, spansWeeks: true },
    ];
    const list = shoppingListFromAuthored(items);
    const teff = list.lines.find((l) => l.item === "Ivory teff flour")!;
    expect(teff.note).toBe("the precious thread");
    expect(teff.quantities).toEqual(["~3 lb"]);
    const berbere = list.lines.find((l) => l.item === "Berbere spices")!;
    expect(berbere.pantry).toBe(true);
    expect(list.totalCost).toBe(13.0);
    expect(list.dishCount).toBe(0);
  });
});

describe("extractRecipeSlugs", () => {
  const slugs = ["misir-wot", "shiro-wot", "salsa-roja-asada", "salsa-verde", "ful"];
  it("finds embedded slugs, longest-first, de-duplicated, in order", () => {
    expect(extractRecipeSlugs("misir-wot over injera with a spoon of shiro-wot", slugs)).toEqual([
      "misir-wot",
      "shiro-wot",
    ]);
    expect(extractRecipeSlugs("tacos with salsa-roja-asada and salsa-verde", slugs)).toEqual([
      "salsa-roja-asada",
      "salsa-verde",
    ]);
  });
  it("does not match a slug inside a larger word", () => {
    expect(extractRecipeSlugs("a handful of nothing", slugs)).toEqual([]);
  });
  it("returns empty for an empty slug set", () => {
    expect(extractRecipeSlugs("misir-wot", [])).toEqual([]);
  });
});

describe("shoppingListToText", () => {
  it("renders aisles, checkboxes, and a totals footer", () => {
    const a = recipe("a", [
      { item: "red onion", qty: "2 large", cost: 1.0 },
      { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    ]);
    const text = shoppingListToText(buildShoppingList([a]), "Week 1");
    expect(text).toContain("Week 1");
    expect(text).toContain("Produce:");
    expect(text).toContain("[ ] red onion");
    expect(text).toContain("Total $1.40");
    expect(text).toContain("[pantry]");
  });
});
