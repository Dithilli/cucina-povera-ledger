import type { Recipe } from "../types";

export const gefilteFish: Recipe = {
  slug: "gefilte-fish",
  title: "Gefilte Fish",
  cuisine: "ashkenazi",
  blurb:
    "Ground freshwater fish lightened with egg, onion, and a little matzo meal, poached as quenelles in a stock made from the heads, bones, and skin that jells to a trembling aspic — the whole fish, nothing wasted, with sharp horseradish alongside.",
  servings: 8,
  perServing: { calories: 260, protein: 22 },
  estCostPerServing: 1.2,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "freshwater fish (carp, pike, whitefish), filleted — keep heads, bones, skin", qty: "3 lb whole", cost: 7.0 },
    { item: "yellow onions", qty: "2 large", cost: 0.6 },
    { item: "eggs", qty: "3 large", cost: 0.5 },
    { item: "matzo meal", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "carrots", qty: "2", cost: 0.3 },
    { item: "sugar", qty: "1–2 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt and white pepper", qty: "to taste", spansWeeks: true },
    { item: "prepared horseradish (chrein), to serve", qty: "to serve", cost: 0.6 },
  ],
  method: [
    "Build the stock first: put the fish heads, bones, and skin in a wide pot with one sliced onion, the carrots, salt, pepper, and a pinch of sugar. Cover with water and simmer gently 30 minutes while you make the fish mixture.",
    "Grind or finely chop the fish fillets with the second onion until pasty. Work in the eggs, matzo meal, a splash of cold water, salt, white pepper, and the sugar, beating until light and fluffy — the more you beat in a little cold water, the tenderer the result.",
    "Wet your hands and shape the mixture into oval quenelles, about a palm each.",
    "Lower the quenelles into the gently simmering stock, cover, and poach very slowly 1 to 1 1/2 hours — barely a tremble, or they'll toughen. Add the carrot coins to cook alongside for the garnish.",
    "Cool the fish in the stock, then lift out and chill. As it cools the strained stock sets to a soft, savory aspic. Serve cold, each piece topped with a carrot coin and a clinging spoon of jellied stock, with chrein on the side.",
  ],
  modernMove:
    "Make the poaching stock from the bones and heads you'd otherwise throw out — that's where the body, flavor, and the signature jellied aspic come from. Then beat a little ice water into the fish mixture for an airy, tender quenelle rather than a dense fishcake.",
  notes:
    "Fish is pareve, so gefilte fish opens the Shabbos meal before the meat courses without breaking kosher law. The whole logic is thrift: expensive fish stretched with onion and matzo meal to feed a full table, and not a head, bone, or scrap of skin discarded — even the cooking liquid becomes the aspic. The pinch of sugar marks the Polish style; Litvak cooks left it out and leaned peppery.",
  zeroWasteHero: true,
  tags: ["fish", "gefilte", "shabbos", "pareve"],
};
