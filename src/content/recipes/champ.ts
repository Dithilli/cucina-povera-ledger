import type { Recipe } from "../types";

export const champ: Recipe = {
  slug: "champ",
  title: "Champ",
  cuisine: "irish",
  blurb:
    "Ulster's everyday triumph — potatoes whipped fluffy with scallion-steeped milk, served in a mound with a deep well of butter at its heart that you eat from the outside in, dipping each spoonful into the melted gold.",
  servings: 4,
  perServing: { calories: 480, protein: 12 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "floury potatoes (Maris Piper / russet), peeled", qty: "2 lb", cost: 1.2 },
    { item: "scallions, finely sliced", qty: "1 bunch (6–8)", cost: 0.5 },
    { item: "whole milk", qty: "1 cup", cost: 0.4, spansWeeks: true },
    { item: "butter", qty: "5 tbsp", cost: 0.6, spansWeeks: true },
    { item: "salt and white pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the peeled potatoes in salted water until tender, 20–25 minutes, then drain and steam dry in the pan off the heat.",
    "While they cook, gently warm the milk with most of the sliced scallions, holding back a little green for the top, until the milk is fragrant — don't let it boil over.",
    "Mash the potatoes smooth, then beat in the hot scallion milk a little at a time until the mash is light, soft and almost pourable.",
    "Beat in a couple of tablespoons of butter, season with salt and white pepper, and fold in the reserved scallion greens.",
    "Heap into warm bowls, hollow a well in each, and set in a knob of butter to melt — eat from the rim inward, dragging each forkful through the pool.",
  ],
  modernMove:
    "Infuse the milk with the scallions over low heat before mashing rather than stirring them in raw — gentle heat draws their sweetness into every bite while keeping the mash a clean pale green flecked with the bright reserved tops.",
  notes:
    "Older versions infused the milk with stinging nettles before scallions became the standard. A close cousin of champ from further north, 'poundies', is the same idea pounded by hand.",
  zeroWasteHero: false,
  tags: ["potato", "scallion", "irish"],
  sources: [
    {
      title: "The Kitchn — Irish Champ Recipe (with Scallions)",
      url: "https://www.thekitchn.com/irish-champ-recipe-23281268",
      note: "Scallion-infused milk beaten into mash, served with a central well of butter.",
    },
  ],
};
