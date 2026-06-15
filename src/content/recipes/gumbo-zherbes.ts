import type { Recipe } from "../types";

export const gumboZherbes: Recipe = {
  slug: "gumbo-zherbes",
  title: "Gumbo Z'herbes",
  cuisine: "american-south",
  blurb:
    "The Holy Thursday greens gumbo — a frugal pot of whatever greens you have, slow-cooked and chopped fine over a dark roux, an old Creole tradition that each green is a friend you'll make that year.",
  servings: 6,
  perServing: { calories: 470, protein: 18 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    {
      item: "mixed greens — collards, mustard, turnip tops, kale, spinach, cabbage, watercress (use what's cheap)",
      qty: "3 lb total",
      cost: 4.0,
    },
    { item: "neutral oil or lard for the roux", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "all-purpose flour for the roux", qty: "1/3 cup", cost: 0.1, spansWeeks: true },
    { item: "onion, diced", qty: "1 large", cost: 0.4 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery, diced", qty: "2 ribs", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "5", cost: 0.25, spansWeeks: true },
    {
      item: "smoked ham hock or a little smoked sausage (optional, for depth)",
      qty: "1 small",
      cost: 1.5,
    },
    { item: "bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fresh thyme", qty: "few sprigs", cost: 0.2, spansWeeks: true },
    { item: "cayenne and black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "filé powder to finish (optional)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "long-grain white rice, to serve", qty: "2 cups dry", cost: 0.7 },
    { item: "salt, hot sauce, cider vinegar", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Wash the greens well and simmer them in a big pot of salted water (with the ham hock, if using) until tender, 30 to 40 minutes. Lift the greens out, RESERVE the pot likker — that green cooking water is the broth.",
    "Chop the cooked greens very fine; the traditional count is an odd number of varieties for luck.",
    "In a heavy pot make a dark roux: whisk flour into oil over medium-low and stir until it reaches a deep brown, about 25 to 30 minutes.",
    "Add the trinity (onion, bell pepper, celery) to the roux to cool it and soften them, then the garlic.",
    "Whisk in the reserved pot likker until smooth, add bay, thyme, cayenne, and the shredded hock meat. Stir in the chopped greens.",
    "Simmer 30 to 40 minutes until silky and unified. Off the heat add filé. Adjust with salt, vinegar, and hot sauce; serve over white rice.",
  ],
  modernMove:
    "The greens' own pot likker becomes the broth, so almost nothing is wasted and meat is optional — the dark roux plus an odd-numbered mix of greens carries a full pot of flavor on pennies of produce.",
  zeroWasteHero: true,
  tags: ["gumbo", "greens", "roux", "holy-trinity", "pot-likker", "vegetarian-option", "creole", "frugal"],
  sources: [
    {
      title: "George Graham — Acadiana Table: Gumbo Z'herbes",
      url: "https://acadianatable.com/2026/03/30/gumbo-zherbes/",
      note: "Dark-roux green gumbo over the trinity with an odd number of greens for luck, served for the Lenten/Holy Thursday tradition.",
    },
    {
      title: "Gumbo — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Gumbo",
      note: "Covers gumbo z'herbes as the meatless Lenten 'gumbo of greens' simmered from a mix of leafy vegetables.",
    },
  ],
};
