import type { Recipe } from "../types";

export const tumisKangkung: Recipe = {
  slug: "tumis-kangkung",
  title: "Tumis Kangkung",
  cuisine: "indonesian",
  blurb:
    "Water spinach stir-fried hard and fast with garlic, chili, and a hit of shrimp paste — the cheapest green turned into something you fight over.",
  servings: 4,
  perServing: { calories: 460, protein: 17 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "water spinach (kangkung), cut into 2-inch lengths",
      qty: "1 large bunch (~12 oz)",
      cost: 1.2,
    },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "shallots, sliced", qty: "3", cost: 0.3 },
    { item: "red chilies, sliced", qty: "3", cost: 0.25, spansWeeks: true },
    {
      item: "shrimp paste (terasi) — or fermented soybean paste to keep it vegetarian",
      qty: "1 tsp",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "sweet soy sauce (kecap manis)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "oyster or soy sauce", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "firm tofu, cubed and fried (optional, to make it a full dinner)", qty: "8 oz", cost: 0.8 },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
  ],
  method: [
    "Wash the kangkung well and keep the stems separate from the leaves — the hollow stems take longer.",
    "Get the oil smoking hot, then fry the garlic, shallots, chilies, and crumbled shrimp paste for a few seconds until it screams.",
    "Throw in the stems first and toss over the highest heat, then the leaves, kecap manis, and oyster/soy sauce. Keep everything moving.",
    "Pull it off the heat the instant the leaves wilt but the stems still snap — overcooked kangkung turns to slime. Add fried tofu to round it into dinner; serve with rice.",
  ],
  modernMove:
    "Splitting stems from leaves and cooking over violent heat for under two minutes keeps the stems crisp and the leaves green — the wok's roar (wok hei) is the seasoning.",
  tags: ["greens", "stir-fry", "kangkung", "sambal", "fast", "side"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/kangkung-tumis-terasi.html", note: "water spinach stir-fried hard with garlic, chili, and toasted terasi" },
    { title: "Wikipedia — Stir-fried water spinach", url: "https://en.wikipedia.org/wiki/Stir-fried_water_spinach", note: "Indonesian tumis kangkung / kangkung terasi with shrimp paste" },
  ],
};
