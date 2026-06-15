import type { Recipe } from "../types";

export const githeri: Recipe = {
  slug: "githeri",
  title: "Githeri",
  cuisine: "east-african",
  blurb:
    "The Kikuyu thrift staple — boiled white maize and beans, then fried up with onion, tomato and a little curry so the plain pot of grains turns into a savoury, sticky, satisfying dinner.",
  servings: 4,
  perServing: { calories: 560, protein: 20 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "dried white maize (hominy), soaked overnight", qty: "1 cup", cost: 0.6 },
    { item: "dried red kidney beans, soaked overnight", qty: "1 cup", cost: 0.7 },
    { item: "onion, chopped", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.5 },
    { item: "potato, diced (optional)", qty: "1", cost: 0.25 },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "curry powder", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "paprika", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "fresh coriander (dhania), chopped", qty: "small handful", cost: 0.2 },
    { item: "oil and salt", qty: "2 tbsp + to taste", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Boil the soaked maize and beans together in fresh water until both are tender, 1–1 1/2 hours (or pressure-cook ~30 minutes); drain, saving a little liquid.",
    "Fry the onion in oil until golden, add garlic, curry powder and paprika, and cook until fragrant.",
    "Stir in the tomatoes (and potato, if using) and cook down to a soft sauce, adding a splash of the reserved liquid.",
    "Tip in the drained maize and beans and fry together over medium heat, stirring, until everything is coated and the edges crisp slightly.",
    "Season with salt, fold through dhania, and serve hot on its own or beside greens.",
  ],
  modernMove:
    "Don't just reheat — fry the boiled githeri hard enough that some kernels catch and caramelise; that toasty edge is the difference between a leftover pot and a dinner.",
  notes:
    "Githeri is the original batch-cook: boil a big pot of maize and beans on the weekend, then fry portions through the week with whatever vegetable is on hand.",
  zeroWasteHero: true,
  tags: ["maize", "beans", "kikuyu", "kenyan", "east-african"],
  sources: [
    {
      title: "Chef's Pencil — Githeri",
      url: "https://www.chefspencil.com/githeri/",
      note: "Boiling maize and beans then frying with onion, tomato and spice; the Kikuyu one-pot thrift staple eaten alone or with ugali.",
    },
  ],
};
