import type { Recipe } from "../types";

export const revithada: Recipe = {
  slug: "revithada",
  title: "Revithada (Sifnos Baked Chickpeas)",
  cuisine: "greek",
  blurb:
    "The Sunday chickpeas of Sifnos — soaked beans, onion, lemon, and olive oil baked slow overnight in a clay pot until silky and golden.",
  servings: 4,
  perServing: { calories: 520, protein: 19 },
  estCostPerServing: 0.72,
  roles: ["dinner"],
  ingredients: [
    {
      item: "dried chickpeas, soaked overnight and drained",
      qty: "1 1/2 cups",
      cost: 0.9,
    },
    { item: "onions, thickly sliced", qty: "2", cost: 0.6 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    {
      item: "olive oil, generous",
      qty: "1/3 cup",
      cost: 0.7,
      spansWeeks: true,
    },
    { item: "lemons (juice to finish)", qty: "1–2", cost: 0.5 },
    { item: "flour, to dust (optional, for body)", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "salt, lots of black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rub the drained chickpeas with a little salt and the flour, then rinse — an old island trick that tightens the skins.",
    "Pile chickpeas, onions, and bay into a clay pot (a Dutch oven works). Add the olive oil, plenty of pepper, and just enough hot water to cover.",
    "Cover and bake very low, 120–130°C / 250°F, for 6–8 hours or overnight, topping up with hot water only if it threatens to dry out.",
    "The chickpeas should be meltingly soft, the onions dissolved, the broth thick and golden. Finish each bowl with a hard squeeze of lemon and raw olive oil.",
  ],
  modernMove:
    "Low and slow overnight is the whole dish: the long bake collapses the onions into the broth and gives the chickpeas a creamy, almost roasted depth no quick simmer can fake.",
  notes:
    "Traditionally carried to the village baker's cooling wood oven on Saturday night and eaten after church. The lemon at the end is non-negotiable.",
  zeroWasteHero: true,
  tags: ["legumes", "chickpeas", "baked", "revithada", "sifnos", "one-pot"],
  sources: [
    {
      title: "The Hungry Bites — Greek Baked Chickpeas (Revithada)",
      url: "https://www.thehungrybites.com/greek-traditional-baked-chickpeas-revithada/",
      note: "Confirms the Sifnos method — chickpeas slow-baked with onion, olive oil, and water.",
    },
  ],
};
