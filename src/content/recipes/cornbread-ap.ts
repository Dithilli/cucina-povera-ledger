import type { Recipe } from "../types";

export const cornbreadAp: Recipe = {
  slug: "cornbread-ap",
  title: "Skillet Cornbread",
  cuisine: "appalachian",
  blurb:
    "Plain white-cornmeal cornbread poured into a screaming-hot cast-iron skillet slicked with bacon grease — no sugar, no fuss, a crackling rind on the bottom and a crumb made for crumbling into soup beans.",
  servings: 8,
  perServing: { calories: 220, protein: 6 },
  estCostPerServing: 0.35,
  roles: ["dinner"],
  ingredients: [
    { item: "white or yellow cornmeal", qty: "2 cups", cost: 0.6 },
    { item: "buttermilk", qty: "1 1/2 cups", cost: 0.7 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "bacon grease", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "baking soda and salt", qty: "1 tsp + 1 tsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Put 2 tbsp bacon grease in a 10-inch cast-iron skillet and slide it into a 450°F oven to get scorching hot.",
    "Whisk the cornmeal, baking soda, and salt; beat in the buttermilk and egg to a thick, pourable batter — no sugar, no flour needed.",
    "Pull the smoking-hot skillet, swirl the melted grease, then pour most of it into the batter and stir, leaving a film in the pan.",
    "Pour the batter into the screaming skillet — it should hiss — and bake 20 to 25 minutes until the top is gold and the bottom is a crackling brown rind.",
    "Turn it out, cut in wedges, and serve hot to crumble into beans or sop up pot likker.",
  ],
  modernMove:
    "Heat the greased skillet empty until it smokes before the batter goes in — that hard sear off the hot grease is the whole secret to the crisp, lacquered bottom rind real Appalachian cornbread is judged on.",
  notes:
    "Hill-country cornbread is savory, not cake — keep it sugarless so it stands up to soup beans and kilt greens.",
  zeroWasteHero: false,
  tags: ["cornbread", "appalachian", "bread"],
  sources: [
    {
      title: "Skillet Cornbread with Bacon Grease & No Sugar — South Your Mouth",
      url: "https://www.southyourmouth.com/2026/02/skillet-cornbread-with-bacon-grease-no.html",
      note: "sugarless cornmeal batter baked in a hot bacon-greased cast-iron skillet for a crisp bottom rind",
    },
  ],
};
