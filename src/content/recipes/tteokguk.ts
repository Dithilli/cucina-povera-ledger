import type { Recipe } from "../types";

export const tteokguk: Recipe = {
  slug: "tteokguk",
  title: "Tteokguk",
  cuisine: "korean",
  blurb:
    "The New Year's rice-cake soup — coin-sliced tteok simmered in a clear anchovy-kelp (or beef) broth until they go pillowy, topped with egg ribbons and toasted gim. Eating a bowl earns you a year.",
  servings: 4,
  perServing: { calories: 620, protein: 24 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    {
      item: "sliced rice cakes (tteokguk-tteok), soaked in cold water",
      qty: "1 lb",
      cost: 2.0,
    },
    {
      item: "dried anchovies (myeolchi), cleaned",
      qty: "10",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "dried kelp (dasima/kombu)",
      qty: "1 postcard piece",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "beef brisket, sliced thin (optional, for a richer broth)", qty: "4 oz", cost: 1.3 },
    { item: "eggs", qty: "2", cost: 0.5 },
    {
      item: "garlic, minced",
      qty: "2 cloves",
      cost: 0.08,
      spansWeeks: true,
    },
    {
      item: "scallions, sliced",
      qty: "2",
      cost: 0.15,
    },
    {
      item: "soup soy sauce (guk-ganjang)",
      qty: "1 1/2 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "toasted seaweed (gim), crumbled, to finish",
      qty: "1 sheet",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "toasted sesame oil, salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Soak the rice-cake coins in cold water 20–30 minutes so they cook evenly and won't turn gummy; an old, hard packet needs longer.",
    "Make the broth: simmer anchovies and kelp (and the beef, if using) in ~7 cups water 15 minutes; pull the kelp at 10 minutes, strain, and return any beef to the pot torn into shreds.",
    "Separate the eggs and fry thin sheets of yolk and white separately in a barely-oiled pan, then slice into fine ribbons (jidan) — the classic garnish.",
    "Bring the broth to a hard simmer, season with soup soy sauce and garlic, and drop in the drained tteok; cook 4–6 minutes until they float and turn soft and pillowy but not falling apart.",
    "Ladle into bowls and top with the egg ribbons, scallion, crumbled toasted gim, and a few drops of sesame oil and black pepper.",
  ],
  modernMove:
    "Soaking the rice cakes first and only adding them once the broth is at a rolling simmer keeps them tender-chewy instead of pasty — and frying the yolk and white into separate ribbons (jidan) gives the plain white soup its festive gold-and-white finish for the cost of one egg.",
  tags: ["soup", "guk", "rice-cake", "tteok", "anchovy-kelp-stock", "new-year"],
  sources: [
    {
      title: "Maangchi — Rice cake soup (Tteokguk)",
      url: "https://www.maangchi.com/recipe/tteokguk",
      note: "Soaking the tteok, building a clear broth, and the egg-ribbon (jidan) garnish",
    },
    {
      title: "Wikipedia — Tteokguk",
      url: "https://en.wikipedia.org/wiki/Tteokguk",
      note: "The Korean New Year (Seollal) tradition behind the rice-cake soup",
    },
  ],
};
