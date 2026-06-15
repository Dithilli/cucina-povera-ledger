import type { Recipe } from "../types";

export const doenjangJjigae: Recipe = {
  slug: "doenjang-jjigae",
  title: "Doenjang-Jjigae (Soybean-Paste Stew)",
  cuisine: "korean",
  blurb:
    "The everyday stew of the Korean home — anchovy-kelp stock loosened with earthy fermented soybean paste and crowded with tofu, zucchini, potato, and chili, bubbling in its clay pot. No meat needed: the doenjang carries all the savory depth, and a few cents of vegetables make a pot that anchors a whole rice meal.",
  servings: 4,
  perServing: { calories: 190, protein: 12 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "anchovy-kelp stock (or water)", qty: "4 cups", cost: 0.6, spansWeeks: true },
    { item: "doenjang (Korean soybean paste)", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "gochujang (Korean chili paste)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "firm tofu, cubed", qty: "1/2 block (7 oz)", cost: 0.9 },
    { item: "zucchini or Korean squash, half-moons", qty: "1/2", cost: 0.4 },
    { item: "potato, small dice", qty: "1 small", cost: 0.25 },
    { item: "onion, sliced", qty: "1/2", cost: 0.2 },
    { item: "green chili, sliced", qty: "1", cost: 0.15 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "scallion, sliced", qty: "1", cost: 0.1 },
  ],
  method: [
    "Bring the stock to a simmer in a pot or earthenware ttukbaegi. Whisk the doenjang through a small sieve or with the back of a spoon into the stock so it dissolves smooth without lumps; stir in the teaspoon of gochujang for a little color and warmth.",
    "Add the potato and onion first and simmer 5 minutes until the potato begins to soften — it needs the head start on the quicker vegetables.",
    "Add the zucchini and garlic and simmer another 4 to 5 minutes until the squash is tender but not collapsing.",
    "Slip in the tofu cubes and the green chili and simmer gently 3 to 4 minutes more, just to heat the tofu through and let it soak up the broth. Don't stir hard once the tofu is in, so it stays in pieces.",
    "Taste and adjust with a little more doenjang if it needs depth. Scatter the scallion over the top and serve bubbling hot, straight from the pot, with steamed rice and kimchi.",
  ],
  modernMove:
    "Whisking the doenjang through a sieve so it fully dissolves, and staging the vegetables hard-to-soft, gives a clean, savory broth where every piece is properly cooked — the difference between a thoughtful home stew and a muddy one-pot dump.",
  notes:
    "Endlessly flexible: mushrooms, dried anchovies left whole, a handful of clams, or a little diced pork or beef all belong here if you have them. Made in a clay ttukbaegi it keeps bubbling at the table. Use a vegan kelp-shiitake stock and it stays fully plant-based.",
  zeroWasteHero: false,
  tags: ["dinner", "stew", "jjigae", "doenjang", "tofu", "fermented", "vegetarian"],
  sources: [
    {
      title: "Maangchi — Doenjang-jjigae (Fermented soybean paste stew)",
      url: "https://www.maangchi.com/recipe/doenjang-jjigae",
      note: "Dissolving doenjang into the broth with potato, zucchini, tofu, and chili",
    },
  ],
};
