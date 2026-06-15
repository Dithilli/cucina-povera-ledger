import type { Recipe } from "../types";

export const mbogaZaMajani: Recipe = {
  slug: "mboga-za-majani",
  title: "Mboga za Majani",
  cuisine: "east-african",
  blurb:
    "A pot of mixed indigenous leafy greens — managu, sukuma, amaranth — wilted with onion and tomato then enriched with ground peanut or coconut milk until the bitter edge turns mellow and the dish eats like a meal over ugali.",
  servings: 4,
  perServing: { calories: 460, protein: 16 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "mixed leafy greens (managu, sukuma wiki, amaranth), shredded", qty: "1 1/2 lb", cost: 1.2 },
    { item: "smooth peanut butter (or 3/4 cup coconut milk)", qty: "1/4 cup", cost: 0.4 },
    { item: "onion, sliced", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.5 },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "oil and salt", qty: "2 tbsp + to taste", cost: 0.15, spansWeeks: true },
    { item: "ugali (white maize meal), to serve", qty: "1 1/2 cups dry", cost: 0.6 },
  ],
  method: [
    "Fry the onion in oil until soft, add garlic, then the tomatoes and cook to a thick sauce.",
    "Pile in the shredded greens and turn through the sauce; cover and let them wilt down, 5–8 minutes, stirring once.",
    "Loosen the peanut butter with a few spoons of hot water (or use coconut milk) and stir it through the greens.",
    "Simmer uncovered another 5 minutes until the greens are tender and the sauce is creamy and clinging; salt to taste.",
    "Meanwhile cook stiff ugali from the maize meal, and serve the greens alongside to scoop.",
  ],
  modernMove:
    "Slacken the peanut butter with hot water before it hits the pot — added neat it seizes and oils out, but a thin paste melts into the greens as a silky sauce.",
  notes:
    "A mix of greens beats a single one: managu or amaranth bring softness, sukuma brings body. Stems sliced thin go in first so nothing is wasted.",
  zeroWasteHero: false,
  tags: ["greens", "peanut", "coconut", "kenyan", "east-african"],
  sources: [
    {
      title: "Kaluhi's Kitchen — Creamy Peanut Risudza (Managu)",
      url: "https://www.kaluhiskitchen.com/creamy-peanut-risudza-managu/",
      note: "Wilting indigenous greens in an onion-tomato base then enriching with loosened peanut butter; served with ugali.",
    },
  ],
};
