import type { Recipe } from "../types";

export const tadkaBase: Recipe = {
  slug: "tadka-base",
  title: "Tadka / Thaalippu",
  cuisine: "south-indian",
  blurb:
    "The tempering that finishes nearly everything — a spoon of hot oil or ghee in which mustard seeds pop, urad dal goes gold, curry leaves crackle and a dried chile darkens over a pinch of hing, then poured sizzling over dal, rasam, chutney or a bowl of greens. The sound of a South Indian kitchen.",
  servings: 8,
  perServing: { calories: 45, protein: 1 },
  estCostPerServing: 0.1,
  roles: ["base"],
  ingredients: [
    { item: "coconut or gingelly (sesame) oil, or ghee", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "urad dal (split black gram)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "dried red chiles, broken", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "1 pinch", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Heat the oil or ghee in a small tempering pan until it shimmers but doesn't smoke — too cool and nothing blooms; too hot and the spices burn the instant they hit.",
    "Add the mustard seeds first and wait for them to crackle and pop — this is the cue everything else follows.",
    "Now add the urad dal and fry just until it turns reddish-gold, then the broken dried chiles, the curry leaves (stand back — they spit), and finally a pinch of hing, which blooms in the residual heat.",
    "Use it instantly: pour the whole sizzling lot over a pot of dal, a bowl of rasam, the coconut chutney, or a plate of stir-fried greens, and stir through.",
  ],
  modernMove:
    "Order and timing are the entire craft. Spices go in by how long they need — mustard seeds (longest), then urad dal, then curry leaves and chile, then hing off the direct heat — so each blooms without scorching. Done at the very end and poured over, the aroma lands on top of the dish instead of cooking out of it.",
  notes:
    "The cheapest, highest-leverage move in the cuisine: a spoon of oil and a few pantry seeds transform plain lentils, rice or greens. This same thaalippu is the base step under sambar, rasam, kootu and most vegetable dishes.",
  zeroWasteHero: false,
  tags: ["base", "tadka", "thaalippu", "tempering", "mustard", "curry-leaf", "south-indian"],
  sources: [
    {
      title: "Subhasini — Home Cooking Show",
      url: "https://homecookingshow.in/tempering-in-indian-cooking-tadka-thalippu/",
      note: "The South Indian thaalippu sequence — mustard seeds first, then urad dal, curry leaves, chile and hing in hot oil.",
    },
  ],
};
