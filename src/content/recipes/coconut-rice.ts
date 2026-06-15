import type { Recipe } from "../types";

export const coconutRice: Recipe = {
  slug: "coconut-rice",
  title: "Coconut Rice",
  cuisine: "west-african",
  blurb:
    "Jollof's gentler cousin — rice simmered in coconut milk and a lighter pepper base until it drinks up the richness and turns fragrant, faintly sweet, and pale orange. A treat that costs almost nothing.",
  servings: 6,
  perServing: { calories: 520, protein: 8 },
  estCostPerServing: 0.78,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "long-grain parboiled rice", qty: "3 cups", cost: 1.2 },
    { item: "coconut milk (1 can, or milk from 1 grated coconut)", qty: "1 1/2 cups", cost: 1.0 },
    { item: "tomatoes", qty: "2", cost: 0.5 },
    { item: "red bell pepper (tatashe)", qty: "1", cost: 0.6 },
    { item: "scotch bonnet pepper (to taste)", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "onion", qty: "1", cost: 0.4 },
    { item: "red palm oil or neutral oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "ground crayfish", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "stock cube, thyme, bay leaf", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "water", qty: "1 1/2 cups" },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Blend the tomatoes, red pepper, scotch bonnet, and half the onion smooth. Slice the rest of the onion and soften it in the oil.",
    "Add the blend and fry it down until the raw smell goes and the oil starts to show — a few minutes shorter than for jollof, since you want it gentler here.",
    "Pour in the coconut milk and water, add ground crayfish, the crushed stock cube, thyme, bay, and salt, and bring to a simmer. Taste — coconut wants a little more salt than you'd expect.",
    "Rinse the rice and stir it in so the liquid just covers it. Cover tightly and cook on the lowest heat without stirring, 25 to 30 minutes, until the rice has drunk up all the coconut liquid and is tender.",
    "Rest covered 10 minutes, then fluff gently. The grains should be fragrant and faintly sweet, stained pale orange rather than jollof-red.",
  ],
  modernMove:
    "Coconut milk is mostly fat and water, so it both flavours and cooks the rice — keep the heat low and the lid on so it reduces into the grains instead of scorching, and resist stirring, which would knock the starch loose and turn it gluey.",
  notes:
    "Lovely with fried plantain and a fried egg or any leftover stew. Use the lighter coconut 'second pressing' or thin a can with water to keep it cheap and not too heavy.",
  tags: ["dinner", "lunch", "rice", "one-pot", "coconut", "tomato-pepper"],
  sources: [
    {
      title: "All Nigerian Recipes (Flo Madubike) — Nigerian Coconut Rice",
      url: "https://www.allnigerianrecipes.com/rice/nigerian-coconut-rice/",
      note: "Cooking the rice in coconut milk over a tomato-pepper base until the grains drink up the liquid.",
    },
  ],
};
