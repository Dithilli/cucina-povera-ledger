import type { Recipe } from "../types";

export const zaalouk: Recipe = {
  slug: "zaalouk",
  title: "Zaalouk",
  cuisine: "moroccan",
  blurb:
    "Charred eggplant melted into garlicky tomatoes, cumin, and paprika until jammy — a smoky cooked salad you scoop with warm khobz for a light, cheap supper.",
  servings: 4,
  perServing: { calories: 430, protein: 8 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "eggplant", qty: "2 large", cost: 1.6 },
    { item: "ripe tomatoes, chopped", qty: "4", cost: 1.2 },
    { item: "garlic cloves", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "cumin, paprika (or smoked), salt", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "cilantro and parsley, chopped", qty: "1 small bunch", cost: 0.6 },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "lemon juice", qty: "1/2 lemon", cost: 0.2 },
    { item: "khobz, to serve", qty: "for the table", cost: 0.0 },
  ],
  method: [
    "Char the eggplant whole over a flame or under the broiler until the skin blackens and the flesh collapses; cool, peel, and chop the smoky flesh.",
    "Cook the tomatoes with the garlic, cumin, and paprika in olive oil until they break down into a thick sauce.",
    "Fold in the eggplant and simmer, mashing, until everything melds into a jammy, almost spreadable mass.",
    "Off the heat stir in the herbs and lemon, check salt, and serve warm or room-temp with khobz for scooping.",
  ],
  modernMove:
    "Char the eggplant directly over the flame, not in the oven — the blackened skin perfumes the flesh with the smoke that makes zaalouk taste of a real Moroccan kitchen.",
  notes:
    "Even better the next day once the flavors settle; keeps 3–4 days refrigerated.",
  zeroWasteHero: true,
  tags: ["fete", "moroccan", "eggplant", "vegetarian", "salad"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Zaalouk (Eggplant and Tomato Salad)",
      url: "https://tasteofmaroc.com/moroccan-zaalouk-recipe/",
      note: "Confirms flame-charred eggplant cooked down with garlicky tomatoes, cumin, and paprika to a jammy texture eaten with bread.",
    },
  ],
};
