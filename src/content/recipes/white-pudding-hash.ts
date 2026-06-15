import type { Recipe } from "../types";

export const whitePuddingHash: Recipe = {
  slug: "white-pudding-hash",
  title: "White Pudding & Potato Hash",
  cuisine: "irish",
  blurb:
    "Yesterday's boiled potatoes crushed into a craggy hash with sweet fried onion and coins of white pudding, the oat-and-pork sausage crumbling through until every forkful is crisp edges and soft middle.",
  servings: 4,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "cold boiled potatoes, roughly crushed", qty: "700g", cost: 0.9 },
    { item: "white pudding, sliced into coins", qty: "300g", cost: 1.2 },
    { item: "onion, finely sliced", qty: "1 large", cost: 0.3 },
    { item: "eggs (to top)", qty: "4", cost: 0.8 },
    { item: "butter and a little oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
    { item: "scallions, sliced (optional)", qty: "2", cost: 0.2 },
  ],
  method: [
    "Melt the butter with a splash of oil in a wide pan and fry the onion gently until soft and golden, about 8 minutes.",
    "Add the white pudding coins and fry until their cut faces are crisp, letting some of them break down and crumble into the onion.",
    "Tip in the crushed cold potatoes, season well, and press into a rough cake. Leave undisturbed a few minutes to catch and crust, then turn in sections so you build plenty of crisp golden edges.",
    "Fry the eggs in a separate pan to your liking. Scatter the hash with scallions and serve each portion topped with a fried egg.",
  ],
  modernMove:
    "Resist stirring the hash too soon — let the potato sit flat against the hot pan so it forms a brown crust, then fold the crust back through. Patience is the whole technique.",
  notes:
    "A classic Irish way to use up leftover spuds and stretch a single ring of white pudding to feed four. Black pudding works just as well if that's what's in the fridge.",
  zeroWasteHero: true,
  tags: ["irish", "potato", "white-pudding", "leftovers", "dinner"],
  sources: [
    {
      title: "Food Fables — White Pudding Recipe (Traditional Irish Breakfast Favourite)",
      url: "https://foodfables.co.uk/2025/11/16/white-pudding-recipe/",
      note: "what white pudding is and how it fries — sliced into rounds, crisp outside, soft within",
    },
  ],
};
