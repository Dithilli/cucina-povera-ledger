import type { Recipe } from "../types";

export const kukuWaKupaka: Recipe = {
  slug: "kuku-wa-kupaka",
  title: "Kuku wa Kupaka",
  cuisine: "east-african",
  blurb:
    "Mombasa-coast chicken charred over the jiko, then basted and simmered in a creamy coconut-tomato sauce lit with garlic, ginger, and pilipili — the Swahili coast's Sunday best.",
  servings: 4,
  perServing: { calories: 560, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken, bone-in pieces", qty: "2 lb", cost: 4.5 },
    { item: "coconut milk", qty: "1 1/2 cups", cost: 1.0 },
    { item: "onion, chopped", qty: "1 medium", cost: 0.25 },
    { item: "tomatoes, chopped + 1 tbsp tomato paste", qty: "2 medium", cost: 0.5 },
    { item: "garlic + ginger paste", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "lemon juice", qty: "1 lemon", cost: 0.3 },
    { item: "curry powder + cumin", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "pilipili (chili) + salt", qty: "to taste", spansWeeks: true },
    { item: "dhania (cilantro)", qty: "handful", cost: 0.15 },
  ],
  method: [
    "Marinate the chicken in half the garlic-ginger, the lemon juice, salt, and a little pilipili for an hour.",
    "Grill or broil the pieces until charred at the edges and nearly cooked through — the char is the soul of the dish.",
    "Meanwhile, fry the onion until golden, add the tomatoes, tomato paste, remaining garlic-ginger, curry powder, and cumin, and cook to a thick base.",
    "Pour in the coconut milk and simmer 5 minutes into a loose, fragrant sauce, seasoning with salt and pilipili.",
    "Nestle the grilled chicken in, baste it with the sauce, and simmer 15–20 minutes until tender; finish with dhania and serve over rice or with chapati.",
  ],
  modernMove:
    "Grill the chicken before it ever meets the sauce — \"kupaka\" means to smear or baste, and that smoky char under the coconut is what separates it from an ordinary coconut curry.",
  notes:
    "A Swahili-coast specialty carrying African, Arab, and Indian threads; the coconut richness lets two pounds of chicken stretch generously over rice for four.",
  zeroWasteHero: false,
  tags: ["chicken", "coconut", "swahili", "dinner", "east-african"],
  sources: [
    {
      title: "Fauzia's Kitchen Fun — Chicken in Coconut Sauce / Kuku wa Kupaka",
      url: "https://fauziaskitchenfun.com/chicken-in-coconut-sauce-kuku-wa-kupaka/",
      note: "Marinate and grill the chicken, build a tomato-spice base, then simmer in coconut milk and baste the grilled pieces.",
    },
  ],
};
