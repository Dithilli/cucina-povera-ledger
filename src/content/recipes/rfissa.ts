import type { Recipe } from "../types";

export const rfissa: Recipe = {
  slug: "rfissa",
  title: "Rfissa",
  cuisine: "moroccan",
  blurb:
    "The ultimate frugal feast — shredded day-old msemen or khobz heaped under lentils and chicken, then drenched in a fenugreek-and-ras-el-hanout broth that soaks the bread to tenderness.",
  servings: 6,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 1.95,
  roles: ["dinner"],
  ingredients: [
    { item: "day-old msemen or khobz, torn or shredded", qty: "1 lb", cost: 0.9 },
    { item: "chicken pieces (thighs/legs)", qty: "1 1/2 lb", cost: 3.0 },
    { item: "brown lentils, soaked", qty: "1 cup", cost: 0.8 },
    { item: "onions, sliced", qty: "3", cost: 0.8 },
    { item: "fenugreek seeds (helba), soaked", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    {
      item: "ras el hanout, turmeric, ginger, saffron, smen or oil",
      qty: "to taste",
      cost: 0.9,
      spansWeeks: true,
    },
    { item: "cilantro and parsley, tied in a bundle", qty: "1 bunch", cost: 0.5 },
    { item: "salt and pepper", qty: "to taste" },
  ],
  method: [
    "Marinate the chicken with the garlic, ras el hanout, turmeric, ginger, a pinch of saffron, salt, and pepper. Sear it in smen or oil in a deep pot, then add the sliced onions and let them soften and gild.",
    "Cover with water, tuck in the herb bundle and the soaked fenugreek seeds, and simmer 40 minutes until the chicken is nearly falling off the bone and the broth is deeply spiced.",
    "Add the soaked lentils and cook 25–30 minutes more until tender, with plenty of broth left; the onions should melt into the sauce. Taste and correct the seasoning.",
    "Steam the shredded msemen or bread briefly over the pot (or sprinkle with broth) until soft and warmed through, then mound it on a wide platter.",
    "Pile the chicken, lentils, and onions over the bread and ladle the fenugreek broth all over until the bread drinks it in. Serve communal-style, everyone eating from the platter.",
  ],
  modernMove:
    "Soaked fenugreek seeds are the soul of the broth — a little bitter, a little maple-sweet — and steaming the shredded bread over the pot lets it drink the spiced liquid without turning to mush, the trick that resurrects stale msemen into a celebration dish.",
  notes:
    "Traditionally made to nourish a new mother and served at family gatherings, rfissa is also pure cucina povera: it exists to use up day-old msemen and khobz. The lentils and fenugreek carry it even with less chicken.",
  zeroWasteHero: true,
  tags: ["moroccan", "bread", "lentils", "chicken", "stale-bread", "fenugreek"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Chicken Rfissa (Trid with Chicken and Lentils)",
      url: "https://tasteofmaroc.com/moroccan-chicken-rfissa/",
      note: "Ras-el-hanout and fenugreek broth over shredded msemen, lentils, and onions; communal serving.",
    },
  ],
};
