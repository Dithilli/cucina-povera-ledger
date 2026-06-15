import type { Recipe } from "../types";

export const salsaCriolla: Recipe = {
  slug: "salsa-criolla",
  title: "Salsa Criolla",
  cuisine: "andean",
  blurb:
    "Feather-thin red onion soured in lime and ají amarillo, brightened with cilantro — the sharp, raw relish that finishes nearly every Andean plate and turns plain rice or fries into a meal.",
  servings: 8,
  perServing: { calories: 35, protein: 1 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "red onion, sliced very thin (a la pluma)", qty: "2 large", cost: 0.6 },
    { item: "lime juice", qty: "3 tbsp (about 2 limes)", cost: 0.4 },
    { item: "ají amarillo, deseeded and finely sliced", qty: "1", cost: 0.25 },
    { item: "cilantro, chopped", qty: "1 small handful", cost: 0.25 },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Slice the onions a la pluma — into very thin half-moon feathers that keep the onion's curve. Salt them generously and let them sit 10 minutes.",
    "Rinse the onions under plenty of cold water and drain well; this rinse strips the raw bite and leaves them crisp and sweet.",
    "Toss the drained onion with the lime juice, thinly sliced ají amarillo, and a pinch of salt.",
    "Fold in the chopped cilantro and let it marinate 10 minutes before serving so the flavors marry but the onion stays crunchy.",
  ],
  modernMove:
    "Salt-then-rinse is what separates real salsa criolla from a raw onion pile: the salt draws out the harsh sulfur, the cold rinse leaves only crisp sweetness to carry the lime and ají.",
  notes:
    "The most important sauce in Peru — it crowns salchipapas, anticuchos, lentejas, and almost any fried or grilled plate. Best made fresh and eaten the same day.",
  zeroWasteHero: false,
  tags: ["salsa-criolla", "onion", "lime", "condiment", "base", "andean"],
  sources: [
    {
      title: "Azlin Bloor — Lin's Food: Peruvian Salsa Criolla",
      url: "https://www.linsfood.com/peruvian-salsa-criolla/",
      note: "Salt-and-rinse the feathered onion, then dress with lime, ají amarillo, and cilantro.",
    },
  ],
};
