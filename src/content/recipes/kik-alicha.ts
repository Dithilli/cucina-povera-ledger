import type { Recipe } from "../types";

export const kikAlicha: Recipe = {
  slug: "kik-alicha",
  title: "Kik Alicha",
  cuisine: "ethiopian",
  blurb:
    "Sunny yellow split peas simmered soft with turmeric, garlic, and ginger — the soothing, mild counterweight to the fiery wots, and the gentlest dish on the whole fasting table.",
  servings: 4,
  perServing: { calories: 300, protein: 16 },
  estCostPerServing: 0.55,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "yellow split peas (kik)", qty: "1 1/2 cups", cost: 1.0 },
    { item: "white onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "garlic + ginger, minced", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "turmeric", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "green chile, slivered", qty: "1", cost: 0.2 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the split peas well. Simmer them in plenty of water until completely soft, 40–50 minutes (or use a pressure cooker for ~15). Drain, reserving some liquid.",
    "Meanwhile, soften the onion in the oil over medium-low heat until translucent — no browning. Add garlic, ginger, and turmeric and cook a minute.",
    "Fold the cooked peas into the aromatics with a little of their cooking liquid. Mash some of them against the pan so the dish is part-creamy, part-whole.",
    "Stir in the slivered green chile, simmer a few minutes, and salt to taste. Serve over injera.",
  ],
  modernMove:
    "Keep it pale and gentle — no berbere, low heat, nothing browned. Mash a portion of the peas so the alicha self-thickens into a creamy base studded with whole peas, the textural trick that makes it feel rich.",
  notes:
    "Yellow split peas bring about 16g protein per cooked cup. Kik alicha is the classic 'rest' dish next to a spicy misir or shiro on the platter.",
  tags: ["alicha", "split-peas", "kik", "dinner", "mild"],
};
