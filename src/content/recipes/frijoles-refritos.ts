import type { Recipe } from "../types";

export const frijolesRefritos: Recipe = {
  slug: "frijoles-refritos",
  title: "Frijoles Refritos",
  cuisine: "mexican",
  blurb:
    "Day-two beans mashed and fried in a little hot fat until they tighten into a glossy, savory paste — the second life of the bean pot, and the one place the lard earns its keep.",
  servings: 4,
  perServing: { calories: 270, protein: 13 },
  estCostPerServing: 0.4,
  roles: ["base", "side"],
  ingredients: [
    { item: "cooked frijoles de la olla, with some of their broth", qty: "3 cups" },
    { item: "lard (or oil)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "white onion, finely chopped", qty: "1/4", cost: 0.15 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion in the hot lard until translucent.",
    "Add the beans and a splash of their broth. Mash with the back of a spoon or a masher as they fry.",
    "Keep cooking and mashing, adding broth as needed, until you have a thick, glossy purée that pulls away from the pan.",
    "Taste for salt. Serve as a base under eggs, spread on molletes, or as a side.",
  ],
  modernMove:
    "'Refrito' means well-fried, not fried-again — push them further than feels necessary so the starch caramelizes and the purée gets a faint toasted depth.",
  zeroWasteHero: true,
  tags: ["beans", "zero-waste", "base", "refried", "leftovers"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Refried Beans (Frijoles Refritos)",
      url: "https://www.mexicoinmykitchen.com/refried-beans-frijoles-refritos/",
      note: "Day-old beans fried and mashed in lard to a glossy purée.",
    },
  ],
};
