import type { Recipe } from "../types";

export const steamedPorkPatty: Recipe = {
  slug: "steamed-pork-patty",
  title: "Steamed Pork Patty",
  cuisine: "cantonese",
  blurb:
    "Hand-chopped pork seasoned and pressed into a loose cake, studded with crunchy water chestnut and capped with a halved salted duck egg, steamed until juicy in its own savory pool.",
  servings: 4,
  perServing: { calories: 420, protein: 24 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "ground pork (not too lean)", qty: "12 oz", cost: 3.0 },
    { item: "water chestnuts, peeled and chopped", qty: "5", cost: 0.6 },
    { item: "salted duck egg", qty: "1", cost: 0.8 },
    { item: "ginger, grated", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "scallion, minced", qty: "1", cost: 0.1 },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oyster sauce", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "cornstarch", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "sugar", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "white pepper", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "sesame oil", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "steamed jasmine rice, to serve", qty: "4 bowls", cost: 0.4 },
  ],
  method: [
    "In a bowl, mix the pork with the ginger, scallion, soy, oyster sauce, Shaoxing wine, cornstarch, sugar, white pepper, and sesame oil. Stir vigorously in one direction with a couple tablespoons of water until the meat turns sticky and springy.",
    "Fold in the chopped water chestnut for crunch, then spread the mixture into a shallow heatproof dish in an even, loose layer — don't pack it tight, or it steams dense.",
    "Separate the salted duck egg; chop the firm yolk in half and nestle the halves on top, and pour a little of the salted white over the surface for seasoning.",
    "Steam over high heat 18–20 minutes until the patty is set and floating in its own juices, then rest covered a few minutes. Spoon the patty and its savory broth over rice.",
  ],
  modernMove:
    "Stirring the pork in one direction with a splash of water builds the protein bonds that hold the cake springy and juicy rather than crumbly — and a single salted duck egg seasons the whole dish, the classic frugal way to make a little pork feed the table.",
  notes:
    "No salted egg on hand? Water chestnut and a few rehydrated shiitake make a fine everyday version. Keep some fat in the pork — lean mince steams into a dry, pebbly patty.",
  zeroWasteHero: false,
  tags: ["pork", "steamed", "salted-egg", "water-chestnut", "cantonese"],
  sources: [
    {
      title: "Judy — The Woks of Life, Steamed Pork Patty with Salted Duck Eggs",
      url: "https://thewoksoflife.com/steamed-pork-patty-salted-duck-eggs/",
      note: "Folding water chestnut into the seasoned pork and topping a loose patty with salted duck egg yolk before steaming.",
    },
  ],
};
