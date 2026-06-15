import type { Recipe } from "../types";

export const parippuDhalSl: Recipe = {
  slug: "parippu-dhal-sl",
  title: "Parippu (Sri Lankan Dhal Curry)",
  cuisine: "sri-lankan",
  blurb:
    "Red lentils melted into golden coconut milk and finished with a fierce mustard-and-chili tempering — the dish that anchors nearly every Sri Lankan plate of rice and curry.",
  servings: 4,
  perServing: { calories: 430, protein: 18 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "red lentils (masoor), rinsed until clear", qty: "1 cup", cost: 0.55 },
    { item: "thick coconut milk", qty: "1 cup", cost: 0.6 },
    { item: "onion, finely sliced", qty: "1 small", cost: 0.25 },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "rampe (pandan), torn knot", qty: "1 strip", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chilies, broken", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "black mustard seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "coconut oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Simmer the rinsed lentils with turmeric, the rampe knot, half the onion, garlic, and water to cover until collapsed and soft, 15–20 minutes, skimming the foam.",
    "Stir in the chopped tomato and the thick coconut milk and let it warm through on low heat for 6–8 minutes — never a hard boil, or the milk splits. Season with salt.",
    "For the temper (thel dala), heat the coconut oil and crackle the mustard seeds, then the remaining onion, the broken dried chilies, and the curry leaves until the onion is deep brown and fragrant.",
    "Pour the sizzling tempering over the dhal and fold it in. Serve with rice and a spoon of pol sambol.",
  ],
  modernMove:
    "Cook the lentils plain first and add the coconut milk only at the end on low heat — this keeps the gravy glossy and unsplit while the lentils still break down to a silky body.",
  notes:
    "A 'tempered' (thel dala) parippu like this is the everyday version; the milder 'kiri' style skips the dark fried onion. Either way it is the reliable protein floor of a rice-and-curry plate.",
  zeroWasteHero: true,
  tags: ["rice-and-curry", "sri-lankan", "dhal", "lentils", "vegetarian"],
  sources: [
    {
      title: "Dini Kodippili — The Flavor Bender",
      url: "https://www.theflavorbender.com/dhal-red-lentil-curry/",
      note: "Sri Lankan red lentil dhal — coconut milk added late on low heat, finished with a mustard-and-chili tempering",
    },
  ],
};
