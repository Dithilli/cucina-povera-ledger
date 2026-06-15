import type { Recipe } from "../types";

export const doroWot: Recipe = {
  slug: "doro-wot",
  title: "Doro Wot",
  cuisine: "ethiopian",
  blurb:
    "The national feast dish — chicken and hard-boiled eggs slow-braised in a deep berbere sauce built on an enormous, patient onion sweat. The one indulgence at the end of the fast.",
  servings: 6,
  perServing: { calories: 380, protein: 28 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken, cut into pieces (or thighs/legs)", qty: "1 (~3 1/2 lb)", cost: 7.0 },
    { item: "red onions, very finely chopped", qty: "4 large", cost: 2.0 },
    { item: "berbere", qty: "1/4 cup", cost: 1.0, spansWeeks: true },
    { item: "niter kibbeh", qty: "1/4 cup", cost: 0.6, spansWeeks: true },
    { item: "garlic + ginger, minced", qty: "5 cloves / 2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "hard-boiled eggs, peeled", qty: "6", cost: 1.5 },
    { item: "lemon + salt", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Toss the chicken with lemon juice and salt and set aside (a traditional cleansing and brightening step).",
    "Cook the chopped onions in a dry heavy pot over medium-low heat, stirring often, until they collapse, dry out, and turn deeply golden-brown — 30–45 minutes. This long, dry onion sweat is the soul of doro wot; do not rush or oil it.",
    "Stir in the niter kibbeh and bloom the berbere in it for several minutes until darkened and fragrant. Add the garlic and ginger.",
    "Add the chicken and a little hot water, cover, and braise gently 40–60 minutes, turning the pieces, until the chicken is falling-tender and the sauce is thick, glossy, and brick-red.",
    "Prick the hard-boiled eggs all over and nestle them into the sauce for the last 15 minutes so they take on the color and spice. Salt to taste and serve over injera.",
  ],
  modernMove:
    "Everything rides on the 30–45 minute dry onion melt — taken to deep brown with no added fat, it's the flavor base the whole dish is built on. Bloom the berbere thoroughly in the niter kibbeh before any liquid; that spiced-fat foundation is the cuisine's mirepoix.",
  notes:
    "The classic break-the-fast feast, traditionally served when the Orthodox fasting season ends. One chicken and six eggs feed a whole table over a platter of injera.",
  tags: ["doro-wot", "chicken", "feast", "berbere", "dinner"],
};
