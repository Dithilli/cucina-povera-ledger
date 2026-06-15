import type { Recipe } from "../types";

export const zapiekankaPl: Recipe = {
  slug: "zapiekanka-pl",
  title: "Zapiekanka",
  cuisine: "polish",
  blurb:
    "A split baguette piled with buttery sautéed mushrooms and onion, blanketed in melting cheese and baked until the edges crisp, then zig-zagged with ketchup and scattered with chives — the bar-mleczny-era street snack born of communist-era thrift, where a stale half-loaf becomes a hot meal.",
  servings: 4,
  perServing: { calories: 540, protein: 18 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "baguette or long roll", qty: "2 (or 1 large)", cost: 1.4 },
    { item: "white mushrooms, sliced", qty: "12 oz", cost: 1.8 },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "Gouda or mild cheese, grated", qty: "6 oz", cost: 1.5 },
    { item: "butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "ketchup (to finish)", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "chives or scallion, chopped", qty: "small handful", cost: 0.2 },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Melt the butter in a skillet and cook the onion and mushrooms over medium heat until the mushrooms have given up their water and browned, 8–10 minutes. Season well with salt and pepper.",
    "Split the baguettes in half lengthwise, then cut each half crosswise into open-faced pieces. A slightly stale loaf is ideal — it crisps rather than going soggy.",
    "Spread the mushroom mixture generously over each piece, then blanket with the grated cheese.",
    "Bake at 425°F (220°C) for about 7 minutes, until the cheese is melted and bubbling and the bread edges are toasted.",
    "Finish the Polish way: a zig-zag of ketchup and a scatter of chives. Eat hot, ideally standing up.",
  ],
  modernMove:
    "Cook the mushrooms hard until their water fully evaporates and they brown before they ever touch the bread — that dry, concentrated topping is what keeps the baguette crisp under the melting cheese instead of steaming it soft.",
  notes:
    "Born around the 1970s in the lean years of communist Poland and still sold on every street corner. Ham, kiełbasa, or pickles are common additions.",
  zeroWasteHero: true,
  tags: ["bread", "street-food", "polish"],
  sources: [
    {
      title: "Wikipedia — Zapiekanka",
      url: "https://en.wikipedia.org/wiki/Zapiekanka",
      note: "Toasted open-face baguette with mushrooms and cheese; 1970s street-food origin.",
    },
  ],
};
