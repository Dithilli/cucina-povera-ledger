import type { Recipe } from "../types";

export const smotheredChicken: Recipe = {
  slug: "smothered-chicken",
  title: "Smothered Chicken",
  cuisine: "american-south",
  blurb:
    "Chicken browned and braised low in a deep onion gravy built on a roux — Southern 'smothering' that turns tough cheap pieces tender and makes plain rice a meal.",
  servings: 4,
  perServing: { calories: 560, protein: 34 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    {
      item: "bone-in, skin-on chicken thighs and drumsticks",
      qty: "4 (about 1.5 lb)",
      cost: 4.0,
    },
    { item: "onions, sliced thin", qty: "2 large", cost: 0.8 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/3 cup", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    {
      item: "chicken stock or water",
      qty: "2 1/2 cups",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "bay leaf, thyme, cayenne, black pepper, paprika",
      qty: "to taste",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "cooked white rice, to serve", qty: "for 4", cost: 0.9 },
    { item: "scallions to finish", qty: "a handful", cost: 0.2 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Season the chicken well and dredge lightly in some of the flour. Brown the pieces in the oil in a heavy pan until deeply golden on all sides, then set aside — you want real colour, which becomes the gravy's flavour.",
    "Lower the heat and stir the remaining flour into the fat to make a blond-to-peanut roux, scraping up the browned bits, cooking it 3–4 minutes until it smells nutty.",
    "Pile in the sliced onions and let them collapse into the roux, then add garlic, thyme, bay, paprika and cayenne.",
    "Whisk in the stock slowly so the gravy is lump-free, nestle the chicken back in with any juices, and bring to a gentle simmer.",
    "Cover and braise on low 40–50 minutes, turning once, until the chicken is fall-apart tender and the gravy is thick and oniony. Season, finish with scallions, and spoon over rice.",
  ],
  modernMove:
    "Cooking the roux in the rendered browning fat before the onions go in means the gravy is built from the chicken's own fond — so even watery cheap thighs braise into something rich and restaurant-deep.",
  tags: ["chicken", "braise", "smothered", "roux", "gravy", "rice", "one-pan"],
  sources: [
    {
      title: "Jocelyn Delk Adams — Grandbaby Cakes",
      url: "https://grandbaby-cakes.com/southern-smothered-chicken/",
      note: "Pan-browned chicken braised in a from-scratch roux-and-onion brown gravy.",
    },
  ],
};
