import type { Recipe } from "../types";

export const gingerScallionOil: Recipe = {
  slug: "ginger-scallion-oil",
  title: "Ginger-Scallion Oil",
  cuisine: "cantonese",
  blurb:
    "The cold green relish that makes Cantonese poached chicken and a plain bowl of rice sing — finely minced ginger and scallion bound in oil, salted and either left raw and pungent or shocked with smoking oil until it hisses and softens. Three pantry things become the most useful condiment in the house.",
  servings: 8,
  perServing: { calories: 90, protein: 1 },
  estCostPerServing: 0.25,
  roles: ["base"],
  ingredients: [
    { item: "scallions, very finely minced", qty: "1 bunch (about 6)", cost: 0.7 },
    { item: "fresh ginger, peeled and finely minced", qty: "3-inch knob", cost: 0.3, spansWeeks: true },
    { item: "neutral oil (peanut or vegetable)", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "salt", qty: "3/4 tsp", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Mince the scallions and ginger as finely as you can — the finer the mince, the better the oil carries them — and pile them into a heatproof bowl with the salt. Keep roughly twice as much scallion as ginger.",
    "For the raw version, simply warm the oil until just hot and stir it through; for the hot version, heat the oil until it shimmers and faintly smokes, then pour it over the aromatics so they sizzle and bloom. Either way, stir well.",
    "Taste and adjust the salt — it should taste assertively seasoned, since it dresses bland rice and poached meat. Let it sit at least a few minutes for the flavors to marry.",
  ],
  modernMove:
    "Salt and oil are the carriers, not afterthoughts: the salt draws and seasons, and the oil lifts the volatile aromatics so a teaspoon perfumes a whole plate — the reason this relish does so much work for so little.",
  notes:
    "Keeps a week or more refrigerated, the flavor deepening. Spoon it over poached chicken, steamed fish, blanched greens, tofu, or just hot rice; stir leftover spoonfuls into noodle soup or fried rice so nothing is wasted.",
  tags: ["base", "cantonese", "ginger", "scallion", "condiment", "relish"],
  sources: [
    {
      title: "The Woks of Life — Cantonese Raw Ginger Scallion Oil",
      url: "https://thewoksoflife.com/raw-ginger-scallion-oil/",
      note: "The 2:1 scallion-to-ginger ratio, the salt, and the raw vs. hot-oil methods for poached chicken.",
    },
  ],
};
