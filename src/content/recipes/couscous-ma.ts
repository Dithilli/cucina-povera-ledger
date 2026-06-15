import type { Recipe } from "../types";

export const couscousMa: Recipe = {
  slug: "couscous-ma",
  title: "Couscous bel Khodra",
  cuisine: "moroccan",
  blurb:
    "The sacred Friday couscous — fine grains steamed light and fluffy, mounded high and crowned with seven broth-soaked vegetables and chickpeas, the communal dish every Moroccan family gathers around.",
  servings: 4,
  perServing: { calories: 600, protein: 18 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "dry couscous", qty: "2 cups", cost: 0.8 },
    { item: "dried chickpeas, soaked", qty: "3/4 cup", cost: 0.5 },
    { item: "carrots, halved", qty: "2", cost: 0.3 },
    { item: "turnip, in wedges", qty: "1", cost: 0.3 },
    { item: "cabbage, in thick wedges", qty: "1/4 head", cost: 0.4 },
    { item: "pumpkin or squash, in chunks", qty: "1/2 lb", cost: 0.6 },
    { item: "zucchini, in batons", qty: "1", cost: 0.4 },
    { item: "onion, sliced", qty: "1 large", cost: 0.3 },
    { item: "turmeric, ginger, black pepper", qty: "1 tsp each", cost: 0.2, spansWeeks: true },
    { item: "smen or olive oil", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cilantro and parsley, tied", qty: "1 bunch", cost: 0.3 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Build the broth in the base of a couscoussier: onion, chickpeas, turmeric, ginger, pepper, the herb bunch, smen, and water. Simmer while you prepare the grain.",
    "Steam the couscous over the rising broth steam, then turn it out, rake in a little salted water and oil with your fingers, and re-steam — repeat two or three times until the grains are separate, swollen, and silky.",
    "Add the vegetables to the broth in order of toughness — carrots and turnip first, then squash and cabbage, zucchini last — cooking each just to tender.",
    "Mound the couscous on a wide platter, hollow the center, pile in the vegetables and chickpeas, and ladle broth over the top. Serve communally with extra broth on the side.",
  ],
  modernMove:
    "Steaming the couscous in stages over the broth rather than boiling it from a kettle is the whole difference between heavy, gummy grains and the light Friday-couscous texture.",
  notes:
    "This is the meatless everyday version; a little smen gives it depth where a wealthier table would add lamb. The vegetables and chickpeas make a full plate.",
  tags: ["couscous", "vegetable", "chickpeas", "friday-couscous", "moroccan"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Couscous with Seven Vegetables (Couscous Bidaoui)",
      url: "https://tasteofmaroc.com/moroccan-couscous-with-seven-vegetables/",
      note: "Multi-step steaming of couscous over a vegetable-and-chickpea broth, Friday-couscous style",
    },
  ],
};
