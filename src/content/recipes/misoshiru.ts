import type { Recipe } from "../types";

export const misoshiru: Recipe = {
  slug: "misoshiru",
  title: "Misoshiru (Miso Soup with Tofu & Wakame)",
  cuisine: "japanese",
  blurb:
    "The everyday bowl that anchors a Japanese dinner: warm dashi clouded with miso, holding soft cubes of tofu and ribbons of wakame seaweed that unfurl when they hit the broth. It is finished in minutes from a pot of stock you already have, costs almost nothing, and is the warm, savory frame around the rice — eaten as part of the meal, not as a course on its own.",
  servings: 4,
  perServing: { calories: 90, protein: 7 },
  estCostPerServing: 0.45,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "dashi (kombu-katsuobushi stock)", qty: "4 cups", cost: 0.6 },
    { item: "miso (white, red, or a blend)", qty: "3 to 4 tbsp", cost: 0.6, spansWeeks: true },
    { item: "soft or silken tofu, cubed", qty: "7 oz (half a block)", cost: 0.7 },
    { item: "dried wakame", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "scallion, thinly sliced, to finish", qty: "1", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Soak the dried wakame in a small bowl of cold water for 5 minutes; it will swell to several times its size. Drain and, if the pieces are large, cut them into bite-size ribbons.",
    "Warm the dashi in a pot to a gentle simmer — not a rolling boil. Slip in the tofu cubes and the wakame and let them heat through, about a minute, handling the tofu gently so it stays whole.",
    "Lower the heat so the broth is barely steaming. Put the miso in a small ladle or sieve held in the pot and stir it with chopsticks or a spoon to dissolve it smoothly into the broth, rather than dumping it in as a lump.",
    "Do not let the soup boil once the miso is in. Boiling drives off miso's delicate aroma and can curdle it — the soup should be hot and fragrant, never bubbling hard.",
    "Ladle into bowls and scatter sliced scallion over the top. Serve at once alongside rice and a pickle.",
  ],
  modernMove:
    "Adding the miso off the boil is the one rule that matters: miso is alive and aromatic, and a hard simmer flattens it into something dull and salty. Dissolving it gently at the end keeps the soup round, fragrant, and faintly sweet.",
  notes:
    "Misoshiru is endlessly thrifty — it's the natural home for odds and ends: a few greens, a handful of mushrooms, the soft end of a daikon, yesterday's tofu. Keep a tub of miso and a bag of wakame and you can build a bowl from a cup of dashi any night. Don't reboil leftovers hard; rewarm gently.",
  zeroWasteHero: false,
  tags: ["dinner", "side", "soup", "miso", "tofu", "wakame", "washoku", "quick"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Homemade Miso Soup",
      url: "https://www.justonecookbook.com/homemade-miso-soup/",
      note: "Dashi base with tofu and wakame; dissolving miso off the boil to keep its aroma.",
    },
  ],
};
