import type { Recipe } from "../types";

export const klopsikiPl: Recipe = {
  slug: "klopsiki",
  title: "Klopsiki w Sosie",
  cuisine: "polish",
  blurb:
    "Tender pork-and-beef meatballs bound with a soaked roll, poached gently and then bathed in a creamy sauce gone green with fresh dill — soft, comforting, and built to soak into a mound of potatoes.",
  servings: 4,
  perServing: { calories: 540, protein: 28 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "ground pork and beef, mixed", qty: "1 lb", cost: 3.8 },
    { item: "stale white roll or bread (bułka)", qty: "1 (or 2 thick slices)", cost: 0.2 },
    { item: "milk (to soak the roll)", qty: "1/2 cup", cost: 0.15 },
    { item: "onion, grated", qty: "1 small", cost: 0.2 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "sour cream (śmietana)", qty: "1/2 cup", cost: 0.5 },
    { item: "fresh dill, chopped", qty: "1 small bunch", cost: 0.5 },
    { item: "flour (to thicken)", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "lard or oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "floury potatoes, to serve", qty: "1 1/2 lb", cost: 0.9 },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the roll in the milk until soft, then squeeze out the excess and tear it up. Mix it into the meat with the grated onion, egg, a good pinch of salt, and plenty of pepper, working it just until it comes together. Wet your hands and roll into walnut-sized balls.",
    "Bring a wide pot of lightly salted water (or thin stock) to a bare simmer. Slide the meatballs in and poach gently, not boiling, for 12–15 minutes, until firm and cooked through. Lift them out and keep warm; save the poaching liquid.",
    "Melt the lard in a pan, whisk in the flour, and cook a minute. Slowly whisk in about 1 1/2 cups of the reserved poaching liquid to make a smooth, light sauce; simmer until it thickens.",
    "Temper a ladle of the hot sauce into the sour cream, then stir the loosened cream back into the pan off a hard boil so it doesn't split. Fold in most of the dill and season.",
    "Return the meatballs to warm through in the sauce. Serve over boiled potatoes, scattered with the last of the dill.",
  ],
  modernMove:
    "Poach the meatballs in water rather than frying them — that's what makes klopsiki pillow-soft instead of dense, and the cloudy poaching liquid becomes the body of the sauce, so nothing is wasted. Add the sour cream off the boil and tempered, or it curdles into grainy threads.",
  notes:
    "A tomato version (w sosie pomidorowym) swaps the dill cream for the poaching liquid loosened with tomato paste and a pinch of sugar — same meatballs, same method, just a redder sauce.",
  zeroWasteHero: false,
  tags: ["meat", "meatballs", "dill", "polish"],
  sources: [
    {
      title: "Polonist — Pulpety: Polish Meatballs in Dill Sauce",
      url: "https://www.polonist.com/pulpety-polish-meatballs-dill/",
      note: "Soaked-roll binder, gentle poaching, and the sour-cream-and-dill sauce built on the poaching liquid.",
    },
  ],
};
