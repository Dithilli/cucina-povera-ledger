import type { Recipe } from "../types";

export const caldoVerdeBr: Recipe = {
  slug: "caldo-verde-br",
  title: "Caldo Verde",
  cuisine: "brazilian",
  blurb:
    "A silky potato broth gone pale-green with ribbons of finely shredded couve, studded with a little calabresa — the Portuguese soup Brazil adopted as its winter weeknight standby.",
  servings: 4,
  perServing: { calories: 360, protein: 13 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes, peeled and chopped", qty: "500 g", cost: 0.8 },
    { item: "couve (collard greens), sliced into fine ribbons", qty: "4 large leaves", cost: 0.5 },
    { item: "calabresa sausage, sliced", qty: "100 g", cost: 1.0 },
    { item: "onion, chopped", qty: "1", cost: 0.2 },
    { item: "garlic, olive oil, salt", qty: "to taste", cost: 0.25, spansWeeks: true },
  ],
  method: [
    "Simmer the potatoes with the onion in salted water until completely soft, then blend smooth so the soup itself is creamy without any cream.",
    "Brown the sliced calabresa in olive oil with the garlic until the fat renders, then tip sausage and oil into the blended base.",
    "Stack and roll the couve leaves and slice them as thinly as you can — the fine shred is the signature of caldo verde.",
    "Stir the greens into the simmering soup and cook just 3–5 minutes so they stay bright; finish each bowl with a thread of olive oil.",
  ],
  modernMove:
    "Blending the potatoes instead of mashing gives a velvety body that carries the greens — no flour, no cream needed.",
  notes: "A small amount of calabresa seasons the whole pot; the soup is mostly cheap potato and couve.",
  zeroWasteHero: false,
  tags: ["potato", "greens", "soup", "sausage", "brazilian"],
  sources: [
    {
      title: "Panelinha — Caldo Verde",
      url: "https://panelinha.com.br/receita/caldo-verde",
      note: "blended potato base with finely shredded couve and a little sausage",
    },
  ],
};
