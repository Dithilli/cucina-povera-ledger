import type { Recipe } from "../types";

export const galinhada: Recipe = {
  slug: "galinhada",
  title: "Galinhada",
  cuisine: "brazilian",
  blurb:
    "A one-pot caipira classic where bone-in chicken browns hard in its own fat, then simmers the rice right in the pot until every grain glows orange with annatto and turmeric and the whole thing is studded with sweet green peas.",
  servings: 2,
  perServing: { calories: 620, protein: 30 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs and drumsticks", qty: "3/4 lb", cost: 1.6 },
    { item: "long-grain white rice", qty: "1 cup", cost: 0.3, spansWeeks: true },
    { item: "onion, diced", qty: "1 small", cost: 0.2 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "annatto (colorau) and ground turmeric (açafrão-da-terra)", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "frozen green peas", qty: "1/2 cup", cost: 0.3 },
    { item: "scallions and parsley (cheiro-verde), chopped", qty: "small handful", cost: 0.2 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Season the chicken with salt, pepper and the crushed garlic; brown the pieces hard in oil in a wide heavy pot until deeply golden, then lift them out.",
    "Soften the onion in the rendered fat, add the tomato, annatto and turmeric, and cook to a loose, rust-colored refogado.",
    "Stir in the dry rice to toast it in the seasoned oil, settle the chicken back on top, then pour in 2 cups boiling water, cover, and cook low for about 18 minutes until the rice drinks it all up.",
    "Scatter the peas over the top in the last 5 minutes so they steam through but stay bright.",
    "Rest the pot covered off the heat, fluff with a fork, and finish with a fistful of cheiro-verde.",
  ],
  modernMove:
    "Brown the chicken until the skin is truly lacquered before the rice goes in — that fond is the whole dish's backbone, so deglaze it into the rice rather than scrubbing it away.",
  notes:
    "From Goiás and Minas Gerais, born of the roadside and the farmyard: one bird, a handful of rice, and whatever was in the garden, cooked in a single pot to feed the table.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "rice", "one-pot", "brazilian", "caipira"],
  sources: [
    {
      title: "196 flavors — Galinhada",
      url: "https://www.196flavors.com/brazil-galinhada/",
      note: "One-pot bone-in chicken and rice colored with turmeric/annatto and finished with peas",
    },
  ],
};
