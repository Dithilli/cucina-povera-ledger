import type { Recipe } from "../types";

export const schmaltzHerring: Recipe = {
  slug: "schmaltz-herring",
  title: "Schmaltz Herring with Onions",
  cuisine: "ashkenazi",
  blurb:
    "Fat, oily salt-cured herring soaked to gentle the brine, then sliced and layered with raw onion under a film of oil — the plainest, most beloved Shabbos herring, eaten with a boiled potato and a slab of rye.",
  servings: 4,
  perServing: { calories: 450, protein: 22 },
  estCostPerServing: 0.95,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "schmaltz (fatty salt-cured) herring, whole or fillets", qty: "2 whole or 4 fillets (about 10 oz)", cost: 2.4 },
    { item: "onion, sliced into thin rings", qty: "1 large", cost: 0.3 },
    { item: "neutral oil", qty: "2–3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "cider or white vinegar (optional)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "bay leaf and a few peppercorns (optional)", qty: "1 / 6", cost: 0.05, spansWeeks: true },
    { item: "boiling potatoes, to serve", qty: "1 lb", cost: 0.6 },
    { item: "rye bread, to serve", qty: "4 slices", cost: 0.6 },
  ],
  method: [
    "Soak the herring in cold water (some soak in weak black tea or milk-free buttermilk substitute — but for pareve, use water) for 3–12 hours depending on saltiness, changing the water once or twice. Taste a sliver: it should be savory, not punishing.",
    "Drain and pat dry. If whole, run a thumb down the backbone to lift it out, peel away the skin if you like, and pick out the floating bones; cut the fillets crosswise into thick bite-sized pieces.",
    "Layer the herring and onion rings in a shallow dish or jar, tucking in the bay and peppercorns. Pour over the oil (and the splash of vinegar, if using) so everything glistens.",
    "Let it sit, covered, in the cold for several hours so the onion softens and the oil takes on the herring. Serve cold with hot boiled potatoes and rye.",
  ],
  modernMove:
    "Don't guess the soak — taste it. 'Schmaltz herring' here means the fatty fish, not chicken fat; its whole character is the rich oil under the salt, so soak only until the brine steps back and the fat comes forward, then stop.",
  notes:
    "Pareve — cured fish and oil, no meat or dairy — so it opens a meat or a dairy Shabbos meal equally. 'Schmaltz herring' is the fattiest grade of herring; it has nothing to do with rendered chicken schmaltz.",
  tags: ["herring", "fish", "pareve", "cured"],
};
