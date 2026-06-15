import type { Recipe } from "../types";

export const dibi: Recipe = {
  slug: "dibi",
  title: "Dibi",
  cuisine: "senegalese",
  blurb:
    "Charcoal-grilled mutton, smoky and just-pink, heaped over raw onions slicked with mustard — the open-air dibiterie supper eaten with bare hands and bread.",
  servings: 4,
  perServing: { calories: 560, protein: 27 },
  estCostPerServing: 2.2,
  roles: ["dinner"],
  ingredients: [
    { item: "mutton or lamb, bone-in pieces", qty: "1.25 lb", cost: 5.5 },
    { item: "onions, sliced into rings", qty: "3 medium", cost: 0.7 },
    { item: "Dijon or yellow mustard", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "garlic, grated", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "maggi cube", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "kaani (scotch bonnet), to taste", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "lemon", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "baguette, to serve", qty: "1", cost: 0.6 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Rub the mutton with grated garlic, a crumbled maggi cube, 1 tbsp mustard, oil, salt, and pepper, and marinate at least 6 hours or overnight.",
    "Build a hot charcoal fire. Grill the mutton over the coals, turning, until the outside is charred and smoky and the meat is just cooked through and still juicy.",
    "Toss the raw onion rings with the remaining mustard, a squeeze of lemon, a little salt, and minced scotch bonnet to make the sharp, raw relish.",
    "Pile the grilled meat straight onto the mustardy onions so the residual heat half-wilts them.",
    "Serve on butcher paper with torn baguette — no plates, no forks; you eat dibi with your hands.",
  ],
  modernMove:
    "The mustard never cooks — raw Dijon tossed through raw onion is the cut that makes dibi: its sharp bite slices the richness of charred mutton fat the way nothing braised ever could.",
  notes:
    "Dibiteries display the meat on the bone to prove its freshness. A roaring charcoal fire matters more than the marinade; under a broiler, push the heat as high as it goes.",
  tags: ["mutton", "lamb", "grilled", "onion", "mustard", "street-food", "senegalese"],
  sources: [
    {
      title: "Dumplings and More — Senegalese Dibi, as in a Dibiterie",
      url: "https://dumplingsandmore.fr/en/post/senegalese-dibi-as-in-a-dibiterie-grilled-lamb-and-mustardy-onions/",
      note: "Charcoal-grilled marinated lamb with a raw mustard-and-onion relish, served with baguette, dibiterie-style.",
    },
  ],
};
