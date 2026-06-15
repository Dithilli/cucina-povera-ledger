import type { Recipe } from "../types";

export const arakasLatheros: Recipe = {
  slug: "arakas-latheros",
  title: "Arakas Latheros (Peas & Potatoes in Olive Oil)",
  cuisine: "greek",
  blurb:
    "Peas and potatoes braised slow in olive oil with a heap of fresh dill and spring onion — a sweet, green, springtime ladero you eat as dinner with feta and bread.",
  servings: 4,
  perServing: { calories: 340, protein: 12 },
  estCostPerServing: 1.0,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "peas, fresh or frozen", qty: "1 lb", cost: 1.6 },
    { item: "potatoes, cut into chunks", qty: "2 medium", cost: 0.5 },
    { item: "onion, chopped", qty: "1", cost: 0.4 },
    { item: "spring onions, sliced", qty: "3", cost: 0.5 },
    { item: "carrot, diced (optional)", qty: "1", cost: 0.2 },
    { item: "ripe tomato, grated", qty: "1", cost: 0.3 },
    {
      item: "olive oil",
      qty: "1/2 cup",
      cost: 1.2,
      spansWeeks: true,
    },
    { item: "fresh dill, chopped — a big handful, it's a co-star", qty: "1 bunch", cost: 0.5 },
    { item: "salt, black pepper, lemon to finish", qty: "to taste", spansWeeks: true },
    { item: "to serve: feta and bread", qty: "for the table", cost: 0.6 },
  ],
  method: [
    "Soften the onion and spring onion in the olive oil over medium-low heat until sweet, then add the carrot and potatoes and turn to coat.",
    "Stir in the grated tomato and a little salt, then add the peas and just enough water to barely cover. Bring to a gentle simmer.",
    "Cover and braise 25–35 minutes, until the potatoes are soft, the peas are sweet, and the liquid has reduced to a glossy oil-rich sauce.",
    "Stir in most of the dill, season with salt and pepper, and rest off the heat. Finish each plate with the remaining dill, a squeeze of lemon, feta, and bread.",
  ],
  modernMove:
    "Add the dill in two stages — half cooked in for depth, half raw at the end for a green lift — so the dish tastes of spring rather than of long-stewed herb.",
  notes:
    "A spring ladero. With the potatoes and peas it carries a bit more protein than most ladera, but the feta alongside is still what rounds out the meal. Lovely warm or at room temperature.",
  tags: ["ladera", "arakas", "peas", "potato", "dill", "olive-oil", "spring", "vegetarian"],
};
