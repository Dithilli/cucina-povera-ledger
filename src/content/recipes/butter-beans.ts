import type { Recipe } from "../types";

export const butterBeans: Recipe = {
  slug: "butter-beans",
  title: "Stewed Butter Beans",
  cuisine: "american-south",
  blurb:
    "Big creamy lima — butter — beans stewed low and slow with smoked pork until the pot-liquor goes silky, a soul-food side that eats like a meal over rice or cornbread.",
  servings: 4,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch", "side"],
  ingredients: [
    { item: "dried large lima (butter) beans, soaked overnight", qty: "1 lb (about 2 1/2 cups)", cost: 1.7 },
    { item: "smoked ham hock, smoked turkey wing, or slab bacon", qty: "1 piece (~6 oz)", cost: 1.4 },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "celery, diced", qty: "1 rib", cost: 0.15, spansWeeks: true },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "bay leaf", qty: "1", spansWeeks: true },
    { item: "butter", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "cayenne, black pepper, salt", qty: "to taste" },
  ],
  method: [
    "Drain the soaked beans. In a heavy pot, render the smoked meat a few minutes, then sweat the onion and celery until soft, 6 to 8 minutes. Stir in the garlic for a minute.",
    "Add the beans, bay, a pinch of cayenne, and the smoked meat. Cover with cold water by 2 inches. Do NOT salt yet — early salt keeps lima skins tough.",
    "Bring to a boil, skim the foam, then drop to the gentlest simmer, partly covered. Cook low and slow 1 to 1 1/2 hours, topping up with hot water so the beans stay just covered. Lima beans want a patient, barely-bubbling pot or they break apart.",
    "When the beans are meltingly tender, mash a ladleful against the side and stir it back in to thicken the pot-liquor into gravy. Stir in the butter for gloss.",
    "Pull the meat, shred the lean off the bone, and return it. Salt and black pepper to taste now. Fish out the bay leaf.",
    "Serve in bowls over white rice or alongside cornbread to sop the pot-liquor, with hot sauce at the table.",
  ],
  modernMove:
    "A spoonful of butter beaten in at the end — over a base already mashed creamy from its own starch — doubles down on why they're called butter beans: pure silk, no cream or flour required.",
  notes:
    "Speckled or 'baby' limas work too and cook faster. The smoked seasoning meat carries the whole pot; smoked turkey keeps it leaner.",
  zeroWasteHero: true,
  tags: ["dinner", "side", "legumes", "butter-beans", "lima-beans", "smoked-pork", "soul-food"],
  sources: [
    {
      title: "Camellia Brand — Southern Large Limas with Ham Hocks",
      url: "https://www.camelliabrand.com/recipes/southern-large-limas-with-ham-hock/",
      note: "Confirms the dried large lima (butter) bean and smoked ham hock pairing stewed Southern-style.",
    },
  ],
};
