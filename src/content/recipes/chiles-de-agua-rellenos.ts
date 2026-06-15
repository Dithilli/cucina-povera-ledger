import type { Recipe } from "../types";

export const chilesDeAguaRellenos: Recipe = {
  slug: "chiles-de-agua-rellenos",
  title: "Chiles de Agua Rellenos",
  cuisine: "oaxacan",
  blurb:
    "The Central Valleys' own green chile — roasted, peeled, stuffed with stringy quesillo and epazote, jacketed in cloud-light egg batter and fried until it sighs cheese.",
  servings: 4,
  perServing: { calories: 480, protein: 19 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "chiles de agua (or fresh poblanos)", qty: "8", cost: 1.6 },
    { item: "quesillo (Oaxaca cheese)", qty: "1 1/2 cups", cost: 1.8, spansWeeks: true },
    { item: "epazote leaves", qty: "small handful", cost: 0.1 },
    { item: "eggs, separated", qty: "4", cost: 0.7 },
    { item: "flour for dusting", qty: "1/4 cup", cost: 0.1, spansWeeks: true },
    { item: "oil for frying", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Roast the chiles directly over flame until blistered all over, sweat them in a covered bowl, then peel; slit each one and carefully remove seeds and veins, keeping the stem.",
    "Stuff each chile with pulled quesillo and a leaf or two of epazote, then press closed and dust lightly in flour.",
    "Beat the egg whites to stiff peaks, fold the salted yolks back in, and coat each chile in the airy batter.",
    "Fry in hot oil, spooning fat over the top, until the jacket is puffed and golden; drain and serve at once while the cheese is still molten.",
  ],
  modernMove:
    "Beating the whites to firm peaks before folding the yolks back gives the famous soufflé-light jacket — flatten that egg and you get a greasy pancake instead of the lacquered shell.",
  notes:
    "Serve over a pool of the table salsa or warm frijoles so nothing is dry; even the roasting skins can flavor a pot of beans rather than going to the bin.",
  zeroWasteHero: false,
  tags: ["oaxacan", "antojito", "chile-de-agua", "quesillo", "fiesta", "dinner"],
  sources: [
    {
      title: "México Desconocido — Receta de chiles rellenos de quesillo",
      url: "https://www.mexicodesconocido.com.mx/chiles-rellenos-de-quesillo.html",
      note: "roasting and peeling the chile, quesillo-and-epazote filling, and the beaten-egg jacket",
    },
  ],
};
