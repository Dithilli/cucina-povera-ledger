import type { Recipe } from "../types";

export const cornbreadDressing: Recipe = {
  slug: "cornbread-dressing",
  title: "Cornbread Dressing",
  cuisine: "american-south",
  blurb:
    "Day-old cornbread crumbled with stale biscuit, soaked in chicken broth with onion and celery, and baked until the top crisps — the Southern way to turn a dry pan of bread into Sunday's side.",
  servings: 6,
  perServing: { calories: 470, protein: 13 },
  estCostPerServing: 0.95,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "day-old cornbread, crumbled", qty: "6 cups", cost: 1.2 },
    { item: "stale biscuits or white bread, torn (uses up the heels)", qty: "2 cups", cost: 0.4 },
    { item: "onion, diced", qty: "1 large", cost: 0.4 },
    { item: "celery, diced", qty: "3 stalks", cost: 0.5 },
    { item: "chicken broth (the dumpling broth or a bouillon cube works)", qty: "3–4 cups", cost: 0.6, spansWeeks: true },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "butter or bacon drippings", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "sage, black pepper, salt, poultry seasoning", qty: "to season", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Crumble the day-old cornbread and torn biscuits into a big bowl and let them dry out further while you cook the vegetables — stale bread soaks the broth without turning to mush.",
    "Sweat the onion and celery in the butter or drippings until soft and sweet, then scrape it, fat and all, over the bread.",
    "Pour in the broth a cup at a time, tossing, until the mix is wet and loose like thick oatmeal — it firms as it bakes, so err toward sloppy. Season hard with sage and pepper, then beat in the eggs to bind.",
    "Spread into a buttered baking dish and bake at 375°F for 40–45 minutes until the top is browned and crisp and the center is set. Rest 10 minutes before serving.",
  ],
  modernMove:
    "Dressing exists to rescue dry day-old cornbread — the staler the bread, the more broth it drinks, so what looks like waste becomes the structure of the dish. Bake it loose and let the top crisp while the middle stays custardy.",
  zeroWasteHero: true,
  notes:
    "A natural sequel to a cornbread night and a pot of chicken broth: yesterday's bread plus the strained broth from the dumplings become tonight's dinner.",
  tags: ["cornbread", "dressing", "stuffing", "leftovers", "baked", "side", "stale-bread"],
};
