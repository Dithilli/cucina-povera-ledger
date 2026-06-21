import type { Recipe } from "../types";

export const sheikhElMahshi: Recipe = {
  slug: "sheikh-el-mahshi",
  title: "Sheikh el Mahshi",
  cuisine: "levantine",
  blurb:
    "'The king of stuffed' — baby eggplant split and packed with spiced rice and pine nuts, then braised in tomato until collapsing; a frugal meatless take on the feast dish.",
  servings: 4,
  perServing: { calories: 540, protein: 11 },
  estCostPerServing: 1.33,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "baby eggplants", qty: "8", cost: 2.4 },
    { item: "short-grain rice, rinsed", qty: "1 cup", cost: 0.5 },
    { item: "pine nuts (or chopped walnuts)", qty: "1/4 cup", cost: 0.9 },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "tomatoes, grated (or canned, crushed)", qty: "4", cost: 1.0 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "olive oil",
      qty: "1/4 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "ground allspice, cinnamon, cumin", qty: "1/2 tsp each", cost: 0.15, spansWeeks: true },
    { item: "salt, black pepper, pinch sugar", qty: "to taste" },
    { item: "chopped parsley to finish", qty: "to finish", cost: 0.2 },
  ],
  method: [
    "Halve the eggplants lengthwise (keeping the stem) without cutting all the way through, salt the cut sides, and rest 15 minutes; pat dry. Soften them in olive oil until pliable, then lift out.",
    "Toast the pine nuts in the same pan, set aside, then soften the onion and garlic. Stir in the rinsed rice, allspice, cinnamon, cumin, half the grated tomato, the pine nuts, salt, and pepper.",
    "Open each eggplant like a pocket and pack with the rice filling. Nestle them cut-side up in a snug pot or baking dish.",
    "Loosen the tomato paste and remaining grated tomato with 2 cups water, a pinch of sugar, and salt; pour around the eggplants to come halfway up. Cover and braise low (or bake at 180°C / 350°F) 45 minutes until the rice is cooked and the eggplant collapses. Finish with parsley.",
  ],
  modernMove:
    "Salting and pre-frying the eggplant briefly in oil before stuffing keeps it from turning bitter or spongy, so it braises down into something silky rather than waterlogged.",
  notes:
    "Traditionally meat-stuffed; here the pine nuts and toasted spices carry the richness so it stays cheap and vegetarian without tasting like a compromise.",
  tags: ["eggplant", "stuffed", "rice", "pine-nuts", "vegetarian", "braised"],
  sources: [
    {
      title: "Maureen Abood — maureenabood.com",
      url: "https://maureenabood.com/lebanese-eggplant-boats-another-sheik-al-mehsheh/",
      note: "Sheikh el Mahshi method — broiling the eggplant, the spiced filling with pine nuts, and braising in tomato.",
    },
  ],
};
