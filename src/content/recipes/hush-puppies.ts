import type { Recipe } from "../types";

export const hushPuppies: Recipe = {
  slug: "hush-puppies",
  title: "Hush Puppies",
  cuisine: "american-south",
  blurb:
    "Spoonfuls of seasoned cornmeal batter dropped into hot oil until they puff golden — the fry-cook's companion to any fish, born from the scrapings of the meal bowl.",
  servings: 4,
  perServing: { calories: 460, protein: 9 },
  estCostPerServing: 0.7,
  roles: ["side", "dinner"],
  ingredients: [
    { item: "fine yellow cornmeal", qty: "1 1/2 cups", cost: 0.6, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/2 cup", cost: 0.15, spansWeeks: true },
    { item: "baking powder", qty: "1 1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "buttermilk (or soured milk)", qty: "3/4 cup", cost: 0.35 },
    { item: "small onion, finely grated", qty: "1", cost: 0.3 },
    { item: "neutral oil for deep frying", qty: "for frying", cost: 0.8, spansWeeks: true },
    { item: "salt, black pepper, pinch of sugar, cayenne", qty: "to season", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Stir the cornmeal, flour, baking powder, salt, pepper, sugar, and cayenne together in a bowl.",
    "Whisk the egg into the buttermilk, then fold the wet into the dry along with the grated onion and its juice. The batter should be thick enough to drop from a spoon and hold its shape — rest it 10 minutes.",
    "Heat 2 inches of oil in a heavy pot or deep skillet to 360°F. Drop rounded tablespoons of batter in, a few at a time so the oil stays hot.",
    "Fry, turning, until deep gold all over and cooked through, 3–4 minutes. They should turn themselves as they puff. Drain on a rack, salt, and eat hot.",
  ],
  modernMove:
    "Resting the batter and using grated onion with its juice lets the cornmeal hydrate evenly, so the puppies puff into a light interior instead of frying up dense and raw in the middle.",
  tags: ["cornmeal", "fried", "side", "hush-puppies", "deep-fry"],
  sources: [
    {
      title: "Grits and Pinecones — Crispy Southern Hush Puppies",
      url: "https://www.gritsandpinecones.com/hush-puppies/",
      note: "Cornmeal-and-buttermilk batter with grated onion, deep-fried as the classic fish-fry side.",
    },
  ],
};
