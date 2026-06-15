import type { Recipe } from "../types";

export const dodo: Recipe = {
  slug: "dodo",
  title: "Dodo (Fried Ripe Plantain)",
  cuisine: "west-african",
  blurb:
    "Ripe plantains fried until the sugars caramelize and the edges go lacquered and dark — soft, sweet and savoury at once. The cheapest joy in West African cooking, a dinner with a fried egg or a side beside any stew.",
  servings: 4,
  perServing: { calories: 470, protein: 6 },
  estCostPerServing: 0.9,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "very ripe plantains (skins black-blotched)", qty: "4", cost: 2.4 },
    { item: "neutral oil for shallow frying", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "salt", qty: "to taste" },
    { item: "eggs, to make it a dinner (optional)", qty: "4", cost: 0.8 },
  ],
  method: [
    "Choose plantains that are properly ripe — skins blackening, the flesh yellow-gold. Underripe plantain stays starchy and won't caramelize; this ripeness is the whole flavour.",
    "Peel and slice on the diagonal about 1/2 inch thick, or into cubes. Toss with a little salt.",
    "Heat the oil in a wide pan to medium — hot enough to sizzle on contact but not smoking. Too hot and the sugars burn before the centre softens; too cool and they soak up oil and go greasy.",
    "Fry in a single layer, turning once, until each face is deep gold and the edges caramelize — 2 to 3 minutes a side. Lift onto paper to drain.",
    "Serve hot. For dinner, fry eggs in the same pan and pile the dodo alongside; as a side, set it next to any pepper stew or beans.",
  ],
  modernMove:
    "Ripeness plus medium heat is the entire technique: the dark blotchy plantain has the sugar, and a moderate oil temperature gives it time to caramelize through to a custardy centre instead of just frying the outside.",
  notes:
    "Dodo with a fried egg (dodo and eggs) is a beloved cheap supper; beside jollof or beans it's the universal side. Buy plantains green and let them blacken on the counter.",
  tags: ["plantain", "fried", "side", "sweet-savoury", "quick"],
};
