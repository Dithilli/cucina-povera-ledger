import type { Recipe } from "../types";

export const chileajo: Recipe = {
  slug: "chileajo",
  title: "Chileajo de Verduras",
  cuisine: "oaxacan",
  blurb:
    "Crisp-tender potatoes, cauliflower, and green beans bathed in a tangy, garlicky guajillo-and-spice sauce — Oaxaca's vinegary chile-garlic vegetable dish, piled on a fried tostada or eaten with tortillas.",
  servings: 4,
  perServing: { calories: 400, protein: 10 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "guajillo chiles, toasted and soaked", qty: "6", cost: 1.0, spansWeeks: true },
    { item: "potatoes, cauliflower, green beans, carrots (mixed)", qty: "5 cups diced", cost: 2.0 },
    { item: "garlic cloves", qty: "6", cost: 0.2, spansWeeks: true },
    { item: "cider vinegar", qty: "1/4 cup", cost: 0.15, spansWeeks: true },
    { item: "allspice, clove, peppercorn, cinnamon, oregano, thyme", qty: "1 tsp blend", cost: 0.1, spansWeeks: true },
    { item: "corn tostadas or tortillas", qty: "8", cost: 0.8 },
    { item: "oil, salt", qty: "as needed", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Toast the guajillos lightly in oil, then soak in hot water until soft, reserving the soaking water.",
    "Boil or steam the mixed vegetables in salted water until tender but still firm, then shock in cold water so they stay bright and crisp.",
    "Blend the soaked chiles with garlic, the warm spices, oregano, thyme, vinegar, salt, and enough soaking water to make a smooth, pourable sauce.",
    "Fry the sauce in a little oil for a few minutes until it darkens and loses its raw edge.",
    "Fold the cooked vegetables through the warm sauce to coat, then pile onto crisp tostadas or fold into tortillas.",
  ],
  modernMove:
    "Shock the vegetables in cold water the instant they're tender — chileajo is about a vinegary sauce gripping crisp, distinct vegetables, not a soft stew, so the cold plunge keeps every piece firm and bright.",
  notes:
    "A Oaxacan street staple — chileajo means 'chile-garlic.' Often spooned onto tostadas or sandwiched in a telera as a torta. Vinegar makes it keep.",
  zeroWasteHero: false,
  tags: ["chileajo", "vegetables", "guajillo", "oaxacan", "vegetarian", "dinner"],
  sources: [
    {
      title: "Christopher Kimball's Milk Street — Oaxacan-Style Vegetables in Chili-Garlic Sauce",
      url: "https://www.177milkstreet.com/recipes/oaxacan-style-vegetables-chili-garlic-sauce",
      note: "toasted guajillo-garlic-spice sauce, crisp-tender vegetables shocked cold, tostada serving",
    },
  ],
};
