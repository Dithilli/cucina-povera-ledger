import type { Recipe } from "../types";

export const vinagrete: Recipe = {
  slug: "vinagrete",
  title: "Vinagrete",
  cuisine: "brazilian",
  blurb:
    "The bright table salad — diced tomato and onion loosened with vinegar and oil, the cool, tangy counterweight that lands beside grilled meat, feijoada, and every fried boteco snack.",
  servings: 4,
  perServing: { calories: 130, protein: 2 },
  estCostPerServing: 0.55,
  roles: ["base", "side"],
  ingredients: [
    { item: "ripe tomatoes, finely diced", qty: "3", cost: 1.0 },
    { item: "onion, finely diced", qty: "1 small", cost: 0.3 },
    { item: "green bell pepper, diced (optional)", qty: "1/2", cost: 0.3 },
    { item: "white wine or cider vinegar", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "olive oil", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "parsley, salt, pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Dice the tomato, onion, and pepper small and even, and chop a handful of parsley.",
    "Toss everything with the vinegar and oil, a splash of water, salt, and black pepper.",
    "Let it sit 15–20 minutes so the onion mellows and the juices pool into a light dressing.",
    "Stir before serving alongside grilled meat, beans, or fried salgadinhos — it keeps a few days, chilled.",
  ],
  modernMove:
    "Unlike pico de gallo, there's no lime and no chili heat — only vinegar; let it rest so the raw onion softens into something you'd spoon over everything.",
  notes: "A fixed part of the plate; a jar in the fridge brightens any heavy dinner all week.",
  zeroWasteHero: false,
  tags: ["foundation", "side", "salad", "brazilian"],
  sources: [
    {
      title: "Vinagrete — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Vinagrete",
      note: "tomato, onion, oil, and vinegar table condiment served with grilled meat and feijoada",
    },
  ],
};
