import type { Recipe } from "../types";

export const coconutChutneySi: Recipe = {
  slug: "coconut-chutney-si",
  title: "Coconut Chutney",
  cuisine: "south-indian",
  blurb:
    "Fresh coconut ground with roasted chana dal, green chile and ginger into a cool white paste, then woken up by a hissing tempering of mustard seed, urad dal, curry leaf and dried chile poured over the top. The constant companion to every dosa, idli and vada.",
  servings: 6,
  perServing: { calories: 110, protein: 3 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "fresh grated coconut (or rehydrated desiccated)", qty: "1 cup", cost: 0.7 },
    { item: "roasted chana dal (dalia / putnalu)", qty: "3 tbsp", cost: 0.25 },
    { item: "green chiles", qty: "2", cost: 0.1 },
    { item: "ginger", qty: "1/2 inch", cost: 0.1, spansWeeks: true },
    { item: "oil (for the tempering)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "mustard seed; urad dal", qty: "1 tsp each", cost: 0.1, spansWeeks: true },
    { item: "dried red chile; curry leaves; pinch of hing", qty: "1 each", cost: 0.1, spansWeeks: true },
    { item: "salt; water", qty: "to taste", cost: 0.05 },
  ],
  method: [
    "Grind the coconut, roasted chana dal, green chiles, ginger and salt with a little water to a smooth, spoonable paste — the roasted chana dal both thickens it and keeps the water from separating out.",
    "Loosen with water to the consistency you want and scrape into a serving bowl.",
    "Make the tempering: heat the oil, crackle the mustard seed, add the urad dal and fry to gold, then the broken dried chile, curry leaves and a pinch of hing — it all happens in seconds.",
    "Pour the sizzling tempering straight over the chutney so it perfumes the surface. Stir half in, leave the rest on top, and serve fresh — this chutney doesn't keep past a day.",
  ],
  modernMove:
    "Roasted chana dal is the quiet workhorse: it binds the grind, adds a little plant protein, and stops the coconut and water from splitting. The raw paste is bland on purpose — the whole flavor arrives in the final tempering poured over, not cooked in.",
  notes:
    "Built to use up a coconut already cracked for cooking; the leftover hard shell and any thin trimmings go nowhere near the bin. Best the hour it's made.",
  zeroWasteHero: false,
  tags: ["base", "chutney", "coconut", "tempering", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/coconut-chutney-recipe-coconut-chutney/",
      note: "Grinding coconut with roasted chana dal, chile and ginger, then a mustard-urad-curry-leaf tempering poured over.",
    },
  ],
};
