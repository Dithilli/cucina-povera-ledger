import type { Recipe } from "../types";

export const rajma: Recipe = {
  slug: "rajma",
  title: "Rajma",
  cuisine: "north-indian",
  blurb:
    "Punjabi red kidney beans simmered in a slow-cooked onion–tomato masala until the broth turns thick and almost creamy — Sunday comfort food over rice.",
  servings: 4,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 0.92,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried red kidney beans, soaked overnight (or 3 1/2 cups cooked)",
      qty: "1 1/4 cups",
      cost: 1.1,
    },
    { item: "onions, finely chopped", qty: "2", cost: 0.5 },
    { item: "ripe tomatoes, puréed (or 1 cup canned)", qty: "3", cost: 0.7 },
    { item: "garlic cloves + thumb of ginger, crushed to a paste", qty: "5 + 1", cost: 0.2, spansWeeks: true },
    { item: "green chili, slit", qty: "1", cost: 0.1 },
    { item: "neutral oil or ghee", qty: "3 tbsp", cost: 0.25, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "ground coriander, turmeric, red chili powder, garam masala", qty: "spice blend", cost: 0.3, spansWeeks: true },
    { item: "salt; chopped cilantro to finish", qty: "to taste", cost: 0.15 },
  ],
  method: [
    "Pressure-cook the soaked beans in plenty of salted water until completely soft and a few crush easily against the side — undercooked rajma never goes creamy. Keep the cooking liquid.",
    "Bloom cumin seeds in hot oil, then fry the onions, low and patient, until deep golden brown — this browning is the whole flavor of the dish.",
    "Add the ginger-garlic paste and green chili, fry off the raw smell, then add the tomato purée with coriander, turmeric and chili powder. Cook down hard until the oil separates and the masala is jammy.",
    "Tip in the beans with enough of their liquid to make a thick gravy. Simmer 20–30 minutes, mashing a ladle of beans into the pot to thicken it. Finish with garam masala and cilantro; serve over rice.",
  ],
  modernMove:
    "Mashing a ladleful of the cooked beans back into the gravy emulsifies the broth into something silky — the same trick that makes pasta e ceci creamy, no cream needed.",
  tags: ["legumes", "kidney-beans", "curry", "punjabi", "one-pot"],
};
