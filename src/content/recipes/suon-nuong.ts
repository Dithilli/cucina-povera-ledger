import type { Recipe } from "../types";

export const suonNuong: Recipe = {
  slug: "suon-nuong",
  title: "Sườn Nướng",
  cuisine: "vietnamese",
  blurb:
    "Lemongrass-marinated grilled pork chops over rice — a thin, cheap cut stretched to feed the table by the depth of its caramel-and-fish-sauce marinade.",
  servings: 4,
  perServing: { calories: 600, protein: 34 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "thin-cut pork shoulder chops", qty: "1 1/4 lb", cost: 3.6 },
    { item: "lemongrass stalks, minced", qty: "2", cost: 0.4, spansWeeks: true },
    { item: "shallots, minced", qty: "2", cost: 0.2 },
    { item: "garlic cloves, minced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "fish sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "brown sugar or honey", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "steamed rice to serve", qty: "4 cups", cost: 0.6 },
    { item: "cucumber, pickled carrot, nước chấm to serve", qty: "to serve", cost: 0.7 },
  ],
  method: [
    "Pound or score the thin chops so the marinade penetrates and they stay tender. Marinate in lemongrass, shallots, garlic, fish sauce, sugar, soy, and oil for at least 2 hours, overnight if you can.",
    "Let the meat come to room temperature before cooking so it sears rather than steams.",
    "Grill or pan-sear over high heat without crowding the pan, until the sugar in the marinade blackens to a sticky char on both sides but the inside stays juicy — about 3 minutes a side for a thin cut.",
    "Rest a couple of minutes, then serve sliced over steamed rice with cucumber, pickled carrot, and nước chấm to spoon over.",
  ],
  modernMove:
    "Sugar in the marinade is the trick: it caramelizes into a lacquered, bittersweet crust that makes a thin, inexpensive chop taste like far more meat than it is.",
  tags: ["grilled-pork", "lemongrass", "rice-plate", "nuoc-cham", "marinade"],
};
