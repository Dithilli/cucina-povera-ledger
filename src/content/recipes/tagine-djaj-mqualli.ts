import type { Recipe } from "../types";

export const tagineDjajMqualli: Recipe = {
  slug: "tagine-djaj-mqualli",
  title: "Tagine Djaj Mqualli",
  cuisine: "moroccan",
  blurb:
    "The classic Moroccan chicken tagine — bone-in pieces braised low in a saffron-gold onion sauce until the meat slides off, finished with bright preserved lemon and meaty green olives.",
  servings: 4,
  perServing: { calories: 540, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs and legs", qty: "1.5 lb", cost: 4.5 },
    { item: "onions, grated or finely sliced", qty: "2 large", cost: 0.6 },
    { item: "garlic, crushed", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "preserved lemon, quartered", qty: "1", cost: 0.5, spansWeeks: true },
    { item: "cracked green olives, rinsed", qty: "3/4 cup", cost: 0.8, spansWeeks: true },
    { item: "ras el hanout", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "ground ginger and turmeric", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "saffron threads", qty: "small pinch", cost: 0.4, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cilantro and parsley, tied in a bunch", qty: "1 bunch", cost: 0.3 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Rub the chicken with crushed garlic, ginger, turmeric, ras el hanout, the saffron bloomed in a splash of warm water, salt, and olive oil. Let it sit while you grate the onions.",
    "Lay the onions in the base of a tagine or heavy pot, set the chicken on top skin-side up, tuck in the herb bunch, and add about a cup of water. Cover and cook very gently — the onions melt into a sauce as the chicken braises, 45 minutes to an hour.",
    "Turn the pieces once so they color, then add the preserved lemon and rinsed olives. Uncover toward the end and reduce the sauce to a glossy, oil-flecked gravy.",
    "Discard the herb bunch, taste for salt, and serve straight from the tagine with khobz to mop the sauce.",
  ],
  modernMove:
    "Grating the onions instead of slicing them dissolves them into the braise — you get a velvety sauce with no added thickener, the way a Marrakech cook would do it.",
  notes:
    "Mqualli refers to the yellow saffron-and-ginger style of braise; the preserved lemon goes in late so its perfume stays bright rather than boiling away.",
  tags: ["tagine", "chicken", "preserved-lemon", "olives", "moroccan"],
  sources: [
    {
      title: "MarocMama — Moroccan Chicken and Olive Tajine with Preserved Lemons",
      url: "https://marocmama.com/chicken-and-olive-tajine/",
      note: "Grated-onion mqualli base with saffron, ginger, and late-added preserved lemon and olives",
    },
  ],
};
