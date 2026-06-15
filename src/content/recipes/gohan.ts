import type { Recipe } from "../types";

export const gohan: Recipe = {
  slug: "gohan",
  title: "Gohan (Steamed Short-Grain Rice)",
  cuisine: "japanese",
  blurb:
    "Plain steamed Japanese short-grain rice, glossy and faintly sticky, each grain holding its shape while clinging gently to its neighbors. The word also simply means 'meal' — rice is the meal, and everything else on the table is okazu, the thing you eat with the rice. This is the quiet center of every washoku dinner.",
  servings: 4,
  perServing: { calories: 250, protein: 5 },
  estCostPerServing: 0.2,
  roles: ["base", "side"],
  ingredients: [
    { item: "Japanese short-grain rice (uruchimai)", qty: "2 cups (rice-cooker cups, ~360 ml)", cost: 0.7 },
    { item: "water", qty: "scant 2 1/4 cups" },
  ],
  method: [
    "Put the rice in a bowl and add cold water. Swish quickly with your hand and pour off the cloudy water at once — the first water is the dustiest and the dry grains drink it fastest, so don't let it sit. Repeat the rinse three or four times, swirling gently, until the water runs nearly clear. Rinsing washes off surface starch so the cooked grains are distinct and glossy rather than gummy.",
    "Drain the rice well and let it rest in the sieve 15 to 30 minutes. This even hydration is the secret to grains that cook through to the center without a chalky core.",
    "Combine rice and the measured water in a heavy pot with a tight lid (or use a rice cooker). Soak another 20 to 30 minutes if you have time. Bring to a boil over medium-high heat.",
    "Once boiling, drop to the lowest simmer and cover tightly. Cook undisturbed 12 to 13 minutes — no lifting the lid, which lets out the steam that does the work.",
    "Pull off the heat and let it stand, still covered, 10 minutes to finish steaming. Then fold gently with a wet rice paddle, lifting and turning rather than stirring, to release steam and fluff without crushing the grains.",
  ],
  modernMove:
    "The two rests — soaking the drained rice before cooking and steaming off the heat after — are what separate proper gohan from sad, half-cooked rice. No extra ingredient does as much as simply waiting twice.",
  notes:
    "Day-old rice is never wasted: it becomes ochazuke (rice in hot tea or dashi), fried rice, or onigiri. The faint crust that forms at the bottom of a pot is okoge, prized for its toasty flavor — scrape it up rather than soaking it away. Wash rice water can be saved to blanch bitter greens or daikon, a classic mottainai trick.",
  tags: ["base", "side", "rice", "washoku", "staple"],
};
