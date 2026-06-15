import type { Recipe } from "../types";

export const kanin: Recipe = {
  slug: "kanin",
  title: "Kanin",
  cuisine: "filipino",
  blurb:
    "Plain steamed rice — the unspoken center of every Filipino meal. No plate is a meal without it; the ulam (the saucy meat or vegetable 'with') is built salty and bold precisely so a little goes far over a mound of kanin.",
  servings: 6,
  perServing: { calories: 205, protein: 4 },
  estCostPerServing: 0.13,
  roles: ["base", "side"],
  ingredients: [
    { item: "long-grain white rice (jasmine or sinandomeng)", qty: "2 cups", cost: 0.75 },
    { item: "water", qty: "2 1/2 cups" },
  ],
  method: [
    "Rinse the rice in the pot, swirling and pouring off the cloudy water two or three times until it runs nearly clear. Washing off the loose surface starch keeps the grains from steaming up into one gummy mass.",
    "Drain and add the water. The Filipino gauge needs no measuring cup: pour water until it sits about one knuckle's depth above the leveled rice. Bring to a boil uncovered.",
    "When craters break the surface and most of the water has boiled off, stir once, drop to the lowest heat, and clamp on a tight lid. Steam undisturbed 12 to 15 minutes.",
    "Pull off the heat and rest, still covered, 10 minutes so the steam evens out and firms the grains. Fluff from the bottom up and serve hot under any ulam.",
  ],
  modernMove:
    "The covered off-heat rest is the whole trick — those 10 minutes let trapped steam finish the cores of the grains so each one stands separate and can soak up the sauce of the ulam.",
  notes:
    "Cook extra on purpose: cold, dried-out day-old kanin is the only correct base for sinangag (garlic fried rice). Spread leftovers thin and chill them fast so they dry out a touch.",
  tags: ["base", "side", "rice", "staple", "quick"],
};
