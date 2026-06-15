import type { Recipe } from "../types";

export const tasajoAsado: Recipe = {
  slug: "tasajo-asado",
  title: "Tasajo Asado con Frijoles",
  cuisine: "oaxacan",
  blurb:
    "Paper-thin salt-cured beef seared fast and smoky over the comal, served with a pot of brothy black beans, threads of quesillo, and a stack of hot tortillas — the Oaxacan market grill at home.",
  servings: 4,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "beef (flank or top round), pounded paper-thin", qty: "1 lb", cost: 5.0 },
    { item: "coarse salt", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "cooked black beans, with broth", qty: "3 cups", cost: 0.7 },
    { item: "avocado leaf or epazote (for the beans)", qty: "2 leaves", cost: 0.2, spansWeeks: true },
    { item: "quesillo (Oaxacan string cheese), pulled", qty: "1/2 cup", cost: 0.8, spansWeeks: true },
    { item: "corn tortillas, warmed", qty: "12", cost: 0.8 },
    { item: "onion and lime, to serve", qty: "1/2 onion + 1 lime", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Pound the beef between sheets until it's nearly translucent, salt it well on both sides, and let it cure 20–30 minutes — this is what makes it tasajo, not just steak.",
    "Simmer the black beans with an avocado leaf or epazote until brothy and soft; keep warm.",
    "Get a comal or grill screaming hot and sear the thin beef just seconds a side until it catches dark smoky edges — do not overcook the thin sheets.",
    "Pile the tasajo onto plates with a ladle of brothy beans alongside.",
    "Pull quesillo over the hot beans so it strings, and serve with warm tortillas, raw onion, and lime.",
  ],
  modernMove:
    "Pound and salt-cure the beef ahead — the thin, salted sheet sears in seconds and catches the comal's char before it can toughen, which is the whole point of tasajo over a thick steak.",
  notes:
    "Tasajo is the salt-cured, air-dried beef of the Oaxaca markets, grilled to order beside the tlayuda stands. Frugal because a little thin beef goes far over a big pot of beans.",
  zeroWasteHero: false,
  tags: ["tasajo", "beef", "frijoles", "quesillo", "oaxacan", "dinner"],
  sources: [
    {
      title: "Pati Jinich — Tasajo",
      url: "https://patijinich.com/tasajo/",
      note: "pounding and salt-curing thin beef, fast comal sear, serving with black beans and tortillas",
    },
  ],
};
