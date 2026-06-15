import type { Recipe } from "../types";

export const piriPiri: Recipe = {
  slug: "piri-piri",
  title: "Piri-Piri (Chili Sauce)",
  cuisine: "portuguese",
  blurb:
    "The fiery little chili oil-sauce of Portugal and its former colonies — bird's-eye chilies steeped in olive oil, garlic, and a splash of vinegar or lemon. A spoonful wakes up grilled fish, chicken, and any plate of beans.",
  servings: 12,
  perServing: { calories: 60, protein: 0 },
  estCostPerServing: 0.2,
  roles: ["side", "base"],
  ingredients: [
    { item: "fresh red bird's-eye (piri-piri) chilies, or dried", qty: "8–12", cost: 0.8 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "olive oil", qty: "1/2 cup", cost: 0.9, spansWeeks: true },
    { item: "red wine vinegar or lemon juice", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sweet paprika (colorau)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Trim the chilies (leave the seeds for full heat) and chop roughly with the garlic and salt. Pound to a coarse paste in a mortar, or pulse in a small blender.",
    "Work in the paprika, then loosen with the vinegar or lemon and the olive oil to a pourable, rough sauce.",
    "Warm gently in a small pan with the bay leaf for a couple of minutes — just enough to bloom the chili and garlic into the oil without frying them — then take off the heat.",
    "Pour into a jar; the flavour deepens after a day. Keeps covered with its oil in the fridge for weeks; spoon over grilled fish, chicken, potatoes, or beans.",
  ],
  modernMove:
    "Warm the chili and garlic gently in the olive oil rather than serving it raw: a brief bloom rounds the heat and carries the flavour through the oil so it clings to whatever you spoon it on.",
  notes:
    "Piri-piri travelled from Africa into the Portuguese kitchen and back out again. A frugal way to make plain grilled fish or a bowl of beans taste like a feast.",
  tags: ["chili", "sauce", "piri-piri", "condiment", "side", "base"],
};
