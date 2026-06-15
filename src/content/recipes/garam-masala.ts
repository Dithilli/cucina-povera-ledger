import type { Recipe } from "../types";

export const garamMasala: Recipe = {
  slug: "garam-masala",
  title: "Garam Masala",
  cuisine: "north-indian",
  blurb:
    "The warm finishing blend of the North — cardamom, cinnamon, clove, cumin, coriander, and pepper toasted and ground. Not a curry powder but a perfume, stirred in near the end to lift a dish out of the everyday.",
  servings: 24,
  perServing: { calories: 15, protein: 1 },
  estCostPerServing: 0.18,
  roles: ["base"],
  ingredients: [
    { item: "coriander seed", qty: "3 tbsp", cost: 0.5, spansWeeks: true },
    { item: "cumin seed", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "black peppercorns", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "green cardamom pods", qty: "1 tbsp", cost: 0.6, spansWeeks: true },
    { item: "cloves", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "cinnamon stick, broken", qty: "1 (2-inch)", cost: 0.2, spansWeeks: true },
    { item: "black cardamom, bay leaf, mace/nutmeg (any/all)", qty: "1 each / pinch", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Toast the whole spices together in a dry pan over medium heat, shaking constantly, until fragrant and a shade darker — 2–3 minutes. Don't scorch them or the blend turns bitter.",
    "Tip out onto a plate and cool completely; warm spices grind to a paste and clump.",
    "Crack the cardamom pods and discard the green husks, keeping the seeds. Grind everything to a fine powder in a spice grinder.",
    "If using nutmeg or mace, grate it in at the end. Store in a sealed jar away from light; it keeps a couple of months before the volatile oils fade.",
  ],
  modernMove:
    "Toast and grind it fresh in small batches instead of buying a pre-ground tin — garam masala is all volatile aroma, and a jar that's sat on a shelf for a year is just dust. Add it at the end of a dish, off or near off the heat, so the perfume survives instead of cooking out.",
  notes:
    "'Garam' means warming, not hot — there's little to no chile here. The heat in a dish comes from tadka chiles and cayenne; this blend is for fragrance and finish.",
  tags: ["base", "garam-masala", "spice-blend", "pantry", "warm-spices"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/garam-masala-recipe-garam-masala-powder/",
      note: "Toasting and grinding whole warm spices fresh in small batches",
    },
    {
      title: "Garam masala — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Garam_masala",
      note: "Background — 'garam' means warming, not hot; a fragrance blend, not a chile heat",
    },
  ],
};
