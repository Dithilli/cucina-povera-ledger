import type { Recipe } from "../types";

export const ceebuYapp: Recipe = {
  slug: "ceebu-yapp",
  title: "Ceebu Yapp",
  cuisine: "senegalese",
  blurb:
    "The meat sibling of thiéboudienne: broken rice cooked in a deep onion-and-tomato beef sauce, the grains soaking up everything the slow-braised lamb or beef gives up.",
  servings: 4,
  perServing: { calories: 710, protein: 31 },
  estCostPerServing: 2.5,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (riz brisé)", qty: "2 cups", cost: 0.7 },
    { item: "beef or lamb chunks, bone-in", qty: "1 1/4 lb", cost: 3.4 },
    { item: "onions", qty: "3 large", cost: 0.9 },
    { item: "tomato paste", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "nététou (fermented locust bean)", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "garlic & black pepper, pounded", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "kaani / scotch bonnet", qty: "1", cost: 0.25, spansWeeks: true },
    { item: "stock cube (Maggi / Jumbo)", qty: "2", cost: 0.3, spansWeeks: true },
    { item: "neutral oil", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the bone-in meat hard in hot oil with pounded garlic and pepper, then lift it out, leaving the fond behind.",
    "Soften two of the onions in that oil, stir in tomato paste and crushed nététou, and fry the base down until dark and jammy.",
    "Return the meat, cover with water, add a stock cube and a whole kaani chili, and braise low until the meat is fork-tender and the sauce is rich and reduced.",
    "Lift out the meat, stir the broken rice into the sauce, and cook covered and undisturbed until the rice is tender and a crust catches beneath.",
    "Caramelize the last sliced onion soft and sweet; mound the rice, top with the meat and onions, and serve with the chili on the side.",
  ],
  modernMove:
    "Searing the meat first and cooking the rice directly in the braising liquid means every grain carries the beef — the same one-pot logic as thiéboudienne, swapped from fish to red meat.",
  notes:
    "A festive, heartier alternative to the fish thiéboudienne, often cooked for guests; cheaper cuts with bone give the sauce the most body.",
  zeroWasteHero: false,
  tags: ["rice", "beef", "lamb", "one-pot", "senegalese"],
  sources: [
    {
      title: "Immaculate Bites — Thieboudienne / Ceebu Jen base method",
      url: "https://www.africanbites.com/thieboudienne-ceebu-jen-poisson-au-riz/",
      note: "The onion-tomato-nététou base and cooking broken rice in the braising liquid, adapted to meat.",
    },
  ],
};
