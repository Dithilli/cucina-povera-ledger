import type { Recipe } from "../types";

export const frijolesNegrosBaseOx: Recipe = {
  slug: "frijoles-negros-base-ox",
  title: "Frijoles Negros con Hoja de Aguacate",
  cuisine: "oaxacan",
  blurb:
    "The daily pot of inky Oaxacan black beans, perfumed with toasted avocado leaf — that fennel-anise note that tells you instantly you're south of the Valles Centrales, not anywhere else in Mexico.",
  servings: 6,
  perServing: { calories: 180, protein: 11 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "dried black beans", qty: "1 lb", cost: 1.2 },
    { item: "dried avocado leaves (hoja de aguacate)", qty: "2–3", cost: 0.2, spansWeeks: true },
    { item: "white onion", qty: "1/2", cost: 0.1 },
    { item: "garlic", qty: "2 cloves", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "water", qty: "to cover generously" },
  ],
  method: [
    "Rinse and pick over the beans (soaking overnight shortens the cook but isn't essential), then cover generously with water in a pot with the onion and garlic.",
    "Bring to a boil and simmer gently, topping up with hot water as needed, until the beans are tender — roughly an hour and a half.",
    "Toast the avocado leaves briefly over the flame until fragrant, then drop them into the pot and salt the beans only once they're soft.",
    "Simmer another 10–15 minutes so the avocado-leaf aroma infuses the broth; serve brothy as frijoles de olla, or mash some down for the table.",
  ],
  modernMove:
    "Toast the avocado leaves for a few seconds before they hit the pot — the heat blooms their volatile oils, deepening that anise-fennel note that defines Oaxacan beans against plain frijoles negros.",
  notes:
    "The constant under every week: brothy one night, mashed under an antojito the next, fried into the pan with manteca the next. The bean liquor is precious — never poured off.",
  zeroWasteHero: true,
  tags: ["oaxacan", "frijoles", "black-beans", "hoja-de-aguacate", "base"],
  sources: [
    {
      title: "Rick Bayless — Oaxacan Black Beans with Avocado Leaf",
      url: "https://www.rickbayless.com/recipe/oaxacan-black-beans-with-avocado-leaf/",
      note: "the avocado-leaf perfume and brothy olla method that defines Oaxacan black beans",
    },
  ],
};
