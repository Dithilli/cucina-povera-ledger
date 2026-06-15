import type { Recipe } from "../types";

export const gamjaJorim: Recipe = {
  slug: "gamja-jorim",
  title: "Gamja Jorim",
  cuisine: "korean",
  blurb:
    "Soy-braised potatoes simmered down until they're glazed and glossy — the cheapest banchan there is, and the one that disappears first.",
  servings: 6,
  perServing: { calories: 510, protein: 9 },
  estCostPerServing: 0.55,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "waxy potatoes, peeled and cut into 3/4-inch cubes",
      qty: "2 lb",
      cost: 1.6,
    },
    {
      item: "garlic cloves, minced",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "soy sauce", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    {
      item: "rice syrup or sugar",
      qty: "2 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "neutral oil + toasted sesame oil to finish",
      qty: "2 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "water", qty: "1 1/2 cups", cost: 0 },
    {
      item: "toasted sesame seeds + sliced green onion",
      qty: "to finish",
      cost: 0.3,
    },
    { item: "steamed short-grain rice, to serve", qty: "for 6", cost: 0.9 },
  ],
  method: [
    "Soak the cubed potatoes in cold water for a few minutes and drain — rinsing off surface starch keeps them from gumming the glaze.",
    "Brown the potatoes in the neutral oil over medium-high heat until the edges take a little color, then stir in the garlic for 30 seconds.",
    "Add water, soy sauce and rice syrup, bring to a simmer, cover and braise until the potatoes are just tender, about 12 minutes.",
    "Uncover and raise the heat: reduce the liquid to a few tablespoons of syrupy glaze, gently tossing so the potatoes lacquer without breaking. Finish with sesame oil, seeds and green onion. Serve with rice; even better on day two.",
  ],
  modernMove:
    "Brown the potatoes before they ever see liquid — that fond is what gives a no-meat braise its savory depth, so the soy glaze tastes cooked rather than just salty.",
  tags: ["banchan", "potatoes", "jorim", "braise", "vegan", "make-ahead"],
  sources: [
    {
      title: "Maangchi — Spicy braised potatoes (Maeun-gamja-jorim)",
      url: "https://www.maangchi.com/recipe/maeun-gamja-jorim",
      note: "Braising cubed potatoes in soy and sugar down to a glossy glaze",
    },
  ],
};
