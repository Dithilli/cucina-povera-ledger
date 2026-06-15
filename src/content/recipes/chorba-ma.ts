import type { Recipe } from "../types";

export const chorbaMa: Recipe = {
  slug: "chorba-ma",
  title: "Chorba",
  cuisine: "moroccan",
  blurb:
    "Harira's lighter cousin — a clear, fragrant broth of finely diced vegetables and a handful of vermicelli, brightened with turmeric, saffron, and a fistful of fresh herbs.",
  servings: 4,
  perServing: { calories: 360, protein: 13 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "carrots, small dice", qty: "2", cost: 0.4 },
    { item: "turnip, small dice", qty: "1", cost: 0.3 },
    { item: "celery stalk, diced", qty: "1", cost: 0.2 },
    { item: "zucchini, diced", qty: "1", cost: 0.4 },
    { item: "tomato, grated", qty: "1", cost: 0.3 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cooked or canned chickpeas", qty: "1/2 cup", cost: 0.4 },
    { item: "fine vermicelli, broken", qty: "1/2 cup", cost: 0.35 },
    { item: "cilantro and parsley, chopped", qty: "1 bunch", cost: 0.5 },
    {
      item: "turmeric, saffron threads, black pepper, smen or oil",
      qty: "to taste",
      cost: 0.45,
      spansWeeks: true,
    },
    { item: "khobz, to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "In a deep pot, soften the onion in smen or oil, then add the diced carrot, turnip, celery, and zucchini and let them sweat with the turmeric, a pinch of saffron, and black pepper.",
    "Stir in the grated tomato and tomato paste and braise a few minutes, covered, until the vegetables glisten and the tomato darkens.",
    "Pour in about 6 cups water or light stock, add the chickpeas and half the herbs, and simmer 25 minutes until the vegetables are tender but the broth stays clear and light.",
    "Add the broken vermicelli and cook 6–8 minutes more, stirring so it doesn't clump, until just tender.",
    "Finish with the rest of the herbs, check the salt, and serve hot with khobz and lemon.",
  ],
  modernMove:
    "Braise the diced vegetables covered in the spiced fat before any water goes in — that short, dry sweat concentrates their sweetness so the finished broth tastes built-up rather than boiled.",
  notes:
    "Everyday Moroccan soup, lighter than harira and made meatless as easily as not. Cut every vegetable to the same small dice so each spoonful carries a bit of everything.",
  zeroWasteHero: false,
  tags: ["soup", "moroccan", "vegetable", "vermicelli", "light"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Diced Vegetable Soup (Chorba Fassia)",
      url: "https://tasteofmaroc.com/moroccan-vegetable-soup-chorba-fassia/",
      note: "Diced-vegetable braise, clear broth, and vermicelli finish for the lighter Fassia-style chorba.",
    },
  ],
};
