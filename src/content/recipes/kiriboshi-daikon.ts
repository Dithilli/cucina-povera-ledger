import type { Recipe } from "../types";

export const kiriboshiDaikon: Recipe = {
  slug: "kiriboshi-daikon",
  title: "Kiriboshi Daikon",
  cuisine: "japanese",
  blurb:
    "Dried shredded daikon rehydrated and simmered with carrot and fried tofu in dashi-soy-mirin — sun-dried radish that turns sweet and chewy and drinks up the broth. The thriftiest of nimono, made from a dried vegetable that keeps for months.",
  servings: 4,
  perServing: { calories: 460, protein: 13 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "dried shredded daikon (kiriboshi daikon)",
      qty: "1 1/2 oz dried",
      cost: 0.9,
      spansWeeks: true,
    },
    { item: "carrot, cut into thin matchsticks", qty: "1", cost: 0.25 },
    {
      item: "aburaage (fried tofu pouch), sliced thin",
      qty: "1 sheet",
      cost: 0.5,
    },
    {
      item: "reserved daikon soaking water + dashi to make 1 1/2 cups",
      qty: "1 1/2 cups",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mirin", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "sesame oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "toasted sesame seeds, to finish", qty: "to finish", cost: 0.1 },
    { item: "steamed short-grain rice, to serve", qty: "for 4", cost: 0.8 },
  ],
  method: [
    "Rinse the dried daikon, then soak it in cold water 15 to 20 minutes until soft and pale; it triples in volume. Squeeze it dry and roughly chop, and — this is the thrifty trick — save the soaking water: it's sweet and full of flavor, and goes into the broth.",
    "Pour boiling water over the sliced aburaage in a sieve to rinse off excess oil.",
    "Heat the sesame oil in a pot and stir-fry the carrot and drained daikon a couple of minutes until coated and fragrant.",
    "Add the aburaage, then pour in the reserved soaking water topped up with dashi, plus the sugar and mirin. Bring to a gentle boil.",
    "Stir in the soy sauce and simmer uncovered 12 to 15 minutes, until most of the liquid is gone and the daikon is glossy, tender-chewy, and deeply seasoned.",
    "Rest off the heat to let the flavor settle. Serve warm or at room temperature with sesame seeds, over or beside rice.",
  ],
  modernMove:
    "Building the broth on the daikon's own sweet soaking liquid rather than plain water means nothing is wasted and the radish tastes of itself — concentrated flavor from a dried vegetable that cost almost nothing.",
  notes:
    "Sun-drying both preserves the daikon for months and concentrates its sugars, so this is pantry-shelf cooking. Keeps 4 to 5 days refrigerated and freezes well; a standard bento and side dish.",
  tags: ["dinner", "side", "nimono", "simmered", "daikon", "dried-vegetable", "tofu", "dashi", "make-ahead", "meatless"],
};
