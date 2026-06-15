import type { Recipe } from "../types";

export const beansPoriyal: Recipe = {
  slug: "beans-poriyal",
  title: "Beans Poriyal",
  cuisine: "south-indian",
  blurb:
    "Finely chopped green beans steamed in their own moisture and finished with mustard-and-urad tadka and a fistful of grated coconut — the dry stir-fry that every Tamil rice plate leans on.",
  servings: 4,
  perServing: { calories: 175, protein: 6 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "green beans, finely chopped", qty: "1 lb", cost: 1.6 },
    { item: "grated coconut (fresh or frozen)", qty: "1/3 cup", cost: 0.5 },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "urad dal (split black gram)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "dried red chilies", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.15, spansWeeks: true },
    { item: "turmeric, asafoetida, salt", qty: "to taste", cost: 0.15, spansWeeks: true },
    { item: "oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Heat the oil and crackle the mustard seeds. Add the urad dal and fry until it turns golden, then drop in the broken red chilies, curry leaves, and a pinch of asafoetida.",
    "Tip in the chopped beans with the turmeric, salt, and a splash of water. Cover and let them steam over a medium flame, stirring now and then, 8–10 minutes until tender but still bright green.",
    "Uncover, let any water cook off, then fold through the grated coconut and toss for a final minute off the boil so the coconut stays sweet and raw-tasting.",
    "Serve as the dry vegetable on a rice plate alongside sambar or rasam and yogurt.",
  ],
  modernMove:
    "Chop the beans as fine as you can and steam them covered with barely a splash of water — they cook in their own moisture, so nothing leaches out and the dish stays sweet and vivid rather than waterlogged.",
  notes:
    "Coconut goes in at the very end, off the heat — cooked too long it turns dull and oily. Frozen grated coconut, thawed, works perfectly.",
  tags: ["vegetable", "south-indian", "poriyal", "coconut", "stir-fry"],
  sources: [
    {
      title: "Swasthi — Indian Healthy Recipes",
      url: "https://www.indianhealthyrecipes.com/beans-poriyal-recipe-beans-stir-fry/",
      note: "Confirmed the mustard-and-urad tadka, steaming the finely chopped beans in their own moisture, and finishing with grated coconut off the heat.",
    },
  ],
};
