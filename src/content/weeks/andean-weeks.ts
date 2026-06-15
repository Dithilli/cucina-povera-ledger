import type { WeekPlan } from "../types";

// Challenge — The Andes (Peru / Bolivia / Ecuador highlands): cocina andina.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "andean"; the engine is
// cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// composes variations on top of the same recipe pool.
//
// RULE #6: the Andean FOUNDATION — the tuber larder (papa + chuño/papa seca, oca,
// olluco), Andean maize (choclo + mote), the ají pastes (amarillo & panca), a pot
// of quinoa, and salsa criolla — is the CONSTANT that lives in EVERY week's
// `engine`. It is never itself a week theme. Each of the seven weeks is a distinct
// real DINNER category that sits on that base.

export const anWeek1Chupes: WeekPlan = {
  slug: "an-week-1-chupes",
  number: 1,
  cuisine: "andean",
  theme: "Chupes y Sopas",
  title: "Week 1 — Chupes y Sopas",
  description:
    "The Andean dinner bowl: thick, milky chowders and brothy soups built to feed a cold-mountain household for cents. A potato or a handful of quinoa, a spoon of ají, whatever cheese or egg is in the house — simmered into a meal you eat with a spoon and a torn piece of bread.",
  context:
    `In the sierra the evening meal is very often a bowl. Chupes and sopas are how an Andean kitchen turns a few potatoes, a fistful of grain, and a little milk or cheese into a full dinner at high altitude, where a hot, dense soup is also a way to stay warm. The technique that defines the week is the layered build: an aderezo of onion, garlic, and ají panca sweated in a little oil, then potatoes and a grain, then liquid, then a final enrichment — milk and crumbled cheese, or an egg poached straight in the broth (the huevo escalfado of a good chupe). Sopa de maní leans on toasted ground peanuts; chairo on chuño and barley; locro de papa on potato collapsed into its own cream. None of it needs much meat — the body comes from starch, dairy, and time, which is exactly why it stretches so far.`,
  dishes: [
    "Chupe de quinua — quinoa chowder with cheese and a poached egg",
    "Sopa de maní — toasted-peanut soup with potatoes",
    "Locro de papa — potato-and-cheese soup (the Ecuadorian highland classic)",
    "Chairo — chuño and barley soup, the altiplano warmer",
  ],
  proteinNote:
    "The floor comes from dairy and eggs: milk and crumbled fresh cheese enrich nearly every bowl, and an egg poached in the broth lifts the chupes. Peanuts (sopa de maní) and the quinoa itself carry the rest; a little meat is optional, not required.",
  bonus: false,
  preciousThread: "A block of fresh queso fresco to crumble into every bowl.",
  engine: [
    "Potatoes & tubers — a sack of papa, plus a bag of chuño/papa seca for chairo (the constant base under the whole arc)",
    "Andean maize — a few ears of choclo and a bag of mote to drop into the heavier soups",
    "Ají pastes — a batch of amarillo & panca blended and jarred, the aderezo that starts every pot",
    "Quinoa pot + salsa criolla — a pot of cooked quinoa for the chupe, and the onion-lime relish kept in a jar",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "chupe de quinua with crumbled queso fresco and an egg poached in the broth", estCalories: 560, estProtein: 20 },
    { day: "Mon", dinner: "locro de papa — potatoes simmered to cream with cheese, salsa criolla on top", estCalories: 520, estProtein: 17 },
    { day: "Tue", dinner: "sopa de maní — toasted peanut soup with potato and a little mote", estCalories: 580, estProtein: 19 },
    { day: "Wed", dinner: "chairo — chuño and barley soup with the last of the aderezo", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "chupe de quinua again, thicker, with extra choclo stirred in", estCalories: 560, estProtein: 20 },
    { day: "Fri", dinner: "locro de papa with a fried egg on top, salsa criolla", estCalories: 540, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: a pooled chowder of every leftover soup, thinned with milk, finished with cheese and toasted bread", estCalories: 500, estProtein: 17 },
  ],
  shopping: [
    { item: "Potatoes", qty: "5 lb", cost: 3.0, note: "the base under every dinner" },
    { item: "Chuño / papa seca", qty: "1 lb", cost: 4.0, spansWeeks: true, note: "freeze-dried potato for chairo; keeps forever" },
    { item: "Quinoa", qty: "1 lb", cost: 3.0, spansWeeks: true },
    { item: "Pearled barley", qty: "1 lb", cost: 1.5 },
    { item: "Raw peanuts", qty: "8 oz", cost: 1.8, note: "toasted and ground for sopa de maní" },
    { item: "Queso fresco", qty: "12 oz", cost: 3.5, note: "the precious thread — crumbled into every bowl" },
    { item: "Milk", qty: "1/2 gal", cost: 2.2 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Choclo (Andean corn)", qty: "3 ears", cost: 2.0 },
    { item: "Mote (hominy)", qty: "1 lb dry", cost: 1.5, spansWeeks: true },
    { item: "Aji amarillo paste", qty: "1 jar", cost: 3.0, spansWeeks: true },
    { item: "Aji panca paste", qty: "1 jar", cost: 3.0, spansWeeks: true },
    { item: "Onions, garlic, limes", qty: "for aderezo + criolla", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 17,
};

export const anWeek2Papas: WeekPlan = {
  slug: "an-week-2-papas",
  number: 2,
  cuisine: "andean",
  theme: "Papas del Ande",
  title: "Week 2 — Papas del Ande",
  description:
    "The potato as the whole plate, not the side. The Andes gave the world the potato and never stopped composing dinner out of it — boiled, mashed, layered, stuffed, and bathed in a creamy ají sauce. This week each dinner is a finished potato dish you eat as the meal.",
  context:
    `Peru counts thousands of native potato varieties, and the highland kitchen treats the potato the way a French one treats bread or an Italian one pasta: the structural centre of dinner. The defining technique here is the sauce — papa a la huancaína and ocopa are both just boiled potatoes blanketed in a blended cream of ají, cheese or peanuts, and a few crackers for body; causa is seasoned potato mash pressed into layers around a filling; papa rellena hides a little stew inside a mashed-potato shell and fries it. All of it is built to feed people cheaply and cold-tolerantly: the potatoes do the heavy lifting, and a small amount of cheese, egg, or peanut turns plain starch into something you'd serve a guest. Nothing about it needs meat to read as a real dinner.`,
  dishes: [
    "Papa a la huancaína — boiled potatoes under a creamy ají-amarillo cheese sauce",
    "Causa limeña — chilled layered potato terrine with a filling",
    "Ocopa arequipeña — potatoes under a peanut-and-ají-amarillo sauce",
    "Papa rellena — mashed-potato shell stuffed and fried",
  ],
  proteinNote:
    "Cheese and egg carry it: the huancaína and ocopa sauces are built on evaporated milk, fresh cheese, and (for ocopa) peanuts, and a boiled egg garnishes nearly every plate. Papa rellena's filling adds a little meat or extra egg where wanted.",
  bonus: false,
  preciousThread: "A can of evaporated milk to blend the huancaína and ocopa sauces silky.",
  engine: [
    "Potatoes & tubers — a big sack of papa boiled in batches (the constant base), with oca/olluco thrown in for color",
    "Andean maize — choclo boiled to serve alongside, and a little mote for the platters",
    "Ají pastes — amarillo for the huancaína/ocopa creams, panca for depth, all blended and jarred",
    "Quinoa pot + salsa criolla — a quinoa pot for the side, salsa criolla to brighten the heavy potato plates",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "papa a la huancaína over boiled potatoes, egg and olive, choclo on the side", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "causa limeña layered with the leftover egg-and-aji filling, salsa criolla", estCalories: 500, estProtein: 16 },
    { day: "Tue", dinner: "ocopa arequipeña — boiled potatoes under peanut-aji sauce, boiled egg", estCalories: 580, estProtein: 19 },
    { day: "Wed", dinner: "papa rellena, two stuffed-and-fried potato shells, salsa criolla", estCalories: 600, estProtein: 18 },
    { day: "Thu", dinner: "papa a la huancaína again, this time with mote and a quinoa side", estCalories: 560, estProtein: 18 },
    { day: "Fri", dinner: "causa limeña, second batch, with whatever filling is left and avocado if cheap", estCalories: 520, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: a tortilla de papa from all the boiled-potato ends, leftover sauce spooned over", estCalories: 540, estProtein: 18 },
  ],
  shopping: [
    { item: "Potatoes", qty: "6 lb", cost: 3.6, note: "the dish itself, every night" },
    { item: "Oca / olluco (or extra waxy potato)", qty: "1 lb", cost: 2.0 },
    { item: "Queso fresco", qty: "10 oz", cost: 3.0 },
    { item: "Evaporated milk", qty: "2 cans", cost: 2.4, note: "the precious thread — the silk in the sauce" },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Soda crackers", qty: "1 sleeve", cost: 1.0, note: "body for the huancaína/ocopa blend" },
    { item: "Raw peanuts", qty: "6 oz", cost: 1.4, note: "for ocopa" },
    { item: "Choclo (Andean corn)", qty: "3 ears", cost: 2.0 },
    { item: "Mote (hominy)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Aji amarillo paste", qty: "1 jar", cost: 3.0, spansWeeks: true },
    { item: "Aji panca paste", qty: "from last week's jar", cost: 0.0, spansWeeks: true },
    { item: "Quinoa", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Onions, garlic, limes, oil", qty: "aderezo + criolla + frying", cost: 3.5, spansWeeks: true },
  ],
  firstShopTotal: 24,
  steadyStateWeekly: 16,
};

export const anWeek3Guisos: WeekPlan = {
  slug: "an-week-3-guisos",
  number: 3,
  cuisine: "andean",
  theme: "Guisos y Secos",
  title: "Week 3 — Guisos y Secos",
  description:
    "The slow pot: braises and 'secos' where a small amount of meat — or none — flavors a big pot of beans, dried potato, or tubers. This is Sunday-cooking thrift, where ají panca and a long simmer do the work and a single chicken stretches across a week.",
  context:
    `A guiso is a braise and a seco is a reduced, herby braise — both the Andean answer to feeding many from little. The frugality is structural: a seco de frejoles is mostly beans with cilantro and a whisper of meat; carapulcra is dried potato (papa seca) rehydrated and stewed until it drinks up a peanut-and-panca sauce; ají de gallina shreds a little poached chicken into a thick, creamy ají-amarillo sauce thickened with bread so a pound of meat feeds a household; olluquito stews ribbons of olluco tuber with charqui or a little beef. The defining move is the aderezo plus time — onion, garlic, and ají panca cooked down to a base, then the cheap bulk ingredient added and simmered until it's tender and the sauce is thick. Served over rice or potatoes, a small pot of guiso becomes several dinners.`,
  dishes: [
    "Seco de frejoles — cilantro-braised beans with a little meat",
    "Carapulcra — dried-potato stew with peanut and ají panca",
    "Ají de gallina — shredded chicken in creamy ají-amarillo sauce",
    "Olluquito — stewed olluco ribbons with a little beef or charqui",
  ],
  proteinNote:
    "Beans (seco de frejoles) and a single small chicken stretched through ají de gallina carry the protein; carapulcra adds peanuts, and the daily quinoa or an egg fills any gap. The meat is a flavoring, not the bulk.",
  bonus: false,
  preciousThread: "One small chicken, poached Sunday to shred across the whole ají-de-gallina run.",
  engine: [
    "Potatoes & tubers — boiled papa to serve under the guisos, plus the papa seca that becomes carapulcra (the constant base)",
    "Andean maize — mote simmered to round out the bean pot, choclo on the side",
    "Ají pastes — a generous jar of panca for the braises and amarillo for the gallina, blended and ready",
    "Quinoa pot + salsa criolla — quinoa to serve under the secos, criolla to cut the richness",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ají de gallina over boiled potato, poach the chicken and save the broth", estCalories: 600, estProtein: 24 },
    { day: "Mon", dinner: "seco de frejoles — cilantro beans with a little shredded chicken, over quinoa", estCalories: 560, estProtein: 22 },
    { day: "Tue", dinner: "carapulcra — papa seca stewed with peanut and panca, mote alongside", estCalories: 580, estProtein: 18 },
    { day: "Wed", dinner: "ají de gallina again over potato, the sauce stretched with more bread and milk", estCalories: 580, estProtein: 21 },
    { day: "Thu", dinner: "olluquito — stewed olluco with a little beef, over quinoa", estCalories: 540, estProtein: 19 },
    { day: "Fri", dinner: "seco de frejoles, second night, thicker, with a fried egg on top", estCalories: 560, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: a guiso pooled from every leftover braise, simmered down and ladled over the last potatoes and quinoa", estCalories: 540, estProtein: 20 },
  ],
  shopping: [
    { item: "Dried beans (canario/red)", qty: "1.5 lb", cost: 3.0, spansWeeks: true },
    { item: "Papa seca", qty: "1 lb", cost: 4.0, note: "the heart of carapulcra" },
    { item: "Potatoes", qty: "4 lb", cost: 2.4, note: "under every braise" },
    { item: "Whole chicken (small)", qty: "~3 lb", cost: 6.0, note: "the precious thread — shredded across the week" },
    { item: "Olluco (or canned)", qty: "1 lb", cost: 2.5 },
    { item: "Raw peanuts", qty: "4 oz", cost: 1.0, note: "for carapulcra" },
    { item: "Sandwich bread", qty: "a few slices", cost: 1.0, note: "thickens the ají de gallina" },
    { item: "Evaporated milk", qty: "1 can", cost: 1.2 },
    { item: "Cilantro", qty: "1 big bunch", cost: 1.0, note: "the green that makes a seco a seco" },
    { item: "Aji panca paste", qty: "1 jar", cost: 3.0, spansWeeks: true },
    { item: "Aji amarillo paste", qty: "from the pantry jar", cost: 0.0, spansWeeks: true },
    { item: "Mote (hominy)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Onions, garlic, oil", qty: "the aderezo base", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const anWeek4Quinua: WeekPlan = {
  slug: "an-week-4-quinua",
  number: 4,
  cuisine: "andean",
  theme: "Quinua y Granos",
  title: "Week 4 — Quinua y Granos",
  description:
    "The mother grain as dinner. Quinoa and its cousins — kiwicha, cañihua, barley — were the Inca's protein, and the highland kitchen still cooks them into risotto-like pesq'e, savory atamalada, and griddled kispiño. A week where the cheapest pot on the stove is also the most complete.",
  context:
    `Quinoa was the chisaya mama — the 'mother grain' — of the Inca, prized because it carries complete protein at an altitude where little else grows well. Cooked plain it's a base, but the highland tradition turns it into finished dinners: pesq'e (or p'isqi) simmers quinoa in milk with cheese until it's creamy like a risotto; quinua atamalada is the same grain stewed soft with ají and a little squash; sopa de quinua is the everyday brothy bowl; kispiño are dense little quinoa-flour cakes griddled on a hot stone, the original Andean trail food. The frugality is that a cup of dry quinoa is cheap, keeps for years, swells to feed several, and needs nothing more than milk, cheese, or an egg to become a complete-protein meal — no meat at altitude required.`,
  dishes: [
    "Quinua pesq'e — quinoa simmered in milk with cheese, risotto-style",
    "Quinua atamalada — soft-stewed quinoa with ají and squash",
    "Kispiño — griddled quinoa-flour cakes",
    "Sopa de quinua — the everyday quinoa-and-vegetable soup",
  ],
  proteinNote:
    "Quinoa is a complete protein on its own; milk and cheese in the pesq'e and an egg on the atamalada push it well past the floor. Kispiño plus a quinoa soup is a full, meatless, complete-protein day.",
  bonus: false,
  preciousThread: "A bag of quinoa flour to griddle the kispiño cakes.",
  engine: [
    "Potatoes & tubers — boiled papa to round out the grain bowls, with chuño tucked into the soup (the constant base)",
    "Andean maize — choclo kernels stirred into the atamalada, mote for texture",
    "Ají pastes — amarillo & panca jarred, the warm note under the quinoa stews",
    "Quinoa pot + salsa criolla — a big quinoa pot is literally the engine this week; criolla to top the heavier bowls",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "quinua pesq'e — creamy quinoa with melted cheese, salsa criolla on top", estCalories: 560, estProtein: 21 },
    { day: "Mon", dinner: "quinua atamalada with squash, choclo, and a poached egg", estCalories: 540, estProtein: 19 },
    { day: "Tue", dinner: "sopa de quinua with potato and chuño, queso fresco crumbled in", estCalories: 500, estProtein: 18 },
    { day: "Wed", dinner: "kispiño cakes griddled crisp, served with a fried egg and salsa criolla", estCalories: 560, estProtein: 18 },
    { day: "Thu", dinner: "quinua pesq'e again, thicker, with mote folded through", estCalories: 560, estProtein: 21 },
    { day: "Fri", dinner: "quinua atamalada, second night, with extra cheese and a potato", estCalories: 540, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: leftover pesq'e and atamalada pressed and pan-fried into quinoa cakes, criolla on the side", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "Quinoa", qty: "2 lb", cost: 6.0, note: "the grain the whole week stands on" },
    { item: "Quinoa flour", qty: "1 lb", cost: 3.0, note: "the precious thread — for kispiño" },
    { item: "Queso fresco", qty: "12 oz", cost: 3.5 },
    { item: "Milk", qty: "1/2 gal", cost: 2.2 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Potatoes", qty: "3 lb", cost: 1.8 },
    { item: "Chuño / papa seca", qty: "from the pantry", cost: 0.0, spansWeeks: true },
    { item: "Squash (zapallo)", qty: "1 small", cost: 1.5 },
    { item: "Choclo (Andean corn)", qty: "2 ears", cost: 1.4 },
    { item: "Mote (hominy)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Aji amarillo / panca paste", qty: "from the pantry jars", cost: 0.0, spansWeeks: true },
    { item: "Onions, garlic, limes", qty: "aderezo + criolla", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 25,
  steadyStateWeekly: 16,
};

export const anWeek5Choclo: WeekPlan = {
  slug: "an-week-5-choclo",
  number: 5,
  cuisine: "andean",
  theme: "Choclo y Mote",
  title: "Week 5 — Choclo y Mote",
  description:
    "Andean maize as the meal — the big-kernelled choclo and the hominy mote that the sierra eats fresh, mashed, steamed, and stuffed. Humitas in their husks, a golden pastel de choclo, mote bathed in cheese: the corn here is sweeter and starchier than any cob you know, and it carries dinner.",
  context:
    `Highland maize is its own thing: choclo has fat, milky, low-sugar kernels eaten fresh off the cob or ground, and mote is the dried, big-grained hominy boiled soft. The week's dinners are the classic maize dishes that stand alone as a meal: humitas are fresh-corn dough whipped with a little fat and cheese, wrapped in the husk and steamed (a savory or lightly sweet tamale); pastel de choclo is a baked casserole of ground corn over a savory filling; mote con queso and choclo con queso are the plainest, most beloved supper in the Andes — boiled corn or hominy eaten with a slab of fresh cheese; tamales andinos wrap a seasoned corn dough around a little filling and steam it in leaves. It's frugal because corn is the cheapest abundance at market, and a hunk of cheese is all the protein a plate of it needs.`,
  dishes: [
    "Humitas — steamed fresh-corn dumplings in the husk",
    "Pastel de choclo — baked ground-corn casserole",
    "Mote con queso — boiled hominy with fresh cheese",
    "Choclo con queso — fresh corn on the cob with a slab of cheese",
    "Tamales andinos — corn-dough tamales steamed in leaves",
  ],
  proteinNote:
    "Cheese is the spine: humitas and the mote/choclo plates all pair corn with fresh cheese, and pastel de choclo's filling and an egg in the dough do the rest. A boiled egg or a cup of quinoa alongside clears the floor on the plainest nights.",
  bonus: false,
  preciousThread: "Extra queso fresco — a generous block, because corn and cheese is the whole point.",
  engine: [
    "Potatoes & tubers — boiled papa to set beside the corn plates (the constant base), chuño for body where needed",
    "Andean maize — this week the engine leans hardest here: ears of choclo and a big pot of mote are the centre",
    "Ají pastes — amarillo & panca jarred; ají amarillo brightens the pastel filling and the husk dough",
    "Quinoa pot + salsa criolla — a quinoa side for the lighter nights, criolla to cut the rich corn-and-cheese plates",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "humitas steamed in the husk with cheese, salsa criolla on the side", estCalories: 540, estProtein: 17 },
    { day: "Mon", dinner: "pastel de choclo — ground-corn casserole over a savory filling, egg on top", estCalories: 580, estProtein: 20 },
    { day: "Tue", dinner: "mote con queso — boiled hominy with a thick slab of fresh cheese and aji", estCalories: 500, estProtein: 18 },
    { day: "Wed", dinner: "choclo con queso, two ears, with a quinoa side to round it out", estCalories: 480, estProtein: 16 },
    { day: "Thu", dinner: "humitas again, the sweet-savory batch, with a fried egg", estCalories: 540, estProtein: 18 },
    { day: "Fri", dinner: "tamales andinos steamed in leaves, salsa criolla", estCalories: 560, estProtein: 18 },
    { day: "Sat", dinner: "zero-waste: leftover humita and tamale dough fried into corn cakes, last of the cheese melted over, mote folded in", estCalories: 520, estProtein: 17 },
  ],
  shopping: [
    { item: "Choclo (Andean corn)", qty: "8 ears", cost: 5.0, note: "the centre of the week" },
    { item: "Mote (hominy)", qty: "2 lb dry", cost: 3.0, spansWeeks: true },
    { item: "Queso fresco", qty: "1.5 lb", cost: 5.0, note: "the precious thread — corn wants cheese" },
    { item: "Cornmeal / fresh corn for dough", qty: "1 lb", cost: 1.5 },
    { item: "Corn husks / banana leaves", qty: "1 pack", cost: 2.0 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Potatoes", qty: "3 lb", cost: 1.8 },
    { item: "Onion + raisins/olives (pastel filling)", qty: "small", cost: 2.0 },
    { item: "Aji amarillo paste", qty: "from the pantry jar", cost: 0.0, spansWeeks: true },
    { item: "Quinoa", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Chuño / papa seca", qty: "from the pantry", cost: 0.0, spansWeeks: true },
    { item: "Onions, garlic, limes, lard/oil", qty: "aderezo + criolla + dough fat", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 17,
};

export const anWeek6Habas: WeekPlan = {
  slug: "an-week-6-habas",
  number: 6,
  cuisine: "andean",
  theme: "Habas y Legumbres",
  title: "Week 6 — Habas y Legumbres",
  description:
    "Favas and legumes — the green-and-dried beans that grow high in the cold, where little else will. Habas are eaten fresh-podded, dried and split, toasted into snacks, and stewed soft; lentils and tarwi round out the pot. The cheapest, most protein-dense week of the arc.",
  context:
    `Above the potato line, where nights freeze, the broad bean (haba) thrives — and so the altiplano kitchen leans on it the way warmer places lean on common beans. Habas are eaten every which way: fresh in the pod stewed with potato, dried and simmered into a thick soup, or toasted dry as a crunchy snack. Lentils arrived later and slotted right in; tarwi (the bitter Andean lupin, soaked for days to leach it sweet) is the old high-protein legume of the region. The week's technique is the gentle aderezo plus a long, low simmer that turns dried legumes creamy, with ají panca for color and a little cheese or egg to finish. It is frugal almost to the point of disappearing cost — a bag of dried favas or lentils, an onion, a potato — and it carries more protein per cent than any other week.`,
  dishes: [
    "Sopa de habas — thick dried-fava soup with potato",
    "Habas guisadas — fresh favas stewed with potato and ají",
    "Lentejas andinas — lentils stewed with the aderezo, over rice or quinoa",
    "Tarwi salad / stew — the Andean lupin, soaked sweet",
  ],
  proteinNote:
    "This is the protein week — dried favas, lentils, and tarwi are all dense in it, and a cup of any of them clears the floor before the cheese or egg is even added. No meat needed at all; a poached egg or crumbled cheese is just enrichment.",
  bonus: false,
  preciousThread: "A small bag of tarwi (Andean lupin) — the old high-protein legume, worth the soak.",
  engine: [
    "Potatoes & tubers — boiled papa stewed into the fava and lentil pots (the constant base), chuño in the soup",
    "Andean maize — mote folded into the legume stews for texture, choclo on the side",
    "Ají pastes — panca for the legume braises, amarillo for brightness, jarred and ready",
    "Quinoa pot + salsa criolla — quinoa under the lentils, criolla to lift the earthy bean plates",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "sopa de habas — thick dried-fava soup with potato and chuño, cheese crumbled in", estCalories: 540, estProtein: 22 },
    { day: "Mon", dinner: "lentejas andinas stewed with the aderezo, over quinoa, salsa criolla", estCalories: 560, estProtein: 23 },
    { day: "Tue", dinner: "habas guisadas — fresh favas with potato and ají, a poached egg on top", estCalories: 520, estProtein: 20 },
    { day: "Wed", dinner: "tarwi stew with potato and mote, the soaked lupin gone creamy", estCalories: 540, estProtein: 24 },
    { day: "Thu", dinner: "sopa de habas again, thicker, with a fried egg and toasted bread", estCalories: 540, estProtein: 22 },
    { day: "Fri", dinner: "lentejas andinas, second night, over rice with crumbled cheese", estCalories: 560, estProtein: 23 },
    { day: "Sat", dinner: "zero-waste: a pooled legume stew from all the leftover pots, simmered down over the last potatoes and quinoa", estCalories: 540, estProtein: 22 },
  ],
  shopping: [
    { item: "Dried favas (habas)", qty: "2 lb", cost: 3.6, spansWeeks: true },
    { item: "Lentils", qty: "1.5 lb", cost: 2.4, spansWeeks: true },
    { item: "Tarwi (Andean lupin)", qty: "8 oz", cost: 3.0, note: "the precious thread — soak it sweet" },
    { item: "Potatoes", qty: "4 lb", cost: 2.4 },
    { item: "Queso fresco", qty: "10 oz", cost: 3.0 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Rice", qty: "1 lb", cost: 1.0, spansWeeks: true },
    { item: "Mote (hominy)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Chuño / papa seca", qty: "from the pantry", cost: 0.0, spansWeeks: true },
    { item: "Aji panca / amarillo paste", qty: "from the pantry jars", cost: 0.0, spansWeeks: true },
    { item: "Quinoa", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Onions, garlic, limes, oil", qty: "aderezo + criolla", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 15,
};

export const anWeek7Fiesta: WeekPlan = {
  slug: "an-week-7-fiesta",
  number: 7,
  cuisine: "andean",
  theme: "Anticuchos y Fiesta",
  title: "Week 7 — Anticuchos y Fiesta",
  description:
    "The festival table, frugal-style. The arc closes on the dinners of the street fair and the Sunday gathering — anticuchos skewered and grilled over coals, salchipapas heaped from the fryer, and a celebratory pachamanca-style spread of potatoes and corn. Cheap cuts, big flavor, the cook day a real cook day.",
  context:
    `Andean festival food is built on the thriftiest principle of all: take the cheapest cut or the humblest tuber, season it hard, cook it over fire, and serve it to a crowd. Anticuchos are the proof — beef heart, the offcut nobody wanted, marinated overnight in ají panca, cumin, and vinegar, then skewered and grilled until charred and tender, sold for coins at every corner. Salchipapas is fried potato and sausage, the street supper of the whole region. And the celebratory close echoes pachamanca, the earth-oven feast where potatoes, corn, fava beans, and a little meat are cooked together with herbs — here done in a single pot or pan. The week is a feast on a peasant budget: the splurge is a little marinated heart or sausage, but the plate is still mostly potato and corn.`,
  dishes: [
    "Anticuchos — ají-panca-marinated beef-heart skewers, grilled",
    "Salchipapas — fried potatoes with sausage",
    "Pachamanca-style spread — potatoes, corn, favas, and a little meat",
    "Choclo and papa with ají on the side — the festival garnish plate",
  ],
  proteinNote:
    "A pound of cheap beef heart stretches across the anticucho nights, and sausage carries the salchipapas; favas and an egg round out the spread. Even at festival the protein is small portions of cheap cuts, padded out by potato, corn, and legumes.",
  bonus: false,
  preciousThread: "A pound of beef heart (the cheapest cut at the butcher) to marinate for the anticuchos.",
  engine: [
    "Potatoes & tubers — a big batch of boiled papa for salchipapas, the spread, and the skewer plates (the constant base)",
    "Andean maize — ears of choclo grilled alongside the anticuchos, mote in the festival spread",
    "Ají pastes — panca is the anticucho marinade itself; amarillo for the dipping sauces, both jarred",
    "Quinoa pot + salsa criolla — quinoa for the lighter nights, and salsa criolla is the non-negotiable topper for every fiesta plate",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "anticuchos grilled over coals with boiled papa and choclo, salsa criolla", estCalories: 600, estProtein: 26 },
    { day: "Mon", dinner: "salchipapas — fried potatoes and sliced sausage, ají dips, criolla", estCalories: 620, estProtein: 20 },
    { day: "Tue", dinner: "anticuchos again, the rest of the skewers, with quinoa and ají", estCalories: 580, estProtein: 25 },
    { day: "Wed", dinner: "pachamanca-style pot — potatoes, corn, favas, and a little meat with herbs", estCalories: 580, estProtein: 22 },
    { day: "Thu", dinner: "salchipapas, second night, with a fried egg on top", estCalories: 620, estProtein: 21 },
    { day: "Fri", dinner: "choclo and papa with ají, mote, and the last of the grilled meat", estCalories: 520, estProtein: 18 },
    { day: "Sat", dinner: "zero-waste: a fiesta hash of all the leftover potato, corn, meat, and favas crisped in one pan, egg and criolla on top", estCalories: 560, estProtein: 22 },
  ],
  shopping: [
    { item: "Beef heart", qty: "1 lb", cost: 4.0, note: "the precious thread — the cheapest cut, marinated for anticuchos" },
    { item: "Sausage (cheap)", qty: "12 oz", cost: 3.0, note: "for salchipapas" },
    { item: "Potatoes", qty: "6 lb", cost: 3.6, note: "fries, spread, and skewer plates" },
    { item: "Choclo (Andean corn)", qty: "5 ears", cost: 3.2 },
    { item: "Fresh favas (habas)", qty: "1 lb", cost: 1.6 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Skewers", qty: "1 pack", cost: 1.0 },
    { item: "Cumin + vinegar (marinade)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Aji panca paste", qty: "from the pantry jar (the marinade base)", cost: 0.0, spansWeeks: true },
    { item: "Aji amarillo paste", qty: "from the pantry jar", cost: 0.0, spansWeeks: true },
    { item: "Mote (hominy)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Quinoa", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Onions, garlic, limes, oil", qty: "criolla + frying", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const andeanWeeks: WeekPlan[] = [
  anWeek1Chupes,
  anWeek2Papas,
  anWeek3Guisos,
  anWeek4Quinua,
  anWeek5Choclo,
  anWeek6Habas,
  anWeek7Fiesta,
];
