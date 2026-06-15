import type { Recipe } from "../types";

export const congeeCt: Recipe = {
  slug: "congee-ct",
  title: "Cantonese Congee (Jook)",
  cuisine: "cantonese",
  blurb:
    "A cup of rice simmered slow and low until it collapses into a silky, pearl-grey porridge, seasoned with ginger and scallion and carrying just a little slivered pork or fish — the great Cantonese thrift, where a handful of grains feeds the whole table.",
  servings: 4,
  perServing: { calories: 360, protein: 16 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain or jasmine rice", qty: "1 cup", cost: 0.4 },
    { item: "water or light pork/chicken stock", qty: "9 cups", cost: 0.4, spansWeeks: true },
    { item: "pork loin or white fish, sliced paper-thin", qty: "6 oz", cost: 1.4 },
    { item: "ginger, half julienned, half minced", qty: "2-inch knob", cost: 0.2, spansWeeks: true },
    { item: "scallions, sliced", qty: "3", cost: 0.2 },
    { item: "white pepper, salt, sesame oil", qty: "to season", cost: 0.2, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "cilantro and fried shallots to finish", qty: "to serve", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Rinse the rice once or twice, swishing by hand and pouring off the cloudy water. Drain, then toss with a teaspoon of oil and a pinch of salt and let it sit 20 minutes — the oil and rest help the grains break down faster.",
    "Bring the water or stock to a hard boil, add the rice and the minced ginger, then drop to a low simmer. Cook uncovered, stirring every so often so nothing catches, for 60–90 minutes until the grains have burst into a thick, creamy porridge.",
    "Season the pot with light soy, white pepper, salt, and a few drops of sesame oil until it tastes like a savoury broth, not bland rice.",
    "Turn off the heat and stir the paper-thin pork or fish into the hot congee — the residual heat poaches it tender in a minute or two without toughening.",
    "Ladle into bowls and crown with julienned ginger, scallion, cilantro, and fried shallots.",
  ],
  modernMove:
    "Freezing the rinsed rice for a few hours before it hits the pot ruptures the grains, so a true silky jook comes together in well under an hour instead of two. Cooking the protein in residual heat off the boil keeps it silky rather than rubbery.",
  notes:
    "Jook is the Cantonese kitchen's safety net: it stretches a single cup of rice across the table and quietly absorbs yesterday's scraps — a leftover pork bone, the last of a fish, a handful of wilting greens. Keep it loose; it thickens as it sits, and a splash of hot stock loosens it again.",
  zeroWasteHero: true,
  tags: ["congee", "rice", "cantonese", "jook", "porridge", "zero-waste"],
  sources: [
    {
      title: "The Woks of Life — 20-Minute Congee (皮蛋瘦肉粥)",
      url: "https://thewoksoflife.com/20-minute-congee-recipe/",
      note: "Rinsing-and-resting the rice and the freezer shortcut to break grains down fast; poaching thin pork in residual heat.",
    },
  ],
};
