import type { WeekTheme } from "../types";

// Challenge #2 — Mexico: La Cocina del Maíz.
// The seven-week arc, each week a different register of the corn-and-bean
// kitchen. Cultural context for each week lives in full in
// docs/challenges/mexican.md; the `description` here carries the short version.
// cuisine is "mexican" — the engine is cuisine-agnostic, so these slot into the
// same content arrays as the Italian weeks, tagged by cuisine.

export const week1Masa: WeekTheme = {
  slug: "mx-week-1-masa",
  number: 1,
  cuisine: "mexican",
  theme: "Masa",
  title: "Week 1 — Masa",
  description:
    "Everything starts on the comal. Nixtamalized corn, ground to masa, becomes the tortilla — plate, utensil, and bread of Mesoamerica at once. Learn the masa and you've learned the cuisine.",
  dishes: [
    "Corn tortillas (from masa harina)",
    "Quesadillas de maíz with Oaxaca cheese",
    "Tlacoyos (masa pockets stuffed with beans)",
    "Sopes / memelas",
    "Chilaquiles rojos — stale tortillas reborn",
  ],
  proteinNote: "Masa + a smear of beans + queso fresco starts the complete-protein math.",
  preciousThread: "Good melting cheese (Oaxaca / quesillo).",
};

export const week2Frijoles: WeekTheme = {
  slug: "mx-week-2-frijoles",
  number: 2,
  cuisine: "mexican",
  theme: "Frijoles",
  title: "Week 2 — Frijoles",
  description:
    "The other half of the sacred pair and the protein engine of the whole challenge. A dollar pot of beans, simmered slow with epazote, pays out all week — cheapest near-complete protein there is, eaten with corn.",
  dishes: [
    "Frijoles de la olla (the pot)",
    "Frijoles refritos (day-two beans, refried)",
    "Frijoles charros (brothy, with pork scraps)",
    "Molletes (beans on bread, broiled with cheese)",
  ],
  proteinNote: "Beans ~12–15g protein per cup; with a tortilla, a complete protein.",
  preciousThread: "A little lard or a knuckle of bacon to enrich the pot.",
};

export const week3Chiles: WeekTheme = {
  slug: "mx-week-3-chiles",
  number: 3,
  cuisine: "mexican",
  theme: "Chiles & Salsas",
  title: "Week 3 — Chiles & Salsas",
  description:
    "The secret of how the poor ate well, not just enough. Toasted dried chiles and charred tomatoes ground in the molcajete turn a plain tortilla and beans into something you crave — almost free, infinitely variable.",
  dishes: [
    "Salsa roja asada (charred tomato + chile de árbol)",
    "Salsa verde (tomatillo)",
    "Salsa macha (toasted chile-and-seed oil)",
    "Enchiladas / entomatadas built on the salsas",
  ],
  proteinNote: "Chiles carry the legume/egg base of the other weeks.",
  preciousThread: "A small bag of good dried chiles (guajillo, ancho, árbol).",
};

export const week4Huevos: WeekTheme = {
  slug: "mx-week-4-huevos",
  number: 4,
  cuisine: "mexican",
  theme: "Huevos",
  title: "Week 4 — Huevos",
  description:
    "The cheap-protein bridge — the backyard hen feeds the Mexican kitchen too. With beans and a tortilla, an egg breakfast clears the protein floor before the day has started.",
  dishes: [
    "Huevos a la mexicana (scrambled with tomato, onion, chile)",
    "Huevos rancheros (fried eggs over tortilla and salsa)",
    "Huevos en salsa verde",
    "Migas (stale tortilla scrambled into the eggs)",
  ],
  proteinNote: "Eggs — the floor is trivially met, as in the Italian egg week.",
  preciousThread: "A little crema or chorizo to gild it.",
};

export const week5Maiz: WeekTheme = {
  slug: "mx-week-5-maiz",
  number: 5,
  cuisine: "mexican",
  theme: "Maíz",
  title: "Week 5 — Maíz (beyond the tortilla)",
  description:
    "Corn in its other lives: nixtamalized whole into pozole, steamed in a husk as tamales, off the cob as esquites, warm in the cup as atole. The same sacred grain, a half-dozen transformations.",
  dishes: [
    "Pozole (hominy stew, a little meat across a big pot)",
    "Esquites / elote (street corn)",
    "Tamales (masa steamed in a husk, bean- or cheese-filled)",
    "Atole (warm corn drink)",
  ],
  proteinNote: "Pozole stretches a little meat; tamales carry beans or cheese.",
  preciousThread: "A small amount of pork or chicken for the pozole pot.",
};

export const week6Verduras: WeekTheme = {
  slug: "mx-week-6-verduras",
  number: 6,
  cuisine: "mexican",
  theme: "Verduras",
  title: "Week 6 — Verduras y la Milpa",
  description:
    "The third sister and her companions — the most direct taste of the milpa. Nopales, squash and its blossom, wild quelites, rajas with corn and cream. Eat the whole plant and the whole season.",
  dishes: [
    "Nopales (cactus paddle salad / con huevo)",
    "Calabacitas (squash, corn, cheese)",
    "Rajas con crema (roasted chile strips)",
    "Quelites / verdolagas (purslane) with beans",
  ],
  proteinNote: "Paired with beans, eggs, or a little cheese.",
  preciousThread: "Crema and queso fresco for the rajas and squash.",
};

export const week7Guisos: WeekTheme = {
  slug: "mx-week-7-guisos",
  number: 7,
  cuisine: "mexican",
  theme: "Guisos",
  title: "Week 7 — Guisos (the Sunday pot)",
  description:
    "The celebratory but still-frugal finale — how the poor ate like kings on Sundays by stretching a little meat through a big pot, ladled over rice or scooped with tortillas. The communal table, the reward at the end of the arc.",
  dishes: [
    "Tinga de pollo (chicken in smoky chipotle-tomato)",
    "Picadillo (a little meat bulked with potato, carrot, raisins)",
    "Mole in its everyday form",
    "Frijoles puercos",
  ],
  proteinNote: "Meat as a flavor-carrier over the bean-and-corn base.",
  preciousThread: "The week's one cut of meat (+ Mexican chocolate for a mole).",
};

export const mexicanWeeks: WeekTheme[] = [
  week1Masa,
  week2Frijoles,
  week3Chiles,
  week4Huevos,
  week5Maiz,
  week6Verduras,
  week7Guisos,
];
