import type { Recipe } from "../types";

export const viandasConBacalao: Recipe = {
  slug: "viandas-con-bacalao",
  title: "Viandas con Bacalao",
  cuisine: "puerto-rican",
  blurb:
    "A platter of boiled island roots — yuca, yautía, green banana, batata — flaked with soaked salt cod and dressed in nothing but warm olive oil, raw garlic, and onion: the frugal Lenten plate that built generations.",
  servings: 2,
  perServing: { calories: 540, protein: 27 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalao)", qty: "6 oz", cost: 2.0 },
    { item: "yuca (cassava), peeled and chunked", qty: "1/2 lb", cost: 0.6 },
    { item: "yautía (taro root), peeled and chunked", qty: "1/2 lb", cost: 0.6 },
    { item: "green bananas (guineos verdes), peeled", qty: "2", cost: 0.4 },
    { item: "batata (white sweet potato), chunked", qty: "1/2 lb", cost: 0.4 },
    { item: "olive oil", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "garlic cloves, thinly sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "onion, thinly sliced", qty: "1/2", cost: 0.15, spansWeeks: true },
    { item: "white vinegar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Soak the bacalao in cold water at least 4 hours (overnight is better), changing the water two or three times to draw out the salt. Then boil it 10 minutes, drain, cool, and flake into bite-size pieces, discarding skin and bones.",
    "Bring a large pot of salted water to a boil. Add the yuca, yautía, and batata; after 10 minutes add the green bananas. Boil 20–30 minutes total until all the roots are fork-tender.",
    "Meanwhile warm the olive oil gently with the sliced garlic until fragrant but not browned, then stir in the sliced onion and vinegar off the heat so it stays sharp.",
    "Drain the viandas and arrange them warm on a platter with the flaked bacalao scattered over.",
    "Spoon the warm garlic-onion oil generously over everything and serve at once, while the roots are still steaming.",
  ],
  modernMove:
    "Stagger the roots into the pot by how fast they cook — yuca and batata first, green banana later — so nothing turns to mush waiting on the slowest piece; each vianda lands tender but intact.",
  notes:
    "Traditionally a Lenten and Holy Week dish, but eaten year-round. Any mix of viandas works — malanga, ñame, breadfruit (pana) — use whatever the market has cheapest.",
  zeroWasteHero: true,
  tags: ["dinner", "salt-cod", "viandas", "root-vegetables", "lenten", "puerto-rican"],
  sources: [
    {
      title: "Boricua.com — Bacalao Con Vianda",
      url: "https://boricua.com/bacalao-con-vianda/",
      note: "Desalting the bacalao and boiling a mix of viandas dressed with olive oil",
    },
  ],
};
