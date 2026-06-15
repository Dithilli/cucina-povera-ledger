import type { Recipe } from "../types";

export const fattoush: Recipe = {
  slug: "fattoush",
  title: "Fattoush",
  cuisine: "levantine",
  blurb:
    "The bread salad of the Levant — crisped day-old pita shards, crunchy vegetables, and herbs under a tart sumac-and-lemon dressing.",
  servings: 4,
  perServing: { calories: 320, protein: 7 },
  estCostPerServing: 1.1,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "day-old pita, torn and toasted or fried crisp",
      qty: "2 rounds",
      cost: 0.5,
    },
    { item: "romaine or little gem, chopped", qty: "1 head", cost: 1.0 },
    { item: "cucumbers, chopped", qty: "2", cost: 0.8 },
    { item: "ripe tomatoes, cut into chunks", qty: "2", cost: 1.0 },
    { item: "radishes, sliced", qty: "1 small bunch", cost: 0.6 },
    {
      item: "parsley and mint, roughly chopped",
      qty: "1 handful each",
      cost: 0.7,
    },
    { item: "spring onions, sliced", qty: "3", cost: 0.4 },
    {
      item: "sumac",
      qty: "1 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "lemon, olive oil, garlic, salt (dressing)",
      qty: "1 lemon, 4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Tear the stale pita and either toast in a hot oven or fry in a little olive oil until deeply crisp and golden; salt while hot.",
    "Whisk the dressing: lemon juice, olive oil, crushed garlic, a generous spoon of sumac, and salt.",
    "Toss the lettuce, cucumber, tomato, radish, herbs, and spring onion with most of the dressing.",
    "Fold in the pita shards at the very last second so they stay crisp, then shower with extra sumac and serve.",
  ],
  modernMove:
    "Frying the stale pita in olive oil instead of plain toasting turns yesterday's bread into shatteringly crisp croutons that carry the sumac — waste bread becomes the best part of the plate.",
  zeroWasteHero: true,
  tags: ["pita", "bread", "sumac", "salad", "zero-waste", "summer"],
};
