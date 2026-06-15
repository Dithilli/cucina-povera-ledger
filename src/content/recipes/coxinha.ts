import type { Recipe } from "../types";

export const coxinha: Recipe = {
  slug: "coxinha",
  title: "Coxinha",
  cuisine: "brazilian",
  blurb:
    "The boteco classic — a teardrop of soft broth-cooked dough wrapped around shredded chicken, breaded and fried to a shatter-crisp crust shaped like a little drumstick.",
  servings: 2,
  perServing: { calories: 560, protein: 28 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken thigh, poached and shredded", qty: "1 large (about 6 oz)", cost: 1.0 },
    { item: "all-purpose flour", qty: "1 cup", cost: 0.2 },
    { item: "reserved chicken broth", qty: "1 cup", cost: 0.1 },
    { item: "onion, finely diced", qty: "1/2 small", cost: 0.15 },
    { item: "garlic, parsley, salt, pepper", qty: "to season", cost: 0.1, spansWeeks: true },
    { item: "cream cheese or requeijão", qty: "2 tbsp", cost: 0.4 },
    { item: "egg + breadcrumbs for coating", qty: "1 egg + 1/2 cup", cost: 0.5 },
    { item: "neutral oil for frying", qty: "for frying", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Poach the thigh in seasoned water, then shred it and fold through a refogado of softened onion and garlic, the cream cheese, and chopped parsley.",
    "Bring the reserved broth to a boil, dump in the flour all at once, and beat over the heat into a smooth, pliable dough that pulls cleanly from the pan.",
    "Flatten a walnut of warm dough in your palm, spoon in filling, and pinch it up into the signature teardrop with a little peaked point.",
    "Roll through beaten egg then breadcrumbs and fry at 350°F until deep golden and crackling. Drain and eat hot.",
  ],
  modernMove:
    "Cook the dough in the actual chicken broth, not water — that scalded, broth-rich masa is what separates a real coxinha from a gummy croquette.",
  notes: "Make a double batch of dough and freeze breaded raw coxinhas; fry straight from frozen.",
  zeroWasteHero: false,
  tags: ["boteco", "salgadinho", "chicken", "brazilian"],
  sources: [
    {
      title: "Coxinha — I Heart Brazil",
      url: "https://www.iheartbrazil.com/coxinha-recipe/",
      note: "broth-cooked dough and shredded-chicken refogado filling",
    },
  ],
};
