import type { Recipe } from "../types";

export const kaani: Recipe = {
  slug: "kaani",
  title: "Kaani",
  cuisine: "senegalese",
  blurb:
    "The fierce scotch-bonnet-and-onion sauce that sits on every Senegalese table — a cooked, tomato-slicked dip built to set fritters, fish pies, and nems alight.",
  servings: 12,
  perServing: { calories: 45, protein: 1 },
  estCostPerServing: 0.18,
  roles: ["base"],
  ingredients: [
    { item: "onion, roughly chopped", qty: "1 medium", cost: 0.25 },
    { item: "scotch bonnet or habanero (kaani), stemmed", qty: "2", cost: 0.5, spansWeeks: true },
    { item: "garlic", qty: "1 clove", cost: 0.05, spansWeeks: true },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "ripe tomatoes, chopped", qty: "3", cost: 0.5 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15 },
    { item: "bay leaf, salt, and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Soften the onion and garlic in the oil over medium heat until slippery and just colouring, about 6 minutes.",
    "Stir in the tomato paste and cook a couple of minutes until it darkens and caramelizes.",
    "Add the chopped tomatoes, scotch bonnets, bay leaf, and salt; simmer partly covered on low until thick and jammy, about 30 minutes.",
    "Pull the bay leaf and adjust salt; serve at room temperature. For more fire, leave the chili seeds in; for less, seed them first.",
  ],
  modernMove:
    "Caramelizing the tomato paste before the fresh tomatoes go in builds a deeper, rounder base, so the scotch bonnet reads as heat with flavour rather than raw burn.",
  notes:
    "Sosu kaani is on every table at every meal — the standing dip for accara, fataya, pastels, and nems alike.",
  tags: ["base", "sauce", "hot-sauce", "scotch-bonnet", "foundation", "senegalese"],
  sources: [
    {
      title: "Saveur — Sosu Kaani (Habanero Chile Sauce)",
      url: "https://www.saveur.com/article/Recipes/Senegal-Chile-Sauce",
      note: "The onion-garlic base, caramelized tomato paste, and 30-minute simmer with scotch bonnet and bay.",
    },
  ],
};
