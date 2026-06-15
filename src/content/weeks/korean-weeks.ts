import type { WeekPlan } from "../types";

// Challenge — Korean home cooking (jip-bap): the frugal "one dinner a night" arc.
// cuisine is "korean". The foundation is constant every week and never a theme:
// steamed short-grain rice (bap), the jang trinity (doenjang / ganjang /
// gochujang) all descended from one fermented meju brick, kimchi the living
// preserve, and a pot of anchovy-kelp stock (myeolchi-dashima yuksu). That
// foundation lives in each week's `engine`; the THEME is the rotating cast of
// dinners you actually eat on top of it — jjigae, bap, namul, bokkeum, guk,
// jeon, and the zero-waste kimchi-and-nurungji finale.
//
// Dinner slugs reference recipes in src/content/recipes/*. The foundation in
// each engine is the unchanging base, shown the same way every week on purpose.

export const krWeek1Jjigae: WeekPlan = {
  slug: "kr-week-1-jjigae",
  number: 1,
  cuisine: "korean",
  theme: "Jjigae",
  title: "Week 1 — Jjigae",
  description:
    "The bubbling little stew that anchors the Korean table. A single earthenware pot of doenjang, kimchi, or soft tofu jjigae, set in the middle and shared, turns a few cents of fermented paste and whatever is in the fridge into a whole dinner over rice. Start here: it's the most everyday way Korea eats.",
  context:
    `Rice is the constant — short-grain bap stretched, in lean times, with barley or other cheaper grains, the bowl everything else exists to flavor. The seasoning trinity all begins in one fermented brick: a block of dried soybeans (meju) becomes salty doenjang paste, the clear ganjang soy that's drawn off it, and — with chili and rice — fiery red gochujang. A jjigae is simply a spoon of one of those jangs loosened in anchovy-kelp stock with kimchi or tofu and a handful of vegetables, so a pot costs almost nothing. Kimchi is the living preserve in the corner of every fridge, and when it turns too sour to eat raw it has a fate: it becomes the soul of kimchi-jjigae. Dried anchovies are the cheap protein and the backbone of the stock, and nothing is wasted — not the sour kimchi, not the rice scorched onto the pot.`,
  dishes: [
    "Doenjang-jjigae (the everyday soybean-paste stew)",
    "Kimchi-jjigae (sour kimchi's destiny)",
    "Sundubu-jjigae (silken soft-tofu stew)",
    "Gyeran-mari and rice alongside",
  ],
  proteinNote:
    "Tofu and dried anchovies carry the floor; a spoon of doenjang and an egg side round each pot out to the protein mark without meat.",
  bonus: false,
  preciousThread: "A tub of fresh soft (silken) tofu for the sundubu-jjigae.",
  engine: [
    "bap — a pot of steamed short-grain rice, stretched with a handful of barley, ready for every bowl",
    "the jang trinity — doenjang, ganjang, and gochujang, all from one meju brick, the seasoning base of every pot",
    "kimchi — the living preserve, a jar maturing in the fridge (the sour batch reserved for jjigae)",
    "myeolchi-dashima yuksu — a pot of dried-anchovy and kelp stock, the cheap broth under every jjigae",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "doenjang-jjigae with rice — the headline pot",
      estCalories: 620,
      estProtein: 22,
    },
    {
      day: "Mon",
      dinner: "kimchi-jjigae with rice, made from the soured kimchi",
      estCalories: 640,
      estProtein: 24,
    },
    {
      day: "Tue",
      dinner: "sundubu-jjigae (soft tofu) with rice and an egg cracked in",
      estCalories: 600,
      estProtein: 20,
    },
    {
      day: "Wed",
      dinner: "doenjang-jjigae again, deepened, with rice and a namul side",
      estCalories: 620,
      estProtein: 21,
    },
    {
      day: "Thu",
      dinner: "gyeran-mari and rice with the last of the doenjang-jjigae",
      estCalories: 640,
      estProtein: 23,
    },
    {
      day: "Fri",
      dinner: "kimchi-jjigae with tofu and rice",
      estCalories: 660,
      estProtein: 25,
    },
    {
      day: "Sat",
      dinner: "a clear-out jjigae — soft tofu, the last vegetables, and rice; nothing wasted",
      estCalories: 650,
      estProtein: 22,
    },
  ],
  shopping: [
    { item: "Short-grain white rice", qty: "5 lb", cost: 4.5, note: "the foundation — the bowl under everything", spansWeeks: true },
    { item: "Pearl barley (to stretch the rice)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Doenjang (soybean paste)", qty: "1 tub", cost: 4.0, spansWeeks: true, note: "the meju brick's first child — powers every jjigae" },
    { item: "Gochujang (red chili paste)", qty: "1 tub", cost: 4.0, spansWeeks: true },
    { item: "Ganjang (soy sauce)", qty: "1 bottle", cost: 3.0, spansWeeks: true },
    { item: "Dried anchovies (myeolchi) + dried kelp (dashima)", qty: "1 bag each", cost: 5.0, spansWeeks: true, note: "the precious thread — stock and cheap protein both" },
    { item: "Soft (silken) tofu", qty: "2 tubs", cost: 2.5 },
    { item: "Firm tofu", qty: "1 block", cost: 1.5 },
    { item: "Napa cabbage kimchi", qty: "1 large jar", cost: 5.0, spansWeeks: true, note: "the living preserve — a sour batch reserved for jjigae" },
    { item: "Onions + scallions", qty: "2 lb / 1 bunch", cost: 2.5 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Zucchini + green chili", qty: "2 / a few", cost: 2.0 },
    { item: "Eggs", qty: "1 dozen", cost: 3.5 },
    { item: "Gochugaru (chili flakes) + toasted sesame oil", qty: "small bag / bottle", cost: 4.0, spansWeeks: true },
  ],
  firstShopTotal: 34,
  steadyStateWeekly: 18,
};

