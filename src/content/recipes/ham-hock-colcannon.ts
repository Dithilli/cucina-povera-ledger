import type { Recipe } from "../types";

export const hamHockColcannon: Recipe = {
  slug: "ham-hock-colcannon",
  title: "Ham Hock with Colcannon",
  cuisine: "irish",
  blurb:
    "A cheap smoked hock coaxed off the bone in long sweet shreds and folded through colcannon — buttery mash run through with kale and scallion, a well of melted butter in the middle.",
  servings: 4,
  perServing: { calories: 620, protein: 28 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "smoked ham hock", qty: "1 large (about 1 1/2 lb)", cost: 3.5 },
    { item: "floury potatoes, peeled", qty: "2 lb", cost: 1.0 },
    { item: "kale, stems stripped and finely shredded", qty: "6 oz", cost: 0.9 },
    { item: "scallions, sliced", qty: "1 bunch", cost: 0.5 },
    { item: "whole milk", qty: "3/4 cup", cost: 0.25 },
    { item: "butter", qty: "4 tbsp", cost: 0.5, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Cover the hock in cold water with a bay leaf and simmer slowly for 2 to 2 1/2 hours until the meat slides from the bone. Lift out, cool a little, then shred into long pieces, discarding skin and bone.",
    "Boil the potatoes until tender. Meanwhile wilt the shredded kale in a ladle of the hock liquor for a few minutes, then drain.",
    "Warm the milk with the scallions and half the butter so the onion infuses without frying.",
    "Mash the potatoes, beat in the scallion milk to a soft fluff, then fold through the kale and most of the shredded hock. Season hard with pepper — the hock brings the salt.",
    "Pile into bowls, press a hollow in the top and drop in the last knob of butter to melt. Crown with the reserved hock shreds.",
  ],
  modernMove:
    "Wilting the kale in the salty hock broth instead of plain water seasons the greens through and means the meat's cooking liquor flavours the whole bowl — one cheap cut feeds four and stretches into a second day's hash.",
  notes:
    "Save the strained hock liquor; it makes the base for the cabbage and bacon broth or the next pot of soup.",
  zeroWasteHero: true,
  tags: ["ham-hock", "colcannon", "potato", "kale", "irish", "champ"],
  sources: [
    {
      title: "Cristie's Recipes",
      url: "https://cristiesrecipes.com/recipe/ham-hock-colcannon",
      note: "Confirms shredded ham hock folded through colcannon mash with greens, mustard and butter.",
    },
  ],
};
