import type { Recipe } from "../types";

export const nukazuke: Recipe = {
  slug: "nukazuke",
  title: "Nukazuke (Rice-Bran Pickles)",
  cuisine: "japanese",
  blurb:
    "Vegetables buried in a living bed of fermented rice bran — the nukadoko — and pulled out a day later transformed: crisp, deeply savory, tingling with lactic sourness and B vitamins the bran lends back to the cut surfaces. Rice bran is the milling byproduct, all but free, and the pot is a perpetual engine you feed and stir for years. It is mottainai made edible: the part of the rice everyone else throws away becomes the sharpest, most alive thing on the table.",
  servings: 8,
  perServing: { calories: 25, protein: 1 },
  estCostPerServing: 0.18,
  roles: ["side", "base"],
  ingredients: [
    { item: "rice bran (nuka), preferably roasted", qty: "4 cups (~500 g)", cost: 1.0, spansWeeks: true },
    { item: "water", qty: "about 2 1/2 cups" },
    { item: "salt", qty: "1/2 cup (~13% of bran weight)", cost: 0.2, spansWeeks: true },
    { item: "piece of kombu and a dried chili, for the bed", qty: "1 each", cost: 0.4, spansWeeks: true },
    { item: "vegetable scraps to start the bed (cabbage cores, daikon peel)", qty: "a few handfuls" },
    { item: "vegetables to pickle (daikon, cucumber, carrot, turnip, eggplant)", qty: "as you have them", cost: 1.5 },
  ],
  method: [
    "Make the bed: dissolve the salt in the water, let it cool, and mix it into the rice bran along with the kombu and chili until it has the texture of wet sand that holds together when squeezed. Pack it into a wide non-reactive crock or tub.",
    "Wake the bed up: bury a few handfuls of cheap vegetable scraps (cabbage cores, daikon peel, carrot tops) in the bran. These 'sute-zuke' throwaway pickles feed the wild lactic bacteria. Pull and replace them every day for about a week, mixing the bran each time, until it smells pleasantly sour and yeasty — a healthy nukadoko.",
    "To pickle, rub a vegetable lightly with salt, then bury it whole or halved in the bran so it's fully covered. Daikon and cucumber take about a day; carrot and turnip a little longer; in summer everything goes faster.",
    "Dig the vegetable out, brush or rinse off the clinging bran, and slice it into bite-size pieces. Serve cold as the sharp, palate-cleaning counterpoint to a bowl of rice.",
    "Stir the whole bed down to the bottom once a day with a clean bare hand. This is non-negotiable — it brings oxygen to the surface and keeps the right balance of bacteria and yeast so the bed stays sweet-sour instead of turning. The hand also seeds it; a well-kept nukadoko can live for decades.",
  ],
  modernMove:
    "The daily hand-stir is the living technology: it manages an open fermentation, mixing oxygen-loving yeasts at the surface with the lactic bacteria below so the bed self-corrects. Pickling here isn't acid you add — it's a microbial ecosystem you tend, and rice bran (otherwise burned or fed to animals) is its whole habitat.",
  notes:
    "If you go away, refrigerate the bed to slow it, or bury a fistful of salt on top and rest it. Too sour means it needs more frequent stirring or a fresh handful of bran and a pinch of salt; too flat means it's hungry — feed it more vegetables. The spent bran clinging to vegetables can be wiped into the pot, not washed down the drain.",
  zeroWasteHero: false,
  tags: ["side", "base", "pickle", "fermented", "nuka", "mottainai", "make-ahead"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Tsukemono: A Guide to Japanese Pickles",
      url: "https://www.justonecookbook.com/tsukemono-guide-to-japanese-pickles/",
      note: "Nukazuke as the rice-bran-mash pickle, turned by hand daily, in the family of tsukemono.",
    },
    {
      title: "Nukazuke — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Nukazuke",
      note: "17th-century Edo origin, the nukadoko bed of bran, salt, and kombu, and its lactic fermentation and B vitamins.",
    },
  ],
};
