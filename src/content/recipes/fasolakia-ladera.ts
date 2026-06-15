import type { Recipe } from "../types";

export const fasolakiaLadera: Recipe = {
  slug: "fasolakia-ladera",
  title: "Fasolakia Ladera (Green Beans in Olive Oil)",
  cuisine: "greek",
  blurb:
    "Green beans braised soft and sweet in olive oil and tomato until they slump — the everyday summer ladero you eat as dinner with bread and a slab of feta.",
  servings: 4,
  perServing: { calories: 320, protein: 8 },
  estCostPerServing: 1.15,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "green beans, trimmed", qty: "1 1/2 lb", cost: 2.7 },
    { item: "onion, sliced", qty: "1 large", cost: 0.4 },
    { item: "garlic cloves, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "potatoes, cut in wedges (optional, stretches it)", qty: "2", cost: 0.5 },
    { item: "ripe tomatoes, grated (or 1 cup canned, crushed)", qty: "3", cost: 0.9 },
    {
      item: "good olive oil — this is the dish, don't skimp",
      qty: "1/2 cup",
      cost: 1.2,
      spansWeeks: true,
    },
    { item: "handful parsley, chopped", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "salt, sugar pinch, black pepper", qty: "to taste", spansWeeks: true },
    { item: "to serve: feta and crusty bread", qty: "for the table", cost: 0.6 },
  ],
  method: [
    "Soften the onion in the olive oil over medium-low heat until sweet and translucent, then add the garlic for a minute.",
    "Stir in the grated tomato, a pinch of sugar, and salt; let it cook down a few minutes into a loose sauce.",
    "Add the beans (and potatoes if using), turn to coat in the oil, and pour in just enough water to come halfway up.",
    "Cover and braise gently 40–50 minutes, until the beans are completely soft and the oil and tomato have married into a glossy sauce — do not aim for crisp-tender, this is meant to be meltingly soft.",
    "Stir in the parsley, check salt and pepper, and let it sit off the heat. Serve warm or at room temperature with feta and bread to mop the oil.",
  ],
  modernMove:
    "Grate the tomatoes on a box grater and discard the skin — you get pure pulp that emulsifies with the oil into a silky sauce instead of a watery, seedy one.",
  notes:
    "A ladero: vegetables cooked 'with oil' as the main event. Modest protein on the plate is authentic — the feta and bread carry it. Even better the next day cold.",
  zeroWasteHero: true,
  tags: ["ladera", "green-beans", "vegetable", "olive-oil", "summer", "vegetarian"],
  sources: [
    {
      title: "Olive Tomato (Elena Paravantes) — Authentic Greek Green Beans (Fasolakia Lathera)",
      url: "https://www.olivetomato.com/greek-style-green-beans-fasolakia-lathera/",
      note: "Confirms green beans braised in olive oil and tomato — the classic lathera technique.",
    },
  ],
};
