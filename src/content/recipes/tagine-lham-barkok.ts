import type { Recipe } from "../types";

export const tagineLhamBarkok: Recipe = {
  slug: "tagine-lham-barkok",
  title: "Tagine Lham bel Barkok",
  cuisine: "moroccan",
  blurb:
    "A sweet-savory festival tagine of lamb braised in cinnamon and saffron until spoon-tender, finished with honey-glazed prunes and fried almonds — the dish of weddings and Eid.",
  servings: 4,
  perServing: { calories: 620, protein: 26 },
  estCostPerServing: 2.4,
  roles: ["dinner"],
  ingredients: [
    { item: "lamb shoulder, cut in chunks", qty: "1 lb", cost: 5.0 },
    { item: "onions, finely sliced", qty: "2 large", cost: 0.6 },
    { item: "pitted prunes", qty: "1 cup", cost: 1.0 },
    { item: "whole almonds, blanched", qty: "1/3 cup", cost: 0.7, spansWeeks: true },
    { item: "ras el hanout", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "cinnamon stick plus ground ginger", qty: "1 stick, 1 tsp", cost: 0.2, spansWeeks: true },
    { item: "saffron threads", qty: "small pinch", cost: 0.4, spansWeeks: true },
    { item: "honey", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "olive oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sesame seeds, toasted", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Brown the lamb in olive oil, then add the sliced onions, ginger, ras el hanout, cinnamon stick, and saffron bloomed in warm water. Pour in water just to cover, salt lightly, cover, and braise low until the meat is fork-tender, about 1.5 hours.",
    "Meanwhile fry the blanched almonds in a little oil until golden and set aside; they stay crunchy for the garnish.",
    "Lift the lamb out and reduce the braising liquid to a thick, dark sauce. Simmer the prunes in it with the honey and a little extra cinnamon until they swell and glaze.",
    "Return the lamb to warm through, then plate with the prunes, scatter the fried almonds and toasted sesame on top, and serve with khobz.",
  ],
  modernMove:
    "Reducing the braise to a syrup before the honey goes in means the sweetness coats rather than dilutes — the prunes glaze instead of stewing into mush.",
  notes:
    "A pound of shoulder feeds four because the prunes, almonds, and rich onion sauce do the heavy lifting; this is celebration food built on a little meat.",
  tags: ["tagine", "lamb", "prunes", "almonds", "moroccan"],
  sources: [
    {
      title: "Grantourismo Travels — Moroccan Lamb Tagine with Prunes and Almonds",
      url: "https://grantourismotravels.com/moroccan-lamb-tagine-prunes-almonds-recipe/",
      note: "Saffron-cinnamon lamb braise with honey-glazed prunes and fried almond garnish",
    },
  ],
};
