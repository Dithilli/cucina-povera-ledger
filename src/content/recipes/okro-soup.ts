import type { Recipe } from "../types";

export const okroSoup: Recipe = {
  slug: "okro-soup",
  title: "Okro Soup",
  cuisine: "west-african",
  blurb:
    "Grated okra cooked fast and briefly so it stays bright, ropey, and full of draw — a green, glossy soup over palm oil, pepper, and smoky fish.",
  servings: 4,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh okra, grated or finely chopped", qty: "12 oz", cost: 1.4 },
    {
      item: "red palm oil",
      qty: "1/4 cup",
      cost: 0.6,
      spansWeeks: true,
    },
    { item: "onion, diced", qty: "1", cost: 0.4 },
    {
      item: "scotch bonnet, chopped",
      qty: "1",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "smoked/dried fish, flaked, bones removed",
      qty: "5 oz",
      cost: 1.4,
    },
    {
      item: "ground crayfish",
      qty: "2 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "spinach or ugu, chopped (optional)",
      qty: "1 small bunch",
      cost: 0.4,
    },
    {
      item: "fish or light meat stock",
      qty: "about 2 1/2 cups",
    },
    { item: "salt, bouillon cube, pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Grate the okra coarsely — grated draws far more than sliced. Keep it aside; it will be the last thing in.",
    "Bring the stock to a simmer with the onion, chopped pepper, palm oil, crayfish, and flaked smoked fish; let it build flavor for 8–10 minutes.",
    "Stir in the grated okra and cook only 4–6 minutes, stirring just enough — overcooking kills the draw and dulls the color, so you want it barely set and still ropey.",
    "Add greens if using and let them collapse in the last minute. Season with salt and bouillon; keep it loose enough to scoop.",
    "Serve immediately, very hot, with eba, pounded yam, or fufu — okro soup waits for no one.",
  ],
  modernMove:
    "Grate rather than slice the okra and add it last for the briefest possible cook — short heat preserves the mucilage and the vivid green, which is the entire point of a draw soup.",
  tags: ["okra", "okro", "draw-soup", "palm-oil", "swallow", "one-pot"],
};
