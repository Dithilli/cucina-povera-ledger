import type { Recipe } from "../types";

export const khobzBase: Recipe = {
  slug: "khobz-base",
  title: "Khobz",
  cuisine: "moroccan",
  blurb:
    "The round semolina daily bread under every Moroccan meal — golden, chewy, and crusted with smida — torn by hand to scoop tagine and salad alike.",
  servings: 8,
  perServing: { calories: 200, protein: 6 },
  estCostPerServing: 0.18,
  roles: ["base"],
  ingredients: [
    { item: "fine semolina (smida)", qty: "2 cups", cost: 0.6 },
    { item: "bread flour", qty: "2 cups", cost: 0.4 },
    { item: "instant yeast", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "2 tsp", cost: 0.02, spansWeeks: true },
    { item: "sugar", qty: "2 tsp", cost: 0.02, spansWeeks: true },
    { item: "olive or vegetable oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "warm water", qty: "1 1/2 cups", cost: 0.0 },
  ],
  method: [
    "Whisk the semolina, flour, yeast, salt, and sugar; add the oil and warm water and knead to a smooth, elastic dough, 8–10 minutes.",
    "Divide into rounds, flatten each to about an inch thick on a semolina-dusted surface, and dust the tops with more smida.",
    "Cover and let rise until puffy, about 1 hour; dock the tops with a fork.",
    "Bake at 450°F for 15–18 minutes until golden and hollow-sounding. Cool on a rack before tearing.",
  ],
  modernMove:
    "Keep a generous share of the flour as fine semolina — the extra goes more yellow, more chewy, and gives khobz the sandy crust that distinguishes it from plain wheat bread.",
  notes:
    "The constant base of every week: torn by hand as the edible utensil for tagine, zaalouk, and eggs.",
  tags: ["base", "moroccan", "bread", "semolina", "foundation"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Bread (Khobz)",
      url: "https://tasteofmaroc.com/moroccan-bread-khobz-recipe/",
      note: "Confirms the semolina-and-flour daily round, smida dusting, and 450°F bake.",
    },
  ],
};
