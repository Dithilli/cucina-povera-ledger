import type { Recipe } from "../types";

export const venPongal: Recipe = {
  slug: "ven-pongal",
  title: "Ven Pongal",
  cuisine: "south-indian",
  blurb:
    "A soft, comforting porridge of rice and roasted moong dal cooked to a melting mush, then crowned with ghee crackling with cumin, crushed pepper, ginger, and curry leaves.",
  servings: 4,
  perServing: { calories: 470, protein: 14 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "rice", qty: "1 cup", cost: 0.4 },
    { item: "split moong dal", qty: "1/2 cup", cost: 0.4 },
    { item: "ghee", qty: "3 tbsp", cost: 0.5, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "black peppercorns, crushed", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "cashews", qty: "2 tbsp", cost: 0.4 },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Dry-roast the moong dal in a pan until it turns golden and nutty-smelling — this is what gives pongal its toasty depth — then rinse it with the rice.",
    "Pressure-cook the rice and dal together with plenty of water (about 4–5 cups) and salt until completely soft and mushy, mashing slightly so it's almost porridge-like.",
    "In ghee, fry the cashews until golden, then crackle the cumin, crushed pepper, ginger, hing, and curry leaves.",
    "Pour the whole sizzling tempering into the pongal and fold through; serve hot with coconut chutney or sambar.",
  ],
  modernMove:
    "Roasting the moong dal dry before cooking is the quiet trick — it deepens the flavor and keeps the dal from turning gluey, so the pongal stays soft rather than pasty.",
  notes: "Temple-style pongal is generous with ghee and pepper; keep it loose, as it firms up as it cools.",
  zeroWasteHero: false,
  tags: ["pongal", "rice", "moong-dal", "ghee", "south-indian"],
  sources: [
    {
      title: "Swasthi — Swasthi's Recipes",
      url: "https://www.indianhealthyrecipes.com/pongal-recipe-venn-pongal/",
      note: "Roasted moong dal cooked soft with rice and finished with a ghee tempering of cumin, pepper, ginger, and curry leaves",
    },
  ],
};
