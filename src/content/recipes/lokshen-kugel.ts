import type { Recipe } from "../types";

export const lokshenKugel: Recipe = {
  slug: "lokshen-kugel",
  title: "Lokshen Kugel (Sweet Noodle Pudding)",
  cuisine: "ashkenazi",
  blurb:
    "Wide egg noodles bound with cottage and farmer cheese, eggs, butter, raisins, and cinnamon, then baked into a sweet, custardy pudding — soft and rich in the middle, with the crisp, browned noodle edges everyone fights over.",
  servings: 8,
  perServing: { calories: 470, protein: 15 },
  estCostPerServing: 0.8,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "wide egg noodles", qty: "12 oz", cost: 1.5 },
    { item: "cottage cheese", qty: "2 cups", cost: 2.0 },
    { item: "farmer cheese (or cream cheese)", qty: "8 oz", cost: 1.5 },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "butter, melted", qty: "4 tbsp", cost: 0.6, spansWeeks: true },
    { item: "sugar", qty: "1/3 cup", cost: 0.15, spansWeeks: true },
    { item: "raisins", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "cinnamon", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "sour cream, optional", qty: "1/2 cup", cost: 0.5 },
    { item: "salt", qty: "1/2 tsp", spansWeeks: true },
  ],
  method: [
    "Boil the egg noodles in salted water until just tender, then drain. While still hot, toss them with the melted butter so every strand is slicked — this keeps them from clumping and carries flavor through.",
    "In a big bowl, beat the eggs with the cottage cheese, farmer cheese, sour cream if using, sugar, cinnamon, and salt into a loose, lumpy custard.",
    "Fold in the buttered noodles and the raisins until everything is evenly coated. Scrape into a buttered baking dish and smooth the top; the surface noodles will crisp.",
    "Bake at 350°F for 45–55 minutes, until set in the center, golden on top, and the edge noodles are browned and crisp. A knife near the middle should come out clean of liquid custard.",
    "Let it settle 10 minutes before cutting so it slices cleanly. Eat warm — or, as many do, cold from the fridge the next day.",
  ],
  modernMove:
    "Toss the noodles with the melted butter while they're still hot, before the custard goes in: hot noodles drink up the fat and stay separate, and the buttered strands at the surface are what brown and crisp into the prized lacy edges. The contrast of creamy center and crackling top is the whole reward of a kugel.",
  notes:
    "This is the milchig (dairy) kugel — cheese, eggs, butter, sour cream, no meat anywhere near it. A pareve version made with oil and no cheese (just noodles, eggs, sugar, and raisins) exists precisely so kugel can ride alongside a meat meal; build that one when the table is fleishig.",
  tags: ["noodles", "kugel", "dairy", "milchig"],
};
