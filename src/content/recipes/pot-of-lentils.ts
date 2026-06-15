import type { Recipe } from "../types";

export const potOfLentils: Recipe = {
  slug: "pot-of-lentils",
  title: "A pot of lentils",
  cuisine: "levantine",
  blurb:
    "Brown or green lentils simmered with bay and a slick of olive oil — the Levantine pantry's workhorse, ready for mujaddara, soups, or a quick salad.",
  servings: 6,
  perServing: { calories: 160, protein: 11 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "dried brown or green lentils, picked over and rinsed", qty: "1 lb (about 2 1/4 cups)", cost: 1.5 },
    { item: "bay leaf", qty: "1", spansWeeks: true },
    { item: "garlic, smashed", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "olive oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste (added late)" },
  ],
  method: [
    "No soaking needed for brown or green lentils. Put them in a pot with the bay, garlic, and oil, and cover with cold water by 2 inches.",
    "Bring to a boil, then drop to a gentle simmer, partly covered. Skim any foam.",
    "Cook until tender but still holding their shape — 20 to 30 minutes for green/brown lentils. Do NOT salt until the last 5 minutes, or the skins toughen.",
    "Salt to taste at the end. For mujaddara and pilafs you want them firm; for soups, cook a few minutes longer until they start to slump.",
    "Keep the lentils in just enough of their cooking liquid to stay moist. Refrigerate up to 5 days, or freeze in portions.",
  ],
  modernMove:
    "Pull the lentils off the heat while they still have a little bite — they keep cooking in residual heat, and firm lentils are what separate a proper mujaddara from mush.",
  notes:
    "Brown and green lentils hold their shape; avoid red/orange lentils here, as those dissolve into soup (use the red-lentil pot for shorbat adas).",
  tags: ["base", "legumes", "lentils", "make-ahead"],
  sources: [
    {
      title: "Feel Good Foodie — feelgoodfoodie.net",
      url: "https://feelgoodfoodie.net/recipe/how-to-cook-lentils/",
      note: "How to cook lentils — confirms no soaking needed and that green/brown lentils hold their shape (cooked slow, not boiled hard).",
    },
  ],
};
