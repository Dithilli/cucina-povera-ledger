import type { Recipe } from "../types";

export const braisedPorkBellyCt: Recipe = {
  slug: "braised-pork-belly-ct",
  title: "Soy-Braised Pork Belly with Taro",
  cuisine: "cantonese",
  blurb:
    "The festive wu gok kau yuk made plain and frugal: pork belly and slabs of taro red-braised in soy, rock sugar, and fermented bean curd until the meat is meltingly soft and the starchy taro drinks up the dark, fragrant sauce.",
  servings: 5,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 2.2,
  roles: ["dinner"],
  ingredients: [
    { item: "pork belly, skin on", qty: "1 1/2 lb", cost: 6.5 },
    { item: "taro root, peeled and cut in 1/2-inch slabs", qty: "1 lb", cost: 1.6 },
    { item: "red fermented bean curd (nam yu), mashed", qty: "2 cubes", cost: 0.3, spansWeeks: true },
    { item: "light soy sauce", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "dark soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oyster sauce", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "rock sugar", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "Shaoxing wine", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "five-spice powder", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "garlic, smashed", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "ginger, sliced", qty: "3 slices", cost: 0.15, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Blanch the whole piece of belly in boiling water 5 minutes to firm it and rinse off scum, then pat very dry and cut into thick 1/2-inch slices.",
    "Shallow-fry the taro slabs in the oil until golden on both sides; lift out. In the same pan, render the belly skin-side down until lightly browned and a slick of fat releases.",
    "Add garlic and ginger, then stir in the mashed nam yu, both soys, oyster sauce, rock sugar, Shaoxing, and five-spice until it foams and smells fragrant and the sugar dissolves.",
    "Pour in water just to cover, bring to a boil, then drop to a bare simmer, cover, and braise 60 minutes until the belly is fork-tender.",
    "Slide in the fried taro and braise uncovered 15–20 minutes more, until the taro is creamy-soft and the sauce reduces to a glossy, clinging red-brown glaze. Serve over rice.",
  ],
  modernMove:
    "Frying the taro before it braises seals the surface so it absorbs sauce without dissolving — the slabs stay intact yet turn fudgy inside, the textural foil to the unctuous belly.",
  notes:
    "Nam yu (red fermented bean curd) is the Hakka signature here; it gives the braise its rosy color and savory funk. For the banquet version, the belly and taro are stacked, steamed in a bowl, and inverted (kau yuk) — this everyday braise skips that step.",
  zeroWasteHero: false,
  tags: ["pork-belly", "taro", "red-braise", "nam-yu", "cantonese", "hakka"],
  sources: [
    {
      title: "KP Kwan — Taste of Asian Food",
      url: "https://tasteasianfood.com/pork-belly-taro/",
      note: "Pork belly + taro red braise with fermented bean curd; fry taro before braising",
    },
  ],
};
