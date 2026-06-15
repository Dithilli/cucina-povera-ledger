import type { Recipe } from "../types";

export const fatteh: Recipe = {
  slug: "fatteh",
  title: "Fatteh",
  cuisine: "levantine",
  blurb:
    "Toasted day-old pita layered with warm chickpeas and a garlicky yogurt sauce, crowned with pine nuts fried in butter — comfort built on yesterday's bread.",
  servings: 4,
  perServing: { calories: 620, protein: 24 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    {
      item: "day-old pita, torn and toasted crisp",
      qty: "2 rounds",
      cost: 0.5,
    },
    {
      item: "cooked chickpeas (reserve some warm liquid)",
      qty: "2 cups",
      cost: 0.8,
    },
    {
      item: "whole-milk yogurt (or labneh, loosened)",
      qty: "1 1/2 cups",
      cost: 1.0,
    },
    {
      item: "tahini",
      qty: "2 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "garlic cloves, crushed", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "lemon, juiced",
      qty: "1/2",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "pine nuts (or slivered almonds)", qty: "3 tbsp", cost: 0.9 },
    {
      item: "butter or ghee, olive oil, salt",
      qty: "2 tbsp butter",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "sumac and parsley to finish",
      qty: "to finish",
      cost: 0.2,
      spansWeeks: true,
    },
  ],
  method: [
    "Toast the torn stale pita in a hot oven or pan until crisp and golden, then spread over the base of a wide serving dish.",
    "Warm the chickpeas through in a little of their liquid; season with salt and spoon them, with a few spoons of the warm liquid, over the pita so it softens slightly.",
    "Whisk the yogurt with tahini, crushed garlic, lemon, and salt, then pour over the chickpeas to blanket everything.",
    "Fry the pine nuts in foaming butter until golden and pour, sizzling, over the top. Finish with sumac, parsley, and a thread of olive oil; serve at once while the layers contrast.",
  ],
  modernMove:
    "Spoon a little of the hot chickpea cooking liquid over the toasted pita first — it half-softens the bread so each bite is part crunch, part custard, the way the dish is meant to land.",
  zeroWasteHero: true,
  tags: ["chickpeas", "pita", "bread", "yogurt", "zero-waste", "legumes"],
  sources: [
    {
      title: "Maureen Abood — maureenabood.com",
      url: "https://maureenabood.com/lebanese-fattah-chickpeas-pita-chips-and-labneh-with-garnishes/",
      note: "Layered toasted pita chips, garlicky yogurt, warm chickpeas, and butter-fried pine nuts.",
    },
  ],
};
