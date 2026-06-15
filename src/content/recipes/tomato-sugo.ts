import type { Recipe } from "../types";

export const tomatoSugo: Recipe = {
  slug: "tomato-sugo",
  title: "Tomato sugo",
  cuisine: "italian",
  blurb: "The deep tomato base that dresses pasta, poaches eggs, and sauces half the week.",
  servings: 6,
  perServing: { calories: 90, protein: 2 },
  estCostPerServing: 0.6,
  roles: ["base"],
  ingredients: [
    { item: "olive oil", qty: "3 tbsp", cost: 0.5, spansWeeks: true },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic, sliced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "canned whole tomatoes (San Marzano if you can)", qty: "2 × 28 oz", cost: 5.0 },
    { item: "basil", qty: "a few sprigs" },
    { item: "salt, black pepper, chili", qty: "to taste" },
  ],
  method: [
    "Warm the oil in a wide pot over medium-low heat. Add the onion and a pinch of salt and cook slowly, 8–10 minutes, until soft and sweet but not browned. Add the garlic and cook 1 minute more.",
    "Crush the tomatoes by hand straight into the pot (or add and break up with a spoon), with their juices. Add the basil and a little chili if you like.",
    "Bring to a gentle simmer and cook, stirring now and then so the bottom doesn't catch, 30–40 minutes, until it darkens, thickens, and the oil pools at the edges. Season with salt and pepper.",
    "Use right away or cool and refrigerate up to 5 days; it only gets better.",
  ],
  modernMove:
    "Low and slow is the whole trick — a hard boil scorches and sours it. Drop a Parmesan rind in while it simmers for savory depth, and finish with a thread of raw oil.",
  tags: ["base", "tomato", "sauce", "make-ahead"],
};
