import type { Recipe } from "../types";

export const cheungFun: Recipe = {
  slug: "cheung-fun",
  title: "Cheung Fun",
  cuisine: "cantonese",
  blurb:
    "Thin sheets of rice batter steamed until just set, then rolled into slippery, silken ropes and bathed in a warm sweet-savoury soy — the plainest, most beloved dim-sum roll, made from little more than rice flour, water and steam.",
  servings: 4,
  perServing: { calories: 330, protein: 12 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "rice flour", qty: "1 cup", cost: 0.4 },
    { item: "tapioca starch", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cornstarch or wheat starch", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "3 cups", cost: 0.0, spansWeeks: true },
    { item: "neutral oil for the pan", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "eggs, beaten (filling, optional)", qty: "3", cost: 0.8 },
    { item: "dried shrimp or scallion (filling, optional)", qty: "small handful", cost: 0.4, spansWeeks: true },
    { item: "dark soy, light soy, sugar, sesame oil (sweet soy)", qty: "for sauce", cost: 0.3, spansWeeks: true },
    { item: "toasted sesame seeds and scallion to finish", qty: "to serve", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Whisk the rice flour, tapioca starch, cornstarch, salt, and water into a thin, lump-free batter and let it rest 20 minutes; stir before each use as the starch settles.",
    "Make the sauce: gently warm dark soy, light soy, sugar, sesame oil, and a splash of water until the sugar dissolves into a glossy sweet-savoury soy.",
    "Set up a steamer with an oiled flat tray or pan. Ladle in a thin layer of batter, scatter over a little beaten egg or dried shrimp and scallion, cover, and steam 4–5 minutes until the sheet is set and bubbly.",
    "Run an oiled scraper under one edge and roll the sheet up into a loose rope; lift onto a plate and cut into pieces. Re-oil the tray and repeat with the rest of the batter.",
    "Pour the warm sweet soy generously over the rolls and finish with toasted sesame seeds and scallion.",
  ],
  modernMove:
    "Resting the batter and re-stirring before every ladle keeps the starch suspended, so each sheet steams up silky-smooth rather than gritty; a well-oiled tray and a steady scraper are what let you roll the delicate sheet without tearing it.",
  notes:
    "Cheung fun is thrift in its purest form — pennies of rice flour and water turned into a tender, satisfying dish by steam alone. Plain rolls in sweet soy are a complete light dinner; fold in egg, scallion, or a few dried shrimp to make it heartier without spending much.",
  zeroWasteHero: false,
  tags: ["rice-noodles", "cheung-fun", "cantonese", "dim-sum", "steamed", "vegetarian"],
  sources: [
    {
      title: "Red House Spice — Cheung Fun, Steamed Rice Noodle Rolls (肠粉)",
      url: "https://redhousespice.com/cheung-fun/",
      note: "Rice-flour-and-starch batter rested and stirred before steaming, then rolled off an oiled tray and dressed in warm sweet soy.",
    },
  ],
};
