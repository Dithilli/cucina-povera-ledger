import type { Recipe } from "../types";

export const collardGreens: Recipe = {
  slug: "collard-greens",
  title: "Collard Greens with Smoked Pork & Cornbread",
  cuisine: "american-south",
  blurb:
    "A potful of greens cooked low and slow with a smoked hock until they're meltingly tender — and the pot likker, the mineral broth left behind, is the whole point.",
  servings: 4,
  perServing: { calories: 520, protein: 18 },
  estCostPerServing: 1.65,
  roles: ["dinner"],
  ingredients: [
    {
      item: "collard greens, stemmed and chopped (2 large bunches)",
      qty: "2 lb",
      cost: 2.8,
    },
    {
      item: "smoked turkey wing or ham hock",
      qty: "1 (about 10 oz)",
      cost: 2.5,
    },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, smashed", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "neutral oil or bacon drippings",
      qty: "2 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "cider vinegar (plus more at the table)",
      qty: "2 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "pinch of sugar, red pepper flakes, salt, black pepper",
      qty: "to taste",
      spansWeeks: true,
    },
    {
      item: "cornbread, to serve (cornmeal, buttermilk, egg, a little fat)",
      qty: "1 skillet",
      cost: 1.0,
    },
  ],
  method: [
    "Sweat the onion and garlic in the drippings until soft. Add the smoked hock or turkey wing and cover with about 6 cups water; simmer, lid ajar, for an hour so the smoke and gelatin leach into the broth — this is the start of the pot likker.",
    "Pile in the collards by the handful, letting each batch wilt before adding more. Add the vinegar, a pinch of sugar, red pepper, and a little salt (the smoked meat is salty).",
    "Cook low and slow, partly covered, for 60–90 minutes, until the greens are silky and dark and the likker is rich. Pull the meat off the bone, shred it, and stir it back in.",
    "Taste for vinegar and salt. Bake a skillet of cornbread to sop the likker, and ladle greens and broth over or alongside.",
  ],
  modernMove:
    "Treat the pot likker as the dish, not the byproduct — the long simmer builds a smoky, mineral broth that the cornbread exists to drink up. Don't drain it away.",
  notes:
    "A smoked turkey wing gives nearly all the flavor of a ham hock for less money and less fat. The pot likker keeps and reheats beautifully — it's the soul of the leftovers.",
  zeroWasteHero: true,
  tags: ["greens", "collards", "smoked-pork", "pot-likker", "cornbread", "low-and-slow"],
  sources: [
    {
      title: "Collard (plant) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Collard_(plant)",
      note: "Documents the Southern preparation with smoked meats, the pot liquor, and cornbread used to sop it up.",
    },
  ],
};
