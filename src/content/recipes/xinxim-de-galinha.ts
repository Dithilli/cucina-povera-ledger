import type { Recipe } from "../types";

export const xinximDeGalinha: Recipe = {
  slug: "xinxim-de-galinha",
  title: "Xinxim de Galinha",
  cuisine: "brazilian",
  blurb:
    "A Bahian Afro-Brazilian chicken stew swathed in a thick, nutty sauce ground from dried shrimp, peanuts and cashews, lit up by the deep red of dendê palm oil — a little chicken made sumptuous by the larder of the terreiro.",
  servings: 2,
  perServing: { calories: 600, protein: 28 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs", qty: "3/4 lb", cost: 1.6 },
    { item: "dried shrimp", qty: "1/3 cup", cost: 0.9, spansWeeks: true },
    { item: "raw peanuts", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "cashews", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "onion, chopped", qty: "1 small", cost: 0.2 },
    { item: "garlic and fresh ginger", qty: "3 cloves + thumb", cost: 0.2, spansWeeks: true },
    { item: "dendê (palm) oil", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "lime", qty: "1", cost: 0.2 },
    { item: "cilantro, chopped", qty: "small handful", cost: 0.2 },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Marinate the chicken in lime juice, garlic, ginger, salt and pepper for as long as you have.",
    "Toast the peanuts, cashews and most of the dried shrimp in a dry pan, then grind them to a coarse paste with the onion and a little water.",
    "Brown the marinated chicken, then stir in the ground nut-and-shrimp paste and cook it out until fragrant and deepened.",
    "Loosen with hot water to a thick sauce, cover, and simmer until the chicken is tender, 25–30 minutes.",
    "Finish by stirring in the dendê oil and the rest of the whole dried shrimp; warm through off a hard boil so the oil stays bright, and scatter with cilantro to serve over white rice.",
  ],
  modernMove:
    "Add the dendê at the very end rather than cooking in it — folding the palm oil in off the heat keeps its color glowing red and its grassy aroma intact instead of frying it dull.",
  notes:
    "From Bahia's Afro-Brazilian kitchen, kin to the orixá offerings; dried shrimp, peanuts and dendê do the heavy lifting so a modest amount of chicken eats rich.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "bahian", "dende", "dried-shrimp", "brazilian", "afro-brazilian"],
  sources: [
    {
      title: "Margarita's International Recipes — Xinxim de Galinha (Bahian Chicken Stew)",
      url: "https://marga.org/food/int/bahia/xinxim.html",
      note: "Chicken in a ground dried-shrimp, peanut and cashew sauce finished with dendê palm oil",
    },
  ],
};
