import type { Recipe } from "../types";

export const comChienDuongChau: Recipe = {
  slug: "com-chien-duong-chau",
  title: "Cơm Chiên Dương Châu",
  cuisine: "vietnamese",
  blurb:
    "Yangzhou-style fried rice — the Vietnamese-Chinese clean-out-the-fridge dinner that turns yesterday's rice and odd scraps of meat and veg into a glossy plate.",
  servings: 4,
  perServing: { calories: 560, protein: 20 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "cooked day-old rice, cold", qty: "5 cups", cost: 0.7 },
    { item: "eggs", qty: "3", cost: 0.6 },
    { item: "leftover cooked meat (char siu, ham, sausage, chicken), diced", qty: "1 cup", cost: 0.8 },
    { item: "frozen or leftover peas and carrots, diced", qty: "1 cup", cost: 0.5 },
    { item: "scallions, sliced", qty: "3", cost: 0.2 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fish sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt, white pepper", qty: "to taste" },
  ],
  method: [
    "Use cold day-old rice: a night in the fridge dries the grains so they fry separate and toasty instead of clumping into a sticky mass.",
    "Scramble the beaten eggs in hot oil until just set, break them up, and scoop out. This keeps the egg fluffy rather than rubbery once everything else hits the pan.",
    "Fry the garlic, then the diced meat and vegetables — whatever scraps you have — until hot and a little caramelized.",
    "Crank the heat, add the rice, and toss hard so every grain dances and catches the pan. Splash in fish sauce and soy, return the egg, and fold in the scallions off the heat. Season with white pepper.",
  ],
  modernMove:
    "There's no fixed recipe — the dish is a frame for leftovers. Cold dried rice plus a screaming pan gives the toasted, separate-grain bite, and the fish sauce is the one stroke that makes it read Vietnamese rather than Cantonese.",
  zeroWasteHero: true,
  tags: ["fried-rice", "leftover-rice", "zero-waste", "egg", "one-pan"],
};
