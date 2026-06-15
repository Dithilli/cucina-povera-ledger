import type { Recipe } from "../types";

export const sayurBayam: Recipe = {
  slug: "sayur-bayam",
  title: "Sayur Bayam (Sayur Bening Bayam)",
  cuisine: "indonesian",
  blurb:
    "A ten-minute clear soup of spinach and sweet corn in a broth perfumed with shallot, garlic, and salam leaf — the lightest, cheapest sayur there is, the everyday pot that turns rice and fried tempe into a whole meal.",
  servings: 4,
  perServing: { calories: 110, protein: 5 },
  estCostPerServing: 0.55,
  roles: ["side", "dinner"],
  ingredients: [
    { item: "spinach (or amaranth/bayam), washed", qty: "2 large bunches", cost: 1.4 },
    { item: "corn, kernels cut from the cob (cobs kept in)", qty: "1 ear", cost: 0.5 },
    { item: "shallots, thinly sliced", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "garlic cloves, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "salam (Indonesian bay) leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp, to taste", cost: 0.05 },
    { item: "sugar (a touch, balances the greens)", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "water", qty: "5 cups", cost: 0 },
  ],
  method: [
    "Bring the water to a boil with the sliced shallots, garlic, and salam leaf. No oil and no sautéing — this soup is meant to stay clear and light.",
    "Add the corn kernels (and toss in the stripped cobs for extra sweetness) and simmer until the corn is tender, about 5 minutes. Season with salt and the pinch of sugar.",
    "Drop in the spinach and cook just until it wilts, a minute at most — overcooked greens turn the broth dull and grey.",
    "Fish out the cobs and serve at once, while the spinach is still bright. Ladle over rice alongside fried tempe or tahu, which carry the protein the soup leaves out.",
  ],
  modernMove:
    "Simmering the stripped corn cobs in the broth, not just the kernels, pulls their milky sweetness into the water — a free layer of flavor most people throw away. Add the spinach off the heat at the very end so it stays emerald, not olive.",
  notes:
    "The classic frugal move: this is where a half-wilted bunch of greens or the last ear of corn in the basket ends up, simmered clear and clean rather than wasted.",
  tags: ["soup", "spinach", "corn", "sayur", "light", "vegetables"],
  sources: [
    { title: "Daily Cooking Quest — Sup Bening Bayam Jagung (Spinach Corn Soup)", url: "https://dailycookingquest.com/sup-bening-bayam-jagung-spinach-corn-soup.html", note: "spinach + corn clear soup, no-oil method" },
    { title: "Cook Me Indonesian — Sayur Bening: Clear Spinach & Corn Soup", url: "https://www.cookmeindonesian.com/sayur-bening-clear-spinach-corn-soup-vegan/", note: "shallot, garlic, salam-leaf broth; spinach added last" },
  ],
};
