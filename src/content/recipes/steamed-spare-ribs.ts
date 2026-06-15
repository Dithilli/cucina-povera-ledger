import type { Recipe } from "../types";

export const steamedSpareRibs: Recipe = {
  slug: "steamed-spare-ribs",
  title: "Steamed Spare Ribs with Black Bean",
  cuisine: "cantonese",
  blurb:
    "Bite-size rib pieces marinated with smashed fermented black beans and garlic, steamed until the meat slips off the little bones into a funky, savory, garlicky sauce — the dim sum classic, made at home over rice.",
  servings: 4,
  perServing: { calories: 460, protein: 25 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "pork spare ribs, cut into 1-inch pieces", qty: "1 lb", cost: 4.0 },
    { item: "fermented black beans (douchi), rinsed", qty: "1 1/2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.15, spansWeeks: true },
    { item: "ginger, minced", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oyster sauce", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "cornstarch", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "white pepper", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "peanut oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "fresh red chili, sliced (optional)", qty: "1", cost: 0.15 },
    { item: "steamed jasmine rice, to serve", qty: "4 bowls", cost: 0.4 },
  ],
  method: [
    "Rinse the rib pieces and soak in cold water 10–15 minutes to draw out the blood and bone bits; drain and pat very dry.",
    "Lightly smash the rinsed black beans with the garlic and ginger so they release their funk. Toss with the ribs, Shaoxing wine, soy, oyster sauce, sugar, white pepper, cornstarch, and oil. Marinate at least 30 minutes (overnight is better).",
    "Spread the ribs in a single layer on a heatproof plate with the marinade and scatter the chili over the top.",
    "Steam over rapidly boiling water 25–35 minutes until the meat is tender and pulls from the bone, topping up the water as needed. Serve in the bowl of garlicky black-bean sauce over rice.",
  ],
  modernMove:
    "Soaking the ribs first and then steaming low and slow — rather than boiling — keeps the sauce clear and concentrated, and the cornstarch in the marinade thickens the rendered juices into a glaze that clings to each piece and soaks the rice beneath.",
  notes:
    "Ask the butcher to chop the ribs through the bone into bite pieces. Fermented black beans are salty — rinse them and go easy on extra salt. A pound of ribs steamed this way stretches comfortably over four bowls of rice.",
  zeroWasteHero: false,
  tags: ["pork", "ribs", "steamed", "black-bean", "dim-sum", "cantonese"],
  sources: [
    {
      title: "Maggie Zhu — Omnivore's Cookbook, Steamed Ribs in Black Bean Sauce",
      url: "https://omnivorescookbook.com/steamed-ribs-in-black-bean-sauce/",
      note: "Soaking the chopped ribs, smashing fermented black beans with garlic and ginger, and the cornstarch-marinade steam.",
    },
  ],
};
