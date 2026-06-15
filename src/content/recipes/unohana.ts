import type { Recipe } from "../types";

export const unohana: Recipe = {
  slug: "unohana",
  title: "Unohana",
  cuisine: "japanese",
  blurb:
    "Okara — the soy pulp left over from making tofu — simmered with vegetables and dashi into a moist, savory crumble. The original waste-not thrift dish, turning a by-product into supper.",
  servings: 4,
  perServing: { calories: 480, protein: 20 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  zeroWasteHero: true,
  ingredients: [
    {
      item: "fresh okara (soy pulp from tofu-making)",
      qty: "2 cups",
      cost: 0.6,
    },
    {
      item: "dried shiitake, soaked, then sliced (keep the soaking water)",
      qty: "3",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "carrot, cut in fine matchsticks", qty: "1 small", cost: 0.2 },
    {
      item: "aburaage (fried tofu pouch), slivered",
      qty: "1 sheet",
      cost: 0.4,
    },
    { item: "scallions or konnegi, sliced", qty: "2", cost: 0.2 },
    { item: "dashi (plus the shiitake soaking water)", qty: "1 cup", cost: 0.3 },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mirin", qty: "1 1/2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    {
      item: "neutral or sesame oil",
      qty: "1 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "steamed short-grain rice, to serve",
      qty: "4 bowls",
      cost: 0.8,
    },
  ],
  method: [
    "Dry-toast the okara in a wide pan over medium heat for a couple of minutes until it smells nutty and loses its raw edge, then tip it out and reserve.",
    "Warm the oil and soften the carrot, shiitake, and aburaage until the carrot bends, a minute or two.",
    "Add the dashi blended with the shiitake water, the soy sauce, mirin, and sugar, and bring to a simmer so the vegetables drink in the seasoning.",
    "Fold the toasted okara back in and cook gently, stirring, until it has absorbed the broth and is moist but no longer wet — like a savory, just-damp crumble. Stir through the scallions off the heat and serve warm or at room temperature with rice.",
  ],
  modernMove:
    "Toasting the okara first drives off its raw beaniness and lets it act like a sponge, soaking up dashi and the shiitake's glutamates so a literal by-product reads as a seasoned, satisfying dish rather than scraps.",
  notes:
    "Okara is what's strained out when soy milk is pressed into tofu — ask a tofu shop or save it if you make your own. Keeps a few days refrigerated and is even better the next day.",
  tags: ["okara", "soybean", "tofu", "dashi", "zero-waste", "by-product"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Okara (Unohana) — Simmered Soy Pulp & Vegetables",
      url: "https://www.justonecookbook.com/okara-unohana/",
      note: "The irini technique — stir-frying okara and vegetables, then simmering in dashi until just damp.",
    },
  ],
};
