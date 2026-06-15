import type { Recipe } from "../types";

export const banhCanh: Recipe = {
  slug: "banh-canh",
  title: "Bánh Canh",
  cuisine: "vietnamese",
  blurb:
    "Thick, chewy tapioca-and-rice noodle soup in a broth so starchy it turns velvety — the noodles cooked right in the pot thicken everything into comfort.",
  servings: 4,
  perServing: { calories: 620, protein: 28 },
  estCostPerServing: 1.6,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "pork bones or chicken backs for the broth",
      qty: "1 1/2 lb",
      cost: 2.5,
    },
    {
      item: "tapioca starch (for the noodle dough)",
      qty: "1 1/2 cups",
      cost: 0.8,
    },
    {
      item: "rice flour (for the noodle dough)",
      qty: "3/4 cup",
      cost: 0.5,
    },
    {
      item: "boiling water (to scald the dough)",
      qty: "~1 cup",
    },
    { item: "shallots, sliced", qty: "3", cost: 0.4 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    {
      item: "fish sauce",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "neutral oil",
      qty: "2 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "scallions and cilantro, chopped", qty: "1 small bunch", cost: 0.5 },
    {
      item: "white pepper, lime, and chili to finish",
      qty: "to finish",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt, sugar to taste", qty: "to taste" },
  ],
  method: [
    "Simmer the pork bones with a smashed shallot for an hour or more, skimming, to draw out a clean, sweet broth; lift the bones and pick off any meat to scatter back in later.",
    "Make the noodles: scald the tapioca starch and rice flour with boiling water and knead into a smooth, stretchy dough while warm. Rest it briefly, then roll thin and cut into thick, short noodles (or press through a press straight over the pot).",
    "Fry the sliced shallots and garlic in the oil until fragrant and just golden — reserve some crisp for garnish, stir the rest into the broth.",
    "Bring the broth back to a simmer and season with fish sauce, salt, and a pinch of sugar.",
    "Drop the fresh noodles straight into the simmering broth. As they cook they leach starch and the broth thickens to a glossy, velvety body — that self-thickening is the whole point of bánh canh.",
    "Ladle into bowls with the picked pork, scallions, cilantro, fried shallots, plenty of white pepper, and lime and chili on the side.",
  ],
  modernMove:
    "Cooking the tapioca-rice noodles directly in the broth lets them thicken it from within — no roux, no cream, just starch doing the work, so a thrifty bone broth turns silky and substantial on its own.",
  tags: ["noodles", "tapioca", "soup", "pork", "broth", "one-pot"],
  sources: [
    {
      title: "Vicky Pham — Vietnamese Thick Noodle Soup (Banh Canh)",
      url: "https://vickypham.com/blog/vietnamese-thick-noodle-soup-banh-canh/",
      note: "Pork-bone broth and tapioca-rice noodles that thicken the soup",
    },
    {
      title: "Vicky Pham — Banh Canh Noodles from Scratch",
      url: "https://vickypham.com/blog/vietnamese-banh-canh-noodles-from-scratch-cach-lam-soi-banh-canh/",
      note: "Scalding the tapioca-rice dough with boiling water for the chewy noodles",
    },
  ],
};
