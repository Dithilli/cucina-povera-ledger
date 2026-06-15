import type { Recipe } from "../types";

export const waliWaNazi: Recipe = {
  slug: "wali-wa-nazi",
  title: "Wali wa Nazi",
  cuisine: "east-african",
  blurb:
    "The coast's everyday base-plus — basmati simmered in coconut milk until each grain turns plush and faintly sweet, the creamy bed that carries any stew, curry, or just a spoon of beans.",
  servings: 4,
  perServing: { calories: 420, protein: 8 },
  estCostPerServing: 0.7,
  roles: ["base", "side"],
  ingredients: [
    { item: "basmati rice", qty: "2 cups", cost: 0.9 },
    { item: "coconut milk", qty: "1 1/2 cups", cost: 1.0 },
    { item: "water", qty: "1 1/2 cups", cost: 0 },
    { item: "onion, sliced thin (optional)", qty: "1/2", cost: 0.1 },
    { item: "whole cumin seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the basmati until the water runs clear, then drain.",
    "If using, soften the onion in a little oil with the cumin seeds until fragrant; otherwise just toast the cumin in the dry pot.",
    "Pour in the coconut milk, water, and salt and bring to a gentle boil.",
    "Add the rinsed rice, stir once, and let it boil until the liquid drops to the surface of the grains.",
    "Cover tight, steam on the lowest heat 15–18 minutes, then rest 5 and fluff — the grains should be plump, separate, and faintly sweet.",
  ],
  modernMove:
    "Cut the coconut milk roughly half-and-half with water — full-strength coconut scorches and turns gluey, but a balanced ratio gives you that rich coastal richness with grains that still stay separate.",
  notes:
    "Born of the coconut palms lining the Kenyan-Tanzanian coast; pair it with maharage (beans) for a Mombasa breakfast, or use it as the everyday bed under kuku wa kupaka or any saucy stew.",
  zeroWasteHero: false,
  tags: ["rice", "coconut", "wali", "base", "east-african"],
  sources: [
    {
      title: "Kaluhi Adagala — Kaluhi's Kitchen (Wali wa Nazi with Whole Cumin Seeds)",
      url: "https://www.kaluhiskitchen.com/wali-wa-nazi-with-whole-cumin-seeds/",
      note: "Basmati simmered in a coconut-milk-and-water mix with toasted cumin, then steamed to plump, separate grains.",
    },
  ],
};
