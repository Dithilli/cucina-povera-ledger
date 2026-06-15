import type { Recipe } from "../types";

export const soySauceChickenCt: Recipe = {
  slug: "soy-sauce-chicken-ct",
  title: "Soy Sauce Chicken (See Yao Gai)",
  cuisine: "cantonese",
  blurb:
    "A whole chicken gently poached — never boiled — in a fragrant master stock of light and dark soy, rock sugar, ginger, and warm spice until the skin turns glassy mahogany and the meat stays silky and jelly-tender at the bone.",
  servings: 5,
  perServing: { calories: 380, protein: 30 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken", qty: "3 1/2 lb", cost: 7.0 },
    { item: "light soy sauce", qty: "1 cup", cost: 0.8, spansWeeks: true },
    { item: "dark soy sauce", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "rock sugar", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "ginger, sliced", qty: "4 thick slices", cost: 0.2, spansWeeks: true },
    { item: "scallions, knotted", qty: "3", cost: 0.3 },
    { item: "star anise", qty: "2 pods", cost: 0.1, spansWeeks: true },
    { item: "cinnamon stick", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "dried tangerine peel", qty: "1 piece", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "6 cups" },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Build the master stock: combine the water, both soys, rock sugar, Shaoxing, ginger, scallions, star anise, cinnamon, and tangerine peel in a deep pot just wide enough to hold the bird. Simmer 15 minutes so the spices bloom.",
    "Lower the whole chicken in breast-side down. Bring barely back to a simmer, then keep the heat so low the surface only shivers — a true poach. Boiling toughens the skin and meat.",
    "Poach 15 minutes, lift the bird to drain its cavity back into the pot, flip it breast-up, and poach 15 minutes more. Then cover, cut the heat, and let it steep in the hot stock 20–25 minutes to finish through the gentle, residual heat.",
    "Test the thigh joint — juices should run clear. Lift out and rest 10 minutes; brush the skin with a ladle of stock for shine, then chop through the bone into bite-size pieces, Cantonese style.",
    "Serve over rice with a little reduced stock spooned over, alongside a saucer of ginger-scallion oil. Strain, boil, and chill the remaining stock — it becomes your lou soi for the next braise.",
  ],
  modernMove:
    "The 'intermittent poach' — barely simmering, then steeping off the heat — lets the skin drink in liquid and set to a jelly-tender, glassy finish that hard boiling can never give.",
  notes:
    "Don't throw out the poaching liquid: strained, boiled, and frozen, it is the start of a master stock (lou soi) you top up and reuse for years. The same stock will braise pork, eggs, and tofu.",
  zeroWasteHero: false,
  tags: ["chicken", "poached", "master-stock", "lou-soi", "soy", "cantonese"],
  sources: [
    {
      title: "Bill — The Woks of Life",
      url: "https://thewoksoflife.com/cantonese-soy-sauce-chicken-si-you-ji/",
      note: "Master-stock poach with light/dark soy + rock sugar; gentle steeping for glassy skin",
    },
  ],
};
