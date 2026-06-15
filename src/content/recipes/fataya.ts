import type { Recipe } from "../types";

export const fataya: Recipe = {
  slug: "fataya",
  title: "Fataya",
  cuisine: "senegalese",
  blurb:
    "Half-moon turnovers crimped around onion-bright spiced fish or minced meat, fried until the dough blisters and shatters into the kaani on the table.",
  servings: 4,
  perServing: { calories: 470, protein: 17 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "plain flour", qty: "3 cups", cost: 0.5 },
    { item: "smoked or fresh white fish (or minced beef), flaked", qty: "10 oz", cost: 1.6 },
    { item: "onions, finely chopped", qty: "2", cost: 0.5 },
    { item: "nokoss (onion-garlic-parsley-chili base)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "flat-leaf parsley, chopped", qty: "1/2 bunch", cost: 0.25 },
    { item: "stock cube (Maggi/jumbo)", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "neutral oil for the dough and frying", qty: "for frying", cost: 0.9 },
    { item: "warm water and salt", qty: "as needed", cost: 0.05 },
  ],
  method: [
    "Rub a little oil and salt into the flour, then knead in warm water until you have a smooth, supple dough; cover and rest 30 minutes.",
    "Sweat the onions in a splash of oil until soft, stir in the nokoss and crumbled stock cube, then fold in the flaked fish and parsley and cook a few minutes until dry and fragrant. Cool fully.",
    "Roll the dough thin and cut into rounds; spoon filling onto each, fold into half-moons, and crimp the edges firmly with a fork so nothing leaks.",
    "Fry in steady medium-hot oil, turning, until deep gold and blistered, 4–5 minutes a side.",
    "Drain and serve hot, split open and doused with kaani.",
  ],
  modernMove:
    "Cooking the filling completely dry before it goes in means the oil never seizes around a wet pocket — the turnover stays crisp instead of greasy where the steam would have soaked it.",
  tags: ["street", "fried", "turnover", "fish", "senegalese"],
  sources: [
    {
      title: "Dinner By Dennis — Fataya: Senegalese Deep Fried Street Food",
      url: "https://dinnerbydennis.com/fataya/",
      note: "Dough resting, the onion-and-fish filling, and the half-moon crimp-and-fry method.",
    },
  ],
};
