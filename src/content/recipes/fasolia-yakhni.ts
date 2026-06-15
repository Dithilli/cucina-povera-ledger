import type { Recipe } from "../types";

export const fasoliaYakhni: Recipe = {
  slug: "fasolia-yakhni",
  title: "Fasolia yakhni",
  cuisine: "levantine",
  blurb:
    "White beans simmered in a cinnamon-warmed tomato broth and ladled over rice — the everyday meatless yakhni that turns a bag of dried beans into dinner all week.",
  servings: 4,
  perServing: { calories: 640, protein: 24 },
  estCostPerServing: 0.78,
  roles: ["dinner"],
  ingredients: [
    {
      item: "cooked white beans (plus ~2 cups of their liquid)",
      qty: "3 cups",
      cost: 0.75,
    },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "chopped tomatoes (or 2 fresh, grated)", qty: "1/2 can", cost: 0.45 },
    {
      item: "ground cinnamon and allspice (the seven-spice warmth)",
      qty: "1/2 tsp each",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "long-grain rice, cooked", qty: "1 1/2 cups dry", cost: 0.6 },
    { item: "fresh coriander or parsley to finish", qty: "handful", cost: 0.2 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Soften the onion in the olive oil, then add the garlic, cinnamon, and allspice and fry until aromatic.",
    "Stir in the tomato paste and cook it dark for a minute, then add the chopped tomatoes.",
    "Add the white beans with their cooking liquid (top up with water to a brothy yakhni consistency). Mash a ladleful of beans against the side of the pot to thicken it.",
    "Simmer gently for 20 to 25 minutes until the broth is silky and savoury; season well.",
    "Ladle over hot rice and scatter with coriander or parsley.",
  ],
  modernMove:
    "Mashing a portion of the beans into the broth — the same trick as pasta e ceci — gives a creamy body without any cream, so the rice soaks up a sauce instead of water.",
  notes:
    "Cook a big pot of dried beans once and this is the cheapest dinner of the week; the bean liquid is the stock, so nothing is wasted.",
  zeroWasteHero: true,
  tags: ["white-beans", "legumes", "tomato", "yakhni", "rice", "vegan"],
  sources: [
    {
      title: "Simply Lebanese — Fasolia wa Roz",
      url: "https://www.simplyleb.com/recipe/fasolia-wa-roz/",
      note: "Confirms the white-bean-in-tomato yakhni served over rice — the canonical fasolia structure.",
    },
    {
      title: "Plant Based Folk — Lebanese Fasolia (vegan bean stew)",
      url: "https://plantbasedfolk.com/kidney-bean-stew-lebanese-fasolia/",
      note: "Supports the meatless version — the bean stew built without beef, simmered in tomato.",
    },
  ],
};
