import type { Recipe } from "../types";

export const daingNaBangus: Recipe = {
  slug: "daing-na-bangus",
  title: "Daing na Bangus",
  cuisine: "filipino",
  blurb:
    "Milkfish butterflied and marinated in vinegar, garlic, and pepper, then fried until the skin is lacquered and crisp — a frugal way to make one fish feed the family, sour-sharp and savory over rice.",
  servings: 4,
  perServing: { calories: 560, protein: 33 },
  estCostPerServing: 1.25,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    {
      item: "bangus (milkfish), split and butterflied, scaled",
      qty: "1 large (about 1 1/2 lb)",
      cost: 3.5,
    },
    { item: "cane or white vinegar", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    { item: "garlic cloves, crushed", qty: "6", cost: 0.3, spansWeeks: true },
    { item: "whole black peppercorns, cracked", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "1 1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "neutral oil for frying", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "steamed rice and sliced tomato, to serve", qty: "to serve", cost: 0.8 },
  ],
  method: [
    "Lay the butterflied bangus flesh-up in a dish. Mix vinegar, crushed garlic, cracked pepper, bay leaf, and salt, and pour it over so the fish is bathed. Marinate skin-side up in the fridge at least 3 hours, ideally overnight — the acid firms the flesh and cures it.",
    "Lift the fish out and pat it very dry, scraping off the loose garlic and pepper so they don't burn. Drying it is what lets the skin crisp instead of steam.",
    "Heat oil until shimmering and lay the fish skin-side down. Fry undisturbed until the skin is deep golden and crackling, then flip and cook the flesh side just until set.",
    "Drain and serve hot with rice and fresh sliced tomato, with a little spiced vinegar on the side.",
  ],
  modernMove:
    "The vinegar–garlic–pepper marinade does double duty — it lightly cures and preserves the fish (the original point of 'daing') while seasoning it through, so a thorough pat-dry and hot fry give you crackling skin without any breading.",
  tags: ["fish", "milkfish", "bangus", "marinated", "fried", "vinegar"],
};
