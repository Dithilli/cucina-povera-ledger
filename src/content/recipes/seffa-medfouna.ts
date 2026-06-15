import type { Recipe } from "../types";

export const seffaMedfouna: Recipe = {
  slug: "seffa-medfouna",
  title: "Seffa Medfouna",
  cuisine: "moroccan",
  blurb:
    "A dome of steamed vermicelli dusted with cinnamon, sugar, and almonds, with a fragrant saffron chicken buried at its heart — the sweet-savory celebration dish whose name means 'hidden.'",
  servings: 4,
  perServing: { calories: 680, protein: 24 },
  estCostPerServing: 2.3,
  roles: ["dinner"],
  ingredients: [
    { item: "fine vermicelli (cheveux d'ange)", qty: "12 oz", cost: 1.0 },
    { item: "bone-in chicken thighs", qty: "1 lb", cost: 3.0 },
    { item: "onions, grated", qty: "2", cost: 0.6 },
    { item: "raisins", qty: "1/3 cup", cost: 0.4 },
    { item: "almonds, blanched and fried", qty: "1/3 cup", cost: 0.7, spansWeeks: true },
    { item: "ground ginger, turmeric, white pepper", qty: "1 tsp each", cost: 0.2, spansWeeks: true },
    { item: "saffron threads", qty: "small pinch", cost: 0.4, spansWeeks: true },
    { item: "smen or butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "powdered sugar and ground cinnamon", qty: "for dusting", cost: 0.3, spansWeeks: true },
    { item: "olive oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Braise the chicken gently with the grated onions, ginger, turmeric, white pepper, saffron, and a little water until very tender, then reduce the onions to a soft sauce and shred or keep the pieces whole.",
    "Steam the vermicelli over water in stages — toss with oil, steam, separate, and repeat three or four times until light and silky, never boiled — then toss with smen and a little salt.",
    "Plump the raisins in a splash of the chicken broth, and fry the almonds until golden.",
    "Build the dome: spread a base of vermicelli, bury the chicken and its onions in the center, mound the rest of the vermicelli over to hide it completely.",
    "Decorate with lines of cinnamon and powdered sugar, scatter the fried almonds and raisins, and serve so each diner uncovers the hidden chicken.",
  ],
  modernMove:
    "Steaming the vermicelli in repeated passes instead of boiling gives the light, almost fluffy strands that hold the cinnamon-sugar without turning to paste.",
  notes:
    "A festive plate that stretches a pound of chicken across four by burying it under sweet grain; the sugar and almonds make it read as a whole meal, not a side.",
  tags: ["seffa", "vermicelli", "chicken", "sweet-savory", "moroccan"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Seffa Medfouna",
      url: "https://tasteofmaroc.com/seffa-medfouna-recipe/",
      note: "Steamed vermicelli dome hiding saffron-braised chicken, dressed with cinnamon, sugar, and fried almonds",
    },
  ],
};
