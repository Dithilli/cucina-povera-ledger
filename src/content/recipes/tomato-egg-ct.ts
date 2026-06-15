import type { Recipe } from "../types";

export const tomatoEggCt: Recipe = {
  slug: "tomato-egg-ct",
  title: "Stir-Fried Tomato & Egg",
  cuisine: "cantonese",
  blurb:
    "The everyday rice-topper every household cooks: eggs scrambled into soft curds, folded into tomatoes that have slumped into a sweet-tart gravy, spooned hot over a bowl of rice.",
  servings: 4,
  perServing: { calories: 380, protein: 17 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "eggs", qty: "5", cost: 1.0 },
    { item: "ripe tomatoes", qty: "4 medium (about 1 1/2 lb)", cost: 1.6 },
    { item: "scallion, white and green separated", qty: "2", cost: 0.15 },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "white pepper", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "sesame oil", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "peanut oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "steamed jasmine rice, to serve", qty: "4 bowls", cost: 0.4 },
  ],
  method: [
    "Cut the tomatoes into wedges. Beat the eggs with the Shaoxing wine, the sesame oil, a pinch of salt, and the white pepper.",
    "Heat half the peanut oil in a hot wok until shimmering. Pour in the eggs, let them puff at the edges, then gently push them into large soft curds while still glossy and underdone. Scrape out and set aside.",
    "Add the rest of the oil and the scallion whites; toss in the tomato wedges and stir-fry over high heat until they collapse into a loose sauce, mashing a few to draw out the juices. Season with the sugar, soy, and a little salt.",
    "Return the eggs, fold through just to warm and let them soak up the gravy, and scatter the scallion greens. Spoon over rice while the eggs are still tender.",
  ],
  modernMove:
    "Pulling the eggs out while they're still soft and finishing them in the tomato gravy keeps them silky rather than rubbery — the pinch of sugar isn't sweetness, it's there to round the tomato's acidity into something mellow and savory.",
  notes:
    "Out of season, a tablespoon of ketchup deepens watery winter tomatoes — a common home shortcut. Riper tomatoes need no added water; underripe ones want a splash to make the gravy.",
  zeroWasteHero: false,
  tags: ["egg", "tomato", "stir-fry", "cantonese", "everyday"],
  sources: [
    {
      title: "Bill — The Woks of Life, Chinese Tomato Egg Stir-fry",
      url: "https://thewoksoflife.com/stir-fried-tomato-and-egg/",
      note: "Soft-scrambling the eggs separately and folding them back into the collapsed-tomato gravy, with sugar to balance the acidity.",
    },
  ],
};
