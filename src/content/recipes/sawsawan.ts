import type { Recipe } from "../types";

export const sawsawan: Recipe = {
  slug: "sawsawan",
  title: "Sawsawan (Vinegar-Soy-Calamansi Dip)",
  cuisine: "filipino",
  blurb:
    "The dipping sauce that finishes the meal at the table — vinegar, soy, and calamansi cut with raw garlic and chili. Filipino cooking seasons lightly in the pot on purpose; the diner builds the last layer of sour-salty-spicy with sawsawan.",
  servings: 6,
  perServing: { calories: 15, protein: 1 },
  estCostPerServing: 0.1,
  roles: ["side", "base"],
  ingredients: [
    { item: "cane or coconut vinegar (sukang puti)", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "soy sauce (toyo)", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "calamansi (or 1/2 lime), juiced", qty: "4", cost: 0.3 },
    { item: "garlic cloves, crushed", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "bird's-eye chili (siling labuyo), sliced", qty: "2", cost: 0.15, spansWeeks: true },
    { item: "small shallot or red onion, minced (optional)", qty: "1", cost: 0.15 },
    { item: "black pepper", qty: "to taste" },
  ],
  method: [
    "Stir the vinegar, soy, and calamansi juice together in a small bowl. The ratio is to taste — toyo-suka leans salty-sour, a squeeze of calamansi brightens it; adjust until it makes you wince pleasantly.",
    "Crush the garlic with the flat of a knife and drop it in raw with the sliced chili and shallot. Raw is the point — this is the sharp, uncooked counterpoint to rich braised ulam.",
    "Crack in black pepper and let it sit 10 minutes so the garlic and chili steep into the liquid.",
    "Set on the table in a little saucer. Dip grilled fish, fried meat, lumpia, or boiled vegetables — or spoon it straight over rice.",
  ],
  modernMove:
    "Under-seasoning the cooked dish and pushing the final salt-sour-heat onto the diner's spoon is the Filipino table's secret: one braise plus a saucer of sawsawan lets every eater tune the plate to their own mouth.",
  notes:
    "Endlessly variable: toyomansi (soy + calamansi) for fried fish, spiced vinegar (sukang sawsawan) for lechon and chicharrón, or pure cane vinegar with garlic for grilled meat. Make a jar of garlic-chili vinegar and it keeps for weeks.",
  tags: ["side", "base", "condiment", "vinegar", "calamansi", "dipping-sauce", "no-cook", "vegan"],
};
