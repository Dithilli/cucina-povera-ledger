import type { Recipe } from "../types";

export const polRoti: Recipe = {
  slug: "pol-roti",
  title: "Pol Roti",
  cuisine: "sri-lankan",
  blurb:
    "A rustic coconut flatbread — flour and freshly scraped coconut pressed by hand and dry-griddled — torn warm and eaten with fiery lunu miris.",
  servings: 4,
  perServing: { calories: 480, protein: 11 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "wheat flour", qty: "2 cups", cost: 0.4 },
    { item: "freshly grated coconut (or rehydrated desiccated)", qty: "1 1/2 cups", cost: 0.6 },
    { item: "small onion, finely chopped", qty: "1", cost: 0.15 },
    { item: "green chili, finely chopped", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "curry leaves, chopped", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1 tsp" },
    { item: "warm water", qty: "about 3/4 cup" },
    { item: "—for the lunu miris—", qty: "" },
    { item: "dried red chili flakes", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "red onion, chopped", qty: "1 small", cost: 0.15 },
    { item: "Maldive fish flakes", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "lime", qty: "1/2", cost: 0.15 },
  ],
  method: [
    "Mix flour, grated coconut, onion, green chili, curry leaves and salt in a bowl. Add warm water a little at a time, working it into a soft, non-sticky dough.",
    "Divide into balls and pat each one flat with wet fingers into a thick round, about 1 cm — keep them rustic and uneven rather than rolling them thin.",
    "Dry-griddle on a hot tawa or skillet, no oil, a few minutes per side until brown freckles appear and the bread is cooked through but still soft.",
    "For the lunu miris, pound the chili flakes, onion, Maldive fish and a pinch of salt to a coarse paste, then sharpen with lime juice.",
    "Tear the warm roti and eat with a smear of the sambol.",
  ],
  modernMove:
    "The more coconut you work into the dough relative to flour, the milkier and more tender the roti — pol roti is really a vehicle for fresh coconut, not just flour.",
  notes:
    "Lunu miris keeps a day or two in the fridge; the leftover dough scraps re-griddle the next morning.",
  zeroWasteHero: false,
  tags: ["pol-roti", "roti", "coconut", "lunu-miris", "sri-lankan"],
  sources: [
    {
      title: "Island Smile — Sri Lankan Pol Roti (Coconut Roti)",
      url: "https://www.islandsmile.org/sri-lankan-coconut-roti-pol-roti/",
      note: "Coconut-to-flour ratio, hand-pressed shaping and the lunu miris pairing",
    },
  ],
};
