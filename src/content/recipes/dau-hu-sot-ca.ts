import type { Recipe } from "../types";

export const dauHuSotCa: Recipe = {
  slug: "dau-hu-sot-ca",
  title: "Đậu Hũ Sốt Cà",
  cuisine: "vietnamese",
  blurb:
    "Fried tofu in a tomato-scallion sauce — a meatless everyday dinner that leans on cheap tofu and a few tomatoes to make something silky over rice.",
  servings: 4,
  perServing: { calories: 460, protein: 22 },
  estCostPerServing: 0.84,
  roles: ["dinner"],
  ingredients: [
    { item: "firm tofu, cubed", qty: "1 lb", cost: 1.2 },
    { item: "ripe tomatoes, chopped", qty: "4", cost: 1.2 },
    { item: "scallions, cut in lengths", qty: "4", cost: 0.25 },
    { item: "shallot, minced", qty: "1", cost: 0.1 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fish sauce (or soy for vegetarian)", qty: "1 1/2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "tomato paste (for color and body)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "steamed rice to serve", qty: "4 cups", cost: 0.6 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Pat the tofu very dry and shallow-fry the cubes in hot oil until golden on all sides; drain. The crust keeps them from collapsing into the sauce later.",
    "In the same oil, soften the shallot and garlic, then add the chopped tomatoes and tomato paste and cook them down hard, mashing, until they break into a glossy red sauce and the oil reddens.",
    "Season with fish sauce, sugar, and a little water; simmer to a coating consistency.",
    "Slide the fried tofu back in to warm through and soak up the sauce, fold in the scallions off the heat, and finish with black pepper. Serve over steamed rice.",
  ],
  modernMove:
    "Frying the tofu first builds a skin that grips the tomato sauce instead of weeping water into it — the difference between a watery braise and a clinging, savory glaze.",
  tags: ["tofu", "tomato", "vegetarian-option", "rice", "everyday"],
  sources: [
    {
      title: "The Viet Vegan — Vegan Vietnamese Fried Tofu with Tomatoes (Đậu hũ sốt cà)",
      url: "https://thevietvegan.com/vegan-vietnamese-fried-tofu-tomatoes-dau-hu-sot-ca/",
      note: "Frying the tofu first, then a fresh-tomato sauce — soy in place of fish sauce",
    },
    {
      title: "Hungry Huy — Vietnamese Tofu with Tomato Sauce (Đậu Sốt Cà Chua)",
      url: "https://www.hungryhuy.com/how-to-make-dau-sot-ca-vietnamese-tofu-with-tomato-sauce/",
      note: "Tomato-scallion sauce seasoned with fish sauce and sugar over rice",
    },
  ],
};
