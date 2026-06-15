import type { Recipe } from "../types";

export const gemista: Recipe = {
  slug: "gemista",
  title: "Gemista (Stuffed Tomatoes & Peppers)",
  cuisine: "greek",
  blurb:
    "Summer tomatoes and peppers hollowed and stuffed with herbed rice, baked slow in olive oil until the tops blister and the kitchen smells of mint and dill.",
  servings: 4,
  perServing: { calories: 520, protein: 9 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "large ripe tomatoes", qty: "4", cost: 2.0 },
    { item: "bell peppers", qty: "2", cost: 1.2 },
    { item: "medium-grain rice", qty: "3/4 cup", cost: 0.45 },
    { item: "onions, finely diced", qty: "2", cost: 0.6 },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "fresh mint, parsley & dill, chopped",
      qty: "1 big handful",
      cost: 0.5,
    },
    {
      item: "olive oil, generous for stuffing and the pan",
      qty: "1/2 cup",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "potato, cut into wedges (to fill the gaps)", qty: "1", cost: 0.25 },
    { item: "salt, black pepper, pinch sugar", qty: "to taste" },
  ],
  method: [
    "Slice the tops off the tomatoes and peppers and keep them as lids. Scoop out the tomato flesh into a bowl (don't discard it) and seed the peppers; sit the shells snugly in an oiled baking dish.",
    "Soften the onions and garlic in plenty of olive oil. Stir in the raw rice for a minute, then the chopped tomato flesh, the herbs, salt, pepper, and a pinch of sugar; cook a few minutes so the rice drinks up the juices but stays underdone — it finishes in the oven.",
    "Spoon the rice loosely into the shells, leaving room to swell, and press the lids back on. Tuck potato wedges into the gaps to hold everything upright.",
    "Pour any leftover tomato juice plus a little water around the dish, douse everything with more olive oil, and bake at 180°C / 350°F for about 70–80 minutes until the rice is tender and the tops are caramelized. Rest before serving — gemista is best warm or at room temperature.",
  ],
  modernMove:
    "Reserve and cook the scooped tomato pulp back into the filling instead of binning it — that's the seasoning, the moisture, and the reason the rice tastes of the tomato it grew up in.",
  notes:
    "A ladera (cooked-in-oil) dish from the Greek summer garden; traditionally meatless and eaten lukewarm with bread and feta to mop the oil.",
  zeroWasteHero: true,
  tags: ["vegetable", "rice", "ladera", "stuffed", "summer"],
  sources: [
    {
      title: "My Greek Dish — Gemista (Greek Stuffed Tomatoes and Peppers with Rice)",
      url: "https://www.mygreekdish.com/recipe/gemista-stuffed-tomatoes-peppers-and-onions/",
      note: "Confirms tomatoes and peppers stuffed with a herbed rice filling and baked in olive oil.",
    },
  ],
};
