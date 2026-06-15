import type { Recipe } from "../types";

export const locroDePapa: Recipe = {
  slug: "locro-de-papa",
  title: "Locro de Papa",
  cuisine: "andean",
  blurb:
    "The Ecuadorian sierra's golden comfort soup — floury potatoes melted into a velvety achiote-tinted broth, thickened with milk and fresh cheese and crowned with cool slices of avocado.",
  servings: 4,
  perServing: { calories: 400, protein: 13 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "starchy potatoes, peeled and cubed", qty: "2 lb", cost: 1.0 },
    { item: "onion + garlic", qty: "1 + 2 cloves", cost: 0.3 },
    { item: "achiote (annatto) oil or powder", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "milk", qty: "1 cup", cost: 0.4, spansWeeks: true },
    { item: "fresh cheese (queso fresco), crumbled", qty: "4 oz", cost: 0.9 },
    { item: "avocado, to garnish", qty: "1", cost: 0.8 },
    { item: "cilantro", qty: "small handful", cost: 0.2 },
    { item: "cumin, oil, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Make a refrito: soften the onion and garlic in oil with cumin and the achiote until the fat turns deep orange.",
    "Add about a third of the potatoes and stir to coat, then pour in 5 cups of water and simmer until that first batch of potato falls apart.",
    "Mash those potatoes into the broth to build a creamy base, then add the rest of the cubed potato and simmer until just tender but still holding shape.",
    "Lower the heat, stir in the milk and the crumbled cheese, and warm gently until the cheese softens into the soup — don't boil it hard or it can split.",
    "Season, stir in chopped cilantro, and serve each bowl with slices of avocado laid on top to melt into the warmth.",
  ],
  modernMove:
    "Cook the potato in two stages — sacrifice the first third to dissolve into a thick, self-made base, then add the rest for body. You get the creaminess of a blended soup with the texture of a chunky one, no cream required.",
  notes: "The avocado isn't a garnish so much as the dish's other half; its coolness against the hot, cheesy soup is the whole experience.",
  zeroWasteHero: false,
  tags: ["potato", "cheese", "soup", "avocado", "ecuadorian", "andean"],
  sources: [
    {
      title: "Laylita's Recipes — Locro de papa (Ecuadorian potato and cheese soup)",
      url: "https://www.laylita.com/recipes/locro-de-papa-creamy-potato-soup-with-cheese/",
      note: "Achiote refrito base, potato cooked in stages for creaminess, finished with milk, cheese, and avocado.",
    },
  ],
};
