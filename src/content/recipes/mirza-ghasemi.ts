import type { Recipe } from "../types";

export const mirzaGhasemi: Recipe = {
  slug: "mirza-ghasemi",
  title: "Mirza Ghasemi",
  cuisine: "persian",
  blurb:
    "A smoky Caspian dish of fire-charred eggplant cooked down with garlic and tomato, then loosened with beaten egg — northern Iran's frugal, deeply savory eggplant-and-egg dinner.",
  servings: 4,
  perServing: { calories: 450, protein: 16 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  ingredients: [
    { item: "eggplants", qty: "2 large (about 1.5 lb)", cost: 2.0 },
    { item: "tomatoes, grated or chopped", qty: "3 ripe", cost: 0.9 },
    { item: "garlic, lots, sliced", qty: "1 small head", cost: 0.4 },
    { item: "eggs", qty: "3", cost: 1.13 },
    {
      item: "tomato paste",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "turmeric, salt, black pepper",
      qty: "to taste",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "flatbread, to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "Char the whole eggplants directly over a gas flame (or under a broiler) until the skins blister and blacken and the flesh collapses — this smoke is the entire point of the dish. Cool, peel, and chop the smoky flesh.",
    "Fry the sliced garlic in oil with the turmeric until just golden, then add the grated tomato and tomato paste and cook down to a thick jammy base.",
    "Stir in the chopped charred eggplant; mash and cook 10–15 minutes until glossy and reduced, seasoning well.",
    "Push the mixture aside, scramble the eggs softly in the cleared space, then fold them through so they streak the eggplant. Serve hot with flatbread.",
  ],
  modernMove:
    "Charring the eggplant over open flame is non-negotiable — that smoke does the work an expensive ingredient would, turning eggplant, egg, and tomato into something that tastes grilled and luxurious.",
  notes:
    "From Gilan on the Caspian. Heavy on garlic by design. Some cooks fold the egg in fully; others leave it streaky — both are correct.",
  tags: ["eggplant", "eggs", "smoky", "tomato", "gilaki"],
  sources: [
    {
      title: "Persian Mama — Mirza Ghasemi",
      url: "https://persianmama.com/mirza-ghasemi-eggplant-tomato-dip/",
      note: "Gilan-style charred eggplant with garlic, tomato, and egg.",
    },
    {
      title: "The Caspian Chef (Omid Roustaei) — Mirza Ghasemi",
      url: "https://thecaspianchef.com/2019/03/smoked-eggplant-spread-with-poached-eggs/",
      note: "Confirms the Caspian/Gilaki origin and the smoke-over-flame technique.",
    },
  ],
};
