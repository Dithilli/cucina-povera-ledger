import type { Recipe } from "../types";

export const gigantesPlaki: Recipe = {
  slug: "gigantes-plaki",
  title: "Gigantes Plaki (Baked Giant Beans)",
  cuisine: "greek",
  blurb:
    "Giant butter beans baked slow in a sweet tomato sauce with onion, garlic, and herbs until the oil pools golden on top — the taverna meze that eats like a meal.",
  servings: 5,
  perServing: { calories: 520, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    {
      item: "cooked gigantes / butter beans (from the base pot), plus a cup of their broth",
      qty: "4 cups",
      cost: 1.8,
    },
    { item: "onions, sliced", qty: "2", cost: 0.6 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "ripe tomatoes, grated (or one 14-oz can, crushed)",
      qty: "1 lb",
      cost: 1.0,
    },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    {
      item: "olive oil, generous",
      qty: "1/3 cup",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "dried oregano, parsley, pinch of sugar, bay leaf",
      qty: "to taste",
      spansWeeks: true,
    },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Heat the oven to 375°F. Soften the onions in the olive oil over medium heat until sweet and limp, then add the garlic and tomato paste and cook a minute more.",
    "Add the grated tomatoes, a pinch of sugar, oregano, and bay; simmer 10 minutes into a loose, jammy sauce. Season.",
    "Fold in the cooked beans and enough of their broth to keep things saucy, then tip everything into a baking dish — the beans should be just submerged.",
    "Bake uncovered 45–60 minutes, until the top caramelizes, the sauce thickens, and oil rises golden at the edges. Strew with parsley. Best warm or at room temperature with feta and bread.",
  ],
  modernMove:
    "Bake it long and uncovered so the surface beans blister and the sauce reduces around them — the contrast between the crisp top and the creamy beans beneath is the whole point of plaki.",
  notes:
    "Traditionally vegan and eaten at room temperature, which makes it ideal cook-ahead food; the flavor deepens overnight.",
  tags: ["legumes", "giant-beans", "baked", "gigantes", "tomato", "vegan"],
  sources: [
    {
      title: "My Greek Dish — Gigantes Plaki (Greek Baked Giant Beans)",
      url: "https://www.mygreekdish.com/recipe/gigantes-plaki-greek-baked-giant-beans/",
      note: "Confirms giant beans simmered then baked in a herby tomato-and-olive-oil sauce.",
    },
    {
      title: "Wikipedia — Gigantes plaki",
      url: "https://en.wikipedia.org/wiki/Gigantes_plaki",
      note: "Background on the dish: large white beans baked in tomato sauce.",
    },
  ],
};
