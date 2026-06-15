import type { Recipe } from "../types";

export const pernil: Recipe = {
  slug: "pernil",
  title: "Pernil al Horno",
  cuisine: "puerto-rican",
  blurb:
    "A cheap pork shoulder slashed deep, packed with a pungent garlic-oregano-vinegar adobo, and roasted low for hours until the meat pulls apart in shreds and the skin (cuerito) blisters to glass — one roast that feeds a household for days.",
  servings: 8,
  perServing: { calories: 560, protein: 34 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in pork shoulder (pernil), skin on", qty: "5 lb", cost: 10.0 },
    { item: "garlic cloves, mashed", qty: "1 whole head", cost: 0.5, spansWeeks: true },
    { item: "dried oregano", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "white vinegar", qty: "3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "sazón con achiote", qty: "2 tsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "black pepper", qty: "1 tsp", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Peel back the skin in one flap (leave it attached) and stab deep pockets all through the meat with a knife. Mash the garlic, oregano, vinegar, oil, sazón, salt, and pepper into a wet adobo.",
    "Force the adobo deep into every slit and all over the meat; rub the underside of the skin too. Salt the outside of the skin hard, lay it back over, and refrigerate at least overnight (24–48 hours is best).",
    "Roast covered with foil at 300°F, skin up, for about 3 hours so the meat steams tender in its own juices.",
    "Uncover and roast another 2–3 hours at 300°F, until a fork twists freely in the meat and the internal temp passes 190°F for full collagen breakdown.",
    "Crank to 425°F for the last 15–20 minutes to blister the skin into shattering cuerito. Rest 20 minutes, then pull the meat into shreds and crack the skin into pieces over the top.",
  ],
  modernMove:
    "Salting the skin separately and finishing in a blast of high heat is what turns flabby pork skin into true cuerito — the long low roast renders the fat beneath, the final blast crisps what's left into glass.",
  notes:
    "The whole point of pernil is leftovers: it carries a week of dinners, sandwiches (pernil and pickled onion), mofongo relleno, and rice. Save the pan drippings to season beans and rice.",
  zeroWasteHero: true,
  tags: ["dinner", "pork", "roast", "garlic", "adobo", "make-ahead", "puerto-rican"],
  sources: [
    {
      title: "whats4eats — Pernil al Horno",
      url: "https://www.whats4eats.com/meats/pernil-al-horno-recipe",
      note: "Garlic-oregano-vinegar adobo forced into slits, long low roast, crisped skin",
    },
  ],
};
