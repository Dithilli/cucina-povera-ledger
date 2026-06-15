import type { Recipe } from "../types";

export const tamagoDon: Recipe = {
  slug: "tamago-don",
  title: "Tamago-don",
  cuisine: "japanese",
  blurb:
    "The cheapest donburi there is — onion softened in sweet dashi-soy, then eggs poured in and pulled off half-set over rice. No meat at all, and it still eats like a real dinner.",
  servings: 2,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "eggs, beaten just to break them up", qty: "4", cost: 1.0 },
    { item: "onion, thinly sliced", qty: "1 small", cost: 0.3 },
    { item: "dashi (or anchovy-kelp stock)", qty: "3/4 cup", cost: 0.3, spansWeeks: true },
    { item: "soy sauce", qty: "1 1/2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "mirin", qty: "1 1/2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "scallions, sliced thin", qty: "2", cost: 0.2 },
    { item: "shichimi togarashi, to finish (optional)", qty: "to taste", spansWeeks: true },
    { item: "steamed short-grain rice, to serve", qty: "for 2", cost: 0.4 },
  ],
  method: [
    "Bring the dashi, soy, mirin, and sugar to a gentle simmer in a small skillet. Slide in the onion and cook until soft and translucent — with no meat to lean on, this sweet onion broth is the whole flavor base, so give it a few real minutes.",
    "Beat the eggs only enough to streak them — leave them marbled, not uniform.",
    "Raise the heat slightly so the broth is actively simmering, then pour in two-thirds of the egg in a spiral over the onion. Cover and cook 30 seconds.",
    "Drizzle in the rest of the egg, scatter half the scallions, cover, and pull off the heat the moment the surface is glossy and barely set. Carryover heat brings it to soft custard.",
    "Slide the whole panful, broth and all, over hot rice. Top with the remaining scallions and a pinch of shichimi.",
  ],
  modernMove:
    "Leaning entirely on a well-built dashi-soy-mirin broth and the two-pour, pull-it-early egg technique gives a luxurious bowl from nothing but eggs and an onion — proof the donburi method, not the meat, is what carries it.",
  notes:
    "A genuinely good dashi matters most here since there's no meat hiding behind it; the anchovy-kelp stock in this collection works perfectly.",
  zeroWasteHero: true,
  tags: ["dinner", "egg", "donburi", "rice-bowl", "dashi", "cheapest", "meatless"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Oyakodon (Chicken and Egg Bowl)",
      url: "https://www.justonecookbook.com/oyakodon/",
      note: "Same donburi technique meatless — onion in dashi-soy-mirin and the two-pour half-set egg.",
    },
  ],
};
