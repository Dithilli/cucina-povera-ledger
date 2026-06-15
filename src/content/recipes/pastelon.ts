import type { Recipe } from "../types";

export const pastelon: Recipe = {
  slug: "pastelon",
  title: "Pastelón",
  cuisine: "puerto-rican",
  blurb:
    "Layers of fried sweet plantain and saucy beef picadillo bound with cheese and egg — the island's plantain lasagna, where caramel-soft maduros play the noodle and every bite runs sweet against savory.",
  servings: 2,
  perServing: { calories: 660, protein: 24 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "ripe sweet plantains (maduros)", qty: "3", cost: 0.75 },
    { item: "ground beef", qty: "6 oz", cost: 1.2 },
    { item: "sofrito (recaíto)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "tomato sauce + manzanilla olives", qty: "3 tbsp + 1 tbsp", cost: 0.25 },
    { item: "sazón con achiote + adobo", qty: "1/2 tsp each", cost: 0.05, spansWeeks: true },
    { item: "egg", qty: "2", cost: 0.5 },
    { item: "shredded cheese", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "oil for frying plantains", qty: "for frying", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Brown the beef, drain, then simmer with sofrito, tomato sauce, olives, sazón and adobo into a thick picadillo.",
    "Slice the very ripe plantains lengthwise and fry until golden and caramel-soft; drain on paper.",
    "In an oiled baking dish, layer plantains, then picadillo and cheese, repeating and finishing with plantains and a last handful of cheese.",
    "Pour beaten egg over the top so it sets the layers, then bake at 350°F about 30 minutes until puffed and golden. Rest before cutting into squares.",
  ],
  modernMove:
    "Let the plantains go nearly black-ripe before frying — that deep sweetness is the whole point of pastelón against the savory beef.",
  notes: "The egg poured over the top is what binds it into sliceable lasagna rather than a loose casserole.",
  zeroWasteHero: false,
  tags: ["maduros", "horneado", "puerto-rican"],
  sources: [
    {
      title: "The Noshery — Pastelon (Puerto Rican Sweet Plantain Lasagna)",
      url: "https://thenoshery.com/pastelon-sweet-plaintain-lasagna/",
      note: "fried maduros layered with sofrito picadillo, cheese and egg, then baked",
    },
  ],
};
