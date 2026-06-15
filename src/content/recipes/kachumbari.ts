import type { Recipe } from "../types";

export const kachumbari: Recipe = {
  slug: "kachumbari",
  title: "Kachumbari",
  cuisine: "east-african",
  blurb:
    "The fresh tomato-onion relish that sits on every East African table — bright with lime, lifted by dhania and chili, the cool foil to fried and grilled food.",
  servings: 4,
  perServing: { calories: 45, protein: 1 },
  estCostPerServing: 0.35,
  roles: ["base"],
  ingredients: [
    { item: "ripe tomatoes, diced", qty: "3", cost: 0.8 },
    { item: "red onion, thinly sliced", qty: "1", cost: 0.3 },
    { item: "green chili, minced", qty: "1", cost: 0.15 },
    { item: "fresh dhania (cilantro), chopped", qty: "1/4 cup", cost: 0.2 },
    { item: "lime or lemon, juiced", qty: "1", cost: 0.2 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Massage a little salt into the sliced onion and cover with water; let it soak 10–15 minutes to tame its bite, then drain.",
    "Combine the drained onion with the diced tomatoes, chili, and dhania.",
    "Squeeze over the lime juice and season with salt.",
    "Toss gently and let it sit a few minutes for the flavours to meld before serving.",
  ],
  modernMove:
    "Salting and soaking the raw onion first is the move that keeps kachumbari sharp and refreshing rather than harsh.",
  notes: "Diced avocado or shaved cabbage are common additions.",
  zeroWasteHero: false,
  tags: ["base", "salad", "relish", "fresh", "east-african"],
  sources: [
    {
      title: "Tara's Multicultural Table — Kachumbari (Kenyan Tomato and Onion Salad)",
      url: "https://tarasmulticulturaltable.com/kachumbari-kenyan-tomato-and-onion-salad/",
      note: "Salt-soaking the onion, plus the tomato-chili-dhania-lime build.",
    },
  ],
};
