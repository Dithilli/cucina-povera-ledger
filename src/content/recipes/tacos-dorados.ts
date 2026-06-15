import type { Recipe } from "../types";

export const tacosDorados: Recipe = {
  slug: "tacos-dorados",
  title: "Tacos Dorados de Frijol",
  cuisine: "mexican",
  blurb:
    "Day-old tortillas rolled tight around refried beans and fried golden and crackling, then drowned in salsa verde, crema, and crumbled queso — the thriftiest possible way to make tired tortillas into dinner.",
  servings: 4,
  perServing: { calories: 420, protein: 13 },
  estCostPerServing: 0.65,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "corn tortillas (day-old are ideal)", qty: "12", cost: 0.8 },
    { item: "refried beans", qty: "1 1/2 cups", cost: 0.6 },
    { item: "salsa verde", qty: "1 cup", cost: 0.4 },
    { item: "Mexican crema", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "queso fresco, crumbled", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "shredded lettuce, onion", qty: "to garnish", cost: 0.3 },
    { item: "oil for frying", qty: "for the pan", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Warm the tortillas briefly (a few seconds in a dry pan or microwave) so they turn pliable enough to roll without cracking.",
    "Spread a line of refried beans across each, roll tightly into a cigar, and secure with a toothpick.",
    "Fry in a shallow pool of hot oil, turning once, until deep golden and crisp; drain on a rack so they stay crunchy, not greasy.",
    "Pull the toothpicks, arrange on a plate, and top with salsa verde, crema, queso fresco, lettuce, and onion. Eat immediately, while they still snap.",
  ],
  modernMove:
    "Reach for tortillas a day or two old, not fresh — they're drier, so they crisp faster and absorb less oil, frying into a sturdier, lighter shell. The dish is literally designed around using them up.",
  notes:
    "A pure use-up dish: stale tortillas plus a scrape of leftover beans become a crisp, satisfying dinner. Fry just before serving — they soften fast.",
  zeroWasteHero: true,
  tags: ["antojito", "beans", "fried", "zero-waste", "dinner"],
  sources: [
    {
      title: "Mamá Maggie's Kitchen — Bean Tacos Dorados (Tacos Dorados de Frijoles)",
      url: "https://inmamamaggieskitchen.com/bean-tacos-dorados-frijoles/",
      note: "Durango family method: thick bean filling, roll, toothpick, fry crisp",
    },
    {
      title: "Isabel Eats — Tacos Dorados",
      url: "https://www.isabeleats.com/tacos-dorados/",
      note: "rolling and shallow-frying corn tortillas golden; crema/cheese/lettuce finish",
    },
  ],
};
