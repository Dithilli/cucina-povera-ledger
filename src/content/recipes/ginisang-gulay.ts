import type { Recipe } from "../types";

export const ginisangGulay: Recipe = {
  slug: "ginisang-gulay",
  title: "Ginisang Gulay",
  cuisine: "filipino",
  blurb:
    "Everyday sautéed mixed vegetables — whatever's cheap that week (sayote, beans, cabbage, carrot) cooked over a garlic-onion-tomato ginisa and a little fish, the lutong-bahay way to make produce into dinner.",
  servings: 4,
  perServing: { calories: 480, protein: 16 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "sayote (chayote), peeled and sliced", qty: "1", cost: 0.6 },
    { item: "green beans (sitaw or regular), cut", qty: "2 cups", cost: 0.8 },
    { item: "cabbage, chopped", qty: "1/4 head", cost: 0.5 },
    { item: "carrot, sliced thin", qty: "1", cost: 0.3 },
    { item: "garlic cloves, crushed", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "small onion, sliced", qty: "1", cost: 0.3 },
    { item: "ripe tomato, chopped", qty: "1", cost: 0.4 },
    {
      item: "small amount of pork, dried fish, or canned tuna for flavor",
      qty: "1/4 cup / 1 can",
      cost: 1.0,
    },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "fish sauce (patis) and pepper", qty: "to taste", spansWeeks: true },
    { item: "splash of water", qty: "1/3 cup", cost: 0 },
    { item: "steamed rice, to serve", qty: "4 cups cooked", cost: 0.6 },
  ],
  method: [
    "Heat the oil and build the ginisa: garlic to golden, onion to soft, tomato mashed down until it melts into a sauce. If using pork or dried fish, render it here first so the fat seasons the whole pan.",
    "Add the vegetables in order of how long they take — sayote and carrot first, then green beans, cabbage last so it stays bright and just-tender.",
    "Splash in a little water, cover, and let everything steam-sauté a few minutes — you want crisp-tender, not stewed. Toss so the ginisa coats it all.",
    "Season with patis and pepper, and if using canned tuna, fold it in at the end so it stays in flakes. Serve hot over rice.",
  ],
  modernMove:
    "Cooking the vegetables in stages on a real tomato ginisa — and steam-sautéing under a lid instead of boiling — keeps each one crisp and distinct instead of collapsing into one soft mass.",
  tags: ["vegetables", "ginisa", "gulay", "frugal", "rice", "everyday"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/ginisang-gulay/", note: "Mixed vegetables sautéed over a garlic–onion–tomato ginisa" },
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/ginisang-gulay/", note: "Adding vegetables by cooking time so each stays crisp-tender" },
  ],
};
