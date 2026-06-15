import type { Recipe } from "../types";

export const bacalhauABras: Recipe = {
  slug: "bacalhau-a-bras",
  title: "Bacalhau à Brás (Salt Cod with Shredded Potato and Egg)",
  cuisine: "portuguese",
  blurb:
    "Lisbon's genius of thrift: a little soaked salt cod flaked fine, tangled with crisp straw-cut fried potatoes, and bound off the heat by beaten eggs into a soft, glossy scramble. One small fillet feeds four.",
  servings: 4,
  perServing: { calories: 620, protein: 30 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalhau), soaked 24–36 hrs, water changed often", qty: "1/2 lb", cost: 2.5 },
    { item: "potatoes, cut into thin matchsticks (or frozen straw fries)", qty: "1 lb", cost: 0.7 },
    { item: "onions, thinly sliced", qty: "2", cost: 0.6 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "eggs, beaten", qty: "5", cost: 1.25 },
    { item: "olive oil, plus oil for frying potatoes", qty: "1/4 cup + frying", cost: 0.8, spansWeeks: true },
    { item: "black olives and chopped parsley, to finish", qty: "small handful", cost: 0.4 },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the salt cod 24–36 hours in plenty of cold water in the fridge, changing it several times, until it tastes only gently salty. Drain, then poach 5 minutes or simply pour boiling water over; cool, remove skin and bones, and flake into fine shreds.",
    "Cut the potatoes into fine matchsticks and fry in hot oil (or oven-crisp) until pale gold and just crisp. Drain on paper.",
    "In a wide pan, soften the onions and garlic in the olive oil until sweet and golden. Add the flaked cod and toss until heated through and fragrant.",
    "Tip in the fried potatoes and toss to combine. Lower the heat, pour in the beaten eggs, and stir constantly — the egg should set into a soft, creamy curd that just binds the cod and potato. Pull it off the heat while still glossy and barely set; never let it dry out.",
    "Season with black pepper (little salt needed), scatter with parsley and black olives, and serve at once.",
  ],
  modernMove:
    "Bind off the heat: kill the flame and fold the beaten egg through so it stays creamy and glossy, not scrambled dry — the line between à Brás and a sad omelette is about ten seconds.",
  notes:
    "Named for a Bairro Alto tavern keeper. Half a pound of cod and a few potatoes stretch into a generous dinner for four — frugality made famous.",
  tags: ["fish", "salt-cod", "bacalhau", "potato", "egg", "dinner"],
  sources: [
    {
      title: "David Leite — Leite's Culinaria",
      url: "https://leitesculinaria.com/7642/recipes-portuguese-eggs-salt-cod-potatoes-bacalhau-bras.html",
      note: "Classic Bairro Alto method — shredded salt cod, straw-cut potatoes, and eggs bound off the heat into a soft scramble.",
    },
  ],
};
