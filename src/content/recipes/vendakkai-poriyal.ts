import type { Recipe } from "../types";

export const vendakkaiPoriyal: Recipe = {
  slug: "vendakkai-poriyal",
  title: "Vendakkai Poriyal",
  cuisine: "south-indian",
  blurb:
    "Okra sliced into thin rings and stir-fried open and dry over patient heat until every trace of slime is gone and the edges crisp, scented with mustard, curry leaf, and a little coconut.",
  servings: 4,
  perServing: { calories: 185, protein: 6 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "okra (vendakkai), sliced into rings", qty: "1 lb", cost: 1.8 },
    { item: "grated coconut", qty: "2 tbsp", cost: 0.3 },
    { item: "onion, chopped (optional)", qty: "1 small", cost: 0.2 },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "urad dal", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "cumin seeds, green chili", qty: "1 tsp + 1", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.15, spansWeeks: true },
    { item: "turmeric, salt", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Slice the okra into thin rings and let them air-dry; cook with a dry knife and pan, since water is what makes okra slimy.",
    "Heat the oil and crackle mustard seeds, then fry the urad dal and cumin to gold, adding the green chili and curry leaves (and onion, if using).",
    "Add the okra and turmeric and stir-fry uncovered over medium heat, tossing often and not crowding the pan, 12–15 minutes until the stickiness disappears and the edges turn crisp and toasty.",
    "Season with salt only near the end, fold in the grated coconut, and serve hot as the dry vegetable on a rice-and-sambar plate.",
  ],
  modernMove:
    "Cook okra dry and uncovered, salt it only at the very end, and give it room in the pan — moisture and early salt are what release the mucilage, so patience is the whole technique.",
  notes:
    "A few drops of lemon or a pinch of tamarind also help cut any remaining sliminess. Skip the onion for a purely tempered Tamil version.",
  tags: ["vegetable", "south-indian", "poriyal", "okra", "stir-fry"],
  sources: [
    {
      title: "Suguna Vinodh — Kannamma Cooks (Vendakkai Poriyal, Bhindi Fry)",
      url: "https://www.kannammacooks.com/vendakkai-poriyal-bhindi-fry/",
      note: "Informed the dry, uncovered stir-fry over patient heat, salting late, and tempering to cook out okra's sliminess.",
    },
  ],
};
