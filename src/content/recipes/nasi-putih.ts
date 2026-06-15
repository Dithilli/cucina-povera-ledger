import type { Recipe } from "../types";

export const nasiPutih: Recipe = {
  slug: "nasi-putih",
  title: "Nasi Putih",
  cuisine: "indonesian",
  blurb:
    "Plain steamed white rice — the still center of every Indonesian meal. The plate isn't a plate of food without it; everything else is lauk, the salty-spicy 'with' that makes a little rice go far.",
  servings: 6,
  perServing: { calories: 205, protein: 4 },
  estCostPerServing: 0.14,
  roles: ["base", "side"],
  ingredients: [
    { item: "long-grain white rice", qty: "2 cups", cost: 0.8 },
    { item: "water", qty: "2 1/2 cups" },
    { item: "salt (optional)", qty: "pinch" },
  ],
  method: [
    "Rinse the rice in a bowl, swirling and pouring off the cloudy water two or three times until it runs nearly clear. This washes off loose surface starch so the grains steam up separate, not gummy.",
    "Drain well and combine with the water in a heavy pot with a tight lid. The classic gauge is water to a knuckle's depth above the rice; bring to a boil uncovered.",
    "When craters form and most of the surface water has boiled off, stir once, drop to the lowest heat, and clamp the lid on. Steam undisturbed 12 to 15 minutes — this is the 'aron then kukus' logic of a rice cooker done in one pot.",
    "Pull off the heat and rest, still covered, 10 minutes. The trapped steam finishes the cores of the grains and firms them.",
    "Fluff from the bottom up with a fork or flat paddle and serve hot, mounded, with sambal and a vegetable or tempe lauk alongside.",
  ],
  modernMove:
    "The off-heat rest is what separates fluffy nasi from a sticky mass — those 10 covered minutes let the moisture even out so every grain stands apart and can soak up sambal and sauce.",
  notes:
    "Day-old chilled nasi putih is the only correct base for nasi goreng — fresh rice steams and clumps in the wok. Spread leftovers thin and chill fast so they dry out a touch.",
  tags: ["base", "side", "rice", "staple", "quick"],
  sources: [
    { title: "Wikipedia — Nasi campur", url: "https://en.wikipedia.org/wiki/Nasi_campur", note: "nasi putih as the plain-rice base of a composed Indonesian meal with lauk" },
  ],
};
