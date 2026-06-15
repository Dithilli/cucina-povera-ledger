import type { Recipe } from "../types";

export const egusiSoup: Recipe = {
  slug: "egusi-soup",
  title: "Egusi Soup",
  cuisine: "west-african",
  blurb:
    "Ground melon seeds toasted into a savory, oil-slicked draw soup thick with bitterleaf or spinach — protein and richness pulled from a handful of cheap seeds.",
  servings: 4,
  perServing: { calories: 620, protein: 26 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "ground egusi (melon) seeds", qty: "1 1/2 cups", cost: 2.2 },
    {
      item: "red palm oil (or part neutral oil)",
      qty: "1/3 cup",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "onion, half diced / half blended", qty: "1 large", cost: 0.4 },
    {
      item: "tomatoes, blended with the onion",
      qty: "2",
      cost: 0.5,
    },
    {
      item: "scotch bonnet, blended (start with half)",
      qty: "1",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "smoked/dried fish, flaked, bones picked out",
      qty: "4 oz",
      cost: 1.2,
    },
    {
      item: "stockfish or a little beef/offal, pre-boiled (optional)",
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
      item: "spinach or bitterleaf, washed and roughly chopped",
      qty: "1 large bunch",
      cost: 0.6,
    },
    {
      item: "stock from the meat/fish, plus water",
      qty: "about 3 cups",
    },
    { item: "salt, bouillon cube, pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Mix the ground egusi with a little water or blended onion to a stiff paste and let it sit while you build the base.",
    "Bloom the diced onion in hot palm oil, then add the blended onion-tomato-pepper purée and fry hard until the raw smell goes and the oil floats — this is the soul of the soup.",
    "Drop spoonfuls of the egusi paste into the simmering base in lumps; don't stir for a few minutes so they set, then let them cook through and 'draw' — the seeds thicken the soup and turn nutty and grainy.",
    "Add the flaked smoked fish, any meat/stockfish, crayfish, bouillon, and enough stock to keep it spoonable. Simmer 15–20 minutes until the oil rises and the egusi is cooked, not raw-tasting.",
    "Fold in the greens at the very end, just to wilt. Taste for salt and heat. Serve hot with a swallow — eba, pounded yam, or fufu — pinching off the starch to scoop the soup.",
  ],
  modernMove:
    "Frying the tomato-onion-pepper base until the oil splits, then dropping the egusi in undisturbed lumps, gives you defined nutty pockets instead of a muddy slurry — texture, not just thickness.",
  tags: ["egusi", "melon-seed", "draw-soup", "greens", "swallow", "one-pot"],
};
