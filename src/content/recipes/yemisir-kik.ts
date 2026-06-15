import type { Recipe } from "../types";

export const yemisirKik: Recipe = {
  slug: "yemisir-kik",
  title: "Ye'misir Kik (Lentils & Split Peas)",
  cuisine: "ethiopian",
  blurb:
    "Red lentils and yellow split peas cooked together into one soft, turmeric-gold pot — two cheap legumes pooled for a higher-protein, deeply satisfying everyday stew.",
  servings: 4,
  perServing: { calories: 320, protein: 18 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "split red lentils", qty: "3/4 cup", cost: 0.6 },
    { item: "yellow split peas", qty: "3/4 cup", cost: 0.5 },
    { item: "onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "garlic + ginger", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "turmeric (and a little berbere if you want heat)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the split peas alone first for ~25 minutes (they take longer), then add the rinsed red lentils and cook until both are completely soft, 20 more minutes.",
    "Separately soften the onion in oil, add garlic, ginger, and turmeric (and berbere if using), and cook a minute.",
    "Fold the cooked legumes into the aromatics with some cooking liquid, mashing lightly so the pot turns creamy.",
    "Simmer a few minutes to marry, salt to taste, and serve over injera.",
  ],
  modernMove:
    "Combining a fast legume (red lentils) with a slow one (split peas) gives both a higher protein hit and a layered texture — start the peas early so the two finish together rather than one turning to mush.",
  notes:
    "Pooling two legumes is a classic frugal move: more protein per plate, more body, and it stretches whichever bag is running low.",
  tags: ["legumes", "lentils", "split-peas", "dinner", "protein"],
  sources: [
    { title: "196 flavors — Kik Alicha", url: "https://www.196flavors.com/kik-alicha/", note: "The yellow split pea component cooked soft with turmeric." },
    { title: "Kimberly Killebrew — The Daring Gourmet (Misir Wat)", url: "https://www.daringgourmet.com/misir-wat-ethiopian-spiced-red-lentils/", note: "The red-lentil component pooled with the split peas in this combined pot." },
  ],
};
