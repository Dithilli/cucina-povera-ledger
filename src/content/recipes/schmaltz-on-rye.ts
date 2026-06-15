import type { Recipe } from "../types";

export const schmaltzOnRye: Recipe = {
  slug: "schmaltz-on-rye",
  title: "Schmaltz on Rye with Gribenes",
  cuisine: "ashkenazi",
  blurb:
    "Good seeded rye spread thick with schmaltz, scattered with crisp gribenes and coarse salt, raw onion and radish on the side — the poorest supper in the book, and a benediction.",
  servings: 2,
  perServing: { calories: 380, protein: 11 },
  estCostPerServing: 0.4,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "seeded rye bread", qty: "4 slices", cost: 0.5 },
    { item: "schmaltz (rendered chicken fat)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "gribenes (cracklings from rendering schmaltz)", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "radishes, thinly sliced", qty: "4", cost: 0.2 },
    { item: "raw onion, thinly sliced", qty: "1/2 small", cost: 0.1 },
    { item: "flaky or coarse salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Have the schmaltz at cool room temperature so it spreads like soft butter. If it's straight from the icebox, let it sit out or warm the jar in your hand a minute.",
    "Spread the rye thick and generous — this is the meal, not a scrape. A heavy seeded rye stands up to the fat best.",
    "Scatter the gribenes over the top and press them in lightly so they stick, then finish with a real pinch of coarse salt.",
    "Lay the sliced radish and raw onion alongside. Eat with the bracing raw vegetables against the rich fat — that contrast is the whole supper.",
  ],
  modernMove:
    "Treat schmaltz as you would a great cultured butter and don't be shy: the gribenes are the bacon-bit luxury hiding inside an act of pure thrift, and a final flake of coarse salt on top wakes the whole thing up.",
  notes:
    "Schmaltz and gribenes make this firmly fleishig — no dairy at the table. Both are the saved-back gold from rendering chicken skin and fat for richer dishes; nothing about the bird is thrown away. The radish and onion aren't garnish, they're the digestive counterweight to the fat.",
  zeroWasteHero: true,
  tags: ["schmaltz", "rye", "gribenes", "fleishig"],
};
