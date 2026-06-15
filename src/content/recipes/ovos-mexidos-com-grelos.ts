import type { Recipe } from "../types";

export const ovosMexidosComGrelos: Recipe = {
  slug: "ovos-mexidos-com-grelos",
  title: "Ovos Mexidos com Grelos",
  cuisine: "portuguese",
  blurb:
    "Soft scrambled eggs folded through garlicky blanched greens — turnip tops or kale wilted in olive oil, then bound creamy with egg. A five-minute supper from the cheapest things in the house.",
  servings: 2,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    {
      item: "grelos (turnip tops), kale, or any sturdy greens",
      qty: "1 large bunch",
      cost: 1.0,
    },
    { item: "eggs", qty: "4", cost: 0.8 },
    {
      item: "garlic cloves, sliced",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "olive oil",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "stale broa or country bread, to serve",
      qty: "2 slices",
      cost: 0.4,
    },
    { item: "coarse salt, black pepper, pinch of chili", qty: "to taste" },
  ],
  method: [
    "Blanch the greens in well-salted boiling water until just tender, 2–3 minutes, then drain and chop roughly. Keep a little of the green cooking water.",
    "Warm the olive oil in a wide pan and fry the sliced garlic gently until golden and fragrant — do not burn it.",
    "Add the chopped greens with a splash of their cooking water and toss in the garlic oil for a minute so they drink it up.",
    "Beat the eggs with salt and pepper, pour into the pan, and stir slowly over low heat until just set but still glossy and soft — pull them off while a little wet, they keep cooking.",
    "Pile onto toasted broa rubbed with garlic, finish with a thread of olive oil, black pepper, and a pinch of chili.",
  ],
  modernMove:
    "Folding the eggs through the greens off a low heat and stopping while still glossy keeps them silky rather than rubbery — restaurant scramble from four eggs and a bunch of greens.",
  notes:
    "The thriftiest of dinners — built entirely from eggs, a bunch of greens, garlic, and yesterday's bread. The blanching water goes into the next soup.",
  tags: ["eggs", "greens", "grelos", "garlic", "quick", "broa"],
};
