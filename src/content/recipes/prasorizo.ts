import type { Recipe } from "../types";

export const prasorizo: Recipe = {
  slug: "prasorizo",
  title: "Prasorizo (Leek & Rice)",
  cuisine: "greek",
  blurb:
    "Leeks melted slow in olive oil until sweet, then folded through rice and brightened with lemon — the winter cousin of spanakorizo, made from the cheapest thing in the garden.",
  servings: 4,
  perServing: { calories: 470, protein: 9 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "leeks, halved and sliced", qty: "4 large", cost: 2.4 },
    { item: "medium-grain rice", qty: "1 cup", cost: 0.6 },
    { item: "spring onions, sliced", qty: "4", cost: 0.4 },
    {
      item: "fresh dill (and a little parsley), chopped",
      qty: "1 handful",
      cost: 0.4,
    },
    {
      item: "olive oil, generous",
      qty: "1/3 cup",
      cost: 0.55,
      spansWeeks: true,
    },
    { item: "lemons", qty: "2", cost: 0.6 },
    {
      item: "tomato, grated (optional, for a red prasorizo)",
      qty: "1",
      cost: 0.3,
    },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Wash the sliced leeks well — grit hides between the layers. Sweat them with the spring onions in plenty of olive oil over low heat for 10–15 minutes until completely soft and sweet, never browned.",
    "If using tomato, add the grated tomato now and cook it down a couple of minutes.",
    "Stir in the raw rice and the dill, then add about 2 cups of hot water and season. Cover and simmer gently 18–20 minutes until the rice is tender and the dish stays loose, adding water if it dries out.",
    "Off the heat, beat in more olive oil and the juice of a lemon, rest 10 minutes, and serve warm with extra lemon and black pepper.",
  ],
  modernMove:
    "Give the leeks the long, low, lid-on melt they need before the rice goes in — that patience is what makes them collapse into sweetness instead of staying sharp and oniony.",
  notes:
    "A frugal lenten winter dish from when leeks are abundant and cheap; the white-and-green (no tomato) version is the most traditional.",
  tags: ["leeks", "rice", "dill", "lemon", "winter"],
  sources: [
    {
      title: "Olive Tomato (Elena Paravantes) — Greek Leeks and Rice (Prasorizo)",
      url: "https://www.olivetomato.com/greek-leeks-rice-prasorizo/",
      note: "Confirms leeks softened in olive oil with rice, dill, and lemon.",
    },
  ],
};
