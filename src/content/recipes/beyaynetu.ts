import type { Recipe } from "../types";

export const beyaynetu: Recipe = {
  slug: "beyaynetu",
  title: "Beyaynetu (The Fasting Platter)",
  cuisine: "ethiopian",
  blurb:
    "The whole table on one round of injera — small mounds of every wot, alicha, green, and salad arranged together. A feast assembled entirely from cheap legumes and a week's worth of leftovers.",
  servings: 4,
  perServing: { calories: 620, protein: 28 },
  estCostPerServing: 1.4,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "injera (large rounds, to line the platter and to scoop)", qty: "4–6 pieces", cost: 2.0 },
    { item: "misir wot", qty: "1 cup" },
    { item: "shiro wot", qty: "1 cup" },
    { item: "kik alicha", qty: "1 cup" },
    { item: "gomen (greens)", qty: "1 cup" },
    { item: "atakilt wot (cabbage/carrot/potato)", qty: "1 cup" },
    { item: "azifa or timatim salad", qty: "1 cup" },
    { item: "green chiles + raw onion to garnish", qty: "a handful", cost: 0.5 },
  ],
  method: [
    "Lay a large round of injera flat to cover a wide platter — this is both the plate and the tablecloth.",
    "Spoon a mound of each prepared dish — misir wot, shiro, kik alicha, gomen, atakilt wot, a fresh salad — in a ring around the injera so the colors sit side by side.",
    "Tuck extra rolled injera around the edge for scooping, and scatter slivered green chile and raw onion over the top.",
    "Everyone eats communally from the same platter, tearing injera and pinching up a little of each dish — no utensils, the bread is the fork.",
  ],
  modernMove:
    "Beyaynetu is plating as composition — think of the platter as a painter's palette, each mound a distinct color and temperature, so a single round of injera carries five textures at once. It's also the ultimate zero-waste meal: a few spoons of every leftover wot from the week become one abundant feast.",
  notes:
    "'Beyaynetu' means roughly 'a little of each.' It's the everyday fasting meal AND the celebratory spread — proof, as the arc's thesis goes, that fasting and feasting are the same table.",
  tags: ["beyaynetu", "platter", "feast", "fasting", "dinner", "communal"],
};
