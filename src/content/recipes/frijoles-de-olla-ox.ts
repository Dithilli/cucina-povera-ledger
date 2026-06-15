import type { Recipe } from "../types";

export const frijolesDeOllaOx: Recipe = {
  slug: "frijoles-de-olla-ox",
  title: "Frijoles de Olla con Hoja de Aguacate",
  cuisine: "oaxacan",
  blurb:
    "Black beans coaxed soft in a clay olla with onion and a couple of dried avocado leaves, whose anise-sweet smoke is the unmistakable signature of an Oaxacan bean pot.",
  servings: 6,
  perServing: { calories: 250, protein: 15 },
  estCostPerServing: 0.35,
  roles: ["dinner"],
  ingredients: [
    { item: "dried black beans (frijol negro)", qty: "1 lb (about 2 1/2 cups)", cost: 1.1 },
    { item: "white onion, halved", qty: "1/2", cost: 0.2 },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "dried avocado leaves (hojas de aguacate)", qty: "2–3", cost: 0.25, spansWeeks: true },
    { item: "manteca (lard) or oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sort and rinse the beans; cover generously with water in a heavy clay olla or pot along with the onion, garlic, and a spoon of manteca.",
    "Toast the avocado leaves directly over the flame or on a dry comal for a few seconds until fragrant, then drop them into the pot.",
    "Bring to a boil, then drop to a slow simmer for 1.5–2.5 hours, topping up with hot water as needed, until the beans are creamy and the broth has gone inky and perfumed.",
    "Salt only once the beans are fully tender, then let them sit so the avocado-leaf aroma settles into the caldo.",
  ],
  modernMove:
    "Toast the avocado leaves until they crackle before adding them — that brief char releases the anise-and-fennel note that distinguishes a true Oaxacan black-bean pot from a plain olla of beans.",
  notes:
    "Eat brothy with hot tortillas for the complete-protein pairing. The inky caldo is the base for enfrijoladas and chichilo later in the week.",
  zeroWasteHero: true,
  tags: ["frijoles", "oaxacan", "hoja-de-aguacate", "one-pot"],
  sources: [
    {
      title: "Maricruz Avalos — Authentic Mexican Black Beans (Frijoles Negros)",
      url: "https://www.maricruzavalos.com/mexican-black-beans/",
      note: "cooking black beans in a clay olla with dried avocado leaves the Oaxacan way",
    },
  ],
};
