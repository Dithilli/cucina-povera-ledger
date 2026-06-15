import type { Recipe } from "../types";

export const boondiRaita: Recipe = {
  slug: "boondi-raita",
  title: "Boondi Raita",
  cuisine: "north-indian",
  blurb:
    "Cool spiced yogurt loosened with water and soaked with tiny gram-flour pearls — the cheap, cooling counterweight to anything fiery on the plate.",
  servings: 4,
  perServing: { calories: 160, protein: 7 },
  estCostPerServing: 0.45,
  roles: ["side"],
  ingredients: [
    { item: "plain yogurt, whisked smooth", qty: "1 1/2 cups", cost: 0.9 },
    {
      item: "boondi (fried gram-flour pearls), store-bought or home-fried",
      qty: "3/4 cup",
      cost: 0.6,
    },
    {
      item: "roasted cumin, ground",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "Kashmiri red chili powder", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "black salt (kala namak) and regular salt", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "cilantro and a little green chili, minced", qty: "to taste", cost: 0.15 },
  ],
  method: [
    "Whisk the yogurt with about 1/3 cup water until it's pourable and lump-free — raita should be loose, not stiff.",
    "Soak the boondi in warm water for 2–3 minutes, then squeeze gently and drop into the yogurt; they should be plump and soft, not crunchy.",
    "Season with roasted cumin, a pinch of Kashmiri chili, black salt, and regular salt; fold in cilantro and green chili.",
    "Rest 10 minutes so the boondi finish softening and the cumin blooms. Serve cold.",
  ],
  modernMove:
    "Toasting and grinding the cumin yourself, plus a pinch of black salt, gives raita its smoky-sulfurous lift — the difference between an afterthought and the thing that makes a fiery dinner edible.",
  tags: ["yogurt", "raita", "boondi", "cooling", "side"],
  sources: [
    {
      title: "Swasthi Shreekanth — Swasthi's Recipes",
      url: "https://www.indianhealthyrecipes.com/boondi-raita/",
      note: "Soaking the boondi to soften; roasted cumin and chaat-style spicing for the yogurt",
    },
  ],
};
