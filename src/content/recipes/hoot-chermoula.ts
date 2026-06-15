import type { Recipe } from "../types";

export const hootChermoula: Recipe = {
  slug: "hoot-chermoula",
  title: "Hoot bel Chermoula",
  cuisine: "moroccan",
  blurb:
    "White fish marinated in chermoula and baked over a bed of sliced potatoes and peppers, the vegetables drinking up the herby, lemony juices as the fish steams flaky on top under a scatter of olives.",
  servings: 4,
  perServing: { calories: 460, protein: 28 },
  estCostPerServing: 2.2,
  roles: ["dinner"],
  ingredients: [
    { item: "white fish fillets (whiting, hake, or pollock)", qty: "1 1/4 lb", cost: 5.0 },
    { item: "chermoula (cilantro-garlic-cumin-paprika)", qty: "2/3 cup", cost: 0.8 },
    { item: "potatoes, thinly sliced", qty: "1 lb", cost: 0.7 },
    { item: "bell peppers, sliced in rings", qty: "2", cost: 0.8 },
    { item: "tomato, sliced", qty: "1", cost: 0.3 },
    { item: "olives", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "lemon", qty: "1", cost: 0.3 },
  ],
  method: [
    "Coat the fish in two-thirds of the chermoula and let it marinate in the fridge while you prep the vegetables.",
    "Layer the sliced potatoes across a baking dish, tossing them with the remaining chermoula and a splash of water, then scatter on the peppers.",
    "Bake the vegetables covered at 375°F for about 25 minutes until the potatoes start to give.",
    "Lay the marinated fish over the softened vegetables, top with tomato slices, olives, and lemon, and return uncovered to the oven.",
    "Bake until the fish flakes and the potato edges brown, about 20 minutes more, then serve from the dish.",
  ],
  modernMove:
    "Pre-baking the potatoes alone first solves the classic mismatch — the dense vegetables get a head start so the delicate fish, added late, finishes perfectly flaky instead of overcooking while the potatoes catch up.",
  notes:
    "Cheaper white fish like whiting or pollock stands in perfectly for pricier sea bream here.",
  zeroWasteHero: false,
  tags: ["fish", "chermoula", "baked", "potatoes", "moroccan"],
  sources: [
    {
      title: "My Moroccan Food — Oven Baked Fish with Chermoula and Preserved Lemon",
      url: "https://www.mymoroccanfood.com/home/oven-baked-fish-with-chermoula-and-preserved-lemon-moroccan-fish-tagine",
      note: "Chermoula-marinated fish baked over sliced potatoes and peppers with olives and lemon.",
    },
  ],
};
