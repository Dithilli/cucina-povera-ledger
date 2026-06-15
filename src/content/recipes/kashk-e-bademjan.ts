import type { Recipe } from "../types";

export const kashkEBademjan: Recipe = {
  slug: "kashk-e-bademjan",
  title: "Kashk-e Bademjan",
  cuisine: "persian",
  blurb:
    "Soft-fried eggplant mashed with garlic and finished with kashk (fermented whey), crisp dried mint, and golden onions — Iran's great eggplant dip eaten as a dinner with bread.",
  servings: 4,
  perServing: { calories: 480, protein: 13 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "eggplants", qty: "2 large (about 1.5 lb)", cost: 2.0 },
    { item: "onions, thinly sliced", qty: "2", cost: 0.6 },
    { item: "garlic, sliced", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    {
      item: "kashk (liquid fermented whey; or thick yogurt thinned with a little salt)",
      qty: "1/2 cup",
      cost: 1.2,
    },
    {
      item: "dried mint",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "ground walnuts (optional, traditional)",
      qty: "2 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "turmeric, salt, black pepper",
      qty: "to taste",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "oil, for frying", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "flatbread, to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "Peel and slice the eggplants, salt them 20 minutes, and pat dry. Fry in oil until deep golden and completely soft, then drain on paper.",
    "In the same pan, slowly fry the sliced onions to a deep brown — set half aside for the top. Add the garlic and turmeric for the last minute.",
    "Add the fried eggplant to the onion pan and mash it down with a spoon into a coarse paste; fold in most of the kashk and a splash of water, season, and warm through.",
    "Make the mint oil: bloom the dried mint in a tablespoon of hot oil off the heat. Plate the eggplant, swirl over the remaining kashk, scatter the reserved onions and walnuts, and pour the dark mint oil over the top.",
  ],
  modernMove:
    "Blooming the dried mint in hot oil (na'na dagh) is the move — it turns a dusty herb into a fragrant black-green oil that, with the swirl of sour kashk, makes a humble fried-eggplant mash look composed.",
  notes:
    "Kashk is the soul of the dish; if unavailable, thick strained yogurt with a pinch of salt is the standard substitute. Walnuts and golden onions are what make it 'dressed.'",
  tags: ["eggplant", "kashk", "whey", "dip", "vegetarian"],
  sources: [
    {
      title: "Kashk-e bademjan — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Kashk-e_bademjan",
      note: "Confirms the dish: fried/roasted eggplant with kashk, fried onions, garlic, mint and walnut garnish.",
    },
    {
      title: "Shadi Hasanzadenemati — Unicorns in the Kitchen",
      url: "https://www.unicornsinthekitchen.com/kashke-bademjan-persian-eggplant-dip/",
      note: "Method for the eggplant, caramelized onions, garlic and kashk finish.",
    },
  ],
};
