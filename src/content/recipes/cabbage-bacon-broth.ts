import type { Recipe } from "../types";

export const cabbageBaconBroth: Recipe = {
  slug: "cabbage-bacon-broth",
  title: "Cabbage & Bacon Broth",
  cuisine: "irish",
  blurb:
    "A light, clear bowl built on the bacon pot likker — pearl barley simmered tender, shredded cabbage dropped in to wilt, and just a few scraps of bacon to carry the smoke through the whole pot.",
  servings: 4,
  perServing: { calories: 360, protein: 16 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "bacon offcuts or a small piece of collar", qty: "5 oz", cost: 1.6 },
    { item: "pearl barley", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    { item: "cabbage, cored and shredded", qty: "1/2 small head", cost: 0.6 },
    { item: "carrot, diced", qty: "1", cost: 0.2 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "bacon or ham stock / reserved pot likker", qty: "6 cups", cost: 0.4 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "parsley and black pepper, to finish", qty: "to taste", cost: 0.2 },
  ],
  method: [
    "Rinse the pearl barley and simmer it in plenty of water with a pinch of salt for about 1 1/2 hours until tender, then drain.",
    "Meanwhile simmer the bacon, onion, carrot and bay leaf in the stock (or reserved pot likker) for 30 minutes until the broth is sweet and smoky. Lift out the bacon and shred it.",
    "Return the shredded bacon and cooked barley to the pot and bring back to a gentle simmer.",
    "Drop in the shredded cabbage and cook just 8–10 minutes until tender but still bright. Season with plenty of pepper and finish with parsley.",
  ],
  modernMove:
    "Cooking the barley apart and only meeting it with the cabbage at the end keeps the broth clear and light rather than gluey — a thrifty way to turn the salty bacon liquor and a handful of scraps into a full bowl.",
  notes:
    "The natural home for leftover pot likker from the bacon and cabbage dinner. A few ounces of bacon flavour the whole pot — the barley does the filling.",
  zeroWasteHero: true,
  tags: ["soup", "broth", "cabbage", "bacon", "barley", "pot-likker", "irish"],
  sources: [
    {
      title: "Irish Institute of Nutrition and Health — Bacon, Pearl Barley and Cabbage Broth",
      url: "https://www.iinh.net/recipe/bacon-pearl-barley-and-cabbage-broth/",
      note: "Confirms simmering pearl barley separately then adding cooked barley, bacon and shredded cabbage to the broth.",
    },
  ],
};
