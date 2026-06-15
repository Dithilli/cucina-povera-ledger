import type { Recipe } from "../types";

export const bibimGuksu: Recipe = {
  slug: "bibim-guksu",
  title: "Bibim-guksu",
  cuisine: "korean",
  blurb:
    "Spicy cold noodles — thin wheat somyeon tossed with a sweet-sour-fiery gochujang sauce, crowned with crisp cucumber and a halved egg. A summer dinner that costs almost nothing and comes together faster than the noodles take to cook.",
  servings: 4,
  perServing: { calories: 540, protein: 16 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "somyeon (thin wheat noodles)", qty: "12 oz", cost: 1.2 },
    {
      item: "gochujang",
      qty: "3 tbsp",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "gochugaru (Korean chili flakes)",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "rice vinegar",
      qty: "2 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "sugar (or a little rice syrup)",
      qty: "1 1/2 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "soy sauce",
      qty: "1 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "garlic, grated",
      qty: "2 cloves",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "toasted sesame oil + sesame seeds",
      qty: "1 tbsp + to finish",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "cucumber, julienned", qty: "1", cost: 0.5 },
    {
      item: "well-fermented kimchi, chopped (optional but classic)",
      qty: "1/2 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "eggs, hard-boiled and halved", qty: "2", cost: 0.7 },
  ],
  method: [
    "Whisk the sauce first so the flavors marry while the water heats: gochujang, gochugaru, vinegar, sugar, soy sauce, grated garlic, and sesame oil into a glossy, spoonable paste. Taste and balance — it should hit sweet, sour, and spicy all at once.",
    "Boil the somyeon in plenty of water; thin noodles cook in 2-3 minutes, so watch closely. When a poured splash of cold water keeps the pot from boiling over, they're nearly done.",
    "Drain and rinse the noodles hard under cold running water, rubbing them with your hands to wash off surface starch and chill them — this is what makes cold noodles springy and clean instead of gummy. Shake them very dry.",
    "Tip the noodles into a bowl with the sauce and toss thoroughly with tongs or hands until every strand is coated red.",
    "Pile into bowls and top with julienned cucumber, a little chopped kimchi, and half a boiled egg. Finish with sesame seeds and a few extra drops of sesame oil. Eat at once, while everything is cold.",
  ],
  modernMove:
    "Rinsing the cooked noodles in cold water and rubbing off the starch is the non-negotiable step — it both chills them and gives the chewy, slippery bite that defines cold noodles. Mixing the sauce before the noodles cook means dinner is on the table in under ten minutes.",
  notes:
    "Endlessly stretchable: leftover sour kimchi, any crunchy vegetable, or a handful of greens all belong on top. The same sauce works on rice or over blanched vegetables when there are no noodles.",
  tags: ["noodles", "cold-noodles", "gochujang", "spicy", "summer", "fast"],
};
