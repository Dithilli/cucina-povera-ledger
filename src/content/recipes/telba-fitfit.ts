import type { Recipe } from "../types";

export const telbaFitfit: Recipe = {
  slug: "telba-fitfit",
  title: "Telba Fitfit",
  cuisine: "ethiopian",
  blurb:
    "Day-old injera folded into a ground-flaxseed (telba) sauce — a fasting-day protein-and-fat boost from a spoonful of toasted seeds, and a clever second life for stale bread.",
  servings: 2,
  perServing: { calories: 340, protein: 11 },
  estCostPerServing: 0.45,
  roles: ["breakfast", "lunch"],
  ingredients: [
    { item: "flaxseed (telba)", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "day-old injera, torn", qty: "3 pieces" },
    { item: "garlic + green chile", qty: "1 clove / 1", cost: 0.2, spansWeeks: true },
    { item: "berbere or chile powder", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "lemon + salt", qty: "to taste", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Toast the flaxseed in a dry pan over medium heat until fragrant and popping, then grind to a coarse meal.",
    "Whisk the ground flax into warm water (about 1 cup) to make a loose, slightly slippery sauce; season with garlic, chile, berbere, lemon, and salt.",
    "Tear the day-old injera into the sauce and fold until every piece is coated and softened.",
    "Let it sit a couple of minutes so the injera drinks the flax sauce, then eat.",
  ],
  modernMove:
    "Toasting the flax before grinding is everything — it turns a bland seed nutty and aromatic. The ground flax thickens water into a sauce on its own, a vegan binder that adds omega-3s and protein on a fasting day.",
  zeroWasteHero: true,
  notes:
    "Telba (flax) is a quiet hero of fasting nutrition — protein and good fat with no animal product — and here it rescues leftover injera at the same time.",
  tags: ["fitfit", "flax", "telba", "zero-waste", "fasting"],
};
