import type { Recipe } from "../types";

export const beefGreensCt: Recipe = {
  slug: "beef-greens-ct",
  title: "Home-Style Beef & Greens",
  cuisine: "cantonese",
  blurb:
    "A little flank steak, velveted to silk and seared in a screaming wok, tumbled with whatever leafy greens are at the market — wok hei smoke, a glossy oyster-sauce glaze, and rice underneath.",
  servings: 4,
  perServing: { calories: 440, protein: 26 },
  estCostPerServing: 1.95,
  roles: ["dinner"],
  ingredients: [
    { item: "flank or skirt steak, thinly sliced across the grain", qty: "8 oz", cost: 3.2 },
    { item: "seasonal greens (gai lan, bok choy, or choy sum)", qty: "1 lb", cost: 1.8 },
    { item: "cornstarch", qty: "2 tsp", cost: 0.05, spansWeeks: true },
    { item: "baking soda", qty: "1/4 tsp", cost: 0.02, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "oyster sauce", qty: "1 1/2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "ginger, julienned", qty: "1 in piece", cost: 0.1, spansWeeks: true },
    { item: "white pepper", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "peanut oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "steamed jasmine rice, to serve", qty: "4 bowls", cost: 0.4 },
  ],
  method: [
    "Velvet the beef: toss the slices with the baking soda, a tablespoon of water, the cornstarch, half the Shaoxing wine, and a teaspoon of soy. Rest 20–30 minutes, then work in a teaspoon of oil so the pieces separate in the wok.",
    "Cut the greens into bite lengths, keeping stems and leaves apart. Stir together the oyster sauce, the rest of the soy and wine, the white pepper, and a splash of water for the finishing sauce.",
    "Get the wok ripping hot with 2 tablespoons oil. Spread the beef in one layer, let it sear undisturbed for a few seconds to catch wok hei, then stir-fry just until the pink is gone. Scoop it out.",
    "Add the last oil with the garlic and ginger; toss the green stems for a minute, then the leaves until wilted but bright. Return the beef, pour in the sauce, and toss hard until everything glazes. Serve over rice.",
  ],
  modernMove:
    "A pinch of baking soda in the marinade raises the meat's pH so a cheap, lean cut comes out of the wok tender and 'velvet' — the trick that lets eight ounces of beef stretch a pound of greens across four bowls of rice.",
  notes:
    "Don't crowd the wok — sear the beef in two batches if your burner is weak, or it steams grey instead of catching that smoky char.",
  zeroWasteHero: false,
  tags: ["beef", "stir-fry", "wok-hei", "greens", "cantonese"],
  sources: [
    {
      title: "Bill — The Woks of Life, How to Velvet Beef for Stir-fry",
      url: "https://thewoksoflife.com/prepare-beef-for-stir-fry/",
      note: "The baking-soda-and-cornstarch velveting marinade that keeps a lean cut tender through a high-heat stir-fry.",
    },
  ],
};
