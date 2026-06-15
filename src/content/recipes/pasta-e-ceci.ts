import type { Recipe } from "../types";

export const pastaECeci: Recipe = {
  slug: "pasta-e-ceci",
  title: "Pasta e Ceci",
  cuisine: "italian",
  blurb:
    "Brothy chickpeas and pasta — the Roman and Southern poverty staple, made silky by puréeing part of the beans.",
  servings: 4,
  perServing: { calories: 550, protein: 28 },
  estCostPerServing: 0.81,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "cooked chickpeas (plus ~2 cups of their cooking liquid or water)",
      qty: "1 1/2 cups",
      cost: 0.65,
    },
    { item: "small onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "sprig rosemary", qty: "1", cost: 0.2, spansWeeks: true },
    {
      item: "anchovy fillet (optional, deepens everything)",
      qty: "1",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "olive oil, plus rosemary oil to finish",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "ditalini or other small pasta", qty: "7 oz", cost: 0.88 },
    { item: "lemon pangrattato to finish", qty: "to finish", cost: 0.5 },
    { item: "salt, black pepper, chili", qty: "to taste" },
  ],
  method: [
    "Soften the onion and garlic in the oil with the rosemary and anchovy until melting and fragrant.",
    "Add the chickpeas and their liquid. Blend about a third of the pot smooth and stir it back in — this is what makes it silky instead of watery.",
    "Bring to a simmer, season, and cook the pasta directly in the brodo risotto-style, adding a little hot water as needed, until al dente and creamy.",
    "Off the heat, beat in a thread of olive oil. Finish each bowl with rosemary oil, lemon pangrattato, chili, and black pepper.",
  ],
  modernMove:
    "Puréeing part of the chickpeas and cooking the pasta in the bean brodo emulsifies the whole dish — restaurant gloss from peasant ingredients.",
  tags: ["legumes", "chickpeas", "pasta", "pangrattato", "one-pot"],
};
