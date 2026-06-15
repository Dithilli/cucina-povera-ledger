import type { Recipe } from "../types";

export const frittataDiPatate: Recipe = {
  slug: "frittata-di-patate",
  title: "Frittata di Patate",
  cuisine: "italian",
  blurb:
    "Potato frittata — soft, slow-cooked potatoes and onion bound in egg, the most filling and forgiving egg dish in the canon.",
  servings: 4,
  perServing: { calories: 380, protein: 17 },
  estCostPerServing: 1.05,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    {
      item: "potatoes, peeled and thinly sliced",
      qty: "1 lb",
      cost: 0.7,
    },
    { item: "onion, thinly sliced", qty: "1", cost: 0.3 },
    { item: "eggs", qty: "6", cost: 2.25 },
    {
      item: "pecorino or Parmesan, grated",
      qty: "1/3 cup",
      cost: 0.85,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt, pepper, parsley",
      qty: "4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Cook the potatoes and onion gently in plenty of olive oil, covered, until completely tender and lightly golden — don't rush this.",
    "Beat the eggs with the cheese, parsley, salt, and pepper. Fold in the warm potatoes.",
    "Return everything to the pan over low heat. Cook slowly until the bottom is set and golden.",
    "Flip onto a plate and slide back to set the second side, keeping the center just custardy. Rest, then cut into wedges.",
  ],
  modernMove:
    "Stew the potatoes soft in oil first, almost confit, so the finished frittata is creamy inside rather than dry — the potatoes carry the texture.",
  zeroWasteHero: true,
  tags: ["eggs", "potato", "one-pan", "protein-forward", "leftovers"],
};
