import type { Recipe } from "../types";

export const braisedTofuCt: Recipe = {
  slug: "braised-tofu-ct",
  title: "Home-Style Braised Tofu",
  cuisine: "cantonese",
  blurb:
    "Slabs of tofu pan-fried until a golden skin forms, then braised in an oyster-soy gravy with shiitake until each piece drinks up the savor — the everyday gaa seung dau fu that turns a cheap block of bean curd into the centerpiece of the rice table.",
  servings: 4,
  perServing: { calories: 380, protein: 18 },
  estCostPerServing: 1.15,
  roles: ["dinner"],
  ingredients: [
    { item: "firm tofu, sliced into thick rectangles", qty: "2 blocks (~28 oz)", cost: 2.2 },
    { item: "dried shiitake mushrooms, soaked and sliced", qty: "6", cost: 0.7, spansWeeks: true },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "fresh ginger, sliced", qty: "4 coins", cost: 0.1, spansWeeks: true },
    { item: "scallions, cut in lengths (whites and greens kept apart)", qty: "3", cost: 0.3 },
    { item: "oyster sauce", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "dark soy sauce (for color)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "mushroom soaking water or stock", qty: "3/4 cup", cost: 0.1 },
    { item: "cornstarch slurried in water", qty: "1 tsp + 1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "peanut oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Press the tofu slices between paper towels to draw off surface water, then fry them in hot oil, turning once, until both broad faces wear a firm golden skin. Lift out and set aside — the skin is what lets the tofu hold its shape and grip the sauce.",
    "In the same pan, fry the garlic, ginger, scallion whites, and sliced shiitake until fragrant. Splash in the Shaoxing wine to deglaze, then stir in the oyster sauce, both soy sauces, and sugar.",
    "Pour in the mushroom water, slide the tofu back in, and braise gently 8 to 10 minutes, spooning the gravy over so every slice soaks it up.",
    "Stir the cornstarch slurry and add it in a thread, swirling until the sauce turns glossy and clings. Scatter the scallion greens and serve over rice.",
  ],
  modernMove:
    "The golden fry isn't optional browning — it builds a skin that keeps the tofu intact through the braise and gives the gravy something to cling to, so a few cents of bean curd carries the whole dish.",
  notes:
    "Save the strained mushroom soaking water; it is pure umami and does the work of stock here. Day-old leftovers reheat beautifully, the tofu only growing more flavorful.",
  tags: ["tofu", "cantonese", "shiitake", "oyster-sauce", "rice"],
  sources: [
    {
      title: "The Woks of Life — Braised Tofu",
      url: "https://thewoksoflife.com/braised-tofu/",
      note: "Pan-fry-then-braise method and the oyster-soy gravy with shiitake.",
    },
  ],
};
