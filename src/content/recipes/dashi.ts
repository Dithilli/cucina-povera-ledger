import type { Recipe } from "../types";

export const dashi: Recipe = {
  slug: "dashi",
  title: "Ichiban Dashi (Kombu & Katsuobushi Stock)",
  cuisine: "japanese",
  blurb:
    "The clear, golden mother-stock of Japanese cooking: cold-steeped kelp gives glutamate, then a brief snowfall of shaved bonito flakes adds inosinate, and the two umami compounds multiply each other into a savor far greater than either alone. Fifteen minutes, two ingredients, no fat, no bones — the most economical depth in any kitchen, and the base beneath miso soup, simmered dishes, and noodle broths.",
  servings: 8,
  perServing: { calories: 8, protein: 1 },
  estCostPerServing: 0.22,
  roles: ["base"],
  ingredients: [
    { item: "dried kombu (kelp), 4-inch piece", qty: "1 piece (~10 g)", cost: 0.5, spansWeeks: true },
    { item: "katsuobushi (dried bonito flakes)", qty: "2 loosely packed cups (~20 g)", cost: 1.2, spansWeeks: true },
    { item: "cold water", qty: "8 cups" },
  ],
  method: [
    "Wipe the kombu lightly with a damp cloth but do not scrub off the white powder on its surface — that's mannitol, pure umami, not dirt. Slip the kombu into a pot with the cold water and, if you can, let it steep 30 minutes to a few hours; a cold soak draws out the cleanest, sweetest glutamate.",
    "Set the pot over medium heat and bring it slowly toward a simmer. Just before the water boils — when small bubbles climb the kombu — lift the kombu out. Boiled kombu turns the broth slimy and bitter, so this timing is the whole craft. Save the kombu; it is not finished giving.",
    "Let the water come to a brief boil, then turn off the heat and immediately scatter in the katsuobushi. Do not stir. Let the flakes sink on their own, about 1 to 2 minutes — over-steeping or boiling the bonito makes the dashi fishy and harsh.",
    "Strain through a fine sieve lined with a cloth or paper, letting it drip without pressing the flakes, which would cloud the broth and squeeze out bitterness. You're left with a fragrant, transparent gold stock.",
    "Save both the strained kombu and the spent katsuobushi — see the zero-waste note. They have a second life.",
  ],
  modernMove:
    "Synergy is the trick written into the chemistry: kelp's glutamate and bonito's inosinate amplify each other roughly eightfold, which is why this two-ingredient broth tastes richer than long-simmered meat stock. The restraint — cold-steep the kelp, never boil the bonito — is what protects that clarity.",
  notes:
    "Ichiban ('first') dashi is the delicate broth for clear soups. Don't throw the solids out: simmer the same kombu and katsuobushi a second time in fresh water for niban ('second') dashi, a sturdier stock perfect for miso soup and simmered dishes — two stocks from one set of ingredients. After the niban dashi, the truly spent kombu and bonito become furikake or tsukudani (see zeroWasteHero). Strained dashi keeps 3 days refrigerated and freezes well in jars or cubes.",
  zeroWasteHero: true,
  tags: ["base", "stock", "dashi", "kombu", "katsuobushi", "umami", "mottainai"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, How to Make Dashi",
      url: "https://www.justonecookbook.com/how-to-make-dashi/",
      note: "Awase (ichiban) dashi method — remove kombu before boil, never boil katsuobushi; reuse the solids.",
    },
  ],
};
