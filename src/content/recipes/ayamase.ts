import type { Recipe } from "../types";

export const ayamase: Recipe = {
  slug: "ayamase",
  title: "Ayamase (Green Pepper Ofada Stew)",
  cuisine: "west-african",
  blurb:
    "The fierce green 'designer stew' — green bell peppers and scotch bonnets blended and fried in bleached palm oil until it goes dark and smoky, studded with whatever offal or fish you can stretch. Served with starchy ofada rice.",
  servings: 6,
  perServing: { calories: 580, protein: 24 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "green bell peppers, seeded", qty: "4", cost: 2.4 },
    { item: "green scotch bonnet peppers (to taste)", qty: "2–4", cost: 0.6, spansWeeks: true },
    { item: "onions (one for the blend, one sliced)", qty: "2", cost: 0.6 },
    { item: "red palm oil to bleach", qty: "1/2 cup", cost: 0.9, spansWeeks: true },
    { item: "assorted meat or offal (or mackerel), in pieces", qty: "1 lb", cost: 3.0 },
    { item: "locust beans (iru)", qty: "2 tbsp", cost: 0.6, spansWeeks: true },
    { item: "ground crayfish", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "stock cube / bouillon", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "boiled eggs, optional", qty: "4", cost: 0.8 },
    { item: "ofada or short-grain rice, to serve", qty: "2 cups dry", cost: 1.2 },
  ],
  method: [
    "Blend the green peppers, scotch bonnets and one onion coarse, then boil the purée down in a dry pot until much of the water leaves — green ayamase must be properly de-watered or the bleached-oil fry won't take.",
    "Bleach the palm oil: heat it alone in a well-ventilated kitchen until it loses its red and turns pale and smoky, then cool slightly. This bleaching is the signature — it gives ayamase its dark, almost charred backbone.",
    "Season and simmer the meat or fish with sliced onion and a stock cube until tender, reserving the stock.",
    "Sweat the second onion in the bleached oil, add the locust beans and crayfish, then tip in the reduced green base and fry it down hard until the oil splits and the colour darkens — 20 minutes.",
    "Loosen with the reserved stock, fold in the meat and the peeled boiled eggs, and simmer 10 minutes. Serve over ofada rice.",
  ],
  modernMove:
    "Bleaching the palm oil first is what separates ayamase from any other pepper stew — driving off the red carotene gives a smoky, savoury depth you can't get from raw oil. De-watering the green blend before the fry is the partner trick.",
  notes:
    "An Egba/Ijebu classic, traditionally rich with offal — but a little mackerel and a few eggs stretch the pot just as well on a budget.",
  tags: ["pepper-stew", "green-pepper", "ofada", "bleached-palm-oil", "iru", "rice"],
  sources: [
    {
      title: "Sisi Jemimah — Ayamase (Ofada Stew)",
      url: "https://sisijemimah.com/2015/08/04/ayamase-ofada-stew/",
      note: "Bleaching the palm oil and frying the de-watered green pepper base with locust beans (iru).",
    },
  ],
};
