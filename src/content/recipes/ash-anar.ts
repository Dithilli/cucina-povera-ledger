import type { Recipe } from "../types";

export const ashAnar: Recipe = {
  slug: "ash-anar",
  title: "Ash-e Anar",
  cuisine: "persian",
  blurb:
    "A sweet-tart northern pottage built on pomegranate — herbs, yellow split peas and rice simmered in pomegranate juice and molasses, finished with little meatballs or extra beans for the thrifty version.",
  servings: 6,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    {
      item: "yellow split peas",
      qty: "1/2 cup",
      cost: 0.4,
    },
    {
      item: "rice (any short or medium grain)",
      qty: "1/3 cup",
      cost: 0.25,
    },
    {
      item: "parsley, cilantro and chives, chopped",
      qty: "2 bunches total",
      cost: 1.8,
    },
    {
      item: "spinach or beet greens, chopped",
      qty: "1/2 lb",
      cost: 0.75,
    },
    { item: "onions, sliced", qty: "2 large", cost: 0.6 },
    {
      item: "unsweetened pomegranate juice",
      qty: "2 cups",
      cost: 2.0,
    },
    {
      item: "pomegranate molasses",
      qty: "2 tbsp",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "ground beef or lamb for tiny meatballs (optional — sub an extra 1/2 cup beans for the frugal version)",
      qty: "1/4 lb",
      cost: 1.2,
    },
    {
      item: "turmeric",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "garlic cloves, minced",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "dried mint",
      qty: "1 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "sugar (to balance the tartness)",
      qty: "1–2 tsp",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "oil or ghee",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Fry the onions in the oil until golden, reserving some for garnish; stir in the turmeric and half the garlic.",
    "Add the split peas and rice with water and simmer 30 minutes until both are soft and the rice has started to thicken the pot.",
    "If using meat, roll it with a little grated onion, salt and pepper into hazelnut-sized koofteh and simmer them in; otherwise add the extra beans.",
    "Add the chopped herbs and greens and cook down 20 minutes into a thick green base.",
    "Pour in the pomegranate juice and molasses and simmer gently 15–20 minutes. Taste and balance the sweet-and-sour edge with sugar and salt — it should be tart but rounded, never sharp.",
    "Make mint oil by frying the dried mint and remaining garlic briefly. Finish bowls with the reserved onion, mint oil and a few pomegranate arils if you have them.",
  ],
  modernMove:
    "Tasting and tuning the pomegranate against a pinch of sugar at the end is the whole dish — you're chasing that hovering sweet-tart balance, the same one that makes fesenjan sing, but in a frugal pottage form.",
  tags: [
    "pottage",
    "pomegranate",
    "legumes",
    "herbs",
    "sweet-sour",
    "ash",
    "one-pot",
  ],
  sources: [
    {
      title: "The Caspian Chef — Aash-e Anar (Pomegranate Soup)",
      url: "https://thecaspianchef.com/2020/12/aash-e-anar-pomegranate-soup-with-meatballs/",
      note: "Sweet-tart pomegranate pottage with yellow split peas, herbs and optional meatballs, balanced with pomegranate juice and molasses.",
    },
  ],
};
