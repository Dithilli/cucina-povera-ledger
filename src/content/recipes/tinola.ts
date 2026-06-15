import type { Recipe } from "../types";

export const tinola: Recipe = {
  slug: "tinola",
  title: "Tinola (Ginger Chicken Soup)",
  cuisine: "filipino",
  blurb:
    "A clear, gingery chicken broth with green papaya or chayote and a tangle of leafy greens — gentle, restorative, and built on a single cut-up chicken.",
  servings: 4,
  perServing: { calories: 460, protein: 33 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    {
      item: "bone-in chicken pieces (thighs, drumsticks, or a cut-up whole chicken), skin on",
      qty: "1 1/2 lb",
      cost: 3.5,
    },
    { item: "fresh ginger, peeled and sliced into coins", qty: "2 in", cost: 0.4, spansWeeks: true },
    { item: "garlic cloves, smashed", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    {
      item: "green papaya, or chayote (sayote), peeled and in wedges",
      qty: "1 small",
      cost: 0.8,
    },
    {
      item: "chili leaves (dahon ng sili), malunggay, spinach, or bok choy",
      qty: "2 big handfuls",
      cost: 0.7,
    },
    { item: "fish sauce (patis), salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sauté the ginger, garlic, and onion in a little oil until fragrant and softened — really let the ginger bloom, since it carries the whole soup.",
    "Add the chicken pieces and stir until they lose their raw color, seasoning with a splash of fish sauce to draw out flavor.",
    "Pour in water to cover generously, bring to a boil, skim the scum, then simmer 30-35 minutes until the chicken is tender and the broth is golden.",
    "Add the green papaya or chayote and cook 8-10 minutes until tender. Season with fish sauce and pepper, then stir in the leafy greens and turn off the heat to wilt. Serve with rice.",
  ],
  modernMove:
    "A heavy hand with ginger and a real sauté of the aromatics before the water goes in turns plain chicken-and-water into a fragrant, clear broth with no thickener needed.",
  notes:
    "Green papaya is the traditional vegetable; chayote is the cheap, year-round stand-in. One bird, plenty of water, and a few cents of greens feed the table.",
  tags: ["soup", "chicken", "ginger", "papaya", "chayote", "greens", "one-pot"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy (Tinolang Manok)", url: "https://panlasangpinoy.com/classic-tinolang-manok-recipe/", note: "Blooming ginger and aromatics before the water for a clear, fragrant broth" },
    { title: "Bebs — Foxy Folksy", url: "https://www.foxyfolksy.com/chicken-tinola/", note: "Green papaya or chayote and leafy greens added at the end" },
  ],
};
