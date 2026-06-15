import type { Recipe } from "../types";

export const huevosRancheros: Recipe = {
  slug: "huevos-rancheros",
  title: "Huevos Rancheros",
  cuisine: "mexican",
  blurb:
    "Fried eggs over warm tortillas flooded with salsa roja, beans alongside — the rancher's breakfast that turns four cheap staples into a full, restorative plate.",
  servings: 2,
  perServing: { calories: 430, protein: 20 },
  estCostPerServing: 0.85,
  roles: ["breakfast"],
  ingredients: [
    { item: "corn tortillas", qty: "4" },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "salsa roja asada", qty: "1 1/2 cups" },
    { item: "refried beans, to serve", qty: "1 cup" },
    { item: "queso fresco, crumbled", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "oil or lard", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Warm the tortillas on the comal and keep them soft. Heat the salsa roja in a pan.",
    "Fry the eggs in a little fat, sunny-side up, until the whites set but the yolks stay runny.",
    "Lay two tortillas per plate, set the eggs on top, and ladle the warm salsa around (not over) the yolks.",
    "Add a scoop of refried beans, crumble over queso fresco, and serve at once.",
  ],
  modernMove:
    "Keep the salsa hot and the yolk runny — the plate is built so the broken yolk and the salsa emulsify together as you eat, the way the chilaquiles trick works.",
  tags: ["eggs", "breakfast", "salsa", "beans", "tortilla"],
};
