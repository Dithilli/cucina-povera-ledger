import type { Recipe } from "../types";

export const whiteRice: Recipe = {
  slug: "white-rice",
  title: "A pot of white rice",
  cuisine: "american-south",
  blurb:
    "Plain long-grain white rice, cooked up fluffy and separate — the silent partner that catches the pot-liquor under red beans, gumbo, and smothered everything.",
  servings: 6,
  perServing: { calories: 205, protein: 4 },
  estCostPerServing: 0.15,
  roles: ["base", "side"],
  ingredients: [
    { item: "long-grain white rice", qty: "2 cups", cost: 0.8 },
    { item: "water", qty: "3 cups" },
    { item: "salt", qty: "1 tsp" },
    { item: "butter or neutral oil (optional)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Rinse the rice in a sieve under cold water until the water runs clear — this rinses off surface starch so the grains cook up separate, not gluey.",
    "Combine the rice, water, salt, and butter (if using) in a heavy pot with a tight lid. Bring to a full boil.",
    "Stir once, then drop the heat to the lowest simmer and cover. Cook undisturbed 15 to 18 minutes — no peeking, no stirring, which would knock loose starch and make it sticky.",
    "Pull off the heat and let it stand, still covered, 10 minutes. The steam finishes the grains and firms them up.",
    "Fluff with a fork and serve. The Carolina Lowcountry, the rice bowl of the early South, set the standard for this fluffy-separate style.",
  ],
  modernMove:
    "The rest off the heat is non-negotiable: those 10 covered minutes redistribute moisture so every grain is tender and distinct — the difference between rice that holds a mound of gravy and rice that turns to paste.",
  notes:
    "Leftover rice fries up beautifully and is the base for next-day calas or rice cakes; keep it spread out and chilled fast.",
  tags: ["base", "side", "rice", "lowcountry", "quick"],
  sources: [
    {
      title: "America's Test Kitchen — Perfect White Rice",
      url: "https://www.americastestkitchen.com/recipes/6905-perfect-white-rice",
      note: "Rinse to clear, 2 cups rice to 3 cups water, low covered simmer then a covered rest for fluffy-separate grains.",
    },
  ],
};
