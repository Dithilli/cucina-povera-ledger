import type { Recipe } from "../types";

export const peperonata: Recipe = {
  slug: "peperonata",
  title: "Peperonata",
  cuisine: "italian",
  blurb:
    "Sweet peppers and onions stewed slow with tomato until jammy — a high-summer garden stew, good hot, cold, or piled on bread.",
  servings: 4,
  perServing: { calories: 200, protein: 4 },
  estCostPerServing: 1.1,
  roles: ["side", "lunch"],
  ingredients: [
    {
      item: "bell peppers (mixed colors), sliced",
      qty: "4 large",
      cost: 3.0,
    },
    { item: "onions, sliced", qty: "2", cost: 0.8 },
    {
      item: "canned tomatoes or ripe tomatoes",
      qty: "1 cup",
      cost: 0.8,
    },
    {
      item: "garlic cloves",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "red wine vinegar (a splash, optional)",
      qty: "1 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "olive oil, basil, salt, pepper",
      qty: "5 tbsp oil",
      cost: 0.75,
      spansWeeks: true,
    },
  ],
  method: [
    "Soften the onions slowly in a generous pour of olive oil until sweet. Add the garlic.",
    "Add the peppers and cook gently, stirring, until they collapse and soften — patience here is everything.",
    "Add the tomato and stew until jammy and the oil pools, 30–40 minutes. A splash of vinegar at the end brightens it.",
    "Season and stir in basil. Serve hot or at room temperature, on bread, with eggs, or alongside anything.",
  ],
  modernMove:
    "Cook it long and low until the peppers melt and the oil separates out glossy — peperonata rushed is a stir-fry; peperonata stewed is a confit.",
  notes: "Keeps several days and improves; great cold on fettunta or with a frittata.",
  tags: ["garden", "peppers", "stew", "vegetable", "make-ahead", "side"],
  sources: [
    {
      title: "Peperonata — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Peperonata",
      note: "Italian stew of bell peppers, tomato, and onion served hot or cold",
    },
  ],
};
