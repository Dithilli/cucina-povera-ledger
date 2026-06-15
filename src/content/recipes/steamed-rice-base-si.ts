import type { Recipe } from "../types";

export const steamedRiceBaseSi: Recipe = {
  slug: "steamed-rice-base-si",
  title: "Steamed Rice (Sadam)",
  cuisine: "south-indian",
  blurb:
    "The soft white mound at the center of every South Indian plate — short or medium rice boiled generously and drained, so the grains stay separate and ready to be mixed by hand with dal, sambar, rasam and a spoon of ghee. The rice is the meal; everything else is what you eat with it.",
  servings: 4,
  perServing: { calories: 205, protein: 4 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "raw rice (sona masoori or short-grain)", qty: "1 1/2 cups", cost: 0.55 },
    { item: "water", qty: "plenty, for boiling" },
    { item: "salt (optional)", qty: "pinch", cost: 0.02 },
  ],
  method: [
    "Rinse the rice in two or three changes of water, swirling and pouring off the cloudy starch until the water runs nearly clear.",
    "The everyday home method is to boil it open like pasta: bring a large pot of water to a rolling boil, add the rinsed rice, and cook until the grains are soft but not mushy, about 10–12 minutes.",
    "Drain off the excess water through a sieve. (Don't throw that starchy water out — it's the kanji South Indian cooks save.) Cover the drained rice and let it stand a few minutes to steam-finish.",
    "Fluff gently and serve hot, building a plate around it: dal or sambar poured over, chutney to the side, a thread of ghee on top.",
  ],
  modernMove:
    "Draining cooked rice rather than absorbing all the water gives lighter, more separate grains and washes off excess starch — and it hands you a free byproduct, the warm starchy kanji that's drunk with salt or used to ferment the next batter.",
  notes:
    "The frugal heart of the cuisine: rice plus a pot of dal feeds a family for pennies a head. Yesterday's cold rice becomes curd rice, lemon rice or a tempered fried rice — it is never thrown away.",
  zeroWasteHero: false,
  tags: ["base", "rice", "sadam", "staple", "south-indian"],
  sources: [
    {
      title: "Swasthi — Swasthi's Recipes",
      url: "https://www.indianhealthyrecipes.com/how-to-cook-rice/",
      note: "The open-pot, boil-and-drain home method that keeps the grains separate and saves the starchy kanji.",
    },
  ],
};
