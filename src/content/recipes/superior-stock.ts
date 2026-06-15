import type { Recipe } from "../types";

export const superiorStock: Recipe = {
  slug: "superior-stock",
  title: "Superior Stock (Seung Tong)",
  cuisine: "cantonese",
  blurb:
    "The master broth that hides inside half of Cantonese cooking — pork and chicken bones blanched clean, then drawn for hours with ginger and scallion into a stock that is pale, fragrant, and deeply savory without a drop of fat clouding it. It is what makes soups, braises, and stuffed-tofu broth taste of more than water.",
  servings: 10,
  perServing: { calories: 35, protein: 4 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "pork bones (neck or leg)", qty: "1 1/2 lb", cost: 1.5 },
    { item: "chicken carcass or backs", qty: "1 1/2 lb", cost: 1.2 },
    { item: "fresh ginger, smashed", qty: "4 coins", cost: 0.1, spansWeeks: true },
    { item: "scallions, knotted", qty: "3", cost: 0.3 },
    { item: "Shaoxing wine", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "white peppercorns", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "cold water", qty: "about 4 quarts" },
  ],
  method: [
    "Cover the pork and chicken bones with cold water, bring to a hard boil, and let it boil a few minutes until grey scum and foam rise. Tip the bones into a colander and rinse them clean under running water, scrubbing off any clinging scum — this blanch is the whole secret to a clear, clean stock.",
    "Return the rinsed bones to a clean pot, add fresh cold water to cover by an inch, and bring slowly toward a simmer with the ginger, scallion, Shaoxing wine, and white peppercorns.",
    "Once it simmers, drop the heat so the surface barely trembles and cook gently, uncovered, 3 to 4 hours, topping up with hot water if needed and skimming any stray foam. A bare simmer keeps the broth from emulsifying the fat and going cloudy.",
    "Strain through a fine sieve and discard the spent solids. Cool and chill; lift off the cap of fat once set — save it, it is good cooking fat — and you're left with a clean, faintly jellied superior stock.",
  ],
  modernMove:
    "Blanch-and-rinse, then a low tremble rather than a rolling boil — these two restraints are what separate a clear, restaurant-grade seung tong from a murky home stock, and they cost nothing but attention.",
  notes:
    "Use it anywhere a recipe wants stock: yong tau foo broth, claypot braises, blanched greens, congee, noodle soup. Keeps 4 days refrigerated and freezes well in jars or cubes; the skimmed fat is a thrifty cooking oil.",
  zeroWasteHero: true,
  tags: ["base", "stock", "cantonese", "pork", "chicken", "broth"],
  sources: [
    {
      title: "Chinese Food & Other Stuff — Superior Stock (Seung Tong)",
      url: "https://chinesefoodandotherstuff.com/blog/2020/3/7/superior-stock-seung-tong",
      note: "Blanching the pork and chicken bones, then the long gentle simmer with ginger and scallion for a clear stock.",
    },
  ],
};
