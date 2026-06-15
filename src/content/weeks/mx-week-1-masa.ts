import type { WeekPlan } from "../types";

// Challenge #2 — Mexico, Week 1 (Masa), fully built out into an executable plan,
// mirroring week-1-pasta.ts. The opening week is the easy protein win that pasta
// week is not: masa + beans is already a complete protein, so the ~100g floor is
// met without meat, and the bean-and-corn economy posts a cheap week.

export const mxWeek1Masa: WeekPlan = {
  slug: "mx-week-1-masa",
  number: 1,
  cuisine: "mexican",
  theme: "Masa",
  title: "Week 1 — Masa",
  description:
    "Everything starts on the comal. Nixtamalized corn, ground to masa, becomes the tortilla — plate, utensil, and bread of Mesoamerica at once. Learn the masa and you've learned the cuisine.",
  context:
    `Everything starts on the comal, the flat griddle. Nixtamalized corn — soaked and cooked in lime, then ground — becomes masa, pressed and cooked into the tortilla, which is plate, utensil, and bread all at once. Learn the masa and you've learned the cuisine: tortillas, quesadillas, tlacoyos (masa pockets stuffed with beans), sopes, memelas. A tortilla and a smear of beans already starts stacking the complete-protein math the whole milpa is built on. Stale tortillas are not waste — they become chilaquiles, migas, and totopos.`,
  dishes: [
    "Corn tortillas, fresh off the comal",
    "Quesadillas de maíz with Oaxaca cheese",
    "Tlacoyos / sopes filled with refried beans",
    "Chilaquiles rojos (the stale-tortilla hero)",
    "Huevos a la mexicana / huevos rancheros",
  ],
  proteinNote:
    "Masa + beans is a complete protein; eggs and a little cheese stack the rest. The floor is met without meat — Mexico's easy opening week.",
  bonus: false,
  preciousThread: "Good melting cheese (Oaxaca / quesillo). Use it to gild, not to fill.",
  engine: [
    "The salsa foundation, made ahead — salsa-roja-asada + salsa-verde (the base under everything; Mexican food has salsa with it all)",
    "A big pot of frijoles de la olla (the bean bank for the week)",
    "A double batch of masa → a stack of fresh tortillas (and chips from the rest)",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "tacos of frijoles-refritos, queso fresco, salsa-roja-asada",
      estCalories: 720,
      estProtein: 26,
    },
    {
      day: "Mon",
      dinner: "quesadillas-de-maiz with salsa-verde",
      estCalories: 650,
      estProtein: 24,
    },
    {
      day: "Tue",
      dinner: "sopes with refried beans, queso fresco, and salsa",
      estCalories: 690,
      estProtein: 25,
    },
    {
      day: "Wed",
      dinner: "frijoles-charros with tortillas",
      estCalories: 700,
      estProtein: 28,
    },
    {
      day: "Thu",
      dinner: "tacos de papa with salsa-verde and crema",
      estCalories: 660,
      estProtein: 19,
    },
    {
      day: "Fri",
      dinner: "entomatadas — tortillas folded in salsa-roja-asada with cheese + egg",
      estCalories: 710,
      estProtein: 27,
    },
    {
      day: "Sat",
      dinner: "chilaquiles-rojos for dinner — the last tortillas, nothing wasted",
      estCalories: 680,
      estProtein: 22,
    },
  ],
  shopping: [
    { item: "Masa harina (corn)", qty: "~4 lb bag", cost: 4.5 },
    { item: "Dried pinto or black beans", qty: "2 lb", cost: 2.5 },
    {
      item: "Eggs",
      qty: "2 dozen",
      cost: 8.0,
      note: "the protein backbone this week",
    },
    { item: "Oaxaca cheese / quesillo", qty: "~¾ lb", cost: 6.0, spansWeeks: true },
    { item: "Queso fresco", qty: "~½ lb", cost: 4.0, spansWeeks: true },
    { item: "Tomatoes", qty: "~3 lb", cost: 4.0 },
    { item: "Tomatillos", qty: "1 lb", cost: 2.0 },
    {
      item: "Dried chiles (guajillo, ancho, árbol)",
      qty: "a few of each",
      cost: 4.0,
      spansWeeks: true,
    },
    { item: "White onions", qty: "~3 lb", cost: 3.0 },
    { item: "Garlic", qty: "2 heads", cost: 2.0, spansWeeks: true },
    { item: "Serrano / jalapeño chiles", qty: "a handful", cost: 1.5 },
    { item: "Cilantro + epazote", qty: "", cost: 2.0 },
    { item: "Limes", qty: "6", cost: 2.0 },
    { item: "Crema", qty: "1 small", cost: 3.0 },
    { item: "Lard or oil", qty: "", cost: 5.0, spansWeeks: true },
    { item: "Potatoes", qty: "~2 lb", cost: 2.5 },
    { item: "Corn (for esquites)", qty: "4 ears / a bag", cost: 2.0 },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};
