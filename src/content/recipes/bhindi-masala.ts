import type { Recipe } from "../types";

export const bhindiMasala: Recipe = {
  slug: "bhindi-masala",
  title: "Bhindi Masala",
  cuisine: "north-indian",
  blurb:
    "Okra fried dry until the sliminess is gone, then tossed with onion, tomato, and amchoor — a tangy, crisp-edged sabzi for roti.",
  servings: 4,
  perServing: { calories: 460, protein: 8 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "okra (bhindi), wiped dry, capped, cut into 1-inch pieces", qty: "1 lb", cost: 1.6 },
    { item: "onions, sliced", qty: "2", cost: 0.5 },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "ginger-garlic, grated", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "turmeric, red chili, coriander powder",
      qty: "1 tsp each",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "amchoor (dried mango powder), or a squeeze of lemon", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Make sure the okra and your knife are bone dry — any water makes it slippery. Heat 2 tbsp oil and fry the okra over medium-high, stirring often, until the pieces are seared and no longer sticky, about 8–10 minutes. Lift out.",
    "Add the last of the oil and crackle the cumin. Fry the onions until soft and lightly browned, then the ginger-garlic for a minute.",
    "Stir in the tomato, turmeric, chili, and coriander and cook to a soft masala. Return the okra and toss to coat without crushing it.",
    "Finish with salt and amchoor (or lemon) off the heat for the sour lift, and serve dry with roti.",
  ],
  modernMove:
    "Frying the okra separately and dry first drives off the mucilage before any moisture from onion or tomato can hit it — that single step is what makes bhindi crisp instead of gummy.",
  tags: ["sabzi", "okra", "bhindi", "dry-curry", "amchoor"],
};
