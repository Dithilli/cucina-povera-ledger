import type { Recipe } from "../types";

export const paneerBhurji: Recipe = {
  slug: "paneer-bhurji",
  title: "Paneer Bhurji",
  cuisine: "north-indian",
  blurb:
    "Crumbled paneer scrambled with onion, tomato and spices — the fastest weeknight dinner, where grating the cheese makes a little go a long way.",
  servings: 4,
  perServing: { calories: 460, protein: 24 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "paneer, coarsely grated or crumbled", qty: "8 oz", cost: 2.6 },
    { item: "onion, finely chopped", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, chopped", qty: "2 medium", cost: 0.7 },
    { item: "garlic + ginger, minced", qty: "1 tbsp each", cost: 0.3, spansWeeks: true },
    { item: "green chili, chopped", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric, red chili powder, garam masala", qty: "to taste", cost: 0.25, spansWeeks: true },
    { item: "neutral oil or ghee", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "cilantro, chopped, to finish", qty: "handful", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Bloom cumin seeds in the oil, then add the onion and cook to soft and golden.",
    "Stir in ginger, garlic and green chili for a minute, add the tomatoes with turmeric and chili powder, and cook down until the tomatoes collapse and the oil separates.",
    "Fold in the crumbled paneer and toss over high heat for just 2–3 minutes — long enough to coat it in masala, short enough that it stays moist rather than squeaky.",
    "Kill the heat, dust with garam masala, and fold through the cilantro. Pile into warm roti, paratha, or pav.",
  ],
  modernMove:
    "Grate the paneer rather than cube it so every strand catches masala, and pull it off the heat fast — overcooked scrambled paneer goes tight and dry.",
  tags: ["paneer", "scramble", "quick", "vegetarian", "north-indian"],
  sources: [
    {
      title: "Swasthi Shreekanth — Swasthi's Recipes",
      url: "https://www.indianhealthyrecipes.com/paneer-bhurji-recipe/",
      note: "Crumbled paneer scrambled with an onion-tomato masala, pulled off the heat fast",
    },
  ],
};
