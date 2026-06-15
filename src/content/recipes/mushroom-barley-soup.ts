import type { Recipe } from "../types";

export const mushroomBarleySoup: Recipe = {
  slug: "mushroom-barley-soup",
  title: "Mushroom & Barley Soup",
  cuisine: "ashkenazi",
  blurb:
    "Krupnik — dried forest mushrooms and their saved soaking liquor, fresh mushrooms, pearl barley, and a base of onion, carrot, and celery, simmered thick and savory until the barley swells and the whole pot turns sustaining and dark.",
  servings: 6,
  perServing: { calories: 420, protein: 16 },
  estCostPerServing: 0.55,
  roles: ["dinner"],
  ingredients: [
    { item: "dried mushrooms (porcini or mixed)", qty: "1 oz", cost: 1.0, spansWeeks: true },
    { item: "fresh mushrooms, sliced", qty: "8 oz", cost: 1.2 },
    { item: "pearl barley", qty: "3/4 cup", cost: 0.4 },
    { item: "onion, chopped", qty: "1 large", cost: 0.3 },
    { item: "carrots, diced", qty: "2", cost: 0.2 },
    { item: "celery, diced", qty: "2 stalks", cost: 0.2 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "8 cups", cost: 0.0 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
    { item: "fresh dill, chopped (optional)", qty: "2 tbsp", cost: 0.2 },
  ],
  method: [
    "Soak the dried mushrooms in 2 cups of just-boiled water for 20–30 minutes until soft. Lift them out, chop, and carefully reserve the soaking liquor — pour off and keep all but the gritty last spoonful at the bottom. This dark liquor is the soul of the soup; never throw it out.",
    "In a heavy pot, sweat the onion, carrot, and celery in the oil until softened, about 8 minutes. Add the fresh mushrooms and cook until they give up their water and start to brown.",
    "Stir in the barley, the chopped soaked mushrooms, the reserved soaking liquor, the water, and the bay leaf. Bring to a boil, then drop to a low simmer.",
    "Simmer 50–60 minutes, stirring occasionally, until the barley is plump and tender and the broth has thickened. Add hot water if it gets too thick. Salt and pepper to taste; finish with dill.",
  ],
  modernMove:
    "Treat the mushroom soaking water as stock, not waste. Decanting that dark, glutamate-rich liquor into the pot is what gives a meatless soup a deep, almost beefy savor — strain off only the grit at the very bottom.",
  notes:
    "Pareve as written, so it works on a dairy night or before a meat meal. For a fleishig krupnik, simmer a beef marrow or flanken bone in the pot from the start and skip nothing else — the barley drinks up the richness; just keep it away from any dairy.",
  tags: ["barley", "mushroom", "soup", "pareve"],
  sources: [
    {
      title: "Jewish Women's Archive — Eating Jewish: Krupnik (Polish Barley Soup)",
      url: "https://jwa.org/blog/eating-jewish-krupnik",
      note: "Krupnik, the Ashkenazi mushroom-and-barley soup, and its shtetl origins.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Krupnik named for barley; dried forest mushrooms as a frugal flavor source.",
    },
  ],
};
