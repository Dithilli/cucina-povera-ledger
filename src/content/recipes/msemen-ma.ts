import type { Recipe } from "../types";

export const msemenMa: Recipe = {
  slug: "msemen-ma",
  title: "Msemen",
  cuisine: "moroccan",
  blurb:
    "Square, flaky, pan-fried flatbread — soft dough stretched sheer, smeared with oil and fine semolina, then folded into layered packets that shatter into buttery leaves on the griddle.",
  servings: 4,
  perServing: { calories: 470, protein: 12 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "plain flour", qty: "2 cups", cost: 0.4 },
    { item: "fine semolina (some in dough, more for folding)", qty: "3/4 cup", cost: 0.4 },
    { item: "instant yeast", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1 tsp" },
    { item: "warm water", qty: "about 1 cup" },
    { item: "oil and a little melted butter (for laminating)", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "honey or soft cheese, to serve", qty: "to serve", cost: 0.5 },
  ],
  method: [
    "Mix the flour, a few tablespoons of semolina, yeast, and salt, then knead in warm water to a soft, slightly sticky dough. Work it 8–10 minutes until smooth and elastic, then rest 20 minutes.",
    "Divide into 8 balls, coat them in oil, and rest again so they relax. On a well-oiled surface, flatten and stretch each ball as thin and translucent as you can without tearing.",
    "Brush the sheet with oil-butter and scatter a pinch of fine semolina across it. Fold the sides in to make a long rectangle, oil and semolina again, then fold into thirds the other way to form a square layered packet.",
    "Cook on a hot, lightly oiled griddle, pressing and flipping several times, until both sides are deep golden and crisp at the edges but still tender within.",
    "Serve hot, the layers pulling apart, with honey, smen, or a wedge of soft cheese; for dinner pair with harira or a bowl of lentils.",
  ],
  modernMove:
    "Fine semolina sprinkled between the oiled folds is what keeps the layers from welding together — it's the spacer that turns one sheet of dough into the dozens of flaky leaves that define msemen.",
  notes:
    "A breakfast and tea-time staple that earns its place at dinner, especially torn into rfissa. Stretch the dough on oil, never flour, so it goes sheer without sticking or drying.",
  zeroWasteHero: false,
  tags: ["bread", "moroccan", "flatbread", "laminated", "griddle"],
  sources: [
    {
      title: "Taste of Maroc — Msemen Recipe (Square Moroccan Pancakes / Rghaif)",
      url: "https://tasteofmaroc.com/msemen-recipe/",
      note: "Flour-and-semolina dough, the oil-and-semolina lamination, and the fold-into-a-square technique.",
    },
  ],
};
