import type { Recipe } from "../types";

export const gaiLanOysterSauce: Recipe = {
  slug: "gai-lan-oyster-sauce",
  title: "Gai Lan with Oyster Sauce",
  cuisine: "cantonese",
  blurb:
    "Whole stalks of Chinese broccoli blanched bright green, fanned on a plate, and dressed with a sweet-savory oyster sauce and a slick of smoking-hot oil that hisses over the garlic.",
  servings: 4,
  perServing: { calories: 360, protein: 16 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "gai lan (Chinese broccoli)", qty: "1 lb", cost: 1.8 },
    { item: "oyster sauce", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "peanut oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "steamed jasmine rice, to serve", qty: "4 bowls", cost: 0.4 },
  ],
  method: [
    "Trim the woody base of each gai lan stalk and split any stems thicker than a pencil lengthwise so they cook at the rate of the leaves.",
    "Bring a wide pot of water to a rolling boil with a pinch of salt and a teaspoon of oil. Drop the stems in first for 30 seconds, then the leaves, and blanch 2–3 minutes until vibrant green and just tender. Lift out, shake dry, and fan onto a serving plate.",
    "Stir the oyster sauce, soy, sugar, Shaoxing wine, and a splash of the blanching water into a small sauce; warm it briefly and spoon it over the gai lan.",
    "Pile the minced garlic on top of the greens. Heat the peanut oil until it just begins to smoke, then pour it over the garlic so it sizzles and blooms. Serve at once over rice.",
  ],
  modernMove:
    "Blanching with a little oil and salt in the water sets the chlorophyll so the stalks stay glossy and emerald, and the final pour of smoking oil over raw garlic cooks it for a half-second — fragrant, not harsh — the way a Cantonese kitchen finishes a plate of greens.",
  notes:
    "Choose gai lan with tight buds and slim stems; thick, flowering stalks turn fibrous. The blanching water becomes a light vegetable stock — save it for tomorrow's soup.",
  zeroWasteHero: true,
  tags: ["vegetable", "blanched", "oyster-sauce", "cantonese", "greens"],
  sources: [
    {
      title: "Maggie Zhu — Omnivore's Cookbook, Chinese Broccoli with Oyster Sauce",
      url: "https://omnivorescookbook.com/chinese-broccoli-with-oyster-sauce/",
      note: "Two-step blanching of stems then leaves, and the oyster-soy-sugar sauce with a hot-oil-over-garlic finish.",
    },
  ],
};
