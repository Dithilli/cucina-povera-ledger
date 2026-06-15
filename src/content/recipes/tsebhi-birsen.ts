import type { Recipe } from "../types";

export const tsebhiBirsen: Recipe = {
  slug: "tsebhi-birsen",
  title: "Tsebhi Birsen (Eritrean Red-Lentil Stew)",
  cuisine: "ethiopian",
  blurb:
    "Eritrea's red-lentil stew — the same brick-red, berbere-deep misir wot, with a Red-Sea accent. The shared pot of two neighboring countries, proof the border is political, not culinary.",
  servings: 4,
  perServing: { calories: 310, protein: 16 },
  estCostPerServing: 0.65,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "split red lentils (birsen)", qty: "1 1/2 cups", cost: 1.2 },
    { item: "onion, finely chopped", qty: "2", cost: 0.8 },
    { item: "berbere", qty: "2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "tomato, chopped (or paste)", qty: "1", cost: 0.3 },
    { item: "garlic + ginger", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sweat the onions long and low until jammy and deeply softened — the Eritrean version often takes this onion base even further, almost to a paste.",
    "Add the oil and bloom the berbere, then the garlic, ginger, and tomato; cook to a thick, dark sofrito.",
    "Add the rinsed red lentils and hot water to cover. Simmer, stirring, until the lentils dissolve into a silky stew, 25–35 minutes.",
    "Loosen with hot water, salt to taste, and serve over injera (called 'taita' in Eritrea).",
  ],
  modernMove:
    "The technique is identical to misir wot — long onion sweat, bloomed berbere — so this is a lesson in how a single dish belongs to two cuisines. Push the onion base a shade further for the slightly deeper, sweeter Eritrean profile.",
  notes:
    "Eritrean and Ethiopian Orthodox families share the fasting calendar and the legume table; 'tsebhi' simply means stew. The same flatbread (injera/taita) sits under both.",
  tags: ["wot", "lentils", "eritrean", "berbere", "dinner"],
  sources: [
    { title: "Urban Farmie — Misir Wot (Ethiopian and Eritrean Red Lentil Stew)", url: "https://urbanfarmie.com/misir-wot/", note: "Explicitly the shared Ethiopian and Eritrean berbere red-lentil stew — the same pot as tsebhi birsen." },
    { title: "Kimberly Killebrew — The Daring Gourmet", url: "https://www.daringgourmet.com/misir-wat-ethiopian-spiced-red-lentils/", note: "The berbere red-lentil stew technique that tsebhi birsen shares." },
  ],
};
