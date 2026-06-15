import type { Recipe } from "../types";

export const maharagweYaNazi: Recipe = {
  slug: "maharagwe-ya-nazi",
  title: "Maharagwe ya Nazi",
  cuisine: "east-african",
  blurb:
    "The Swahili-coast Sunday-dinner bean pot — red kidney beans stewed soft in spiced coconut milk until the broth turns sweet, creamy and a little fiery, eaten over rice or torn chapati.",
  servings: 4,
  perServing: { calories: 540, protein: 19 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "dried red kidney beans (maharage), soaked overnight", qty: "1 1/2 cups", cost: 1.0 },
    { item: "coconut milk (nazi)", qty: "1 1/2 cups", cost: 0.9 },
    { item: "onion, finely chopped", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, grated or chopped", qty: "2", cost: 0.5 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "garlic and ginger, grated", qty: "2 cloves + thumb", cost: 0.15, spansWeeks: true },
    { item: "ground coriander (dhania)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "cayenne or pilipili, to taste", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "fresh coriander (dhania), chopped", qty: "small handful", cost: 0.2 },
    { item: "oil and salt", qty: "2 tbsp + to taste", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Boil the soaked beans in fresh unsalted water until very tender, 45–60 minutes; keep some cooking liquid.",
    "Fry the onion in oil until golden, then add garlic, ginger, coriander, turmeric and cayenne and cook a minute until fragrant.",
    "Stir in the tomatoes and tomato paste and cook down to a thick jammy base.",
    "Tip in the beans with a little of their liquid, then pour in the coconut milk and bring to a gentle simmer.",
    "Simmer uncovered 15–20 minutes, mashing a few beans against the pot to thicken, until the sauce is creamy and clings; salt, scatter dhania, and serve over rice or with chapati.",
  ],
  modernMove:
    "Mash a ladleful of the beans into the pot before the final simmer — the broken starch thickens the coconut broth to a velvet without any flour, the way coastal cooks do it.",
  notes:
    "Add the salt only after the beans are soft; salting the soaking or boiling water keeps the skins tough.",
  zeroWasteHero: false,
  tags: ["beans", "coconut", "swahili", "east-african"],
  sources: [
    {
      title: "Mayuri's Jikoni — Maharage Ya Nazi (Kidney Beans in Coconut Milk)",
      url: "https://mayuris-jikoni.com/2019/12/09/maharage-ya-nazi-kidney-beans-in-coconut-milk/",
      note: "Spiced onion-tomato base, beans finished in coconut milk and thickened by mashing, Swahili-coast serving with rice or chapati.",
    },
  ],
};
