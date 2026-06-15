import type { Recipe } from "../types";

export const salsaPasillaOaxaquena: Recipe = {
  slug: "salsa-pasilla-oaxaquena",
  title: "Salsa de Chile Pasilla Oaxaqueño",
  cuisine: "oaxacan",
  blurb:
    "A deep, smoky salsa of the wood-smoked pasilla mixe blended with charred tomatillos and garlic — fierce and savory, eaten as supper with hot tortillas and a pot of black beans.",
  servings: 4,
  perServing: { calories: 420, protein: 16 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "pasilla oaxaqueño (pasilla mixe) chiles, smoked", qty: "5", cost: 1.5, spansWeeks: true },
    { item: "tomatillos (miltomate), husked", qty: "8", cost: 1.0 },
    { item: "garlic cloves", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "cooked black beans, with broth", qty: "2 cups", cost: 0.5 },
    { item: "corn tortillas, warmed", qty: "12", cost: 0.8 },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Stem and seed the pasilla oaxaqueño chiles, then soak in hot water until pliable, about 10 minutes — they already carry their own wood smoke.",
    "Boil the tomatillos until they slump and turn from bright green to olive, about 8 minutes; char the garlic on a comal.",
    "Blend chiles, tomatillos, garlic, salt, and a splash of soaking water until just short of smooth so the salsa keeps some grip.",
    "Warm the black beans in their broth and mash lightly; spoon onto plates as the base of the supper.",
    "Pour the smoky salsa over the beans and eat by scooping with hot tortillas.",
  ],
  modernMove:
    "Don't toast the pasilla oaxaqueño the way you would an ordinary dried chile — it's already smoke-dried over wood, so a quick hot soak preserves that smolder instead of scorching it bitter.",
  notes:
    "The pasilla mixe from the Sierra Norte is a different chile entirely from the central-Mexican pasilla — smokier, hotter. Built into a real meal here on beans and tortillas.",
  zeroWasteHero: false,
  tags: ["salsa", "pasilla-oaxaqueno", "beans", "oaxacan", "dinner"],
  sources: [
    {
      title: "Muy Bueno — Chile Pasilla Oaxaqueño Salsa (Authentic & Smoky)",
      url: "https://muybuenoblog.com/chile-pasilla-oaxaqueno-salsa/",
      note: "smoked pasilla oaxaqueño with boiled tomatillos and garlic, soak-don't-toast method",
    },
  ],
};
