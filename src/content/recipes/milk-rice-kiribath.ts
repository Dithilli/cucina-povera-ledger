import type { Recipe } from "../types";

export const milkRiceKiribath: Recipe = {
  slug: "milk-rice-kiribath",
  title: "Kiribath (Milk Rice)",
  cuisine: "sri-lankan",
  blurb:
    "Short-grain rice simmered soft and then drowned in thick coconut milk until dense and creamy, pressed into a slab and cut into diamonds — the auspicious first meal of every new month and New Year, served with fiery lunu miris.",
  servings: 4,
  perServing: { calories: 480, protein: 8 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "short-grain or samba rice", qty: "2 cups", cost: 1.1 },
    { item: "thick coconut milk (pol kiri)", qty: "1 1/2 cups", cost: 1.0 },
    { item: "water", qty: "2 1/2 cups" },
    { item: "salt", qty: "1 tsp", cost: 0.02 },
  ],
  method: [
    "Rinse the rice and bring it to a boil with the water; stir once, cover tightly and cook on the lowest heat 15 minutes until the water is absorbed and the grains are very tender.",
    "Pour the thick coconut milk and salt over the hot rice and fold gently with a wooden paddle, mashing slightly, then cook a few minutes more until it thickens to a dense, glossy mass.",
    "Tip onto a flat tray or banana leaf and press level to about an inch thick with the back of an oiled spoon.",
    "Let it set and firm, then cut into diamonds with a wet knife. Serve warm with lunu miris.",
  ],
  modernMove:
    "Adding the coconut milk only after the rice is fully cooked — never at the start — keeps the milk from breaking and lets it bind the grains into the signature sliceable slab.",
  notes: "Made on the first morning of each month and at Sinhala/Tamil New Year to mark a fresh start.",
  tags: ["sri-lankan", "rice", "coconut", "celebration"],
  sources: [
    {
      title: "Hungry Lankan — Kiribath (Sri Lankan Milk Rice)",
      url: "https://www.hungrylankan.com/recipes/kiribath-sri-lankan-milk-rice/",
      note: "Cook rice in water first, fold in thick coconut milk after, press and cut into diamonds; new-month/New-Year custom and lunu miris pairing",
    },
  ],
};
