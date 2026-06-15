import type { Recipe } from "../types";

export const bakaliarosSkordalia: Recipe = {
  slug: "bakaliaros-skordalia",
  title: "Bakaliaros me Skordalia (Fried Salt Cod with Garlic Sauce)",
  cuisine: "greek",
  blurb:
    "Salt cod soaked back to life, battered, and fried golden, served with skordalia — a fierce garlic-and-potato sauce. A landlocked-larder classic from dried fish and a few cloves.",
  servings: 4,
  perServing: { calories: 640, protein: 34 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bakaliaros), soaked 24–36 hrs, water changed often", qty: "1 lb", cost: 4.5 },
    { item: "floury potatoes (for the skordalia)", qty: "1 lb", cost: 0.7 },
    { item: "garlic cloves", qty: "4–6", cost: 0.4, spansWeeks: true },
    { item: "plain flour + a little water/beer for batter", qty: "1 cup", cost: 0.3, spansWeeks: true },
    { item: "olive oil (sauce) + frying oil", qty: "1/2 cup + 1 cup", cost: 2.0, spansWeeks: true },
    { item: "red wine vinegar or lemon", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the salt cod 24–36 hours in plenty of cold water, changing it several times, until it tastes only gently salty. Pat dry and cut into finger-length pieces.",
    "For the skordalia: boil the potatoes until soft, drain, and mash smooth. Pound the garlic with a little salt to a paste, then beat it into the warm potato with olive oil and vinegar added in a thin stream until thick, fluffy, and pungent. Loosen with a little warm water if stiff.",
    "Make a loose batter with the flour and enough water (or beer) to coat a spoon. Dip the cod pieces.",
    "Heat half an inch of oil until shimmering and fry the cod in batches until puffed and deep gold, 3–4 minutes, turning once. Drain on paper.",
    "Serve the hot fried cod with a generous spoonful of skordalia and black pepper. A few wild greens or beets alongside is traditional.",
  ],
  modernMove:
    "Beat the olive oil and garlic into the potato while it's still warm, in a thin stream like a mayonnaise — that emulsion is what makes skordalia airy and glossy instead of a heavy mash.",
  notes:
    "Salt cod was the cheap, shelf-stable fish that reached inland villages with no coast; properly soaked, a pound feeds four. Traditional on March 25th and Palm Sunday.",
  tags: ["fish", "salt-cod", "bakaliaros", "skordalia", "garlic", "fried"],
  sources: [
    {
      title: "My Greek Dish — Bakaliaros Skordalia (Cod Fritters with Garlicky Potato Purée)",
      url: "https://www.mygreekdish.com/recipe/cod-fritters-garlicky-potato-puree-bakaliaros-skordalia/",
      note: "Confirms desalted cod fried in batter and served with garlic-and-potato skordalia.",
    },
  ],
};
