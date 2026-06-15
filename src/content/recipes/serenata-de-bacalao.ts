import type { Recipe } from "../types";

export const serenataDeBacalao: Recipe = {
  slug: "serenata-de-bacalao",
  title: "Serenata de Bacalao (Salt Cod Salad with Viandas)",
  cuisine: "puerto-rican",
  blurb:
    "Boiled salt cod torn over a bed of warm boiled viandas, layered with tomato, onion and avocado and dressed in nothing but good olive oil and vinegar — a no-cook-once-it's-boiled supper for hot nights.",
  servings: 4,
  perServing: { calories: 420, protein: 24 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalao), soaked, then boiled and flaked", qty: "1/2 lb", cost: 2.4 },
    { item: "viandas (yautía, yuca, green banana, or potato)", qty: "1.5 lb", cost: 1.3 },
    { item: "tomatoes, sliced", qty: "2", cost: 0.6 },
    { item: "onion, thinly sliced", qty: "1", cost: 0.3 },
    { item: "avocado", qty: "1", cost: 0.8 },
    { item: "hard-boiled eggs", qty: "2", cost: 0.4 },
    { item: "olive oil + vinegar, salt, black pepper", qty: "1/3 cup", cost: 0.7, spansWeeks: true },
  ],
  method: [
    "Soak the salt cod overnight, changing the water, then boil in fresh water 15 minutes until tender. Drain, cool, and flake into large pieces, discarding skin and bones.",
    "Peel the viandas and boil in salted water until fork-tender, 20–30 minutes depending on the root; drain and cut into chunks while still warm.",
    "Arrange the warm viandas on a platter and scatter the flaked cod over them. Layer on sliced tomato, onion, quartered egg, and avocado.",
    "Whisk olive oil, vinegar, and black pepper into a sharp dressing and pour it over everything while the roots are still warm so it soaks in.",
    "Toss lightly at the table and serve warm or at room temperature.",
  ],
  modernMove:
    "Dress the viandas while they're still hot, not chilled: warm starchy roots drink up the olive-oil-and-vinegar far better, so the seasoning reaches the center instead of pooling at the bottom of the platter.",
  notes:
    "Serenata — 'serenade' — is eaten year-round but especially during Lent. It's the same frugal logic as the guisado, but boiled and dressed rather than stewed, which makes it the hot-weather version.",
  zeroWasteHero: false,
  tags: ["fish", "salt-cod", "bacalao", "salad", "viandas", "avocado", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Food Metamorphosis — Serenata de Bacalao (Codfish Salad)",
      url: "https://foodmetamorphosis.com/serenata-de-bacalao-codfish-salad-recipe/",
      note: "boiled salt cod over boiled viandas, layered with tomato, onion, egg and avocado, dressed in olive oil and vinegar",
    },
  ],
};
