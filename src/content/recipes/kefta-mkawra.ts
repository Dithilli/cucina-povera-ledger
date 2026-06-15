import type { Recipe } from "../types";

export const keftaMkawra: Recipe = {
  slug: "kefta-mkawra",
  title: "Kefta Mkaouara",
  cuisine: "moroccan",
  blurb:
    "Thumb-sized spiced meatballs simmered down in a thick paprika-and-cumin tomato sauce, eggs cracked over the top to poach, then carried to the table in the tagine and eaten straight from the pan with torn khobz.",
  servings: 4,
  perServing: { calories: 560, protein: 28 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "ground beef or lamb", qty: "1 lb", cost: 4.5 },
    { item: "onion, grated", qty: "1 large", cost: 0.3 },
    { item: "canned crushed tomatoes", qty: "1 (28 oz) can", cost: 1.4 },
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "cilantro and parsley, chopped", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "garlic", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "paprika, cumin, cinnamon, cayenne", qty: "1 tbsp total", cost: 0.2, spansWeeks: true },
    { item: "olive oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Knead the meat with half the grated onion, half the herbs, garlic, and a pinch of each spice until tacky, then roll into small 3/4-inch balls.",
    "Soften the remaining onion in olive oil in a tagine or deep skillet, stir in the rest of the spices for thirty seconds to bloom them, then pour in the tomatoes and a splash of water.",
    "Tuck the meatballs into the simmering sauce in a single layer and cook gently, uncovered, about 30–40 minutes until the sauce is thick and glossy.",
    "Crack the eggs into the gaps between the meatballs, cover, and poach 5 minutes until the whites set but the yolks stay soft.",
    "Scatter the last of the herbs over and serve in the pan with bread for scooping.",
  ],
  modernMove:
    "Grating the onion instead of chopping releases its juice into the meat so the kefta stays moist, and blooming the spices in oil before the tomatoes go in wakes up the paprika and cumin instead of leaving them raw.",
  notes:
    "A communal one-pan dinner — no plates needed, everyone scoops from the shared tagine with bread.",
  zeroWasteHero: false,
  tags: ["kefta", "meatballs", "eggs", "tagine", "moroccan"],
  sources: [
    {
      title: "Taste of Maroc — Classic Moroccan Meatball Tagine with Tomato Sauce",
      url: "https://tasteofmaroc.com/moroccan-meatball-tagine-tomato-sauce/",
      note: "Grated-onion kefta simmered in spiced tomato with eggs poached on top, served from the tagine.",
    },
  ],
};
