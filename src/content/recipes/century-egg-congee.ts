import type { Recipe } from "../types";

export const centuryEggCongee: Recipe = {
  slug: "century-egg-congee",
  title: "Century Egg & Pork Congee",
  cuisine: "cantonese",
  blurb:
    "The classic of the congee stall — pidan shou rou zhou — where amber, jelly-set century eggs melt into silky rice porridge and slivers of marinated lean pork poach soft in the heat, finished with white pepper, ginger and scallion.",
  servings: 4,
  perServing: { calories: 420, protein: 22 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "jasmine rice", qty: "1 cup", cost: 0.4 },
    { item: "water or light stock", qty: "9 cups", cost: 0.4, spansWeeks: true },
    { item: "lean pork (loin or shoulder), thinly sliced", qty: "8 oz", cost: 1.8 },
    { item: "century eggs (pidan), quartered", qty: "2", cost: 1.2 },
    { item: "ginger, julienned", qty: "2-inch knob", cost: 0.2, spansWeeks: true },
    { item: "cornstarch, light soy, sesame oil (pork marinade)", qty: "for marinade", cost: 0.2, spansWeeks: true },
    { item: "scallions, sliced", qty: "3", cost: 0.2 },
    { item: "white pepper, salt, fried shallots, cilantro", qty: "to finish", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Toss the sliced pork with a pinch of salt, a little light soy, sesame oil, and a teaspoon of cornstarch; set aside to marinate while the rice cooks.",
    "Rinse the rice, drain, and bring it to a boil in the water or stock with half the ginger. Drop to a low simmer and cook uncovered 60–90 minutes, stirring now and then, until the grains burst into a thick, creamy porridge.",
    "Quarter the peeled century eggs. Stir half of them into the congee and let them dissolve and thicken the porridge; reserve the rest for topping.",
    "Season with white pepper and salt to a savoury broth, then stir in the marinated pork off the boil so it poaches tender in the residual heat.",
    "Ladle into bowls and top with the reserved century-egg wedges, julienned ginger, scallion, fried shallots, and cilantro.",
  ],
  modernMove:
    "Stirring half the century eggs in early lets them melt and lend the whole pot their dark, custardy richness, while the reserved wedges keep their amber jelly intact on top — two textures from one ingredient. Marinating the pork with a little cornstarch velvets it so it stays silky in the porridge.",
  notes:
    "This is comfort food for a cold day or an unwell stomach as much as a thrift dinner: a couple of preserved eggs and a few ounces of pork turn a cup of rice into a meal for four. A drizzle of sesame oil and a fistful of white pepper at the table are non-negotiable.",
  zeroWasteHero: false,
  tags: ["congee", "century-egg", "pork", "cantonese", "jook", "porridge"],
  sources: [
    {
      title: "The Mala Market — Healing Century Egg and Pork Congee (Pidan Shourou Zhou, 皮蛋瘦肉粥)",
      url: "https://blog.themalamarket.com/century-egg-pork-congee-pidan-shourou-zhou/",
      note: "Melting some century egg into the pot and reserving the rest; adding thin marinated pork off the heat to keep it tender.",
    },
  ],
};
