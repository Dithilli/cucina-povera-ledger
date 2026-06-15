import type { Recipe } from "../types";

export const salmonCroquettes: Recipe = {
  slug: "salmon-croquettes",
  title: "Salmon Croquettes",
  cuisine: "american-south",
  blurb:
    "A can of pink salmon, an egg, and a scoop of cornmeal pressed into patties and fried in drippings — the thrift-pantry supper that fed Southern kitchens between paydays.",
  servings: 4,
  perServing: { calories: 430, protein: 28 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    { item: "canned pink salmon, drained (bones and skin mashed in)", qty: "two 15-oz cans", cost: 4.5 },
    { item: "fine yellow cornmeal", qty: "1/3 cup", cost: 0.15, spansWeeks: true },
    { item: "all-purpose flour", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "small onion, grated", qty: "1/2", cost: 0.15 },
    { item: "bacon drippings or neutral oil for frying", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    {
      item: "salt, black pepper, cayenne, a squeeze of lemon",
      qty: "to season",
      cost: 0.2,
      spansWeeks: true,
    },
  ],
  method: [
    "Tip the drained salmon into a bowl and mash thoroughly with a fork — crush the soft vertebrae bones in; they vanish and add calcium. Don't discard them.",
    "Fold in the grated onion, egg, cornmeal, flour, and seasoning until the mix just holds. Let it rest 5 minutes so the cornmeal hydrates and tightens.",
    "Shape into 8 patties about 1/2 inch thick. Heat the drippings in a cast-iron skillet over medium.",
    "Fry the croquettes 3 minutes a side until a dark crust forms and they're heated through. Drain, hit with lemon, and serve.",
  ],
  modernMove:
    "Mashing the canned bones and skin straight into the mix is the frugal move and the nutritious one — nothing in the can is wasted, and the skin's fat keeps the patties moist.",
  zeroWasteHero: true,
  tags: ["fish", "salmon", "canned", "croquettes", "cornmeal", "fried", "pantry"],
  sources: [
    {
      title: "Grandbaby Cakes — Salmon Croquettes",
      url: "https://grandbaby-cakes.com/salmon-croquettes/",
      note: "Soul-food classic binding canned pink salmon with egg and cornmeal, fried into patties.",
    },
  ],
};
