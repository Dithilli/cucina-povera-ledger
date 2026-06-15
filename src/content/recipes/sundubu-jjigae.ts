import type { Recipe } from "../types";

export const sundubuJjigae: Recipe = {
  slug: "sundubu-jjigae",
  title: "Sundubu-Jjigae (Silken Tofu Stew)",
  cuisine: "korean",
  blurb:
    "A scarlet, bubbling stew built on a chili-oil base, anchovy-kelp stock, and a whole tube of custard-soft silken tofu broken in at the end, with an egg cracked over the top to poach in the heat. Cheap, fast, and fiercely comforting — the silken tofu does the work of meat, swelling the pot for almost nothing.",
  servings: 4,
  perServing: { calories: 230, protein: 14 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "silken (soft) tofu (sundubu)", qty: "1 tube/block (12 oz)", cost: 1.2 },
    { item: "anchovy-kelp stock", qty: "2 1/2 cups", cost: 0.4, spansWeeks: true },
    { item: "gochugaru (Korean chili flakes)", qty: "2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "toasted sesame oil (or neutral oil)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion, finely diced", qty: "1/2", cost: 0.2 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "kimchi or zucchini, chopped (optional)", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    { item: "fish sauce or doenjang, to season", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "scallion, sliced", qty: "1", cost: 0.1 },
  ],
  method: [
    "Make the chili-oil base: heat the sesame oil in a pot over medium, add the onion and garlic, and soften 2 minutes. Pull the pot off the heat for a moment and stir in the gochugaru, letting it sizzle gently in the warm oil for 30 seconds until it turns a glossy deep red and smells toasty — this bloomed chili oil is what gives the broth its color and roundness instead of raw, dusty heat.",
    "Add the optional kimchi or zucchini and stir-fry 2 minutes, then pour in the stock and bring to a boil.",
    "Season the broth with the fish sauce or a spoon of doenjang and let it simmer 5 minutes to come together.",
    "Spoon the silken tofu into the pot in big soft curds — don't dice it; break it in rough pieces straight from the tube so it stays cloud-soft. Simmer gently 3 to 4 minutes; it will warm through and partly melt into the broth, thickening it.",
    "Crack the egg into the center, cover, and let it poach in the bubbling stew for a minute or two — runny yolk to stir through, or longer if you like it set.",
    "Scatter the scallion over the top and bring the pot to the table still bubbling, with rice alongside. Break the yolk into the broth and spoon it over the rice.",
  ],
  modernMove:
    "Blooming the gochugaru in hot sesame oil to build a chili-oil base, then folding silken tofu in as soft curds rather than cubes, gives the signature glossy red broth and velvety body — restaurant sundubu from a tube of the cheapest tofu there is.",
  notes:
    "Endlessly adaptable to whatever's around: a few clams, a handful of mushrooms, leftover kimchi, or a little pork all slot in. Serve it screaming hot in a clay ttukbaegi if you have one — it keeps cooking at the table. Skip the egg and use doenjang for a vegan pot.",
  zeroWasteHero: false,
  tags: ["dinner", "stew", "jjigae", "tofu", "silken-tofu", "spicy", "egg"],
};
