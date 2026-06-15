import type { Recipe } from "../types";

export const khoreshBademjan: Recipe = {
  slug: "khoresh-bademjan",
  title: "Khoresh Bademjan",
  cuisine: "persian",
  blurb:
    "Silky fried eggplant braised in a saffron-tomato sauce with a little meat and the sour tang of verjuice or dried lime — the great Persian eggplant stew, served over chelo.",
  servings: 6,
  perServing: { calories: 520, protein: 19 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "eggplants, peeled and halved or quartered", qty: "3 medium", cost: 2.5 },
    { item: "lamb or beef stew meat, cubed", qty: "1/2 lb", cost: 2.7 },
    { item: "large onion, sliced", qty: "1", cost: 0.3 },
    { item: "tomatoes, grated, or tomato paste", qty: "3 large or 3 tbsp", cost: 0.8 },
    { item: "turmeric", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "saffron, bloomed in hot water", qty: "pinch", cost: 0.4, spansWeeks: true },
    { item: "verjuice, or 2 dried limes / lemon juice", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "oil for frying", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0 },
  ],
  method: [
    "Peel the eggplants and cut into long pieces. Salt them and let them sweat 30 minutes, then pat dry — this draws out bitterness and stops them drinking all the oil.",
    "Fry the eggplant in hot oil, turning, until soft and golden on all sides. Lift onto paper to drain and set aside.",
    "In the same pot, soften the sliced onion, add turmeric, then brown the cubed meat. Stir in the grated tomato (or fry the tomato paste until it darkens) and add water to cover. Simmer, partly covered, about 1 hour until the meat is becoming tender.",
    "Lay the fried eggplant gently on top of the meat, pour over the bloomed saffron and the verjuice (or tuck in pierced dried limes), and season. Simmer 30 to 40 minutes more without stirring too hard, so the eggplant stays in soft, intact pieces.",
    "Rest, then serve over chelo, the eggplant collapsing into the rich red sauce.",
  ],
  modernMove:
    "Salting and frying the eggplant before it ever meets the sauce gives it that custardy, melting texture and keeps it from going bitter — and finishing the braise with saffron and the sour edge of verjuice is the balance trick that lifts the whole stew.",
  notes:
    "Vegetarian if you drop the meat and lean on more eggplant and a handful of yellow split peas. Often crowned with sliced tomato or a fried egg.",
  tags: ["dinner", "stew", "eggplant", "tomato", "saffron", "khoresh"],
};
