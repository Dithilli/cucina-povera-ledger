import type { Recipe } from "../types";

export const kukuBademjan: Recipe = {
  slug: "kuku-bademjan",
  title: "Kuku Bademjan",
  cuisine: "persian",
  blurb:
    "A smoky eggplant frittata — roasted aubergine mashed with garlic, turmeric and herbs, bound with egg into a soft, savory cake that stretches two eggplants into a whole dinner.",
  servings: 4,
  perServing: { calories: 450, protein: 16 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    {
      item: "eggplants",
      qty: "2 medium (about 1 1/2 lb)",
      cost: 2.0,
    },
    { item: "eggs", qty: "5", cost: 1.25 },
    {
      item: "onion, finely diced",
      qty: "1",
      cost: 0.3,
    },
    {
      item: "garlic cloves, minced",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "turmeric",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "parsley, chopped",
      qty: "1/2 cup",
      cost: 0.5,
    },
    {
      item: "baking powder",
      qty: "1/2 tsp",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "saffron, bloomed in 1 tbsp hot water (optional)",
      qty: "pinch",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "oil or ghee",
      qty: "4 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Char the eggplants whole over a flame or under a hot broiler until collapsed and smoky, then peel and chop the soft flesh.",
    "Soften the onion in oil until golden, add the garlic and turmeric for a minute, then add the eggplant and fry, mashing, until it dries out and concentrates — 8–10 minutes. Cool slightly.",
    "Beat the eggs with the baking powder, saffron water, parsley, salt and pepper, then stir in the eggplant.",
    "Heat oil in a wide nonstick pan over low-medium heat, pour in the mixture and spread flat.",
    "Cover and cook 12–15 minutes until set and deep brown underneath, then flip with a plate and cook the second side 5–8 minutes.",
    "Cut into wedges and serve warm or at room temperature with flatbread and yogurt.",
  ],
  modernMove:
    "Frying the smoked eggplant down until it's almost a paste before it meets the egg means every bite carries that fire-roasted depth — the egg is just scaffolding for two cheap eggplants doing the work.",
  tags: ["kuku", "frittata", "eggs", "eggplant", "smoky", "meatless"],
};
