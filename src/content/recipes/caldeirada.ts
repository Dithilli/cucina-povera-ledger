import type { Recipe } from "../types";

export const caldeirada: Recipe = {
  slug: "caldeirada",
  title: "Caldeirada",
  cuisine: "portuguese",
  blurb:
    "The fisherman's pot — whatever cheap fish the day gave up, layered raw with potatoes, onions, and peppers and steamed in its own juices with wine. No stirring, no stock, no waste.",
  servings: 6,
  perServing: { calories: 470, protein: 32 },
  estCostPerServing: 2.3,
  roles: ["dinner"],
  ingredients: [
    {
      item: "mixed firm fish — scabbard, conger, hake heads, monkfish trimmings, whatever is cheapest, in chunks",
      qty: "2 lb",
      cost: 7.0,
    },
    { item: "waxy potatoes, sliced 1/2 cm thick", qty: "1 1/2 lb", cost: 1.2 },
    { item: "onions, sliced", qty: "2", cost: 0.6 },
    { item: "ripe tomatoes, sliced", qty: "3", cost: 1.0 },
    { item: "green and red peppers, sliced", qty: "2", cost: 1.0 },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "white wine", qty: "1 cup", cost: 1.0, spansWeeks: true },
    { item: "olive oil", qty: "4 tbsp", cost: 0.5, spansWeeks: true },
    { item: "bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "sweet pimentão / paprika", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "chopped coriander or parsley", qty: "1 big handful", cost: 0.3 },
    { item: "salt, black pepper, chili", qty: "to taste" },
  ],
  method: [
    "Oil a wide heavy pot and layer it like a tart: half the onions, potatoes, peppers, tomatoes, and garlic on the bottom, scattering paprika, bay, salt, and pepper as you go.",
    "Lay the fish over the vegetables, then repeat the vegetable layers on top so the fish is sandwiched and protected. Tuck the firmest fish lowest, the most delicate highest.",
    "Pour the wine and a thread of olive oil over the top — no extra water. Cover tightly and cook on a low flame 35–45 minutes, shaking the pot occasionally but never stirring, until the potatoes are tender and the fish is just set.",
    "Strew with coriander and rest off the heat a few minutes; ladle out in layers so each bowl gets fish, potato, and the saffron-coloured broth the pot made on its own.",
  ],
  modernMove:
    "Layering and steaming instead of stirring is the whole technique — the vegetables shield the fish, and the pot builds a rich broth from the wine and the catch's own juices with no stock at all.",
  tags: ["fish", "stew", "potatoes", "one-pot", "seafood", "no-waste"],
};
