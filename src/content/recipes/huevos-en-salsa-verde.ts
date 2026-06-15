import type { Recipe } from "../types";

export const huevosEnSalsaVerde: Recipe = {
  slug: "huevos-en-salsa-verde",
  title: "Huevos en Salsa Verde",
  cuisine: "mexican",
  blurb:
    "Eggs slipped into a simmering tomatillo-and-serrano salsa until just set — the tang of the tomatillos drinking into the yolks. A whole comforting plate built from a handful of green things and a few eggs.",
  servings: 2,
  perServing: { calories: 320, protein: 16 },
  estCostPerServing: 0.8,
  roles: ["breakfast", "dinner"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "tomatillos, husked", qty: "8–10 (about 1/2 lb)", cost: 0.7 },
    { item: "serrano chiles", qty: "1–2", cost: 0.2 },
    { item: "white onion", qty: "1/4", cost: 0.15 },
    { item: "garlic", qty: "1 clove", cost: 0.1, spansWeeks: true },
    { item: "cilantro", qty: "a handful", cost: 0.15 },
    { item: "oil or lard", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Roast or boil the tomatillos, serranos, onion, and garlic until the tomatillos turn olive-drab and soften.",
    "Blend them with the cilantro and a splash of water into a loose, bright salsa.",
    "Pour the salsa into a little hot fat and simmer 5 minutes until it deepens and thickens slightly; season with salt.",
    "Crack the eggs into the simmering salsa, cover, and poach over low heat until the whites set and the yolks are still soft, 5–7 minutes.",
    "Serve straight from the pan with warm tortillas to scoop everything up.",
  ],
  modernMove:
    "Cook the blended salsa down a few minutes before the eggs go in — it concentrates the tomatillo and keeps the eggs from watering it out as they poach.",
  notes: "Scrambling the eggs into the salsa instead of poaching is the equally traditional weekday shortcut.",
  tags: ["eggs", "salsa-verde", "tomatillo", "breakfast", "dinner", "quick"],
  sources: [
    {
      title: "Maricruz Avalos — Huevos en Salsa Verde",
      url: "https://www.maricruzavalos.com/huevos-en-salsa-verde/",
      note: "tomatillo-serrano salsa with eggs cooked into it; ratios and the scramble-vs-poach approach",
    },
    {
      title: "Mely Martínez — Mexico in My Kitchen, Salsa Verde",
      url: "https://www.mexicoinmykitchen.com/salsa-verde-recipe/",
      note: "base tomatillo-serrano salsa verde method (roast/boil then blend with cilantro)",
    },
  ],
};
