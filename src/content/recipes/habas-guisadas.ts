import type { Recipe } from "../types";

export const habasGuisadas: Recipe = {
  slug: "habas-guisadas",
  title: "Habas Guisadas",
  cuisine: "andean",
  blurb:
    "Tender fava beans stewed soft in an onion-and-ají sofrito, finished with crumbled fresh cheese that melts into the pot — a highland supper eaten straight with bread or boiled potatoes.",
  servings: 4,
  perServing: { calories: 480, protein: 21 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "dried fava beans (habas), soaked overnight", qty: "1 1/2 cups", cost: 1.1 },
    { item: "onion, finely diced", qty: "1 large", cost: 0.35 },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "ají amarillo paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "ají panca paste", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "fresh cheese (queso fresco), crumbled", qty: "3 oz", cost: 0.7 },
    { item: "cumin, oregano, salt, pepper", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cilantro, chopped", qty: "1 small handful", cost: 0.25 },
  ],
  method: [
    "Simmer the soaked favas in fresh water 40–50 minutes until tender, then drain, reserving a cup of the cooking liquid. Slip off the tough skins if your favas are large.",
    "Build the sofrito: soften the onion in oil, add garlic, then the ají amarillo and ají panca pastes with cumin and oregano, frying until the fat slicks red-gold.",
    "Stir in the tomato and cook down to a jammy base, then fold in the favas with a splash of their liquid. Simmer 10 minutes so they drink up the sauce.",
    "Off the heat, scatter the crumbled cheese over the top and stir gently so it just begins to melt. Season, finish with cilantro, and serve with bread or boiled potatoes.",
  ],
  modernMove:
    "Two ajíes do two jobs: amarillo brings fruity heat and color, panca adds a smoky, almost raisin-like depth. The cheese is stirred in off-heat so it softens without turning rubbery.",
  notes:
    "Across Bolivia and the Peruvian sierra this is the everyday way to eat favas — habas con queso. Doubles happily and reheats better the next day.",
  zeroWasteHero: false,
  tags: ["favas", "legumes", "stew", "cheese", "andean"],
  sources: [
    {
      title: "Cecilia Tupac — Peruvian Fava Bean Stew (Picante de Habas)",
      url: "https://en.ceciliatupac.com/post/peruvian-fava-bean-stew-recipe",
      note: "Sofrito-and-ají method for stewing favas in the sierra style, with fresh cheese to finish.",
    },
  ],
};
