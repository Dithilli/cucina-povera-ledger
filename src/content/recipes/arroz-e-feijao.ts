import type { Recipe } from "../types";

export const arrozEFeijao: Recipe = {
  slug: "arroz-e-feijao",
  title: "Arroz e Feijão",
  cuisine: "brazilian",
  blurb:
    "The daily Brazilian plate — fluffy garlic-fried white rice beside a pot of creamy carioca beans, the broth thickened by a fork-mashed ladleful, eaten every single day without tiring of it.",
  servings: 4,
  perServing: { calories: 300, protein: 11 },
  estCostPerServing: 0.6,
  roles: ["base"],
  ingredients: [
    { item: "white rice", qty: "1 1/2 cups", cost: 0.5 },
    { item: "dried carioca (or pinto) beans", qty: "1 cup", cost: 0.7 },
    { item: "onion and garlic", qty: "1 onion + 3 cloves", cost: 0.4 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "oil, salt", qty: "to cook", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Soak the beans, then simmer with a bay leaf until creamy and tender, an hour or more, keeping them brothy.",
    "For the rice, fry minced garlic in oil until fragrant, stir in the rinsed rice to coat, then add hot water and salt and steam until fluffy.",
    "Make a refogado: sauté chopped onion and garlic, ladle in some beans with their broth, mash a few against the pan, and simmer to thicken the caldo.",
    "Serve a mound of rice next to a ladle of brothy beans — the everyday foundation under every Brazilian dinner.",
  ],
  modernMove:
    "Mash a ladle of cooked beans back into the pot — that starch is what turns thin bean water into the glossy, spoon-coating caldo that defines a good feijão.",
  notes: "Cook a big pot of beans on Sunday; they only get better and carry the whole week.",
  zeroWasteHero: true,
  tags: ["foundation", "rice", "beans", "brazilian"],
  sources: [
    {
      title: "Brazilian Rice and Beans — Cook with Ana",
      url: "https://www.cookwithana.com/brazilian-rice-and-beans-recipe/",
      note: "garlic-fried white rice and brothy carioca beans, mashed to thicken",
    },
  ],
};
