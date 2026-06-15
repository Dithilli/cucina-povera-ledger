import type { Recipe } from "../types";

export const zurekPl: Recipe = {
  slug: "zurek",
  title: "Żurek",
  cuisine: "polish",
  blurb:
    "Soured rye starter (zakwas) whisked into a smoky sausage-and-marjoram broth until it turns cloudy and tangy, then crowned with half a hard-boiled egg and a few coins of white kiełbasa — the bracing, fermented soul of the Polish table, best ladled into a hollowed loaf.",
  servings: 4,
  perServing: { calories: 470, protein: 20 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "soured rye starter (zakwas), homemade or jarred", qty: "2 cups", cost: 0.6 },
    { item: "white kiełbasa (or smoked sausage)", qty: "1/2 lb", cost: 1.8 },
    { item: "smoked bacon or pork bones", qty: "2 oz", cost: 0.5 },
    { item: "potatoes, peeled and diced", qty: "2 medium", cost: 0.4 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "carrot and parsley root (włoszczyzna)", qty: "1 each", cost: 0.4 },
    { item: "eggs, hard-boiled", qty: "2", cost: 0.5 },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "dried marjoram", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "bay leaf and allspice berries", qty: "1 + 3", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the bacon or bones with the onion, carrot, parsley root, bay leaf, and allspice in about 6 cups of water for 30–40 minutes to build a smoky base broth.",
    "Add the diced potatoes and the sausage (whole or sliced) and cook until the potatoes are tender, 15 minutes more. Lift out the sausage and slice it into coins if left whole.",
    "Stir the jar of zakwas well, then whisk it into the simmering broth — it will turn the soup cloudy and sour. Do not let it hard-boil after this point or it can curdle.",
    "Season hard with marjoram, the raw garlic, salt, and plenty of pepper; taste for the sour-savory balance. A spoon of cream can round it out if you like.",
    "Ladle over the sliced sausage and half a hard-boiled egg per bowl. For the full effect, serve inside a hollowed round loaf of bread.",
  ],
  modernMove:
    "The zakwas is the whole game: rye flour and water left under a cloth for five to seven days grows the lactic tang that defines żurek. Whisk it in off a hard boil and finish with raw garlic and a heavy hand of marjoram added late, so their aromatics stay sharp against the ferment.",
  notes:
    "Easter's signature soup, but eaten year-round. A jarred zakwas from a Polish deli is an honest shortcut; the broth and marjoram still do the heavy lifting.",
  zeroWasteHero: false,
  tags: ["soup", "fermented", "polish"],
  sources: [
    {
      title: "Polonist — Żurek: Polish Sour Rye Soup Recipe",
      url: "https://www.polonist.com/polish-zurek-soup/",
      note: "Zakwas-soured broth, white sausage, egg, marjoram, and the bread-bowl serve.",
    },
  ],
};
