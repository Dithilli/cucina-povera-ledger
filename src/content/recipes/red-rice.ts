import type { Recipe } from "../types";

export const redRice: Recipe = {
  slug: "red-rice",
  title: "Charleston Red Rice",
  cuisine: "american-south",
  blurb:
    "Lowcountry tomato rice — a one-pot Gullah staple where a little bacon and a can of tomatoes carry a whole pot of rice to a glossy, savoury red.",
  servings: 6,
  perServing: { calories: 460, protein: 12 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "bacon or any smoked pork end, diced",
      qty: "3 oz",
      cost: 1.0,
    },
    { item: "long-grain white rice", qty: "2 cups", cost: 0.9 },
    { item: "onion, diced", qty: "1", cost: 0.4 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery rib, diced", qty: "1", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "canned crushed tomatoes",
      qty: "1 1/2 cups",
      cost: 0.75,
    },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    {
      item: "chicken stock or water",
      qty: "1 1/2 cups",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "bay leaf, thyme, cayenne, black pepper",
      qty: "to taste",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "salt and hot sauce", qty: "to taste" },
  ],
  method: [
    "Render the diced bacon slowly in a heavy pot until crisp and its fat pools. Lift out the bacon, leaving the fat behind.",
    "Soften the onion, pepper and celery in the bacon fat until sweet, then stir in the garlic and tomato paste and let the paste darken a shade — this caramelised paste is where the depth comes from.",
    "Add the crushed tomatoes, thyme, bay, a pinch of cayenne and the reserved bacon, and simmer a few minutes to concentrate.",
    "Stir in the rice to coat it, pour in the stock, season, then bring to a boil. Cover tight and cook on the lowest heat 20–22 minutes until the liquid is absorbed.",
    "Rest covered 10 minutes, then fork it up — the grains should be separate and stained an even brick-red, not mushy. Pass hot sauce.",
  ],
  modernMove:
    "Darkening tomato paste in the bacon fat before the rice goes in builds a roasted, umami backbone — so three ounces of pork and a can of tomatoes flavour a pot that feeds six.",
  tags: ["rice", "one-pot", "tomato", "bacon", "lowcountry", "gullah"],
};
