import type { Recipe } from "../types";

export const meduVada: Recipe = {
  slug: "medu-vada",
  title: "Medu Vada",
  cuisine: "south-indian",
  blurb:
    "Soaked urad dal ground to a fluffy white batter, whipped until it floats, shaped into doughnuts by hand and fried crisp — shatteringly golden outside, cloud-soft within, dunked into sambar and coconut chutney. The tiffin counter's proudest fritter.",
  servings: 4,
  perServing: { calories: 480, protein: 15 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "urad dal (split black gram, skinned)", qty: "1 cup", cost: 0.9 },
    { item: "green chiles, minced", qty: "2", cost: 0.1 },
    { item: "ginger, minced", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "black peppercorns, cracked; cumin", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "curry leaves, chopped; pinch of hing", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "salt; cilantro", qty: "to taste", cost: 0.15 },
    { item: "oil for deep-frying", qty: "for frying", cost: 0.8, spansWeeks: true },
  ],
  method: [
    "Soak the urad dal in plenty of water 4–6 hours. Drain well, then grind to a smooth, thick batter using as little water as possible — a stiff batter holds the doughnut shape; a watery one collapses.",
    "Whip the batter hard with your hand or a spoon for a few minutes until it lightens and turns fluffy. Test it: drop a pinch into a bowl of water — when it floats, it's aerated enough to fry up soft.",
    "Fold in the green chile, ginger, cracked pepper, cumin, curry leaves, hing, salt and cilantro. Heat oil to medium-hot.",
    "Wet your palm, take a lump of batter, pat it flat and poke a hole through the center with a wet thumb, then slide it gently into the oil. Fry a few at a time, turning, until deep golden and crisp on both sides.",
    "Drain and serve hot with sambar and coconut chutney — the vada is meant to be dunked, soaking up the broth while staying crisp at the edges.",
  ],
  modernMove:
    "The float test is non-negotiable: beating air into the urad batter until a pinch floats is what makes the vada rise into a light, spongy interior instead of frying up dense. Cold batter and minimal water keep that air locked in.",
  notes:
    "A dollar of urad dal yields a dozen vada; any batter left over thins down with a little water and rice flour into impromptu paniyaram or dosa. Strain and reuse the frying oil.",
  zeroWasteHero: false,
  tags: ["dinner", "tiffin", "vada", "urad-dal", "fried", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/medu-vada-recipe-medu-vada/",
      note: "Grinding urad dal to a stiff fluffy batter, the float test, and shaping doughnuts by wet hand before frying.",
    },
  ],
};
