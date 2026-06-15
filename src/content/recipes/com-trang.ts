import type { Recipe } from "../types";

export const comTrang: Recipe = {
  slug: "com-trang",
  title: "Cơm Trắng (Steamed Rice)",
  cuisine: "vietnamese",
  blurb:
    "Plain steamed long-grain rice — the foundation of the Vietnamese table that catches every drop of caramel braise and fish-sauce glaze. The whole frugal logic of a kho dinner depends on it: a little salty, dark meat over a big bowl of rice.",
  servings: 6,
  perServing: { calories: 210, protein: 4 },
  estCostPerServing: 0.14,
  roles: ["base", "side"],
  ingredients: [
    { item: "long-grain jasmine rice", qty: "2 cups", cost: 0.8 },
    { item: "water", qty: "2 1/2 cups" },
    { item: "salt (optional)", qty: "pinch" },
  ],
  method: [
    "Rinse the rice in a bowl under cold water, swirling and pouring off the cloudy water two or three times until it runs nearly clear — this rinses surface starch so the grains steam up separate, not gummy.",
    "Drain well, then combine with the water (and a pinch of salt if you like) in a heavy pot with a tight lid. For jasmine rice the ratio is a touch under the usual — about 1 1/4 cups water per cup of rice — because you want firm, distinct grains under a wet braise.",
    "Bring to a full boil uncovered, then drop to the lowest simmer, cover, and cook undisturbed 15 minutes. No peeking — the trapped steam is doing the cooking.",
    "Pull off the heat and let it stand, still covered, 10 minutes. The residual steam finishes the centers and firms the grains.",
    "Fluff gently with a fork or rice paddle, lifting from the bottom, and serve hot under the kho.",
  ],
  modernMove:
    "The 10-minute covered rest off the heat is the whole game: it redistributes moisture so each grain is tender but holds its shape, the perfect blotter for a dark caramel braise instead of a paste that drowns it.",
  notes:
    "Day-old cold rice is the start of cơm chiên (fried rice) — keep leftovers spread out and chilled fast so they fry up loose. A rice cooker does steps 2 to 4 hands-off and is the everyday Vietnamese tool.",
  tags: ["base", "side", "rice", "jasmine", "staple", "vegan", "quick"],
  sources: [
    {
      title: "Andrea Nguyen — Perfect Jasmine Rice, the 10-10-10 Method (Viet World Kitchen)",
      url: "https://www.vietworldkitchen.com/blog/2026/04/perfect-jasmine-rice-the-10-10-10-method.html",
      note: "Rinsing to clear starch, the boil-then-low-simmer, and the covered rest off heat",
    },
    {
      title: "Hungry Huy — How to Cook Perfect, Fluffy Jasmine Rice",
      url: "https://www.hungryhuy.com/how-to-cook-jasmine-rice/",
      note: "Stovetop jasmine-rice water ratio and steaming method",
    },
  ],
};
