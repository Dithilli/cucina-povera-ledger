import type { Recipe } from "../types";

export const matarPaneer: Recipe = {
  slug: "matar-paneer",
  title: "Matar Paneer",
  cuisine: "north-indian",
  blurb:
    "Green peas and a little paneer simmered in a spiced onion-tomato gravy — the everyday North Indian dinner that stretches one cheap block of cheese across a whole pot.",
  servings: 4,
  perServing: { calories: 520, protein: 22 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "paneer, cut in 3/4-inch cubes", qty: "6 oz", cost: 2.0 },
    { item: "green peas (frozen are fine)", qty: "2 cups", cost: 1.2 },
    { item: "ripe tomatoes, puréed", qty: "3 medium", cost: 1.1 },
    { item: "onions, finely chopped", qty: "2 medium", cost: 0.6 },
    { item: "garlic + ginger, grated to a paste", qty: "1 tbsp each", cost: 0.3, spansWeeks: true },
    { item: "green chili, slit", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric, coriander, red chili powder, garam masala", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "neutral oil or ghee", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "cilantro, chopped, to finish", qty: "handful", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Lightly fry the paneer cubes in a little oil until pale gold on two sides, then drop them into warm salted water to keep them soft while the gravy cooks.",
    "Bloom cumin seeds in the oil, add onions, and cook past golden to a deep brown — this slow browning is the whole flavor base, so don't rush it.",
    "Stir in the ginger-garlic paste and green chili for a minute, then the puréed tomatoes and the ground spices. Fry until the oil separates and the masala looks glossy and jammy.",
    "Add the peas and a cup of water, simmer until the peas are tender and the gravy thickens, then fold in the paneer and a pinch of garam masala. Simmer two minutes so the cheese drinks up the sauce.",
    "Finish with cilantro. Serve with roti or rice.",
  ],
  modernMove:
    "Soaking the fried paneer in warm water before it goes in keeps it pillowy instead of rubbery — and frying it first lets a small amount read as the luxury across the whole pot.",
  tags: ["paneer", "peas", "tomato-gravy", "vegetarian", "north-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/matar-paneer/",
      note: "Peas and paneer in a spiced onion-tomato gravy; soaking fried paneer to keep it soft",
    },
  ],
};
