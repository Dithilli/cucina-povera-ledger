import type { Recipe } from "../types";

export const moimoi: Recipe = {
  slug: "moimoi",
  title: "Moi Moi",
  cuisine: "west-african",
  blurb:
    "A savoury steamed pudding of peeled black-eyed peas, blended with peppers and palm oil and set in leaf or cup until silky and sliceable.",
  servings: 4,
  perServing: { calories: 480, protein: 24 },
  estCostPerServing: 1.0,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried black-eyed peas, soaked and skins rubbed off",
      qty: "2 cups",
      cost: 1.2,
    },
    { item: "red bell pepper (tatashe)", qty: "1", cost: 0.5 },
    { item: "onion", qty: "1", cost: 0.35 },
    { item: "scotch bonnet, to taste", qty: "1", cost: 0.25, spansWeeks: true },
    { item: "red palm oil", qty: "3 tbsp", cost: 0.5, spansWeeks: true },
    {
      item: "ground crayfish or a stock cube",
      qty: "1 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "eggs, hard-boiled and halved (optional)", qty: "2", cost: 0.6 },
    { item: "warm water or light stock", qty: "as needed", cost: 0.1 },
    { item: "salt", qty: "to taste" },
    {
      item: "banana/moimoi leaves, foil, or small cups for moulding",
      qty: "as needed",
      cost: 0.2,
      spansWeeks: true,
    },
  ],
  method: [
    "Rub the soaked peas between your hands under water to slip off all the skins, floating them away, until you have clean white beans.",
    "Blend the peeled peas with the bell pepper, onion, and scotch bonnet, adding just enough warm water to make a thick, pourable batter (too thin and it won't set).",
    "Beat in the red palm oil, crayfish, and salt until the batter is smooth, glossy, and uniformly orange.",
    "Fill leaf parcels, foil pouches, or cups two-thirds full, tucking in a piece of egg if using.",
    "Steam over simmering water, covered, 45–60 minutes until set firm and a skewer comes out clean. Rest before unmoulding.",
  ],
  modernMove:
    "Skinning the peas and beating air into the batter with the palm oil is what turns a coarse bean paste into the smooth, custard-set texture that defines a good moi moi.",
  tags: [
    "legumes",
    "black-eyed-peas",
    "palm-oil",
    "steamed",
    "bean-pudding",
    "nigerian",
  ],
  sources: [
    {
      title: "Lola Osinkolu — Chef Lola's Kitchen",
      url: "https://cheflolaskitchen.com/make-moin-moin-moi-moi/",
      note: "Skinning the soaked beans and the blend-and-steam method for a smooth, set bean pudding.",
    },
  ],
};
