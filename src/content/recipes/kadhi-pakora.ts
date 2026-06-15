import type { Recipe } from "../types";

export const kadhiPakora: Recipe = {
  slug: "kadhi-pakora",
  title: "Kadhi Pakora",
  cuisine: "north-indian",
  blurb:
    "Tangy yogurt-and-gram-flour curry simmered slow until silky, studded with soft onion pakoras — the thriftiest way to turn sour yogurt into dinner.",
  servings: 4,
  perServing: { calories: 520, protein: 18 },
  estCostPerServing: 0.78,
  roles: ["dinner"],
  ingredients: [
    {
      item: "plain yogurt, preferably a little sour, whisked",
      qty: "1 1/2 cups",
      cost: 0.9,
    },
    {
      item: "gram flour (besan) — split between curry and pakoras",
      qty: "1 cup",
      cost: 0.5,
    },
    { item: "onions, thinly sliced (for the pakoras)", qty: "2", cost: 0.4 },
    { item: "turmeric", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "ginger and garlic, minced",
      qty: "1 tbsp each",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "whole spices: cumin seeds, mustard seeds, fenugreek seeds, dried red chiles",
      qty: "1 tsp mixed",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "asafoetida (hing), a pinch", qty: "1 pinch", cost: 0.05, spansWeeks: true },
    {
      item: "neutral oil for the tempering and frying",
      qty: "4 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "Kashmiri red chili powder to finish", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt and a handful of cilantro", qty: "to taste", cost: 0.2 },
  ],
  method: [
    "Make the curry base: whisk the yogurt smooth with about 1/2 cup of the gram flour, the turmeric, and 4 cups water until there are no lumps — lumps are the enemy of kadhi.",
    "Bring it to a boil stirring constantly, then drop to the lowest simmer. It must cook at least 30–40 minutes, stirring often, until it loses its raw-flour edge and turns glossy and pourable-thick.",
    "Meanwhile beat the remaining gram flour with a little water, salt, and a pinch of chili into a thick batter; fold in the sliced onions. Fry spoonfuls in shallow oil until deep gold, then drain.",
    "Slide the pakoras into the simmering kadhi for the last 10 minutes so they drink up the sauce and soften.",
    "Temper to finish: heat the oil, crackle the cumin, mustard, fenugreek, and dried chiles with the hing, ginger, and garlic, then pour it sizzling over the pot. Dust with Kashmiri chili and cilantro.",
  ],
  modernMove:
    "The long low simmer is the whole dish — it cooks out the besan's chalkiness and emulsifies the yogurt so it stays silky instead of splitting. Rushing it is why most home kadhi tastes raw.",
  tags: ["yogurt", "gram-flour", "besan", "curry", "pakora", "frugal"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/punjabi-kadhi-recipe-punjabi-kadhi-pakora/",
      note: "Punjabi kadhi pakora — long low simmer of the besan-yogurt base, onion fritters added in",
    },
  ],
};
