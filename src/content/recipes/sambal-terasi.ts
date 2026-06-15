import type { Recipe } from "../types";

export const sambalTerasi: Recipe = {
  slug: "sambal-terasi",
  title: "Sambal Terasi",
  cuisine: "indonesian",
  blurb:
    "The everyday Indonesian chili relish: chilies and tomato pounded with toasted terasi (fermented shrimp paste), brightened with lime. A spoonful turns a bowl of plain rice and steamed greens into a meal — the cheapest way to make frugal food taste like more.",
  servings: 12,
  perServing: { calories: 25, protein: 1 },
  estCostPerServing: 0.13,
  roles: ["base", "side"],
  ingredients: [
    { item: "fresh red chilies, stemmed", qty: "8", cost: 0.9, spansWeeks: true },
    { item: "bird's-eye chilies, to taste (for heat)", qty: "2–6", cost: 0.3, spansWeeks: true },
    { item: "shallots, peeled", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "ripe tomato", qty: "1 small", cost: 0.4 },
    { item: "terasi (fermented shrimp paste)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp", spansWeeks: true },
    { item: "lime, juiced", qty: "1/2", cost: 0.2 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Toast the terasi: wrap the little block in foil and toast in a dry pan a minute a side, or fry it loose in a drop of oil, until it smells nutty and deeply savory instead of sharply funky. Untoasted terasi tastes raw and one-note — this step is what makes the sambal.",
    "Fry the chilies, shallots, and garlic in the oil over medium until softened and blistered, then add the tomato and cook until it collapses.",
    "Tip everything into a cobek (stone mortar) with the toasted terasi, sugar, and salt and pound to a coarse, jammy paste — or pulse in a blender, but coarse, never smooth.",
    "Return the sambal to the pan and fry a few more minutes until it tightens and the oil glistens at the edges. Cool, then stir in the lime juice off the heat so it stays bright.",
  ],
  modernMove:
    "Frying the sambal a second time after pounding (sambal goreng) drives off raw water and concentrates it into something jammy that keeps a week in the fridge — and the toasted terasi gives a wallop of cheap umami that stands in for meat across a whole week of vegetables.",
  notes:
    "Adjust the bird's-eye chilies for heat; the big red chilies are mostly for color and body. For a vegetarian version, swap toasted terasi for a teaspoon of fermented soybean paste or a splash of soy — different but in the same savory register.",
  zeroWasteHero: true,
  tags: ["base", "side", "sambal", "condiment", "chili", "make-ahead"],
};
