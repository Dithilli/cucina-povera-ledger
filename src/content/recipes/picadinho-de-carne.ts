import type { Recipe } from "../types";

export const picadinhoDeCarne: Recipe = {
  slug: "picadinho-de-carne",
  title: "Picadinho de Carne",
  cuisine: "brazilian",
  blurb:
    "Beef finely diced and stewed in its own gravy until meltingly soft, then crowned the proper way — a runny fried egg, a slick of fried banana, and a shower of farofa — over rice and beans for the full Brazilian plate.",
  servings: 2,
  perServing: { calories: 660, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck, finely diced", qty: "3/4 lb", cost: 2.0 },
    { item: "onion, diced", qty: "1 small", cost: 0.2 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "cassava flour (farinha), for farofa", qty: "1/2 cup", cost: 0.25, spansWeeks: true },
    { item: "ripe banana", qty: "1", cost: 0.2 },
    { item: "eggs", qty: "2", cost: 0.4 },
    { item: "scallions and parsley (cheiro-verde)", qty: "small handful", cost: 0.2 },
    { item: "neutral oil and a knob of butter", qty: "2 tbsp + 1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Brown the diced beef hard in oil in batches so it sears rather than steams, then set aside.",
    "Soften onion and garlic in the same pot, add the tomato, return the beef, splash in hot water, and simmer covered until fork-tender and the gravy is glossy, 40–50 minutes.",
    "Make farofa: toast the farinha in butter until golden and nutty, seasoned with salt.",
    "Fry the banana slices until caramelized, and fry the eggs so the yolks stay runny.",
    "Plate the picadinho over rice and beans, slide a fried egg and the bananas alongside, and scatter farofa and cheiro-verde over the top.",
  ],
  modernMove:
    "Dice the chuck small and sear it in batches — crowding the pan steams the meat grey, but a real crust on each cube is what gives the gravy its deep, roasted backbone.",
  notes:
    "A beloved any-day family dish that becomes a feast with its trimmings; the egg, banana and farofa are not optional flourishes but the canonical Brazilian way to dress a plate of meat and rice.",
  zeroWasteHero: false,
  tags: ["dinner", "beef", "stew", "farofa", "fried-egg", "brazilian"],
  sources: [
    {
      title: "Olivia's Cuisine — Brazilian Beef Stew (Picadinho) with Banana Farofa",
      url: "https://www.oliviascuisine.com/brazilian-beef-stew/",
      note: "Diced-beef stew served with rice, banana farofa, and a fried egg",
    },
  ],
};
