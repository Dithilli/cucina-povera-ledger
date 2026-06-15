import type { Recipe } from "../types";

export const canhRauMuong: Recipe = {
  slug: "canh-rau-muong",
  title: "Canh Rau Muống",
  cuisine: "vietnamese",
  blurb:
    "The everyday water-spinach soup — a clear, almost free pot of greens and broth that finishes a rice dinner and uses the cheapest vegetable at the market.",
  servings: 4,
  perServing: { calories: 470, protein: 18 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    {
      item: "water spinach (rau muống), cut in 2-inch lengths",
      qty: "1 large bunch",
      cost: 1.2,
    },
    { item: "ground pork or dried shrimp (for the broth)", qty: "3 oz", cost: 1.0 },
    { item: "shallot, sliced", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "fish sauce", qty: "1 1/2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "garlic, smashed", qty: "1 clove", cost: 0.05, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "salt, white pepper, oil", qty: "to taste" },
  ],
  method: [
    "Sweat the shallot and garlic in a little oil, then add the ground pork (or dried shrimp) and break it up until it loses its raw color and smells savory.",
    "Pour in ~6 cups water, season with fish sauce, and simmer 5 minutes to build a light broth; skim any foam.",
    "Drop in the water spinach and cook just 2–3 minutes — stems first, leaves a moment later — until tender but still bright green.",
    "Taste, adjust with fish sauce or a pinch of salt and white pepper, and serve hot to wash down a rice dinner.",
  ],
  modernMove:
    "A spoon of ground pork or a few dried shrimp turns plain water into a real broth for almost nothing — and pulling the greens off the heat the second they wilt keeps the pot clear and green instead of khaki.",
  tags: ["soup", "canh", "water-spinach", "greens", "rice", "weeknight"],
  sources: [
    {
      title: "Vicky Pham — Water Spinach and Pork Noodle Soup (Canh Bún)",
      url: "https://vickypham.com/blog/vietnamese-water-spinach-pork-noodle-soup-canh-bun/",
      note: "Water spinach simmered in a light pork broth, a sister preparation to canh rau muống",
    },
    {
      title: "Wikipedia — Ipomoea aquatica (rau muống / water spinach)",
      url: "https://en.wikipedia.org/wiki/Ipomoea_aquatica",
      note: "Background: the cheap, fast-cooking green at the heart of the soup",
    },
  ],
};
