import type { Recipe } from "../types";

export const siuMaiCt: Recipe = {
  slug: "siu-mai-ct",
  title: "Pork & Shrimp Siu Mai",
  cuisine: "cantonese",
  blurb:
    "The open-topped jewel of every dim sum cart: a springy pork-and-shrimp filling cupped in a thin wheat wrapper, pleated loose at the top and steamed until the filling domes up plump and glossy — humble offcuts of meat and a few shrimp turned into a teahouse treat.",
  servings: 4,
  perServing: { calories: 420, protein: 26 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "ground pork (a little fatty)", qty: "10 oz", cost: 2.0 },
    { item: "shrimp, peeled and roughly chopped", qty: "6 oz", cost: 2.2 },
    { item: "dried shiitake mushrooms, soaked and finely diced", qty: "4", cost: 0.5, spansWeeks: true },
    { item: "round siu mai / wonton wrappers", qty: "30", cost: 0.9 },
    { item: "scallion, finely chopped", qty: "2", cost: 0.2 },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oyster sauce", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "white pepper", qty: "1/4 tsp", cost: 0.02, spansWeeks: true },
    { item: "sesame oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "cornstarch", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Stir the ground pork in one direction for several minutes until it turns into a tacky paste — this is what gives siu mai their signature spring. Fold in the chopped shrimp, shiitake, scallion, ginger, oyster sauce, soy, wine, sugar, pepper, sesame oil, and cornstarch and keep stirring in one direction until the filling is cohesive and sticky.",
    "Cup a wrapper in your hand, drop in a heaped spoonful of filling, and gather the wrapper up around it, leaving the top open. Squeeze gently at the 'waist' to give the classic flat-topped basket shape and smooth the exposed filling flat.",
    "Stand the siu mai in a parchment-lined or oiled steamer basket with a little space between them. If you like, top each with a fleck of grated carrot or a single pea.",
    "Steam over rapidly boiling water about 8 to 10 minutes, until the filling is firm and cooked through. Serve hot with chili oil or soy.",
  ],
  modernMove:
    "Stirring the pork in one direction until paste-like before adding the shrimp builds the bouncy, juicy bite of restaurant siu mai out of ordinary ground meat — no special cut required.",
  notes:
    "Siu mai freeze raw beautifully: open-freeze on a tray, bag, and steam straight from frozen for a few minutes longer. A handful of meat and shrimp makes thirty dumplings, which is why they were teahouse thrift food.",
  tags: ["dim-sum", "cantonese", "pork", "shrimp", "dumpling", "steamed"],
  sources: [
    {
      title: "The Woks of Life — Siu Mai with Pork & Shrimp",
      url: "https://thewoksoflife.com/siu-mai/",
      note: "Pork-and-shrimp filling stirred in one direction, the open-topped shaping, and steaming time.",
    },
  ],
};
