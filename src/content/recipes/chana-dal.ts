import type { Recipe } from "../types";

export const chanaDal: Recipe = {
  slug: "chana-dal",
  title: "Chana Dal",
  cuisine: "north-indian",
  blurb:
    "Split chickpeas cooked until tender but still holding their shape — the meatiest, most toothsome dal, built on a deeply bhuna'd onion-tomato masala and finished with a ghee tadka. The dal that eats like a main.",
  servings: 4,
  perServing: { calories: 400, protein: 19 },
  estCostPerServing: 0.65,
  roles: ["dinner"],
  ingredients: [
    { item: "chana dal (split Bengal gram)", qty: "1 cup", cost: 0.9 },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "tomato, chopped", qty: "1 large", cost: 0.45 },
    { item: "ginger-garlic paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ghee", qty: "2 tbsp", cost: 0.26, spansWeeks: true },
    { item: "cumin seed, bay leaf, dried red chile", qty: "1 tsp / 1 / 1", cost: 0.2, spansWeeks: true },
    { item: "coriander powder, red chile powder, garam masala", qty: "1/2 tsp each", cost: 0.3, spansWeeks: true },
    { item: "salt; cilantro and ginger julienne to finish", qty: "to taste", cost: 0.3 },
  ],
  method: [
    "Rinse the chana dal and soak 30–60 minutes if you can — it's a hard, dense pulse and the soak cuts the cook time. Pressure-cook with turmeric, a little salt, and ~3 cups water until tender but still holding shape, ~20 minutes (45–60 in an open pot). Unlike softer dals, chana should stay distinct, not collapse.",
    "Build the masala: heat the ghee, crackle the cumin with the bay leaf and dried chile, then fry the onion to deep golden. Add ginger-garlic paste and cook off the raw smell.",
    "Add the tomato and ground spices and bhuno hard — keep frying, stirring, until the tomato breaks down completely and the ghee separates out and glistens at the edges. This long fry is what gives chana dal its depth.",
    "Fold in the cooked dal with enough of its cooking liquid to make a thick, scoopable dal, and simmer 8–10 minutes so the grains drink in the masala. Add garam masala off the heat. Finish with cilantro and fine ginger julienne; serve with rice or roti.",
  ],
  modernMove:
    "Cook the chana just to tender, not to mush — its appeal is the firm, almost nutty bite, the opposite of a creamy moong. The other lever is patience on the bhuna: take the onion-tomato masala further than feels necessary, until the fat fully splits, and the heavier pulse soaks up all that toasted depth.",
  notes:
    "Split chickpeas pack the most protein and the most chew of the everyday dals and keep you full for hours — a genuinely substantial dinner from a cup of dry pulses. The soak is optional but rewards you with a faster pot and gentler digestion.",
  tags: ["dinner", "dal", "chana-dal", "split-chickpeas", "bhuna", "legumes"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/chana-dal-recipe-chana-dal/",
      note: "Cooking split Bengal gram just to tender over an onion-tomato masala base",
    },
  ],
};
