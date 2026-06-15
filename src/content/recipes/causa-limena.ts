import type { Recipe } from "../types";

export const causaLimena: Recipe = {
  slug: "causa-limena",
  title: "Causa Limeña",
  cuisine: "andean",
  blurb:
    "Lima's chilled potato terrine — smooth yellow mash whipped bright with lime and ají amarillo, layered around a creamy tuna or chicken salad and cool avocado, then sliced like a savory cake.",
  servings: 4,
  perServing: { calories: 470, protein: 19 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "yellow/floury potatoes", qty: "1.5 lb", cost: 0.8 },
    { item: "ají amarillo paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "lime juice", qty: "3 tbsp", cost: 0.3 },
    { item: "canned tuna (or shredded cooked chicken)", qty: "1 can / 5 oz", cost: 1.0 },
    { item: "mayonnaise", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "red onion, finely diced", qty: "1/4", cost: 0.1 },
    { item: "avocado, sliced", qty: "1", cost: 0.8 },
    { item: "black olives, boiled egg, to garnish", qty: "to serve", cost: 0.7 },
    { item: "oil, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the potatoes whole in their skins until tender, peel while warm, and pass through a ricer or mash until completely smooth and lump-free.",
    "Beat the warm mash with the ají amarillo paste, lime juice, a little oil, and salt until it's a bright, pliable, almost dough-like purée; let it cool.",
    "Mix the drained tuna (or chicken) with mayonnaise, the finely diced red onion, a squeeze of lime, and salt.",
    "In a ring mould or lined loaf pan, press in a layer of potato, then the avocado slices, then the tuna salad, and finish with a last layer of potato; chill 30 minutes to set.",
    "Unmould, slice, and top with black olives and wedges of boiled egg.",
  ],
  modernMove:
    "Season the potato while it's still warm — it drinks in the lime and ají far better than cold mash — but assemble and serve it cold so the layers slice clean. Ricing, not mashing, is what gives causa its signature silk.",
  notes: "Born 'por la causa' during the wars of independence; a humble cold-potato dish that turns one can of tuna into a composed dinner.",
  zeroWasteHero: false,
  tags: ["potato", "aji-amarillo", "tuna", "avocado", "cold", "peruvian", "andean"],
  sources: [
    {
      title: "Cravings Journal — Peruvian Causa (by a Peruvian chef)",
      url: "https://cravingsjournal.com/peruvian-causa/",
      note: "Riced potato seasoned warm with lime and ají amarillo, layered with avocado and a mayo-bound filling.",
    },
  ],
};
