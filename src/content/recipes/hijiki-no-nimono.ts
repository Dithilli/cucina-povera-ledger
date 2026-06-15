import type { Recipe } from "../types";

export const hijikiNoNimono: Recipe = {
  slug: "hijiki-no-nimono",
  title: "Hijiki no Nimono",
  cuisine: "japanese",
  blurb:
    "Dried hijiki seaweed and soybeans slow-simmered with carrot and fried tofu in dashi-soy-mirin until the liquid is all but gone. An iron- and protein-rich pantry nimono made from a pinch of dried weed and almost nothing else.",
  servings: 4,
  perServing: { calories: 450, protein: 17 },
  estCostPerServing: 0.8,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "dried hijiki, rehydrated and drained",
      qty: "1/2 cup dried",
      cost: 0.9,
      spansWeeks: true,
    },
    {
      item: "cooked or canned soybeans (daizu), drained",
      qty: "3/4 cup",
      cost: 0.5,
    },
    { item: "carrot, cut into thin matchsticks", qty: "1", cost: 0.25 },
    {
      item: "aburaage (fried tofu pouch), sliced thin",
      qty: "1 sheet",
      cost: 0.5,
    },
    { item: "dashi (or anchovy-kelp stock)", qty: "1 cup", cost: 0.4, spansWeeks: true },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mirin", qty: "1 1/2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "sesame oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "toasted sesame seeds, to finish", qty: "to finish", cost: 0.1 },
    { item: "steamed short-grain rice, to serve", qty: "for 4", cost: 0.8 },
  ],
  method: [
    "Soak the dried hijiki in plenty of cold water 20 to 30 minutes until it swells several times in size, then drain and rinse. Pour boiling water over the sliced aburaage in a sieve to wash off excess oil.",
    "Heat the sesame oil in a pot and stir-fry the carrot and drained hijiki a couple of minutes — toasting them in the oil first is what gives this nimono its savory depth.",
    "Add the soybeans and aburaage, then pour in the dashi with the sugar and mirin. Bring to a gentle boil.",
    "Stir in the soy sauce, lower to a steady simmer, and cook uncovered 12 to 15 minutes, stirring now and then, until almost all the liquid has cooked away and the hijiki is glossy and seasoned through.",
    "Cut the heat and let it rest; the flavor settles as it cools. Serve warm or at room temperature with sesame seeds, over or beside rice.",
  ],
  modernMove:
    "Frying the hijiki and carrot in sesame oil before the dashi goes in, then simmering until nearly dry, concentrates the seasoning into the seaweed itself — a few cents of dried weed and beans become a savory, protein-dense dish.",
  notes:
    "A classic make-ahead: it keeps 4 to 5 days refrigerated, freezes well in single portions, and is a staple bento filler — so one pot covers several dinners or sides.",
  tags: ["dinner", "side", "nimono", "simmered", "hijiki", "seaweed", "soybeans", "tofu", "make-ahead", "meatless"],
};
