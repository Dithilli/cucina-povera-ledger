import type { Recipe } from "../types";

export const anguComMolho: Recipe = {
  slug: "angu-com-molho",
  title: "Angu com Molho",
  cuisine: "brazilian",
  blurb:
    "Soft fubá porridge poured into a bowl and crowned with a quick tomato-and-ground-beef refogado — the Minas Gerais weeknight that turns a fistful of cornmeal into supper.",
  servings: 2,
  perServing: { calories: 540, protein: 22 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "fubá (fine yellow cornmeal)", qty: "3/4 cup", cost: 0.3 },
    { item: "water", qty: "3 cups", cost: 0 },
    { item: "ground beef (acém or músculo)", qty: "150 g", cost: 1.4 },
    { item: "ripe tomatoes, diced", qty: "2", cost: 0.5 },
    { item: "onion, chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic, oil, salt, scallion", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Whisk the fubá into the cold water off the heat until there are no lumps — this is the trick that keeps angu smooth.",
    "Set it over medium heat and stir constantly with a wooden spoon until it thickens and pulls cleanly from the bottom of the pan, about 12 minutes; salt and keep warm.",
    "Meanwhile sweat the onion and garlic in oil, brown the ground beef hard, then add the tomato and a splash of water and simmer into a loose, glossy molho.",
    "Pour the hot angu into bowls, spoon the molho over the top, and finish with sliced scallion.",
  ],
  modernMove:
    "Dissolving the cornmeal in cold water before any heat is the no-lump shortcut — no constant frantic whisking of a boiling pot.",
  notes: "Stretches a small amount of beef across two filling bowls; leftover angu firms up and can be pan-fried the next day.",
  zeroWasteHero: false,
  tags: ["corn", "fubá", "beef", "porridge", "brazilian"],
  sources: [
    {
      title: "Comidinhas do Chef — Angu de Fubá",
      url: "https://comidinhasdochef.com/angu-de-fuba/",
      note: "creamy fubá porridge served under a saucy protein, no-lump cold-water method",
    },
  ],
};
