import type { Recipe } from "../types";

export const gomadare: Recipe = {
  slug: "gomadare",
  title: "Gomadare (Sesame Sauce)",
  cuisine: "japanese",
  blurb:
    "Toasted sesame seeds ground in a ridged suribachi mortar until they turn fragrant and half-oily, then loosened with soy, a touch of sweetness, and a splash of dashi into a nutty, savory dressing. It is the cheapest way to make plain blanched vegetables taste like a dish — the goma-ae of every home kitchen — and a thicker pour of it turns into the dipping sauce for shabu-shabu or cold noodles.",
  servings: 6,
  perServing: { calories: 90, protein: 3 },
  estCostPerServing: 0.25,
  roles: ["side", "base"],
  ingredients: [
    { item: "white sesame seeds", qty: "1/3 cup", cost: 0.6, spansWeeks: true },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar or mirin", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "dashi or water, to loosen", qty: "1 to 3 tbsp" },
    { item: "rice vinegar (optional, for a dressing)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Toast the sesame seeds in a dry skillet over medium heat, shaking the pan constantly, until they smell nutty and a few begin to pop and jump — 2 to 3 minutes. Watch closely; sesame goes from golden to burnt in seconds, and burnt seeds turn the whole sauce bitter.",
    "Tip the hot seeds into a suribachi (ridged mortar) and grind with the wooden pestle until most are crushed and the mix turns fragrant and slightly clumping with released oil. Leave a few seeds whole for texture — Japanese cooks grind 'seven-tenths' on purpose. A spice grinder or sturdy bowl and the back of a spoon work too.",
    "Grind in the soy sauce and the sugar or mirin until you have a thick, glossy paste.",
    "Loosen with dashi (or water) a little at a time: a couple of teaspoons for a thick paste to dress vegetables, more for a pourable dipping sauce. Taste and balance with the optional vinegar.",
    "Fold blanched, well-squeezed greens — spinach, green beans, broccoli — through the thick version for an instant goma-ae side, or set the looser version out as a dip.",
  ],
  modernMove:
    "Grinding your own seeds is the difference between flat and fragrant: whole seeds slide past the tongue, but crushing them releases the aromatic oils locked inside, so a few cents of sesame perfumes a whole dish. The ridged suribachi does this far better than any blender, which heats and pastes the seeds.",
  notes:
    "Keeps a few days refrigerated, though it thickens — slacken with a little dashi before serving. Stretch it with a spoon of miso or peanut butter for richer noodle sauces. Sesame that's gone slightly stale is revived by toasting, so this is a good home for the bottom of the jar.",
  zeroWasteHero: false,
  tags: ["side", "base", "sauce", "sesame", "goma-ae", "make-ahead"],
};
