import type { Recipe } from "../types";

export const humitas: Recipe = {
  slug: "humitas",
  title: "Humitas",
  cuisine: "andean",
  blurb:
    "Fresh choclo ground to a coarse, creamy paste, bound with cheese and a little egg, wrapped in its own husks and steamed into tender, lightly sweet savory parcels.",
  servings: 4,
  perServing: { calories: 430, protein: 13 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh corn on the cob (choclo), husks reserved", qty: "6 ears", cost: 3.0 },
    { item: "fresh cheese (queso fresco), diced", qty: "5 oz", cost: 1.2, spansWeeks: true },
    { item: "egg", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "onion, finely chopped", qty: "1/2", cost: 0.15 },
    { item: "lard or butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "ground ají amarillo or paprika", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt and a pinch of sugar", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Shuck the corn, keeping the husks whole; blanch the husks in boiling water a minute to make them pliable and set aside.",
    "Cut the kernels off and pulse them in a blender or grind to a coarse, creamy paste — leave some texture.",
    "Soften the onion in the lard with the ají, then stir it into the corn paste along with the beaten egg, salt, and a pinch of sugar to lift the corn's own sweetness.",
    "Spoon the paste onto a husk, tuck a few cubes of cheese into the center, fold the sides over, fold up the bottom, and tie with a strip of husk.",
    "Stand the parcels upright in a steamer over salted water, cover, and steam 45–50 minutes until the masa is set and pulls cleanly from the husk.",
  ],
  modernMove:
    "Grinding the corn only to a coarse paste — not a smooth purée — keeps little pockets of kernel that pop against the molten cheese, the textural signature of a good humita.",
  notes:
    "The husks are the wrapper, the steamer liner, and the tie — nothing is bought to package them. Leftover humitas crisp beautifully in a dry pan the next day.",
  zeroWasteHero: false,
  tags: ["corn", "choclo", "humitas", "steamed", "cheese", "peru", "andean"],
  sources: [
    {
      title: "Layla Pujol — Laylita's Recipes: Humitas",
      url: "https://www.laylita.com/recipes/humitas/",
      note: "Fresh-ground corn bound with cheese and egg, wrapped in husks and steamed",
    },
  ],
};
