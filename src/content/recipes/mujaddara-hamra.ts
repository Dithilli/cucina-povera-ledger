import type { Recipe } from "../types";

export const mujaddaraHamra: Recipe = {
  slug: "mujaddara-hamra",
  title: "Mujaddara Hamra",
  cuisine: "levantine",
  blurb:
    "The 'red' Palestinian mujaddara — coarse bulgur and lentils stained deep brown by onions fried hard in olive oil, nuttier and earthier than the rice version, all crowned with crispy onions.",
  servings: 4,
  perServing: { calories: 520, protein: 17 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "brown or green lentils", qty: "1 1/4 cups", cost: 0.8 },
    { item: "coarse bulgur (#3 / #4)", qty: "1 cup", cost: 0.45 },
    { item: "large onions, thinly sliced", qty: "4", cost: 1.2 },
    { item: "olive oil", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "ground cumin", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Simmer the lentils in plenty of unsalted water until about half-cooked, 12 minutes. Don't drain — keep them in their dark cooking water.",
    "Fry the onions in the olive oil over medium-high, stirring, well past golden to a deep reddish-brown — almost at the edge of burnt, which is where the name 'hamra' (red) comes from. Lift out a generous handful to drain and crisp for the garnish.",
    "Scrape the remaining onions and all their oil into the lentil pot. Stir in the cumin, salt, and pepper. The whole pot should now be a rich russet color.",
    "Stir in the bulgur and enough hot water to cover everything by about an inch. Bring to a simmer, cover, and cook on low until the bulgur is plump and tender and the liquid is absorbed — 15 to 20 minutes.",
    "Rest off the heat, covered, 10 minutes, then fluff. Mound onto a platter and top with the crispy reserved onions. Eat warm or at room temperature, traditionally with a wedge of raw onion, olives, and yogurt.",
  ],
  modernMove:
    "Frying the onions almost to burning is deliberate — the near-scorched sugars are what dye the dish red and give it that smoky, faintly bitter depth that the milder rice mujaddara never reaches. Bulgur drinks up that flavored oil better than rice does.",
  notes:
    "A staple of Palestinian and southern Lebanese kitchens. Coarse bulgur is essential for the chewy texture; fine bulgur turns to mush.",
  zeroWasteHero: true,
  tags: ["dinner", "legumes", "lentils", "bulgur", "onions", "palestinian", "one-pot", "vegan"],
  sources: [
    {
      title: "Plant Based Folk — plantbasedfolk.com",
      url: "https://plantbasedfolk.com/mujadara-hamra/",
      note: "Southern Lebanese mujadara hamra — confirms 'hamra' (red) from onions fried near-burnt, with coarse bulgur.",
    },
  ],
};
