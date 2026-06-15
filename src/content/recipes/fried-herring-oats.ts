import type { Recipe } from "../types";

export const friedHerringOats: Recipe = {
  slug: "fried-herring-oats",
  title: "Herring Fried in Oatmeal",
  cuisine: "irish",
  blurb:
    "Whole herring pressed in medium oatmeal and fried in bacon fat until the crust crackles — the cheapest fish in the sea given a nutty golden coat and eaten with floury potatoes.",
  servings: 4,
  perServing: { calories: 520, protein: 28 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh herring, cleaned and boned (or filleted)", qty: "4 fish", cost: 3.6 },
    { item: "medium oatmeal (pinhead, not instant)", qty: "1 cup", cost: 0.4 },
    { item: "floury potatoes, for boiling", qty: "1 1/2 lb", cost: 1.0 },
    { item: "streaky bacon", qty: "2 oz", cost: 0.6 },
    { item: "egg, beaten", qty: "1", cost: 0.25 },
    { item: "butter, lemon, salt, pepper", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Put the potatoes on to boil in salted water. Pat the herring bone-dry with a cloth — wet fish won't hold the oats.",
    "Season the oatmeal with salt and pepper. Dip each herring in the beaten egg, then press both sides firmly into the oatmeal so it sticks in a thick coat.",
    "Fry the bacon in a heavy pan until crisp; lift it out and leave the fat behind, adding a knob of butter to it.",
    "Lay the herring in the hot fat and fry over medium heat 3–4 minutes a side, pressing gently, until the oat crust is deep golden and crisp and the flesh flakes.",
    "Serve each fish with the crumbled bacon, the drained floury potatoes, and a wedge of lemon to cut the richness.",
  ],
  modernMove:
    "Toast the oatmeal dry in a pan for a minute before coating the fish — it deepens the nutty flavour and helps the crust crisp faster so the delicate herring doesn't overcook.",
  notes:
    "Use medium or pinhead oatmeal, never rolled or instant oats, which go pasty. Herring is oily and cheap, so it fries beautifully in its own and the bacon's fat with little extra needed.",
  zeroWasteHero: false,
  tags: ["fish", "herring", "oatmeal", "potato", "fried", "dinner", "irish"],
  sources: [
    {
      title: "Hamlyns of Scotland — Traditional Herring in Oatmeal",
      url: "https://hamlynsoats.co.uk/recipes/traditional-herring-in-oatmeal/",
      note: "whole herring dipped in egg, pressed in medium oatmeal and pan-fried until the crust is golden and crisp",
    },
  ],
};
