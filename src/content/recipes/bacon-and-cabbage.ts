import type { Recipe } from "../types";

export const baconAndCabbage: Recipe = {
  slug: "bacon-and-cabbage",
  title: "Bacon and Cabbage",
  cuisine: "irish",
  blurb:
    "The Sunday plate of every Irish kitchen — a collar of bacon simmered slow until it falls into salty shreds, the cabbage cooked right in the bacon's own pot likker, all of it pooled under a creamy parsley sauce.",
  servings: 4,
  perServing: { calories: 560, protein: 26 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "bacon collar or loin (unsmoked boiling bacon)", qty: "1 1/2 lb", cost: 5.5 },
    { item: "Savoy cabbage, cored and shredded across the grain", qty: "1 small head", cost: 1.2 },
    { item: "floury potatoes, peeled", qty: "1 1/2 lb", cost: 0.8 },
    { item: "butter", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "plain flour", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "whole milk", qty: "1 1/2 cups", cost: 0.5 },
    { item: "flat-leaf parsley, chopped", qty: "large handful", cost: 0.4 },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Cover the bacon in cold water and bring slowly to the boil. If a grey froth forms it is too salty — tip the water, cover with fresh hot water, and start again. Simmer gently, about 20 minutes per pound, until tender.",
    "Boil the potatoes in a separate pot until they take a fork. Lift the bacon out to rest, keeping the pot of cooking liquor — the pot likker — on the heat.",
    "Drop the shredded cabbage straight into the bacon liquor and boil hard for 6–8 minutes until just tender; it drinks up all that salt and smoke. Drain, reserving a cup of the liquor.",
    "Make the parsley sauce: melt the butter, stir in the flour to a paste, then whisk in the milk and a splash of the reserved liquor. Simmer to a coating cream, season with pepper, and stir in the chopped parsley off the heat.",
    "Slice the bacon thick, pile the cabbage and potatoes alongside, and flood the plate with parsley sauce.",
  ],
  modernMove:
    "Cooking the cabbage in the bacon liquor rather than fresh water is the whole trick — the leaf turns silky and seasoned for free, and a cup of that same liquor loosens the parsley sauce so nothing the bacon gave up is thrown away.",
  notes:
    "Buy collar over loin — it's cheaper, fattier and shreds better. Leftover bacon and cabbage become the collar hash the next day.",
  zeroWasteHero: true,
  tags: ["bacon", "cabbage", "potato", "parsley-sauce", "irish", "sunday-dinner"],
  sources: [
    {
      title: "Darina Allen — Irish Examiner",
      url: "https://www.irishexaminer.com/opinion/columnists/arid-20386054.html",
      note: "Confirms cooking the cabbage in the bacon water for its salty flavour and the milk-butter-flour parsley sauce.",
    },
  ],
};
