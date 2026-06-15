import type { WeekPlan } from "../types";

// Challenge — Polish home-cooking cucina povera ("Chleb, Ziemniaki, Kapusta").
//
// This is NOT the Italian one-ingredient-per-week arc. The Polish table has a
// constant foundation present in EVERY week — rye bread (chleb) with smalec to
// spread, sacks of potatoes (ziemniaki), cabbage both fresh and soured (kapusta
// / kiszona kapusta), the browned-onion-and-lard base, sour cream (śmietana),
// and the pickle crock (ogórki kiszone). That foundation is shown once in each
// week's engine and is NEVER itself a theme. Each of the seven weeks is a
// distinct, real dinner category eaten that night — dumplings, cabbage dinners,
// soups, potato dinners, the little meat, the grain-and-legume pot, and the
// festival/fried table — all sitting on the same frugal base. Saturday is always
// a zero-waste dinner from the week's leftovers; Sunday is the batch cook day.

// The constant foundation, worded fresh per week below but always the same four.

export const plWeek1Pierogi: WeekPlan = {
  slug: "pl-week-1-pierogi",
  number: 1,
  cuisine: "polish",
  theme: "Pierogi",
  title: "Week 1 — Pierogi",
  description:
    "The dumpling that built a nation's frugal table. A simple flour-and-water dough, a sack of potatoes, a tub of twaróg, and a crock of sauerkraut become a week of pierogi — pinched, boiled, and finished in browned butter and onion. Cheap to the bone and beloved beyond reason.",
  context: `Pierogi are the great Polish act of thrift dressed as a treat. A handful of flour and a little fat make a dough that can be stretched around almost anything the larder holds — boiled potato and curd cheese for ruskie, a pan of sweated sauerkraut and dried mushrooms, the picked-over scraps of the Sunday meat. The work is the dough and the pinching, done once on a Sunday afternoon, and the reward carries the week. Boiled in salted water and finished in a spoon of smalec or browned butter with onion fried gold, then crowned with a slick of śmietana, they ask for nothing else. When the dough runs out, the trimmings become łazanki or leniwe — nothing of the flour is wasted.`,
  dishes: [
    "Pierogi ruskie",
    "Pierogi z kapustą i grzybami",
    "Pierogi z mięsem",
    "Leniwe / łazanki",
  ],
  proteinNote:
    "Carried by twaróg (farmer cheese) and egg in the ruskie and leniwe, with a little meat in the z mięsem pierogi and the smalec underneath. Lean — lean on the engine.",
  bonus: false,
  preciousThread:
    "A tub of good twaróg and a handful of dried borowiki (porcini) — pennies of curd and perfume that make a flour-and-potato dumpling taste like far more.",
  engine: [
    "Rye bread (chleb) — the daily loaf, and a crock of smalec ze skwarkami to spread (the constant base)",
    "Potatoes (ziemniaki) — a sack, boiled and riced for the ruskie filling and the leniwe dough",
    "Cabbage (kapusta) — a head of fresh and a crock of kiszona kapusta, squeezed and sweated with the dried mushrooms",
    "Onion/lard base + śmietana — a pan of onion fried in smalec to dress every plate, sour cream alongside; ogórki kiszone on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "pierogi ruskie, boiled and finished in browned butter and onion", estCalories: 600, estProtein: 20 },
    { day: "Mon", dinner: "pierogi z kapustą i grzybami with a spoon of śmietana", estCalories: 520, estProtein: 16 },
    { day: "Tue", dinner: "leniwe — lazy twaróg dumplings rolled in buttered breadcrumbs", estCalories: 540, estProtein: 18 },
    { day: "Wed", dinner: "pierogi z mięsem from the last of the Sunday meat, with onion", estCalories: 500, estProtein: 15 },
    { day: "Thu", dinner: "łazanki z kapustą — noodle squares tossed with sweated sauerkraut and skwarki", estCalories: 560, estProtein: 19 },
    { day: "Fri", dinner: "pierogi ruskie, meatless for Friday, with fried onion and śmietana", estCalories: 520, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: leftover pierogi fried crisp (odsmażane) with the last onion and a fried egg (uses the week's leftovers)", estCalories: 480, estProtein: 14 },
  ],
  shopping: [
    { item: "Flour", qty: "5 lb", cost: 2.5, spansWeeks: true },
    { item: "Potatoes", qty: "5 lb", cost: 3.0, note: "the base under every dinner" },
    { item: "Twaróg (farmer cheese)", qty: "~1.5 lb", cost: 4.5 },
    { item: "Eggs", qty: "1 dozen", cost: 4.0, spansWeeks: true },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Cabbage + sauerkraut", qty: "1 head + jar", cost: 3.0, spansWeeks: true },
    { item: "Dried mushrooms (borowiki)", qty: "1 oz", cost: 3.0, spansWeeks: true },
    { item: "Smalec / lard", qty: "1 tub", cost: 2.5, spansWeeks: true },
    { item: "Śmietana (sour cream)", qty: "1 tub", cost: 2.5 },
    { item: "Rye bread (chleb)", qty: "1 loaf", cost: 3.5 },
    { item: "Ground pork (for z mięsem)", qty: "½ lb", cost: 2.5 },
    { item: "Ogórki kiszone (pickles)", qty: "1 jar", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 17,
};

export const plWeek2Kapusta: WeekPlan = {
  slug: "pl-week-2-kapusta",
  number: 2,
  cuisine: "polish",
  theme: "Kapusta",
  title: "Week 2 — Kapusta",
  description:
    "Cabbage is the Polish winter made edible — fresh heads and the soured crock both. A week of bigos simmered for days, gołąbki rolled around a little rice and meat, sweet-sour kapusta zasmażana, and a sharp pot of kapuśniak. The cheapest vegetable in Poland, turned into the most comforting.",
  context: `No vegetable carries the Polish kitchen like kapusta. The cellar holds heads of fresh cabbage and the kitchen holds a stone crock of kiszona kapusta souring slowly — and between the two, a cook is never without dinner. Bigos, the hunter's stew, is the masterpiece: fresh and soured cabbage stewed for days with whatever meat scraps, sausage ends, and dried mushrooms the larder yields, deepening every time it is reheated. Gołąbki wrap a blanched leaf around a little rice and a little meat, stretching a half-pound across a whole pan. Kapusta zasmażana is browned with a flour roux into sweet-sour comfort, and kapuśniak turns the brine itself into a tart, warming soup. Nothing of the head is wasted — even the sour liquid is stock.`,
  dishes: [
    "Bigos (hunter's stew)",
    "Gołąbki (stuffed cabbage)",
    "Kapusta zasmażana",
    "Kapuśniak (cabbage soup)",
  ],
  proteinNote:
    "The bigos and gołąbki carry sausage and a little meat; kasza or rice in the rolls and a pot of beans in the bigos do the rest. A meatier week than the cabbage suggests.",
  bonus: false,
  preciousThread:
    "A short length of cheap kiełbasa — smoked sausage sliced thin into the bigos, the one taste of meat that perfumes the whole pot.",
  engine: [
    "Rye bread (chleb) with smalec — the daily loaf and the fat to spread (the constant base)",
    "Potatoes (ziemniaki) — boiled to serve under the bigos and alongside the gołąbki",
    "Cabbage (kapusta) — fresh heads to blanch and roll, and the crock of kiszona kapusta the whole week leans on",
    "Onion/lard base + śmietana — onion browned in smalec for the zasmażka, sour cream to finish; ogórki kiszone on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "bigos started low and slow, served over boiled potatoes", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "gołąbki — cabbage rolls in a light tomato sauce", estCalories: 520, estProtein: 20 },
    { day: "Tue", dinner: "kapusta zasmażana with boiled potatoes and a hunk of rye", estCalories: 500, estProtein: 14 },
    { day: "Wed", dinner: "bigos, day three, deeper and better, with bread", estCalories: 540, estProtein: 20 },
    { day: "Thu", dinner: "kapuśniak — sour cabbage soup with potato and sausage", estCalories: 480, estProtein: 17 },
    { day: "Fri", dinner: "gołąbki, meatless, stuffed with kasza and mushroom for Friday", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: the last of the bigos fried crisp with leftover potato and a fried egg (uses the week's leftovers)", estCalories: 480, estProtein: 16 },
  ],
  shopping: [
    { item: "Cabbage (fresh)", qty: "2 heads", cost: 3.0, note: "the base of the week" },
    { item: "Sauerkraut (kiszona kapusta)", qty: "large jar", cost: 3.0, spansWeeks: true },
    { item: "Potatoes", qty: "4 lb", cost: 2.5, note: "served under every dinner" },
    { item: "Kiełbasa (smoked sausage)", qty: "~½ lb", cost: 4.0 },
    { item: "Ground pork", qty: "½ lb", cost: 2.5 },
    { item: "Rice", qty: "1 cup", cost: 0.75, spansWeeks: true },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Dried mushrooms", qty: "½ oz", cost: 2.0, spansWeeks: true },
    { item: "Canned tomatoes", qty: "1 × 28 oz", cost: 2.0 },
    { item: "Smalec / lard", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Śmietana (sour cream)", qty: "1 tub", cost: 2.5 },
    { item: "Rye bread (chleb)", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const plWeek3Zupy: WeekPlan = {
  slug: "pl-week-3-zupy",
  number: 3,
  cuisine: "polish",
  theme: "Zupy",
  title: "Week 3 — Zupy",
  description:
    "Poland eats soup before everything, and the soup pot is where thrift turns to soul. Sour rye żurek with sausage and egg, the golden Sunday rosół, beetroot barszcz czerwony, and a thick pea grochówka — four cheap pots that each feed a week of dinners on a few scraps and a lot of patience.",
  context: `The Polish dinner traditionally opens with soup, and the zupy are where the cuisine wrings the most from the least. Żurek begins with nothing but soured rye flour and water — a fermented starter, zakwas, that ripens on the counter for free — and turns into a tangy, smoky pot with a little sausage, a potato, and a halved egg. Rosół, the long-simmered Sunday broth, draws a whole meal from a few bones and a fistful of root vegetables, and gives its noodles and its meat to later dinners. Barszcz czerwony coaxes a deep ruby soup from beets and a sour edge, and grochówka swells dried split peas with smoked bones into a stew thick enough to stand a spoon. Every pot stretches; nothing of the bone is left behind.`,
  dishes: [
    "Żurek (sour rye soup)",
    "Rosół (Sunday broth)",
    "Barszcz czerwony (beet soup)",
    "Grochówka (split pea soup)",
  ],
  proteinNote:
    "Carried by the soup bones and a little smoked sausage, the egg in the żurek, and the split peas in the grochówka. A pot of beans or a hard egg clears any gap.",
  bonus: false,
  preciousThread:
    "A few smoked pork bones (or a ham hock) — pennies at the counter that lend the whole week of soups a deep, meaty backbone.",
  engine: [
    "Rye bread (chleb) with smalec — torn into the soups and spread for the table (the constant base)",
    "Potatoes (ziemniaki) — diced into every pot and boiled alongside the barszcz",
    "Cabbage (kapusta) — a wedge of fresh and a scoop of kiszona thrown into the soups for body and sourness",
    "Onion/lard base + śmietana — onion and a little lard to start each pot, a swirl of sour cream to finish; ogórki kiszone on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "rosół — golden Sunday broth with fine noodles and the boiled root vegetables", estCalories: 600, estProtein: 24 },
    { day: "Mon", dinner: "żurek with sliced sausage, potato, and a halved boiled egg", estCalories: 520, estProtein: 18 },
    { day: "Tue", dinner: "grochówka — thick split-pea soup with smoked bones and rye", estCalories: 540, estProtein: 22 },
    { day: "Wed", dinner: "barszcz czerwony with a boiled potato and a spoon of śmietana", estCalories: 500, estProtein: 14 },
    { day: "Thu", dinner: "żurek, day two, deeper, over a boiled potato", estCalories: 520, estProtein: 18 },
    { day: "Fri", dinner: "barszcz czerwony, meatless, with little mushroom uszka dumplings", estCalories: 480, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: a pot of leftover rosół and grochówka combined with the last vegetables and noodles into one thick soup (uses the week's leftovers)", estCalories: 480, estProtein: 18 },
  ],
  shopping: [
    { item: "Smoked pork bones / ham hock", qty: "~1.5 lb", cost: 4.0 },
    { item: "Soup chicken / backs (rosół)", qty: "~2 lb", cost: 4.0 },
    { item: "Beets (barszcz)", qty: "~3 lb", cost: 3.0 },
    { item: "Dried split peas", qty: "1 lb", cost: 1.5 },
    { item: "Rye flour (żurek zakwas)", qty: "small bag", cost: 1.5, spansWeeks: true },
    { item: "Potatoes", qty: "4 lb", cost: 2.5, note: "diced into every pot" },
    { item: "Soup vegetables (carrot, celeriac, parsley root, leek)", qty: "bundle", cost: 3.0 },
    { item: "Kiełbasa (for żurek)", qty: "~¼ lb", cost: 2.0 },
    { item: "Onions", qty: "~2 lb", cost: 1.5, spansWeeks: true },
    { item: "Eggs", qty: "½ dozen", cost: 2.5, spansWeeks: true },
    { item: "Śmietana (sour cream)", qty: "1 tub", cost: 2.5 },
    { item: "Rye bread (chleb)", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const plWeek4Ziemniaki: WeekPlan = {
  slug: "pl-week-4-ziemniaki",
  number: 4,
  cuisine: "polish",
  theme: "Ziemniaki",
  title: "Week 4 — Ziemniaki",
  description:
    "The potato is the bedrock of the Polish plate, and for one week it is the whole dinner. Lacy placki ziemniaczane fried gold, kopytka dumplings cut from riced potato dough, ziemniaki okraszone glossed with browned skwarki, and a bubbling zapiekanka from the oven. The poorest root, made glorious.",
  context: `When Poland was hungry, there were always ziemniaki. The potato arrived late but conquered completely, and the country built a hundred frugal dinners on it. Grated raw and wrung dry, bound with egg and a little flour and fried in hot fat, it becomes placki ziemniaczane — lacy, crisp, eaten with śmietana or a dusting of sugar. Riced and worked into a soft dough, it is cut into kopytka, the little hoof-shaped dumplings that take browned butter or a meat gravy. At its barest it is simply ziemniaki okraszone — boiled potatoes glossed with skwarki, the crisp pork cracklings and their fat — which fed generations who had little else. Even the boiling water and the peelings find a use; the potato wastes nothing.`,
  dishes: [
    "Placki ziemniaczane",
    "Kopytka",
    "Ziemniaki okraszone",
    "Zapiekanka ziemniaczana",
  ],
  proteinNote:
    "Leanest week of the arc — carried by the egg in the placki and kopytka, the skwarki, a side of twaróg or a fried egg, and śmietana. Lean on the engine.",
  bonus: false,
  preciousThread:
    "A piece of słonina rendered into skwarki — crisp pork cracklings and their golden fat that turn plain boiled potatoes into a dinner worth craving.",
  engine: [
    "Rye bread (chleb) with smalec — the daily loaf and the spread (the constant base)",
    "Potatoes (ziemniaki) — sacks of them, the whole point of the week: boiled, riced into dough, grated, and fried",
    "Cabbage (kapusta) — a kiszona kapusta salad and fresh cabbage braised as the side to every potato dinner",
    "Onion/lard base + śmietana — onion browned in lard and a bowl of sour cream to finish the placki; ogórki kiszone on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "placki ziemniaczane fried gold, with śmietana and a sauerkraut salad", estCalories: 600, estProtein: 16 },
    { day: "Mon", dinner: "kopytka tossed in browned butter and breadcrumbs", estCalories: 520, estProtein: 14 },
    { day: "Tue", dinner: "ziemniaki okraszone — boiled potatoes glossed with skwarki, with kefir or zsiadłe mleko", estCalories: 540, estProtein: 18 },
    { day: "Wed", dinner: "zapiekanka ziemniaczana — sliced potato baked with onion and a little cheese", estCalories: 500, estProtein: 15 },
    { day: "Thu", dinner: "kopytka under a mushroom-and-onion gravy", estCalories: 560, estProtein: 16 },
    { day: "Fri", dinner: "placki ziemniaczane, meatless, with śmietana and a fried egg", estCalories: 520, estProtein: 18 },
    { day: "Sat", dinner: "zero-waste: leftover kopytka and potato fried crisp with onion and the last skwarki, topped with an egg (uses the week's leftovers)", estCalories: 480, estProtein: 15 },
  ],
  shopping: [
    { item: "Potatoes", qty: "8 lb", cost: 4.5, note: "the whole point of the week" },
    { item: "Słonina / fatback (skwarki)", qty: "~½ lb", cost: 2.0 },
    { item: "Eggs", qty: "1 dozen", cost: 4.0, spansWeeks: true },
    { item: "Flour", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Fresh mushrooms", qty: "~½ lb", cost: 2.5 },
    { item: "Cheese (for zapiekanka)", qty: "~½ lb", cost: 3.0 },
    { item: "Śmietana (sour cream)", qty: "1 tub", cost: 2.5 },
    { item: "Kefir / zsiadłe mleko", qty: "1 qt", cost: 2.0 },
    { item: "Cabbage + sauerkraut", qty: "1 head + jar", cost: 3.0, spansWeeks: true },
    { item: "Rye bread (chleb)", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 15,
};

export const plWeek5Mieso: WeekPlan = {
  slug: "pl-week-5-mieso",
  number: 5,
  cuisine: "polish",
  theme: "Mięso & Kotlety",
  title: "Week 5 — Mięso & Kotlety",
  description:
    "The little meat, stretched the Polish way. A pounded kotlet schabowy fried in breadcrumbs, a slow gulasz that turns cheap cut and onion into gravy, and klopsiki simmered in a thin tomato sauce. A modest amount of pork stretched across a week by breadcrumb, onion, and sauce.",
  context: `Meat in the Polish home was an event, not a given, and the cook's craft was making a little of it go far. A single thin slice of pork loin, pounded wide, breaded, and fried, becomes a kotlet schabowy that fills a plate and earns a Sunday. A cheap, tough cut and a heap of onions simmered long becomes gulasz — more onion and gravy than meat, spooned over kasza or potatoes so the sauce does the feeding. Ground pork bound with soaked bread and onion stretches furthest of all into klopsiki, little meatballs swimming in a thin tomato or dill sauce. The breadcrumb, the onion, the soaked roll, and the gravy are the thrift here; the meat is the flavor, not the bulk.`,
  dishes: [
    "Kotlet schabowy",
    "Gulasz",
    "Klopsiki w sosie",
    "Mielony (Polish meat patty)",
  ],
  proteinNote:
    "The meat week — pork loin, stewing cut, and ground pork, all stretched with bread and onion. The protein floor is the easiest of the arc to clear; the discipline this week is the budget.",
  bonus: false,
  preciousThread:
    "A single piece of pork loin (schab) — pounded thin and breaded, one cheap cut becomes the centerpiece the whole week is built around.",
  engine: [
    "Rye bread (chleb) with smalec — the daily loaf, its stale crumb soaked into the klopsiki (the constant base)",
    "Potatoes (ziemniaki) — boiled and mashed as the bed under the kotlet and the gulasz",
    "Cabbage (kapusta) — surówka z kapusty, a fresh cabbage slaw, and braised kapusta as the side to every meat",
    "Onion/lard base + śmietana — onions browned deep into the gulasz, lard for frying, a spoon of sour cream to loosen the sauce; ogórki kiszone on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "kotlet schabowy with mashed potatoes and a cabbage surówka", estCalories: 600, estProtein: 28 },
    { day: "Mon", dinner: "gulasz over kasza, more onion and gravy than meat", estCalories: 520, estProtein: 22 },
    { day: "Tue", dinner: "klopsiki in a thin dill sauce over potatoes", estCalories: 540, estProtein: 22 },
    { day: "Wed", dinner: "mielony — pan-fried meat patty with potatoes and braised cabbage", estCalories: 500, estProtein: 20 },
    { day: "Thu", dinner: "gulasz, day two, deeper, over boiled potatoes", estCalories: 520, estProtein: 20 },
    { day: "Fri", dinner: "ziemniaki with a fried egg and surówka, meatless for Friday", estCalories: 480, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: leftover kotlet and meat scraps chopped into the last gulasz gravy, over fried potatoes (uses the week's leftovers)", estCalories: 520, estProtein: 22 },
  ],
  shopping: [
    { item: "Pork loin (schab)", qty: "~1 lb", cost: 5.0 },
    { item: "Stewing pork/beef (gulasz)", qty: "~1 lb", cost: 5.0 },
    { item: "Ground pork (klopsiki/mielony)", qty: "~¾ lb", cost: 3.5 },
    { item: "Potatoes", qty: "5 lb", cost: 3.0, note: "mashed and boiled under the meat" },
    { item: "Onions", qty: "~4 lb", cost: 3.0, spansWeeks: true },
    { item: "Breadcrumbs + eggs (breading)", qty: "—", cost: 2.0, spansWeeks: true },
    { item: "Kasza (buckwheat)", qty: "1 lb", cost: 2.0, spansWeeks: true },
    { item: "Canned tomatoes / paste", qty: "1 can", cost: 1.5 },
    { item: "Cabbage (surówka)", qty: "1 head", cost: 1.5, spansWeeks: true },
    { item: "Smalec / lard", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Śmietana (sour cream)", qty: "1 tub", cost: 2.5 },
    { item: "Rye bread (chleb)", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const plWeek6Kasza: WeekPlan = {
  slug: "pl-week-6-kasza",
  number: 6,
  cuisine: "polish",
  theme: "Kasza & Groch",
  title: "Week 6 — Kasza & Groch",
  description:
    "Before the potato, Poland ran on grain and legume — and they still anchor the thriftiest dinners. Nutty buckwheat kasza under a mushroom gulasz, kasza tossed with skwarki, and fasolka po bretońsku, the great Polish bean pot stewed with sausage and tomato. Pennies of grain and pulse, made deeply savory.",
  context: `Long before the potato, the Polish belly was filled by kasza — buckwheat groats, toasted dark and savory — and by groch, the dried peas and beans of the cellar. They remain the cheapest, most filling dinners in the repertoire. Kasza gryczana, steamed loose and fluffy, drinks up a mushroom or onion gulasz and tastes of the forest; tossed simply with skwarki and fried onion, it is supper for a few cents. Fasolka po bretońsku — the "beans Breton-style" that are entirely Polish — stews white beans with a little smoked sausage, onion, and tomato into a thick, sweet-savory pot that feeds a crowd and improves on reheating. Buckwheat is a complete protein, the beans back it up, and a handful of grain stretches into days.`,
  dishes: [
    "Kasza gryczana z gulaszem grzybowym",
    "Kasza ze skwarkami",
    "Fasolka po bretońsku",
    "Krupnik (barley soup)",
  ],
  proteinNote:
    "Solid — buckwheat is a complete protein and the white beans back it up, with a little sausage in the fasolka and an egg or twaróg alongside. A cheap, protein-honest week.",
  bonus: false,
  preciousThread:
    "A handful of dried mushrooms and a short length of kiełbasa — a little smoke and forest perfume that give the grain and bean pots a meaty soul.",
  engine: [
    "Rye bread (chleb) with smalec — the daily loaf, torn into the krupnik (the constant base)",
    "Potatoes (ziemniaki) — diced into the krupnik and boiled alongside the kasza",
    "Cabbage (kapusta) — a kiszona kapusta salad and braised fresh cabbage as the side to the grain dinners",
    "Onion/lard base + śmietana — onion fried in lard to start the gulasz and the beans, sour cream to finish the soup; ogórki kiszone on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "kasza gryczana under a mushroom gulasz, with braised cabbage", estCalories: 600, estProtein: 20 },
    { day: "Mon", dinner: "fasolka po bretońsku with rye bread", estCalories: 520, estProtein: 22 },
    { day: "Tue", dinner: "kasza ze skwarkami — buckwheat with cracklings, onion, and a glass of kefir", estCalories: 540, estProtein: 18 },
    { day: "Wed", dinner: "krupnik — barley soup with root vegetables and potato", estCalories: 500, estProtein: 16 },
    { day: "Thu", dinner: "fasolka po bretońsku, day two, deeper, over bread", estCalories: 560, estProtein: 22 },
    { day: "Fri", dinner: "kasza gryczana with mushrooms and a fried egg, meatless for Friday", estCalories: 520, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: leftover kasza and beans fried together with onion and skwarki into one pan (uses the week's leftovers)", estCalories: 480, estProtein: 19 },
  ],
  shopping: [
    { item: "Buckwheat (kasza gryczana)", qty: "2 lb", cost: 4.0 },
    { item: "Pearl barley (krupnik)", qty: "1 lb", cost: 1.5 },
    { item: "Dried white beans", qty: "1 lb", cost: 2.0 },
    { item: "Dried mushrooms", qty: "1 oz", cost: 3.0, spansWeeks: true },
    { item: "Kiełbasa (fasolka)", qty: "~¼ lb", cost: 2.0 },
    { item: "Słonina / fatback (skwarki)", qty: "~¼ lb", cost: 1.5 },
    { item: "Potatoes", qty: "3 lb", cost: 2.0, note: "diced into the soups" },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Canned tomatoes / paste", qty: "1 can", cost: 1.5 },
    { item: "Soup vegetables (carrot, celeriac, parsley root)", qty: "bundle", cost: 2.5 },
    { item: "Śmietana (sour cream)", qty: "1 tub", cost: 2.5 },
    { item: "Rye bread (chleb)", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 16,
};

export const plWeek7Swieto: WeekPlan = {
  slug: "pl-week-7-swieto",
  number: 7,
  cuisine: "polish",
  theme: "Święto & Smażone",
  title: "Week 7 — Święto & Smażone",
  description:
    "The festival week — the fried, the filled, and the feast the thrift of the arc pays for. Crisp krokiety stuffed with the last of everything, naleśniki rolled around cheese or jam, jajka w sosie chrzanowym, and a holiday table to close the cycle. Six weeks of saving, redeemed in one celebration.",
  context: `Polish festivity runs on the frying pan and the filled pancake — and on a calendar of name-days, Sundays, and the great feasts of Wigilia and Easter that the frugal weeks save toward. Krokiety are the genius of the form: a thin naleśnik pancake wrapped around the last of the week's bigos, mushrooms, or meat, then breaded and fried gold — a way of turning every leftover into a crisp little parcel of plenty. Naleśniki themselves roll around sweet twaróg or a smear of jam for a supper that feels like a treat. Jajka w sosie chrzanowym — hard eggs in a sharp horseradish-cream sauce — is the Easter table in a bowl. This is the week where the cuisine, having wasted nothing for six weeks, finally spends — and proves that constraint was the recipe for the celebration all along.`,
  dishes: [
    "Krokiety",
    "Naleśniki (sweet & savory)",
    "Jajka w sosie chrzanowym",
    "Faszerowane / the holiday plate",
  ],
  proteinNote:
    "High and easy — eggs in the jajka w sosie and the pancake batter, twaróg in the naleśniki, and the meat-and-mushroom fillings of the krokiety. The richest-feeling week on little money.",
  bonus: false,
  preciousThread:
    "A fresh root of chrzan (horseradish) and a tub of twaróg — a few cents of sharp and sweet that turn boiled eggs and thin pancakes into a feast.",
  engine: [
    "Rye bread (chleb) with smalec — the daily loaf and the festive spread (the constant base)",
    "Potatoes (ziemniaki) — boiled and dressed as the side to the holiday plate",
    "Cabbage (kapusta) — the last of the kiszona stuffed into krokiety, fresh cabbage as a bright surówka",
    "Onion/lard base + śmietana — onion browned into the krokiety filling, sour cream and a little flour for the horseradish sauce; ogórki kiszone on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "naleśniki — a stack made fresh, rolled around sweet twaróg, and the batter saved for krokiety", estCalories: 600, estProtein: 20 },
    { day: "Mon", dinner: "krokiety stuffed with cabbage and mushroom, breaded and fried gold, with barszcz", estCalories: 540, estProtein: 18 },
    { day: "Tue", dinner: "jajka w sosie chrzanowym — hard eggs in horseradish cream over potatoes", estCalories: 500, estProtein: 20 },
    { day: "Wed", dinner: "krokiety z mięsem from the week's meat scraps, with a beet salad", estCalories: 540, estProtein: 19 },
    { day: "Thu", dinner: "naleśniki, savory, rolled around twaróg and fried with onion", estCalories: 520, estProtein: 20 },
    { day: "Fri", dinner: "naleśniki with jam and śmietana, meatless for Friday", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: the holiday plate — leftover krokiety, eggs in horseradish, potatoes, and pickles all set out together (uses the week's leftovers)", estCalories: 540, estProtein: 20 },
  ],
  shopping: [
    { item: "Flour (naleśniki/krokiety)", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Eggs", qty: "1.5 dozen", cost: 6.0, spansWeeks: true },
    { item: "Twaróg (farmer cheese)", qty: "~1 lb", cost: 3.5 },
    { item: "Milk", qty: "1 qt", cost: 1.5, spansWeeks: true },
    { item: "Horseradish (chrzan)", qty: "1 root / jar", cost: 2.0 },
    { item: "Potatoes", qty: "3 lb", cost: 2.0, note: "the holiday side" },
    { item: "Beets (salad)", qty: "~1.5 lb", cost: 1.5 },
    { item: "Onions", qty: "~2 lb", cost: 1.5, spansWeeks: true },
    { item: "Jam (for naleśniki)", qty: "1 jar", cost: 2.5, spansWeeks: true },
    { item: "Breadcrumbs", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Śmietana (sour cream)", qty: "1 tub", cost: 2.5 },
    { item: "Rye bread (chleb)", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 17,
};

export const polishWeeks: WeekPlan[] = [
  plWeek1Pierogi,
  plWeek2Kapusta,
  plWeek3Zupy,
  plWeek4Ziemniaki,
  plWeek5Mieso,
  plWeek6Kasza,
  plWeek7Swieto,
];