export const krWeek2Bap: WeekPlan = {
  slug: "kr-week-2-bap",
  number: 2,
  cuisine: "korean",
  theme: "Bap & Bibimbap",
  title: "Week 2 — Bap & Bibimbap",
  description:
    "The week the rice bowl becomes the whole dinner. Warm rice topped and mixed — bibimbap crowned with a few namul and an egg, kongnamul-bap steamed over soybean sprouts, gukbap with rice drowned in hot soup — proves that with a good bowl of bap and one good sauce you have eaten well.",
  context:
    `Rice is the constant, and this is the week it takes center stage — short-grain bap stretched with cheaper grains when money is tight, the cushion every other dish exists to flavor. The jang trinity is the dressing: a spoon of gochujang loosened with sesame oil turns a plain bowl into bibimbap, and ganjang seasons the sprouts under kongnamul-bap, all three pastes drawn from one fermented meju brick. Banchan economy is the engine here — three small seasoned vegetable sides become a whole mixed bowl, so nothing on the table is too small to matter. Kimchi sits alongside as the living preserve, dried anchovies build the stock under the gukbap, and the rice scorched onto the pot is saved, never scraped away.`,
  dishes: [
    "Bibimbap (rice mixed with namul, egg, gochujang)",
    "Kongnamul-bap (rice steamed over soybean sprouts)",
    "Gukbap (rice in hot soup)",
    "Nurungji from the scorched pot",
  ],
  proteinNote:
    "An egg on the bibimbap, soybean sprouts in the kongnamul-bap, and anchovy stock in the gukbap clear the floor; the namul fill the bowl out.",
  bonus: false,
  preciousThread: "A bag of soybean sprouts (kongnamul) for the steamed rice and the bowls.",
  engine: [
    "bap — a pot of steamed short-grain rice, stretched with barley, the base of every bowl this week",
    "the jang trinity — doenjang, ganjang, and gochujang from one meju brick; gochujang loosened for the bibimbap",
    "kimchi — the living preserve, a jar maturing in the fridge",
    "myeolchi-dashima yuksu — a pot of anchovy-kelp stock for the gukbap",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "bibimbap — rice, three namul, an egg, and gochujang, mixed",
      estCalories: 640,
      estProtein: 19,
    },
    {
      day: "Mon",
      dinner: "kongnamul-bap — rice steamed over soybean sprouts, with ganjang dressing",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Tue",
      dinner: "gukbap — rice in hot anchovy-stock soup with vegetables",
      estCalories: 620,
      estProtein: 20,
    },
    {
      day: "Wed",
      dinner: "bibimbap again, clearing the week's namul into one bowl",
      estCalories: 650,
      estProtein: 20,
    },
    {
      day: "Thu",
      dinner: "kongnamul-bap with a fried egg and kimchi",
      estCalories: 610,
      estProtein: 19,
    },
    {
      day: "Fri",
      dinner: "gukbap with the last of the stock and a soft egg",
      estCalories: 630,
      estProtein: 21,
    },
    {
      day: "Sat",
      dinner: "nurungji from the scorched pot, simmered into porridge, with kimchi — nothing wasted",
      estCalories: 560,
      estProtein: 14,
    },
  ],
  shopping: [
    { item: "Short-grain white rice (top up)", qty: "3 lb", cost: 2.7, spansWeeks: true },
    { item: "Soybean sprouts (kongnamul)", qty: "1.5 lb", cost: 2.5, note: "the precious thread — sprouts for the rice and the bowls" },
    { item: "Spinach", qty: "2 bunches", cost: 2.5 },
    { item: "Carrots + zucchini", qty: "1 lb / 2", cost: 2.0 },
    { item: "Eggs", qty: "1 dozen", cost: 3.5 },
    { item: "Napa cabbage kimchi (top up)", qty: "1 jar", cost: 3.5, spansWeeks: true },
    { item: "Scallions + onion", qty: "1 bunch / 1 lb", cost: 2.0 },
    { item: "Garlic", qty: "1 head", cost: 0.5, spansWeeks: true },
    { item: "Gochujang + ganjang (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Dried anchovies + kelp (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Toasted sesame oil + sesame seeds (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Dried seaweed (gim)", qty: "1 pack", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 24,
  steadyStateWeekly: 17,
};

export const krWeek3Namul: WeekPlan = {
  slug: "kr-week-3-namul",
  number: 3,
  cuisine: "korean",
  theme: "Namul",
  title: "Week 3 — Namul",
  description:
    "The quiet art of the seasoned vegetable. A handful of greens blanched and dressed with garlic, sesame, and a little ganjang becomes a namul — soybean sprout, spinach, eggplant — and a few of them around a bowl of rice is, by itself, dinner. This is the banchan economy at its purest: nothing too small to season and serve.",
  context:
    `Rice stays the constant beneath the table, stretched with cheaper grains when the month is long. Namul is the banchan economy made visible: a single bunch of spinach or a bag of soybean sprouts, costing pennies, blanched and dressed with ganjang, garlic, and toasted sesame oil into a whole little dish — and three or four of them around rice is a full, balanced dinner with no meat at all. The jang trinity does the seasoning: ganjang for the pale namul, a touch of doenjang or gochujang for the deeper ones, all from one meju brick. Kimchi sits alongside as the living preserve and dried anchovies wait in the pantry for stock and crunch. Every trimmed stem and blanching water has a use; nothing the vegetable gives up is thrown away.`,
  dishes: [
    "Kongnamul-muchim (seasoned soybean sprouts)",
    "Sigeumchi-namul (sesame-dressed spinach)",
    "Gaji-namul (steamed seasoned eggplant)",
    "Rice and kimchi to complete the plate",
  ],
  proteinNote:
    "Soybean sprouts bring real protein; an egg or a spoon of doenjang-jjigae alongside tops the namul plate up to the floor.",
  bonus: false,
  preciousThread: "A bottle of good toasted sesame oil — the soul of every namul.",
  engine: [
    "bap — a pot of steamed short-grain rice, stretched with barley, under every namul plate",
    "the jang trinity — doenjang, ganjang, and gochujang from one meju brick; ganjang dresses the namul",
    "kimchi — the living preserve, a jar maturing in the fridge",
    "myeolchi-dashima yuksu — a pot of anchovy-kelp stock for a quick soup beside the namul",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "a namul plate — kongnamul, sigeumchi, gaji — over rice with kimchi",
      estCalories: 560,
      estProtein: 16,
    },
    {
      day: "Mon",
      dinner: "kongnamul-muchim and rice with an egg and a small doenjang soup",
      estCalories: 580,
      estProtein: 18,
    },
    {
      day: "Tue",
      dinner: "sigeumchi-namul and gaji-namul over rice, with kimchi",
      estCalories: 540,
      estProtein: 14,
    },
    {
      day: "Wed",
      dinner: "the namul plate folded into a quick bibimbap with gochujang",
      estCalories: 620,
      estProtein: 18,
    },
    {
      day: "Thu",
      dinner: "gaji-namul and kongnamul over rice with anchovy soup",
      estCalories: 560,
      estProtein: 16,
    },
    {
      day: "Fri",
      dinner: "sigeumchi-namul, an egg, and rice with kimchi",
      estCalories: 580,
      estProtein: 17,
    },
    {
      day: "Sat",
      dinner: "the week's leftover namul mixed into one rice bowl — nothing wasted",
      estCalories: 600,
      estProtein: 16,
    },
  ],
  shopping: [
    { item: "Short-grain white rice (top up)", qty: "3 lb", cost: 2.7, spansWeeks: true },
    { item: "Toasted sesame oil (good bottle)", qty: "1 bottle", cost: 4.0, spansWeeks: true, note: "the precious thread — the soul of namul" },
    { item: "Soybean sprouts (kongnamul)", qty: "1 lb", cost: 1.8 },
    { item: "Spinach", qty: "2 bunches", cost: 2.5 },
    { item: "Asian eggplant (gaji)", qty: "3", cost: 2.5 },
    { item: "Scallions", qty: "1 bunch", cost: 1.0, spansWeeks: true },
    { item: "Garlic", qty: "1 head", cost: 0.5, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.8 },
    { item: "Napa cabbage kimchi (top up)", qty: "1 jar", cost: 3.5, spansWeeks: true },
    { item: "Ganjang + doenjang (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Dried anchovies + kelp (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Toasted sesame seeds (top up)", qty: "small bag", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 22,
  steadyStateWeekly: 16,
};

export const krWeek4Bokkeum: WeekPlan = {
  slug: "kr-week-4-bokkeum",
  number: 4,
  cuisine: "korean",
  theme: "Bokkeum & Jorim",
  title: "Week 4 — Bokkeum & Jorim",
  description:
    "The stir-fried and the braised-down — the two techniques that turn cheap pantry odds into the most reached-for banchan. Sweet-soy anchovies and potatoes glossed in their own glaze, tofu braised tender, a little pork stretched fiery across a pan: dishes that keep for days and make rice disappear.",
  context:
    `Rice is the constant, stretched when needed with barley, the bowl every glossy banchan rides on. Bokkeum (stir-fried) and jorim (simmered in soy until lacquered) are the thrift techniques: a handful of dried anchovies, a couple of potatoes, a block of tofu, or a little scrap of pork becomes a salty-sweet dish that keeps a week in the fridge and seasons many bowls of rice. Ganjang and gochujang from the one meju brick do the glazing — soy and sugar for the gentle jorim, gochujang for the fiery jeyuk-bokkeum. Dried anchovies are the cheap protein-and-calcium bomb at the heart of myeolchi-bokkeum, kimchi sits alongside as the living preserve, and a little meat is stretched to season a whole pan rather than fill it. Nothing is wasted: even the smallest fish is glazed and eaten.`,
  dishes: [
    "Myeolchi-bokkeum (sweet-soy dried anchovies)",
    "Gamja-jorim (soy-braised potatoes)",
    "Dubu-jorim (braised tofu)",
    "Jeyuk-bokkeum (fiery stir-fried pork)",
  ],
  proteinNote:
    "Dried anchovies and tofu carry the everyday days; the little of pork in jeyuk-bokkeum stretches across the pan to lift the protein on cook day.",
  bonus: false,
  preciousThread: "A half-pound of pork belly or shoulder for the jeyuk-bokkeum, stretched across the pan.",
  engine: [
    "bap — a pot of steamed short-grain rice, stretched with barley, under every glazed banchan",
    "the jang trinity — doenjang, ganjang, and gochujang from one meju brick; ganjang glazes the jorim, gochujang the bokkeum",
    "kimchi — the living preserve, a jar maturing in the fridge",
    "myeolchi-dashima yuksu — a pot of anchovy-kelp stock, the anchovies doubling as the week's banchan",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "jeyuk-bokkeum (fiery pork) with rice and kimchi — the headline",
      estCalories: 700,
      estProtein: 26,
    },
    {
      day: "Mon",
      dinner: "dubu-jorim (braised tofu) with rice and myeolchi-bokkeum",
      estCalories: 620,
      estProtein: 22,
    },
    {
      day: "Tue",
      dinner: "gamja-jorim (soy potatoes) with rice and an egg",
      estCalories: 600,
      estProtein: 16,
    },
    {
      day: "Wed",
      dinner: "myeolchi-bokkeum and dubu-jorim over rice with kimchi",
      estCalories: 610,
      estProtein: 23,
    },
    {
      day: "Thu",
      dinner: "the last of the jeyuk-bokkeum with rice and a namul side",
      estCalories: 680,
      estProtein: 24,
    },
    {
      day: "Fri",
      dinner: "gamja-jorim and myeolchi-bokkeum over rice",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Sat",
      dinner: "a banchan plate of all the week's bokkeum and jorim over rice — nothing wasted",
      estCalories: 640,
      estProtein: 21,
    },
  ],
  shopping: [
    { item: "Short-grain white rice (top up)", qty: "3 lb", cost: 2.7, spansWeeks: true },
    { item: "Pork belly or shoulder (for jeyuk-bokkeum)", qty: "1/2 lb", cost: 3.0, note: "the precious thread — a little meat, a whole fiery pan" },
    { item: "Dried anchovies (jan-myeolchi, for bokkeum)", qty: "1 bag", cost: 3.0, spansWeeks: true, note: "the calcium-and-protein bomb" },
    { item: "Firm tofu", qty: "2 blocks", cost: 3.0 },
    { item: "Potatoes", qty: "2 lb", cost: 1.5 },
    { item: "Onion + scallions", qty: "1 lb / 1 bunch", cost: 2.0 },
    { item: "Garlic + ginger", qty: "1 head / 1 knob", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.8 },
    { item: "Napa cabbage kimchi (top up)", qty: "1 jar", cost: 3.5, spansWeeks: true },
    { item: "Gochujang + ganjang + gochugaru (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Rice syrup or honey + sugar", qty: "1 bottle / small bag", cost: 2.5, spansWeeks: true },
    { item: "Dried kelp (dashima, top up)", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const krWeek5Guk: WeekPlan = {
  slug: "kr-week-5-guk",
  number: 5,
  cuisine: "korean",
  theme: "Guk",
  title: "Week 5 — Guk",
  description:
    "The clear soup beside the rice. Lighter and brothier than jjigae, a guk is a bowl of anchovy-kelp stock carrying seaweed, soybean sprouts, or rice cakes — the gentle, warming bowl Koreans eat almost every day, and the cheapest way to turn a pot of stock into dinner.",
  context:
    `Rice is the constant, stretched with cheaper grains when the budget is tight, and guk is the soup it sits beside — or in. Where jjigae is thick and shared, a guk is a clear, light brothy bowl, and almost all of them begin in the same pennies-worth of anchovy-kelp stock, dried anchovies being the cheap protein-and-calcium backbone of the Korean kitchen. The jang trinity seasons each pot from one meju brick: doenjang depth, ganjang clarity, a little gochujang heat. Miyeokguk stretches a handful of dried seaweed into a nourishing bowl; kongnamul-guk turns a bag of sprouts into soup; tteokguk floats thrifty rice cakes. Kimchi waits alongside as the living preserve, and the stock's spent anchovies and kelp are simmered to the last of their flavor before anything is thrown out.`,
  dishes: [
    "Miyeokguk (seaweed soup)",
    "Kongnamul-guk (soybean sprout soup)",
    "Tteokguk (rice cake soup)",
    "Rice and kimchi alongside",
  ],
  proteinNote:
    "Anchovy stock, soybean sprouts, and an egg stirred into the tteokguk carry the protein; rice and kimchi complete each bowl.",
  bonus: false,
  preciousThread: "A bag of sliced rice cakes (tteok) for the tteokguk.",
  engine: [
    "bap — a pot of steamed short-grain rice, stretched with barley, beside or in every guk",
    "the jang trinity — doenjang, ganjang, and gochujang from one meju brick, seasoning each soup",
    "kimchi — the living preserve, a jar maturing in the fridge",
    "myeolchi-dashima yuksu — a big pot of anchovy-kelp stock, the base of every guk this week",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "miyeokguk (seaweed soup) with rice and kimchi",
      estCalories: 560,
      estProtein: 16,
    },
    {
      day: "Mon",
      dinner: "kongnamul-guk (sprout soup) with rice and an egg",
      estCalories: 580,
      estProtein: 18,
    },
    {
      day: "Tue",
      dinner: "tteokguk (rice cake soup) with egg ribbons and seaweed",
      estCalories: 660,
      estProtein: 19,
    },
    {
      day: "Wed",
      dinner: "miyeokguk again, deepened, with rice and a namul side",
      estCalories: 560,
      estProtein: 16,
    },
    {
      day: "Thu",
      dinner: "kongnamul-guk with rice and myeolchi-bokkeum",
      estCalories: 590,
      estProtein: 20,
    },
    {
      day: "Fri",
      dinner: "tteokguk with the last of the stock and a soft egg",
      estCalories: 650,
      estProtein: 18,
    },
    {
      day: "Sat",
      dinner: "a clear-out guk — the spent stock, the last sprouts and seaweed, rice; nothing wasted",
      estCalories: 560,
      estProtein: 15,
    },
  ],
  shopping: [
    { item: "Short-grain white rice (top up)", qty: "3 lb", cost: 2.7, spansWeeks: true },
    { item: "Sliced rice cakes (tteok)", qty: "1.5 lb", cost: 3.0, note: "the precious thread — for the tteokguk" },
    { item: "Dried seaweed (miyeok)", qty: "1 pack", cost: 2.5, spansWeeks: true },
    { item: "Soybean sprouts (kongnamul)", qty: "1 lb", cost: 1.8 },
    { item: "Dried anchovies + kelp (dashima)", qty: "1 bag each", cost: 3.5, spansWeeks: true, note: "the stock that carries the week" },
    { item: "Eggs", qty: "1 dozen", cost: 3.5 },
    { item: "Scallions + garlic", qty: "1 bunch / 1 head", cost: 1.5, spansWeeks: true },
    { item: "Napa cabbage kimchi (top up)", qty: "1 jar", cost: 3.5, spansWeeks: true },
    { item: "Doenjang + ganjang (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Toasted sesame oil (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Dried seaweed (gim, top up)", qty: "1 pack", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 24,
  steadyStateWeekly: 16,
};

export const krWeek6Jeon: WeekPlan = {
  slug: "kr-week-6-jeon",
  number: 6,
  cuisine: "korean",
  theme: "Jeon",
  title: "Week 6 — Jeon",
  description:
    "The savory pancake and the steamed egg — the thrifty way to turn a cup of flour, a few eggs, and whatever vegetable or sour kimchi is on hand into something that feels like a treat. Crisp kimchi-jeon, scallion pajeon, billowing gyeran-jjim, rolled gyeran-mari: cheap ingredients, a celebratory plate.",
  context:
    `Rice is still the constant beside the plate, and jeon is what a Korean kitchen makes when it wants something festive from almost nothing — a batter of flour and egg binding whatever is in the fridge into a golden pan-fried round. Sour kimchi too far gone to eat raw finds another fate here, chopped into the batter for kimchi-jeon; a bunch of scallions becomes pajeon; a few eggs alone billow into steamed gyeran-jjim or roll into gyeran-mari. The jang trinity seasons the dipping sauce — ganjang sharpened with vinegar and a pinch of gochugaru — all from the one meju brick. Eggs and a little flour are the cheap protein and body, kimchi the living preserve doing double duty, and the batter is the great leveler: no scrap of vegetable is too small to disappear into a jeon, so nothing is wasted.`,
  dishes: [
    "Kimchi-jeon (sour kimchi pancake)",
    "Pajeon (scallion pancake)",
    "Gyeran-jjim (steamed egg)",
    "Gyeran-mari (rolled omelette)",
  ],
  proteinNote:
    "Eggs do the heavy lifting — gyeran-jjim and gyeran-mari are nearly all egg, and the jeon carry more; rice and kimchi round each plate to the floor.",
  bonus: false,
  preciousThread: "A dozen good eggs — the body of the jjim, the mari, and the binding of every jeon.",
  engine: [
    "bap — a pot of steamed short-grain rice, stretched with barley, beside every jeon plate",
    "the jang trinity — doenjang, ganjang, and gochujang from one meju brick; ganjang makes the dipping sauce",
    "kimchi — the living preserve, the sour batch chopped into the kimchi-jeon",
    "myeolchi-dashima yuksu — a pot of anchovy-kelp stock to steam the gyeran-jjim and for a soup alongside",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "kimchi-jeon with rice and a ganjang dipping sauce — the headline",
      estCalories: 640,
      estProtein: 18,
    },
    {
      day: "Mon",
      dinner: "pajeon (scallion pancake) with rice and kimchi",
      estCalories: 660,
      estProtein: 17,
    },
    {
      day: "Tue",
      dinner: "gyeran-jjim (steamed egg) with rice and a namul side",
      estCalories: 560,
      estProtein: 20,
    },
    {
      day: "Wed",
      dinner: "gyeran-mari (rolled omelette) with rice and kimchi",
      estCalories: 600,
      estProtein: 21,
    },
    {
      day: "Thu",
      dinner: "kimchi-jeon again from the last sour kimchi, with rice",
      estCalories: 640,
      estProtein: 18,
    },
    {
      day: "Fri",
      dinner: "pajeon and gyeran-jjim over rice with a dipping sauce",
      estCalories: 660,
      estProtein: 22,
    },
    {
      day: "Sat",
      dinner: "a clear-out jeon — every leftover vegetable battered and fried, with rice; nothing wasted",
      estCalories: 650,
      estProtein: 19,
    },
  ],
  shopping: [
    { item: "Short-grain white rice (top up)", qty: "3 lb", cost: 2.7, spansWeeks: true },
    { item: "Eggs", qty: "2 dozen", cost: 7.0, note: "the precious thread — the body of every jjim, mari, and jeon" },
    { item: "All-purpose flour + frying mix", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Scallions (for pajeon)", qty: "2 bunches", cost: 2.0 },
    { item: "Onion + carrot + green chili", qty: "1 lb / 2 / a few", cost: 2.5 },
    { item: "Garlic", qty: "1 head", cost: 0.5, spansWeeks: true },
    { item: "Napa cabbage kimchi (sour, for jeon)", qty: "1 jar", cost: 4.0, spansWeeks: true, note: "the soured batch finds its fate in the batter" },
    { item: "Ganjang + gochugaru (for dipping sauce, top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Rice vinegar", qty: "1 bottle", cost: 2.0, spansWeeks: true },
    { item: "Neutral frying oil", qty: "1 bottle", cost: 3.0, spansWeeks: true },
    { item: "Dried anchovies + kelp (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Toasted sesame oil + seeds (top up)", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const krWeek7Kimchi: WeekPlan = {
  slug: "kr-week-7-kimchi",
  number: 7,
  cuisine: "korean",
  theme: "Kimchi & Nurungji",
  title: "Week 7 — Kimchi & Nurungji",
  description:
    "The zero-waste finale, built on the two things every Korean fridge always holds too much of: sour kimchi and leftover rice. Fry them into kimchi-bokkeumbap, scorch the pot for nurungji, toss the last noodles into spicy bibim-guksu — the week that proves nothing in this kitchen is ever thrown away.",
  context:
    `Rice is the constant, and this week it comes full circle: the cold leftover bap that other days might toss becomes the very point of the meal. Kimchi is the living preserve, and the over-sour batch — too sharp to eat raw — meets its destiny fried hard into kimchi-bokkeumbap, where age only makes it better. The scorched crust at the bottom of the rice pot, scraped off and binned by other cuisines, is reclaimed as nurungji: eaten crisp by hand or simmered soft into porridge. The jang trinity seasons it all from one meju brick — gochujang fires the bibim-guksu sauce, ganjang the dressings. Dried anchovies still wait in the pantry as the cheap protein, and this is the week that names the whole ethic out loud: nothing — not sour kimchi, not stale rice, not the burnt crust on the pot — is ever wasted.`,
  dishes: [
    "Kimchi-bokkeumbap (kimchi fried rice)",
    "Nurungji (scorched-rice crust and porridge)",
    "Bibim-guksu (spicy cold noodles)",
    "Rice and the last of the banchan",
  ],
  proteinNote:
    "An egg on the bokkeumbap and the bibim-guksu, plus dried anchovies and any leftover banchan, carry the floor across a deliberately scrappy week.",
  bonus: false,
  preciousThread: "A bundle of somyeon (thin wheat noodles) for the bibim-guksu.",
  engine: [
    "bap — a pot of steamed short-grain rice; the cold leftovers and the scorched crust are the whole point this week",
    "the jang trinity — doenjang, ganjang, and gochujang from one meju brick; gochujang fires the bibim-guksu",
    "kimchi — the living preserve, the over-sour batch destined for the fried rice",
    "myeolchi-dashima yuksu — a pot of anchovy-kelp stock for a soup beside the scrappy dinners",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "kimchi-bokkeumbap from day-old rice and sour kimchi, with a fried egg",
      estCalories: 660,
      estProtein: 18,
    },
    {
      day: "Mon",
      dinner: "bibim-guksu (spicy cold noodles) with cucumber and egg",
      estCalories: 640,
      estProtein: 17,
    },
    {
      day: "Tue",
      dinner: "nurungji-bap — the scorched crust simmered into porridge, with kimchi",
      estCalories: 560,
      estProtein: 14,
    },
    {
      day: "Wed",
      dinner: "kimchi-bokkeumbap again, clearing the sour kimchi, with an egg",
      estCalories: 660,
      estProtein: 18,
    },
    {
      day: "Thu",
      dinner: "bibim-guksu with the last of the noodles and leftover banchan",
      estCalories: 640,
      estProtein: 17,
    },
    {
      day: "Fri",
      dinner: "nurungji eaten crisp by hand with a bowl of anchovy soup and kimchi",
      estCalories: 580,
      estProtein: 15,
    },
    {
      day: "Sat",
      dinner: "the grand zero-waste finale — every leftover fried into one last kimchi-bokkeumbap; nothing wasted",
      estCalories: 680,
      estProtein: 19,
    },
  ],
  shopping: [
    { item: "Short-grain white rice (top up)", qty: "3 lb", cost: 2.7, spansWeeks: true },
    { item: "Somyeon (thin wheat noodles)", qty: "2 lb", cost: 2.5, note: "the precious thread — for the bibim-guksu" },
    { item: "Napa cabbage kimchi (sour, for bokkeumbap)", qty: "1 large jar", cost: 4.5, spansWeeks: true, note: "the over-sour batch meets its fate" },
    { item: "Eggs", qty: "1 dozen", cost: 3.5 },
    { item: "Cucumber", qty: "2", cost: 1.0 },
    { item: "Scallions + garlic", qty: "1 bunch / 1 head", cost: 1.5, spansWeeks: true },
    { item: "Dried anchovies + kelp (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Gochujang + gochugaru (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Rice vinegar + sugar (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Toasted sesame oil + seeds (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Dried seaweed (gim, top up)", qty: "1 pack", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 25,
  steadyStateWeekly: 16,
};

export const koreanWeeks: WeekPlan[] = [
  krWeek1Jjigae,
  krWeek2Bap,
  krWeek3Namul,
  krWeek4Bokkeum,
  krWeek5Guk,
  krWeek6Jeon,
  krWeek7Kimchi,
];
