import type { Recipe } from "../types";

export const jollofRice: Recipe = {
  slug: "jollof-rice",
  title: "Jollof Rice",
  cuisine: "west-african",
  blurb:
    "The party-table champion — long-grain rice simmered in a fried tomato-pepper base until every grain stains red and the bottom catches into smoky, prized 'party rice'. One pot, endlessly argued over.",
  servings: 6,
  perServing: { calories: 480, protein: 9 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "long-grain parboiled rice", qty: "3 cups", cost: 1.2 },
    { item: "ripe tomatoes (or 1 can plum tomatoes)", qty: "1 lb", cost: 1.0 },
    { item: "red bell peppers (tatashe), seeded", qty: "2", cost: 1.2 },
    { item: "scotch bonnet pepper (to taste)", qty: "1–2", cost: 0.4, spansWeeks: true },
    { item: "onions", qty: "2", cost: 0.8 },
    { item: "tomato paste", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "red palm oil or neutral oil", qty: "1/3 cup", cost: 0.6, spansWeeks: true },
    { item: "ground crayfish", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "stock cubes", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "bay leaves, curry powder, thyme", qty: "1 tsp each", cost: 0.3, spansWeeks: true },
    { item: "stock or water", qty: "2 1/2 cups" },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Blend the tomatoes, red peppers, scotch bonnet, and one onion smooth. Boil this down in a dry pot until much of the water cooks off — a pre-reduced base is what keeps the finished rice dry and grainy, never soggy.",
    "Slice the second onion and fry in the oil until soft, stir in the tomato paste and let it darken, then add the reduced pepper blend and fry hard until the oil splits and the colour deepens to brick-red — 15 minutes. This is the obe ata at the heart of jollof.",
    "Stir in the stock, ground crayfish, crushed stock cubes, bay, curry, thyme, and salt. Taste — it should be punchy, since the bland rice will absorb it.",
    "Rinse the rice and stir it in so every grain is coated. The liquid should just cover; if not, top up. Cover tightly (foil under the lid) and cook on low without stirring.",
    "Let it go 25 to 30 minutes until the rice is tender and the liquid is gone. Don't stir — leaving it alone lets the bottom toast into smoky, slightly charred party rice, the most coveted part of the pot.",
    "Turn the whole pot gently from the bottom to mix the toasted layer through, and serve.",
  ],
  modernMove:
    "Cook it covered and resist stirring: the trapped steam cooks the top while the base scorches lightly against the pot, giving the faint smokiness that separates real jollof from tomato rice. A heavy pot and patience do the work.",
  notes:
    "Stretch it to a full dinner with a fried egg, fried plantain, or a few beans on the side. Leftovers reheat better than almost any rice — the flavour keeps developing.",
  tags: ["dinner", "lunch", "rice", "one-pot", "jollof", "tomato-pepper", "party-rice"],
};
