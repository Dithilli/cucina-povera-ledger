import type { Recipe } from "../types";

export const moutabal: Recipe = {
  slug: "moutabal",
  title: "Moutabal",
  cuisine: "levantine",
  blurb:
    "Eggplant charred over open flame until it collapses, then whipped with tahini, lemon, and garlic into a smoky, creamy dip — baba ghanoush's silkier cousin.",
  servings: 4,
  perServing: { calories: 280, protein: 6 },
  estCostPerServing: 0.9,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggplants", qty: "2 large", cost: 1.8 },
    {
      item: "tahini",
      qty: "1/3 cup",
      cost: 0.8,
      spansWeeks: true,
    },
    {
      item: "lemon, juiced",
      qty: "1",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "garlic clove, crushed", qty: "1", cost: 0.1, spansWeeks: true },
    {
      item: "olive oil, salt to finish",
      qty: "2 tbsp oil",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "pomegranate seeds or molasses (optional)",
      qty: "to finish",
      cost: 0.3,
    },
  ],
  method: [
    "Char the whole eggplants directly over a gas flame, on a grill, or under a hot broiler, turning until the skin blackens all over and the flesh fully collapses.",
    "Rest until cool enough to handle, then peel off the charred skin and let the flesh drain in a sieve for 10 minutes so the dip isn't watery.",
    "Mash the flesh with a fork (don't blend — keep some texture), then beat in tahini, lemon, crushed garlic, and salt to taste.",
    "Spread on a plate, pool olive oil in the well, and scatter pomegranate. Scoop with pita or raw vegetables.",
  ],
  modernMove:
    "Open-flame charring, not oven-roasting, is the whole point — that bitter smoke is the flavor, and draining the flesh before whipping keeps it lush instead of soupy.",
  notes: "Mashing by fork rather than blending gives the proper rustic texture.",
  tags: ["eggplant", "tahini", "smoky", "dip", "mezze", "vegetarian"],
};
