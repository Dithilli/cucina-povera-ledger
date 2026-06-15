import type { Recipe } from "../types";

export const palakPaneer: Recipe = {
  slug: "palak-paneer",
  title: "Palak Paneer",
  cuisine: "north-indian",
  blurb:
    "Soft paneer in a bright, smooth spinach gravy — a whole bunch of cheap greens carried by a modest handful of cheese.",
  servings: 4,
  perServing: { calories: 480, protein: 21 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  ingredients: [
    { item: "paneer, cut in cubes", qty: "6 oz", cost: 2.0 },
    { item: "spinach (fresh or frozen), washed", qty: "1 lb", cost: 1.3 },
    { item: "onion, finely chopped", qty: "1 medium", cost: 0.3 },
    { item: "tomato, chopped", qty: "1 medium", cost: 0.35 },
    { item: "garlic + ginger, grated", qty: "1 tbsp each", cost: 0.3, spansWeeks: true },
    { item: "green chili", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric, coriander powder, garam masala", qty: "to taste", cost: 0.25, spansWeeks: true },
    { item: "neutral oil or ghee", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "plain yogurt or a splash of milk to finish (optional)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Blanch the spinach 60 seconds in boiling water, then plunge into cold water — this fixes the green color so the gravy stays vivid instead of muddy. Drain and blend to a coarse purée with the green chili.",
    "Pan-fry the paneer cubes lightly until just golden, then rest them in warm water so they stay tender.",
    "Bloom cumin in the oil, soften the onion to golden, add ginger-garlic for a minute, then the tomato and ground spices. Cook until the oil separates and the masala is thick.",
    "Stir in the spinach purée and a little water, simmer 5–7 minutes so the rawness cooks off. Fold in the paneer and warm through.",
    "Off the heat, swirl in a spoon of yogurt or milk for body, finish with garam masala, and serve with roti or rice.",
  ],
  modernMove:
    "Blanch-and-shock the spinach instead of stewing it — keeping the green bright and the cooking brief is what separates a fresh palak from a dull khaki one.",
  tags: ["paneer", "spinach", "greens", "vegetarian", "north-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/palak-paneer/",
      note: "Blanch-and-shock the spinach to keep the gravy bright green; paneer in spinach gravy",
    },
    {
      title: "Palak paneer — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Palak_paneer",
      note: "Background on the spinach-and-paneer dish",
    },
  ],
};
