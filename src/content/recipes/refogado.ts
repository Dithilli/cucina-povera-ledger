import type { Recipe } from "../types";

export const refogado: Recipe = {
  slug: "refogado",
  title: "Refogado (Onion-Garlic-Tomato Base)",
  cuisine: "portuguese",
  blurb:
    "The slow onion-garlic-and-olive-oil melt that begins nearly every Portuguese pot — cooked down patiently, often with a little tomato and bay, until sweet and jammy. The flavour foundation, made once and stirred into everything.",
  servings: 8,
  perServing: { calories: 90, protein: 1 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "onions, thinly sliced", qty: "3 large", cost: 0.9 },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "olive oil", qty: "1/2 cup", cost: 0.9, spansWeeks: true },
    { item: "ripe tomatoes, grated (or 1/2 can chopped)", qty: "2", cost: 0.4 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "sweet paprika (colorau)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Warm the olive oil gently with the onions and bay over low heat. The goal is to sweat, not fry — let the onions go soft and translucent without colour, stirring now and then, 15–20 minutes.",
    "Add the garlic and paprika and cook a minute more, just until fragrant; keep the heat low so the paprika sweetens rather than scorches.",
    "Stir in the grated tomato and a pinch of salt. Cook gently, stirring occasionally, until the mixture is thick, glossy, and jammy and the oil pools at the edges, 15–20 minutes more.",
    "Use straight away as the base for soups, bean pots, rice, and fish, or cool and keep covered with a film of oil in the fridge for up to a week.",
  ],
  modernMove:
    "Cook the onions low and slow until they collapse to sweetness before the tomato goes in — a true refogado is a confit, not a quick fry, and that patience is the whole flavour of Portuguese home cooking.",
  notes:
    "Refogado (or refogar) is the Portuguese sofrito. A jar in the fridge turns a pot of beans or rice into dinner in minutes.",
  tags: ["base", "refogado", "onion", "garlic", "tomato", "olive-oil"],
  sources: [
    {
      title: "Sofrito — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Sofrito",
      note: "Confirms refogado as the Portuguese sofrito with garlic, onion, and olive oil essential, tomato and bay the common additions.",
    },
  ],
};
