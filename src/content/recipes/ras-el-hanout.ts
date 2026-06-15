import type { Recipe } from "../types";

export const rasElHanout: Recipe = {
  slug: "ras-el-hanout",
  title: "Ras el Hanout",
  cuisine: "moroccan",
  blurb:
    "The master spice blend — \"top of the shop\" — warm, floral, and faintly sweet, ground from a dozen toasted spices and stirred into every tagine, couscous, and rub.",
  servings: 24,
  perServing: { calories: 18, protein: 1 },
  estCostPerServing: 0.12,
  roles: ["base"],
  ingredients: [
    { item: "cumin seeds", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "coriander seeds", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "ground ginger", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cinnamon", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "black peppercorns", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "turmeric, paprika", qty: "1 tbsp each", cost: 0.4, spansWeeks: true },
    { item: "cardamom, nutmeg, mace, allspice, cloves", qty: "1 tsp each", cost: 0.6, spansWeeks: true },
    { item: "dried rosebud or pinch of saffron (optional)", qty: "1 tsp", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Toast the whole spices — cumin, coriander, peppercorns, cardamom, cloves — in a dry skillet over medium heat until fragrant, about 2 minutes; do not let them scorch.",
    "Cool completely, then grind to a fine powder in a spice mill.",
    "Stir in the pre-ground spices (ginger, cinnamon, turmeric, paprika, nutmeg, mace, allspice) and the rose or saffron.",
    "Store in a sealed jar away from light; use within 3–6 months for the brightest flavor.",
  ],
  modernMove:
    "Toast and grind the whole spices yourself rather than buying it pre-blended — the volatile oils released in the pan are exactly what fade in jarred mixes, and they're the whole point of ras el hanout.",
  notes:
    "The flavor spine of the cuisine: a pinch lifts tagines, lentils, couscous, and roasted vegetables alike. Recipes range from a dozen to fifty spices.",
  tags: ["base", "moroccan", "spice-blend", "foundation"],
  sources: [
    {
      title: "An Edible Mosaic — Authentic Ras el Hanout (Moroccan Spice Mix)",
      url: "https://www.anediblemosaic.com/ras-el-hanout-moroccan-spice-mix/",
      note: "Confirms the warm, floral spice roster and toasting whole spices before grinding for a fresh blend.",
    },
  ],
};
