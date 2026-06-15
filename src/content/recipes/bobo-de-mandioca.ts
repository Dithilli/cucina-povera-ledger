import type { Recipe } from "../types";

export const boboDeMandioca: Recipe = {
  slug: "bobo-de-mandioca",
  title: "Bobó de Mandioca",
  cuisine: "brazilian",
  blurb:
    "A Bahian purée-stew where boiled cassava is blended with coconut milk into a velvety, dendê-tinted cream — rich and golden on its own, lifted with a handful of shrimp when you can stretch to it.",
  servings: 2,
  perServing: { calories: 600, protein: 18 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "cassava (yuca), peeled and cubed", qty: "1 lb", cost: 0.7 },
    { item: "coconut milk", qty: "3/4 cup", cost: 0.6 },
    { item: "dendê (red palm) oil", qty: "1 tbsp", cost: 0.25, spansWeeks: true },
    { item: "small shrimp, peeled (optional)", qty: "5 oz", cost: 1.4 },
    { item: "onion, chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.25 },
    { item: "bell pepper, chopped", qty: "1/2", cost: 0.2 },
    { item: "cilantro, chopped", qty: "1/4 cup", cost: 0.2 },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the cassava cubes in salted water until very soft, 20–25 minutes, pulling out any woody central fibre; reserve a cup of the cooking water.",
    "Blend the cassava with the coconut milk and enough cooking water to make a thick, smooth purée.",
    "Soften the onion, garlic, tomato, and pepper in a little oil into a soft refogado, then stir in the dendê for colour.",
    "Fold the cassava purée into the refogado and simmer gently, loosening with reserved water, until it's a glossy, spoonable cream.",
    "If using shrimp, season and slip them in for the last 3–4 minutes just until pink; finish with cilantro and serve over rice.",
  ],
  modernMove:
    "Blend the cassava with coconut milk rather than mashing by hand — the food processor breaks the starch into a silk-smooth purée that no fork can match.",
  notes:
    "The name comes from the Yoruba ibobó, a thick mashed dish. The cassava-and-coconut base is a complete dinner on its own; the shrimp is the precious thread, not the requirement.",
  tags: ["cassava", "coconut", "shrimp", "bahia", "brazilian"],
  sources: [
    {
      title: "Brazilian Kitchen Abroad — Bobó de Camarão (Brazilian Shrimp Stew)",
      url: "https://braziliankitchenabroad.com/bobo-de-camarao-brazilian-shrimp-stew/",
      note: "boiling and blending cassava with coconut milk into a purée, refogado base, dendê, shrimp folded in at the end",
    },
  ],
};
