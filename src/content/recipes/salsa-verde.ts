import type { Recipe } from "../types";

export const salsaVerde: Recipe = {
  slug: "salsa-verde",
  title: "Salsa Verde",
  cuisine: "mexican",
  blurb:
    "Tomatillos and green chile, raw-blended for brightness or boiled for mellow depth — the tart, herbaceous counterweight to everything else on the table.",
  servings: 8,
  perServing: { calories: 25, protein: 1 },
  estCostPerServing: 0.2,
  roles: ["side"],
  ingredients: [
    { item: "tomatillos, husked and rinsed", qty: "8", cost: 1.2 },
    { item: "serrano or jalapeño", qty: "1–2", cost: 0.2 },
    { item: "garlic clove", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "white onion", qty: "1/4", cost: 0.15 },
    { item: "cilantro", qty: "a handful", cost: 0.3 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the tomatillos and chile in a little water until they turn olive-drab and soft, 5–8 minutes (or char them on the comal for a roasted version).",
    "Blend with the garlic, onion, and cilantro.",
    "Season with salt and thin with a little of the cooking water if needed.",
    "Use warm or cold — it sharpens as it sits.",
  ],
  modernMove:
    "Decide the register: raw-blended tomatillos give a grassy, electric salsa; boiled or charred ones give a rounder, sweeter sauce for braising. Same four ingredients, two different jobs.",
  tags: ["salsa", "tomatillo", "condiment", "side", "green"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Salsa Verde (Tomatillo Sauce)",
      url: "https://www.mexicoinmykitchen.com/salsa-verde-recipe/",
      note: "Simmered tomatillos and chile blended with garlic, onion, and cilantro.",
    },
  ],
};
