import type { Recipe } from "../types";

export const polentaMushroomRagu: Recipe = {
  slug: "polenta-mushroom-ragu",
  title: "Polenta Under a Slow Mushroom Ragù",
  cuisine: "italian",
  blurb:
    "Soft polenta beneath a deep, meatless mushroom and onion ragù — dried porcini do the work of meat for almost nothing.",
  servings: 4,
  perServing: { calories: 440, protein: 13 },
  estCostPerServing: 1.5,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "coarse polenta (cornmeal)",
      qty: "1 1/2 cups",
      cost: 0.6,
    },
    {
      item: "mushrooms, sliced (any cheap variety)",
      qty: "1 lb",
      cost: 2.5,
    },
    {
      item: "dried porcini, soaked (liquid reserved)",
      qty: "1/2 oz",
      cost: 1.0,
      spansWeeks: true,
    },
    { item: "onion, garlic", qty: "1 onion, 2 cloves", cost: 0.4 },
    {
      item: "tomato paste; thyme or rosemary",
      qty: "2 tbsp, 1 sprig",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "olive oil, Parmesan, salt, pepper",
      qty: "3 tbsp oil, 1/3 cup cheese",
      cost: 1.0,
      spansWeeks: true,
    },
  ],
  method: [
    "Sear the fresh mushrooms hard in oil so they brown and release their water — don't crowd the pan. Set aside.",
    "Soften the onion and garlic, add tomato paste and herbs, then the chopped soaked porcini and their strained liquid. Return the mushrooms and simmer into a thick, savory ragù.",
    "Cook the polenta in salted water, stirring, 30–40 minutes; finish with a little oil and Parmesan.",
    "Pool the polenta in bowls, spoon the ragù over, and finish with Parmesan and pepper.",
  ],
  modernMove:
    "Use the strained porcini soaking liquid as the braising base — it carries an intense, almost meaty depth that makes the ragù taste long-cooked in minutes.",
  tags: ["polenta", "mushroom", "ragu", "vegetarian", "umami"],
  sources: [
    {
      title: "Polenta — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Polenta",
      note: "Northern Italian cornmeal staple served soft under a sauce or ragù",
    },
  ],
};
