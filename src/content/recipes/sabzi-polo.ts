import type { Recipe } from "../types";

export const sabziPolo: Recipe = {
  slug: "sabzi-polo",
  title: "Sabzi Polo",
  cuisine: "persian",
  blurb:
    "Herb rice — a green tangle of parsley, cilantro, dill, and chives steamed through basmati over a saffron tahdig, the Nowruz table's centerpiece, often served with a little pan-fried fish.",
  servings: 4,
  perServing: { calories: 540, protein: 22 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "2 cups", cost: 1.4 },
    {
      item: "mixed soft herbs (parsley, cilantro, dill, chives), chopped",
      qty: "4 cups packed",
      cost: 1.2,
    },
    {
      item: "small white-fish fillets, or a thrifty tin of mackerel/sardines",
      qty: "2 (about 10 oz)",
      cost: 1.8,
    },
    {
      item: "butter or neutral oil (for the tahdig and the fish)",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "garlic clove, minced",
      qty: "1",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "saffron, bloomed in 2 tbsp hot water",
      qty: "pinch",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "lemon and ground turmeric (for the fish)",
      qty: "1/2 lemon, 1/2 tsp",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the rice and soak in salted water for 30 minutes. Chop the herbs fine and dry them well so they don't sog the rice.",
    "Parboil the soaked rice in boiling salted water for about 6 minutes until soft outside, firm inside, then drain and toss gently with the chopped herbs and minced garlic so the green runs all the way through.",
    "Heat the butter in the pot, press a thin layer of the herbed rice flat for the tahdig, then mound the rest loosely on top and poke steam holes with a spoon handle.",
    "Drizzle the saffron water over, cover the lid with a towel, and steam on the lowest heat 35–45 minutes until a golden crust forms underneath.",
    "Meanwhile, season the fish with salt, turmeric, and pepper and pan-fry in a little oil until golden and just cooked, finishing with a squeeze of lemon.",
    "Scoop the herb rice onto a platter with shards of tahdig and lay the fish alongside.",
  ],
  modernMove:
    "Drying the herbs before folding them in keeps the polo light and fluffy instead of steamed-spinach heavy, so each grain stays separate and bright green.",
  tags: ["rice", "polo", "tahdig", "herbs", "fish", "nowruz"],
};
