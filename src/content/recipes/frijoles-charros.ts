import type { Recipe } from "../types";

export const frijolesCharros: Recipe = {
  slug: "frijoles-charros",
  title: "Frijoles Charros",
  cuisine: "mexican",
  blurb:
    "Brothy 'cowboy' beans simmered with tomato, onion, chile, and a few scraps of pork — a whole soupy meal where a little cured meat seasons the entire pot.",
  servings: 4,
  perServing: { calories: 320, protein: 18 },
  estCostPerServing: 0.75,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "cooked frijoles de la olla, brothy", qty: "4 cups" },
    { item: "bacon or chorizo scraps, chopped", qty: "2 oz", cost: 0.8, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "white onion, chopped", qty: "1/2", cost: 0.2 },
    { item: "jalapeño or serrano, sliced", qty: "1", cost: 0.2 },
    { item: "cilantro to finish", qty: "a handful", cost: 0.3 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Render the bacon/chorizo scraps in a pot until they give up their fat.",
    "Add onion, then tomato and chile; cook down into a soft sofrito.",
    "Pour in the beans and plenty of their broth; simmer 15–20 minutes so the flavors marry.",
    "Finish with chopped cilantro and salt. Serve in bowls with tortillas.",
  ],
  modernMove:
    "Build it like a soup, not a side — render the pork fat first and use it as the flavor base, so 2 oz of meat seasons four full bowls.",
  tags: ["beans", "pork", "brothy", "dinner", "one-pot"],
  sources: [
    {
      title: "Frijoles charros — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Frijoles_charros",
      note: "Brothy pinto beans stewed with onion, garlic, bacon, chile, and cured pork.",
    },
    {
      title: "Mely Martínez — Mexico in My Kitchen, Frijoles de la Olla",
      url: "https://www.mexicoinmykitchen.com/mexican-beans-recipe/",
      note: "Brothy de-la-olla beans that form this dish's base.",
    },
  ],
};
