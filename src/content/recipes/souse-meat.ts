import type { Recipe } from "../types";

export const souseMeat: Recipe = {
  slug: "souse-meat",
  title: "Souse (Head Cheese)",
  cuisine: "appalachian",
  blurb:
    "The hog-killing thrift dish in its purest form — the meat from a pig's head and feet simmered to rags, seasoned with sage and vinegar and hot pepper, then set into a tangy jellied loaf that wastes not one scrap of the mountain bank.",
  servings: 8,
  perServing: { calories: 280, protein: 24 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "pig's feet (trotters)", qty: "3 lb", cost: 3.5 },
    { item: "pork hock or shoulder trimmings", qty: "1.5 lb", cost: 3.0 },
    { item: "cider vinegar", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    { item: "onion", qty: "1 large", cost: 0.3 },
    { item: "rubbed sage", qty: "2 tsp", cost: 0.1, spansWeeks: true },
    { item: "crushed red pepper and black pepper", qty: "1 tsp each", cost: 0.1, spansWeeks: true },
    { item: "bay leaves", qty: "2", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Put the feet, hock, onion, bay, and a big pinch of salt in a deep pot, cover with water, and simmer very gently 3–4 hours until the meat falls off the bones and the broth turns sticky with natural gelatin.",
    "Lift everything out and let it cool enough to handle. Pull every shred of meat and skin from the bones, discarding the bones, and chop it fine.",
    "Strain the cooking liquid and return about 2 cups of it to the pot with the chopped meat, the vinegar, sage, both peppers, and salt to taste. Simmer 5 minutes; the seasoning should be bright and sharp.",
    "Pour into a loaf pan or crock, press level, and chill overnight until firmly set into a sliceable jelly.",
    "Turn out and slice thin. Eat cold with saltines and hot sauce, or as the centerpiece of supper with cornbread and greens.",
  ],
  modernMove:
    "The collagen in the feet is the whole engine — simmered low and slow it dissolves into gelatin that sets the loaf with no added pectin, the original nose-to-tail proof that the cheapest cuts make the richest dish.",
  notes:
    "Vinegar is what makes it 'souse' rather than plain head cheese; it both preserves and cuts the richness. Born of the fall hog-killing, when nothing from the animal could be let go to waste.",
  zeroWasteHero: true,
  tags: ["pork", "offal", "nose-to-tail", "souse", "head-cheese", "appalachian"],
  sources: [
    {
      title: "Cooks.com — Head Cheese (Souse)",
      url: "https://www.cooks.com/recipe/ay5eb6xg/head-cheese-souse.html",
      note: "Pig's feet and head meat simmered to gelatin, seasoned with vinegar, sage, and pepper, set into a jellied loaf.",
    },
  ],
};
