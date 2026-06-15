import type { Recipe } from "../types";

export const chawanmushi: Recipe = {
  slug: "chawanmushi",
  title: "Chawanmushi",
  cuisine: "japanese",
  blurb:
    "Savory steamed egg custard — dashi and beaten egg set just barely firm over a few hidden morsels of mushroom, chicken, and scallion, eaten with a spoon.",
  servings: 4,
  perServing: { calories: 130, protein: 11 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggs", qty: "3", cost: 0.75 },
    { item: "dashi, warm not hot", qty: "2 cups", cost: 0.4, spansWeeks: true },
    { item: "soy sauce", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "mirin", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp" },
    { item: "chicken thigh, diced small (or skip for vegetarian)", qty: "3 oz", cost: 0.5 },
    { item: "fresh shiitake, sliced", qty: "2", cost: 0.4 },
    { item: "scallion or mitsuba", qty: "1", cost: 0.1 },
  ],
  method: [
    "Beat the eggs smooth, then stir in the warm dashi, soy, mirin, and salt. The classic ratio is roughly three parts liquid to one part egg — too much egg sets rubbery. Strain through a sieve for a glassy custard.",
    "Divide the chicken, shiitake, and scallion among four cups or small bowls, then pour the strained egg over, filling about three-quarters.",
    "Cover each cup with foil and set in a steamer over gently simmering — not boiling — water. Fierce heat causes bubbles and a pitted, weeping custard.",
    "Steam on low 12–15 minutes, until a skewer comes out clean and the surface trembles like soft tofu. Serve warm, with a spoon.",
  ],
  modernMove:
    "Keeping the steam gentle and the dashi-to-egg ratio high is the whole trick — it sets the custard to a barely-there silk instead of a sponge, the texture that defines the dish.",
  tags: ["eggs", "custard", "steamed", "dashi", "mushrooms"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Chawanmushi (Savory Steamed Egg Custard)",
      url: "https://www.justonecookbook.com/chawanmushi-savory-steamed-egg-custard/",
      note: "Dashi-to-egg ratio, straining, and gentle low steam for a silky set.",
    },
  ],
};
