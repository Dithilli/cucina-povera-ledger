import type { Recipe } from "../types";

export const dolmadakia: Recipe = {
  slug: "dolmadakia",
  title: "Dolmadakia (Stuffed Vine Leaves)",
  cuisine: "greek",
  blurb:
    "Vine leaves rolled tight around lemony, herb-flecked rice and braised in olive oil — the patient little parcels eaten cold with a squeeze of lemon.",
  servings: 4,
  perServing: { calories: 430, protein: 7 },
  estCostPerServing: 1.1,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "vine leaves (jarred in brine, rinsed)", qty: "40-45", cost: 2.5 },
    { item: "medium-grain rice", qty: "1 cup", cost: 0.6 },
    { item: "onions, very finely chopped", qty: "2", cost: 0.6 },
    {
      item: "fresh dill, mint & parsley, finely chopped",
      qty: "1 big handful",
      cost: 0.5,
    },
    { item: "spring onions, sliced", qty: "3", cost: 0.4 },
    {
      item: "olive oil, for the filling and the braise",
      qty: "1/2 cup",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "lemons (juice in the pot, wedges to serve)", qty: "2", cost: 0.6 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Rinse the brined vine leaves and blanch fresh ones briefly; pat dry. Sort out any torn leaves to line the pot.",
    "Sweat the onions and spring onions in olive oil until soft, stir in the raw rice for a minute, then the herbs, salt, pepper, and the juice of half a lemon. The rice should be barely cooked — it swells inside the leaves.",
    "Lay a leaf vein-side up, put a teaspoon of filling near the stem, fold the sides in and roll tight but not bursting. Line the pot bottom with torn leaves, then pack the rolls seam-down in snug layers.",
    "Add the juice of the remaining lemons, the rest of the olive oil, and enough water to barely cover. Weight with an inverted plate, cover, and simmer gently 40–50 minutes until the rice is tender. Cool in the pot, then serve at room temperature with lemon wedges.",
  ],
  modernMove:
    "The inverted plate pressing down on the rolls is the trick — it keeps them from unravelling in the simmer, so they stay tight and glossy instead of collapsing into rice soup.",
  notes:
    "These oil-braised, meatless dolmadakia are the cold-eaten lenten version; serve straight from the fridge with extra lemon. Worth making a big batch.",
  tags: ["vine-leaves", "rice", "ladera", "lemon", "meze"],
};
