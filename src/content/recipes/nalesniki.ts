import type { Recipe } from "../types";

export const nalesniki: Recipe = {
  slug: "nalesniki",
  title: "Naleśniki",
  cuisine: "polish",
  blurb:
    "Tender, paper-thin Polish crêpes folded around sweet twaróg — farmer's cheese mashed with sugar, vanilla, and a little cream — then warmed in butter until the edges blister and the filling goes molten. The everyday pancake of Polish kitchens, made from nothing but flour, milk, eggs, and a cheap brick of curd.",
  servings: 4,
  perServing: { calories: 520, protein: 22 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "flour", qty: "1 1/4 cups", cost: 0.25, spansWeeks: true },
    { item: "milk", qty: "1 1/2 cups", cost: 0.4 },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "twaróg (farmer's cheese), or ricotta", qty: "12 oz", cost: 1.6 },
    { item: "sugar", qty: "3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "vanilla", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "butter, for the pan", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "sour cream (to serve)", qty: "to taste", cost: 0.3 },
    { item: "salt", qty: "pinch", cost: 0.01, spansWeeks: true },
  ],
  method: [
    "Whisk the flour, milk, eggs, a pinch of salt, and a spoon of sugar into a smooth, runny batter. Rest it 30 minutes so the crêpes stay tender and flexible.",
    "Heat a lightly buttered nonstick pan over medium. Pour in about 1/4 cup of batter and swirl to coat the pan thinly. Cook 1–2 minutes until the bottom is pale-gold, flip, and cook 30 seconds more. Stack the finished crêpes.",
    "Mash the twaróg with the remaining sugar and the vanilla until creamy — loosen with a spoon of sour cream if it's stiff.",
    "Spread a stripe of cheese filling across each crêpe, fold the sides in, and roll up (or fold into quarters).",
    "Warm the filled crêpes in a little butter until golden on both sides and the filling is hot. Serve dusted with sugar and a spoon of sour cream or fruit.",
  ],
  modernMove:
    "Rest the batter a full 30 minutes — the flour hydrates and the gluten relaxes, so the crêpes turn out thin and supple instead of rubbery, thin enough to roll without tearing.",
  notes:
    "Twaróg is the soul of the dish; drained ricotta or a dry cottage cheese pressed through a sieve stands in. Swap the sweet cheese for sautéed mushroom, spinach, or leftover meat and these become a savory supper.",
  zeroWasteHero: false,
  tags: ["polish", "crepe", "twarog", "cheese", "everyday"],
  sources: [
    {
      title: "Everyday Delicious (Aleksandra) — Naleśniki (Polish crêpes with sweet cheese filling)",
      url: "https://www.everyday-delicious.com/nalesniki-recipe/",
      note: "Thin crêpe batter rested before cooking, and the twaróg-sugar-vanilla sweet cheese filling",
    },
  ],
};
