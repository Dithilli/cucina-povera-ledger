import type { Recipe } from "../types";

export const sweetAndSourCabbage: Recipe = {
  slug: "sweet-and-sour-cabbage",
  title: "Sweet-and-Sour Cabbage",
  cuisine: "ashkenazi",
  blurb:
    "A whole head of cabbage shredded and braised slow with onion, vinegar, a little sugar, and raisins until it collapses into something silky, glossy, and sweet-tart — a few pennies' worth of cellar cabbage coaxed into a meal over potato or kasha.",
  servings: 6,
  perServing: { calories: 380, protein: 10 },
  estCostPerServing: 0.4,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "green cabbage, cored and thinly shredded", qty: "1 medium head (about 2 1/2 lb)", cost: 1.2 },
    { item: "onion, thinly sliced", qty: "1 large", cost: 0.4 },
    { item: "raisins", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "vinegar (cider or white)", qty: "3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar (or brown sugar)", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Warm the oil in a wide, heavy pot and add the sliced onion. Cook over medium-low heat, stirring now and then, until soft and just starting to gild, about 10 minutes.",
    "Add all the shredded cabbage — it will mound high. Stir to coat in the oil, cover, and let it wilt down for 10 minutes, stirring once or twice; it loses most of its volume.",
    "Stir in the raisins, vinegar, sugar, bay leaf, a good pinch of salt, and a splash of water. Cover and braise very low, stirring occasionally, for 45 minutes to an hour, until the cabbage is meltingly soft and the liquid has cooked down to a glossy sweet-sour glaze.",
    "Uncover for the last few minutes if it's at all watery, to drive off the excess. Taste and tune the sweet-and-sour balance — it should taste bright, not flat — and grind in plenty of black pepper.",
    "Serve hot, mounded over a boiled potato or a bowl of kasha to turn the side dish into supper.",
  ],
  modernMove:
    "Patience is the whole technique: the long, low braise is what turns sharp raw cabbage sweet and silky, the natural sugars deepening as the shreds collapse. Rushing it over high heat gives you steamed cabbage; an hour at a bare simmer gives you something closer to a savory marmalade.",
  notes:
    "Pareve as written, so it sits comfortably at any table — meat, dairy, or neither. Over kasha or potato it's a full meatless dinner; alongside a roast it's the bright, tart counterpoint to the fat.",
  tags: ["cabbage", "sweet-sour", "pareve"],
  sources: [
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Sweet-and-sour braised cabbage in the Ashkenazi repertoire; raisins and vinegar balance.",
    },
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Slow-braised sweet-sour cabbage as a frugal everyday dish over potato or kasha.",
    },
  ],
};
