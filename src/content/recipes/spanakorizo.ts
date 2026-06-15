import type { Recipe } from "../types";

export const spanakorizo: Recipe = {
  slug: "spanakorizo",
  title: "Spanakorizo (Spinach Rice)",
  cuisine: "greek",
  blurb:
    "Spinach cooked down with rice, dill, and olive oil until soft and almost creamy, then woken up with a hard squeeze of lemon — a whole green dinner in one pot.",
  servings: 4,
  perServing: { calories: 480, protein: 11 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "spinach, chopped", qty: "1 1/2 lb", cost: 2.4 },
    { item: "medium-grain rice", qty: "1 cup", cost: 0.6 },
    { item: "onion & spring onions, chopped", qty: "1 + 4", cost: 0.8 },
    {
      item: "fresh dill, chopped",
      qty: "1 big handful",
      cost: 0.5,
    },
    {
      item: "olive oil, generous",
      qty: "1/3 cup",
      cost: 0.55,
      spansWeeks: true,
    },
    { item: "lemons", qty: "2", cost: 0.6 },
    { item: "salt, black pepper", qty: "to taste" },
    { item: "feta to serve (optional)", qty: "to serve", cost: 0.5 },
  ],
  method: [
    "Soften the onion and spring onions in plenty of olive oil until sweet, not coloured.",
    "Add the spinach a handful at a time, letting each wilt down, until the whole lot collapses into the pot. Stir in the dill.",
    "Add the raw rice and about 2 cups of hot water, season, cover, and simmer gently 18–20 minutes until the rice is tender and the dish is loose and spoonable — add splashes of water if it tightens up.",
    "Off the heat, beat in another thread of olive oil and the juice of a whole lemon, and let it rest 10 minutes to set. Serve warm with extra lemon and feta crumbled over.",
  ],
  modernMove:
    "Keep it deliberately loose and finish off the heat with raw olive oil and lemon — spanakorizo should be glossy and almost risotto-soft, not a dry pilaf.",
  notes:
    "A lenten one-pot from the spring greens season. Equally good warm or at room temperature the next day.",
  tags: ["spinach", "rice", "dill", "lemon", "one-pot"],
  sources: [
    {
      title: "My Greek Dish — Greek Spinach and Rice (Spanakorizo)",
      url: "https://www.mygreekdish.com/recipe/greek-spinach-rice-recipe-spanakorizo/",
      note: "Confirms spinach and rice simmered together with dill and finished with lemon.",
    },
  ],
};
