import type { Recipe } from "../types";

export const potatoOnionSoup: Recipe = {
  slug: "potato-onion-soup",
  title: "Potato & Onion Soup",
  cuisine: "ashkenazi",
  blurb:
    "Potatoes and onion simmered soft and made rich with a spoonful of schmaltz, a heel of rye on the side — the plainest weeknight supper in the shtetl repertoire, where a little rendered chicken fat does the work that meat couldn't afford to.",
  servings: 4,
  perServing: { calories: 420, protein: 13 },
  estCostPerServing: 0.45,
  roles: ["dinner"],
  ingredients: [
    { item: "russet potatoes, diced", qty: "1 1/2 lb", cost: 1.05 },
    { item: "onions, chopped", qty: "2 large", cost: 0.8 },
    { item: "schmaltz", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "water", qty: "6 cups", cost: 0 },
    { item: "bay leaf", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
    { item: "rye bread, to serve", qty: "4 slices", cost: 0.6 },
  ],
  method: [
    "Melt the schmaltz in a heavy pot over medium heat and add the chopped onions. Cook 12–15 minutes, stirring, until soft and golden — this is where the soup gets its depth.",
    "Add the diced potatoes, the bay leaf, and the water. Season with salt and pepper, bring to a boil, then simmer until the potatoes are completely tender, about 20–25 minutes.",
    "Fish out the bay leaf. For a heartier bowl, mash a few of the potatoes against the side of the pot to thicken the broth while leaving plenty whole.",
    "Taste and correct the salt and pepper — schmaltz wants a firm hand with seasoning. Serve hot with thick slices of rye for dunking.",
  ],
  modernMove:
    "Build the whole soup on schmaltz instead of broth: a few spoonfuls of rendered chicken fat carry more savory depth than water-and-vegetables ever could, and a few mashed potatoes thicken the soup into something that eats like a meal. The fat is the flavor here.",
  notes:
    "Strictly fleishig — the schmaltz keeps this off the dairy table, so no butter, no sour cream, no grated cheese. Rye on the side turns a thin soup into a full supper for next to nothing.",
  tags: ["potato", "soup", "schmaltz", "fleishig"],
  sources: [
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Potato soups among the plain weeknight pottages of the Eastern European Jewish kitchen.",
    },
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Schmaltz used in place of meat to enrich a thin potato-and-onion soup.",
    },
  ],
};
