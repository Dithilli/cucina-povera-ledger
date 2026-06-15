import type { Recipe } from "../types";

export const tortillasDeMaizOx: Recipe = {
  slug: "tortillas-de-maiz-ox",
  title: "Tortillas de Maíz (Nixtamal)",
  cuisine: "oaxacan",
  blurb:
    "Native corn cooked with cal, ground to masa, and pressed onto a screaming comal — the living foundation of every Oaxacan table, the plate and the spoon under everything else.",
  servings: 4,
  perServing: { calories: 200, protein: 5 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "dried field corn (maíz)", qty: "2 cups", cost: 0.5 },
    { item: "cal (food-grade calcium hydroxide / pickling lime)", qty: "2 tsp", cost: 0.05, spansWeeks: true },
    { item: "water", qty: "as needed" },
    { item: "salt (optional)", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Dissolve the cal in a pot of water, add the corn, bring to a boil, then simmer 15 minutes and let it steep off the heat for several hours or overnight.",
    "Drain and rinse the nixtamal, rubbing off the loosened skins until the kernels are clean.",
    "Grind to a smooth masa (metate, hand mill, or food processor), working in a little water until the dough is soft and doesn't crack at the edges.",
    "Press golf-ball portions flat between plastic and bake on a dry, very hot comal — about 30 seconds, flip, 45 seconds until it puffs, flip once more — and keep wrapped in a cloth.",
  ],
  modernMove:
    "The cal isn't optional seasoning — nixtamalization is what unlocks the corn's protein and niacin and gives masa its aroma and stretch; skip it and you have cornmeal, not tortillas.",
  notes:
    "Day-old tortillas are never waste: they become totopos, the body of entomatadas, or are torn into a brothy sopa de guías. The cooking liquid (nejayote) can even feed the garden.",
  zeroWasteHero: false,
  tags: ["oaxacan", "masa", "corn", "nixtamal", "base", "tortilla"],
  sources: [
    {
      title: "Breadtopia — How to Nixtamalize Corn for Tortillas, Tamales, Posole and More",
      url: "https://breadtopia.com/how-to-nixtamalize-corn-for-tortillas-tamales-posole-and-more/",
      note: "cal ratio, cook-and-steep timing, rinsing the nixtamal, and grinding to masa",
    },
  ],
};
