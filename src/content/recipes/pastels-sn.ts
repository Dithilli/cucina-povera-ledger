import type { Recipe } from "../types";

export const pastelsSn: Recipe = {
  slug: "pastels-sn",
  title: "Pastels",
  cuisine: "senegalese",
  blurb:
    "Crisp little fish pastries from the coast, the dough thin and bubbled, the filling all parsley and chili, dunked in a tangy tamarind-and-kaani dip.",
  servings: 4,
  perServing: { calories: 440, protein: 16 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "plain flour", qty: "3 cups", cost: 0.5 },
    { item: "white fish (mackerel, dorade, or trout), poached and flaked", qty: "10 oz", cost: 1.6 },
    { item: "onion, finely chopped", qty: "1", cost: 0.25 },
    { item: "nokoss (onion-garlic-parsley-chili base)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "fresh parsley and a little basil, chopped", qty: "1/2 bunch", cost: 0.25 },
    { item: "tamarind paste", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "neutral oil for dough and frying", qty: "for frying", cost: 0.9 },
    { item: "warm water and salt", qty: "as needed", cost: 0.05 },
  ],
  method: [
    "Work a little oil and salt into the flour, knead in warm water to a smooth dough, and rest 30 minutes.",
    "Mix the flaked fish with onion, nokoss, parsley, and basil into a tight, herby filling; taste for salt and heat.",
    "Roll the dough very thin, cut into small rounds, place a teaspoon of filling on each, fold into half-moons, and crimp tight.",
    "Fry in steady medium-hot oil until golden and bubbled, about 6 minutes, turning once.",
    "Loosen the tamarind paste with a little warm water and stir into a few spoonfuls of kaani for a sweet-sour-fiery dip; serve the pastels hot alongside.",
  ],
  modernMove:
    "Rolling the dough thin enough to bubble and blister gives the maximum crackle-to-filling ratio — the tamarind's acid then cuts the fried richness the way lime does on the coast.",
  tags: ["street", "fried", "pastry", "fish", "senegalese"],
  sources: [
    {
      title: "Saveur — Pastels (Fried Fish Pies)",
      url: "https://www.saveur.com/article/Recipes/Pastels-Fried-Fish-Pies",
      note: "Thin dough rounds, the herb-and-fish filling with chili, half-moon crimp and 6-minute fry.",
    },
  ],
};
