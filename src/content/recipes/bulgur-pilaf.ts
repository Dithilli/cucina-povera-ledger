import type { Recipe } from "../types";

export const bulgurPilaf: Recipe = {
  slug: "bulgur-pilaf",
  title: "Bulgur Pilaf with Vermicelli",
  cuisine: "levantine",
  blurb:
    "Coarse bulgur cooked pilaf-style with toasted vermicelli and deeply caramelized onion — the everyday Levantine answer to rice, nuttier and cheaper.",
  servings: 4,
  perServing: { calories: 470, protein: 12 },
  estCostPerServing: 0.6,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "coarse bulgur (#3), rinsed", qty: "1 1/2 cups", cost: 0.7 },
    { item: "vermicelli or thin noodles, broken", qty: "1/2 cup", cost: 0.3 },
    { item: "large onion, thinly sliced", qty: "1", cost: 0.3 },
    {
      item: "olive oil or a knob of butter",
      qty: "3 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "vegetable stock or water", qty: "3 cups", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste" },
    { item: "chopped parsley to finish (optional)", qty: "to finish", cost: 0.2 },
  ],
  method: [
    "Cook the sliced onion slowly in the oil until deep golden and sweet — let some go almost mahogany for the caramel note. Lift out half to garnish.",
    "Add the broken vermicelli to the pan and toast in the oily onions until nut-brown.",
    "Stir in the rinsed bulgur to coat, then pour in the hot stock and salt. Bring to a boil, cover, and cook on the lowest heat 12–15 minutes until the liquid is absorbed.",
    "Rest covered 10 minutes, then fluff. Crown with the reserved caramelized onions, parsley, and black pepper.",
  ],
  modernMove:
    "Caramelizing the onions hard and reserving half as a topping gives the dish two registers of sweetness — one cooked into the grain, one crisp and dark on top.",
  tags: ["bulgur", "vermicelli", "pilaf", "vegan-option", "grains"],
  sources: [
    {
      title: "Plant Based Folk — Bulgur with Vermicelli (Burghul bil Shaariyeh)",
      url: "https://plantbasedfolk.com/bulgur-with-vermicelli-burghul-bil-shaariyeh/",
      note: "Confirms the classic coarse-bulgur-and-toasted-vermicelli pilaf method with caramelized onion.",
    },
  ],
};
