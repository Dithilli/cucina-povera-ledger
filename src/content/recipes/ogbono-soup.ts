import type { Recipe } from "../types";

export const ogbonoSoup: Recipe = {
  slug: "ogbono-soup",
  title: "Ogbono Soup",
  cuisine: "west-african",
  blurb:
    "Ground wild-mango seed whipped into hot palm oil until it draws into long elastic strands — the ultimate cheap, stretchy draw soup over a smoky fish-and-pepper base.",
  servings: 4,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  ingredients: [
    { item: "ground ogbono (wild mango) seeds", qty: "3/4 cup", cost: 1.8 },
    {
      item: "red palm oil",
      qty: "1/3 cup",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "onion, diced", qty: "1", cost: 0.4 },
    {
      item: "scotch bonnet, chopped or blended",
      qty: "1",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "smoked/dried fish, flaked, bones removed",
      qty: "5 oz",
      cost: 1.4,
    },
    {
      item: "a little pre-boiled meat or stockfish (optional)",
      qty: "4 oz",
      cost: 0.8,
    },
    {
      item: "ground crayfish",
      qty: "2 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "spinach, ugu, or other greens, chopped",
      qty: "1 bunch",
      cost: 0.5,
    },
    {
      item: "meat/fish stock plus water",
      qty: "about 3 1/2 cups",
    },
    { item: "salt, bouillon cube, pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sieve the ground ogbono to break up lumps — fineness is what lets it draw cleanly.",
    "Warm the palm oil gently (do not smoke it), take it off the heat, and whisk in the ogbono powder until you have a smooth, glossy paste with no dry pockets.",
    "Stir that paste into the simmering stock a little at a time and cook gently, stirring, for 10–15 minutes; it will swell and turn into long elastic threads as it draws.",
    "Add the onion, blended pepper, flaked smoked fish, any meat/stockfish, and crayfish. Loosen with stock to keep it soft and spoonable — ogbono tightens as it sits.",
    "Drop in the greens to just wilt, season with salt and bouillon, and serve very hot with eba or pounded yam, pinching the swallow to pull up the stretchy soup.",
  ],
  modernMove:
    "Blooming the ogbono in warm (not boiling) oil off the heat before it ever meets water hydrates the seed evenly, so it draws into clean elastic strands instead of seizing into gritty lumps.",
  tags: ["ogbono", "wild-mango-seed", "draw-soup", "palm-oil", "swallow", "one-pot"],
};
