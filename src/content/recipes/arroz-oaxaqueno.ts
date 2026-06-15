import type { Recipe } from "../types";

export const arrozOaxaqueno: Recipe = {
  slug: "arroz-oaxaqueno",
  title: "Arroz a la Oaxaqueña",
  cuisine: "oaxacan",
  blurb:
    "Toasted rice steamed with tomato, vegetables, and strips of grassy-hot chile de agua, then crowned with melting threads of quesillo pulled through the steam.",
  servings: 4,
  perServing: { calories: 480, protein: 12 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain white rice", qty: "1 1/2 cups", cost: 0.6 },
    { item: "chile de agua, roasted, peeled, in strips", qty: "2", cost: 0.8 },
    { item: "ripe tomato", qty: "2", cost: 0.6 },
    { item: "carrot and peas (or green beans), diced", qty: "1 cup", cost: 0.5 },
    { item: "quesillo (Oaxacan string cheese), pulled", qty: "1 cup", cost: 1.5, spansWeeks: true },
    { item: "onion and garlic", qty: "1/2 onion + 2 cloves", cost: 0.3, spansWeeks: true },
    { item: "oil, salt", qty: "as needed", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Rinse and drain the rice, then toast it in a little oil until it turns chalky-white and smells nutty.",
    "Blend the tomato with onion and garlic; pour the purée into the toasted rice and let it fry until it dries and darkens.",
    "Add the diced vegetables, strips of roasted chile de agua, salt, and just over two cups of hot water; bring to a boil.",
    "Cover and steam over low heat until the rice is tender and the liquid is gone, about 18 minutes; rest off the heat 5 minutes.",
    "Pull the quesillo into threads, scatter over the hot rice, and cover briefly so it melts into strings before serving.",
  ],
  modernMove:
    "Roast and peel the chile de agua first — its waxy skin turns bitter and tough if left on, and the brief char is what gives this rice its bright, grassy Oaxacan heat instead of generic spice.",
  notes:
    "Chile de agua is the Central Valleys' fresh chile, harvested in the rainy season; quesillo is Oaxaca's pulled string cheese. A whole frugal plate on its own.",
  zeroWasteHero: false,
  tags: ["arroz", "chile-de-agua", "quesillo", "oaxacan", "vegetarian", "dinner"],
  sources: [
    {
      title: "México Desconocido — Chile de agua: tradición e identidad culinaria de Oaxaca",
      url: "https://www.mexicodesconocido.com.mx/chile-de-agua-oaxaca.html",
      note: "roasting and peeling chile de agua; its role as the Valleys' rainy-season fresh chile",
    },
  ],
};
