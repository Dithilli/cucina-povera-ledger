import type { Recipe } from "../types";

export const avial: Recipe = {
  slug: "avial",
  title: "Avial",
  cuisine: "south-indian",
  blurb:
    "A jumble of whatever vegetables the garden gave you, bound in a coarse coconut-cumin paste loosened with sour curd and finished with a slick of raw coconut oil — the centerpiece of a Kerala sadya.",
  servings: 4,
  perServing: { calories: 410, protein: 9 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "mixed vegetables (raw banana, yam, carrot, beans, drumstick), batoned", qty: "5 cups", cost: 2.2 },
    { item: "grated coconut, fresh or frozen", qty: "1 cup", cost: 0.6 },
    { item: "sour curd / plain yogurt", qty: "1/2 cup", cost: 0.4 },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "green chilies", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "2 sprigs", cost: 0.1, spansWeeks: true },
    { item: "coconut oil, raw, to finish", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Stagger the vegetables into a wide pan by how long they take: yam and raw banana first, then carrot and beans, drumstick and gourds last. Add turmeric, salt, and just enough water to half-cover, and cook until each is tender but still holding its shape.",
    "Pulse the coconut, cumin, and green chilies to a coarse, dry paste — texture, not a smooth purée.",
    "Stir the coconut paste through the cooked vegetables and let it heat through for a couple of minutes so it stops tasting raw.",
    "Pull the pan off the heat, fold in the curd gently (heat would split it), and crush the curry leaves in.",
    "Pour the raw coconut oil over the top and serve as is — the oil is a perfume, not a cooking fat, so it must go in cold.",
  ],
  modernMove:
    "Adding the yogurt off the heat keeps it from curdling and preserves the bright sourness; the raw coconut oil drizzled at the very end is the signature Kerala aroma that's lost if you cook it in.",
  notes: "Use firm vegetables — anything that turns to mush wrecks the texture. Leftover avial is even better the next day.",
  zeroWasteHero: true,
  tags: ["coconut", "kerala", "vegetable", "sadya", "yogurt", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/avial-recipe-kerala-avial-recipe/",
      note: "Kerala avial — coarse coconut-cumin paste, staggered vegetable cooking, curd and raw coconut oil finish",
    },
  ],
};
