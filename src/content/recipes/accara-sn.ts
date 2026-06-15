import type { Recipe } from "../types";

export const accaraSn: Recipe = {
  slug: "accara-sn",
  title: "Accara (Acaraje)",
  cuisine: "senegalese",
  blurb:
    "Skinned black-eyed peas whipped to a pale, airy batter and fried into hollow golden fritters, eaten in a torn baguette with a slick of fierce kaani.",
  servings: 4,
  perServing: { calories: 510, protein: 18 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "dried black-eyed peas, soaked and skins rubbed off", qty: "2 cups", cost: 1.2 },
    { item: "small onion", qty: "1", cost: 0.3 },
    { item: "scotch bonnet (kaani), to taste", qty: "1", cost: 0.25, spansWeeks: true },
    { item: "garlic", qty: "1 clove", cost: 0.05, spansWeeks: true },
    { item: "neutral oil for deep-frying", qty: "for frying", cost: 0.7 },
    { item: "warm water and salt", qty: "as needed", cost: 0.05 },
  ],
  method: [
    "Rub the soaked peas under water until every skin floats free, leaving clean white beans.",
    "Blend the peas with onion, garlic, and scotch bonnet using the least water possible — the batter must hold a spoon's shape.",
    "Whisk hard by hand for several minutes to beat in air; the batter should pale and a dab dropped in water should float. Season with salt.",
    "Drop spoonfuls into steady medium-hot oil and fry, turning, until deep gold, puffed, and crisp — 3–4 minutes.",
    "Drain and serve hot in bread or on their own, with kaani for dipping.",
  ],
  modernMove:
    "Beating the skinned-bean batter until a spoonful floats traps air that flashes to steam in the oil, so each fritter blows up hollow and light instead of frying dense.",
  tags: ["street", "fried", "fritters", "black-eyed-peas", "senegalese"],
  sources: [
    {
      title: "Oldways — Accara: Black-eyed Pea Fritters from West Africa",
      url: "https://oldwayspt.org/recipe/accara-black-eyed-pea-fritters-west-africa/",
      note: "Skinning the soaked peas and whipping the batter light before frying, served with kaani.",
    },
  ],
};
