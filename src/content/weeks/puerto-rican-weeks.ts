import type { WeekPlan } from "../types";

// Challenge — Puerto Rico: comida criolla (everyday creole home cooking).
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "puerto-rican"; the
// engine is cuisine-agnostic, so these slot into the shared content arrays,
// tagged by cuisine. These are the curated, pregenerated defaults — the AI menu
// generator composes variations on top of the same recipe pool.
//
// RULE #6: the Puerto Rican FOUNDATION — sofrito/recaíto (the blended green base
// of ají dulce, peppers, onion, garlic, culantro and cilantro), a big pot of
// white rice (arroz), the daily pot of habichuelas (stewed pink or red beans),
// and the seasoning trinity of adobo, sazón and achiote — is the CONSTANT that
// lives in EVERY week's `engine`. It is never itself a week theme. Each of the
// seven weeks is a distinct real DINNER category that sits on that base: the
// everyday criollo plate of arroz, habichuelas, and something stewed, fried, or
// roasted alongside it.

export const prWeek1Arroz: WeekPlan = {
  slug: "pr-week-1-arroz",
  number: 1,
  cuisine: "puerto-rican",
  theme: "Arroz",
  title: "Week 1 — Arroz",
  description:
    "The week the rice stops being a side and becomes the whole dinner. Puerto Rico cooks a caldero of rice every day, and this week we cook the dishes where the grain itself is the plate — rice with pigeon peas, rice with chicken, rice fried back with beans, rice studded with cheap canned sausages. One pot, a spoon of sofrito, a pinch of achiote, and dinner is gold and fragrant before any meat enters the room.",
  context: `Rice is the unshakable centre of the Puerto Rican plate, and the islander's measure of a good cook is the **pegao** — the toasted, crackling crust at the bottom of the caldero that everyone fights over. This week the rice *is* the dinner. **Arroz con gandules**, perfumed with sofrito and achiote and studded with pigeon peas, is the dish that says "home" and "holiday" at once — the plate that appears at every Christmas and every Sunday. **Arroz con pollo** stretches a few chicken pieces across a whole pot of yellow rice so the bird seasons the grain rather than feeding the table alone. **Arroz mamposteao** is pure thrift — yesterday's white rice fried back together with leftover stewed beans until it turns creamy and brown. And **arroz con salchichas** leans on a tin of cheap Vienna sausages, the pantry standby of lean weeks, simmered into the rice with tomato and sofrito. The genius is the same every night: a spoon of green sofrito and a pinch of red achiote turn a pot of cheap grain into something that tastes like abundance.`,
  dishes: ["Arroz con gandules", "Arroz con pollo", "Arroz mamposteao", "Arroz con salchichas"],
  proteinNote:
    "The floor comes from the gandules (pigeon peas) and the daily pot of habichuelas — rice and beans together are a complete protein. A few cheap chicken pieces season the arroz con pollo, and a tin of salchichas stretches one night; the beans keep the protein honest on the leaner days.",
  bonus: false,
  preciousThread: "A small bag of dried gandules (pigeon peas) — the soul of the holiday rice.",
  engine: [
    "Sofrito/recaíto — a blended jar of ají dulce, peppers, onion, garlic and culantro (the constant base)",
    "White rice — a big pot in the caldero, reheated all week, prized for its pegao crust",
    "Habichuelas — the daily pot of stewed pink beans simmered with sofrito and a little tomato",
    "Adobo & sazón — the garlic-oregano salt and the achiote seasoning that golds the rice",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "arroz con gandules with the day's habichuelas on the side", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "arroz con pollo — yellow rice with a few stewed chicken pieces and olives", estCalories: 560, estProtein: 24 },
    { day: "Tue", dinner: "arroz con salchichas — rice simmered with a tin of vienna sausages, tomato and sofrito", estCalories: 540, estProtein: 18 },
    { day: "Wed", dinner: "arroz mamposteao — yesterday's rice fried back with the stewed beans until creamy", estCalories: 520, estProtein: 17 },
    { day: "Thu", dinner: "arroz con gandules again, with a fried egg on top and beans on the side", estCalories: 580, estProtein: 21 },
    { day: "Fri", dinner: "arroz con pollo, second round, the rice browner and the pegao deeper", estCalories: 560, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: a big mamposteao — all the week's leftover rice and beans fried together with the last of the sofrito and an egg", estCalories: 500, estProtein: 16 },
  ],
  shopping: [
    { item: "White rice", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Dried gandules (pigeon peas)", qty: "1 lb", cost: 2.0, spansWeeks: true, note: "the precious thread — soul of the holiday rice" },
    { item: "Dried pink beans", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Sofrito makings (ají dulce, cubanelle peppers, onion, garlic, culantro, cilantro)", qty: "1 big batch", cost: 4.0, spansWeeks: true },
    { item: "Chicken pieces (thighs/drumsticks)", qty: "1.5 lb", cost: 3.5, note: "stretched across the arroz con pollo" },
    { item: "Canned vienna sausages (salchichas)", qty: "2 tins", cost: 2.0, note: "the lean-week standby" },
    { item: "Tomato sauce", qty: "2 small cans", cost: 1.5, spansWeeks: true },
    { item: "Sazón con achiote & adobo", qty: "1 box + 1 jar", cost: 3.0, spansWeeks: true, note: "the achiote that golds the rice" },
    { item: "Manzanilla olives & capers (alcaparrado)", qty: "1 small jar", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Oil, oregano, bay leaf", qty: "pantry seasoning", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 17,
};

export const prWeek2Habichuelas: WeekPlan = {
  slug: "pr-week-2-habichuelas",
  number: 2,
  cuisine: "puerto-rican",
  theme: "Habichuelas & Guisos",
  title: "Week 2 — Habichuelas & Guisos",
  description:
    "The week of the long, low simmer — the guiso, the stew that builds a deep gravy from sofrito, tomato and a little cheap meat, then ladles it generously over rice. Beans stewed soft with calabaza, beef braised until it shreds, chicken fallen off the bone: the kind of dinner that fills the kitchen with smell all afternoon and feeds the table from one pot all week.",
  context: `If rice is the centre of the plate, the **guiso** — the stew — is what makes it a dinner. The technique is the soul of the criollo kitchen: start a base of sofrito sizzling in achiote oil, build it with tomato sauce, alcaparrado and a little adobo, then let something cheap braise in it low and slow until the gravy is thick and the meat surrenders. **Habichuelas guisadas** are the everyday miracle — pink beans stewed with sofrito, a chunk of calabaza (West Indian pumpkin) melting in to sweeten and thicken the pot, and a few cubes of potato to stretch it; ladled over white rice they are most islanders' true daily dinner. **Carne guisada** braises cheap stewing beef with potatoes and carrots until you can eat it with a spoon. **Pollo guisado** does the same with bone-in chicken, the bones giving the gravy its body. A little meat, a big pot, all afternoon: that is how the island eats well on almost nothing.`,
  dishes: [
    "Habichuelas guisadas — pink beans stewed with sofrito, calabaza and potato",
    "Carne guisada — cheap beef braised soft with potatoes and carrots",
    "Pollo guisado — bone-in chicken stewed in sofrito gravy",
    "Habichuelas con calabaza — the bean pot sweetened and thickened with pumpkin",
  ],
  proteinNote:
    "The beans are the daily protein floor; the calabaza and potato stretch the pot without meat. A pound of cheap stewing beef and a few bone-in chicken pieces season two nights each, braised to feed far more than their weight, with the gravy doing the work.",
  bonus: false,
  preciousThread: "A wedge of calabaza (West Indian pumpkin) that melts into and sweetens the bean pot.",
  engine: [
    "Sofrito/recaíto — the blended green base that starts every guiso (the constant base)",
    "White rice — a big pot, reheated all week to catch the stew gravy",
    "Habichuelas — the daily pot of stewed pink beans, this week the headline dish itself",
    "Adobo & sazón — the garlic-oregano salt and achiote oil that colours every stew",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "habichuelas guisadas with calabaza and potato, ladled over rice", estCalories: 560, estProtein: 20 },
    { day: "Mon", dinner: "carne guisada — beef braised soft with potatoes and carrots, over rice", estCalories: 580, estProtein: 26 },
    { day: "Tue", dinner: "pollo guisado — bone-in chicken stewed in sofrito gravy, rice and beans on the side", estCalories: 560, estProtein: 25 },
    { day: "Wed", dinner: "habichuelas guisadas again, thicker, with the last of the calabaza melted in", estCalories: 540, estProtein: 19 },
    { day: "Thu", dinner: "carne guisada, second round, the gravy reduced and richer over rice", estCalories: 560, estProtein: 24 },
    { day: "Fri", dinner: "pollo guisado picked from the bone, stretched with extra potato over rice", estCalories: 540, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: a thick sopón — all the week's leftover stews and beans pooled, thinned with water, and simmered with rice into one final pot", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true, note: "the base under every dinner" },
    { item: "Dried pink beans", qty: "2 lb", cost: 3.0, spansWeeks: true },
    { item: "Stewing beef (chuck/shoulder)", qty: "1 lb", cost: 4.0, note: "braised soft to feed far past its weight" },
    { item: "Bone-in chicken pieces", qty: "1.5 lb", cost: 3.0 },
    { item: "Calabaza (West Indian pumpkin)", qty: "1 wedge", cost: 2.0, note: "the precious thread — melts into the bean pot" },
    { item: "Potatoes", qty: "3 lb", cost: 2.5 },
    { item: "Carrots", qty: "1 lb", cost: 1.0 },
    { item: "Tomato sauce", qty: "from last week's cans", cost: 0.5, spansWeeks: true },
    { item: "Sofrito", qty: "from last week's batch", cost: 0.0, spansWeeks: true },
    { item: "Sazón con achiote & adobo", qty: "from the pantry", cost: 0.0, spansWeeks: true },
    { item: "Onions & garlic", qty: "for fresh sofrito and the pots", cost: 2.0, spansWeeks: true },
    { item: "Oil, oregano, bay leaf", qty: "pantry seasoning", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 16,
};

export const prWeek3Mofongo: WeekPlan = {
  slug: "pr-week-3-mofongo",
  number: 3,
  cuisine: "puerto-rican",
  theme: "Viandas & Mofongo",
  title: "Week 3 — Viandas & Mofongo",
  description:
    "The week of the roots and the mortar. Cheap starchy viandas — green plantain, yautía, yuca, ñame — boiled, fried, or mashed in the wooden pilón with garlic and a little pork into mofongo, the island's great frugal dinner. A mound of mashed plantain, a hollow filled with stew, a sauce of garlic and broth: filling, cheap, and entirely satisfying.",
  context: `Before rice, the island ate **viandas** — the starchy roots and green plantains that grow easily in mountain ground and fill a belly for almost nothing. The Taíno cultivated **yuca** (cassava), **yautía** (taro), and **ñame** (yam); the plantain came with the Spanish galleons. Boiled and dressed with garlicky oil they become a humble vianda plate; but the great dish is **mofongo** — green plantains fried then crushed in the **pilón**, the wooden mortar, with garlic, olive oil, and **chicharrón** (crisp pork) until they bind into a dense, savoury mound. It is jíbaro food, the mountain peasant's dinner, and a perfect stretch of thrift: a couple of cheap plantains, a clove of garlic, a scrap of pork, and you have a meal with real heft. **Mofongo relleno** hollows the mound and fills it with a saucy stew so the plantain soaks up every drop; **viandas con bacalao** dresses the boiled roots with salt cod sautéed in onions. Nothing here is wasted, and nothing here is dear.`,
  dishes: [
    "Mofongo — fried green plantain crushed with garlic and chicharrón",
    "Mofongo relleno — the plantain mound hollowed and filled with chicken or bean stew",
    "Viandas con bacalao — boiled roots dressed with salt cod and onions",
    "Mofongo con caldo — the mound served in a garlicky broth",
  ],
  proteinNote:
    "A small amount of chicharrón or salt cod seasons the plantain and roots; the daily pot of habichuelas and the bean-stuffed relleno carry the protein floor. An egg on the lighter nights tops it off — the plantain provides the bulk, the beans the protein.",
  bonus: false,
  preciousThread: "A few ounces of chicharrón (crisp pork rind) pounded into the mofongo for savour.",
  engine: [
    "Sofrito/recaíto — the blended green base for the stews that fill and sauce the mofongo (the constant base)",
    "White rice — a big pot, reheated all week as the side to the vianda plates",
    "Habichuelas — the daily pot of stewed pink beans, also the filling for a meatless relleno",
    "Adobo, sazón & garlic — the seasoning, plus the raw garlic crushed into every pilón of mofongo",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "mofongo with chicharrón, in a little garlic broth, beans on the side", estCalories: 600, estProtein: 19 },
    { day: "Mon", dinner: "mofongo relleno — the mound hollowed and filled with stewed chicken", estCalories: 580, estProtein: 23 },
    { day: "Tue", dinner: "viandas con bacalao — boiled yuca and yautía dressed with salt cod and onions, rice on the side", estCalories: 540, estProtein: 20 },
    { day: "Wed", dinner: "mofongo relleno with the stewed beans as the filling, an egg on top", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "boiled viandas with garlicky oil (mojo de ajo) and the last of the bacalao", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "mofongo again in a garlicky chicken caldo, beans on the side", estCalories: 560, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: a vianda hash — all the week's leftover mofongo, boiled roots and beans mashed and crisped in a pan with an egg", estCalories: 500, estProtein: 16 },
  ],
  shopping: [
    { item: "Green plantains", qty: "10", cost: 4.0, note: "the body of every mofongo" },
    { item: "Yuca, yautía & ñame (mixed viandas)", qty: "3 lb", cost: 3.5 },
    { item: "Chicharrón (pork rind)", qty: "4 oz", cost: 2.0, note: "the precious thread — pounded into the mofongo" },
    { item: "Bacalao (salt cod)", qty: "8 oz", cost: 3.5, spansWeeks: true, note: "soaked, then sautéed with onions" },
    { item: "Chicken pieces (for the relleno stew)", qty: "1 lb", cost: 2.5 },
    { item: "Garlic", qty: "2 heads", cost: 1.5, spansWeeks: true, note: "crushed into every pilón" },
    { item: "Dried pink beans", qty: "from last week's bag", cost: 0.5, spansWeeks: true },
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Onions", qty: "for the bacalao and the broths", cost: 1.5, spansWeeks: true },
    { item: "Sofrito", qty: "fresh small batch", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "from last week's dozen", cost: 0.5 },
    { item: "Oil, sazón, adobo", qty: "pantry seasoning", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 17,
};

export const prWeek4Carne: WeekPlan = {
  slug: "pr-week-4-carne",
  number: 4,
  cuisine: "puerto-rican",
  theme: "Pollo & Cerdo",
  title: "Week 4 — Pollo & Cerdo",
  description:
    "The week of the roast and the fry — where a cheap pork shoulder, marinated overnight and roasted low until it falls apart, anchors a whole week, and chicken and chops crisp up alongside. Pernil, chuletas, carne frita: the meat the island saves for, stretched the frugal way across seven nights with rice and beans to make every plate whole.",
  context: `Meat on the Puerto Rican table is celebration and thrift at once — bought cheap, marinated hard, and stretched far. The crown is **pernil**: a cheap, fatty **pork shoulder** rubbed deep with a paste of garlic, oregano, salt, and oil, left overnight, then roasted slow for hours until the meat shreds and the skin (**cuerito**) crackles. One shoulder feeds a family for days and seasons the rice with its drippings. The rest of the week leans on the fryer and the oven: **chuletas fritas** — pork chops marinated in adobo and fried crisp; **pollo al horno** — chicken baked with sofrito and potatoes; **carne frita** — cubes of pork shoulder browned hard in their own fat. The frugal logic is everywhere: marinate cheap cuts to make them taste rich, render their own fat to fry the next dish, and let the meat flavour a big pot of rice rather than carry the meal alone.`,
  dishes: [
    "Pernil — garlic-and-oregano-rubbed pork shoulder roasted slow until it shreds",
    "Chuletas fritas — adobo-marinated pork chops fried crisp",
    "Pollo al horno — chicken baked with sofrito, garlic and potatoes",
    "Carne frita — cubes of pork shoulder browned hard in their own fat",
  ],
  proteinNote:
    "A single cheap pork shoulder is the week's spine, roasted as pernil and then cubed for carne frita, stretched across several nights. Bone-in chicken covers two more. The daily habichuelas keep the protein floor up on the nights the meat is thinnest.",
  bonus: false,
  preciousThread: "One cheap, fatty pork shoulder — the pernil that anchors and seasons the whole week.",
  engine: [
    "Sofrito/recaíto — the green base for the chicken, the rice and the gravies (the constant base)",
    "White rice — a big pot, reheated all week and golded with the pernil drippings",
    "Habichuelas — the daily pot of stewed pink beans alongside every plate of meat",
    "Adobo, sazón & garlic-oregano rub — the marinade that makes cheap cuts taste rich",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "pernil — slow-roasted pork shoulder with crackling skin, rice and beans", estCalories: 620, estProtein: 30 },
    { day: "Mon", dinner: "chuletas fritas — adobo pork chops fried crisp, rice and beans on the side", estCalories: 580, estProtein: 27 },
    { day: "Tue", dinner: "pollo al horno — chicken baked with sofrito and potatoes", estCalories: 560, estProtein: 26 },
    { day: "Wed", dinner: "carne frita — the leftover pernil cubed and browned hard, over rice with beans", estCalories: 580, estProtein: 25 },
    { day: "Thu", dinner: "pulled pernil over rice with the pan drippings and a fried egg", estCalories: 560, estProtein: 24 },
    { day: "Fri", dinner: "pollo al horno again, the last pieces picked over rice with beans", estCalories: 540, estProtein: 23 },
    { day: "Sat", dinner: "zero-waste: arroz con pernil — every scrap of leftover roast pork and chicken fried into the week's rice with beans and an egg", estCalories: 540, estProtein: 22 },
  ],
  shopping: [
    { item: "Pork shoulder (pernil)", qty: "3 lb cheap bone-in", cost: 6.0, note: "the precious thread — anchors the whole week" },
    { item: "Pork chops (chuletas)", qty: "1 lb thin-cut", cost: 3.0 },
    { item: "Bone-in chicken pieces", qty: "1.5 lb", cost: 3.0 },
    { item: "Potatoes", qty: "2 lb", cost: 1.5 },
    { item: "Garlic", qty: "2 heads", cost: 1.5, spansWeeks: true, note: "the base of the pernil rub" },
    { item: "Dried pink beans", qty: "from last week's bag", cost: 0.5, spansWeeks: true },
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Sofrito", qty: "fresh small batch", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "from last week's dozen", cost: 0.5 },
    { item: "Onions", qty: "for the bakes and gravies", cost: 1.5, spansWeeks: true },
    { item: "Adobo, sazón, oregano, oil", qty: "pantry seasoning", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const prWeek5Pescado: WeekPlan = {
  slug: "pr-week-5-pescado",
  number: 5,
  cuisine: "puerto-rican",
  theme: "Pescado & Costa",
  title: "Week 5 — Pescado & Costa",
  description:
    "The week the island turns toward the sea — but the frugal sea, the one preserved in salt and stretched into stews. Salt cod stewed in tomato and sofrito, fish pickled in onions and vinegar to keep a week without a fridge, crab folded into a garlicky sauce. Cheap, briny, lasting: the coast's answer to making a little fish feed many.",
  context: `Surrounded by water, Puerto Rico still built its everyday fish cookery around **preservation** — because fresh fish spoils fast in the heat, and **bacalao** (salt cod) keeps forever and costs little. **Bacalao guisado** stews the soaked, flaked cod in a sofrito-tomato sauce with potatoes until it tastes of the sea without the price of fresh fish; **serenata de bacalao** serves it cold and raw-dressed over boiled viandas with onion, tomato, and avocado, a hot-weather dinner that needs no stove. **Escabeche de pescado** is pure thrift-by-chemistry — fried fish steeped in a vinegar-and-onion brine that lets it keep, unrefrigerated, for days, a technique the island shares with the wider Caribbean and Spain. And when the catch is fresh and cheap, **salmorejo de jueyes** stews land crab in a garlicky tomato-sofrito sauce, the meat picked and stretched with the gravy. The lesson is the old one: salt, vinegar, and a good sauce turn a little seafood into a week of dinners.`,
  dishes: [
    "Bacalao guisado — salt cod stewed in sofrito, tomato and potato",
    "Escabeche de pescado — fried fish pickled in vinegar and onions",
    "Salmorejo de jueyes — land crab in a garlicky tomato-sofrito sauce",
    "Serenata de bacalao — cold salt cod over boiled viandas with onion and avocado",
  ],
  proteinNote:
    "Salt cod is the cheap, lasting protein backbone, stretched by potatoes and sauce across several nights; a little fresh or canned fish and some crab fill the rest. The daily habichuelas hold the floor, and the rice-and-beans pairing keeps every plate complete.",
  bonus: false,
  preciousThread: "A pound of bacalao (salt cod) — soaked once, it seasons fish dinners all week.",
  engine: [
    "Sofrito/recaíto — the green base for every guisado and salmorejo (the constant base)",
    "White rice — a big pot, reheated all week under the stewed fish",
    "Habichuelas — the daily pot of stewed pink beans alongside the fish plates",
    "Adobo, sazón & achiote oil — the seasoning that colours and salts the stews",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "bacalao guisado — salt cod stewed with sofrito, tomato and potatoes, over rice", estCalories: 560, estProtein: 24 },
    { day: "Mon", dinner: "escabeche de pescado — fried fish steeped in vinegar and onions, rice and beans on the side", estCalories: 540, estProtein: 22 },
    { day: "Tue", dinner: "salmorejo de jueyes — land crab in garlicky tomato-sofrito sauce, over rice", estCalories: 520, estProtein: 21 },
    { day: "Wed", dinner: "serenata de bacalao — cold salt cod over boiled viandas with onion, tomato and avocado", estCalories: 500, estProtein: 20 },
    { day: "Thu", dinner: "bacalao guisado again, the sauce reduced, with extra potato over rice", estCalories: 540, estProtein: 22 },
    { day: "Fri", dinner: "the last of the escabeche flaked over rice with beans and a fried egg", estCalories: 520, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: a fish asopao — every leftover stew, the escabeche brine and bacalao scraps simmered with rice into a soupy final pot", estCalories: 500, estProtein: 18 },
  ],
  shopping: [
    { item: "Bacalao (salt cod)", qty: "1 lb", cost: 5.0, note: "the precious thread — soaked once, lasts the week" },
    { item: "Frozen white fish (for escabeche)", qty: "1 lb", cost: 4.0 },
    { item: "Crab meat (canned or frozen)", qty: "8 oz", cost: 3.0 },
    { item: "Potatoes", qty: "2 lb", cost: 1.5 },
    { item: "White vinegar", qty: "1 bottle", cost: 1.0, spansWeeks: true, note: "the escabeche brine" },
    { item: "Onions", qty: "3 lb", cost: 2.5, spansWeeks: true, note: "for the escabeche and serenata" },
    { item: "Avocado", qty: "1", cost: 1.5 },
    { item: "Tomato sauce", qty: "from the pantry cans", cost: 0.5, spansWeeks: true },
    { item: "Yuca/yautía for the serenata", qty: "1.5 lb", cost: 2.0 },
    { item: "Dried pink beans", qty: "from last week's bag", cost: 0.5, spansWeeks: true },
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Sofrito, sazón, achiote oil", qty: "fresh batch + pantry", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const prWeek6Asopao: WeekPlan = {
  slug: "pr-week-6-asopao",
  number: 6,
  cuisine: "puerto-rican",
  theme: "Sopas & Asopao",
  title: "Week 6 — Sopas & Asopao",
  description:
    "The week of the one-pot soup — where rice, broth, and whatever is on hand simmer into something between a soup and a stew, generous and warming and almost free. Soupy asopao thick with rice and chicken, a sancocho heavy with roots, a fisherman's sopón: the most frugal dinner of all, where a little protein flavours a whole pot of liquid and grain.",
  context: `The **soup pot** is where the criollo kitchen stretches the least food the furthest. **Asopao** — from *sopa*, soup — is the island's beloved soupy rice, somewhere between a paella and a gumbo: rice simmered loose in a sofrito-and-achiote broth until it is thick and porridgey, carrying a little chicken (**asopao de pollo**) or some shrimp through a whole pot of grain and liquid. **Sancocho** is the great Caribbean root stew, a heavy soup of every vianda in the house — plantain, yuca, yautía, ñame, calabaza — with a bone or a little meat for depth, the dinner you make when the cupboard is mixed and the crowd is large. **Sopón de pescado** does the same with fish heads and bones, simmering every scrap into a brothy rice soup. The whole point of the week is generosity from almost nothing: a bone, a handful of rice, the bin of roots, and a spoon of sofrito become a pot that feeds the table twice.`,
  dishes: [
    "Asopao de pollo — soupy rice simmered with chicken in achiote broth",
    "Sancocho — heavy root-and-vianda stew with a little meat for depth",
    "Sopón de pescado — brothy fish-and-rice soup from the bones",
    "Asopao de gandules — soupy rice with pigeon peas, meatless and rich",
  ],
  proteinNote:
    "A little chicken, fish, or a soup bone flavours each pot; the daily habichuelas and the gandules in the meatless asopao carry the protein floor. The rice swells in the broth, so a small amount of meat reads as a full, hearty dinner.",
  bonus: false,
  preciousThread: "A couple of cheap soup bones (chicken backs or a smoked ham bone) for the broth's depth.",
  engine: [
    "Sofrito/recaíto — the green base that flavours every broth (the constant base)",
    "White rice — a big pot, but here loosened into the soup itself as much as served beside it",
    "Habichuelas — the daily pot of stewed pink beans, and the gandules for the meatless asopao",
    "Adobo, sazón & achiote oil — the seasoning that golds and salts every pot",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "asopao de pollo — soupy achiote rice simmered thick with chicken and gandules", estCalories: 560, estProtein: 24 },
    { day: "Mon", dinner: "sancocho — a heavy root stew of plantain, yuca and calabaza with a soup bone, rice on the side", estCalories: 580, estProtein: 22 },
    { day: "Tue", dinner: "sopón de pescado — brothy fish-and-rice soup from the bones and a little white fish", estCalories: 520, estProtein: 21 },
    { day: "Wed", dinner: "asopao de gandules — meatless soupy rice rich with pigeon peas and sofrito", estCalories: 540, estProtein: 19 },
    { day: "Thu", dinner: "sancocho again, thicker, the roots melting into the broth over rice", estCalories: 560, estProtein: 20 },
    { day: "Fri", dinner: "asopao de pollo, second round, the last chicken picked into the loose rice", estCalories: 540, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: one big pot — every leftover soup, the roots and the rice pooled and simmered together into a final hearty sancocho", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "Soup bones (chicken backs / ham bone)", qty: "1.5 lb", cost: 2.5, note: "the precious thread — depth for every broth" },
    { item: "Chicken pieces", qty: "1 lb", cost: 2.5 },
    { item: "Frozen white fish (for the sopón)", qty: "8 oz", cost: 2.5 },
    { item: "Mixed viandas (plantain, yuca, yautía, ñame)", qty: "3 lb", cost: 3.5, note: "the body of the sancocho" },
    { item: "Calabaza", qty: "1 wedge", cost: 1.5 },
    { item: "Corn (mazorca, optional)", qty: "2 ears", cost: 1.0 },
    { item: "Dried gandules", qty: "from week one's bag", cost: 0.5, spansWeeks: true },
    { item: "Dried pink beans", qty: "from last week's bag", cost: 0.5, spansWeeks: true },
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Sofrito", qty: "fresh small batch", cost: 2.0, spansWeeks: true },
    { item: "Onions & cilantro", qty: "for the broths", cost: 1.5, spansWeeks: true },
    { item: "Sazón, achiote oil, oregano, bay leaf", qty: "pantry seasoning", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 16,
};

export const prWeek7Fiesta: WeekPlan = {
  slug: "pr-week-7-fiesta",
  number: 7,
  cuisine: "puerto-rican",
  theme: "Fiesta & Frituras",
  title: "Week 7 — Fiesta & Frituras",
  description:
    "The week the kitchen turns festive — the fritters from the beach kiosks and the baked dishes of the holiday table, all built from the cheap scraps of the weeks before. Alcapurrias and bacalaítos crisp in the oil, pasteles wrapped and boiled, a pastelón layered like a sweet plantain lasagna. Frugal food dressed up for a party: the island's gift for turning almost nothing into a feast.",
  context: `The Puerto Rican party is a **frituras** party — the **kioskos** of Piñones and Luquillo fry up the island's beloved fritters from the humblest scraps. **Alcapurrias** wrap a dough of grated green banana and yautía around a little seasoned meat and deep-fry it; **bacalaítos** are flat, lacy salt-cod fritters, mostly batter and brine; **tostones** are twice-fried green plantain, the cheapest crunch there is. The holiday table brings the labour of love: **pasteles**, masa of grated root and plantain wrapped in banana leaf around a pinch of pork and boiled — the island's tamal, made in big family batches for Christmas; and **pastelón**, the sweet-ripe-plantain "lasagna" layered with picadillo and cheese, baked until set. Every one of these is a frugal trick dressed as a celebration: a little meat hidden in a lot of cheap starch, fried or baked or wrapped into something that tastes like a fiesta. It is the perfect close to the arc — the week the leftovers of seven weeks become a party.`,
  dishes: [
    "Alcapurrias — green-banana-and-yautía fritters stuffed with seasoned meat",
    "Bacalaítos — lacy salt-cod fritters",
    "Pasteles — root-and-plantain masa wrapped in banana leaf around a little pork",
    "Pastelón — sweet plantain 'lasagna' layered with picadillo and cheese",
    "Tostones — twice-fried green plantains",
  ],
  proteinNote:
    "A small amount of seasoned ground or stewed meat (picadillo) is hidden inside the alcapurrias, pasteles, and pastelón, going a long way; salt cod carries the bacalaítos. The daily habichuelas keep the floor up, and a fried egg crowns the leaner plates.",
  bonus: false,
  preciousThread: "A little ground beef for the picadillo that fills the fritters, pasteles, and pastelón.",
  engine: [
    "Sofrito/recaíto — the green base for the picadillo and every filling (the constant base)",
    "White rice — a big pot, reheated all week as the side to the frituras",
    "Habichuelas — the daily pot of stewed pink beans alongside the festive plates",
    "Adobo, sazón & achiote — the seasoning for the masa, the picadillo and the rice",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "alcapurrias — green-banana fritters stuffed with picadillo, rice and beans on the side", estCalories: 620, estProtein: 22 },
    { day: "Mon", dinner: "pastelón — sweet plantain layered with picadillo and cheese, baked, with beans", estCalories: 600, estProtein: 23 },
    { day: "Tue", dinner: "bacalaítos — lacy salt-cod fritters with tostones and rice", estCalories: 560, estProtein: 19 },
    { day: "Wed", dinner: "pasteles — root-and-plantain masa boiled around a little pork, with rice", estCalories: 580, estProtein: 21 },
    { day: "Thu", dinner: "pastelón again, the last of it, with a fried egg and beans", estCalories: 560, estProtein: 20 },
    { day: "Fri", dinner: "tostones piled high with the leftover picadillo and stewed beans on top", estCalories: 540, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: a fritura fry-up — all the week's leftover masa, picadillo and plantain shaped into fresh fritters and crisped, beans on the side", estCalories: 540, estProtein: 18 },
  ],
  shopping: [
    { item: "Green bananas & plantains (green and ripe)", qty: "12", cost: 5.0, note: "the masa and the tostones" },
    { item: "Yautía (for the masa)", qty: "2 lb", cost: 2.5 },
    { item: "Ground beef (picadillo)", qty: "1 lb", cost: 4.0, note: "the precious thread — fills every fritter and the pastelón" },
    { item: "Bacalao (salt cod)", qty: "from last week's stock", cost: 0.5, spansWeeks: true },
    { item: "Cheese (for the pastelón)", qty: "6 oz", cost: 2.5 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Banana leaves (for pasteles)", qty: "1 pack", cost: 2.0 },
    { item: "Olives & capers (alcaparrado)", qty: "from week one's jar", cost: 0.5, spansWeeks: true },
    { item: "Frying oil", qty: "1 bottle", cost: 3.0, spansWeeks: true },
    { item: "Dried pink beans", qty: "from last week's bag", cost: 0.5, spansWeeks: true },
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Sofrito, sazón, achiote, adobo", qty: "fresh batch + pantry", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const puertoRicanWeeks: WeekPlan[] = [
  prWeek1Arroz,
  prWeek2Habichuelas,
  prWeek3Mofongo,
  prWeek4Carne,
  prWeek5Pescado,
  prWeek6Asopao,
  prWeek7Fiesta,
];
