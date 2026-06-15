import type { Recipe } from "../types";

export const colcannon: Recipe = {
  slug: "colcannon",
  title: "Colcannon",
  cuisine: "irish",
  blurb:
    "Floury potatoes mashed loose with butter-wilted kale or cabbage and a scatter of scallion, then dimpled with a well of melting butter that you drag each forkful through — the Halloween supper that hid a ring for luck.",
  servings: 4,
  perServing: { calories: 470, protein: 12 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "floury potatoes (Maris Piper / russet), peeled", qty: "2 lb", cost: 1.2 },
    { item: "curly kale or savoy cabbage, shredded", qty: "1/2 lb", cost: 0.8 },
    { item: "scallions, sliced (white and green)", qty: "4", cost: 0.4 },
    { item: "whole milk", qty: "3/4 cup", cost: 0.3, spansWeeks: true },
    { item: "butter", qty: "5 tbsp", cost: 0.6, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the potatoes whole in well-salted water until a knife slides through, 20–25 minutes, then drain and let them steam dry in the colander.",
    "Meanwhile melt a knob of butter in a wide pan and wilt the kale or cabbage with a splash of water until tender and glossy, 5–8 minutes; season.",
    "Warm the milk with the sliced scallions to take the raw bite off them and to keep the mash from cooling.",
    "Mash the dried potatoes with most of the butter, then beat in the warm scallion milk until soft and fluffy, and fold through the buttery greens.",
    "Pile into a warm bowl, press a hollow in the top, and drop in the last of the butter to melt into a golden well.",
  ],
  modernMove:
    "Steam-dry the drained potatoes off the heat before mashing — driving off the surface water lets them drink up far more butter and milk, so the mash turns silky instead of gluey.",
  notes:
    "From the Irish 'cál ceannann', white-headed cabbage. Traditionally a Halloween dish in which a ring, a thimble and small coins were hidden for fortune-telling.",
  zeroWasteHero: false,
  tags: ["potato", "kale", "cabbage", "irish"],
  sources: [
    {
      title: "The Kitchn — Colcannon (the Best Irish Mashed Potatoes)",
      url: "https://www.thekitchn.com/how-to-make-colcannon-irish-potatoes-and-cabbage-242195",
      note: "Butter-wilted cabbage or kale folded into scallion mash, finished with a well of butter.",
    },
  ],
};
