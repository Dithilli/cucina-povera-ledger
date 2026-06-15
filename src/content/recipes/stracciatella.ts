import type { Recipe } from "../types";

export const stracciatella: Recipe = {
  slug: "stracciatella",
  title: "Stracciatella alla Romana",
  cuisine: "italian",
  blurb:
    "Roman egg-drop soup — beaten egg, cheese, and lemon stirred into hot brodo into soft 'little rags,' ready in five minutes.",
  servings: 4,
  perServing: { calories: 220, protein: 15 },
  estCostPerServing: 0.9,
  roles: ["lunch", "dinner", "side"],
  ingredients: [
    {
      item: "light chicken or vegetable brodo",
      qty: "6 cups",
      cost: 1.2,
    },
    { item: "eggs", qty: "4", cost: 1.5 },
    {
      item: "Parmesan or pecorino, grated",
      qty: "1/2 cup",
      cost: 1.3,
      spansWeeks: true,
    },
    {
      item: "lemon zest and a little nutmeg",
      qty: "1 lemon, pinch",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "parsley, salt, pepper",
      qty: "to taste",
      cost: 0.2,
      spansWeeks: true,
    },
  ],
  method: [
    "Bring the brodo to a gentle simmer and season.",
    "Beat the eggs with the cheese, lemon zest, nutmeg, and a little parsley until smooth.",
    "Drizzle the egg mixture into the simmering brodo while stirring slowly with a fork — it sets into delicate strands, the 'little rags.'",
    "Take off the heat almost immediately so the egg stays tender. Finish with pepper and more cheese.",
  ],
  modernMove:
    "Whisk the cheese into the raw egg before it hits the pot so it suspends in the strands rather than clumping — silkier rags, deeper savor.",
  tags: ["eggs", "soup", "brodo", "quick", "protein-forward"],
};
