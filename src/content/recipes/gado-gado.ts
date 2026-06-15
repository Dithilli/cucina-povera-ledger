import type { Recipe } from "../types";

export const gadoGado: Recipe = {
  slug: "gado-gado",
  title: "Gado-Gado",
  cuisine: "indonesian",
  blurb:
    "Indonesia's great composed salad — blanched vegetables, tofu and tempe, and boiled egg drowned in a warm, garlicky peanut sauce.",
  servings: 4,
  perServing: { calories: 560, protein: 27 },
  estCostPerServing: 1.45,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "cabbage, shredded", qty: "1/4 head", cost: 0.4 },
    { item: "long beans or green beans, cut", qty: "8 oz", cost: 0.9 },
    { item: "bean sprouts", qty: "2 cups", cost: 0.5 },
    { item: "boiling potato, boiled and sliced", qty: "1 large", cost: 0.4 },
    { item: "firm tofu, cubed and pan-fried", qty: "7 oz", cost: 0.9 },
    { item: "tempe, sliced and pan-fried", qty: "5 oz", cost: 1.1 },
    { item: "eggs, hard-boiled", qty: "4", cost: 0.8 },
    {
      item: "roasted peanuts (or unsweetened peanut butter)",
      qty: "1 cup",
      cost: 1.2,
    },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "red chilies", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "tamarind paste", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "kecap manis (sweet soy)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "neutral oil for frying", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt, lime", qty: "to taste" },
  ],
  method: [
    "Pound or blend the peanuts with garlic and chilies into a coarse paste — pounding releases more oil and gives a rounder sauce than a blender alone.",
    "Fry the paste briefly in a little oil until fragrant, then loosen with hot water to a pourable cream. Season with palm sugar, tamarind, kecap manis, and salt; finish with lime.",
    "Blanch the cabbage, beans, and sprouts separately in salted water so each keeps its bite, then drain well.",
    "Pan-fry the tofu and tempe in oil until golden and crisp at the edges.",
    "Compose each plate with the vegetables, potato, tofu, tempe, and halved egg. Flood with warm peanut sauce just before eating so nothing goes soggy.",
  ],
  modernMove:
    "Frying the peanut-garlic-chili paste before letting it down with water blooms the aromatics — the sauce tastes cooked and deep, not like raw blended peanut butter.",
  tags: ["peanut-sauce", "tofu", "tempe", "salad", "vegetables", "egg"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/gado-gado-indonesian-salad-with-peanut-sauce.html", note: "composed-salad assembly and tamarind–palm-sugar peanut sauce" },
  ],
};
