import type { Recipe } from "../types";

export const nopalesConHuevo: Recipe = {
  slug: "nopales-con-huevo",
  title: "Nopales con Huevo",
  cuisine: "mexican",
  blurb:
    "Cactus paddles — nearly free, full of fiber — griddled and folded into eggs with onion and chile. The milpa's most frugal green meets the everyday protein.",
  servings: 2,
  perServing: { calories: 240, protein: 15 },
  estCostPerServing: 1.08,
  roles: ["breakfast", "lunch"],
  ingredients: [
    { item: "nopales (cactus paddles), cleaned and diced", qty: "2 cups", cost: 0.8 },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "white onion, diced", qty: "1/4", cost: 0.15 },
    { item: "serrano, minced", qty: "1", cost: 0.2 },
    { item: "oil, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Griddle or boil the diced nopales until they lose their bright squeak and any sliminess cooks off; drain well.",
    "Soften onion and chile in a little oil, add the nopales, and let them dry out and lightly brown.",
    "Pour in beaten, salted eggs and fold gently until just set.",
    "Serve with warm tortillas and salsa.",
  ],
  modernMove:
    "Cook the nopales dry first — driving off their moisture before the eggs go in keeps the scramble from going watery and concentrates their green, lemony flavor.",
  tags: ["nopales", "eggs", "verduras", "milpa", "breakfast"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Easy Nopales and Eggs",
      url: "https://www.mexicoinmykitchen.com/easy-nopales-and-eggs-recipe/",
      note: "Cooking nopales down before folding into eggs with onion and chile.",
    },
    {
      title: "Maricruz Avalos — Nopales con Huevo",
      url: "https://www.maricruzavalos.com/nopales-con-huevo/",
      note: "Drying out the cactus first to avoid a watery scramble.",
    },
  ],
};
