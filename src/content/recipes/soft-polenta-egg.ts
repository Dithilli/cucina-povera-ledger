import type { Recipe } from "../types";

export const softPolentaEgg: Recipe = {
  slug: "soft-polenta-egg",
  title: "Soft Polenta with a Runny Egg",
  cuisine: "italian",
  blurb:
    "Loose, buttery polenta topped with a soft-fried or poached egg and a snow of pecorino — the runny yolk is the sauce.",
  servings: 4,
  perServing: { calories: 420, protein: 17 },
  estCostPerServing: 0.85,
  roles: ["breakfast", "dinner", "lunch"],
  ingredients: [
    {
      item: "coarse polenta (cornmeal)",
      qty: "1 1/2 cups",
      cost: 0.6,
    },
    { item: "eggs", qty: "4", cost: 1.5 },
    {
      item: "pecorino, grated",
      qty: "1/2 cup",
      cost: 1.3,
      spansWeeks: true,
    },
    {
      item: "butter or olive oil",
      qty: "2 tbsp",
      cost: 0.35,
      spansWeeks: true,
    },
    {
      item: "chili flakes, salt, pepper",
      qty: "to taste",
      spansWeeks: true,
    },
  ],
  method: [
    "Cook the polenta in salted simmering water, stirring, 30–40 minutes until soft. Keep it loose — beat in the butter and most of the pecorino.",
    "Fry or poach the eggs so the yolks stay runny.",
    "Pool the polenta into bowls and set an egg on each.",
    "Finish with the rest of the pecorino, chili, and pepper. Break the yolk so it runs into the polenta.",
  ],
  modernMove:
    "Treat the runny yolk as the sauce: keep the polenta a touch under-seasoned and looser than feels right, so the yolk and cheese finish it at the table.",
  tags: ["polenta", "eggs", "quick", "protein-forward", "comfort"],
};
