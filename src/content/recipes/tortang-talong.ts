import type { Recipe } from "../types";

export const tortangTalong: Recipe = {
  slug: "tortang-talong",
  title: "Tortang Talong",
  cuisine: "filipino",
  blurb:
    "The classic Filipino eggplant omelette — eggplants charred until smoky, peeled, flattened, dipped in beaten egg, and fried into a soft, custardy tortang that eats like dinner over rice.",
  servings: 4,
  perServing: { calories: 460, protein: 18 },
  estCostPerServing: 0.9,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "Asian (long) eggplants", qty: "4 medium", cost: 1.6 },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "small onion, finely chopped (optional)", qty: "1", cost: 0.3 },
    { item: "neutral oil for frying", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
    { item: "steamed rice, to serve", qty: "4 cups cooked", cost: 0.6 },
    { item: "banana ketchup or fish sauce with calamansi, to serve", qty: "to serve", cost: 0.3 },
  ],
  method: [
    "Char the whole eggplants directly over a gas flame or under a broiler, turning, until the skins are blackened all over and the flesh collapses — the smoke is the flavor.",
    "Cool, then peel off the burnt skin but keep the stem on as a handle. Lay each eggplant on a plate and press flat with a fork into a fan.",
    "Beat the eggs with salt, pepper, and the optional onion. Heat oil in a skillet, dip each flattened eggplant in the egg, then lay it in the pan, spooning more egg over the top.",
    "Fry until the egg sets golden on the underside, flip once, and brown the other side. Serve hot over rice with banana ketchup or a calamansi–patis dip.",
  ],
  modernMove:
    "Flame-charring the eggplant before it ever meets the egg gives the omelette a deep smoky backbone — you're not frying raw eggplant, you're wrapping egg around something already cooked and roasty.",
  tags: ["eggplant", "egg", "tortang", "smoky", "vegetarian", "rice"],
};
