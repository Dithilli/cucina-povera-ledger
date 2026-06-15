import type { Recipe } from "../types";

export const ogorkiKiszone: Recipe = {
  slug: "ogorki-kiszone",
  title: "Ogórki Kiszone",
  cuisine: "polish",
  blurb:
    "Small cucumbers packed with dill crowns, garlic, and a strip of horseradish, drowned in salt brine, and left to sour into snappy, fizzy, garlicky pickles — no vinegar, just salt and time. The live-ferment jar that sharpens every plate of smalec, potatoes, and bigos through winter.",
  servings: 16,
  perServing: { calories: 15, protein: 1 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "small pickling cucumbers", qty: "2 lb", cost: 2.2 },
    { item: "non-iodized salt", qty: "2 tbsp per quart of water", cost: 0.1, spansWeeks: true },
    { item: "fresh dill, flowering crowns if possible", qty: "1 large bunch", cost: 0.5 },
    { item: "garlic cloves, peeled", qty: "6", cost: 0.3, spansWeeks: true },
    { item: "horseradish root, in strips", qty: "1 piece", cost: 0.3 },
    { item: "bay leaf and peppercorns (optional)", qty: "2 leaves, 1 tsp", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Scrub the cucumbers and soak them in cold water 2 hours so they stay crisp; they ferment best small and very fresh.",
    "Lay dill, some garlic, and a strip of horseradish in the bottom of a clean jar or crock. Pack the cucumbers in standing upright, as tightly as they'll go, tucking the remaining garlic, horseradish, bay, and pepper between them. Top with more dill.",
    "Make the brine: dissolve about 2 tablespoons non-iodized salt per quart of non-chlorinated water. Pour it over the cucumbers until fully covered.",
    "Weight the cucumbers so they stay under the brine, cover loosely, and leave at room temperature. The brine turns cloudy and starts to fizz within a few days.",
    "Taste from day 4: at that point they're lightly soured 'małosolne' (half-sour). Leave 1–2 weeks for fully sour ogórki kiszone, then move to a cold place to slow the ferment and hold them for months.",
  ],
  modernMove:
    "A strip of horseradish in the jar isn't just flavor — its compounds keep the cucumbers firm and hold off soft, slimy ferments, so the pickles stay snappy as they sour.",
  notes:
    "Use non-iodized salt and chlorine-free water; both chlorine and iodine stall the lactic bacteria. No vinegar belongs here — these are true ferments, sour from the brine alone. The cloudy brine is gold for soups like zupa ogórkowa.",
  zeroWasteHero: false,
  tags: ["polish", "base", "fermented", "pickles", "cucumber", "make-ahead"],
  sources: [
    {
      title: "Polonist (Kasia Nowacka) — Ogórki Kiszone: Polish Dill Pickles",
      url: "https://www.polonist.com/kiszone-polish-dill-pickles/",
      note: "Salt-brine lacto-fermentation of cucumbers with dill, garlic, and horseradish; no vinegar",
    },
  ],
};
