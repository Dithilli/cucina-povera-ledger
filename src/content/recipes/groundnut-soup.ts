import type { Recipe } from "../types";

export const groundnutSoup: Recipe = {
  slug: "groundnut-soup",
  title: "Groundnut Soup",
  cuisine: "west-african",
  blurb:
    "Peanut butter melted into a long-simmered tomato-pepper-ginger broth until the oil rises and the soup turns deep, nutty, and silky — a little meat goes a long way.",
  servings: 4,
  perServing: { calories: 640, protein: 28 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "natural peanut butter (or ground roasted peanuts)", qty: "3/4 cup", cost: 0.9 },
    { item: "onion, blended", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, blended", qty: "3", cost: 0.7 },
    {
      item: "scotch bonnet, blended (to taste)",
      qty: "1",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "fresh ginger, grated",
      qty: "1 thumb",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "chicken pieces or a little goat/beef, bone-in",
      qty: "12 oz",
      cost: 2.0,
    },
    {
      item: "tomato paste",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "water or stock",
      qty: "about 4 cups",
    },
    { item: "salt, bouillon cube, pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Season the meat with salt, half the blended onion, and ginger, then boil with a little water until it gives up its stock; reserve the stock.",
    "Loosen the peanut butter with warm stock to a pourable cream so it never goes lumpy in the pot.",
    "Simmer the blended onion, tomato, pepper, ginger, and tomato paste with the reserved stock for 10 minutes to cook out the raw tomato.",
    "Stir in the loosened peanut butter and the meat, then simmer gently 25–35 minutes, skimming and stirring, until the soup darkens, thickens, and the peanut oil floats clear on top — that risen oil is the sign it's done.",
    "Season with bouillon, salt, and pepper. Serve with a swallow (fufu, banku, or rice ball) or plain rice, scooping up the silky soup.",
  ],
  modernMove:
    "Slackening the peanut butter with hot stock before it hits the pot, then a long gentle simmer until the oil splits out, breaks the emulsion the right way — glossy and deep instead of pasty and dull.",
  tags: ["peanut", "groundnut", "soup", "tomato", "swallow", "one-pot"],
  sources: [
    {
      title: "All Nigerian Recipes (Flo Madubike) — Groundnut Soup",
      url: "https://www.allnigerianrecipes.com/soups/groundnut-soup/",
      note: "Loosening the peanut paste with stock and simmering until the oil rises clear on top.",
    },
  ],
};
