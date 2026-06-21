import type { Recipe } from "../types";

export const huevosALaMexicana: Recipe = {
  slug: "huevos-a-la-mexicana",
  title: "Huevos a la Mexicana",
  cuisine: "mexican",
  blurb:
    "Eggs scrambled with the three colors of the flag — white onion, green chile, red tomato. The fastest, cheapest way to clear the protein floor before the day starts.",
  servings: 2,
  perServing: { calories: 290, protein: 18 },
  estCostPerServing: 0.87,
  roles: ["breakfast"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "tomato, finely diced", qty: "1", cost: 0.4 },
    { item: "white onion, finely diced", qty: "1/4", cost: 0.15 },
    { item: "serrano or jalapeño, minced", qty: "1", cost: 0.2 },
    { item: "oil or a little lard", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion and chile in the hot fat, then add the tomato and cook until it loses its raw edge.",
    "Beat the eggs with salt, pour in, and fold gently over medium heat.",
    "Pull them off while still soft and glossy.",
    "Eat with warm tortillas and a spoon of beans for the complete plate.",
  ],
  modernMove:
    "Cook the vegetables down to concentrate them before the eggs go in, and take the eggs off the heat a beat early — carryover finishes them soft instead of dry.",
  tags: ["eggs", "breakfast", "protein", "quick", "tomato"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Huevos a la Mexicana",
      url: "https://www.mexicoinmykitchen.com/mexican-style-scrambled-eggs/",
      note: "Eggs scrambled with tomato, white onion, and serrano — the three flag colors.",
    },
  ],
};
