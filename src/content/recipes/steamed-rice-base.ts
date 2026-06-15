import type { Recipe } from "../types";

export const steamedRiceBase: Recipe = {
  slug: "steamed-rice-base",
  title: "Steamed Jasmine Rice",
  cuisine: "cantonese",
  blurb:
    "The fragrant white bowl beneath everything — long-grain jasmine rinsed clear and steamed until each grain is separate, soft, and faintly perfumed. In a Cantonese home the rice is the meal; the dishes are sung, the things you eat with the rice. This is the constant the whole table is built on.",
  servings: 4,
  perServing: { calories: 205, protein: 4 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "jasmine rice", qty: "2 cups", cost: 0.7 },
    { item: "water", qty: "about 2 1/4 cups" },
  ],
  method: [
    "Put the rice in the pot and rinse with cold water, swirling with your hand and pouring off the cloudy water two or three times until it runs nearly clear. This washes off surface starch so the grains steam up distinct rather than gluey.",
    "Drain well, then add the measured water. A common gauge: the water should sit about one knuckle (a centimeter or so) above the surface of the leveled rice.",
    "Bring to a boil over medium-high heat, then drop to the lowest simmer and cover tightly. Cook undisturbed about 13 to 15 minutes, until the water is absorbed and steam-craters dimple the surface — don't lift the lid, which lets out the steam that does the cooking.",
    "Pull off the heat and let it stand, still covered, 10 minutes to finish steaming. Fluff gently with a paddle or chopsticks, lifting rather than stirring, before serving.",
  ],
  modernMove:
    "The off-heat rest is the whole secret: the residual steam finishes the centers of the grains evenly, turning merely boiled rice into proper steamed rice with no chalky core.",
  notes:
    "Day-old rice is never wasted — dried out in the fridge overnight it is exactly what you want for fried rice, and a thin scrape of rice cooked into a pot of water becomes congee. Leftover rinsing water can blanch bitter greens.",
  tags: ["base", "rice", "jasmine", "cantonese", "staple"],
  sources: [
    {
      title: "The Woks of Life — How to Cook Rice (Jasmine Rice)",
      url: "https://thewoksoflife.com/how-to-cook-rice/",
      note: "Rinsing, the knuckle water gauge, and the covered simmer plus off-heat rest for separate grains.",
    },
  ],
};
