import type { Recipe } from "../types";

export const boiledRice: Recipe = {
  slug: "boiled-rice",
  title: "A pot of boiled rice",
  cuisine: "west-african",
  blurb:
    "Plain parboiled long-grain rice, boiled and steamed fluffy — the patient white canvas under a ladle of fiery obe ata or a spoon of stew. The everyday base.",
  servings: 6,
  perServing: { calories: 210, protein: 4 },
  estCostPerServing: 0.16,
  roles: ["base", "side"],
  ingredients: [
    { item: "long-grain parboiled rice", qty: "2 cups", cost: 0.8 },
    { item: "water", qty: "3 1/2 cups" },
    { item: "salt", qty: "1 tsp" },
  ],
  method: [
    "Rinse the rice in a sieve under cold water until the water runs clear, washing off loose surface starch so the grains stay separate.",
    "Parboiled rice (the West African default) is more forgiving than raw white — it holds its shape and won't go to paste under a heavy stew.",
    "Bring the water and salt to a boil in a heavy pot, add the rice, and let it boil uncovered until the water drops to the level of the grains and craters appear on the surface.",
    "Drop the heat to its lowest, cover with a tight lid (a sheet of foil under the lid helps trap steam), and steam undisturbed 12 to 15 minutes.",
    "Off the heat, leave it covered 10 minutes more, then fluff with a fork. Serve under stew, beans, or sauce.",
  ],
  modernMove:
    "The covered rest off the heat lets the steam finish each grain evenly — pull the lid too soon and the top stays firm while the bottom goes mushy.",
  notes:
    "Leftovers, dried out overnight in the fridge, fry up into a fast jollof-style fried rice — never let cooked rice go to waste.",
  tags: ["base", "side", "rice", "parboiled", "quick"],
};
