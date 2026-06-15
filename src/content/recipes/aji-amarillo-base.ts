import type { Recipe } from "../types";

export const ajiAmarilloBase: Recipe = {
  slug: "aji-amarillo-base",
  title: "Ají Amarillo (Base)",
  cuisine: "andean",
  blurb:
    "The fruity, sun-gold chili paste that lives under nearly every Andean pot — peppers blanched soft and blended smooth, the single base that flavors stews, marinades, and salsas all week.",
  servings: 16,
  perServing: { calories: 45, protein: 1 },
  estCostPerServing: 0.15,
  roles: ["base"],
  ingredients: [
    { item: "ají amarillo chilies, fresh or frozen, deseeded", qty: "8 (about 10 oz)", cost: 1.8 },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Halve the chilies and pull out the seeds and white ribs — that's where the harshest heat lives, so removing them leaves the fruity flavor and a gentler burn.",
    "Blanch the chilies in boiling water for 5 minutes, drain, and repeat once or twice if you want it milder; each change of water tames the heat.",
    "Warm the oil and soften the drained chilies in it for a few minutes to round out the flavor.",
    "Blend the chilies with the oil and salt to a silky paste, adding a splash of water only if needed. Cool and store in a jar.",
  ],
  modernMove:
    "Blanch-and-change-the-water is the dial: each swap pulls heat without losing the bright, almost mango-like aroma that defines amarillo. Blended with oil it emulsifies into a glossy paste that freezes for months.",
  notes:
    "The constant base of the Andean kitchen — a spoonful goes into lentejas, habas, marinades, and salsa criolla. Keeps a week refrigerated and freezes well in an ice-cube tray.",
  zeroWasteHero: false,
  tags: ["aji-amarillo", "chili", "base", "condiment", "andean"],
  sources: [
    {
      title: "Cravings Journal — Homemade Peruvian Ají Amarillo Paste",
      url: "https://cravingsjournal.com/homemade-peruvian-aji-amarillo-paste-yellow-chilli/",
      note: "Deseed, blanch to tame heat, then blend with oil into the base paste used across Peruvian cooking.",
    },
  ],
};
