import type { Recipe } from "../types";

export const cannelliniSuFettunta: Recipe = {
  slug: "cannellini-su-fettunta",
  title: "Cannellini su Fettunta",
  cuisine: "italian",
  blurb:
    "Warm cannellini crushed onto garlic-rubbed grilled bread, crowned with a fried egg — bean-eater's open sandwich, a full meal on toast.",
  servings: 4,
  perServing: { calories: 450, protein: 22 },
  estCostPerServing: 1.15,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    {
      item: "cooked cannellini (warm, with a little liquid)",
      qty: "2 1/2 cups",
      cost: 0.95,
    },
    { item: "country bread, thick slices", qty: "4", cost: 0.5 },
    {
      item: "garlic cloves, halved",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "eggs", qty: "4", cost: 1.5 },
    {
      item: "fresh sage or rosemary",
      qty: "1 sprig",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "olive oil, chili flakes, salt, pepper",
      qty: "4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Warm the cannellini gently in olive oil with the herb and a little chili; lightly crush some for a spreadable texture. Season.",
    "Grill the bread, then rub each hot slice with a cut clove of garlic and drizzle with oil — this is the fettunta.",
    "Fry the eggs in olive oil until the whites are crisp at the edges and the yolks runny.",
    "Pile the crushed beans onto each fettunta, top with a fried egg, and finish with raw oil, chili, and pepper.",
  ],
  modernMove:
    "Crush only some of the beans so half spread into the toast and half stay whole — texture contrast under a runny yolk that sauces the whole thing.",
  tags: ["legumes", "beans", "eggs", "bread", "protein-forward"],
};
