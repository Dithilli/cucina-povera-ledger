import type { Recipe } from "../types";

export const quinuaPesque: Recipe = {
  slug: "quinua-pesque",
  title: "Quinua Pesq'e",
  cuisine: "andean",
  blurb:
    "The Bolivian altiplano's risotto: quinoa simmered in milk until it swells creamy and tender, then melted through with grated cheese into a warm, porridge-like bowl — humble street-corner comfort food sold by the cupful on cold La Paz mornings.",
  servings: 4,
  perServing: { calories: 480, protein: 19 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  ingredients: [
    { item: "white quinoa, well rinsed", qty: "1.5 cups", cost: 1.5 },
    { item: "milk (or evaporated milk)", qty: "2 cups", cost: 1.2, spansWeeks: true },
    { item: "queso fresco, crumbled", qty: "5 oz", cost: 1.5, spansWeeks: true },
    { item: "water", qty: "1.5 cups" },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "ají amarillo paste, to serve (optional)", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Rinse the quinoa thoroughly under running water, rubbing it between your hands, to wash off the bitter saponin coating.",
    "Simmer the quinoa in the water until it has absorbed most of the liquid and the little germ rings start to uncurl, about 12–15 minutes.",
    "Pour in the milk and continue cooking gently, stirring, until the grains are fully soft and the whole thing turns creamy and loose like risotto.",
    "Off the heat, stir in most of the crumbled cheese so it half-melts into strands through the porridge; season with salt.",
    "Serve hot in deep bowls, topped with the remaining cheese — and a spoon of ají amarillo on the side for those who want the savory, spicy version.",
  ],
  modernMove:
    "Finish the cheese off the heat so it softens into melting threads instead of seizing — that's what gives pesq'e its loose, risotto-like pull rather than a stiff, curdy set.",
  notes:
    "A street breakfast in El Alto and La Paz, eaten either sweet-and-milky or with a savory ají-and-onion sauce. Cheap, filling and almost entirely pantry staples plus quinoa.",
  zeroWasteHero: false,
  tags: ["dinner", "quinoa", "creamy", "cheese", "bolivian", "andean"],
  sources: [
    {
      title: "Chipa by the Dozen — P'esque de Quinua",
      url: "https://chipabythedozen.com/en/psque-quinua-bolivian-quinoa-porridge/",
      note: "Bolivian quinoa porridge simmered in milk and finished with queso fresco",
    },
  ],
};
