import type { Recipe } from "../types";

export const arrozBlancoYHabichuelas: Recipe = {
  slug: "arroz-blanco-y-habichuelas",
  title: "Arroz Blanco y Habichuelas",
  cuisine: "puerto-rican",
  blurb:
    "Fluffy white rice beside pink beans stewed in sofrito, tomato and a tumble of soft calabaza — the everyday plate that Puerto Rican households eat several nights a week and the bedrock under every festive fritter.",
  servings: 2,
  perServing: { calories: 360, protein: 12 },
  estCostPerServing: 0.6,
  roles: ["base"],
  ingredients: [
    { item: "long-grain white rice", qty: "1 cup", cost: 0.35 },
    { item: "pink beans (habichuelas rosadas), cooked", qty: "1 1/2 cups", cost: 0.5 },
    { item: "sofrito (recaíto)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "tomato sauce", qty: "1/4 cup", cost: 0.2 },
    { item: "calabaza (or potato), diced", qty: "1/2 cup", cost: 0.25 },
    { item: "sazón con achiote + adobo", qty: "1/2 tsp each", cost: 0.05, spansWeeks: true },
    { item: "olives + olive oil", qty: "1 tbsp + 1 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Sauté the sofrito in olive oil, then stir in tomato sauce, sazón and adobo and let it fry a minute into a brick-red base.",
    "Add the beans with their liquid (or a splash of water), the diced calabaza and the olives, and simmer 15–20 minutes until the squash dissolves and the broth thickens.",
    "Meanwhile cook the white rice with a little salt and oil until fluffy and separate.",
    "Spoon the soupy beans alongside (or over) the rice — habichuelas guisadas next to arroz blanco, the daily plate.",
  ],
  modernMove:
    "Let the calabaza melt into the pot — it bodies the broth so the beans cling to the rice without any flour or thickener.",
  notes: "This is the constant foundation: the same beans and rice carry every week, and the fritters are the night's treat on top.",
  zeroWasteHero: false,
  tags: ["foundation", "habichuelas", "base", "puerto-rican"],
  sources: [
    {
      title: "Kitchen Gidget — Puerto Rican Rice and Beans (Habichuelas Guisadas)",
      url: "https://www.kitchengidget.com/2013/12/02/puerto-rican-rice-beans/",
      note: "pink beans stewed in sofrito, tomato sauce and calabaza, served with arroz blanco",
    },
  ],
};
