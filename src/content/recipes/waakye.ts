import type { Recipe } from "../types";

export const waakye: Recipe = {
  slug: "waakye",
  title: "Waakye (Rice and Beans)",
  cuisine: "west-african",
  blurb:
    "Ghana's beloved rice-and-beans, cooked together with dried sorghum leaves that stain the whole pot a deep reddish-brown. Cheap, filling, and built to be loaded with pepper sauce on top.",
  servings: 6,
  perServing: { calories: 510, protein: 17 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "black-eyed peas or cowpeas, dried", qty: "1 cup", cost: 0.7 },
    { item: "long-grain rice", qty: "2 cups", cost: 0.8 },
    { item: "dried sorghum/millet leaves (waakye leaves) — or a pinch of baking soda + dried hibiscus", qty: "4–6 leaves", cost: 0.5, spansWeeks: true },
    { item: "salt", qty: "1 1/2 tsp" },
    { item: "water", qty: "as needed" },
    { item: "pepper sauce / shito, to serve", qty: "to serve", cost: 0.5, spansWeeks: true },
  ],
  method: [
    "Soak the black-eyed peas a few hours if you can, then boil them with the waakye leaves in plenty of water until they begin to soften — about 40 minutes. The leaves bleed their red-brown colour into the pot; a pinch of baking soda helps draw it out and softens the beans.",
    "Fish out the spent leaves (and discard). The cooking liquid should now be a deep burgundy.",
    "Rinse the rice and add it straight to the pot with the beans and their coloured liquid, topping up so the water sits about an inch above the rice. Salt it.",
    "Boil until the level drops to the rice, then cover tightly and steam on low 15 to 20 minutes until both rice and beans are tender and the water is gone.",
    "Rest covered 10 minutes, then fluff. Serve mounded with a spoon of fierce pepper sauce or shito on top — that contrast of plain stained rice and hot sauce is the whole dish.",
  ],
  modernMove:
    "The waakye leaves are doing real work: they're rich in anthocyanins that not only dye the rice but, with a touch of alkali, tenderise the beans faster. No leaves? Dried hibiscus plus a pinch of baking soda mimics both the colour and the softening.",
  notes:
    "Street waakye comes loaded — boiled egg, fried plantain, gari sprinkle, spaghetti. Even plain with pepper sauce it's a complete, protein-decent dinner for pennies.",
  tags: ["dinner", "lunch", "rice", "beans", "waakye", "one-pot", "legumes"],
  sources: [
    {
      title: "Waakye — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Waakye",
      note: "Confirms waakye is Ghanaian rice and beans cooked with dried sorghum leaves and kaun (limestone alkali) that dye the pot red, the leaves removed before eating.",
    },
  ],
};
