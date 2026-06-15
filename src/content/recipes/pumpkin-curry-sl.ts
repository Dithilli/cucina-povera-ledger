import type { Recipe } from "../types";

export const pumpkinCurrySl: Recipe = {
  slug: "pumpkin-curry-sl",
  title: "Wattakka (Pumpkin Curry)",
  cuisine: "sri-lankan",
  blurb:
    "Soft wedges of pumpkin in a thick, nutty gravy built on dark-roasted scraped coconut and toasted rice — the smoky 'kalu pol' curry that turns a cheap squash into something deep and savory.",
  servings: 4,
  perServing: { calories: 470, protein: 12 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "pumpkin or kabocha, skin on, in chunks", qty: "1 1/2 lb", cost: 1.2 },
    { item: "thin coconut milk", qty: "1 1/2 cups", cost: 0.6 },
    { item: "grated coconut (for dry roasting)", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "raw rice (for dry roasting)", qty: "1 tbsp", cost: 0.05 },
    { item: "onion, sliced", qty: "1 small", cost: 0.25 },
    { item: "garlic", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chili, slit", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "rampe (pandan) and curry leaves", qty: "1 strip + 1 sprig", cost: 0.15, spansWeeks: true },
    { item: "roasted curry powder (thuna paha)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "mustard seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "In a dry pan over medium heat, toast the grated coconut with the raw rice, mustard, and fenugreek, stirring constantly, until everything is a deep chestnut brown and smoky. Grind to a coarse paste with a splash of water.",
    "Simmer the pumpkin chunks with the thin coconut milk, onion, garlic, green chili, rampe, curry leaves, turmeric, roasted curry powder, and salt until just fork-tender, 12–15 minutes.",
    "Stir the dark roasted-coconut paste into the pot and simmer another 8–10 minutes until the gravy thickens and turns glossy and nutty.",
    "Mash a few pieces of pumpkin against the side of the pan to body the sauce. Taste for salt and serve with rice.",
  ],
  modernMove:
    "Take the coconut and rice to a real dark roast — that 'kalu pol' (black coconut) char is the whole flavor, giving an almost coffee-like depth no spice powder can fake.",
  notes:
    "Leave the skin on if the squash is young; it softens and holds the wedges together. Kabocha is the easiest pumpkin substitute outside Sri Lanka.",
  zeroWasteHero: false,
  tags: ["rice-and-curry", "sri-lankan", "pumpkin", "roasted-coconut", "vegetable"],
  sources: [
    {
      title: "Jeeva Arulampalam — Island Smile",
      url: "https://www.islandsmile.org/pumpkin-curry-in-roasted-coconut/",
      note: "Wattakka in roasted coconut — dark-toasted scraped coconut and rice ground into the gravy for a smoky, thick curry",
    },
  ],
};
