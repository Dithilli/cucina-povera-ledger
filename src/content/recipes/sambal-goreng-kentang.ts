import type { Recipe } from "../types";

export const sambalGorengKentang: Recipe = {
  slug: "sambal-goreng-kentang",
  title: "Sambal Goreng Kentang",
  cuisine: "indonesian",
  blurb:
    "Crisp-fried potato batons tossed in a sweet-spicy sambal — the Javanese way to turn the cheapest tuber into something you fight over.",
  servings: 4,
  perServing: { calories: 560, protein: 9 },
  estCostPerServing: 0.72,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "waxy potatoes, cut into thin batons", qty: "1 1/2 lb", cost: 0.9 },
    { item: "shallots, sliced", qty: "5", cost: 0.45 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "red chilies (cabe merah), to taste",
      qty: "4–6",
      cost: 0.5,
    },
    {
      item: "kecap manis (sweet soy sauce)",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "tamarind paste dissolved in a splash of water", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "neutral oil for shallow-frying",
      qty: "4 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "palm sugar or brown sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt and a bay leaf (or salam leaf)", qty: "to taste", cost: 0.1 },
  ],
  method: [
    "Fry the potato batons in batches in shallow oil until deep gold and crisp at the edges, then lift onto paper. Do not crowd the pan or they steam soft.",
    "Pound or blitz the chilies, shallots, and garlic into a coarse paste. Fry this sambal in the remaining oil over medium heat until it darkens and smells sweet and toasted, not raw — 6–8 minutes.",
    "Stir in the kecap manis, tamarind, sugar, salt, and bay leaf; let it bubble to a sticky glaze.",
    "Fold the crisp potatoes back through the sambal off the heat so they stay crunchy under the lacquer. Taste for the sweet–salt–heat balance and serve with rice.",
  ],
  modernMove:
    "Frying the potatoes hard first, then coating them only at the end, keeps them crisp inside the wet sambal — texture survives the sauce instead of dissolving into it.",
  tags: ["potato", "sambal", "kecap-manis", "fried", "frugal"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/sambal-goreng-kentang-roast-potatoes-in-spicy-chili-sauce.html", note: "fried potatoes tossed in a sweet-spicy sambal goreng paste" },
  ],
};
