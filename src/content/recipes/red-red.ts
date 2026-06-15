import type { Recipe } from "../types";

export const redRed: Recipe = {
  slug: "red-red",
  title: "Red Red",
  cuisine: "west-african",
  blurb:
    "Ghana's everyday black-eyed pea stew, stained twice red — by red palm oil and tomato — and served with sweet fried plantain.",
  servings: 4,
  perServing: { calories: 620, protein: 22 },
  estCostPerServing: 1.05,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried black-eyed peas (cowpeas), soaked overnight",
      qty: "1 1/2 cups",
      cost: 0.9,
    },
    { item: "red palm oil", qty: "1/4 cup", cost: 0.6, spansWeeks: true },
    { item: "large onion, diced", qty: "1", cost: 0.35 },
    { item: "plum tomatoes, blended (or 1 can)", qty: "4", cost: 0.7 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    {
      item: "scotch bonnet, whole or minced to taste",
      qty: "1",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "ripe plantains, sliced", qty: "2", cost: 0.8 },
    { item: "neutral oil for frying the plantain", qty: "for frying", cost: 0.2 },
    { item: "salt and a pinch of ground crayfish (optional)", qty: "to taste" },
  ],
  method: [
    "Simmer the soaked black-eyed peas in unsalted water until just tender but still holding shape, 35–45 minutes; drain and reserve a cup of the cooking liquid.",
    "Warm the red palm oil gently until it loosens and turns bright (do not let it smoke), then sweat the onion until soft and golden.",
    "Stir in garlic, ginger, tomato paste, and the blended tomatoes with the scotch bonnet. Cook down hard until the sauce darkens to a deep brick red and the oil rises — this fry is what makes it 'red red.'",
    "Fold in the peas with a splash of their liquid, season, and simmer 10–15 minutes so they drink the sauce.",
    "Meanwhile fry the plantain slices in neutral oil until caramelised at the edges; drain on paper.",
    "Serve the stew with the fried plantain alongside (or folded in at the end).",
  ],
  modernMove:
    "Letting the tomato base fry past 'cooked' until the palm oil splits back out builds the toasty, deep flavour that distinguishes a real red red from a pale bean stew.",
  tags: ["legumes", "black-eyed-peas", "palm-oil", "plantain", "stew", "ghanaian"],
  sources: [
    {
      title: "Red red — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Red_red",
      note: "Confirms red red is a Ghanaian black-eyed pea stew cooked in red palm oil and served with fried plantain, named for the red colour from oil and plantain.",
    },
  ],
};
