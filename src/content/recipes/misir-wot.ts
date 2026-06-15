import type { Recipe } from "../types";

export const misirWot: Recipe = {
  slug: "misir-wot",
  title: "Misir Wot",
  cuisine: "ethiopian",
  blurb:
    "The fiery brick-red red-lentil stew at the heart of every fasting platter — onions sweated to nothing, berbere bloomed in niter kibbeh, lentils melting into a silky, deep-flavored wot.",
  servings: 4,
  perServing: { calories: 320, protein: 16 },
  estCostPerServing: 0.65,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "split red lentils (or a pot of cooked red lentils)", qty: "1 1/2 cups dry", cost: 1.2 },
    { item: "red onion, very finely chopped", qty: "2 large", cost: 1.0 },
    { item: "berbere", qty: "2–3 tbsp", cost: 0.5, spansWeeks: true },
    { item: "niter kibbeh (or oil)", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "garlic + ginger, minced", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "tomato paste, optional", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sweat the onions in a dry or barely-oiled pot over medium-low heat, stirring, until they collapse and turn jammy — 15–20 minutes. This long, patient onion melt is the foundation; don't rush it.",
    "Push the onions aside, add the niter kibbeh, and bloom the berbere in the hot fat for a minute until it darkens and goes fragrant (don't let it scorch). Stir in the garlic, ginger, and tomato paste.",
    "Add the rinsed red lentils (or the cooked-lentil base) and enough hot water to cover. Simmer, stirring often, until the lentils break down and the wot thickens to a silky, spoon-coating stew — 25–40 minutes if starting from dry.",
    "Loosen with hot water as needed; the texture should be a loose purée, not a paste. Salt to taste. Serve over injera.",
  ],
  modernMove:
    "The whole dish lives or dies on two moves done right: a long, low onion sweat (no oil needed at first — they release their own water) and blooming the berbere in hot niter kibbeh before any liquid goes in. Treat that spiced-fat base like a French roux of flavor.",
  notes:
    "Eaten with injera and a spoon of shiro, a plate of misir wot clears a big chunk of the day's protein floor with no meat at all.",
  tags: ["wot", "lentils", "berbere", "dinner", "fasting"],
};
