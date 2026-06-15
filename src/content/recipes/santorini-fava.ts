import type { Recipe } from "../types";

export const santoriniFava: Recipe = {
  slug: "santorini-fava",
  title: "Santorini Fava (Yellow Split-Pea Purée)",
  cuisine: "greek",
  blurb:
    "The velvety yellow split-pea purée of Santorini — simmered soft with onion, then topped with raw onion, capers, and a flood of olive oil.",
  servings: 4,
  perServing: { calories: 460, protein: 20 },
  estCostPerServing: 0.65,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "yellow split peas (fava), rinsed", qty: "1 1/2 cups", cost: 0.9 },
    { item: "onion, halved", qty: "1", cost: 0.3 },
    { item: "garlic clove", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    {
      item: "olive oil, plus plenty to finish",
      qty: "1/4 cup",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "lemon", qty: "1", cost: 0.3 },
    { item: "raw red onion, finely diced, to top", qty: "1/2", cost: 0.2 },
    { item: "capers, to top", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the split peas with the halved onion, garlic, and bay in plenty of water, skimming the foam, until completely soft and falling apart, 40–50 minutes.",
    "Fish out the bay, then blend or whisk hard with the olive oil and a squeeze of lemon until smooth and creamy; salt to taste. It firms up as it cools.",
    "Spread warm on a plate and pool good olive oil over the top.",
    "Crown with raw red onion and capers, more lemon, and cracked pepper. Eat with bread.",
  ],
  modernMove:
    "The contrast is the dish: keep the purée smooth, warm, and mellow, then hit it cold and raw on top — sharp onion, briny capers, grassy raw oil — so each bite swings sweet to sharp.",
  notes:
    "True Santorini fava is PDO yellow split peas, but any yellow split pea makes the same comforting purée. Leftovers set firm and are good fried in a pan the next day.",
  zeroWasteHero: true,
  tags: ["legumes", "split-peas", "fava", "purée", "santorini", "meze"],
  sources: [
    {
      title: "My Greek Dish — Authentic Greek Fava (Yellow Split-Pea Purée)",
      url: "https://www.mygreekdish.com/recipe/authentic-greek-fava-recipe-yellow-split-peas-puree/",
      note: "Confirms yellow split peas simmered soft and puréed with onion and olive oil.",
    },
  ],
};
