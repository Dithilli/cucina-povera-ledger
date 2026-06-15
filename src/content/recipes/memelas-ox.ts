import type { Recipe } from "../types";

export const memelasOx: Recipe = {
  slug: "memelas-ox",
  title: "Memelas",
  cuisine: "oaxacan",
  blurb:
    "The everyday Oaxacan market supper: a thick oval of masa griddled on a clay comal, pinched into a low rim while it is still hot, then smeared with asiento, refried black beans, a pasilla-oaxaqueño salsa, and a snow of crumbled quesillo.",
  servings: 4,
  perServing: { calories: 440, protein: 16 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh masa (or masa harina)", qty: "2 cups", cost: 0.7 },
    { item: "asiento (unrendered pork-lard residue)", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "refried black beans (with hoja de aguacate)", qty: "1 1/2 cups", cost: 0.6 },
    { item: "salsa de pasilla oaxaqueño (or salsa roja)", qty: "3/4 cup", cost: 0.4 },
    { item: "quesillo (Oaxaca string cheese), shredded", qty: "1 cup", cost: 1.6, spansWeeks: true },
    { item: "white onion, chopped", qty: "1/2 small", cost: 0.1 },
    { item: "salt, warm water", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Knead the masa with salt and warm water to a smooth, supple dough and divide into thick balls.",
    "Press each ball into a fat oval, set it on a hot comal, and as the underside firms, pinch up a low rim all around with your fingertips so the top stays slightly hollow.",
    "Spread the center with asiento, then a layer of warm refried black beans.",
    "Spoon over the pasilla-oaxaqueño salsa, scatter shredded quesillo and raw onion, and leave on the comal until the cheese softens and the base is crisp underneath.",
  ],
  modernMove:
    "Pinch the rim while the masa is still pliable on the comal, not before — a memela set on a cold board flattens out; built and edged in the pan it holds a true lipped boat that traps the asiento and salsa instead of letting them run off.",
  notes:
    "Asiento — the smoky lard residue from rendering chicharrón — is the soul of a memela; without it you have a thick tortilla, with it you have Oaxaca.",
  zeroWasteHero: false,
  tags: ["masa", "oaxacan", "antojito", "frijoles", "dinner"],
  sources: [
    {
      title: "Masienda — How to Make Oaxacan Memelas",
      url: "https://masienda.com/blogs/learn/memelas",
      note: "thick pinched-rim masa oval with asiento, beans, salsa, and quesillo",
    },
  ],
};
