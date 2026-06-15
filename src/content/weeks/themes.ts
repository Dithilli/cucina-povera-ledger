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
  context:
    `Tuscany's monument to thrift. The region's saltless loaf (pane sciocco) goes stale fast, so an entire cuisine grew up to resurrect it: ribollita ("reboiled" — bean-and-kale soup thickened with yesterday's bread and better the next day), panzanella (bread salad), pappa al pomodoro (bread-and-tomato porridge), acquacotta ("cooked water," finished with an egg). Nothing here is a recipe so much as a refusal to waste. This is non si butta via niente at its purest.`,
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
  context:
    `The cortile economy — the farmyard hen. Eggs were the everyday protein the poor could actually keep producing, and the frittata is the great catch-all: whatever greens, scraps, or leftover pasta you have, bound with egg and made dinner. After the carbohydrate weeks, this is the recovery week — the protein floor is met almost without trying. Cheap, fast, and forgiving.`,
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
  context:
    `The Tuscans were mocked as mangiafagioli — "bean-eaters" — and wore it proudly. Dried beans, lentils, and chickpeas were the meat of the poor: stored all winter in the cellar, simmered slow with sage and a little oil, eaten with bread or pasta. This is the cheapest protein-and-calories that exists, so it posts your best cost-per-100g of the whole challenge. Lentils at New Year for luck; beans all'uccelletto any day at all.`,
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
  context:
    `The Northern staple — Veneto, Lombardy, Friuli. For the rural poor of the North, golden cornmeal mush was dinner, often all there was. Stir it soft with a little cheese (polenta concia), let it set and grill it, or spoon a few beans or a mushroom ragù over it. It carries a hard lesson too: relying on un-treated corn gave the Northern poor pellagra for generations — frugality without knowledge can wound. Eaten well, with a legume or an egg alongside, it's pure comfort.`,
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
  context:
    `The island apart, where Arab, Greek, and Spanish rule layered onto peasant scarcity to produce something singular. The sea gives cheap oily fish (sardines, anchovies); the land gives eggplant, wild fennel, capers, and a love of agrodolce (sweet-sour). Pasta con le sarde, caponata (the sweet-sour eggplant relic of Arab Sicily), sarde a beccafico — poverty cooking dressed in a thousand years of conquest.`,
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
  context:
    `The kitchen garden and the foraged hedge. When the pantry is thin, the orto and the roadside provide: bitter cicoria, scarola, the whole pot of minestrone built from whatever's ripe, peperonata in late summer. This is eating with the season at its most literal — the week's menu is whatever the plot and the weather decided to give you. The oldest frugality of all: eat what grows.`,
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
