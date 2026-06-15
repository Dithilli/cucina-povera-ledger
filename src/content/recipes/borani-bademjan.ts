import type { Recipe } from "../types";

export const boraniBademjan: Recipe = {
  slug: "borani-bademjan",
  title: "Borani Bademjan",
  cuisine: "persian",
  blurb:
    "Soft-cooked eggplant folded into garlicky strained yogurt and finished with mint oil — a cooling Persian eggplant-yogurt that works as a light dinner or alongside rice.",
  servings: 4,
  perServing: { calories: 460, protein: 14 },
  estCostPerServing: 1.3,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggplants", qty: "2 large (about 1.5 lb)", cost: 2.0 },
    {
      item: "thick strained yogurt (Greek-style or labneh)",
      qty: "1 1/2 cups",
      cost: 1.5,
    },
    { item: "garlic, grated", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "onion, thinly sliced", qty: "1", cost: 0.3 },
    {
      item: "dried mint",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "turmeric, salt, black pepper",
      qty: "to taste",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "oil, for frying", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "flatbread, to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "Peel and dice the eggplant, salt it 20 minutes, pat dry, and fry in oil until soft and golden. Drain on paper and let cool to just warm.",
    "Fry the sliced onion in the same pan to a deep gold for the garnish.",
    "Beat the grated garlic into the strained yogurt with salt. Fold in the cooled eggplant, mashing lightly so it stays a little chunky — keep it warm-not-hot so the yogurt doesn't split.",
    "Bloom the dried mint in a tablespoon of hot oil off the heat. Spread the borani, scatter the golden onions, and pour the mint oil over the top. Serve with flatbread or as a side to rice.",
  ],
  modernMove:
    "Letting the fried eggplant cool before it meets the yogurt is the discipline that keeps the dish silky instead of curdled — and the bloomed mint oil gives a cheap yogurt-and-eggplant plate a finished, restaurant look.",
  notes:
    "'Borani' covers a family of Persian yogurt dishes (spinach, beet, eggplant). The eggplant version is the most substantial and stands as a light dinner with bread.",
  tags: ["eggplant", "yogurt", "garlic", "mint", "side", "vegetarian"],
  sources: [
    { title: "Wikipedia — Borani", url: "https://en.wikipedia.org/wiki/Borani", note: "borani as a family of Persian garlicky-yogurt vegetable dishes, including the eggplant version" },
  ],
};
