import type { Recipe } from "../types";

export const batataHarra: Recipe = {
  slug: "batata-harra",
  title: "Batata harra",
  cuisine: "levantine",
  blurb:
    "Crisp fried potatoes tossed off the heat with a raw-garlic, coriander, and chili taqliya — 'angry potatoes' that anchor a frugal dinner or round out the mezze.",
  servings: 4,
  perServing: { calories: 470, protein: 9 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "potatoes, peeled and cut into 3/4-inch cubes", qty: "2 lb", cost: 1.2 },
    { item: "garlic cloves, minced", qty: "6", cost: 0.3, spansWeeks: true },
    {
      item: "fresh coriander, chopped (stems and all)",
      qty: "large handful",
      cost: 0.4,
    },
    { item: "red chili flakes or fresh red chili", qty: "1/2–1 tsp", cost: 0.15, spansWeeks: true },
    { item: "ground coriander", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "olive oil (plus oil for frying)", qty: "4 tbsp", cost: 0.55, spansWeeks: true },
    { item: "lemon, juiced", qty: "1/2", cost: 0.2 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Parboil the potato cubes in salted water for 5 minutes, then drain and steam-dry — this guarantees a fluffy inside under the crust.",
    "Fry the potatoes in a wide pan with a good slick of oil, undisturbed, until deep gold and crisp on all sides. Salt and lift onto a plate.",
    "In the same pan, off most of the heat, warm the garlic, chili flakes, and ground coriander in fresh olive oil for under a minute — just until it smells nutty, never browned.",
    "Return the potatoes, add the chopped fresh coriander and lemon juice, and toss hard so every piece is coated in the green, garlicky oil.",
    "Serve hot, on its own with bread or as a side; leftovers reheat well in a dry pan.",
  ],
  modernMove:
    "Parboil-then-fry instead of deep-frying from raw: less oil, sturdier crust, and the garlic-coriander taqliya goes in raw at the end so it stays sharp and aromatic.",
  notes:
    "Stretches into a full dinner with bread, labneh, or a fried egg on top; as a side it lifts any of the bean yakhni.",
  tags: ["potatoes", "garlic", "chili", "coriander", "taqliya", "vegan"],
  sources: [
    {
      title: "Maureen Abood — Batata Harra (Lebanese Spicy Potatoes)",
      url: "https://maureenabood.com/batata-harra/",
      note: "Authentic Lebanese batata harra — crisp potatoes tossed with garlic, chili, and fresh coriander.",
    },
  ],
};
