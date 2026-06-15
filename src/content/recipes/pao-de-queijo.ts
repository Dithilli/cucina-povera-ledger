import type { Recipe } from "../types";

export const paoDeQueijo: Recipe = {
  slug: "pao-de-queijo",
  title: "Pão de Queijo",
  cuisine: "brazilian",
  blurb:
    "Chewy, hollow cheese puffs from scalded tapioca starch — gluten-free by birth, crisp-shelled and stretchy inside, the smell of every Minas Gerais kitchen.",
  servings: 2,
  perServing: { calories: 470, protein: 14 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "tapioca starch (polvilho)", qty: "2 cups", cost: 1.0 },
    { item: "milk", qty: "1/2 cup", cost: 0.2 },
    { item: "neutral oil", qty: "1/4 cup", cost: 0.3 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "grated parmesan or aged cheese", qty: "3/4 cup", cost: 0.8 },
    { item: "salt", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Heat the milk, oil, and salt to a boil, then pour over the tapioca starch and stir hard — it will seize into a sticky, gelatinous mass.",
    "Let the scalded dough cool to warm, then beat in the egg and the grated cheese until smooth and stretchy.",
    "Roll into walnut-sized balls with oiled hands and set on a lined tray.",
    "Bake at 375°F for 20–25 minutes until puffed and golden with crisp shells. Eat warm, while they still pull apart in strands.",
  ],
  modernMove:
    "Scalding the polvilho with boiling milk-and-oil is the non-negotiable step — that gelatinization is what gives the chew; skip it and you get hollow crackers.",
  notes: "Freeze raw balls on a tray, then bake from frozen straight to a hot oven.",
  zeroWasteHero: false,
  tags: ["mineiro", "cheese", "gluten-free", "brazilian"],
  sources: [
    {
      title: "Pão de Queijo — Olivia's Cuisine",
      url: "https://www.oliviascuisine.com/authentic-brazilian-cheese-bread/",
      note: "scalded tapioca-starch dough with milk, oil, egg, and aged cheese",
    },
  ],
};
