import type { Recipe } from "../types";

export const fasolia: Recipe = {
  slug: "fasolia",
  title: "Fasolia (Green Beans & Carrots)",
  cuisine: "ethiopian",
  blurb:
    "Green beans and carrots stewed gently with onion, garlic, and a little turmeric — the bright, mild vegetable dish that adds color and crunch to the platter.",
  servings: 4,
  perServing: { calories: 160, protein: 5 },
  estCostPerServing: 0.73,
  roles: ["side", "lunch"],
  ingredients: [
    { item: "green beans, trimmed and halved", qty: "1 lb", cost: 1.8 },
    { item: "carrots, sliced into batons", qty: "2", cost: 0.4 },
    { item: "onion, sliced", qty: "1", cost: 0.4 },
    { item: "garlic", qty: "2 cloves", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "turmeric + oil", qty: "1/2 tsp / 2 tbsp", cost: 0.35, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion in the oil over medium heat, add garlic and turmeric, then the tomato; cook to a soft base.",
    "Add the carrots and a splash of water, cover, and cook 5 minutes.",
    "Add the green beans, cover, and stew gently until tender but still bright, 12–18 minutes.",
    "Salt to taste. Serve warm or at room temperature on the platter.",
  ],
  modernMove:
    "Don't overcook the beans to grey — pull them while still vivid and just-tender so they bring freshness and snap against the long-simmered wots.",
  notes:
    "A common fasting-day vegetable that keeps the beyaynetu platter colorful and varied; mild enough to balance the berbere-heavy dishes.",
  tags: ["vegetable", "green-beans", "fasolia", "side", "fasting"],
  sources: [
    { title: "Eleni Woldeyes — Eleni's Kitchen", url: "https://www.eleniskitchen.com/blog/2020/7/31/fossolia-recipe-ethiopian-green-beans", note: "Fossolia/fasolia: green beans and carrots with onion, garlic, and ginger." },
  ],
};
