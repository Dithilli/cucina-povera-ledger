import type { Recipe } from "../types";

export const ochazuke: Recipe = {
  slug: "ochazuke",
  title: "Ochazuke",
  cuisine: "japanese",
  blurb:
    "Hot green tea or dashi poured over a bowl of leftover rice with salty toppings — the classic Japanese rescue meal that turns last night's rice into dinner in two minutes.",
  servings: 2,
  perServing: { calories: 460, protein: 18 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    { item: "cooked short-grain rice, leftover and day-old is ideal", qty: "2 cups", cost: 0.5 },
    { item: "brewed sencha green tea, or light dashi, very hot", qty: "1 1/2 cups", cost: 0.3, spansWeeks: true },
    { item: "salted salmon flakes, umeboshi, or tinned tuna for the topping", qty: "1/2 cup", cost: 0.8 },
    { item: "nori, snipped into fine strips", qty: "1 sheet", cost: 0.25, spansWeeks: true },
    { item: "toasted sesame seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "scallion, thinly sliced", qty: "1", cost: 0.1 },
    { item: "soy sauce and wasabi to taste", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Warm the leftover rice — a quick splash of water and a covered minute in the microwave, or rinse cold rice briefly under hot water in a sieve to loosen the grains.",
    "Mound the rice in deep bowls. Lay the salmon, umeboshi, or tuna in the center and tuck the scallion and sesame around it.",
    "Pour the very hot tea or dashi down the side of the bowl until the rice is two-thirds submerged — you want a broth, not a soup.",
    "Top with nori strips, a drop of soy, and wasabi if you like. Eat immediately, while the tea is still loosening the rice.",
  ],
  modernMove:
    "Hot tea over rice is the original use-it-up dish — it rescues hardened day-old rice that would otherwise be binned, and any salty scrap from the fridge becomes the seasoning.",
  notes:
    "Genmaicha (toasted-brown-rice tea) gives a nuttier, more filling broth than plain sencha.",
  tags: ["rice", "tea", "leftovers", "zero-waste", "two-minute"],
};
