import type { Recipe } from "../types";

export const pajeon: Recipe = {
  slug: "pajeon",
  title: "Pajeon",
  cuisine: "korean",
  blurb:
    "The scallion pancake — a whole bundle of scallions laid in a thin batter and shallow-fried until the bottom is sheet-crisp and the green stays sweet. A rainy-day dinner built around the cheapest thing in the produce aisle.",
  servings: 4,
  perServing: { calories: 540, protein: 13 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    {
      item: "scallions, trimmed to fit the pan",
      qty: "2 large bunches",
      cost: 1.0,
    },
    { item: "all-purpose flour", qty: "1 cup", cost: 0.3 },
    {
      item: "cornstarch or rice flour (for extra crisp)",
      qty: "2 tbsp",
      cost: 0.1,
    },
    { item: "egg", qty: "1", cost: 0.25 },
    {
      item: "garlic, grated",
      qty: "1 clove",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "neutral oil, for frying",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "soy sauce, rice vinegar, gochugaru, sesame (dipping sauce)",
      qty: "to serve",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "ice water", qty: "about 3/4 cup" },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Whisk the flour, cornstarch, a pinch of salt, and just enough ice-cold water into a thin batter; keeping it cold and pourable is what gives the crisp, lacy bottom instead of a doughy slab. Don't add the egg yet.",
    "Lay the whole scallions in a hot, well-oiled skillet in one direction, packed tight in a single layer, and let them sizzle 30 seconds so they start to sweeten.",
    "Ladle the batter evenly over the scallions to just bind them, then drizzle the beaten egg over the top so it pools between the greens.",
    "Fry 4–5 minutes until the underside is deep golden and crisp, adding oil down the edges; flip, press flat, and crisp the second side. Cut into squares and serve hot with the soy–vinegar dipping sauce.",
  ],
  modernMove:
    "Laying the scallions in first and pouring only enough batter to glue them — rather than stirring everything into a thick pour — keeps the pancake mostly vegetable, and the cold batter plus a slug of oil down the sides shallow-fries the base into a genuinely crackly sheet.",
  tags: ["jeon", "pancake", "scallion", "pan-fried", "vegetarian", "weeknight"],
  sources: [
    {
      title: "Maangchi — Pajeon (Green onion pancake)",
      url: "https://www.maangchi.com/recipe/pajeon",
      note: "Laying whole scallions in the pan and binding with a thin batter for a crisp base",
    },
  ],
};
