import type { Recipe } from "../types";

export const sofritoPr: Recipe = {
  slug: "sofrito-pr",
  title: "Sofrito",
  cuisine: "puerto-rican",
  blurb:
    "The green recaíto blitzed from culantro, ají dulce, peppers, onion and garlic that starts almost every Puerto Rican pot — the aromatic constant humming under the rice, the beans, and every fritter's filling.",
  servings: 16,
  perServing: { calories: 30, protein: 1 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "green bell peppers", qty: "2", cost: 1.0 },
    { item: "ají dulce (sweet peppers)", qty: "6–8", cost: 1.2 },
    { item: "yellow onion", qty: "1 large", cost: 0.4 },
    { item: "garlic", qty: "1 head", cost: 0.4 },
    { item: "culantro (recao)", qty: "1 bunch", cost: 1.0 },
    { item: "cilantro", qty: "1 bunch", cost: 0.8 },
    { item: "olive oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Trim, seed and rough-chop the bell peppers, ají dulce, onion and garlic; rinse the culantro and cilantro well.",
    "Pulse everything together in a food processor in batches, scraping down the sides, until you have a coarse green purée — not a smooth liquid.",
    "Loosen with a little olive oil so it spoons and freezes cleanly.",
    "Use a few tablespoons to start beans, rice and fillings; freeze the rest in an ice-cube tray and pop out cubes as needed.",
  ],
  modernMove:
    "Freeze it in cube trays the day you make it — one batch seasons weeks of cooking, and a single cube is exactly the spoonful a pot of beans wants.",
  notes: "Ají dulce and culantro are the non-negotiable Puerto Rican notes; bell pepper and cilantro alone read as generic.",
  zeroWasteHero: false,
  tags: ["foundation", "recaito", "base", "puerto-rican"],
  sources: [
    {
      title: "Sense & Edibility — Sofrito (Authentic Puerto Rican Cooking Base)",
      url: "https://senseandedibility.com/sofrito-authentic-recipe/",
      note: "culantro + ají dulce + peppers/onion/garlic pulsed coarse and frozen in cubes",
    },
  ],
};
