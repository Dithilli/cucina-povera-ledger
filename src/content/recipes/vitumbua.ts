import type { Recipe } from "../types";

export const vitumbua: Recipe = {
  slug: "vitumbua",
  title: "Vitumbua",
  cuisine: "east-african",
  blurb:
    "Little coconut-rice griddle cakes — crisp and lacy at the edge, a cardamom-scented cloud in the middle — cooked in dimpled pans along the Swahili coast.",
  servings: 4,
  perServing: { calories: 400, protein: 6 },
  estCostPerServing: 0.7,
  roles: ["side"],
  ingredients: [
    { item: "jasmine or other rice, soaked overnight", qty: "1 1/2 cups", cost: 0.6 },
    { item: "coconut milk", qty: "1 1/2 cups", cost: 0.9 },
    { item: "sugar", qty: "1/2 cup", cost: 0.2, spansWeeks: true },
    { item: "ground cardamom", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "instant yeast", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "pinch of salt", qty: "1/4 tsp" },
    { item: "oil for the pan", qty: "2 tbsp", cost: 0.15 },
  ],
  method: [
    "Drain the soaked rice and blend with coconut milk, sugar, cardamom, and salt until very smooth.",
    "Stir in the yeast, cover, and let the batter rest until bubbly and risen, about 40–60 minutes.",
    "Heat a dimpled vitumbua pan (or a small nonstick skillet) and brush each well with oil.",
    "Pour in batter to fill each well two-thirds; cook until the bottoms are golden and the tops are nearly set, 2–3 minutes.",
    "Flip to colour the second side briefly, then lift out — golden and crisp outside, soft and white within. Serve warm.",
  ],
  modernMove:
    "Soaking then wet-blending the rice (rather than using flour) is what gives vitumbua their melt-in-the-mouth, pure-white interior.",
  notes: "A pinch of nutmeg alongside the cardamom is traditional.",
  zeroWasteHero: false,
  tags: ["street", "coconut", "rice", "griddle", "east-african", "swahili-coast"],
  sources: [
    {
      title: "Mayuri's Jikoni — Vitumbua (coconut rice pancake balls)",
      url: "https://mayuris-jikoni.com/2016/02/09/539-vitumbua-coconut-rice-pancake-balls/",
      note: "Soaked-rice-and-coconut-milk batter, cardamom, and the dimpled-pan cooking.",
    },
  ],
};
