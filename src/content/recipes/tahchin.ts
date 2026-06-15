import type { Recipe } from "../types";

export const tahchin: Recipe = {
  slug: "tahchin",
  title: "Tahchin",
  cuisine: "persian",
  blurb:
    "A baked saffron-yogurt rice cake with a lacquered golden crust, hiding a little shredded chicken inside — feast-day looks from a thrifty handful of meat.",
  servings: 6,
  perServing: { calories: 620, protein: 22 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "3 cups", cost: 2.1 },
    { item: "bone-in chicken thigh or leg", qty: "1 large piece (~3/4 lb)", cost: 1.8 },
    { item: "plain whole-milk yogurt", qty: "1 cup", cost: 0.7 },
    { item: "eggs", qty: "2", cost: 0.5 },
    {
      item: "saffron, bloomed in 3 tbsp hot water",
      qty: "generous pinch",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "neutral oil or melted butter",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "onion, halved", qty: "1", cost: 0.3 },
    {
      item: "dried barberries (zereshk), optional garnish",
      qty: "2 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "salt, black pepper, turmeric", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Poach the chicken with the onion, a little salt, pepper, and turmeric in just enough water to cover, 30–40 minutes, until tender. Cool, then shred the meat and discard skin and bone (save the broth for soup).",
    "Soak the rinsed rice in salted water 30 minutes, then parboil in plenty of boiling salted water for about 6 minutes until soft outside, firm inside; drain.",
    "Whisk the yogurt, eggs, half the saffron water, and salt. Fold in about a third of the parboiled rice to make the rich crust layer.",
    "Oil the bottom of a heavy pot or baking dish well. Spread the yogurt-rice mixture flat and press firm — this becomes the crisp tahdig cake. Mound the plain rice on top, tucking the shredded chicken through the middle.",
    "Drizzle the rest of the saffron water and a little oil over, cover (lid wrapped in a towel, or foil), and bake at 375°F / steam on lowest heat for 50–60 minutes until the base is set and deep gold.",
    "Rest 5 minutes, then invert onto a platter so the saffron crust faces up. Scatter with quickly fried barberries and cut into wedges like a cake.",
  ],
  modernMove:
    "Binding the crust layer with yogurt and egg, not just oil, sets it into a sliceable golden cake — the tahdig becomes the whole structure, so a small piece of chicken reads as a celebration dish.",
  tags: ["rice", "tahdig", "saffron", "yogurt", "chicken", "baked"],
};
