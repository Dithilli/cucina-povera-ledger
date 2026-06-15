import type { Recipe } from "../types";

export const tortangGiniling: Recipe = {
  slug: "tortang-giniling",
  title: "Tortang Giniling",
  cuisine: "filipino",
  blurb:
    "A thick Filipino omelette of sautéed ground meat and potato bound in egg — a little meat stretched with potato and eggs into a sliceable tortang that feeds four over rice.",
  servings: 4,
  perServing: { calories: 540, protein: 27 },
  estCostPerServing: 1.15,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "ground pork or beef", qty: "1/2 lb", cost: 2.0 },
    { item: "potato, peeled and diced small", qty: "1 large", cost: 0.4 },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "garlic cloves, crushed", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "small onion, chopped", qty: "1", cost: 0.3 },
    { item: "ripe tomato, chopped", qty: "1", cost: 0.4 },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "fish sauce (patis), salt, and pepper", qty: "to taste", spansWeeks: true },
    { item: "steamed rice and banana ketchup, to serve", qty: "to serve", cost: 0.7 },
  ],
  method: [
    "Build the ginisa: sauté garlic, then onion, then tomato until pulpy. Add the ground meat and cook until it loses its raw color and renders some fat, breaking up clumps.",
    "Stir in the diced potato, season with patis and pepper, add a small splash of water, cover, and cook until the potato is tender and the mixture is nearly dry. Let it cool slightly — hot filling would cook the eggs unevenly.",
    "Beat the eggs with a pinch of salt and fold the cooled meat-and-potato mixture in.",
    "Heat oil in a skillet, pour in the mixture, and spread it flat. Fry over medium until the underside is set and golden, then flip the whole tortang (or cut it in quarters to turn) and cook the other side. Serve in wedges over rice with banana ketchup.",
  ],
  modernMove:
    "Cooking the giniling down with potato until almost dry before it meets the egg means the omelette sets firm and sliceable instead of weeping — half a pound of meat plus potato and eggs becomes a full sit-down dinner for four.",
  tags: ["egg", "ground-meat", "potato", "tortang", "ginisa", "rice"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/tortang-giniling-omelet-recipe/", note: "Cooking the giniling and potato down before folding into beaten egg" },
    { title: "Curious Cuisiniere — Tortang Giniling", url: "https://www.curiouscuisiniere.com/tortang-giniling/", note: "Ground meat omelette stretched with potato, served with banana ketchup" },
  ],
};
