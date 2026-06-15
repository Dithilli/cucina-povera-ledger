import type { Recipe } from "../types";

export const eggsBakedOverGreens: Recipe = {
  slug: "eggs-baked-over-greens",
  title: "Eggs Baked Over Wilted Greens",
  cuisine: "italian",
  blurb:
    "A bed of garlicky wilted greens with eggs nestled in and baked until the whites set and the yolks stay runny — green shakshuka's leaner cousin.",
  servings: 4,
  perServing: { calories: 320, protein: 18 },
  estCostPerServing: 1.4,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    {
      item: "greens (chard, spinach, escarole, or chicory), chopped",
      qty: "1 1/2 lb",
      cost: 2.5,
    },
    { item: "onion, sliced; garlic cloves", qty: "1 onion, 3 cloves", cost: 0.5 },
    { item: "eggs", qty: "8", cost: 3.0 },
    {
      item: "pecorino, grated",
      qty: "1/3 cup",
      cost: 0.85,
      spansWeeks: true,
    },
    {
      item: "olive oil, chili flakes, salt, pepper",
      qty: "3 tbsp oil",
      cost: 0.45,
      spansWeeks: true,
    },
  ],
  method: [
    "Soften the onion and garlic in oil with the chili. Add the greens and wilt down, seasoning well; cook off excess liquid so the base isn't watery.",
    "Spread the greens in an oven dish or oven-safe pan and make wells.",
    "Crack an egg into each well, scatter pecorino, and bake at 400°F (200°C) until the whites are just set and the yolks still loose, about 8–12 minutes.",
    "Finish with raw oil, more chili, and pepper. Serve with grilled bread.",
  ],
  modernMove:
    "Drive off the greens' water before the eggs go in, and pull the dish while the yolks are still soft — bake for the egg, not the greens.",
  tags: ["eggs", "greens", "baked", "one-pan", "protein-forward"],
};
