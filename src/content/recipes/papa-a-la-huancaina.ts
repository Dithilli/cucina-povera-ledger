import type { Recipe } from "../types";

export const papaALaHuancaina: Recipe = {
  slug: "papa-a-la-huancaina",
  title: "Papa a la Huancaína",
  cuisine: "andean",
  blurb:
    "Peru's iconic potato dish — boiled yellow potatoes blanketed in a sunny, fiery sauce of ají amarillo and fresh cheese blended silky-smooth, dressed with olives and hard-boiled egg.",
  servings: 4,
  perServing: { calories: 460, protein: 15 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "yellow/waxy potatoes", qty: "1.5 lb", cost: 0.8 },
    { item: "ají amarillo paste (or 3 fresh, seeded)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "fresh cheese (queso fresco)", qty: "5 oz", cost: 1.1 },
    { item: "evaporated milk", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "saltine crackers", qty: "4", cost: 0.1, spansWeeks: true },
    { item: "garlic + a little onion", qty: "1 clove + 1/4 onion", cost: 0.2 },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "black olives, lettuce", qty: "to garnish", cost: 0.6 },
    { item: "oil, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the potatoes whole in salted water until tender, then drain, cool slightly, peel, and slice into thick coins.",
    "Sauté the garlic and onion in a little oil with the ají amarillo paste until the raw edge cooks off and the kitchen goes fragrant.",
    "Tip that into a blender with the cheese, evaporated milk, and crackers and blend until completely smooth and pourable — add a splash more milk if it's too thick.",
    "Hard-boil the eggs, then arrange the potato slices over lettuce leaves and pour the warm sauce generously over the top.",
    "Finish each plate with halved boiled egg and a couple of black olives.",
  ],
  modernMove:
    "The crackers are the secret stabilizer — they thicken and emulsify the sauce so it stays glossy and clings to the potato instead of weeping. Cook the ají first; raw, it tastes harsh and grassy.",
  notes: "Equally a starter or, with extra potato, a frugal full dinner — the sauce keeps days in the fridge and turns any boiled vegetable into a meal.",
  zeroWasteHero: false,
  tags: ["potato", "aji-amarillo", "cheese", "egg", "peruvian", "andean"],
  sources: [
    {
      title: "Peru Delights — Classic Papa a la Huancaína Revisited",
      url: "https://perudelights.com/classic-papa-a-la-huancaina-revisited/",
      note: "Ají amarillo and queso fresco sauce stabilized with crackers and milk over boiled potatoes.",
    },
  ],
};
