import type { Recipe } from "../types";

export const freekehBilHummus: Recipe = {
  slug: "freekeh-bil-hummus",
  title: "Freekeh bil Hummus",
  cuisine: "levantine",
  blurb:
    "Smoky roasted green wheat simmered with chickpeas and warm spice — freekeh's fire-charred flavour does the work of any meat.",
  servings: 4,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "cracked freekeh, rinsed", qty: "1 1/2 cups", cost: 1.6 },
    { item: "cooked chickpeas (with a little of their liquid)", qty: "1 1/2 cups", cost: 0.65 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "olive oil",
      qty: "3 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "ground allspice", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "ground cinnamon", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "ground cumin", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste" },
    { item: "chopped parsley and lemon to finish", qty: "to finish", cost: 0.3 },
    { item: "plain yogurt to serve (optional)", qty: "to serve", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Soften the onion in the olive oil until golden, then stir in the garlic, allspice, cinnamon, and cumin until fragrant.",
    "Add the rinsed freekeh and toast it in the oil for a minute so the smoke wakes up.",
    "Pour in about 3 cups water with salt, bring to a boil, cover, and simmer low until the grain is tender but still chewy, about 20–25 minutes.",
    "Fold in the chickpeas with a splash of their liquid and warm through, then rest covered 10 minutes. Finish with parsley, lemon, black pepper, and a spoon of yogurt if you have it.",
  ],
  modernMove:
    "Freekeh is harvested young and fire-roasted, so it brings a built-in smokiness — toasting it dry in the spiced oil before the water doubles down on that for a brothy, almost meaty grain.",
  notes:
    "If you only have whole freekeh, soak it 30 minutes and add 10 minutes to the simmer.",
  tags: ["freekeh", "chickpeas", "smoky", "vegan-option", "grains"],
  sources: [
    {
      title: "Freekeh — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Freekeh",
      note: "Confirms freekeh as fire-roasted young green wheat with a smoky flavour, served in the Levant with chickpeas.",
    },
  ],
};
