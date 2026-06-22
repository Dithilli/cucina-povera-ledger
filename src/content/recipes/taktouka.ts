import type { Recipe } from "../types";

export const taktouka: Recipe = {
  slug: "taktouka",
  title: "Taktouka",
  cuisine: "moroccan",
  blurb:
    "Blistered green peppers and tomatoes stewed soft with garlic, paprika, and olive oil into a velvety salad-stew — humble, sweet-smoky, and made to be mopped up with bread.",
  servings: 4,
  perServing: { calories: 420, protein: 7 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "green bell peppers", qty: "4", cost: 1.6 },
    { item: "ripe tomatoes, chopped", qty: "5", cost: 1.5 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "paprika, cumin, salt", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "chili flakes", qty: "1/4 tsp", cost: 0.03, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "parsley and cilantro", qty: "1 small bunch", cost: 0.5 },
    { item: "khobz, to serve", qty: "for the table", cost: 0.0 },
  ],
  method: [
    "Roast or grill the peppers until the skins blister and blacken; steam them covered, then peel, seed, and tear into strips.",
    "Cook the tomatoes with garlic, paprika, cumin, and chili in olive oil until they collapse into a thick sauce.",
    "Add the pepper strips and stew gently until the textures go soft and velvety and the flavors fuse.",
    "Finish with herbs, rest at least an hour so it settles, and serve warm or cool with khobz.",
  ],
  modernMove:
    "Steam the charred peppers under a lid before peeling — the trapped heat loosens the skins so they slip off whole, keeping the smoky flesh intact instead of shredded.",
  notes:
    "Tastes best made an hour or more ahead; serve as a light supper or alongside grilled fish.",
  tags: ["fete", "moroccan", "peppers", "vegetarian", "salad"],
  sources: [
    {
      title: "The Mediterranean Dish — Taktouka (Moroccan Tomato and Roasted Bell Pepper Salad)",
      url: "https://www.themediterraneandish.com/taktouka-moroccan-tomato-and-roasted-bell-pepper-salad/",
      note: "Confirms charred-and-peeled peppers stewed with tomatoes, garlic, paprika, and olive oil, served with bread.",
    },
  ],
};
