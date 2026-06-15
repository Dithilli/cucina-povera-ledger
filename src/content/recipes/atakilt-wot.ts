import type { Recipe } from "../types";

export const atakiltWot: Recipe = {
  slug: "atakilt-wot",
  title: "Atakilt Wot",
  cuisine: "ethiopian",
  blurb:
    "Cabbage, carrot, and potato stewed gently with turmeric and onion — the mild, golden vegetable medley that rounds out the platter, soothing and homey.",
  servings: 4,
  perServing: { calories: 230, protein: 6 },
  estCostPerServing: 0.55,
  roles: ["side", "lunch", "dinner"],
  ingredients: [
    { item: "green cabbage, shredded", qty: "1/2 head", cost: 1.0 },
    { item: "potatoes, in chunks", qty: "2 medium", cost: 0.6 },
    { item: "carrots, sliced", qty: "2", cost: 0.4 },
    { item: "onion, sliced", qty: "1", cost: 0.4 },
    { item: "garlic + ginger", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "turmeric", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion in the oil over medium heat, then add garlic, ginger, and turmeric and cook a minute until fragrant.",
    "Add the carrots and potatoes with a splash of water, cover, and cook 10 minutes.",
    "Add the shredded cabbage, toss to coat, cover, and stew gently until everything is tender and the cabbage collapses — about 20 more minutes, stirring now and then.",
    "Salt to taste. The dish should be soft, golden, and barely saucy. Serve on the platter with the legume wots.",
  ],
  modernMove:
    "Cut the vegetables to cook at the same rate (potatoes small, cabbage in wide ribbons) and steam them in their own moisture under a lid rather than drowning them — concentrated, not watery, is the goal.",
  notes:
    "A fasting-day staple: no animal product needed, and the potato gives it body so it eats like a complete dish over injera.",
  tags: ["vegetable", "cabbage", "atakilt", "side", "fasting"],
};
