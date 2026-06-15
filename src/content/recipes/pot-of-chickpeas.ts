import type { Recipe } from "../types";

export const potOfChickpeas: Recipe = {
  slug: "pot-of-chickpeas",
  title: "A pot of chickpeas",
  cuisine: "italian",
  blurb: "Dried chickpeas cooked creamy in aromatics — and their brodo is liquid gold.",
  servings: 6,
  perServing: { calories: 180, protein: 10 },
  estCostPerServing: 0.45,
  roles: ["base"],
  ingredients: [
    { item: "dried chickpeas", qty: "1 lb (about 2 1/2 cups)", cost: 2.5 },
    { item: "garlic, smashed", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "rosemary or bay", qty: "1 sprig / 1 leaf" },
    { item: "olive oil", qty: "2 tbsp", cost: 0.35, spansWeeks: true },
    { item: "salt", qty: "to taste (added late)" },
  ],
  method: [
    "Soak the chickpeas in plenty of cold water overnight (8–12 hours). They'll roughly double. Drain.",
    "Put them in a pot with fresh water to cover by 2 inches, the garlic, herb, and oil. Do NOT salt yet — salt early keeps them tough.",
    "Bring to a boil, then drop to a bare simmer and cook gently, partly covered, skimming any foam, until completely tender and creamy — 1 to 1 1/2 hours depending on age. Add hot water if they peek out.",
    "Salt to taste in the last 10 minutes. Let them cool in their liquid.",
    "Keep the chickpeas AND their cooking liquid (the brodo) — the starchy liquid is what makes pasta e ceci silky. Store together, refrigerated, up to 4 days.",
  ],
  modernMove:
    "Low and slow gives creamy interiors instead of split skins. Never pour the brodo away — blend a ladle of beans into it and it emulsifies sauces like cream, for free.",
  tags: ["base", "legumes", "chickpeas", "make-ahead"],
};
