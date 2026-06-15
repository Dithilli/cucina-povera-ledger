import type { Recipe } from "../types";

export const mujaddara: Recipe = {
  slug: "mujaddara",
  title: "Mujaddara",
  cuisine: "levantine",
  blurb:
    "Lentils and rice cooked together under a mountain of deeply caramelized onions — the dish the proverb calls 'a dish for Esau,' beloved enough to be a national comfort food across the Levant.",
  servings: 4,
  perServing: { calories: 560, protein: 18 },
  estCostPerServing: 0.7,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "brown or green lentils", qty: "1 cup", cost: 0.65 },
    { item: "long-grain rice, rinsed", qty: "1 cup", cost: 0.4 },
    { item: "large onions, thinly sliced", qty: "3", cost: 0.9 },
    { item: "olive oil", qty: "1/3 cup", cost: 0.7, spansWeeks: true },
    { item: "ground cumin", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "ground coriander", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste" },
    { item: "plain yogurt or tahini sauce, to serve", qty: "to serve", cost: 0.5 },
  ],
  method: [
    "Simmer the lentils in plenty of unsalted water until about three-quarters done — still firm, 15 minutes. Drain, saving the cooking water to use for the rice.",
    "Meanwhile, fry the onions: heat the oil over medium and cook the sliced onions, stirring often, until they collapse, then go past golden to deep mahogany brown — 20 to 30 minutes. Pull about a third out onto paper towels to crisp; they're the garnish.",
    "Into the pot with the remaining onions and their oil, stir the cumin and coriander for 30 seconds, then add the rinsed rice, the par-cooked lentils, salt, and pepper.",
    "Pour in 2 cups of the reserved lentil water (top up with fresh if short). Bring to a boil, cover, drop to low, and cook 15 minutes until the rice is done and the water is gone. Rest off the heat, covered, 10 minutes.",
    "Fluff with a fork, pile onto a platter, and crown with the reserved crispy onions. Serve warm or room temperature with yogurt or tahini sauce and a sharp salad.",
  ],
  modernMove:
    "Taking the onions all the way to true brown — not timid gold — is the whole dish: their sugars caramelize into a smoky-sweet backbone, and the last batch fried crisp gives the textural crown. Cooking the rice in the lentil water keeps every bit of earthiness in the pot.",
  notes:
    "Endlessly forgiving and even better the next day. The Palestinian and Lebanese versions both lean on the onions; some cooks swap bulgur for the rice.",
  zeroWasteHero: true,
  tags: ["dinner", "legumes", "lentils", "rice", "onions", "one-pot", "vegan"],
  sources: [
    {
      title: "Maureen Abood — maureenabood.com",
      url: "https://maureenabood.com/lebanese-mujadara/",
      note: "Authentic Lebanese mujadara — confirms deeply caramelized (near-burnt) onions and lentils-with-rice as the heart of the dish.",
    },
  ],
};
