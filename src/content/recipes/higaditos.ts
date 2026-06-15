import type { Recipe } from "../types";

export const higaditos: Recipe = {
  slug: "higaditos",
  title: "Higaditos de Fandango",
  cuisine: "oaxacan",
  blurb:
    "The Zapotec wedding-breakfast stew of the Valles Centrales — shredded chicken and beaten egg drifting in a saffron-gold tomato broth, the dish a whole village cooks 5,000 eggs of for a fandango.",
  servings: 4,
  perServing: { calories: 430, protein: 31 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken pieces (thigh & leg)", qty: "1 1/2 lb", cost: 2.4 },
    { item: "eggs, beaten", qty: "8", cost: 1.4 },
    { item: "ripe tomatoes", qty: "4 medium", cost: 0.8 },
    { item: "white onion, garlic", qty: "1/2 onion + 3 cloves", cost: 0.2 },
    { item: "chile costeño or guajillo (mild)", qty: "1–2", cost: 0.2 },
    { item: "epazote", qty: "a few sprigs", cost: 0.1 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the chicken with onion, garlic and salt until tender; lift out, shred the meat, and keep the broth hot.",
    "Char the tomatoes and chile on a comal, blend smooth, and fry the puree briefly before loosening it with the reserved chicken broth into a savory base.",
    "Return the shredded chicken to the simmering broth with a sprig of epazote.",
    "Pour the beaten eggs in slowly in a thin stream while stirring, so they set into soft golden ribbons and clouds rather than a scramble; serve hot with tortillas.",
  ],
  modernMove:
    "Stream the eggs into broth that is hot but not at a rolling boil and keep it moving — that's how you get the silky suspended ribbons of the fiesta version instead of tough scrambled curds.",
  notes:
    "Festive but frugal: a single chicken stretches across a tableful of eggs, and the cooking broth becomes the body of the soup, so the bird is used end to end.",
  zeroWasteHero: false,
  tags: ["oaxacan", "egg", "chicken", "fiesta", "fandango", "dinner"],
  sources: [
    {
      title: "MexConnect — Eggs with chicken livers: Higaditos",
      url: "https://www.mexconnect.com/articles/3422-eggs-with-chicken-livers-higaditos/",
      note: "Oaxacan fiesta egg-and-chicken stew in a tomato-chile broth, streaming the eggs into the pot",
    },
  ],
};
