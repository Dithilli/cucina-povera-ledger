import type { Recipe } from "../types";

export const binagoongan: Recipe = {
  slug: "binagoongan",
  title: "Binagoongan",
  cuisine: "filipino",
  blurb:
    "Pork (or eggplant and long beans) sautéed down into salty-sweet fermented shrimp paste — bagoong does the seasoning, the meat does the rest, and a few tomatoes cut the funk.",
  servings: 4,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 1.65,
  roles: ["dinner"],
  ingredients: [
    { item: "pork belly or shoulder, cubed (or 2 small eggplants + a handful of long beans for the vegetable version)", qty: "3/4 lb", cost: 3.5 },
    { item: "bagoong alamang (fermented shrimp paste), sautéed type", qty: "3 tbsp", cost: 0.6, spansWeeks: true },
    { item: "tomatoes, chopped", qty: "2", cost: 0.6 },
    { item: "garlic cloves, crushed", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "green chilies (siling haba)", qty: "2", cost: 0.25, spansWeeks: true },
    { item: "sugar, to balance the salt", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "vinegar (cane or white)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "black pepper, steamed rice to serve", qty: "to serve", cost: 0.4 },
  ],
  method: [
    "Render the pork in a dry pan over medium heat until the fat melts and the cubes brown and crisp at the edges; pour off all but a film of fat.",
    "Add the onion and garlic to the rendered fat and cook until soft, then the tomatoes, breaking them down into a thick base.",
    "Stir in the bagoong and fry it for a couple of minutes — this toasts the raw shrimp paste and turns it from sharp and fishy to deep and savory.",
    "Splash in the vinegar without stirring and let it boil off its rawness, then add the sugar, a little water, and the chilies; simmer until the pork is tender and glazed.",
    "Taste — bagoong brands vary wildly in salt; adjust with sugar or water, never more salt. Serve over hot rice. (For the vegetable version, fry cubed eggplant and long beans in place of the pork, browning them hard before the paste goes in.)",
  ],
  modernMove:
    "Frying the bagoong in the pork's rendered fat before any liquid hits the pan is the whole dish — it caramelizes the shrimp paste so it reads as savory depth instead of raw funk, and a pinch of sugar against the ferment is what makes it crave-able.",
  tags: ["bagoong", "fermented", "pork", "eggplant", "rice"],
};
