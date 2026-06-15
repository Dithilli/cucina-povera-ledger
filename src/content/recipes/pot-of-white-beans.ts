import type { Recipe } from "../types";

export const potOfWhiteBeans: Recipe = {
  slug: "pot-of-white-beans",
  title: "A Pot of White Beans",
  cuisine: "ashkenazi",
  blurb:
    "Navy or great northern beans simmered soft with onion and bay until they're creamy and the broth turns silky — the cheap, patient base the week leans on: soup body, cholent heft, the protein under a bowl of borscht.",
  servings: 6,
  perServing: { calories: 160, protein: 10 },
  estCostPerServing: 0.3,
  roles: ["base", "dinner"],
  ingredients: [
    { item: "dried navy or great northern beans", qty: "1 lb (about 2 1/2 cups)", cost: 1.3 },
    { item: "onion, halved", qty: "1", cost: 0.4 },
    { item: "bay leaf", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sort and rinse the beans, picking out any stones or shriveled ones. Soak overnight in plenty of cold water if you can — it shortens the cook — or go straight to the pot with a little more patience.",
    "Drain, cover with several inches of fresh water, and add the halved onion and bay leaf. Bring to a boil, skim any foam, then drop to a bare, lazy simmer.",
    "Cook 1 to 1 1/2 hours (longer if unsoaked), topping up with hot water as needed to keep the beans submerged, until they're tender enough to crush against the side of the pot.",
    "Salt only once the beans are soft — early salt can leave them stubbornly firm. Fish out the onion and bay. Keep the starchy broth; it's half of what you're cooking for.",
  ],
  modernMove:
    "Hold the salt until the beans give way, then season the broth hard. That cloudy bean liquor is a stock in its own right — it carries soups, thickens borscht, and turns a handful of leftover beans into a meal.",
  notes:
    "Pareve as written, so the pot can swing either way: into a milchig dairy soup with a knob of butter, or into a fleishig cholent with schmaltz and a marrow bone. Day-two beans mash into spreads or fall into soup.",
  tags: ["base", "beans", "pareve"],
  sources: [
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Beans as a cheap protein base of the Ashkenazi kitchen, feeding soups and cholent.",
    },
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Salting beans only once tender, and the starchy bean broth as a cooking stock.",
    },
  ],
};
