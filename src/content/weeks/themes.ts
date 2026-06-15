import type { WeekTheme } from "../types";

// The first seven weeks of the challenge — each a different register of Italian
// cucina povera. Week 1 (Pasta) is built out into a full WeekPlan in
// ./week-1-pasta.ts; the rest are themes the generator fills in.

export const week2Bread: WeekTheme = {
  slug: "week-2-bread",
  number: 2,
  cuisine: "italian",
  theme: "Bread",
  title: "Week 2 — Bread",
  description:
    "Tuscan stale-bread cooking, where nothing is wasted and yesterday's loaf is tonight's dinner. Soups and salads built on bread.",
  dishes: [
    "Ribollita (cavolo nero, cannellini, bread, rested overnight)",
    "Pappa al pomodoro",
    "Panzanella",
    'Acquacotta — "cooked water," finished with a poached egg',
    "Fettunta — grilled bread rubbed with garlic and oil",
  ],
  proteinNote: "Eggs on top, beans within, pecorino.",
  preciousThread: "A great new-harvest finishing oil.",
};

export const week3Eggs: WeekTheme = {
  slug: "week-3-eggs",
  number: 3,
  cuisine: "italian",
  theme: "Eggs",
  title: "Week 3 — Eggs",
  description:
    "The cheap protein hero takes center stage — the recovery week after pasta. The floor is trivially met here.",
  dishes: [
    "Frittata di patate, herb frittata, frittata di pasta",
    "Uova in purgatorio (eggs poached in tomato)",
    "Stracciatella (egg stirred into hot brodo)",
    "Eggs baked over wilted greens",
    "Cacio e uova",
  ],
  proteinNote: "Eggs — the floor is trivially met this week.",
  preciousThread: "Aged pecorino.",
};

export const week4Legumes: WeekTheme = {
  slug: "week-4-legumes",
  number: 4,
  cuisine: "italian",
  theme: "Legumes",
  title: "Week 4 — Legumes",
  description:
    'The Tuscan mangiafagioli ("bean-eater") week. The cheapest protein and calories that exist, so this posts your best cost-per-100g of the whole challenge.',
  dishes: [
    "Fagioli all'uccelletto (beans, sage, tomato)",
    "Pasta e fagioli; pasta e ceci",
    "Lenticchie in umido (braised lentils)",
    "Zuppa di legumi",
    "Cannellini on fettunta with a fried egg",
  ],
  proteinNote: "The easiest and cheapest week — legumes carry it.",
  preciousThread: "Confit garlic or a thread of the good oil.",
};

export const week5Polenta: WeekTheme = {
  slug: "week-5-polenta",
  number: 5,
  cuisine: "italian",
  theme: "Polenta & the North",
  title: "Week 5 — Polenta & the North",
  description:
    "A reminder that cucina povera isn't only Southern — the North lived on polenta. Cheap cornmeal, endlessly adaptable, soft or grilled.",
  dishes: [
    "Polenta e fagioli",
    "Polenta concia (folded with cheese)",
    "Polenta under a slow mushroom or onion ragù",
    "Soft polenta with a runny egg and pecorino",
    "Grilled leftover polenta with bitter greens",
  ],
  proteinNote: "Beans, eggs, a little cheese.",
  preciousThread:
    "A knob of good butter — the Northern luxury — or an aged alpine cheese.",
};

export const bonusSicilian: WeekTheme = {
  slug: "bonus-sicilian",
  number: 6,
  cuisine: "italian",
  theme: "Sicilian",
  title: "Bonus — Sicilian",
  description:
    "The island's poor cooking: oily fish, sweet-sour vegetables, breadcrumbs standing in for cheese. Cheap protein from the sea.",
  dishes: [
    "Pasta con le sarde (sardines, fennel, raisins, pine nuts)",
    "Pasta alla Norma",
    "Caponata (agrodolce eggplant)",
    "Sarde a beccafico (stuffed sardines)",
    "Anchovy-and-pangrattato pastas; tuna pantry pastas",
  ],
  proteinNote: "Sardines, anchovies, tuna.",
  preciousThread:
    "A tin of good sardines, or a few shavings of bottarga if you're splurging.",
  bonus: true,
};

export const bonusGarden: WeekTheme = {
  slug: "bonus-garden",
  number: 7,
  cuisine: "italian",
  theme: "Garden",
  title: "Bonus — Garden",
  description:
    "The contadino's plot: bitter greens, whatever's cheapest and in season, big pots of minestrone.",
  dishes: [
    "Cicoria (chicory) with garlic and chili",
    "Broccoli rabe; peperonata",
    "Minestrone with a Parmesan rind and beans",
    "Escarole and beans (scarola e fagioli)",
    "Greens-and-bean soups, egg on top",
  ],
  proteinNote: "Beans and eggs woven through, plus pecorino.",
  preciousThread: "The Parmesan rind, or a good aged cheese to grate.",
  bonus: true,
};
