import type { WeekPlan } from "../types";

// Challenge — Cantonese: jia-chang-cai, the southern-Chinese home table.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "cantonese"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine.
//
// RULE #6 — the FOUNDATION is a constant present every week and lives in each
// week's `engine`, never as a theme: steamed jasmine rice (faahn), the
// ginger-scallion-soy base, a pot of superior/master stock (lou-soi), and
// lard/peanut oil, with congee (jook) as the ultimate thrift base for scraps.
// The themes (stir-fry, steamed, congee & noodles, claypot & lou-soi, slow
// soups, tofu & veg, dim sum) are facets of the meal you actually eat as that
// night's dinner — not the rice-and-stock base itself.
//
// Dinner text is lowercase; Saturday is always zero-waste (leftovers into
// congee or fried rice).

export const ctWeek1StirFry: WeekPlan = {
  slug: "ct-week-1-stir-fry",
  number: 1,
  cuisine: "cantonese",
  theme: "Rice & Stir-Fry",
  title: "Week 1 — Rice & Stir-Fry",
  description:
    "The hot wok and the bowl of rice — the everyday engine of the Cantonese kitchen. A scrap of velveted beef, an egg, a splash of oyster sauce, and a wok of greens hit by real wok hei become a full dinner in minutes. This is how the south eats vegetables and stretches a little meat across a whole table of rice.",
  context:
    `Stir-fry (chaau) is the weeknight workhorse of Cantonese home cooking: blistering heat, fast hands, almost nothing in the wok but a vegetable, garlic, and a sauce. A few ounces of beef velveted with cornstarch and a touch of soy go far when the fire does the work, seasoning a plate of rice rather than carrying it. Gai lan blanched and slicked with oyster sauce is a whole bunch of greens for pennies; stir-fried tomato and egg is the most beloved cheap supper in the country, sweet-tart and silky over rice. The plate stays balanced — faahn (rice) for fullness, a little sung (the dish) for flavor, a steamed egg or soup for softness. The genius is wok hei, the smoky breath of the seared wok, which makes the plainest greens taste like a banquet. Yesterday's rice fries up or simmers into jook; nothing is thrown out.`,
  dishes: [
    "Gai lan in oyster sauce",
    "Stir-fried tomato & egg",
    "Home-style beef & greens",
    "Steamed egg",
  ],
  proteinNote:
    "A few ounces of beef velveted thin, plus eggs and tofu, carry the protein; the greens are the volume. Oyster sauce and soy tie it all to the rice.",
  bonus: false,
  preciousThread: "A bunch of gai lan and a small piece of flank steak to velvet.",
  engine: [
    "steamed jasmine rice — a pot of fluffy faahn, the bowl under every dinner (the constant base)",
    "ginger-scallion-soy base — the aromatics, light/dark soy, oyster sauce, and Shaoxing that dress every wok",
    "stock — a pot of superior stock simmered from bones, reused and topped up for sauces and soups",
    "lard/peanut oil + congee — the cooking fat for the wok, and jook as the thrift base for scraps",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "home-style beef & gai lan over steamed rice, with a steamed egg", estCalories: 560, estProtein: 26 },
    { day: "Mon", dinner: "stir-fried tomato & egg over rice", estCalories: 480, estProtein: 18 },
    { day: "Tue", dinner: "gai lan in oyster sauce with the leftover beef, over rice", estCalories: 500, estProtein: 22 },
    { day: "Wed", dinner: "stir-fried choy sum with garlic and a fried egg, over rice", estCalories: 470, estProtein: 17 },
    { day: "Thu", dinner: "beef & greens chaau, the last of the steak, over rice", estCalories: 540, estProtein: 24 },
    { day: "Fri", dinner: "silky steamed egg with scallion-soy and a side of greens, over rice", estCalories: 460, estProtein: 18 },
    { day: "Sat", dinner: "zero-waste: leftover beef, greens, and egg fried into a wok of rice (caau faahn)", estCalories: 500, estProtein: 20 },
  ],
  shopping: [
    { item: "Jasmine rice", qty: "5 lb", cost: 5.0, spansWeeks: true, note: "the base under every dinner" },
    { item: "Light & dark soy, oyster sauce, Shaoxing", qty: "bottles", cost: 5.0, spansWeeks: true, note: "the soy-base that dresses the whole arc" },
    { item: "Flank or sirloin steak (to velvet)", qty: "~3/4 lb", cost: 4.0, note: "the precious thread — a little meat for a wok of greens" },
    { item: "Gai lan + choy sum", qty: "2 bunches", cost: 3.0 },
    { item: "Tomatoes", qty: "~1 1/2 lb", cost: 2.0 },
    { item: "Eggs", qty: "1 dozen", cost: 3.0 },
    { item: "Ginger, scallions, garlic", qty: "assorted", cost: 2.5, spansWeeks: true },
    { item: "Cornstarch (for velveting) + sugar", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Pork or chicken bones (for stock)", qty: "~1 lb", cost: 1.5 },
    { item: "Lard / peanut oil", qty: "1 tub / bottle", cost: 3.0, spansWeeks: true },
    { item: "White pepper + sesame oil", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Dried shiitake (for the stock & sauces)", qty: "small bag", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 33,
  steadyStateWeekly: 19,
};

export const ctWeek2Steamed: WeekPlan = {
  slug: "ct-week-2-steamed",
  number: 2,
  cuisine: "cantonese",
  theme: "Steamed",
  title: "Week 2 — Steamed",
  description:
    "Steaming (ching) is the most Cantonese technique there is — the one that prizes the natural taste of the ingredient above all. A whole fish, a patty of minced pork, or spare ribs in black bean cook gently over the same rice pot, fat and juices kept, nothing fried away. This is delicacy on a budget: fresh, clean, and almost free of oil.",
  context:
    `Cantonese cooking holds freshness and the natural sweetness of an ingredient as the highest ideals, and steaming is how it honors them. A whole cheap fish, dressed with nothing but ginger, scallion, and a scald of hot oil over soy, comes out silky and tasting purely of itself — the cooking that defines the cuisine. Steaming is also pure thrift: a single steamer basket can sit right over the rice pot, cooking dinner on the same flame, and humble cuts shine — a flat patty of minced pork (jing yuhk beng) studded with salted fish or water chestnut, or spare ribs tossed with fermented black beans and garlic. Almost no oil, no waste of juices, and the steamed savory egg (jing daahn) turns a couple of eggs and stock into a custard for the whole table. The ginger-scallion-soy base does the seasoning; the rice does the eating.`,
  dishes: [
    "Cantonese steamed fish",
    "Steamed pork patty",
    "Steamed spare ribs with black bean",
    "Steamed egg",
  ],
  proteinNote:
    "A whole cheap fish, a little minced pork, and spare ribs spread thin season the rice; the steamed egg stretches a couple of eggs and stock into a dish for everyone.",
  bonus: false,
  preciousThread: "A whole fresh fish — tilapia or bream — for the centerpiece steam.",
  engine: [
    "steamed jasmine rice — the pot of faahn the steamer basket sits right over (the constant base)",
    "ginger-scallion-soy base — the ginger, scallion, light soy, and a scald of hot oil that dress every steam",
    "stock — the superior stock, simmered and reused, for the silky steamed egg and sauces",
    "lard/peanut oil + congee — a spoon of oil to finish, and jook as the thrift base for scraps",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "whole steamed fish with ginger & scallion, over rice", estCalories: 520, estProtein: 30 },
    { day: "Mon", dinner: "steamed pork patty with water chestnut, over rice", estCalories: 540, estProtein: 24 },
    { day: "Tue", dinner: "steamed spare ribs with black bean & garlic, over rice", estCalories: 560, estProtein: 26 },
    { day: "Wed", dinner: "silky steamed egg with the leftover fish flaked in, over rice", estCalories: 480, estProtein: 20 },
    { day: "Thu", dinner: "steamed pork patty again with a salted egg, over rice", estCalories: 540, estProtein: 23 },
    { day: "Fri", dinner: "steamed spare ribs with greens steamed alongside, over rice", estCalories: 550, estProtein: 25 },
    { day: "Sat", dinner: "zero-waste: flaked fish, pork, and ribs simmered into a savory jook", estCalories: 460, estProtein: 22 },
  ],
  shopping: [
    { item: "Whole fresh fish (tilapia/bream)", qty: "~1 1/2 lb", cost: 5.0, note: "the precious thread — the centerpiece steam" },
    { item: "Ground/minced pork", qty: "~3/4 lb", cost: 3.0 },
    { item: "Pork spare ribs", qty: "~1 lb", cost: 3.5 },
    { item: "Eggs", qty: "1 dozen", cost: 3.0 },
    { item: "Fermented black beans (douchi)", qty: "small bag", cost: 1.5, spansWeeks: true },
    { item: "Water chestnut + dried shiitake", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Ginger + scallions + garlic", qty: "assorted", cost: 2.5, spansWeeks: true },
    { item: "Light & dark soy (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Greens — choy sum / bok choy", qty: "2 bunches", cost: 2.5 },
    { item: "Salted egg", qty: "2", cost: 1.0 },
    { item: "Peanut oil + sesame oil + white pepper", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const ctWeek3Congee: WeekPlan = {
  slug: "ct-week-3-congee",
  number: 3,
  cuisine: "cantonese",
  theme: "Congee & Noodles",
  title: "Week 3 — Congee & Noodles",
  description:
    "The one-bowl meals that stretch a little the furthest. A handful of rice and water become jook — silky congee for the whole house; a few wontons and a coil of egg noodle make a fragrant soup; flat ho fun noodles seared in the wok soak up beef and wok hei. Frugal feeding at its most comforting.",
  context:
    `When rice and a few scraps must feed everyone, they become a bowl. Jook — Cantonese congee — simmers a handful of rice (often yesterday's leftover rice) in plenty of water and a little stock until it collapses into a silky, soothing porridge; a single century egg and a few slivers of pork turn it into a dish for the sick, the young, and the broke alike, and it is the purest no-waste move in the cuisine. Noodles do the same generous work: a dozen folded wontons of minced pork and shrimp drop into a clear stock with a nest of springy egg noodle (wonton mein), and flat rice ho fun seared hard in the wok with a little beef and bean sprouts (gon caau ngàuh hó) eats like a feast for the price of a snack. Stock is the spine of every bowl, white pepper and scallion the finish — the cheap bowl made abundant, with stale rice as the porridge's whole reason for being.`,
  dishes: [
    "Congee (jook)",
    "Century egg & pork congee",
    "Wonton noodle soup",
    "Beef chow ho fun",
  ],
  proteinNote:
    "A century egg, a little pork and shrimp in the wontons, and a few ounces of beef for the ho fun spread the protein across whole bowls of grain and noodle.",
  bonus: false,
  preciousThread: "A pack of century eggs and a coil of fresh wonton noodles.",
  engine: [
    "steamed jasmine rice — the pot of faahn whose leftovers become the jook (the constant base)",
    "ginger-scallion-soy base — the ginger, scallion, soy, and white pepper that season every bowl",
    "stock — the superior stock, the spine of the congee and the wonton soup",
    "lard/peanut oil + congee — a slick of oil for the noodles, and jook itself as the thrift base",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "century egg & pork congee from the stock pot", estCalories: 460, estProtein: 22 },
    { day: "Mon", dinner: "wonton noodle soup — folded pork-and-shrimp wontons in clear stock", estCalories: 540, estProtein: 26 },
    { day: "Tue", dinner: "beef chow ho fun seared in the wok with bean sprouts", estCalories: 620, estProtein: 27 },
    { day: "Wed", dinner: "plain jook with the leftover wontons and scallion oil", estCalories: 480, estProtein: 20 },
    { day: "Thu", dinner: "wonton noodle soup again with greens, over a fresh nest", estCalories: 540, estProtein: 25 },
    { day: "Fri", dinner: "beef chow ho fun with the last of the bean sprouts and scallion", estCalories: 600, estProtein: 24 },
    { day: "Sat", dinner: "zero-waste: every scrap — pork, beef, greens — simmered into a clear-out jook", estCalories: 440, estProtein: 19 },
  ],
  shopping: [
    { item: "Century eggs (pei daan)", qty: "1 pack", cost: 2.5, note: "the precious thread — turns plain jook into a meal" },
    { item: "Fresh wonton noodles", qty: "1 lb", cost: 2.0, spansWeeks: true },
    { item: "Flat rice noodles (ho fun)", qty: "1 lb fresh", cost: 2.5 },
    { item: "Ground pork + small shrimp (for wontons)", qty: "~3/4 lb total", cost: 4.0 },
    { item: "Beef, thin-sliced (for ho fun)", qty: "~1/2 lb", cost: 3.0 },
    { item: "Wonton wrappers", qty: "1 pack", cost: 1.5 },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Bean sprouts + scallions", qty: "", cost: 2.0 },
    { item: "Pork/chicken bones (stock top up)", qty: "~1 lb", cost: 1.5 },
    { item: "Ginger + garlic + greens", qty: "assorted", cost: 2.5, spansWeeks: true },
    { item: "Light/dark soy + sesame oil (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "White pepper + cornstarch", qty: "small", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const ctWeek4Claypot: WeekPlan = {
  slug: "ct-week-4-claypot",
  number: 4,
  cuisine: "cantonese",
  theme: "Claypot & Lou-Soi",
  title: "Week 4 — Claypot & Lou-Soi",
  description:
    "The claypot and the master stock — two ways the south builds deep flavor from almost nothing. Rice cooked in a clay pot until it crackles into golden crust, dressed with a little sausage and greens; chicken and pork belly poached in lou-soi, the soy master sauce kept and reused for years. Slow, rich, and endlessly thrifty.",
  context:
    `Two great economies meet this week. The claypot (boU jái faahn) cooks rice and its topping in one vessel over a low flame until the bottom forms a prized golden crust (faahn ziu); a single lap cheong sausage, a few slices of marinated chicken, and a handful of greens flavor a whole pot of rice, and the crust is the cook's reward. The other is lou-soi — the master stock, a soy-and-spice braise (star anise, rock sugar, ginger, dried tangerine peel) that is kept, strained, and topped up for months or years, deepening every time. Soy-sauce chicken (si yauh gai) and lou-soi braised pork take their mahogany gloss from it, and the same pot lacquers pork belly braised with taro until it falls apart. Nothing is wasted: the lou-soi never dies, the claypot crust is scraped clean, and the braise's last spoonfuls go over rice. The ginger-scallion-soy base seasons what the stock doesn't; the rice does the eating.`,
  dishes: [
    "Claypot rice",
    "Soy sauce chicken",
    "Lou soi braised pork",
    "Soy-braised pork belly with taro",
  ],
  proteinNote:
    "A little lap cheong, soy-sauce chicken, and braised pork spread across the claypot rice and lou-soi pot; the master stock makes a small amount of meat taste rich and deep.",
  bonus: false,
  preciousThread: "A pair of lap cheong (cured sausage) and a chicken leg quarter for the lou-soi.",
  engine: [
    "steamed jasmine rice — the faahn, here also crackled into golden claypot crust (the constant base)",
    "ginger-scallion-soy base — the aromatics and soy that season the claypot and finish the braise",
    "stock — the lou-soi master stock, kept, strained, and topped up to lacquer every braise",
    "lard/peanut oil + congee — oil to slick the claypot, and jook as the thrift base for scraps",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "claypot rice with lap cheong, chicken, and greens, golden crust and all", estCalories: 640, estProtein: 26 },
    { day: "Mon", dinner: "soy sauce chicken from the lou-soi pot, over rice with blanched greens", estCalories: 580, estProtein: 30 },
    { day: "Tue", dinner: "lou-soi braised pork over rice, the stock deepened", estCalories: 620, estProtein: 27 },
    { day: "Wed", dinner: "soy-braised pork belly with taro, over rice", estCalories: 660, estProtein: 25 },
    { day: "Thu", dinner: "claypot rice again with the leftover soy-sauce chicken and an egg", estCalories: 620, estProtein: 24 },
    { day: "Fri", dinner: "the last lou-soi pork and taro over rice with greens", estCalories: 600, estProtein: 24 },
    { day: "Sat", dinner: "zero-waste: claypot crust and every braised scrap fried into a wok of rice", estCalories: 580, estProtein: 22 },
  ],
  shopping: [
    { item: "Lap cheong (cured sausage)", qty: "1 pack", cost: 3.0, note: "the precious thread — sweet, fatty depth for the claypot" },
    { item: "Chicken (leg quarters / whole legs)", qty: "~2 lb", cost: 4.0 },
    { item: "Pork belly", qty: "~1 lb", cost: 3.5 },
    { item: "Taro root", qty: "~1 lb", cost: 1.5 },
    { item: "Star anise, rock sugar, dried tangerine peel (for lou-soi)", qty: "small", cost: 2.5, spansWeeks: true },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Light & dark soy (top up for lou-soi)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Greens — gai lan / choy sum", qty: "2 bunches", cost: 2.5 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Ginger + scallions + garlic", qty: "assorted", cost: 2.5, spansWeeks: true },
    { item: "Shaoxing wine + sesame oil (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Peanut oil (for the claypot)", qty: "", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 20,
};

export const ctWeek5Soup: WeekPlan = {
  slug: "ct-week-5-soup",
  number: 5,
  cuisine: "cantonese",
  theme: "Lou Fo Tong (Slow Soups)",
  title: "Week 5 — Lou Fo Tong (Slow Soups)",
  description:
    "The slow-simmered soups that are the heart of the Cantonese home table — and its medicine cabinet. A handful of pork bones, a vegetable, and a few dried treasures simmer for hours into a clear, nourishing tong that opens nearly every dinner. Cheap bones, long fire, and the wisdom of yeet hay balance.",
  context:
    `No Cantonese dinner feels complete without lou fo tong — the "old fire soup," a clear broth simmered slowly for two or three hours from a few cheap pork bones, a seasonal vegetable, and a handful of dried treasures (red dates, goji, dried scallop, almond). It is frugal nourishment and food-as-medicine at once: each soup is brewed to balance the body's yeet hay (heatiness), cooling in summer, warming in winter, restorative when someone is run down. Winter melon and pork-bone soup cools; ABC soup (potato, carrot, tomato, onion, pork bone) is the gentle everyday pot; watercress and pork soup clears the heat. A pound of bones and a few cents of dried goods feed the whole table for days, and the simmered-out bones and vegetables aren't wasted — they become the night's side. Each soup comes with rice and a quick stir-fry; the soup is the soul of the meal, the rice does the eating, and nothing of the long, slow pot is thrown away.`,
  dishes: [
    "Winter melon & pork bone soup",
    "ABC soup",
    "Watercress & pork soup",
    "Each with rice and a quick stir-fry",
  ],
  proteinNote:
    "Pork bones and a little simmered pork carry the broth's protein; the meat boiled soft becomes a side, and a quick stir-fry with an egg or tofu rounds the floor.",
  bonus: false,
  preciousThread: "A handful of dried scallop and red dates to enrich the soups.",
  engine: [
    "steamed jasmine rice — the faahn every soup-and-stir-fry plate rests on (the constant base)",
    "ginger-scallion-soy base — the aromatics and soy for the stir-fry the soup accompanies",
    "stock — the lou fo tong itself, the long-simmered old-fire soup that is the spine of every dinner",
    "lard/peanut oil + congee — oil for the wok, and jook as the thrift base for leftover rice and soup meat",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "winter melon & pork-bone soup with rice and a gai lan stir-fry", estCalories: 540, estProtein: 24 },
    { day: "Mon", dinner: "ABC soup with rice and stir-fried tomato & egg", estCalories: 520, estProtein: 20 },
    { day: "Tue", dinner: "watercress & pork soup with rice and a tofu stir-fry", estCalories: 510, estProtein: 22 },
    { day: "Wed", dinner: "winter melon soup again with rice and the boiled soup-pork as a side", estCalories: 530, estProtein: 23 },
    { day: "Thu", dinner: "ABC soup with rice and stir-fried greens with garlic", estCalories: 500, estProtein: 19 },
    { day: "Fri", dinner: "watercress soup with rice and a quick egg-and-scallion stir-fry", estCalories: 510, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: the last soup and its meat poured over rice and simmered into jook", estCalories: 460, estProtein: 18 },
  ],
  shopping: [
    { item: "Dried scallop + red dates + goji", qty: "small each", cost: 4.0, spansWeeks: true, note: "the precious thread — the dried treasures that enrich the pot" },
    { item: "Pork bones / pork shank", qty: "~2 1/2 lb", cost: 4.5, note: "the spine of every soup" },
    { item: "Winter melon", qty: "~2 lb wedge", cost: 2.0 },
    { item: "Watercress", qty: "2 bunches", cost: 2.5 },
    { item: "Potato + carrot + tomato + onion (ABC soup)", qty: "assorted", cost: 3.0 },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Firm tofu", qty: "1 block", cost: 1.2 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Gai lan / choy sum (for stir-fries)", qty: "2 bunches", cost: 2.5 },
    { item: "Ginger + scallions + garlic", qty: "assorted", cost: 2.5, spansWeeks: true },
    { item: "Light soy + oyster sauce (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Peanut oil + white pepper", qty: "", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 19,
};

export const ctWeek6Tofu: WeekPlan = {
  slug: "ct-week-6-tofu",
  number: 6,
  cuisine: "cantonese",
  theme: "Tofu & Veg",
  title: "Week 6 — Tofu & Veg",
  description:
    "The cheapest protein in the house, dressed up to feel like plenty. A block of tofu braised home-style in oyster sauce, stuffed with a little pork and pan-fried, or simmered with eggplant in a claypot — and a heap of cheap greens alongside. Humble, fast, and the truest everyday Cantonese supper.",
  context:
    `When the meat is gone and payday is far off, the Cantonese home table leans on tofu and vegetables — protein for cents, cooked to taste like far more. Home-style braised tofu (gaa seung dau fu) crisps soft blocks and simmers them in a glossy oyster-soy sauce with a little minced pork; stuffed tofu (yeung dau fu, a Hakka-Cantonese classic) tucks a spoon of pork-and-fish paste into each piece and pan-fries it golden; eggplant claypot lets soft eggplant drink up a garlicky, savory braise that eats like a banquet for the price of a side. The vegetables are the volume — choy sum, gai lan, water spinach blanched or stir-fried with nothing but garlic and a splash of oyster sauce. The ginger-scallion-soy base and a little stock do the seasoning; a steamed egg or a soup adds softness, and any leftover tofu and greens go into the next day's jook. This is frugality at its most everyday — and to many, the truest taste of home.`,
  dishes: [
    "Home-style braised tofu",
    "Stuffed tofu",
    "Eggplant claypot",
    "Choy sum",
  ],
  proteinNote:
    "Tofu is the whole protein engine — blocks braised, stuffed, and simmered — with a little minced pork and the odd egg to lift it. A block of tofu per plate clears the floor for almost nothing.",
  bonus: false,
  preciousThread: "A few blocks of fresh tofu and a little pork-and-fish paste for the stuffed tofu.",
  engine: [
    "steamed jasmine rice — the faahn every tofu dish sits beside (the constant base)",
    "ginger-scallion-soy base — the aromatics, soy, and oyster sauce that glaze every braise",
    "stock — the superior stock to loosen the braises and the eggplant claypot",
    "lard/peanut oil + congee — oil to crisp the tofu, and jook as the thrift base for leftovers",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "home-style braised tofu with minced pork, over rice with choy sum", estCalories: 560, estProtein: 24 },
    { day: "Mon", dinner: "stuffed tofu pan-fried golden, over rice with greens", estCalories: 580, estProtein: 25 },
    { day: "Tue", dinner: "eggplant claypot with garlic, over rice", estCalories: 520, estProtein: 18 },
    { day: "Wed", dinner: "home-style braised tofu again with a fried egg, over rice", estCalories: 540, estProtein: 22 },
    { day: "Thu", dinner: "stuffed tofu with the leftover paste and stir-fried gai lan, over rice", estCalories: 560, estProtein: 23 },
    { day: "Fri", dinner: "eggplant claypot with the last tofu, over rice", estCalories: 520, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: every leftover tofu and green simmered into a savory jook", estCalories: 440, estProtein: 17 },
  ],
  shopping: [
    { item: "Fresh tofu (firm + soft)", qty: "5 blocks", cost: 5.0, note: "the precious thread — the week's protein backbone" },
    { item: "Ground pork (and a little fish paste)", qty: "~3/4 lb", cost: 3.5 },
    { item: "Chinese eggplant", qty: "~1 1/2 lb", cost: 2.5 },
    { item: "Choy sum + gai lan", qty: "3 bunches", cost: 3.5 },
    { item: "Water spinach (ong choy)", qty: "1 bunch", cost: 1.5 },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Dried shiitake (for braise depth)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Oyster sauce + light/dark soy (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Ginger + scallions + garlic", qty: "assorted", cost: 2.5, spansWeeks: true },
    { item: "Fermented bean paste / chili bean", qty: "small jar", cost: 1.5, spansWeeks: true },
    { item: "Peanut oil + cornstarch + sesame oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 17,
};

export const ctWeek7DimSum: WeekPlan = {
  slug: "ct-week-7-dim-sum",
  number: 7,
  cuisine: "cantonese",
  theme: "Dim Sum & Festival",
  title: "Week 7 — Dim Sum & Festival",
  description:
    "The hand-made finale. Everything the arc taught — rice in every form, a little pork and shrimp made to go far, the soy-and-stock base — comes together in the small steamed and pan-fried plates of dim sum, and a modest festival feast to close. Pork-and-shrimp siu mai, silky cheung fun, tossed lo mein, and a final table shared.",
  context:
    `The arc closes the most communal way the Cantonese eat: yum cha, "drinking tea" over a table of small hand-made plates. Dim sum is frugal craft dressed as celebration — a little pork and shrimp stretched into dozens of dumplings by skilled hands and cheap wrappers. Siu mai (open-topped pork-and-shrimp dumplings) and cheung fun (silky steamed rice-noodle rolls filled with a few shrimp or a slick of sauce) turn rice flour and a scrap of protein into something that feels like plenty; tossed lo mein and a steamed plate round the table. A festival dinner — the kind cooked for new year or a family gathering — does the same on a slightly grander scale: a whole soy-sauce chicken, a steamed fish for prosperity, a long-life noodle, all of it built on the same base of rice, soy, and stock the arc has used all along. Nothing is wasted: dumpling trimmings go into soup, the festival's leftovers become the next day's jook and fried rice. The feast and the everyday turn out to be the same kitchen, dressed up.`,
  dishes: [
    "Pork & shrimp siu mai",
    "Cheung fun",
    "Lo mein",
    "A small festival feast",
  ],
  proteinNote:
    "A little pork and shrimp spread across siu mai and cheung fun, plus a soy-sauce chicken and a steamed fish for the feast — the base makes a modest amount of protein feed the whole table.",
  bonus: false,
  preciousThread: "A half-pound of shrimp and a stack of dumpling wrappers and rice-noodle sheets.",
  engine: [
    "steamed jasmine rice + rice-flour sheets + noodles — rice in every form, the constant base of the plates",
    "ginger-scallion-soy base — the soy, oyster sauce, and aromatics that dip and dress every plate",
    "stock — the superior stock for the cheung fun sauce, the noodle, and the festival soup",
    "lard/peanut oil + congee — oil for the lo mein and pan-fry, and jook for the leftovers",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "pork & shrimp siu mai, steamed in batches, with a soy dip and greens", estCalories: 560, estProtein: 26 },
    { day: "Mon", dinner: "cheung fun — silky rice-noodle rolls with shrimp and sweet soy", estCalories: 520, estProtein: 20 },
    { day: "Tue", dinner: "tossed lo mein with the leftover siu mai filling and greens", estCalories: 600, estProtein: 23 },
    { day: "Wed", dinner: "cheung fun again with a steamed egg and scallion oil", estCalories: 500, estProtein: 19 },
    { day: "Thu", dinner: "siu mai and lo mein together, a small two-plate dinner", estCalories: 600, estProtein: 25 },
    { day: "Fri", dinner: "a festival plate — soy-sauce chicken and a steamed fish over rice", estCalories: 640, estProtein: 30 },
    { day: "Sat", dinner: "zero-waste: every dumpling, roll, and festival scrap fried into a wok of rice", estCalories: 560, estProtein: 22 },
  ],
  shopping: [
    { item: "Shrimp", qty: "~3/4 lb", cost: 4.5, note: "the precious thread — the dumpling and cheung fun filling" },
    { item: "Ground pork", qty: "~3/4 lb", cost: 3.0 },
    { item: "Siu mai / dumpling wrappers", qty: "2 packs", cost: 2.5, spansWeeks: true },
    { item: "Rice-noodle sheets / fresh cheung fun", qty: "1 lb", cost: 2.5 },
    { item: "Egg noodles (for lo mein)", qty: "1 lb", cost: 2.0, spansWeeks: true },
    { item: "Chicken (for soy-sauce chicken feast)", qty: "~2 lb", cost: 4.0 },
    { item: "Whole fish (for the festival steam)", qty: "~1 1/4 lb", cost: 4.0 },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Dried shiitake + water chestnut (siu mai)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Greens — gai lan / choy sum", qty: "2 bunches", cost: 2.5 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Soy, oyster sauce, sesame oil, sugar (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Ginger + scallions + garlic", qty: "assorted", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 34,
  steadyStateWeekly: 21,
};

export const cantoneseWeeks: WeekPlan[] = [
  ctWeek1StirFry,
  ctWeek2Steamed,
  ctWeek3Congee,
  ctWeek4Claypot,
  ctWeek5Soup,
  ctWeek6Tofu,
  ctWeek7DimSum,
];
