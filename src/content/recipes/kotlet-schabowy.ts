import type { Recipe } from "../types";

export const kotletSchabowyPl: Recipe = {
  slug: "kotlet-schabowy",
  title: "Kotlet Schabowy",
  cuisine: "polish",
  blurb:
    "A pork loin cutlet pounded thin, dragged through flour, egg, and breadcrumbs, and fried in shimmering fat until the crust shatters golden — the Sunday-dinner cutlet every Pole pictures first, set beside buttered potatoes and a cool, creamy mizeria.",
  servings: 4,
  perServing: { calories: 640, protein: 32 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "boneless pork loin (schab)", qty: "1 lb (4 cutlets)", cost: 4.0 },
    { item: "milk (to tenderize)", qty: "1 cup", cost: 0.3 },
    { item: "onion, sliced (for the milk soak)", qty: "1/2", cost: 0.15 },
    { item: "egg", qty: "2", cost: 0.5 },
    { item: "flour", qty: "1/2 cup", cost: 0.1, spansWeeks: true },
    { item: "fine dry breadcrumbs (bułka tarta)", qty: "1 cup", cost: 0.3, spansWeeks: true },
    { item: "lard (smalec) or neutral oil for frying", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "floury potatoes, to serve", qty: "1 1/2 lb", cost: 0.9 },
    { item: "butter (for the potatoes)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Slice the loin across the grain into four cutlets, lay each between sheets of plastic, and pound with the flat of a mallet to a scant 1/4 inch. Optionally soak the cutlets with the sliced onion in milk for a couple of hours, or overnight, in the fridge — it tenderizes and sweetens the meat. Pat dry and season both sides with salt and pepper.",
    "Set out three plates: flour, beaten egg, breadcrumbs. Dredge each cutlet in flour and shake off the excess, then egg, then press firmly into the crumbs so they coat every inch. Let the breaded cutlets sit 10 minutes so the crust sets.",
    "Boil the potatoes in salted water until tender, drain, and dress with the butter; keep warm.",
    "Heat a generous depth of lard in a wide skillet until a crumb sizzles on contact. Fry the cutlets in the fat, not crowding the pan, about 2–3 minutes a side, until deep golden and cooked through. Drain briefly on paper.",
    "Serve at once, crust crackling, with the buttered potatoes and a bowl of mizeria alongside.",
  ],
  modernMove:
    "The milk-and-onion soak is the quiet trick — an hour or two breaks down the lean loin so it stays juicy under the crust, where an unbrined cutlet pounded that thin goes dry. Fry in real lard if you can: it runs hotter and cleaner than oil and gives the crust its proper snap.",
  notes:
    "Fry the cutlets in enough fat that they half-float; a shallow film steams the crust instead of crisping it. Day-old cutlets reheat well in a dry oven and never the microwave, which sogs the breadcrumbs.",
  zeroWasteHero: false,
  tags: ["pork", "breaded", "polish"],
  sources: [
    {
      title: "Polonist — Kotlet Schabowy: Polish Pork Cutlet Recipe",
      url: "https://www.polonist.com/kotlet-schabowy-polish-pork-cutlet/",
      note: "Pounding the loin thin, the flour-egg-crumb breading, and frying in lard for the classic crust.",
    },
  ],
};
