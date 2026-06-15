import type { Recipe } from "../types";

export const habichuelasGuisadas: Recipe = {
  slug: "habichuelas-guisadas",
  title: "Habichuelas Guisadas",
  cuisine: "puerto-rican",
  blurb:
    "Pink beans stewed soft in a sofrito-and-tomato broth with chunks of calabaza that melt into the pot, ladled over white rice for the everyday boricua plate.",
  servings: 2,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked pink beans (habichuelas rosadas) with liquid", qty: "2 cups", cost: 0.6 },
    { item: "calabaza (or kabocha) squash, cubed", qty: "1 cup", cost: 0.4 },
    { item: "sofrito / recaíto", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato sauce", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "achiote oil, sazón, oregano, bay leaf", qty: "1 tbsp + to taste", cost: 0.2, spansWeeks: true },
    { item: "cooked white rice, to serve", qty: "2 cups", cost: 0.3 },
    { item: "salt, culantro", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sauté the sofrito in achiote oil until fragrant, 2–3 minutes.",
    "Stir in tomato sauce, sazón, oregano, and a bay leaf and let it bubble.",
    "Add the beans with their liquid, the cubed calabaza, and enough water to make a loose stew; bring to a boil.",
    "Lower and simmer covered 25–30 minutes, until the calabaza dissolves and thickens the broth.",
    "Taste for salt, finish with culantro, and ladle over white rice.",
  ],
  modernMove:
    "Let the calabaza overcook on purpose — as it falls apart it thickens the broth into a velvety gravy, so no flour or cornstarch is needed.",
  notes: "The squash both bulks the pot and bodies the sauce; rice and beans together make a cheap complete-protein dinner.",
  zeroWasteHero: false,
  tags: ["beans", "calabaza", "sofrito", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Sense & Edibility — Habichuelas Guisadas (Puerto Rican Stewed Beans)",
      url: "https://senseandedibility.com/habichuelas-guisadas-stewed-beans/",
      note: "Pink beans stewed with sofrito, tomato sauce, sazón, and calabaza, served over rice.",
    },
  ],
};
