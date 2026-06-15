import type { Recipe } from "../types";

export const tahari: Recipe = {
  slug: "tahari",
  title: "Tahari",
  cuisine: "north-indian",
  blurb:
    "A humble potato-and-rice one-pot from the Awadhi and Bihari kitchen — all the spice and ceremony of biryani, but built on cheap potatoes instead of meat.",
  servings: 4,
  perServing: { calories: 560, protein: 11 },
  estCostPerServing: 0.58,
  roles: ["dinner"],
  ingredients: [
    { item: "basmati or other long-grain rice", qty: "1 1/2 cups", cost: 0.75 },
    {
      item: "potatoes, peeled and cut into large chunks",
      qty: "3 medium",
      cost: 0.6,
    },
    { item: "onions, thinly sliced", qty: "2", cost: 0.4 },
    { item: "tomato, chopped", qty: "1", cost: 0.25 },
    {
      item: "whole spices: bay leaf, cinnamon, cloves, black cardamom, cumin, peppercorns",
      qty: "1 tbsp mixed",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "ground spices: turmeric, coriander, red chili powder",
      qty: "1 tbsp mixed",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "ginger-garlic paste",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "ghee or oil",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt, green chiles, cilantro and mint", qty: "to taste", cost: 0.2 },
  ],
  method: [
    "Rinse and soak the rice 20 minutes; drain. Heat ghee and bloom the whole spices, then fry the onions slowly to deep brown — these browned onions are the backbone of tahari's flavor and color.",
    "Add ginger-garlic paste, green chiles, then the tomato and ground spices with a splash of water; cook this masala down until the fat separates.",
    "Add the potato chunks and salt and brown them in the masala for a few minutes so they take on color and don't fall apart later.",
    "Tip in the drained rice and 2 1/2 cups hot water, taste for salt, and bring to a boil.",
    "Cover and cook on the lowest heat ~15 minutes until the water is absorbed and the potatoes are tender, then rest 10 minutes off the heat. Fluff gently, fold through cilantro and mint, and serve with raita.",
  ],
  modernMove:
    "Tahari is the vegetarian's biryani — the trick is treating the potato like the meat: browning it in the bloomed masala before the rice goes in, so it carries the spice and the cheap dinner eats rich.",
  tags: ["rice", "potato", "one-pot", "awadhi", "biryani-style", "frugal"],
};
