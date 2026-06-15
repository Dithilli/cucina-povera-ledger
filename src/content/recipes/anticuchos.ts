import type { Recipe } from "../types";

export const anticuchos: Recipe = {
  slug: "anticuchos",
  title: "Anticuchos",
  cuisine: "andean",
  blurb:
    "Beef heart steeped overnight in smoky ají panca, garlic, and vinegar, then charred hard over coals — the great pre-Hispanic street skewer that turns the cheapest cut into the most coveted bite in Lima.",
  servings: 4,
  perServing: { calories: 580, protein: 42 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "beef heart, trimmed and cut into 1-inch cubes", qty: "1 1/4 lb", cost: 3.5 },
    { item: "ají panca paste", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "garlic, minced", qty: "5 cloves", cost: 0.25, spansWeeks: true },
    { item: "red wine vinegar", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cumin, oregano, salt, pepper", qty: "to taste", cost: 0.25, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "potatoes, boiled, to serve", qty: "2 medium", cost: 0.6 },
    { item: "wooden skewers", qty: "8", cost: 0.3 },
  ],
  method: [
    "Trim the heart of fat and sinew and cut into even cubes. Whisk the ají panca, garlic, vinegar, cumin, oregano, salt, and pepper into a thick marinade and turn the meat through it.",
    "Marinate covered in the fridge at least 4 hours, ideally overnight — the vinegar tenderizes and the panca soaks in deep.",
    "Soak the wooden skewers in water so they don't burn, then thread three or four cubes onto each, brushing on extra marinade and a little oil.",
    "Grill over hot coals or a screaming-hot pan 2–3 minutes a side — heart cooks fast and toughens if overdone, so pull it while the center is still rosy. Serve with boiled potatoes and a scoop of salsa criolla.",
  ],
  modernMove:
    "Beef heart is lean muscle, not offal-soft, so the acid in the marinade does the tenderizing and a hard, fast char does the rest. Cook it past medium and it turns to leather — treat it like a steak, not a stew.",
  notes:
    "One of the oldest dishes of the Andes, grilled at every street corner and fiesta. Heart is a fraction of the price of steak and richer in iron — the definition of cucina povera.",
  zeroWasteHero: true,
  tags: ["beef-heart", "offal", "grilled", "street-food", "andean"],
  sources: [
    {
      title: "EatPeru — Anticuchos de Corazón (Peruvian Beef Heart Kebabs)",
      url: "https://www.eatperu.com/anticuchos/",
      note: "Ají panca, garlic, cumin, and vinegar marinade and the coal-grilling method for beef-heart skewers.",
    },
  ],
};
