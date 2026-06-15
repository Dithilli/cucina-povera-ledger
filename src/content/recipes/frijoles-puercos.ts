import type { Recipe } from "../types";

export const frijolesPuercos: Recipe = {
  slug: "frijoles-puercos",
  title: "Frijoles Puercos",
  cuisine: "mexican",
  blurb:
    "Refried beans enriched with chorizo and melted cheese, studded with chile — the festive, indulgent end-of-week beans that turn the humble pot into a party dip.",
  servings: 4,
  perServing: { calories: 360, protein: 16 },
  estCostPerServing: 1.0,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "cooked beans (or refritos), with broth", qty: "4 cups" },
    { item: "chorizo", qty: "3 oz", cost: 1.2, spansWeeks: true },
    { item: "Oaxaca or melting cheese", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "chiles (jalapeño en escabeche or chipotle)", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "oil/lard, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Render the chorizo until crisp and it gives up its red fat.",
    "Add the beans and mash them into the chorizo fat over the heat, loosening with broth, until thick and glossy (as for refritos).",
    "Stir in chiles, fold in the cheese until it melts into strings, and check for salt.",
    "Serve hot with tortillas or totopos — a meal, a side, or a dip.",
  ],
  modernMove:
    "Build on the chorizo's rendered fat the way refritos build on lard — the bean paste carries the chorizo flavor through the whole dish, so a few ounces go a long way.",
  zeroWasteHero: true,
  tags: ["beans", "chorizo", "cheese", "guiso", "festive"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Frijoles Puercos (Dirty Beans Dip)",
      url: "https://www.mexicoinmykitchen.com/dirty-beans-dip-recipe/",
      note: "Sinaloa-style refried beans enriched with chorizo, melting cheese, and chiles.",
    },
  ],
};
