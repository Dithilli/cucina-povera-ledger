import type { Recipe } from "../types";

export const peanutSauce: Recipe = {
  slug: "peanut-sauce",
  title: "Bumbu Kacang (Peanut Sauce)",
  cuisine: "indonesian",
  blurb:
    "The ground-peanut sauce behind gado-gado, satay, and pecel — fried peanuts pounded with chili, garlic, and palm sugar, loosened with tamarind water. Pure frugal protein: a fistful of cheap peanuts becomes a sauce that dresses a whole platter of vegetables.",
  servings: 10,
  perServing: { calories: 130, protein: 5 },
  estCostPerServing: 0.22,
  roles: ["base", "side"],
  ingredients: [
    { item: "raw or roasted peanuts (skin on is fine)", qty: "2 cups", cost: 1.4 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "fresh red chilies (or 1 tsp chili paste)", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "tamarind pulp", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "kecap manis (sweet soy sauce)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "neutral oil for frying", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "hot water", qty: "1–1 1/2 cups" },
  ],
  method: [
    "If using raw peanuts, fry them in the oil over medium, stirring constantly, until golden and nutty — about 5 minutes — then lift out and let drain and crisp; they'll darken as they cool. (Skip if your peanuts are already roasted.)",
    "Soak the tamarind in a few tablespoons of the hot water, squish it with your fingers, and strain out the seeds and fiber to get a sour tamarind water.",
    "Fry the garlic and chilies in a spoon of the peanut oil until soft and fragrant.",
    "Grind the peanuts coarse in a mortar or processor, then pound or pulse in the garlic, chili, palm sugar, and salt to a thick paste — leave a little texture, this isn't peanut butter.",
    "Loosen with the tamarind water, kecap manis, and hot water a splash at a time until it's a spoonable, pourable sauce. Taste and balance: it should land sweet, sour, salty, and spicy all at once. Thin again with hot water when you serve, as it thickens on standing.",
  ],
  modernMove:
    "Frying the peanuts in oil rather than dry-roasting gives a rounder, toastier flavor and lets you reuse the fragrant peanut oil to bloom the aromatics — nothing wasted. The tamarind is the secret: that thread of sourness keeps a rich sauce from being cloying and makes vegetables taste alive.",
  notes:
    "Ladle warm over blanched cabbage, long beans, bean sprouts, boiled potato, and tempe for gado-gado, or serve as a dip for satay. Keeps a week refrigerated; it sets solid cold, so revive with hot water.",
  zeroWasteHero: true,
  tags: ["base", "side", "peanut", "sauce", "protein", "make-ahead"],
};
