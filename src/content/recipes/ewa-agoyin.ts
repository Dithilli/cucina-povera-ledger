import type { Recipe } from "../types";

export const ewaAgoyin: Recipe = {
  slug: "ewa-agoyin",
  title: "Ewa Agoyin",
  cuisine: "west-african",
  blurb:
    "Lagos street-food beans cooked to a soft mash, crowned with ata dindin — a near-black, slow-fried dried-pepper sauce.",
  servings: 4,
  perServing: { calories: 560, protein: 20 },
  estCostPerServing: 0.95,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried black-eyed peas or brown honey beans, soaked",
      qty: "1 1/2 cups",
      cost: 0.9,
    },
    { item: "red palm oil", qty: "1/3 cup", cost: 0.8, spansWeeks: true },
    { item: "large onions, sliced", qty: "2", cost: 0.7 },
    {
      item: "dried red peppers, soaked (cayenne / tatashe mix)",
      qty: "8",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "scotch bonnet, to taste",
      qty: "1–2",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "ground crayfish or fermented locust bean (iru), optional",
      qty: "1 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Boil the soaked beans in plenty of unsalted water until completely soft and breaking down, topping up the water as needed, 60–90 minutes. Mash to a coarse purée and season with salt; keep warm and loose.",
    "Blend the soaked dried peppers and scotch bonnet with one of the onions to a paste.",
    "For the ata dindin: heat the red palm oil and fry the second, sliced onion slowly until deeply browned and almost burnt — this is the agoyin signature.",
    "Add the pepper paste and the crayfish/iru and fry low and patient, stirring, until the sauce turns dark, jammy, and the oil pools on top — 20–30 minutes. Salt to taste.",
    "Spoon the soft beans into bowls and ladle the dark pepper sauce generously over the top.",
  ],
  modernMove:
    "The whole dish lives or dies on frying the onions and peppers far past golden into a controlled char — the bitterness from that deep fry is what gives ewa agoyin its haunting, smoky depth.",
  tags: [
    "legumes",
    "black-eyed-peas",
    "palm-oil",
    "pepper-sauce",
    "street-food",
    "nigerian",
  ],
};
