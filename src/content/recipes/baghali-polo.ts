import type { Recipe } from "../types";

export const baghaliPolo: Recipe = {
  slug: "baghali-polo",
  title: "Baghali Polo",
  cuisine: "persian",
  blurb:
    "Fava-bean and dill rice — fistfuls of dried dill and tender favas steamed through basmati, all resting on a buttery saffron tahdig.",
  servings: 4,
  perServing: { calories: 560, protein: 16 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "2 cups", cost: 1.4 },
    {
      item: "fava beans, fresh or frozen (or lima beans)",
      qty: "1 1/2 cups",
      cost: 1.3,
    },
    { item: "dried dill (or 1 cup chopped fresh)", qty: "1/3 cup", cost: 0.5 },
    {
      item: "butter or neutral oil (for the tahdig and finishing)",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "saffron, bloomed in 2 tbsp hot water",
      qty: "pinch",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "ground cinnamon (optional)",
      qty: "1/2 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the rice and soak in salted water for 30 minutes. If using fresh favas, blanch and slip off the tough skins; frozen beans can go in straight.",
    "Parboil the soaked rice in a big pot of boiling salted water for 4 minutes, then add the favas and boil 2 minutes more, until the grains are soft outside but firm in the center. Drain and toss gently with the dried dill so it perfumes the whole batch.",
    "Heat the butter in the pot, press a thin layer of the dilled rice flat for the tahdig, then mound the rest in loosely, poking steam holes with a spoon handle.",
    "Drizzle the saffron water over the top, cover the lid with a towel, and steam on the lowest heat 35–45 minutes until a golden crust forms underneath.",
    "Finish with a little melted saffron butter, scoop onto a platter, and serve the crisp tahdig in shards alongside.",
  ],
  modernMove:
    "Adding the dried dill after the parboil, off the heat, keeps its grassy oils from cooking flat — the rice tastes of fresh herb even from a pantry jar.",
  tags: ["rice", "polo", "tahdig", "fava-beans", "dill", "herbs", "legumes"],
  sources: [
    {
      title: "Wikipedia — Baghali polo",
      url: "https://en.wikipedia.org/wiki/Baghali_polo",
      note: "Confirms baghali polo as Iranian rice with fava beans and dill, steamed to a tahdig and served at Nowruz.",
    },
  ],
};
