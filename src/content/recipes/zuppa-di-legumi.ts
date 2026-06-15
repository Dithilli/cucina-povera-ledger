import type { Recipe } from "../types";

export const zuppaDiLegumi: Recipe = {
  slug: "zuppa-di-legumi",
  title: "Zuppa di Legumi",
  cuisine: "italian",
  blurb:
    "A mixed-legume soup — whatever beans, lentils, and chickpeas are in the cupboard, simmered with soffritto into a thick, frugal pot.",
  servings: 4,
  perServing: { calories: 410, protein: 21 },
  estCostPerServing: 0.65,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "mixed dried legumes (beans, lentils, chickpeas), soaked",
      qty: "2 cups",
      cost: 1.1,
    },
    {
      item: "onion, carrot, celery (soffritto), diced",
      qty: "1 onion, 1 carrot, 1 celery stalk",
      cost: 0.5,
    },
    { item: "garlic cloves; rosemary or bay", qty: "3 cloves, 1 sprig", cost: 0.2, spansWeeks: true },
    {
      item: "tomato paste or 1/2 can tomatoes",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "Parmesan rind (optional)",
      qty: "1",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "olive oil, chili, salt, pepper",
      qty: "3 tbsp oil",
      cost: 0.45,
      spansWeeks: true,
    },
  ],
  method: [
    "Build the soffritto in olive oil until sweet; add garlic, rosemary, and tomato.",
    "Add the soaked legumes, the Parmesan rind, and water to cover well. Simmer 45–60 minutes until everything is tender (add the quicker-cooking lentils partway if mixing).",
    "Purée or mash about a third of the pot for body, then loosen with water to a thick, spoonable soup. Season.",
    "Rest, fish out the rind, and finish with raw olive oil, chili, and pepper. Grilled bread alongside.",
  ],
  modernMove:
    "Blend just part of the pot back in — half the soup stays brothy and whole, half turns creamy, so it reads as composed rather than mushy.",
  tags: ["legumes", "soup", "one-pot", "protein-forward", "frugal"],
  sources: [
    {
      title: "List of Italian soups — Wikipedia",
      url: "https://en.wikipedia.org/wiki/List_of_Italian_soups",
      note: "Mixed-legume soups in the Italian frugal soup tradition",
    },
  ],
};
