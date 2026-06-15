import type { Recipe } from "../types";

export const jeeraRice: Recipe = {
  slug: "jeera-rice",
  title: "Jeera Rice",
  cuisine: "north-indian",
  blurb:
    "Cumin rice — basmati cooked with seeds bloomed in ghee until they crackle, each grain separate and perfumed. The plainest possible upgrade on a pot of rice, and the standard partner to any dal.",
  servings: 4,
  perServing: { calories: 280, protein: 6 },
  estCostPerServing: 0.32,
  roles: ["base", "side"],
  ingredients: [
    { item: "basmati rice", qty: "1 1/2 cups", cost: 0.9 },
    { item: "cumin seed (jeera)", qty: "1 1/2 tsp", cost: 0.2, spansWeeks: true },
    { item: "ghee", qty: "1 1/2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "bay leaf + a few whole spices (cinnamon, clove, cardamom)", qty: "optional", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "water", qty: "2 1/4 cups", cost: 0 },
  ],
  method: [
    "Rinse the basmati in several changes of water until it runs nearly clear, then soak 20 minutes if you have time and drain. Rinsing washes off surface starch so grains stay separate, not gummy.",
    "Heat the ghee in a heavy pot over medium. Add the cumin (and whole spices) and let them sizzle and crackle for 20–30 seconds until fragrant — this is a tadka; don't let the cumin burn dark or it goes bitter.",
    "Add the drained rice and stir 1 minute to coat every grain in the spiced fat.",
    "Pour in the water and salt, bring to a boil, then cover and drop to the lowest heat. Cook undisturbed 12–15 minutes until the water is absorbed.",
    "Rest off the heat, covered, 5 minutes, then fluff gently with a fork. Each grain should stand apart.",
  ],
  modernMove:
    "Blooming the cumin in ghee before the rice ever goes in is the whole trick — the seeds release their oils into the fat and perfume every grain from the inside, which you can't get by stirring ground cumin into finished rice. The rinse-and-rest is what makes it fluffy instead of sticky.",
  notes:
    "A pot of jeera rice carries a humble dal into a real dinner. Day-old jeera rice fries up beautifully with leftover vegetables — don't waste it.",
  tags: ["base", "side", "rice", "basmati", "cumin", "tadka"],
};
