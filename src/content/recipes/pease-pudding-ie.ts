import type { Recipe } from "../types";

export const peasePuddingIe: Recipe = {
  slug: "pease-pudding-ie",
  title: "Pease Pudding",
  cuisine: "irish",
  blurb:
    "Yellow split peas slow-simmered with onion until they collapse into a thick, savoury purée-pudding, flaked through with a little ham — the oldest, cheapest comfort food there is, hot from the pot or cold by the slice.",
  servings: 4,
  perServing: { calories: 450, protein: 22 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "yellow split peas, soaked overnight", qty: "1 1/2 cups", cost: 0.7 },
    { item: "cooked ham or bacon hock, flaked", qty: "4 oz", cost: 1.2 },
    { item: "onion, finely chopped", qty: "1 medium", cost: 0.3 },
    { item: "carrot, grated", qty: "1", cost: 0.2 },
    { item: "butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "bay leaf, salt, pepper, parsley", qty: "to taste", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Drain the soaked split peas and put them in a pot with the onion, grated carrot and bay leaf. Cover generously with water (or ham stock if you have it) and bring to a boil.",
    "Skim, then simmer gently, half-covered, for about 1 hour, stirring now and then, until the peas are completely soft and most of the liquid has gone — they should slump when stirred.",
    "Beat in the butter and mash the peas to a thick, smooth purée; season well with pepper and only a little salt if the ham is salty.",
    "Fold the flaked ham through the warm pudding so it stays in distinct pieces. Stir in chopped parsley.",
    "Serve hot as a thick pudding alongside potatoes or bread, or chill it firm and slice it cold for the next day — it sets to a sliceable loaf.",
  ],
  modernMove:
    "If you've simmered a ham hock, cook the peas in that stock and skip plain water entirely — the smoky, salty liquor seasons the pudding from the inside and gives it a depth no amount of added salt can.",
  notes:
    "Traditionally the peas were tied in a cloth and boiled right alongside the ham. Leftovers were never wasted: cold pease pudding spread thick in bread was the next day's lunch.",
  zeroWasteHero: true,
  tags: ["legume", "split-peas", "pease-pudding", "ham", "dinner", "irish"],
  sources: [
    {
      title: "Culinary Ginger — British Pease Pudding",
      url: "https://culinaryginger.com/british-pease-pudding/",
      note: "yellow split peas simmered with onion and ham stock, then mashed to a thick pudding and served with ham",
    },
  ],
};
