import type { Recipe } from "../types";

export const smotheredPorkChops: Recipe = {
  slug: "smothered-pork-chops",
  title: "Smothered Pork Chops",
  cuisine: "american-south",
  blurb:
    "Thin, cheap pork chops browned and braised soft in a peppery onion-roux gravy — the Southern smothering technique that rescues lean cuts and turns rice or grits into supper.",
  servings: 4,
  perServing: { calories: 540, protein: 32 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    {
      item: "thin bone-in pork chops (the cheap, lean ones)",
      qty: "4 (about 1.25 lb)",
      cost: 4.5,
    },
    { item: "onions, sliced thin", qty: "2 large", cost: 0.8 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/3 cup", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    {
      item: "chicken or pork stock or water",
      qty: "2 1/2 cups",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "bay leaf, thyme, cayenne, paprika, lots of black pepper",
      qty: "to taste",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "cooked white rice or grits, to serve", qty: "for 4", cost: 0.9 },
    { item: "scallions to finish", qty: "a handful", cost: 0.2 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Season the chops hard with salt and pepper and dredge lightly in some of the flour. Sear them in the oil in a heavy pan just until browned on both sides — don't cook through; they finish in the gravy.",
    "Set the chops aside and stir the rest of the flour into the fat, cooking a peanut-coloured roux 3–4 minutes while scraping up the browned bits.",
    "Add the sliced onions and let them wilt down into the roux until soft and sweet, then stir in garlic, thyme, bay, paprika and cayenne.",
    "Whisk in the stock gradually for a smooth gravy, return the chops and their juices, and bring to a bare simmer.",
    "Cover and braise low 30–40 minutes, turning once, until the lean chops are spoon-tender and the gravy is thick and oniony. Finish with scallions and serve over rice or grits.",
  ],
  modernMove:
    "Browning the chops but finishing them in the gravy is the whole point of 'smothering' — the slow braise hydrates a lean, cheap cut that would dry out grilled, and the dredging flour thickens the sauce.",
  tags: ["pork", "braise", "smothered", "roux", "gravy", "rice", "one-pan"],
  sources: [
    {
      title: "Jocelyn Delk Adams — Grandbaby Cakes",
      url: "https://grandbaby-cakes.com/smothered-pork-chops-recipe/",
      note: "Dredge-and-brown chops finished in a roux-built oniony brown gravy over rice.",
    },
  ],
};
