import type { Recipe } from "../types";

export const tamalesChepil: Recipe = {
  slug: "tamales-chepil",
  title: "Tamales de Chepil",
  cuisine: "oaxacan",
  blurb:
    "Pale-green masa flecked with wild chepil — the bitter, anise-scented rainy-season herb — steamed in banana leaf with nothing but a little quesillo and a few drops of tomato salsa.",
  servings: 6,
  perServing: { calories: 430, protein: 11 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh nixtamal masa (or masa harina reconstituted)", qty: "2 lb", cost: 3.0 },
    { item: "chepil leaves, picked from the stems", qty: "3 packed cups", cost: 1.5 },
    { item: "manteca (lard), beaten until fluffy", qty: "2/3 cup", cost: 1.0, spansWeeks: true },
    { item: "quesillo (Oaxacan string cheese), pulled", qty: "1 cup", cost: 1.5, spansWeeks: true },
    { item: "banana leaves, passed over the flame", qty: "1 large package", cost: 1.5 },
    { item: "tomato salsa, to serve", qty: "1 cup", cost: 0.5 },
    { item: "salt, baking powder", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Beat the manteca until fluffy, then work in the masa, salt, a pinch of baking powder, and warm water until a spoonful floats — light and spreadable.",
    "Fold the picked chepil leaves through the masa until it turns a flecked spring green and smells faintly of green beans and anise.",
    "Pass banana-leaf squares over the flame until pliable; spread a rectangle of chepil masa on each and tuck a few threads of quesillo down the center.",
    "Fold into flat envelopes, tuck the ends under, and stack flat in a steamer.",
    "Steam 50–60 minutes until the masa peels cleanly from the leaf; serve with a few drops of tomato salsa.",
  ],
  modernMove:
    "Pick the chepil leaves off their stems and fold them in raw at the very end — they wilt and perfume the masa in the steamer without going to mush, which is why the herb season (June rains) defines this tamal.",
  notes:
    "An emblematic tamal of the Central Valleys: the Zapotecs and Mixtecs have gathered chepil with the first rains since pre-Hispanic times. Frugal and almost meatless.",
  zeroWasteHero: false,
  tags: ["tamales", "chepil", "oaxacan", "vegetarian", "dinner"],
  sources: [
    {
      title: "Recetas Mexas — Tamales de Chepil (Oaxacan Chepil Herb Tamales)",
      url: "https://recetasmexas.com/en-us/recipe/tamales-de-chepil",
      note: "folding raw chepil into masa, banana-leaf wrap, quesillo and tomato-salsa finish",
    },
  ],
};
