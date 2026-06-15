import type { Recipe } from "../types";

export const thoran: Recipe = {
  slug: "thoran",
  title: "Thoran",
  cuisine: "south-indian",
  blurb:
    "Finely shredded cabbage tossed dry with fresh grated coconut over a sputtering tadka of mustard seeds and curry leaf — the everyday Kerala way to turn one cheap vegetable into a fragrant side that eats like a meal with rice and dal.",
  servings: 4,
  perServing: { calories: 230, protein: 6 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "cabbage, finely chopped", qty: "1 small head (5 cups)", cost: 0.9 },
    { item: "grated coconut, fresh or frozen", qty: "3/4 cup", cost: 0.5 },
    { item: "small onion / shallots, chopped", qty: "1/2 cup", cost: 0.3 },
    { item: "green chilies", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chili", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "coconut oil", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Hand-crush the grated coconut with the green chilies, a little turmeric, and a pinch of salt so the coconut takes on the chili heat — this rough coconut mix is the soul of a thoran.",
    "Heat the coconut oil and pop the mustard seeds; toss in the dried red chili and curry leaves until they crackle, then the chopped onion and fry till soft.",
    "Add the cabbage with salt and toss over high heat for a few minutes — you want it cooked through but still with a little bite, never stewed.",
    "Fold the coconut mix through, lower the heat, cover, and let it steam in its own moisture for 3–4 minutes.",
    "Uncover and stir-fry off any wetness so it finishes dry and toasty. Serve with rice and a dal or sambar.",
  ],
  modernMove:
    "Crushing the coconut with chili and turmeric before it hits the pan, then steaming briefly under a lid, gets the coconut fragrant and clinging without browning it to dust — the texture line between a good thoran and a dry one.",
  notes: "The technique is the constant; swap cabbage for green beans, carrot, or chopped greens and it's still a thoran.",
  zeroWasteHero: false,
  tags: ["coconut", "kerala", "cabbage", "stir-fry", "tadka", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/cabbage-thoran/",
      note: "Cabbage thoran — crushed coconut-chili mix, mustard-curry leaf tempering, brief covered steam",
    },
  ],
};
