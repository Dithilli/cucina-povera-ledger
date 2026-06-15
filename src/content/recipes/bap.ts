import type { Recipe } from "../types";

export const bap: Recipe = {
  slug: "bap",
  title: "Bap (Steamed Short-Grain Rice)",
  cuisine: "korean",
  blurb:
    "The white bowl at the center of every Korean table — short-grain rice rinsed clean, soaked, and steamed to a glossy, faintly sticky cushion that every jjigae, banchan, and bite of grilled meat is built around. Bap means rice, and in Korean it also means the meal itself; to ask if someone has eaten is to ask if they've had bap.",
  servings: 4,
  perServing: { calories: 240, protein: 4 },
  estCostPerServing: 0.18,
  roles: ["base", "side"],
  ingredients: [
    { item: "short-grain white rice (or sushi rice)", qty: "1 1/2 cups", cost: 0.65 },
    { item: "water", qty: "about 1 3/4 cups" },
  ],
  method: [
    "Put the rice in a heavy pot and rinse under cold water, swirling with your hand and pouring off the cloudy water, three or four times until it runs nearly clear. This washes off loose surface starch so the grains steam separate and glossy instead of gluey.",
    "Cover with fresh water and let the rice soak 30 minutes — this hydrates the grains so they cook evenly through to a tender center rather than chalky inside, soft outside.",
    "Drain, then add water to the level of about 1 inch above the rice (roughly a 1-to-1.2 ratio by volume). Press your fingertip to the surface; the water should reach the first knuckle.",
    "Cover, bring to a hard boil over high heat, then immediately drop to low and steam, lid on and undisturbed, 12 to 15 minutes until the water is absorbed and small craters appear on the surface.",
    "Kill the heat and let it sit, still covered, 10 minutes — this rest is essential, letting the grains finish on residual steam and firm up. Fluff gently from the bottom with a paddle or fork before serving.",
  ],
  modernMove:
    "Rinsing to near-clear, a real soak, and a covered off-heat rest are the three unglamorous steps that turn cheap rice into restaurant-quality bap — no rice cooker required, just a heavy lidded pot and patience.",
  notes:
    "Scale freely; the knuckle trick works at any volume in a wide pot. The toasty browned layer stuck to the bottom (nurungji) is a prize, not a mistake — pour hot water over it for an instant porridge. Leftover cold bap is the only correct rice for fried rice and the bones of bokkeumbap.",
  zeroWasteHero: false,
  tags: ["base", "side", "rice", "staple", "vegan", "gluten-free"],
  sources: [
    {
      title: "Maangchi — Rice, scorched rice, & scorched rice tea (Bap, nurungji, & sungnyung)",
      url: "https://www.maangchi.com/recipe/rice",
      note: "Stovetop short-grain rice: rinse to clear, soak, hard boil then low steam, off-heat rest",
    },
  ],
};
