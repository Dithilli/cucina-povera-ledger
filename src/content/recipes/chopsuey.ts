import type { Recipe } from "../types";

export const chopsuey: Recipe = {
  slug: "chopsuey",
  title: "Chopsuey",
  cuisine: "filipino",
  blurb:
    "The Filipino-Chinese sautéed vegetable medley — cabbage, carrots, snow peas, and chayote tossed fast over the ginisa base and bound in a light, glossy sauce.",
  servings: 4,
  perServing: { calories: 450, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "cabbage, chopped", qty: "1/4 head", cost: 0.5 },
    { item: "carrots, sliced", qty: "2", cost: 0.4 },
    { item: "chayote (sayote), sliced", qty: "1", cost: 0.5 },
    { item: "snow peas or green beans", qty: "1 cup", cost: 0.7 },
    { item: "cauliflower or broccoli florets", qty: "1 cup", cost: 0.7 },
    {
      item: "pork, chicken liver, or shrimp, sliced small",
      qty: "4 oz",
      cost: 1.2,
    },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.15, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "patis (fish sauce)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "cornstarch slurry", qty: "1 tbsp in water", cost: 0.1 },
    { item: "cooking oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "black pepper", qty: "to taste" },
  ],
  method: [
    "Build the ginisa base: sauté garlic in hot oil until fragrant, add onion until soft.",
    "Add the meat or shrimp and cook through, seasoning with soy and patis.",
    "Add vegetables hardest-first — carrots and chayote, then cauliflower, then the quick ones (cabbage, snow peas) — stir-frying over high heat so they stay crisp.",
    "Pour in a splash of water or broth, then the cornstarch slurry; toss until the sauce turns glossy and just coats everything.",
    "Finish with black pepper while the vegetables are still bright and crunchy. Serve over hot rice.",
  ],
  modernMove:
    "Cook hot and fast and add vegetables by toughness — the slurry should glaze, not drown; crunch is the whole difference between chopsuey and stew.",
  notes:
    "Endlessly elastic: whatever is cheapest and freshest at the palengke goes in. A handful of liver or shrimp seasons the whole pan.",
  tags: ["vegetables", "stir-fry", "ginisa", "filipino-chinese", "frugal"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/super-tasty-chop-suey/", note: "Adding vegetables hardest-first and binding with a cornstarch slurry" },
    { title: "Panlasang Pinoy — Chop Suey", url: "https://panlasangpinoy.com/chop-suey/", note: "Filipino-Chinese sautéed vegetable medley over the ginisa base" },
  ],
};
