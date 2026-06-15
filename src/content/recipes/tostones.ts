import type { Recipe } from "../types";

export const tostones: Recipe = {
  slug: "tostones",
  title: "Tostones",
  cuisine: "puerto-rican",
  blurb:
    "Green plantain fried soft, smashed flat, and fried again until the edges shatter and the center stays creamy — the salty, garlicky side that lands on nearly every Puerto Rican plate.",
  servings: 2,
  perServing: { calories: 220, protein: 2 },
  estCostPerServing: 0.45,
  roles: ["side"],
  ingredients: [
    { item: "green plantains (plátanos verdes)", qty: "2", cost: 0.4 },
    { item: "garlic + salt (for the soak)", qty: "2 cloves + 1 tsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil for frying", qty: "for frying", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Score and peel the green plantains, then cut into 1-inch rounds.",
    "Fry the rounds in 350°F oil until softened and pale gold, about 3 minutes, then lift out.",
    "Smash each round flat with a tostonera or the bottom of a glass; dip the smashed disc in salted garlic water for extra crunch and flavor.",
    "Fry a second time until deeply golden and crisp at the edges, drain on paper, and salt immediately. Serve with mayoketchup or ajillo.",
  ],
  modernMove:
    "The garlic-salt water dip between fries is the island trick — it seasons the inside and crisps the surface far past a plain double-fry.",
  notes: "Use rock-hard green plantains; any yellow and they fry sweet and soft instead of crisp.",
  zeroWasteHero: false,
  tags: ["fritura", "side", "puerto-rican"],
  sources: [
    {
      title: "Salima's Kitchen — Crispy Puerto Rican-Style Tostones",
      url: "https://salimaskitchen.com/tostones/",
      note: "double-fry with a salted garlic-water dip between fries",
    },
  ],
};
