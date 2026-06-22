import type { Recipe } from "../types";

export const dinichWot: Recipe = {
  slug: "dinich-wot",
  title: "Dinich Wot (Potato Stew)",
  cuisine: "ethiopian",
  blurb:
    "Potatoes simmered soft in a turmeric-or-berbere onion base — the cheapest, most filling dish on the table, a fasting-day stew that stretches a few cents of tubers into a meal.",
  servings: 4,
  perServing: { calories: 240, protein: 6 },
  estCostPerServing: 0.45,
  roles: ["dinner", "lunch", "side"],
  ingredients: [
    { item: "potatoes, in chunks", qty: "4 medium", cost: 1.2 },
    { item: "onion, chopped", qty: "1", cost: 0.4 },
    { item: "carrot, sliced", qty: "1", cost: 0.2 },
    { item: "garlic + ginger", qty: "2 cloves / 1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "turmeric (alicha) or berbere (wot)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion in the oil, then add garlic, ginger, and either turmeric (for a mild alicha) or berbere (for a spicy wot); cook a minute.",
    "Add the carrot and potatoes with water to come halfway up, cover, and simmer until the potatoes are tender and starting to break at the edges, 20–30 minutes.",
    "Mash a few chunks against the pot to thicken the sauce. Salt to taste.",
    "Serve over injera; it pairs especially well next to a spicy lentil wot.",
  ],
  modernMove:
    "Let a few potatoes break down to thicken the broth into a velvety sauce while the rest stay in chunks — built-in body with no other thickener. Choose turmeric or berbere depending on whether the plate needs a gentle or a fiery dish.",
  notes:
    "Among the cheapest dishes in the repertoire — potatoes, an onion, and pantry spice. A reliable filler that keeps the platter's cost down and calories up.",
  tags: ["potato", "wot", "dinich", "cheap", "fasting"],
  sources: [
    { title: "Eden Hagos — Flavour Network", url: "https://www.flavournetwork.ca/recipe/healthy-ethiopian-vegan-potato-stew/", note: "Dinich wot: potatoes simmered in an onion-berbere base and served on injera." },
  ],
};
