import type { Recipe } from "../types";

export const choppedHerring: Recipe = {
  slug: "chopped-herring",
  title: "Chopped Herring",
  cuisine: "ashkenazi",
  blurb:
    "Cured herring chopped fine with sweet apple, raw onion, and a hard-boiled egg, bound with a slice of soaked challah and brightened with vinegar — the Shabbos appetizer that turns one salt fish into a bowl that feeds the table on rye.",
  servings: 4,
  perServing: { calories: 430, protein: 20 },
  estCostPerServing: 0.9,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "schmaltz or pickled herring fillets, drained", qty: "3–4 fillets (about 8 oz)", cost: 2.0 },
    { item: "tart apple, peeled and cored", qty: "1 small", cost: 0.4 },
    { item: "small onion, raw", qty: "1/2", cost: 0.2 },
    { item: "hard-boiled eggs", qty: "2", cost: 0.4 },
    { item: "stale challah or matzo, crusts off", qty: "1 thick slice", cost: 0.2 },
    { item: "cider or white vinegar", qty: "1–2 tsp", cost: 0.05, spansWeeks: true },
    { item: "sugar", qty: "a pinch", cost: 0.02, spansWeeks: true },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
    { item: "rye bread, to serve", qty: "4 slices", cost: 0.6 },
  ],
  method: [
    "If using salt-cured schmaltz herring, soak the fillets in cold water (or weak tea) for an hour or two to pull out some of the brine; pickled herring just needs draining. Pat dry and pick out any stray bones.",
    "Soak the slice of challah or matzo in a little water or vinegar, then squeeze it nearly dry — this is the old binder that gives the spread its body without a drop of cream, keeping it pareve.",
    "Chop the herring, apple, onion, hard-boiled egg, and squeezed bread together on a board with a heavy knife, or pulse briefly in a bowl with a chopper. Stop while there's still some texture — this is chopped herring, not paste.",
    "Season with vinegar, a pinch of sugar, and pepper, tasting as you go; the apple and sugar should just round off the salt and acid. Chill for an hour to let it settle.",
    "Pile onto rye bread or black bread, a wedge of egg on top if you're feeling generous.",
  ],
  modernMove:
    "Reach for the bread binder before you reach for mayonnaise. A slice of stale challah soaked and wrung out gives a luxurious, spoonable body while keeping the dish pareve — so it can open a fleishig Shabbos meal without breaking kosher.",
  notes:
    "Pareve: no dairy, no meat, so it sits at any table. The soaking water from salt herring is the only thing thrown away — everything else, down to the heels of stale challah, goes into the bowl.",
  zeroWasteHero: true,
  tags: ["herring", "fish", "pareve", "spread"],
};
