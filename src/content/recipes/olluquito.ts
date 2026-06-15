import type { Recipe } from "../types";

export const olluquito: Recipe = {
  slug: "olluquito",
  title: "Olluquito",
  cuisine: "andean",
  blurb:
    "The crunchy, faintly sweet olluco tuber cut into matchsticks and quick-braised in an ají-amarillo aderezo with a little charqui (salt-dried beef) — a bright, almost stir-fried mountain dish where one native tuber and a scrap of cured meat carry the whole plate.",
  servings: 4,
  perServing: { calories: 470, protein: 18 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "olluco tuber, julienned", qty: "1.5 lb", cost: 3.0 },
    { item: "charqui (dried beef) or beef jerky, soaked and shredded", qty: "4 oz", cost: 2.0 },
    { item: "red onion, finely diced", qty: "1 medium", cost: 0.3 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "ají amarillo paste", qty: "2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "ají panca paste", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "ground cumin", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "white rice, to serve", qty: "to serve" },
  ],
  method: [
    "If using charqui, soak it to draw out the salt, then shred or chop fine. (Beef jerky or a little fresh beef stands in.)",
    "Build the aderezo: fry onion, garlic, both ajíes and the cumin in oil until soft, dark and fragrant.",
    "Add the charqui and let it sizzle in the base for a couple of minutes to bloom its dried, beefy flavor.",
    "Tip in the julienned olluco and toss to coat. Cover and braise over medium heat, stirring, just until the tuber is tender-crisp and has released a little of its natural slick — 12–15 minutes; don't overcook or it turns mushy.",
    "Season and serve hot over white rice or quinoa.",
  ],
  modernMove:
    "Cook the olluco only to tender-crisp and keep the heat brisk — it should hold a slight snap like a stir-fried vegetable, not collapse; that texture is the whole point of the dish.",
  notes:
    "A pre-Columbian pairing of two storage staples — the keeping tuber and salt-dried meat. The English word 'jerky' comes from the Quechua charqui. Make it meatless by leaning harder on the ají and a little cheese.",
  zeroWasteHero: false,
  tags: ["dinner", "tuber", "olluco", "charqui", "andean", "quick-braise"],
  sources: [
    {
      title: "Eat Peru — Olluco con Carne",
      url: "https://www.eatperu.com/olluco-con-carne/",
      note: "Julienned olluco quick-braised with charqui in an ají-amarillo aderezo, served over rice",
    },
  ],
};
