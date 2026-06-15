import type { Recipe } from "../types";

export const huaraches: Recipe = {
  slug: "huaraches",
  title: "Huaraches",
  cuisine: "mexican",
  blurb:
    "Long sandal-shaped masa flatbreads — named for the huarache sole they resemble — griddled crisp, smeared with refried beans, and finished with salsa roja, crema, and queso fresco.",
  servings: 4,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.9,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "masa harina (or fresh masa)", qty: "2 cups", cost: 0.7 },
    { item: "refried beans", qty: "1 1/2 cups", cost: 0.6 },
    { item: "salsa roja", qty: "1 cup", cost: 0.4 },
    { item: "Mexican crema", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "queso fresco, crumbled", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "shredded lettuce, onion", qty: "to garnish", cost: 0.3 },
    { item: "oil for the griddle, salt, warm water", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Knead masa harina with salt and water into a soft dough; gradually add the water until it forms a smooth ball that doesn't crack.",
    "For the classic build, press a portion thin, lay a line of refried beans down the middle, fold and seal the masa over it, then flatten into a long oval sole — or simply press a long flatbread and spread beans on after cooking.",
    "Cook on a medium-hot comal (a touch of oil helps the edges crisp), turning, until the masa is cooked through and lightly browned.",
    "Spread with more beans if you like, then layer salsa roja, a drizzle of crema, crumbled queso fresco, lettuce, and onion. Eat hot, while the base is still crisp.",
  ],
  modernMove:
    "Build the beans inside the masa rather than only on top — sealing a bean layer into the dough before griddling gives a huarache that stays sturdy under wet toppings instead of going soggy.",
  notes:
    "Best eaten fresh and hot, when the masa base is at its crispest. The long shape stretches one cook's masa across a generous, filling plate.",
  tags: ["masa", "antojito", "beans", "comal", "dinner"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen",
      url: "https://www.mexicoinmykitchen.com/mexican-huarache-recipe/",
      note: "masa dough by hand, sandal-shaping, and the beans/salsa/crema/queso build",
    },
    {
      title: "Maricruz Avalos — Mexican Huaraches (food)",
      url: "https://www.maricruzavalos.com/huaraches-food-recipe/",
      note: "oval thick-masa shaping and topping variations",
    },
  ],
};
