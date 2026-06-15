import type { Recipe } from "../types";

export const watercressPorkSoup: Recipe = {
  slug: "watercress-pork-soup",
  title: "Watercress & Pork Soup",
  cuisine: "cantonese",
  blurb:
    "The classic clearing soup — sai yeung choi tong — where a great bundle of peppery watercress melts down over pork bones and a few sweet dates into a clean, faintly bittersweet broth Cantonese families drink to cut heat and dampness.",
  servings: 6,
  perServing: { calories: 230, protein: 16 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "pork ribs or neck bones", qty: "1 1/2 lb", cost: 4.0 },
    { item: "watercress", qty: "1 1/2 lb (2 large bunches)", cost: 1.8 },
    { item: "dried honey dates (mat jou)", qty: "2", cost: 0.3, spansWeeks: true },
    { item: "dried sweet and bitter apricot kernels (nam bak hung), optional", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "ginger, smashed", qty: "3 slices", cost: 0.15, spansWeeks: true },
    { item: "dried scallops or a few goji berries, optional", qty: "2", cost: 0.5, spansWeeks: true },
    { item: "water", qty: "10 cups" },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Wash the watercress very well in several changes of water — it grows in grit. Trim only the toughest stem ends; the soup wants the whole leafy bundle.",
    "Blanch the pork bones in boiling water 2–3 minutes, drain, and rinse clean for a clear broth.",
    "Put the bones, ginger, honey dates, apricot kernels, and water in a clean pot. Bring to a boil, then immediately lower to a gentle, covered simmer.",
    "After 30 minutes, pile in the watercress — it wilts down to a fraction of its volume — and continue simmering low for 90 minutes total, until the greens are soft and the broth tastes round with a clean, faintly bitter edge balanced by the dates.",
    "Season lightly with salt at the end. Drink the broth and eat the tender greens and pork from the bowl alongside rice.",
  ],
  modernMove:
    "The pair of honey dates is the quiet move: their gentle sweetness rounds off watercress's natural bitterness so the finished soup tastes clean and balanced rather than green and sharp.",
  notes:
    "A Hakka and Cantonese staple, watercress soup is drunk as a leung tong — a 'cooling' soup believed to clear internal heat. Adding the watercress in two batches (half early, half late) gives both deep flavor and fresher color, if you like.",
  zeroWasteHero: false,
  tags: ["soup", "watercress", "pork-bone", "clearing-soup", "lou-fo-tong", "cantonese"],
  sources: [
    {
      title: "Judy — The Woks of Life",
      url: "https://thewoksoflife.com/chinese-watercress-soup-pork/",
      note: "Sai yeung choi tong: blanch bones, honey dates, long low simmer with watercress",
    },
  ],
};
