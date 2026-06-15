import type { Recipe } from "../types";

export const cicoria: Recipe = {
  slug: "cicoria",
  title: "Cicoria all'Aglio e Peperoncino",
  cuisine: "italian",
  blurb:
    "Bitter chicory blanched then sautéed hard with garlic and chili — the contadino's everyday green, the template for any bitter leaf.",
  servings: 4,
  perServing: { calories: 160, protein: 5 },
  estCostPerServing: 0.85,
  roles: ["side", "lunch"],
  ingredients: [
    {
      item: "chicory or dandelion greens, trimmed",
      qty: "2 lb",
      cost: 2.5,
    },
    {
      item: "garlic cloves, sliced",
      qty: "4",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "dried chili",
      qty: "1",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt; lemon to finish",
      qty: "4 tbsp oil, 1/2 lemon",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Blanch the chicory in well-salted boiling water until just tender — this tames the harshest bitterness. Drain and squeeze (save the green water for soup).",
    "Warm the olive oil with the sliced garlic and crumbled chili until fragrant but not browned.",
    "Add the greens and sauté hard, tossing, until they're coated and any water has cooked off.",
    "Season, finish with a squeeze of lemon and raw oil. Good warm or at room temperature, on bread or with beans.",
  ],
  modernMove:
    "Blanch first, then hit the greens with bloomed garlic-chili oil — you keep the pleasant bitterness while losing the aggressive edge, the trick to making bitter greens crave-able.",
  notes: "Blanching water doubles as a base for greens-and-bean soup.",
  tags: ["garden", "greens", "bitter", "garlic", "side", "vegetable"],
};
