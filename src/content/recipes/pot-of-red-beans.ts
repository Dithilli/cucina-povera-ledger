import type { Recipe } from "../types";

export const potOfRedBeans: Recipe = {
  slug: "pot-of-red-beans",
  title: "A pot of red beans",
  cuisine: "american-south",
  blurb:
    "Dried red kidney beans simmered low and slow with the trinity and a piece of smoked pork until the pot-liquor turns thick and creamy — the New Orleans Monday workhorse.",
  servings: 6,
  perServing: { calories: 270, protein: 16 },
  estCostPerServing: 0.55,
  roles: ["base"],
  ingredients: [
    { item: "dried red kidney beans, soaked overnight", qty: "1 lb (about 2 1/2 cups)", cost: 1.6 },
    { item: "smoked ham hock, turkey wing, or pickled-pork seasoning meat", qty: "1 piece (~8 oz)", cost: 1.5 },
    { item: "onion, diced", qty: "1 large", cost: 0.3 },
    { item: "celery, diced", qty: "2 ribs", cost: 0.3, spansWeeks: true },
    { item: "green bell pepper, diced", qty: "1", cost: 0.4 },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "bay leaves", qty: "2", spansWeeks: true },
    { item: "dried thyme", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "cayenne and black pepper", qty: "to taste", spansWeeks: true },
    { item: "salt", qty: "to taste (added late)" },
  ],
  method: [
    "Drain the soaked beans. In a heavy pot, render the smoked meat for a few minutes, then add the onion, celery, and bell pepper — the trinity — and sweat until soft, about 8 minutes. Stir in the garlic for a minute.",
    "Add the beans, bay, thyme, a good hit of cayenne and black pepper, and cover with cold water by 2 inches. Drop in the smoked pork. Do NOT salt yet — salt early toughens the skins.",
    "Bring to a boil, then drop to the barest simmer, partly covered. Cook low and slow for 1 1/2 to 2 hours, stirring now and then and topping up with hot water so the beans stay just covered.",
    "When the beans are fully tender, mash a ladleful against the side of the pot and stir it back in — this is what turns the liquor creamy instead of watery. Simmer 20 minutes more uncovered to thicken.",
    "Pull the meat, shred any lean off the bone, and return it to the pot. Salt to taste now. Fish out the bay leaves.",
    "Refrigerate up to 5 days or freeze in portions; the beans only get better on day two.",
  ],
  modernMove:
    "Mashing part of the beans into their own pot-liquor — instead of adding flour or cream — is what gives proper red beans their velvet body. Patience and a hard mash do the work.",
  notes:
    "The smoked seasoning meat is the soul of the pot; a ham hock, smoked turkey wing, or the traditional pickled pork all work. Vegetarians can lean on smoked paprika and a splash of liquid smoke.",
  zeroWasteHero: true,
  tags: ["base", "legumes", "red-beans", "smoked-pork", "make-ahead", "creole"],
};
