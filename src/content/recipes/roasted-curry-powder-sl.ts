import type { Recipe } from "../types";

export const roastedCurryPowderSl: Recipe = {
  slug: "roasted-curry-powder-sl",
  title: "Roasted Sri Lankan Curry Powder (Thuna Paha)",
  cuisine: "sri-lankan",
  blurb:
    "Coriander, cumin and fennel dry-roasted to a fragrant near-black with peppercorns, cardamom, cloves and cinnamon, then ground fine — the smoky dark blend behind every Sri Lankan meat and fish curry.",
  servings: 24,
  perServing: { calories: 18, protein: 0.7 },
  estCostPerServing: 0.05,
  roles: ["base"],
  ingredients: [
    { item: "coriander seeds", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "cumin seeds", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "fennel seeds", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "black peppercorns", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "cardamom pods & cloves", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "cinnamon stick, broken", qty: "1 piece", cost: 0.1, spansWeeks: true },
    { item: "dried red chilies", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "curry leaves, dried", qty: "1 sprig", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Roast the spices in a dry pan over medium heat, working in small same-size batches so nothing scorches — coriander, cumin and fennel together; harder seeds and bark separately.",
    "Keep them moving until each is several shades darker, smoky and aromatic; Sri Lankan roasted powder is taken much darker than an Indian blend, almost to coffee colour.",
    "Cool completely so the spices stay brittle.",
    "Grind everything to a fine powder and store airtight away from light; it keeps a couple of months at full fragrance.",
  ],
  modernMove:
    "Roasting each spice to its own colour rather than dumping them in together is the difference between deep and acrid — coriander wants longer than delicate cumin or fennel, so they go in staggered.",
  notes: "Two tablespoons seasons a curry for four; this is the constant that flavours the whole arc.",
  zeroWasteHero: true,
  tags: ["sri-lankan", "spice-blend", "foundation", "roasted"],
  sources: [
    {
      title: "The Flavor Bender — The Best Homemade Sri Lankan Roasted Curry Powder",
      url: "https://www.theflavorbender.com/sri-lankan-roasted-curry-powder/",
      note: "Roast spices separately by size, take the blend dark, grind fine; coriander/cumin/fennel/pepper core",
    },
  ],
};
