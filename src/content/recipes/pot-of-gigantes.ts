import type { Recipe } from "../types";

export const potOfGigantes: Recipe = {
  slug: "pot-of-gigantes",
  title: "A Pot of Gigantes (Giant Beans in Their Broth)",
  cuisine: "greek",
  blurb:
    "Big creamy butter beans cooked from dry in lightly aromatic water — the week's base pot that becomes plaki, soup, or a bowl with oil and lemon.",
  servings: 8,
  perServing: { calories: 250, protein: 13 },
  estCostPerServing: 0.5,
  roles: ["base"],
  ingredients: [
    {
      item: "dried gigantes / large butter (lima) beans, soaked overnight",
      qty: "1 lb",
      cost: 2.4,
    },
    { item: "onion, halved", qty: "1", cost: 0.3 },
    { item: "bay leaf", qty: "1", cost: 0.1, spansWeeks: true },
    {
      item: "olive oil",
      qty: "2 tbsp",
      cost: 0.35,
      spansWeeks: true,
    },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the beans overnight in plenty of cold water — gigantes are huge and drink a lot, so give them room to roughly double.",
    "Drain, cover with fresh cold water, bring to a boil and skim off the foam. Add the halved onion, bay, and olive oil.",
    "Simmer very gently, lid ajar, until the beans are fully tender and creamy but still holding their shape, 60–90 minutes. Top up with hot water if they ever come uncovered, and keep the simmer lazy so the skins don't burst.",
    "Salt only once they're soft. Cool the beans in their own broth and refrigerate them together — the starchy liquid is the gold for plaki, soup, or a quick bowl finished with oil and lemon.",
  ],
  modernMove:
    "Cook low and slow and salt at the end: a hard boil splits the delicate skins and early salt keeps them chalky. Store them in their broth, never drained, so they stay plump and you keep the cooking liquid.",
  notes:
    "The constant foundation behind the bean week — one pot feeds gigantes plaki, a fasolada-style soup, or a plain dressed bowl. Freezes well in its broth.",
  zeroWasteHero: false,
  tags: ["legumes", "giant-beans", "base", "batch-cook", "broth", "vegan"],
  sources: [
    {
      title: "Diane Kochilas — Greek Giant Beans Casserole (Gigantes)",
      url: "https://www.dianekochilas.com/best-gigantes-recipe-greek-giant-beans-casserole/",
      note: "Confirms dried giant beans soaked and simmered tender before use.",
    },
  ],
};
