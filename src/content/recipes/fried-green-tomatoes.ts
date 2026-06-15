import type { Recipe } from "../types";

export const friedGreenTomatoes: Recipe = {
  slug: "fried-green-tomatoes",
  title: "Cornmeal-Crusted Fried Green Tomatoes",
  cuisine: "american-south",
  blurb:
    "Hard, tart end-of-season tomatoes sliced thick, dredged in seasoned cornmeal, and shallow-fried crisp — frugality born of using the fruit that never ripened.",
  servings: 4,
  perServing: { calories: 470, protein: 10 },
  estCostPerServing: 1.1,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "firm green (unripe) tomatoes, sliced 1/3-inch thick",
      qty: "1 1/2 lb",
      cost: 2.0,
    },
    { item: "stone-ground cornmeal", qty: "1 cup", cost: 0.4, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/2 cup", cost: 0.15, spansWeeks: true },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "buttermilk", qty: "1/2 cup", cost: 0.4 },
    {
      item: "neutral oil for shallow frying",
      qty: "1/2 cup",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "salt, black pepper, cayenne, paprika",
      qty: "to taste",
      spansWeeks: true,
    },
  ],
  method: [
    "Salt the tomato slices and let them sit 10 minutes; blot dry. Salting firms them and draws off the sourest juice.",
    "Set up a dredge: seasoned flour, then egg beaten with buttermilk, then cornmeal seasoned with salt, pepper, cayenne, and paprika. Coat each slice flour → wash → cornmeal, pressing the meal on.",
    "Heat about 1/4 inch of oil to a steady medium-high. Fry the slices in a single layer, 2–3 minutes a side, until the crust is deep gold and crackly.",
    "Drain on a rack (not paper, which steams them soft), salt again immediately, and serve hot — over greens for a supper, or alongside as a side.",
  ],
  modernMove:
    "A buttermilk wash plus stone-ground cornmeal gives a tangy, sandy-crisp crust that fries shatter-crisp instead of pasty — and the pre-salt keeps the tomato firm inside.",
  notes:
    "The dish is the South's answer to a glut of tomatoes that won't ripen before frost. A drizzle of hot honey or a spoon of remoulade turns it into a plate.",
  tags: ["tomatoes", "cornmeal", "fried", "buttermilk", "frugal"],
};
