import type { Recipe } from "../types";

export const cuscuzPaulista: Recipe = {
  slug: "cuscuz-paulista",
  title: "Cuscuz Paulista",
  cuisine: "brazilian",
  blurb:
    "A steamed cornmeal cake packed with sardines, peas and tomato, molded with rings of hard-boiled egg pressed against the bowl — São Paulo's frugal centerpiece that slices like a savory pie.",
  servings: 4,
  perServing: { calories: 460, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "farinha de milho flocada (flaked cornmeal)", qty: "2 cups", cost: 0.5 },
    { item: "canned sardines in oil", qty: "1 tin (125 g)", cost: 1.2 },
    { item: "eggs, hard-boiled", qty: "2", cost: 0.4 },
    { item: "tomatoes, diced", qty: "2", cost: 0.5 },
    { item: "peas and corn (frozen or canned)", qty: "1 cup", cost: 0.6 },
    { item: "onion, garlic, oil, parsley, salt", qty: "to taste", cost: 0.25, spansWeeks: true },
  ],
  method: [
    "Sweat onion and garlic in oil, then stir in the tomato, flaked sardines, peas, corn and parsley; cook 3 minutes and season.",
    "Pour in 2 cups hot water, bring to a simmer, then rain in the cornmeal stirring until it forms a damp, holding-together mass.",
    "Oil a bowl and line its sides with slices of hard-boiled egg and a few sardines so they print onto the cake when unmolded.",
    "Press the cornmeal mixture firmly into the bowl, let it rest 15 minutes to set, then invert onto a plate and cut into wedges.",
  ],
  modernMove:
    "Pressing the mix hard and resting it is what lets the cuscuz hold a clean slice — treat it like a terrine, not a pilaf.",
  notes: "A tin of sardines is the cheap protein engine; serve at room temperature, which is how paulistas actually eat it.",
  zeroWasteHero: false,
  tags: ["corn", "sardines", "egg", "steamed", "brazilian"],
  sources: [
    {
      title: "Canal da Receita — Cuscuz Paulista Tradicional com Sardinha",
      url: "https://canaldareceita.com.br/como-fazer/cuscuz-paulista-tradicional-com-sardinha/",
      note: "flaked cornmeal molded with sardines, egg, peas and tomato, then unmolded and sliced",
    },
  ],
};
