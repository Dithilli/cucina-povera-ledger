import type { Recipe } from "../types";

export const nasiGoreng: Recipe = {
  slug: "nasi-goreng",
  title: "Nasi Goreng",
  cuisine: "indonesian",
  blurb:
    "Indonesia's national fried rice — day-old rice seared hard in a chili-shallot paste slicked with kecap manis, crowned with a runny fried egg.",
  servings: 4,
  perServing: { calories: 620, protein: 22 },
  estCostPerServing: 1.05,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "cooked day-old rice, cold", qty: "5 cups", cost: 0.7 },
    { item: "eggs (some scrambled in, one fried per plate)", qty: "5", cost: 1.0 },
    { item: "shallots", qty: "4", cost: 0.5 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "red chilies", qty: "3", cost: 0.25, spansWeeks: true },
    { item: "kecap manis (sweet soy)", qty: "3 tbsp", cost: 0.5, spansWeeks: true },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "shrimp paste (terasi), optional", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "leftover vegetables (cabbage, carrot, greens), diced", qty: "2 cups", cost: 0.6 },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "fried shallots, cucumber, lime to serve", qty: "to serve", cost: 0.4 },
    { item: "salt, white pepper", qty: "to taste" },
  ],
  method: [
    "Pound the shallots, garlic, chilies, and shrimp paste into a rough sambal — this paste, not bottled sauce, is what makes the rice taste Indonesian.",
    "Use cold day-old rice: a night in the fridge dries the grains so they fry separate and chewy instead of clumping to mush.",
    "Fry the sambal in hot oil until the raw smell goes, push it aside, and scramble two beaten eggs in the bare pan, then break them up.",
    "Crank the heat, add the rice and leftover vegetables, and toss hard so every grain catches the pan. Sweep in kecap manis and soy and keep tossing until the rice smokes faintly and goes glossy and brown.",
    "Top each plate with a crisp-edged fried egg, fried shallots, cucumber, and a wedge of lime.",
  ],
  modernMove:
    "Cold, dried-out rice plus a screaming-hot pan gives the toasted, separate-grain texture (wok hei) that defines real nasi goreng — fresh rice can never get there.",
  zeroWasteHero: true,
  tags: ["fried-rice", "leftover-rice", "kecap-manis", "egg", "one-pan", "zero-waste"],
  sources: [
    { title: "Wikipedia — Nasi goreng", url: "https://en.wikipedia.org/wiki/Nasi_goreng", note: "national-dish status, day-old rice, and kecap manis seasoning" },
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/nasi-goreng-ijo-teri-anchovies-and-green-chilies-fried-rice.html", note: "chili-shallot paste fried-rice technique and egg topping" },
  ],
};
