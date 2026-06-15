import type { Recipe } from "../types";

export const peixeFritoComPirao: Recipe = {
  slug: "peixe-frito-com-pirao",
  title: "Peixe Frito com Pirão",
  cuisine: "brazilian",
  blurb:
    "Coastal Brazil's whole-fish economy — fillets fried crisp, their trimmings and bones simmered into a quick stock that's whisked with cassava flour into pirão, a smooth, savoury porridge that wastes nothing of the fish.",
  servings: 2,
  perServing: { calories: 560, protein: 30 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "whole small fish or fillets with frame/heads", qty: "12 oz", cost: 2.2 },
    { item: "cassava flour (farinha de mandioca)", qty: "1/2 cup", cost: 0.3 },
    { item: "onion, chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.25 },
    { item: "lime", qty: "1", cost: 0.25 },
    { item: "cilantro, chopped", qty: "2 tbsp", cost: 0.15 },
    { item: "oil for frying", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Season the fish with salt, pepper, garlic, and lime. Simmer the heads, frames, and any trimmings in 2 cups water with half the onion for 15 minutes, then strain to a clean stock.",
    "Fry the fillets in hot oil until crisp and golden on both sides; lift out and keep warm.",
    "In the same pan soften the remaining onion, garlic, and tomato to a soft refogado.",
    "Pour in the strained fish stock and bring to a boil, then rain in the cassava flour in a thin stream, whisking hard, until it thickens to a smooth porridge the texture of soft polenta.",
    "Stir in cilantro, check the salt, and serve the crisp fish over the pirão with rice alongside.",
  ],
  modernMove:
    "Whisk the farinha into boiling stock in a thin stream like making polenta — a steady rain plus constant whisking is what keeps the pirão lump-free and glossy instead of gummy.",
  notes:
    "Pirão is the indigenous-rooted way the whole fish feeds you: the frame and head become the stock that the cassava flour thickens, so nothing is thrown out.",
  zeroWasteHero: true,
  tags: ["fish", "cassava", "pirao", "brazilian"],
  sources: [
    {
      title: "Flavors of Brazil — Fish Pirão (Pirão de Peixe)",
      url: "http://flavorsofbrazil.blogspot.com/2011/01/recipe-fish-pirao-pirao-de-peixe.html",
      note: "fish-frame stock whisked with cassava flour into a smooth porridge served with the fried fish",
    },
  ],
};
