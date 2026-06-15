import type { Recipe } from "../types";

export const agedashiDofu: Recipe = {
  slug: "agedashi-dofu",
  title: "Agedashi Dofu",
  cuisine: "japanese",
  blurb:
    "Cornstarch-dusted tofu shallow-fried to a fragile crust, sitting in a warm dashi broth that soaks halfway up — soft, crisp, and savory at once.",
  servings: 2,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    {
      item: "block firm or medium tofu (momen)",
      qty: "1 (about 14 oz)",
      cost: 1.1,
    },
    {
      item: "potato starch or cornstarch, for dredging",
      qty: "1/3 cup",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "neutral oil, for shallow frying",
      qty: "1 cup",
      cost: 0.6,
      spansWeeks: true,
    },
    { item: "dashi (kombu-katsuo stock)", qty: "1 1/2 cups", cost: 0.4 },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mirin", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "daikon, finely grated", qty: "2 in piece", cost: 0.4 },
    { item: "fresh ginger, grated", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "scallion, sliced", qty: "1", cost: 0.1 },
  ],
  method: [
    "Press the tofu under a weighted plate for 20–30 minutes, then cut into eight squares. Dry the surfaces well — wet tofu won't crisp and will spit in the oil.",
    "Warm the dashi with the soy sauce and mirin to a bare simmer, taste, and keep it hot off to the side.",
    "Coat each piece in starch, shaking off the excess, and shallow-fry in oil at about 350°F, turning, until pale gold and crisp on all sides. Drain on a rack, not paper, so the crust stays.",
    "Stand the tofu in shallow bowls and ladle the hot broth around the base — never over the top — so the crust meets the broth halfway. Crown with a mound of grated daikon, a little ginger, and scallion.",
  ],
  modernMove:
    "Potato starch fries into a thinner, glassier shell than flour, and pouring the broth around rather than over keeps that shell intact for a few minutes — the contrast of crisp edge against silky interior in warm dashi is the entire dish.",
  notes:
    "Grated daikon (oroshi) cuts the fried richness and is traditional — don't skip it if you can get the radish.",
  tags: ["tofu", "soybean", "dashi", "shallow-fry", "brothy"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Agedashi Tofu",
      url: "https://www.justonecookbook.com/agedashi-tofu-2/",
      note: "Potato-starch coating, shallow-frying, and the dashi-soy-mirin broth.",
    },
  ],
};
