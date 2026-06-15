import type { WeekPlan } from "../types";

// Challenge — East Africa (Swahili-coast / Kenyan-Tanzanian home cooking): the
// two poles of bara (inland: ugali, sukuma, nyama, githeri) and pwani (the
// Swahili coast: coconut, tamarind, the Indian-Ocean spice trade). The full
// seven-week arc, each week built out into an executable WeekPlan (engine +
// 7 days + costed shopping list). cuisine is "east-african"; the engine is
// cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// lets users compose variations on the same recipe pool.
//
// NOT Ethiopian: no injera, no berbere — that is a separate challenge. This is
// the maize-and-coconut kitchen of Kenya and Tanzania.
//
// RULE #6 (constant foundation): the East African foundation — maize meal
// (ugali) + sukuma wiki (greens) + a tomato-onion base + coconut (nazi) +
// pilau masala, with rice (wali) as the alt grain — is NEVER itself a theme.
// It lives in every week's `engine` as the constant beneath seven distinct,
// real dinner categories.

export const eaWeek1Ugali: WeekPlan = {
  slug: "ea-week-1-ugali",
  number: 1,
  cuisine: "east-african",
  theme: "Ugali & Sukuma",
  title: "Week 1 — Ugali & Sukuma",
  description:
    "Begin where every Kenyan and Tanzanian table begins: a steaming dome of ugali, the maize-meal staple you tear and pinch by hand, with a heap of sukuma wiki — collards fried down with onion and tomato. Add a little nyama or a coconut-creamy kuku wa kupaka and you have the everyday dinner that the rest of the arc is built on.",
  context:
    `Ugali na sukuma wiki is the most-eaten dinner in the region, and its very name is a thesis on thrift: sukuma wiki means "push the week" in Swahili — the cheap, fast-growing greens that stretch the food budget to the next payday. Ugali itself is just maize flour stirred stiff into a pale, firm cake, eaten with the right hand, pinched into a scoop to carry the relish. Maize is a New World latecomer here — Portuguese ships brought it across the Indian Ocean in the 1500s, and it slowly displaced the older millet and sorghum porridges — but it has become the absolute center of the bara (inland) table. Nyama (a little stewed beef or goat) or kuku wa kupaka (chicken grilled and bathed in coconut sauce) makes the protein. The maize, the greens, the tomato-onion base and the coconut are the constant foundation; this opening week simply eats it plain and true.`,
  dishes: ["Ugali", "Sukuma wiki", "Nyama na ugali", "Kuku wa kupaka"],
  proteinNote:
    "A little stewed beef or goat threaded across several nights, a piece of grilled chicken in coconut sauce, and eggs make the protein floor; the greens and tomato base stretch it.",
  bonus: false,
  preciousThread: "A piece of chicken to grill and bathe in coconut sauce for kuku wa kupaka.",
  engine: [
    "Maize meal (ugali) — cooked fresh each night, the plate under every meal (the constant base)",
    "Sukuma wiki — collards fried with onion & tomato, the everyday greens",
    "Tomato-onion base + coconut — the mchuzi foundation; a tin of coconut milk on the coast",
    "Pilau masala + kachumbari — the spice blend and the table salad; rice (wali) as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ugali with kuku wa kupaka — grilled chicken in coconut sauce — and a heap of sukuma wiki", estCalories: 640, estProtein: 27 },
    { day: "Mon", dinner: "ugali na nyama — stiff maize cake with a slow beef-and-tomato stew", estCalories: 600, estProtein: 24 },
    { day: "Tue", dinner: "ugali with sukuma wiki and kachumbari, leftover stew warmed alongside", estCalories: 540, estProtein: 18 },
    { day: "Wed", dinner: "ugali with mayai — fried eggs over the tomato-onion base — and greens", estCalories: 520, estProtein: 20 },
    { day: "Thu", dinner: "the second kuku wa kupaka, coconut sauce reduced thick over rice this time", estCalories: 600, estProtein: 25 },
    { day: "Fri", dinner: "ugali with sukuma wiki cooked rich in coconut milk and a little dried fish", estCalories: 560, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: leftover stew, greens and crumbled ugali fried together into one skillet bowl", estCalories: 500, estProtein: 17 },
  ],
  shopping: [
    { item: "Maize meal (unga)", qty: "5 lb", cost: 3.5, note: "the base under every dinner" },
    { item: "Sukuma wiki / collards", qty: "3 bunches", cost: 3.0 },
    { item: "Chicken (whole or thighs)", qty: "~2 lb", cost: 4.5, note: "the precious thread — for kupaka" },
    { item: "Beef or goat for stew", qty: "~1 lb", cost: 4.0 },
    { item: "Tomatoes", qty: "~2 lb", cost: 2.5, spansWeeks: true },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Coconut milk", qty: "2 tins", cost: 2.5, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Dried fish (small)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Rice (wali, alt grain)", qty: "2 lb", cost: 2.0, spansWeeks: true },
    { item: "Garlic, ginger, chili", qty: "assorted", cost: 1.5, spansWeeks: true },
    { item: "Lemon + coriander (kachumbari)", qty: "few + bunch", cost: 1.5 },
    { item: "Pilau masala + curry powder", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Oil, salt", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const eaWeek2Pilau: WeekPlan = {
  slug: "ea-week-2-pilau",
  number: 2,
  cuisine: "east-african",
  theme: "Pilau & Biryani",
  title: "Week 2 — Pilau & Biryani",
  description:
    "The coast's most beloved rice: pilau, where the rice itself is cooked in a spiced, caramel-dark onion stock until every grain is brown and fragrant, and biryani, its layered cousin with a separate masala gravy. A few sticks of mishkaki on the side make it a feast on pennies.",
  context:
    `Pilau is the dish the Swahili coast reaches for at every celebration — weddings, Eid, a Sunday worth marking — yet it is built from the cheapest things in the dukas. The trick is the pilau masala: a warm blend of cumin, cardamom, clove, cinnamon and black pepper that arrived with the Indian and Omani traders who worked the monsoon dhow routes for a thousand years. Onions are fried slow and dark until they sweeten, the spices bloom in the oil, and the rice toasts and then simmers in stock the color of strong tea, so the grain carries the flavor rather than sitting beside it. Biryani is the grander, more Indian-inflected cousin: rice and a saucy meat masala cooked apart, then layered. Mishkaki — little marinated beef skewers off the grill — stretch a small amount of meat across the table. The maize, greens, tomato-onion base and coconut stay the constant foundation; this week the alt grain, rice, takes the headline, spiced.`,
  dishes: ["Pilau", "Biryani", "Mishkaki (skewers on the side)", "Pilau ya nyama"],
  proteinNote:
    "A little beef or goat cooked into the pilau and threaded onto mishkaki skewers carries the protein; the spiced rice and onion make a small amount feel like plenty.",
  bonus: false,
  preciousThread: "A jar of pilau masala — the cumin-cardamom-clove blend that turns plain rice into a feast.",
  engine: [
    "Maize meal (ugali) — still cooked fresh on the plainer nights, the constant base under the week",
    "Sukuma wiki — the everyday greens fried with onion & tomato alongside the rice",
    "Tomato-onion base + coconut — the mchuzi and the dark fried-onion stock the pilau is built on",
    "Pilau masala + kachumbari — this week's headline spice blend and the cooling table salad; rice (wali) the grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "pilau ya nyama — beef and rice cooked together in dark spiced onion stock, kachumbari over", estCalories: 660, estProtein: 26 },
    { day: "Mon", dinner: "biryani — spiced rice layered with a saucy meat masala and fried onions", estCalories: 640, estProtein: 24 },
    { day: "Tue", dinner: "leftover pilau crisped in the pan with mishkaki — grilled beef skewers", estCalories: 600, estProtein: 25 },
    { day: "Wed", dinner: "ugali with sukuma wiki and the leftover biryani gravy spooned over", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "pilau ya mboga — the spiced rice with potato, peas and carrot, no meat tonight", estCalories: 560, estProtein: 17 },
    { day: "Fri", dinner: "the second pilau, mishkaki off the grill and kachumbari", estCalories: 640, estProtein: 24 },
    { day: "Sat", dinner: "zero-waste: leftover pilau, skewer scraps and greens fried into one spiced rice bowl", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "Rice (basmati or long-grain)", qty: "5 lb", cost: 4.5, note: "the headline grain this week" },
    { item: "Maize meal (unga)", qty: "2 lb", cost: 1.5, note: "the constant base on plain nights" },
    { item: "Beef or goat", qty: "~1.5 lb", cost: 5.5, note: "for pilau and mishkaki" },
    { item: "Onions", qty: "~4 lb", cost: 3.0, spansWeeks: true, note: "fried dark for the stock" },
    { item: "Tomatoes", qty: "~1.5 lb", cost: 2.0, spansWeeks: true },
    { item: "Pilau masala + biryani spices", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Potatoes, peas, carrot", qty: "~2 lb", cost: 2.5 },
    { item: "Sukuma wiki / collards", qty: "1 bunch", cost: 1.0 },
    { item: "Garlic + ginger", qty: "head + knob", cost: 1.5, spansWeeks: true },
    { item: "Yogurt (for biryani/marinade)", qty: "small", cost: 1.5 },
    { item: "Lemon + coriander (kachumbari)", qty: "few + bunch", cost: 1.5 },
    { item: "Skewers + chili", qty: "pack", cost: 1.0, spansWeeks: true },
    { item: "Oil, salt, bay", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const eaWeek3Nazi: WeekPlan = {
  slug: "ea-week-3-nazi",
  number: 3,
  cuisine: "east-african",
  theme: "Wali wa Nazi",
  title: "Week 3 — Wali wa Nazi",
  description:
    "Coconut rice — wali wa nazi — the soft, faintly sweet rice cooked in pressed coconut milk that is the Swahili coast's everyday plate. Tonight it is the canvas: under coconut beans, under a coconut fish curry, under greens cooked rich in nazi, the rice carries each topping.",
  context:
    `On the pwani — the coast of Mombasa, Zanzibar, Lamu, Bagamoyo — coconut is not a garnish but a cooking medium, and wali wa nazi is its purest expression. A whole coconut is grated, soaked and squeezed twice: the thick first pressing (tui) finishes the dish, the thin second pressing (tui la pili) does the cooking. Rice simmered in that milk turns tender and glossy, with a sweetness that needs only the simplest topping. The coast eats it with maharagwe ya nazi (beans in coconut), with mchuzi wa samaki (a coconut fish curry), or with sukuma and mboga cooked down in nazi. This is where the constant coconut of the foundation steps forward — not as a new theme, but as the night the base ingredient becomes the plate itself. The maize, greens, tomato-onion base and pilau masala stay in their constant role; coconut rice is simply the week's vehicle.`,
  dishes: ["Wali wa nazi", "Maharagwe ya nazi (beans in coconut)", "Mchuzi wa samaki (coconut fish curry)", "Mboga za nazi"],
  proteinNote:
    "Beans simmered in coconut and a coconut fish curry carry the protein cheaply; the rich nazi rice makes a small amount of fish go a long way.",
  bonus: false,
  preciousThread: "Fresh coconut (or good tinned coconut milk) pressed twice — the thick tui that finishes the rice.",
  engine: [
    "Maize meal (ugali) — kept for the plainer night, the constant base beneath the arc",
    "Sukuma wiki — greens, this week cooked rich in coconut as mboga za nazi",
    "Tomato-onion base + coconut — the foundation, with coconut stepping to the front as the cooking liquid",
    "Pilau masala + kachumbari — the spice and the salad on the side; rice (wali) cooked in nazi as the grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "wali wa nazi with maharagwe ya nazi — coconut rice under coconut-creamy red beans", estCalories: 620, estProtein: 22 },
    { day: "Mon", dinner: "wali wa nazi with mchuzi wa samaki — a coconut fish curry over the soft rice", estCalories: 600, estProtein: 24 },
    { day: "Tue", dinner: "leftover coconut rice with mboga za nazi — greens stewed in coconut milk", estCalories: 540, estProtein: 16 },
    { day: "Wed", dinner: "wali wa nazi with the leftover beans and a fried egg", estCalories: 560, estProtein: 20 },
    { day: "Thu", dinner: "ugali tonight with the second mchuzi wa samaki, sauce reduced thick", estCalories: 580, estProtein: 23 },
    { day: "Fri", dinner: "wali wa nazi with sukuma in coconut and kachumbari", estCalories: 540, estProtein: 17 },
    { day: "Sat", dinner: "zero-waste: leftover coconut rice, beans and fish flaked together and pan-fried", estCalories: 500, estProtein: 18 },
  ],
  shopping: [
    { item: "Rice (long-grain)", qty: "4 lb", cost: 4.0, note: "cooked in nazi all week" },
    { item: "Coconut milk / fresh coconut", qty: "4 tins or 3 nuts", cost: 5.0, note: "the precious thread — pressed twice" },
    { item: "Dried red beans (maharagwe)", qty: "2 lb", cost: 2.5, spansWeeks: true },
    { item: "Fish (tilapia or mackerel)", qty: "~1.5 lb", cost: 4.5 },
    { item: "Tomatoes", qty: "~1.5 lb", cost: 2.0, spansWeeks: true },
    { item: "Onions", qty: "~2 lb", cost: 1.5, spansWeeks: true },
    { item: "Sukuma wiki / collards", qty: "2 bunches", cost: 2.0 },
    { item: "Maize meal (unga)", qty: "2 lb", cost: 1.5, note: "the constant base" },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Garlic, ginger, chili", qty: "assorted", cost: 1.5, spansWeeks: true },
    { item: "Tamarind", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Lemon + coriander (kachumbari)", qty: "few + bunch", cost: 1.5 },
    { item: "Oil, salt, turmeric", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 17,
};

export const eaWeek4Nyama: WeekPlan = {
  slug: "ea-week-4-nyama",
  number: 4,
  cuisine: "east-african",
  theme: "Nyama & Mishkaki",
  title: "Week 4 — Nyama & Mishkaki",
  description:
    "Meat week — the way the region actually does meat: not much of it, cooked to make it count. Nyama choma off the open grill, mishkaki skewers marinated and charred, a slow beef stew that flavors three nights, and mbuzi wa kupaka, goat finished in coconut sauce.",
  context:
    `Meat in East Africa is celebration and weekend food, and a little of it is made to stretch. Nyama choma — literally "burnt meat," goat or beef grilled over charcoal — is the social ritual at the heart of it: bought by the kilo, salted simply, grilled slow, and eaten in chunks with kachumbari and ugali, a whole afternoon built around the fire. Mishkaki are the everyday version, cubes of beef marinated in garlic, ginger and a little curry and threaded on sticks for the roadside grill. A slow tomato-onion beef stew — the workhorse mchuzi wa nyama — is cooked once and reaches across several dinners. And mbuzi wa kupaka brings the coast in, goat grilled and then simmered in a tamarind-bright coconut sauce. The protein leads this week, but the maize, greens, tomato-onion base and coconut are still the constant foundation doing the heavy lifting; the meat is the thread, not the bulk.`,
  dishes: ["Nyama choma", "Mishkaki", "Mchuzi wa nyama (beef stew)", "Mbuzi wa kupaka"],
  proteinNote:
    "Grilled goat and beef are the headline, but a single stew pot and skewer marinade stretch a couple of pounds of meat across the whole week, eked out with beans and eggs.",
  bonus: false,
  preciousThread: "A piece of goat (mbuzi) to grill for choma and finish in coconut kupaka sauce.",
  engine: [
    "Maize meal (ugali) — the plate that catches the meat and its juices every night (the constant base)",
    "Sukuma wiki — the greens fried with onion & tomato beside the grill",
    "Tomato-onion base + coconut — the mchuzi the stew is built on; coconut for the kupaka finish",
    "Pilau masala + kachumbari — the spice and the sharp tomato-onion salad that cuts the meat; rice as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "nyama choma — charcoal-grilled goat with ugali and a sharp kachumbari", estCalories: 660, estProtein: 30 },
    { day: "Mon", dinner: "ugali with mchuzi wa nyama — a slow tomato-onion beef stew — and sukuma", estCalories: 600, estProtein: 25 },
    { day: "Tue", dinner: "mishkaki — marinated beef skewers off the grill — with ugali and kachumbari", estCalories: 580, estProtein: 26 },
    { day: "Wed", dinner: "the leftover beef stew over rice, greens stirred through", estCalories: 560, estProtein: 22 },
    { day: "Thu", dinner: "mbuzi wa kupaka — grilled goat finished in tamarind-coconut sauce, with ugali", estCalories: 620, estProtein: 27 },
    { day: "Fri", dinner: "ugali with the last of the stew, beans added to stretch it, and sukuma", estCalories: 540, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: chopped grilled-meat scraps, stew and greens fried with crumbled ugali", estCalories: 500, estProtein: 19 },
  ],
  shopping: [
    { item: "Goat (mbuzi)", qty: "~2 lb", cost: 7.0, note: "the precious thread — choma and kupaka" },
    { item: "Beef (for stew + mishkaki)", qty: "~2 lb", cost: 6.0 },
    { item: "Maize meal (unga)", qty: "4 lb", cost: 3.0, note: "the base under the meat" },
    { item: "Tomatoes", qty: "~2 lb", cost: 2.5, spansWeeks: true },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Sukuma wiki / collards", qty: "2 bunches", cost: 2.0 },
    { item: "Coconut milk", qty: "1 tin", cost: 1.5, spansWeeks: true, note: "for the kupaka" },
    { item: "Dried beans (to stretch the stew)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Garlic, ginger, chili", qty: "assorted", cost: 1.5, spansWeeks: true },
    { item: "Tamarind", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Lemon + coriander (kachumbari)", qty: "few + bunch", cost: 1.5 },
    { item: "Skewers + curry powder", qty: "pack + small", cost: 1.0, spansWeeks: true },
    { item: "Rice (alt grain)", qty: "1 lb", cost: 1.0, spansWeeks: true },
    { item: "Oil, salt", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 19,
};

export const eaWeek5Maharage: WeekPlan = {
  slug: "ea-week-5-maharage",
  number: 5,
  cuisine: "east-african",
  theme: "Maharage & Mboga",
  title: "Week 5 — Maharage & Mboga",
  description:
    "The meatless heart of the week: beans and vegetables, the cheapest and most everyday way the region eats. Maharagwe ya nazi simmered in coconut, ndengu lentils, githeri of maize and beans together, and mboga za majani — leafy greens cooked simply and well.",
  context:
    `If meat is the weekend, beans are the week — the protein-on-pennies that actually feeds most households most nights. Maharagwe (red beans) cooked soft in a tomato-onion base, then enriched with coconut on the coast, is the everyday stew. Ndengu — green gram, the small green mung bean — cooks quickly into a thin, comforting curry. Githeri, the Kikuyu one-pot of boiled maize kernels and beans together, is frugality made delicious: the maize that is the staple and the bean that is the protein, cooked in the same pot, sometimes fried up after with onion and tomato. And mboga za majani covers the wider world of leaves — sukuma, but also amaranth (mchicha), pumpkin leaves, cowpea leaves — wilted with onion and tomato. This is the foundation eating itself, frugal and complete; the maize, greens, tomato-onion base and coconut are all here, in their constant role, simply made the whole dinner.`,
  dishes: ["Maharagwe ya nazi", "Ndengu (green gram)", "Githeri", "Mboga za majani"],
  proteinNote:
    "Beans, green gram and maize-and-bean githeri are the protein this week — cheap, plentiful plant protein — with coconut and a little dried fish for depth, the leanest and cheapest week of the arc.",
  bonus: false,
  preciousThread: "A tin of coconut milk to turn plain red beans into rich, glossy maharagwe ya nazi.",
  engine: [
    "Maize meal (ugali) — the plate under the beans and greens (the constant base), and the kernels in githeri",
    "Sukuma wiki — the everyday greens, joined this week by mchicha and other leaves as mboga za majani",
    "Tomato-onion base + coconut — the foundation the beans simmer in; coconut for the nazi version",
    "Pilau masala + kachumbari — a little spice and the table salad; rice (wali) as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ugali with maharagwe ya nazi — red beans simmered soft in coconut and tomato — and greens", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "githeri — boiled maize and beans, fried up with onion and tomato", estCalories: 580, estProtein: 21 },
    { day: "Tue", dinner: "ndengu — a green-gram curry — over rice with mboga za majani", estCalories: 560, estProtein: 20 },
    { day: "Wed", dinner: "ugali with the leftover maharagwe and sukuma cooked in coconut", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "mboga za majani — mixed leaves with onion and tomato — and ugali, beans on the side", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "the second githeri, this time with a little dried fish stirred through", estCalories: 560, estProtein: 20 },
    { day: "Sat", dinner: "zero-waste: leftover beans, githeri and greens fried with crumbled ugali into one bowl", estCalories: 500, estProtein: 18 },
  ],
  shopping: [
    { item: "Dried red beans (maharagwe)", qty: "3 lb", cost: 3.5, spansWeeks: true, note: "the protein this week" },
    { item: "Green gram (ndengu)", qty: "1.5 lb", cost: 2.5, spansWeeks: true },
    { item: "Maize kernels (for githeri)", qty: "2 lb", cost: 2.0 },
    { item: "Maize meal (unga)", qty: "3 lb", cost: 2.0, note: "the base under every dinner" },
    { item: "Sukuma + mchicha (amaranth)", qty: "3 bunches", cost: 3.0, note: "mboga za majani" },
    { item: "Tomatoes", qty: "~2 lb", cost: 2.5, spansWeeks: true },
    { item: "Onions", qty: "~2 lb", cost: 1.5, spansWeeks: true },
    { item: "Coconut milk", qty: "1 tin", cost: 1.5, spansWeeks: true },
    { item: "Dried fish (small)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Garlic, ginger, chili", qty: "assorted", cost: 1.5, spansWeeks: true },
    { item: "Lemon + coriander (kachumbari)", qty: "few + bunch", cost: 1.5 },
    { item: "Rice (alt grain)", qty: "1 lb", cost: 1.0, spansWeeks: true },
    { item: "Oil, salt, curry powder", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 16,
};

export const eaWeek6Samaki: WeekPlan = {
  slug: "ea-week-6-samaki",
  number: 6,
  cuisine: "east-african",
  theme: "Samaki & Pwani",
  title: "Week 6 — Samaki & Pwani",
  description:
    "The coast's catch: samaki. Whole fish bathed in the famous coconut-tamarind sauce of samaki wa kupaka, a brothy mchuzi wa samaki curry, and dagaa — the tiny dried lake-and-sea fish, crisped up, that are protein for pennies inland and out.",
  context:
    `From the Indian Ocean reefs to the great lakes of the Rift, fish is the everyday protein where it can be had, and the Swahili coast has made an art of it. Samaki wa kupaka is the showpiece — a whole fish grilled over charcoal, then napped with a sauce of coconut milk, tamarind, garlic and chili and returned to the fire until the sauce sets into a glaze; it is the dish Mombasa and Zanzibar are proudest of. Mchuzi wa samaki is the everyday version, a brothy coconut-tomato curry you spoon over rice or scoop with ugali. And dagaa (called omena around Lake Victoria) are the tiny silver fish, sun-dried and sold by the cupful — fried crisp with onion and tomato, they are some of the cheapest protein in the whole region, threading the sea through an inland kitchen. The maize, greens, tomato-onion base and coconut hold their constant place; the fish is the headline, kupaka and tamarind the coast's signature.`,
  dishes: ["Samaki wa kupaka", "Mchuzi wa samaki", "Dagaa / omena", "Samaki wa kupaka over wali"],
  proteinNote:
    "Fresh fish for the kupaka and curry, and cheap sun-dried dagaa to stretch the protein across the leaner nights, make this a protein-rich week on a small budget.",
  bonus: false,
  preciousThread: "A whole fresh fish to grill and glaze in coconut-tamarind sauce for samaki wa kupaka.",
  engine: [
    "Maize meal (ugali) — the plate to scoop the fish curry with (the constant base)",
    "Sukuma wiki — the everyday greens fried with onion & tomato beside the fish",
    "Tomato-onion base + coconut — the mchuzi the fish curry is built on; coconut for the kupaka glaze",
    "Pilau masala + kachumbari — spice and the table salad that cuts the richness; rice (wali) as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "samaki wa kupaka — whole grilled fish glazed in coconut-tamarind sauce — with wali", estCalories: 620, estProtein: 28 },
    { day: "Mon", dinner: "mchuzi wa samaki — a brothy coconut-tomato fish curry — over rice with greens", estCalories: 580, estProtein: 25 },
    { day: "Tue", dinner: "dagaa fried crisp with onion and tomato, ugali and sukuma alongside", estCalories: 540, estProtein: 22 },
    { day: "Wed", dinner: "the leftover kupaka fish flaked into rice with extra sauce and kachumbari", estCalories: 560, estProtein: 23 },
    { day: "Thu", dinner: "ugali with the second mchuzi wa samaki, sauce reduced rich", estCalories: 580, estProtein: 24 },
    { day: "Fri", dinner: "dagaa and sukuma cooked down together in coconut, over ugali", estCalories: 520, estProtein: 20 },
    { day: "Sat", dinner: "zero-waste: leftover fish, dagaa and greens fried with rice into one last coast bowl", estCalories: 500, estProtein: 19 },
  ],
  shopping: [
    { item: "Fresh fish (whole tilapia/snapper)", qty: "~2 lb", cost: 6.0, note: "the precious thread — for kupaka" },
    { item: "Dagaa / omena (dried small fish)", qty: "~1 lb", cost: 3.0, spansWeeks: true, note: "cheap protein" },
    { item: "Coconut milk", qty: "3 tins", cost: 4.0, spansWeeks: true },
    { item: "Rice (wali)", qty: "3 lb", cost: 3.0, spansWeeks: true },
    { item: "Maize meal (unga)", qty: "2 lb", cost: 1.5, note: "the constant base" },
    { item: "Tomatoes", qty: "~2 lb", cost: 2.5, spansWeeks: true },
    { item: "Onions", qty: "~2 lb", cost: 1.5, spansWeeks: true },
    { item: "Sukuma wiki / collards", qty: "2 bunches", cost: 2.0 },
    { item: "Tamarind", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Garlic, ginger, chili", qty: "assorted", cost: 1.5, spansWeeks: true },
    { item: "Lemon + coriander (kachumbari)", qty: "few + bunch", cost: 1.5 },
    { item: "Oil, salt, turmeric", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const eaWeek7Sherehe: WeekPlan = {
  slug: "ea-week-7-sherehe",
  number: 7,
  cuisine: "east-african",
  theme: "Sherehe & Mitaani",
  title: "Week 7 — Sherehe & Mitaani",
  description:
    "The street and the celebration — sherehe (festival) and mitaani (in the streets). Sambusa folded and fried, mandazi puffed sweet, chips mayai — the chip omelette — and vitumbua, coconut-rice cakes, building all week to a final pilau feast that closes the arc.",
  context:
    `The last week is the food of the corner, the kiosk and the party — the cheap, joyful eating that happens between meals and at every celebration. Sambusa (the triangular fried pastry the Indian and Arab traders brought, samosa's Swahili cousin) are stuffed with spiced mince or lentils. Mandazi — lightly sweet, cardamom-scented fried dough, sometimes enriched with coconut — are the doughnut you buy with tea on every street. Chips mayai is Tanzania's beloved invention, a thick omelette cooked around a tangle of fries, folded and cut like a tart. Vitumbua are little coconut-rice cakes, crisp-edged and tender, fried in special dimpled pans. And because a real sherehe ends in a pot of pilau, the week closes on the spiced rice feast that began the coast's story — bringing the arc full circle. Throughout, the maize, greens, tomato-onion base and coconut remain the constant foundation; the street food sits on top of it, celebratory and frugal at once.`,
  dishes: ["Sambusa", "Mandazi", "Chips mayai", "Vitumbua + a closing pilau feast"],
  proteinNote:
    "Spiced mince and lentils in the sambusa, eggs in the chips mayai, and a little meat in the closing pilau carry the protein; the fried snacks stretch small amounts of filling.",
  bonus: false,
  preciousThread: "A bag of self-raising flour and cardamom for mandazi, vitumbua and sambusa wrappers.",
  engine: [
    "Maize meal (ugali) — the constant base, still the plain dinner on the in-between nights",
    "Sukuma wiki — the everyday greens fried alongside the fried-snack nights",
    "Tomato-onion base + coconut — the foundation under the sambusa filling and the vitumbua batter",
    "Pilau masala + kachumbari — the spice for the sambusa and the closing pilau; rice (wali) as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "sambusa — fried pastries of spiced mince and lentil — with kachumbari and chai", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "chips mayai — the chip omelette — with kachumbari and chili sauce", estCalories: 620, estProtein: 23 },
    { day: "Tue", dinner: "ugali with sukuma and the leftover sambusa filling fried up as a relish", estCalories: 540, estProtein: 19 },
    { day: "Wed", dinner: "vitumbua — coconut-rice cakes — with a bean stew on the side", estCalories: 560, estProtein: 18 },
    { day: "Thu", dinner: "mandazi and a thick bean-and-coconut stew to dip them in", estCalories: 580, estProtein: 17 },
    { day: "Fri", dinner: "the closing pilau feast — spiced beef-and-rice — with kachumbari", estCalories: 660, estProtein: 25 },
    { day: "Sat", dinner: "zero-waste: leftover pilau, sambusa scraps and greens fried into one final bowl", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "Self-raising flour (sambusa, mandazi)", qty: "5 lb", cost: 3.0, note: "the precious thread this week" },
    { item: "Rice (vitumbua + pilau)", qty: "3 lb", cost: 3.0, spansWeeks: true },
    { item: "Maize meal (unga)", qty: "2 lb", cost: 1.5, note: "the constant base" },
    { item: "Beef mince (for sambusa + pilau)", qty: "~1.5 lb", cost: 5.0 },
    { item: "Eggs (chips mayai)", qty: "1 dozen", cost: 3.5 },
    { item: "Potatoes (for chips)", qty: "~2 lb", cost: 1.5 },
    { item: "Lentils (sambusa filling)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Coconut milk", qty: "2 tins", cost: 2.5, spansWeeks: true },
    { item: "Onions + tomatoes", qty: "~3 lb", cost: 3.0, spansWeeks: true },
    { item: "Sukuma wiki / collards", qty: "1 bunch", cost: 1.0 },
    { item: "Cardamom + pilau masala", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Dried beans", qty: "1 lb", cost: 1.0, spansWeeks: true },
    { item: "Lemon + coriander (kachumbari)", qty: "few + bunch", cost: 1.5 },
    { item: "Oil, salt, sugar", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const eastAfricanWeeks: WeekPlan[] = [
  eaWeek1Ugali,
  eaWeek2Pilau,
  eaWeek3Nazi,
  eaWeek4Nyama,
  eaWeek5Maharage,
  eaWeek6Samaki,
  eaWeek7Sherehe,
];
