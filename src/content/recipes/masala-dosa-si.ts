import type { Recipe } from "../types";

export const masalaDosaSi: Recipe = {
  slug: "masala-dosa-si",
  title: "Masala Dosa",
  cuisine: "south-indian",
  blurb:
    "A lacy, golden fermented crepe wrapped around turmeric-yellow spiced potato, served with coconut chutney and a bowl of sambar — the crisp, sour-edged centerpiece of the South Indian tiffin.",
  servings: 4,
  perServing: { calories: 540, protein: 14 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "idli/dosa rice", qty: "3 cups", cost: 1.2 },
    { item: "urad dal", qty: "3/4 cup", cost: 0.5 },
    { item: "fenugreek seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "potatoes, boiled", qty: "1 lb", cost: 0.7 },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "green chilies, slit", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "ginger, grated", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "urad dal (for tempering)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "fresh coconut, grated (for chutney)", qty: "1 cup", cost: 0.5 },
    { item: "oil", qty: "4 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Soak rice, urad dal, and fenugreek 6 hours; grind to a smooth batter, salt it, and leave overnight to ferment until light and airy.",
    "For the potato masala, temper mustard seeds, urad dal, green chilies, ginger, and curry leaves in oil; add onion, turmeric, and a splash of water, then fold in the boiled potatoes and mash coarsely into a soft, golden filling.",
    "Grind the coconut with a green chili and a little water for the chutney, and temper it with mustard seeds and curry leaves.",
    "Spread the batter thin on a hot, lightly oiled griddle, crisp until golden, place a line of potato masala down the center, and fold over.",
    "Serve hot with coconut chutney and sambar.",
  ],
  modernMove:
    "The overnight wild ferment is the whole point — it leavens the crepe, gives it the signature sour tang, and predigests the lentils into easy protein; rushing it with baking soda gives you a pancake, not a dosa.",
  notes:
    "Pair with the sambar and coconut-chutney recipes elsewhere in the library. Batter keeps 3–4 days refrigerated.",
  zeroWasteHero: false,
  tags: ["dosa", "masala-dosa", "fermented", "potato", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/masala-dosa-recipe-how-to-make-masala-dosa-recipe/",
      note: "Fermented rice-urad batter, the turmeric potato masala filling, and serving with chutney and sambar",
    },
  ],
};
