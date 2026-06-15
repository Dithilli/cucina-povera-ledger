import type { Recipe } from "../types";

export const sardinhasAssadas: Recipe = {
  slug: "sardinhas-assadas",
  title: "Sardinhas Assadas",
  cuisine: "portuguese",
  blurb:
    "Fat fresh sardines, salted and char-grilled, slid onto thick slabs of broa so the bread soaks the smoky juices — the smell of every Portuguese summer festa, and cheap when the boats land them.",
  servings: 4,
  perServing: { calories: 560, protein: 38 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    {
      item: "whole fresh sardines, scaled and gutted",
      qty: "12 (about 2 lb)",
      cost: 5.0,
    },
    { item: "coarse sea salt", qty: "for heavy salting", cost: 0.3, spansWeeks: true },
    { item: "broa (Portuguese corn bread), thick slices", qty: "4 large", cost: 1.5 },
    { item: "red and green bell peppers", qty: "3", cost: 1.5 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "olive oil", qty: "4 tbsp", cost: 0.5, spansWeeks: true },
    { item: "red wine vinegar", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "boiled potatoes to serve (optional)", qty: "4", cost: 0.6 },
    { item: "lemon wedges", qty: "2", cost: 0.4 },
    { item: "black pepper", qty: "to taste" },
  ],
  method: [
    "An hour ahead, bury the sardines in coarse salt so they firm up and season through; brush off the excess just before grilling.",
    "Char the whole peppers over the flame until blackened, steam them covered, then peel, tear into strips, and dress with sliced garlic, olive oil, vinegar, and salt — the classic pimentos assados salad.",
    "Grill the sardines over hot coals or a ripping-hot pan, 2–3 minutes a side, until the skin blisters and crisps and they lift cleanly from the grate.",
    "Lay each sardine on a slab of broa toasted at the edge of the fire so the bread drinks the oils and juices. Serve with the roasted peppers, boiled potatoes, and lemon, eaten with your hands.",
  ],
  modernMove:
    "Using the broa as the plate — the bread under the fish is the point, turning the drippings that would be lost into the best mouthful on the board.",
  tags: ["fish", "sardines", "grilled", "broa", "peppers", "summer"],
  sources: [
    {
      title: "196 flavors — Sardinhas Assadas",
      url: "https://www.196flavors.com/portugal-sardinhas-assadas/",
      note: "Confirms whole sardines heavily salted an hour ahead and char-grilled, the classic Portuguese summer festa dish.",
    },
  ],
};
