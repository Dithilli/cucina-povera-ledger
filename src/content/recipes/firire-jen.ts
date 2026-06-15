import type { Recipe } from "../types";

export const firireJen: Recipe = {
  slug: "firire-jen",
  title: "Firire Jën",
  cuisine: "senegalese",
  blurb:
    "Whole fish scored, marinated in garlic and mustard, pan-fried crisp, then smothered in a glossy tangle of golden onions — Senegal's everyday fried fish over rice.",
  servings: 4,
  perServing: { calories: 540, protein: 28 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "whole fish (sea bream or mackerel), scaled and scored", qty: "2 (about 1.5 lb total)", cost: 4.5 },
    { item: "onions, thinly sliced", qty: "3 medium", cost: 0.7 },
    { item: "broken rice", qty: "1 1/2 cups", cost: 0.7 },
    { item: "garlic", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "Dijon or yellow mustard", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "vinegar or lemon juice", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "kaani (scotch bonnet) or chilli powder", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "maggi cube", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "oil for frying", qty: "1/4 cup", cost: 0.3 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Make a paste of garlic, mustard, vinegar, chilli, salt, and pepper. Rub it into the slashes of the scored fish and let it marinate 15–20 minutes.",
    "Scrape the marinade and any onion off the fish and reserve it, then fry the fish in hot oil until deeply golden and crisp on both sides; set aside.",
    "In the same oil, fry the sliced onions with the reserved marinade until soft and browned, add a crumbled maggi cube and a splash of water, and reduce to a glossy smothering sauce.",
    "Steam the broken rice until fluffy.",
    "Bed the rice, lay the crisp fish on top, and bury it under the onion sauce. Serve with lime and bread.",
  ],
  modernMove:
    "Frying the fish first and the onions in its drippings second means the smothering sauce tastes of the fish itself — the crisp skin stays crisp under a sauce that's already seasoned by it.",
  notes:
    "Firire is simply Wolof for the French frire, 'to fry.' Broken rice (the standard Senegalese rice) drinks the sauce better than long-grain.",
  tags: ["fish", "onions", "broken-rice", "fried", "yassa-style", "senegalese"],
  sources: [
    {
      title: "Senecuisine — Firire (fish and sauce)",
      url: "http://senecuisine.com/en/firire-fish-and-sauce/",
      note: "Mustard-garlic marinade, frying the scored fish, then the smothered onion sauce served over rice.",
    },
  ],
};
