import type { Recipe } from "../types";

export const loubiaBzeit: Recipe = {
  slug: "loubia-bzeit",
  title: "Loubia bzeit",
  cuisine: "levantine",
  blurb:
    "Green beans braised soft in olive oil and tomato until they melt — eaten warm or cool over rice, a cornerstone of the meatless mezze table.",
  servings: 4,
  perServing: { calories: 520, protein: 12 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "green beans, trimmed (fresh or frozen)", qty: "1 lb", cost: 1.4 },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "chopped tomatoes (or 3 ripe, grated)", qty: "1 can", cost: 0.9 },
    {
      item: "olive oil (generous — bzeit means 'in oil')",
      qty: "4 tbsp",
      cost: 0.55,
      spansWeeks: true,
    },
    { item: "ground allspice or cinnamon", qty: "1/4 tsp", cost: 0.1, spansWeeks: true },
    { item: "long-grain rice, cooked", qty: "1 1/2 cups dry", cost: 0.6 },
    { item: "salt, black pepper, lemon to finish", qty: "to taste" },
  ],
  method: [
    "Sweat the onion slowly in the olive oil until soft and golden, then add the garlic and a pinch of allspice.",
    "Add the green beans and turn them in the oil for a few minutes so they take on the flavour.",
    "Pour in the tomatoes plus a splash of water, season, cover, and braise gently until the beans are completely tender and the sauce is reduced and glossy — 30 to 40 minutes.",
    "Let it sit off the heat so the oil rises and the flavours settle. Serve warm or at room temperature over rice with a squeeze of lemon.",
  ],
  modernMove:
    "Braising the beans well past al dente — the opposite of crisp-tender — is the point: they collapse into the oil and tomato and the dish tastes better the next day.",
  notes:
    "Traditionally served at room temperature, which makes it an ideal cook-once dish: the leftovers are the intended state, not a compromise.",
  zeroWasteHero: true,
  tags: ["green-beans", "olive-oil", "tomato", "yakhni", "rice", "vegan"],
};
