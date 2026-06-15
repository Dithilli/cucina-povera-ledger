import type { Recipe } from "../types";

export const mbuziWaKupaka: Recipe = {
  slug: "mbuzi-wa-kupaka",
  title: "Mbuzi wa Kupaka",
  cuisine: "east-african",
  blurb:
    "Goat first browned, then simmered tender and painted with a rich coconut-tamarind sauce loud with garlic, ginger and chili — the coastal kupaka treatment, where coconut milk and sour ukwaju turn a little meat into a feast over rice.",
  servings: 4,
  perServing: { calories: 600, protein: 30 },
  estCostPerServing: 2.3,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in goat (mbuzi), cut in pieces", qty: "1 3/4 lb", cost: 6.8 },
    { item: "coconut milk", qty: "1 can (14 oz)", cost: 1.1 },
    { item: "tamarind (ukwaju) pulp", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.25 },
    { item: "garlic cloves, crushed", qty: "4", cost: 0.15, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "curry powder", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ground turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "pilipili hoho (chili), minced", qty: "1", cost: 0.15, spansWeeks: true },
    { item: "vegetable oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "wali (rice), to serve", qty: "to serve" },
  ],
  method: [
    "Boil the goat with a little salt, half the garlic and ginger until tender, 60–90 minutes, then lift out and reserve a cup of the broth.",
    "Brown the boiled pieces in oil over high heat until they take on color, then set aside — the sear deepens the sauce.",
    "In the same pan soften the onion, then add the rest of the garlic and ginger, the curry powder, turmeric and chili and fry until fragrant.",
    "Soak the tamarind in a little warm water, press out the sour pulp, and stir it in with the coconut milk and a splash of the reserved broth. Simmer to a glossy sauce.",
    "Return the goat and turn it through the sauce (kupaka means to smear or coat), simmering 10 minutes until the meat is glazed and the sauce clings. Serve over rice.",
  ],
  modernMove:
    "Boil-then-sear-then-coat: tenderizing first means the coconut sauce only has to glaze, not cook, the meat — so the coconut stays sweet and fresh rather than splitting over a long braise.",
  notes:
    "The same kupaka sauce is classic on grilled fish (samaki wa kupaka) and chicken (kuku wa kupaka) — make extra and keep it.",
  zeroWasteHero: false,
  tags: ["meat", "east-african", "goat", "coconut", "swahili"],
  sources: [
    {
      title: "Fauzia's Kitchen Fun — Chicken in Coconut Sauce / Kuku wa Kupaka",
      url: "https://fauziaskitchenfun.com/chicken-in-coconut-sauce-kuku-wa-kupaka/",
      note: "Coconut-tamarind kupaka sauce method (garlic, ginger, curry) adapted to goat",
    },
  ],
};
