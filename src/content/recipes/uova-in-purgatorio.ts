import type { Recipe } from "../types";

export const uovaInPurgatorio: Recipe = {
  slug: "uova-in-purgatorio",
  title: "Uova in Purgatorio",
  cuisine: "italian",
  blurb:
    "Eggs poached in tomato — Italian shakshuka. Cheap, protein-forward, and a crowd-pleaser with grilled bread.",
  servings: 4,
  perServing: {
    calories: 400,
    protein: 18,
  },
  estCostPerServing: 2.0,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    {
      item: "onion, finely diced; garlic cloves, sliced",
      qty: "1 onion; 3 cloves",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "tomato sugo (or 1 can tomatoes, long-cooked)",
      qty: "3 cups",
      cost: 2.5,
    },
    {
      item: "chili flakes",
      qty: "1/2 tsp",
      spansWeeks: true,
    },
    {
      item: "eggs",
      qty: "8",
      cost: 3.0,
    },
    {
      item: "Pecorino, basil or parsley",
      qty: "to finish",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "Olive oil; grilled garlic-rubbed bread to serve",
      qty: "to serve",
      cost: 1.5,
      spansWeeks: true,
    },
  ],
  method: [
    "Build a soffritto-deep sugo: soften the onion and garlic in oil with the chili, add the tomato, and simmer until silky.",
    "Make wells and crack in the eggs. Cover and cook gently until the whites set and the yolks stay loose.",
    "Shower with pecorino and herbs. Serve straight from the pan with grilled bread.",
  ],
  modernMove:
    "Long-cook the sugo first so it's glossy and sweet before the eggs go in — the sauce, not the egg, is the star.",
  tags: ["eggs", "tomato", "one-pot", "protein-forward", "shakshuka"],
};
