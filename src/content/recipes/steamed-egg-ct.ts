import type { Recipe } from "../types";

export const steamedEggCt: Recipe = {
  slug: "steamed-egg-ct",
  title: "Silky Steamed Egg Custard",
  cuisine: "cantonese",
  blurb:
    "The trembling 'water egg' — beaten eggs slacked with warm stock, strained, and steamed gently into a custard so smooth it's slurped, not chewed, finished with soy and scallion.",
  servings: 4,
  perServing: { calories: 360, protein: 16 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 0.8 },
    { item: "warm light chicken stock or water", qty: "1 1/2 cups", cost: 0.3 },
    { item: "salt", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "light soy sauce, to finish", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sesame oil, to finish", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "scallion, finely sliced", qty: "1", cost: 0.1 },
    { item: "white pepper", qty: "pinch", cost: 0.02, spansWeeks: true },
    { item: "steamed jasmine rice, to serve", qty: "4 bowls", cost: 0.4 },
  ],
  method: [
    "Beat the eggs with the salt just until blended, trying not to whip in air. Measure the eggs and stir in warm (not hot) stock at about 1 1/2 parts liquid to 1 part egg — this ratio is what sets the custard soft and silky.",
    "Strain the mixture through a fine sieve into a shallow heatproof bowl to catch the chalazae and any foam, then skim off surface bubbles with a spoon for a glassy top.",
    "Cover the bowl with a plate or foil and steam over gentle, not roaring, heat — about 10–12 minutes — until just set with a faint wobble in the center. A lid vented slightly keeps the surface from pocking.",
    "Drizzle with soy and sesame oil, dust with white pepper, scatter the scallion, and serve trembling over rice.",
  ],
  modernMove:
    "Three details make it silk instead of sponge: warm-not-hot liquid so the eggs don't cook on contact, straining out the bubbles, and steaming over low heat with the surface covered — high heat is what turns steamed egg pitted and tough.",
  notes:
    "Use yesterday's chicken or fish stock for a richer custard; plain water still makes a lovely, almost tofu-soft version. Spoon over rice as the whole dinner, the way a thrifty home cook stretches four eggs into a meal.",
  zeroWasteHero: true,
  tags: ["egg", "steamed", "custard", "silky", "cantonese"],
  sources: [
    {
      title: "Amy + Jacky — Pressure Cook Recipes, Steamed Eggs (Savory Egg Custard)",
      url: "https://www.pressurecookrecipes.com/steamed-eggs-savory-egg-custard/",
      note: "Warm-liquid-to-egg ratio, straining out bubbles, and gentle steaming for a smooth custard.",
    },
  ],
};
