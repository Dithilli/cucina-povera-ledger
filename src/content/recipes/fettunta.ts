import type { Recipe } from "../types";

export const fettunta: Recipe = {
  slug: "fettunta",
  title: "Fettunta",
  cuisine: "italian",
  blurb:
    "Tuscan garlic bread in its original, naked form — grilled bread rubbed with raw garlic and drenched in new-harvest olive oil.",
  servings: 4,
  perServing: { calories: 260, protein: 6 },
  estCostPerServing: 0.45,
  roles: ["side", "breakfast"],
  ingredients: [
    {
      item: "country bread, thick slices",
      qty: "8 slices",
      cost: 1.0,
    },
    {
      item: "garlic cloves, halved",
      qty: "4",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "new-harvest extra-virgin olive oil (the good stuff)",
      qty: "6 tbsp",
      cost: 1.2,
      spansWeeks: true,
    },
    {
      item: "flaky salt",
      qty: "to finish",
      spansWeeks: true,
    },
  ],
  method: [
    "Grill or toast the bread over a flame (or in a very hot oven) until charred at the edges and crisp.",
    "While still hot, rub each slice firmly with a cut clove of garlic — the toast acts as a grater.",
    "Drench generously with the best olive oil you have so it soaks in.",
    "Finish with flaky salt and eat immediately, while warm.",
  ],
  modernMove:
    "Use a genuinely good, peppery new-harvest oil and apply it while the bread is hot — this is the dish where the precious thread of the pantry actually becomes the meal.",
  notes:
    "The base for crostini and cannellini su fettunta; also the bread to serve alongside any of the week's soups.",
  tags: ["bread", "garlic", "olive-oil", "quick", "side"],
};
