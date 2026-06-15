import type { Recipe } from "../types";

export const eggHoppers: Recipe = {
  slug: "egg-hoppers",
  title: "Egg Hoppers (Bittara Appa)",
  cuisine: "sri-lankan",
  blurb:
    "A lacy, bowl-shaped fermented coconut crepe with an egg dropped into its soft center — the iconic Sri Lankan breakfast-for-dinner, crisp at the rim and custardy in the middle.",
  servings: 4,
  perServing: { calories: 480, protein: 14 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "rice flour", qty: "2 cups", cost: 0.6 },
    { item: "thick coconut milk", qty: "1 1/2 cups", cost: 0.8 },
    { item: "active dry yeast", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "warm water", qty: "as needed" },
    { item: "eggs (one per hopper)", qty: "4", cost: 0.8 },
    { item: "coconut oil for the pan", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp" },
    { item: "black pepper and pol sambol to serve", qty: "to taste", cost: 0.15 },
  ],
  method: [
    "Bloom the yeast with the sugar in a little warm water until foamy. Whisk into the rice flour with enough warm water to make a thick paste, cover, and leave somewhere warm 6–8 hours (or overnight) until risen and sour-smelling.",
    "Whisk in the coconut milk and salt to a batter the consistency of thin cream, adding water as needed. Rest 30 minutes more.",
    "Heat a small deep bowl-shaped pan (an appa pan or small wok) with a wipe of coconut oil. Pour in a ladle of batter and immediately swirl so it climbs the sides into a thin lacy bowl with a thicker pool at the bottom.",
    "Crack an egg into the center, cover, and cook on low until the edges are crisp and golden and the white has just set, 3–4 minutes. Loosen the rim and lift out whole. Serve hot with pol sambol and a crack of pepper.",
  ],
  modernMove:
    "Two batter thicknesses do the work: swirl thin batter up the walls for crackling lace, leave a thicker puddle at the base to cradle the egg so it steams to a soft yolk under the lid.",
  notes:
    "If you have no yeast, an overnight wild ferment or a pinch of baking soda whisked in at the end will also lift the batter. The same batter without the egg makes plain hoppers.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "hoppers", "appa", "egg", "fermented"],
  sources: [
    {
      title: "Eggs.ca — Bittara Appa (Sri Lankan Egg Hoppers)",
      url: "https://eggs.ca/recipes/bittara-appa-sri-lankan-egg-hoppers/",
      note: "Egg hoppers — fermented rice-flour and coconut-milk batter swirled into a bowl with an egg cooked in the center under a lid",
    },
  ],
};
