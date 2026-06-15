import type { Recipe } from "../types";

export const anchovyKelpStock: Recipe = {
  slug: "anchovy-kelp-stock",
  title: "Myeolchi-Dasima Yuksu (Anchovy-Kelp Stock)",
  cuisine: "korean",
  blurb:
    "A handful of dried anchovies and a square of kelp steeped in water for fifteen minutes — the clean, deep, faintly oceanic broth that is the unspoken foundation of Korean home cooking. It costs almost nothing and turns plain water into the body beneath every jjigae, guk, and bowl of noodles.",
  servings: 8,
  perServing: { calories: 10, protein: 1 },
  estCostPerServing: 0.15,
  roles: ["base"],
  ingredients: [
    { item: "dried anchovies (myeolchi), large soup size", qty: "15 to 20 (about 1 oz)", cost: 0.9, spansWeeks: true },
    { item: "dried kelp (dasima/kombu), 4-inch piece", qty: "1 piece", cost: 0.3, spansWeeks: true },
    { item: "water", qty: "8 cups" },
    { item: "dried shiitake (optional, for depth)", qty: "2", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Snap the heads off the anchovies and pinch out the dark guts from the belly — this small step keeps the stock clean and sweet instead of bitter and fishy. Toss the cleaned bodies into a dry pot and toast over medium heat 1 to 2 minutes until fragrant, which deepens their flavor and tames any rawness.",
    "Add the water, the kelp, and the optional shiitake. Bring slowly toward a simmer over medium heat.",
    "The moment the water reaches a gentle simmer, pull out the kelp — left to boil it turns slimy and bitter. It has already given its clean glutamate to the broth.",
    "Lower the heat and simmer the anchovies (and shiitake) gently 10 to 15 minutes, uncovered, skimming any foam. Don't boil hard or push it longer; the broth should stay clear and the flavor stays delicate.",
    "Strain out the solids through a sieve. You're left with a pale gold, savory stock ready to become the base of any stew or soup.",
  ],
  modernMove:
    "Gutting and dry-toasting the anchovies, then pulling the kelp before it boils, is the whole craft here — two thirty-second moves that mean the difference between a clean umami broth and a murky, bitter one. This is the dashi logic of the Korean kitchen, built from pantry scraps.",
  notes:
    "Make a big batch and refrigerate up to 4 days or freeze in jars for instant stews. The strained-out anchovies and shiitake can be chopped and stir-fried into a salty rice-side rather than tossed. For a vegan stock, drop the anchovies and lean on kelp plus shiitake.",
  zeroWasteHero: false,
  tags: ["base", "stock", "anchovy", "kelp", "umami", "make-ahead"],
};
