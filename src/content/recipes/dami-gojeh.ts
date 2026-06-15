import type { Recipe } from "../types";

export const damiGojeh: Recipe = {
  slug: "dami-gojeh",
  title: "Dami Gojeh Farangi",
  cuisine: "persian",
  blurb:
    "One-pot tomato rice steamed soft and savory — the cheapest dami in the repertoire, all pantry and a few summer tomatoes, with its own tahdig.",
  servings: 4,
  perServing: { calories: 520, protein: 14 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "2 cups", cost: 1.4 },
    { item: "ripe tomatoes, chopped (or 1 cup passata)", qty: "4", cost: 1.0 },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    {
      item: "neutral oil or butter (for frying and the tahdig)",
      qty: "3 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "turmeric", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "ground cinnamon and dried mint (optional)",
      qty: "1/2 tsp each",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "salt, black pepper, chili flakes", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the rice and soak in salted water 30 minutes while you build the base.",
    "Soften the onion in the oil with the turmeric until golden, then stir in the tomato paste and fry it a minute to deepen the color. Add the chopped tomatoes, cinnamon, salt, and pepper and cook down to a thick sauce.",
    "Drain the rice and stir it into the tomato base with about 2 1/2 cups water, so the liquid sits just above the rice. Bring to a brisk boil until most of the liquid is absorbed and craters appear.",
    "Lower the heat to the minimum, poke a few steam holes, dot with a little more oil, and cover the lid with a towel.",
    "Steam undisturbed 35–45 minutes until the rice is fluffy and a crisp tomato-stained tahdig forms on the bottom.",
    "Scoop the soft rice onto a platter and break the crust off in shards on top; finish with dried mint and chili.",
  ],
  modernMove:
    "Frying the tomato paste to a brick-red fond before the fresh tomatoes go in builds a roasted depth, so a one-pot rice tastes braised rather than boiled.",
  zeroWasteHero: true,
  tags: ["rice", "dami", "tomato", "tahdig", "one-pot", "vegan"],
};
