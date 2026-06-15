import type { Recipe } from "../types";

export const yellowRiceSl: Recipe = {
  slug: "yellow-rice-sl",
  title: "Kaha Bath (Yellow Rice)",
  cuisine: "sri-lankan",
  blurb:
    "Coconut-milk rice stained gold with turmeric and perfumed with pandan, cinnamon and cloves — the festive rice that turns any curry into a celebration.",
  servings: 4,
  perServing: { calories: 540, protein: 11 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "basmati or samba rice, rinsed", qty: "2 cups", cost: 1.1 },
    { item: "thick coconut milk (pol kiri)", qty: "1 1/2 cups", cost: 1.0 },
    { item: "onion, finely sliced", qty: "1", cost: 0.3 },
    { item: "rampe (pandan), torn", qty: "1 piece", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "cinnamon stick", qty: "1 piece", cost: 0.1, spansWeeks: true },
    { item: "cardamom & cloves", qty: "3 each", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "3/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "ghee or coconut oil", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Melt the ghee and soften the onion with the torn rampe, curry leaves, cinnamon, cardamom and cloves until fragrant and just golden.",
    "Stir in the turmeric, then add the drained rice and toss until every grain is coated and glossy.",
    "Pour in the coconut milk plus enough water to come about an inch over the rice, season well with salt, and bring to a gentle boil.",
    "Cover tightly, drop to the lowest heat and steam 15–18 minutes until the liquid is absorbed and the rice is tender. Rest covered 5 minutes, then fluff, fishing out the whole spices.",
  ],
  modernMove:
    "Toasting the drained rice in the spiced ghee before any liquid goes in seals each grain so the coconut milk steams it fluffy instead of gluey — pilaf logic applied to a festive rice.",
  notes: "Serve with chicken curry, a fried-onion seeni sambol and a dab of lunu miris.",
  tags: ["sri-lankan", "rice", "coconut", "festive"],
  sources: [
    {
      title: "Joy of Eating the World — Kaha Bath (Sri Lankan Yellow Rice)",
      url: "https://www.joyofeatingtheworld.com/kaha-bath-sri-lankan-yellow-rice/",
      note: "Coconut-milk yellow rice tempered with pandan, curry leaf and whole spices; toast-then-steam method",
    },
  ],
};
