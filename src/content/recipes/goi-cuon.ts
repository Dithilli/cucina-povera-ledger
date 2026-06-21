import type { Recipe } from "../types";

export const goiCuon: Recipe = {
  slug: "goi-cuon",
  title: "Gỏi Cuốn",
  cuisine: "vietnamese",
  blurb:
    "Fresh summer rolls — rice paper wrapped around vermicelli, a forest of herbs, and a little poached shrimp and pork, served with a peanut-hoisin dip. A dinner engineered to make a few ounces of protein feed a table.",
  servings: 4,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "small shrimp, peeled", qty: "8 oz", cost: 3.0 },
    { item: "pork belly or shoulder, in one piece", qty: "6 oz", cost: 1.6 },
    { item: "rice paper rounds (bánh tráng)", qty: "12–16", cost: 0.8, spansWeeks: true },
    { item: "dried rice vermicelli (bún)", qty: "5 oz", cost: 0.6, spansWeeks: true },
    { item: "leaf lettuce", qty: "1 head", cost: 0.9 },
    { item: "mixed herbs — mint, cilantro, Thai basil, perilla", qty: "2 big handfuls", cost: 1.2 },
    { item: "bean sprouts", qty: "1 cup", cost: 0.3 },
    { item: "garlic chives or scallion (optional)", qty: "a few", cost: 0.2 },
    { item: "peanut butter + hoisin (for the dip)", qty: "2 tbsp each", cost: 0.6, spansWeeks: true },
    { item: "fish sauce, sugar, lime, chili (for nước chấm)", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "roasted peanuts, crushed", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Simmer the pork in salted water until just cooked through, ~15 minutes; in the same water poach the shrimp 2 minutes until pink. Cool both, then slice the pork thin and split the shrimp lengthwise so they show through the wrapper.",
    "Soak the vermicelli in hot water until tender, drain well, and cool. Wash and dry the lettuce and herbs.",
    "Dip one rice paper in warm water for a few seconds until just pliable and lay it on a damp board. Near the bottom edge lay lettuce, a pinch of noodles, sprouts, and a generous tangle of herbs.",
    "Roll up snugly from the bottom; halfway, fold in the sides, lay two shrimp halves and a couple of pork slices (cut-side down so they show) along the seam, and finish rolling tight.",
    "Whisk the peanut butter and hoisin with a splash of water and crushed peanuts for one dip; make a quick nước chấm of fish sauce, sugar, lime, water, and chili for the other. Serve the rolls whole or halved with both.",
  ],
  modernMove:
    "The roll is mostly herbs and noodles — the shrimp and pork are seasoning, not the meal. Soak the rice paper only until barely flexible; it keeps softening as you work, and an over-soaked wrapper tears.",
  notes:
    "No cooking once the rolls are filled — this is assembly, ideal for a hot night. Any leftover poached pork and shrimp go into the next day's bún or fried rice.",
  tags: ["fresh", "rolls", "herbs", "shrimp", "pork", "no-cook", "rice-paper"],
  sources: [
    {
      title: "RunAwayRice — Fresh Spring Rolls with Pork and Shrimp (Goi Cuon)",
      url: "https://runawayrice.com/appetizers/so-simple-spring-rolls/",
      note: "Poaching pork and shrimp, soaking the rice paper, and the rolling method",
    },
    {
      title: "Wikipedia — Gỏi cuốn",
      url: "https://en.wikipedia.org/wiki/G%E1%BB%8Fi_cu%E1%BB%91n",
      note: "Background: fresh (unfried) rolls of noodles, herbs, shrimp and pork with dip",
    },
  ],
};
