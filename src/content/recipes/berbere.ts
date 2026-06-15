import type { Recipe } from "../types";

export const berbere: Recipe = {
  slug: "berbere",
  title: "Berbere",
  cuisine: "ethiopian",
  blurb:
    "The brick-red chile-and-spice blend that is the soul of the Ethiopian pot — toasted dried chiles ground with a dozen warm spices. A jar of this is the difference between a bland legume and a feast.",
  servings: 24,
  perServing: { calories: 20, protein: 1 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "dried mild red chiles (e.g. Kashmiri/New Mexico), stemmed & seeded", qty: "2 oz", cost: 2.5, spansWeeks: true },
    { item: "cayenne or hot chile powder (to taste)", qty: "2–4 tbsp", cost: 0.8, spansWeeks: true },
    { item: "fenugreek seed", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "coriander seed", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cumin seed", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "black peppercorns + allspice", qty: "1 tsp each", cost: 0.3, spansWeeks: true },
    { item: "ground ginger", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cardamom, clove, cinnamon, nutmeg, ajwain (any/all)", qty: "1/2 tsp each", cost: 0.5, spansWeeks: true },
    { item: "salt", qty: "1 tbsp", spansWeeks: true },
  ],
  method: [
    "Toast the whole spices (fenugreek, coriander, cumin, peppercorns, allspice, cardamom, clove) in a dry pan over medium heat until fragrant and a shade darker — 2–3 minutes. Don't scorch the fenugreek or it turns bitter. Cool.",
    "If using whole dried chiles, tear them up and toast briefly too, just until aromatic and brittle.",
    "Grind the toasted whole spices and chiles to a fine powder in a spice grinder.",
    "Stir in the ground ginger, cinnamon, nutmeg, ajwain, cayenne, and salt. Taste and dial the heat up with more cayenne.",
    "Store in a sealed jar away from light. It keeps for months and gets used by the spoonful.",
  ],
  modernMove:
    "Toast and grind it fresh rather than buying it pre-made — the whole-seed toast is where the perfume lives. Then bloom the finished powder in hot niter kibbeh before it ever touches the pot, the way you'd bloom curry powder, so the spices go aromatic instead of raw.",
  notes:
    "The one pantry investment that powers the entire challenge: misir wot, shiro, zigni, doro wot all start here. A little goes a long way.",
  tags: ["base", "berbere", "spice-blend", "chiles", "pantry"],
};
