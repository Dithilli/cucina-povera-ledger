import type { Recipe } from "../types";

export const hamdMarkad: Recipe = {
  slug: "hamd-markad",
  title: "Hamd Markad (Preserved Lemons)",
  cuisine: "moroccan",
  blurb:
    "Lemons quartered, packed in their own salted juice, and cured to a satiny, intensely savory peel — the signature pantry magic that turns a plain tagine Moroccan.",
  servings: 16,
  perServing: { calories: 15, protein: 0 },
  estCostPerServing: 0.2,
  roles: ["base"],
  ingredients: [
    { item: "lemons (thin-skinned, e.g. Meyer or Eureka)", qty: "8", cost: 2.4 },
    { item: "coarse salt", qty: "1/2 cup", cost: 0.2, spansWeeks: true },
    { item: "extra lemon juice, to cover", qty: "2–3 lemons", cost: 0.9 },
    { item: "cinnamon stick, fennel or coriander seed (optional)", qty: "1 of each", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Cut each lemon into quarters from the top almost down to the base, keeping it attached at one end so it opens like a flower.",
    "Pack coarse salt into the cuts and rub it over the flesh.",
    "Wedge the lemons tightly into a clean jar, pressing so their juice rises; tuck in the optional spices.",
    "Top up with extra lemon juice until the lemons are fully submerged, seal, and leave at room temperature, turning the jar daily.",
    "Cure 3–4 weeks until the peels are soft and translucent. Rinse before use; the silky rind is the part you want.",
  ],
  modernMove:
    "Keep the lemons fully submerged under their salty juice — exposed peel can mold, but under the brine they cure indefinitely, the rind going progressively more silky and complex.",
  notes:
    "The signature pantry workhorse: rinse and slice the peel into tagines, salads, and couscous. One jar lasts months.",
  tags: ["base", "moroccan", "preserve", "pantry", "foundation"],
  sources: [
    {
      title: "Silk Road Recipes — Moroccan Preserved Lemons",
      url: "https://silkroadrecipes.com/moroccan-preserved-lemons/",
      note: "Confirms the cut-and-salt-pack method, submerging in lemon juice, and curing several weeks to a soft, usable peel.",
    },
  ],
};
