import type { Recipe } from "../types";

export const rizAuGras: Recipe = {
  slug: "riz-au-gras",
  title: "Riz au Gras",
  cuisine: "senegalese",
  blurb:
    "Senegalese 'fat rice': broken rice stained deep red and cooked straight in a rich tomato-and-meat sauce until every grain is glossed with the fat it cooked in.",
  servings: 4,
  perServing: { calories: 700, protein: 28 },
  estCostPerServing: 2.2,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (riz brisé)", qty: "2 cups", cost: 0.7 },
    { item: "beef or lamb chunks, bone-in", qty: "1 lb", cost: 2.7 },
    { item: "onions", qty: "2 large", cost: 0.6 },
    { item: "tomato paste", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "garlic & black pepper, pounded", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "nététou (fermented locust bean)", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "carrot & cabbage, chunked", qty: "2 cups", cost: 0.7 },
    { item: "kaani / scotch bonnet", qty: "1", cost: 0.25, spansWeeks: true },
    { item: "stock cube (Maggi / Jumbo)", qty: "2", cost: 0.3, spansWeeks: true },
    { item: "neutral oil", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Brown the bone-in meat in hot oil with pounded garlic and pepper, then lift it out.",
    "Soften the onions in the oil, add tomato paste and crushed nététou, and fry the base down slow until it darkens to a brick-red, fat-slicked paste.",
    "Return the meat, cover with water, add stock cubes and a whole kaani chili, and braise until the meat is tender and the sauce is concentrated and shining with fat.",
    "Add the carrot and cabbage, then stir in the broken rice and just enough liquid to cook it; cover and steam low until the rice is tender and stained red throughout.",
    "Fluff the fat rice, top with the meat and vegetables, and serve — the slick of oil clinging to each grain is the whole point of 'au gras.'",
  ],
  modernMove:
    "Cooking the rice in the reduced, fatty tomato braise (rather than separate water) is what coats every grain in red richness — the defining gloss of riz au gras.",
  notes:
    "A leaner-budget cousin of ceebu yapp built on the same tomato-meat sauce; the bone and fat from a cheap cut are exactly what gives the rice its richness.",
  zeroWasteHero: false,
  tags: ["rice", "tomato", "beef", "red-rice", "senegalese"],
  sources: [
    {
      title: "Honest Cooking — Senegalese Thieboudienne (tomato-meat rice base)",
      url: "https://honestcooking.com/senegalese-thieboudienne-rice/",
      note: "Frying the tomato-onion base and cooking broken rice directly in the reduced sauce.",
    },
  ],
};
