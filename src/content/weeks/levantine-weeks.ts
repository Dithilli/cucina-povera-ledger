import type { WeekPlan } from "../types";

// Challenge #4 — The Levant: the everyday vegetarian table.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "levantine"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// lets users compose variations on top of the same recipe pool.
//
// Dinner slugs reference recipes in src/content/recipes/*. The constant
// foundation — good olive oil, a pot of lentils/chickpeas, flatbread
// (khubz/pita), tahini, lemon, garlic — lives in each week's engine, never as a
// theme. Each theme is a real category of dinner you actually eat.

export const levWeek1Mujaddara: WeekPlan = {
  slug: "lev-week-1-mujaddara",
  number: 1,
  cuisine: "levantine",
  theme: "Mujaddara",
  title: "Week 1 — Mujaddara",
  description:
    "The dish poor and rich ate alike — lentils and rice or bulgur crowned with onions fried dark and sweet. Start here: it's the everyday vegetarian heart of the table, and it clears the protein floor with no meat at all.",
  context:
    `Mujaddara is the proverb-dish of the Levant — "the food of Esau," eaten by everyone from the poorest fellah to the wealthiest household, because nothing makes lentils taste this good for this little. The whole dish turns on one move: onions fried slow and deep until they go past gold to a sweet near-black, half stirred in and half saved to crown the plate. The Levantine table beneath it never changes — a pool of good olive oil, a pot of lentils, warm khubz to scoop with, tahini, lemon, and garlic — so the week isn't about that constant base but about the rhythm of the lentil itself: whole brown lentils with rice, cracked red with bulgur, thinned into shorbat adas. A bowl of mujaddara with cool yogurt or a sharp tomato-and-cucumber salad alongside is the quiet weeknight supper of the whole region.`,
  dishes: [
    "Mujaddara (lentils + rice, crowned with fried onions)",
    "Mujaddara hamra (red lentils + bulgur, the Galilean version)",
    "Shorbat adas (smooth red-lentil soup with lemon)",
    "Mujaddara with a cucumber-yogurt salad alongside",
  ],
  proteinNote:
    "Lentils carry it — about 18g protein per cooked cup — and pairing them with rice or bulgur completes the amino profile, so a bowl of mujaddara clears the floor with no meat.",
  bonus: false,
  preciousThread: "A bottle of single-estate Levantine olive oil to finish every plate.",
  engine: [
    "A big pot of brown lentils — the base for mujaddara and the soups all week",
    "A jar of slow-fried dark onions — fried Sunday, half for crowning and half stirred through",
    "khubz — a stack of flatbread baked or bought ahead, the plate and the spoon",
    "The constant base: good olive oil, tahini, lemon, garlic, kept on the counter",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "mujaddara with the first dark onions, a bowl of yogurt alongside",
      estCalories: 640,
      estProtein: 22,
    },
    {
      day: "Mon",
      dinner: "mujaddara-hamra — red lentils and bulgur, the Galilean style",
      estCalories: 620,
      estProtein: 20,
    },
    {
      day: "Tue",
      dinner: "shorbat-adas — smooth red-lentil soup with lemon and khubz",
      estCalories: 540,
      estProtein: 18,
    },
    {
      day: "Wed",
      dinner: "mujaddara again, deepened, with a sharp tomato-cucumber salad",
      estCalories: 650,
      estProtein: 22,
    },
    {
      day: "Thu",
      dinner: "mujaddara-hamra with a spoon of garlicky tahini",
      estCalories: 630,
      estProtein: 21,
    },
    {
      day: "Fri",
      dinner: "shorbat-adas with cumin and a fried-bread garnish",
      estCalories: 560,
      estProtein: 19,
    },
    {
      day: "Sat",
      dinner: "the last of the lentils and onions folded into one big mujaddara, scooped with the last khubz — nothing left",
      estCalories: 660,
      estProtein: 23,
    },
  ],
  shopping: [
    { item: "Olive oil (good, single-estate)", qty: "1 bottle", cost: 8.0, spansWeeks: true, note: "the precious thread — finishes every plate" },
    { item: "Brown / green lentils", qty: "2 lb", cost: 3.0, note: "the bank for the week" },
    { item: "Split red lentils", qty: "1 lb", cost: 1.6 },
    { item: "Long-grain rice", qty: "2 lb", cost: 1.8 },
    { item: "Bulgur (coarse)", qty: "1 lb", cost: 1.5 },
    { item: "Flour (for khubz) or pita", qty: "3 lb / 2 bags", cost: 2.5 },
    { item: "Tahini", qty: "1 jar", cost: 4.0, spansWeeks: true },
    { item: "Yellow onions", qty: "~5 lb", cost: 4.0, note: "the deep fry eats onions" },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Lemons", qty: "6", cost: 2.0, spansWeeks: true },
    { item: "Cumin + coriander + black pepper", qty: "small", cost: 2.5, spansWeeks: true },
    { item: "Plain yogurt", qty: "1 tub", cost: 2.5 },
    { item: "Cucumbers + tomatoes", qty: "for the salad", cost: 3.0 },
    { item: "Parsley + mint", qty: "1 bunch each", cost: 2.0 },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 17,
};

export const levWeek2Ful: WeekPlan = {
  slug: "lev-week-2-ful",
  number: 2,
  cuisine: "levantine",
  theme: "Ful & Hummus",
  title: "Week 2 — Ful & Hummus",
  description:
    "The chickpea-and-fava axis the whole region wakes and dines on. Fava beans stewed soft and dressed with oil, lemon, and cumin; chickpeas blitzed silken with tahini — the two cheapest proteins in the Levant, made into the dishes people queue for.",
  context:
    `If mujaddara is the lentil's week, this is the bean's. Ful medames — fava beans stewed slow and crushed coarse with olive oil, lemon, garlic, and cumin — is the oldest cooked dish still eaten daily, scooped from a communal bowl with torn khubz. Beside it sits hummus, chickpeas blitzed with tahini until silken, and its warm half-mashed cousin msabbaha, and balila, the whole chickpeas simply dressed warm. The constant base does most of the work here — tahini and lemon and good oil and bread are not garnishes but the dish itself. The move that separates a great hummus from a grainy one is patience: cook the chickpeas past done, peel what skins you can, and blend longer than feels reasonable. A bowl of either, a pile of bread, a few olives, and the day's protein floor is met before the meat course is even considered.`,
  dishes: [
    "Ful medames (crushed favas with oil, lemon, cumin)",
    "Hummus (chickpeas + tahini, blended silken)",
    "Msabbaha (warm, half-mashed chickpeas with their broth)",
    "Balila (whole chickpeas, warm, with cumin and oil)",
  ],
  proteinNote:
    "Favas and chickpeas both bring ~15g protein per cooked cup, and tahini adds more — a bowl of ful or hummus with bread clears most of the day's floor.",
  bonus: false,
  preciousThread: "A really good stone-ground tahini, loose and pourable.",
  engine: [
    "A pot of cooked chickpeas — split between hummus, msabbaha, and balila",
    "A pot of cooked dried favas — the base for ful all week",
    "khubz — a fresh stack; the scoop for every bowl",
    "The constant base: olive oil, tahini, lemon, garlic on the counter",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "ful-medames crushed warm with oil, lemon, and cumin, scooped with fresh khubz",
      estCalories: 600,
      estProtein: 20,
    },
    {
      day: "Mon",
      dinner: "hummus, pooled with oil and a dusting of cumin, with bread and olives",
      estCalories: 620,
      estProtein: 18,
    },
    {
      day: "Tue",
      dinner: "msabbaha — warm half-mashed chickpeas in their own broth with tahini",
      estCalories: 630,
      estProtein: 21,
    },
    {
      day: "Wed",
      dinner: "ful-medames again, topped with chopped tomato and a soft egg",
      estCalories: 650,
      estProtein: 24,
    },
    {
      day: "Thu",
      dinner: "balila — whole warm chickpeas with garlic, cumin, and a flood of oil",
      estCalories: 600,
      estProtein: 19,
    },
    {
      day: "Fri",
      dinner: "hummus piled high with the last warm chickpeas and pine-nut crumbs",
      estCalories: 640,
      estProtein: 20,
    },
    {
      day: "Sat",
      dinner: "the last favas and chickpeas pooled into one big ful-and-hummus board, scraped clean with the last bread",
      estCalories: 660,
      estProtein: 22,
    },
  ],
  shopping: [
    { item: "Tahini (stone-ground, good)", qty: "1 large jar", cost: 6.0, spansWeeks: true, note: "the precious thread — the dish, not the garnish" },
    { item: "Dried chickpeas", qty: "2 lb", cost: 3.0, note: "the bank for the week" },
    { item: "Dried fava beans (small brown)", qty: "2 lb", cost: 3.2 },
    { item: "Olive oil", qty: "top up", cost: 4.0, spansWeeks: true },
    { item: "Flour (for khubz) or pita", qty: "3 lb / 2 bags", cost: 2.5 },
    { item: "Lemons", qty: "8", cost: 2.5, spansWeeks: true },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Cumin + baking soda (for the chickpeas)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Tomatoes", qty: "~2 lb", cost: 2.5 },
    { item: "Olives", qty: "1 cup", cost: 2.5, spansWeeks: true },
    { item: "Pine nuts (small handful)", qty: "small", cost: 3.0, note: "to crown the hummus" },
    { item: "Parsley", qty: "1 bunch", cost: 1.0 },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 16,
};

export const levWeek3Burghul: WeekPlan = {
  slug: "lev-week-3-burghul",
  number: 3,
  cuisine: "levantine",
  theme: "Burghul & Freekeh",
  title: "Week 3 — Burghul & Freekeh",
  description:
    "The cracked-wheat week — bulgur and smoky green freekeh, the grains the Levant grew and parched before rice arrived. Tomato-stewed, pilaf-style, or pooled with chickpeas: the everyday grain supper, nutty and filling for almost nothing.",
  context:
    `Long before rice, the Levant ate wheat it cracked and parched itself — burghul (bulgur), and freekeh, young green wheat roasted over its own burning stubble until it smokes. These are the cheap, ancient grains of the inland table. Burghul bi banadoura is the everyday supper: bulgur simmered soft in a garlicky tomato base until it drinks the sauce — peasant food that needs nothing but bread and an onion. Freekeh bil hummus pools the smoky grain with chickpeas into something that eats like a feast for the cost of a side. The constant base holds it together: a slick of good oil, a squeeze of lemon, a bowl of yogurt, bread to push it onto the spoon. The move is to toast the grain in oil first so every kernel stays separate and nutty rather than turning to porridge.`,
  dishes: [
    "Burghul bi banadoura (bulgur in garlicky tomato)",
    "Freekeh bil hummus (smoky green wheat + chickpeas)",
    "Bulgur pilaf (toasted, with vermicelli and onion)",
    "Freekeh with yogurt and toasted nuts",
  ],
  proteinNote:
    "Cracked wheat brings real protein on its own, and pooled with chickpeas in freekeh bil hummus the day clears the floor — a bowl of yogurt alongside tops it off.",
  bonus: false,
  preciousThread: "A bag of true fire-roasted freekeh, smoky off the field.",
  engine: [
    "A pot of cooked chickpeas — for the freekeh, kept from spoiling all week",
    "A garlicky tomato base — simmered Sunday, the bed for the bulgur",
    "khubz and a tub of yogurt — the constant companions to every grain bowl",
    "The constant base: olive oil, lemon, garlic on the counter",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "burghul-bi-banadoura — bulgur simmered soft in the fresh tomato base",
      estCalories: 580,
      estProtein: 16,
    },
    {
      day: "Mon",
      dinner: "freekeh-bil-hummus — smoky green wheat pooled with chickpeas",
      estCalories: 640,
      estProtein: 22,
    },
    {
      day: "Tue",
      dinner: "bulgur-pilaf with toasted vermicelli and fried onion, yogurt alongside",
      estCalories: 600,
      estProtein: 17,
    },
    {
      day: "Wed",
      dinner: "burghul-bi-banadoura again, deepened, with a soft egg on top",
      estCalories: 620,
      estProtein: 20,
    },
    {
      day: "Thu",
      dinner: "freekeh with yogurt, toasted almonds, and a slick of oil",
      estCalories: 630,
      estProtein: 21,
    },
    {
      day: "Fri",
      dinner: "freekeh-bil-hummus with the last chickpeas, scooped with khubz",
      estCalories: 640,
      estProtein: 22,
    },
    {
      day: "Sat",
      dinner: "the last bulgur and freekeh tossed together into one grain bowl with the tomato base scraped clean",
      estCalories: 610,
      estProtein: 19,
    },
  ],
  shopping: [
    { item: "Freekeh (fire-roasted green wheat)", qty: "2 lb", cost: 6.0, note: "the precious thread — smoky off the field" },
    { item: "Bulgur (coarse + fine)", qty: "2 lb", cost: 3.0, note: "the bank for the week" },
    { item: "Dried chickpeas", qty: "1 lb", cost: 1.6 },
    { item: "Tomatoes + tomato paste", qty: "~3 lb / 1 can", cost: 4.0 },
    { item: "Yellow onions", qty: "~3 lb", cost: 2.5 },
    { item: "Vermicelli (for the pilaf)", qty: "small bag", cost: 1.5 },
    { item: "Plain yogurt", qty: "1 tub", cost: 2.5 },
    { item: "Flour (for khubz) or pita", qty: "3 lb / 2 bags", cost: 2.5 },
    { item: "Almonds (to toast)", qty: "small bag", cost: 2.5 },
    { item: "Olive oil", qty: "top up", cost: 3.0, spansWeeks: true },
    { item: "Garlic + lemons", qty: "2 heads / 4", cost: 2.5, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Cumin + allspice + cinnamon", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Parsley", qty: "1 bunch", cost: 1.0 },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 17,
};

export const levWeek4Mahashi: WeekPlan = {
  slug: "lev-week-4-mahashi",
  number: 4,
  cuisine: "levantine",
  theme: "Mahashi (Stuffed)",
  title: "Week 4 — Mahashi (Stuffed)",
  description:
    "The patient week — vegetables and leaves hollowed and packed with spiced rice. Vine leaves rolled tight, squash cored thin, eggplant split and crowned: humble produce turned into something festive by an afternoon's care and a few cents of filling.",
  context:
    `Mahashi — "the stuffed things" — is how the Levantine cook turns the cheapest produce into a dish worth gathering for. Vine leaves rolled around lemony rice (warak enab), squash and eggplant cored and packed (mahshi koosa, sheikh el mahshi), all simmered slow in a tart tomato or lemon broth. It is the food of an unhurried afternoon, often made communally — a row of hands rolling leaves at a kitchen table — and it stretches a handful of rice and a few vegetables across a whole table. The stuffing is mostly rice, sometimes with a little meat, often without; the vegetarian sawm versions are the everyday ones. The constant base sits right beside it: bread to mop the broth, a bowl of garlicky yogurt, oil and lemon. The move is to pack loosely — rice swells — and to line the pot with leaves or tomato slices so nothing scorches.`,
  dishes: [
    "Warak enab (vine leaves rolled with lemony rice)",
    "Mahshi koosa (cored squash packed with spiced rice)",
    "Sheikh el mahshi (eggplant crowned and stuffed)",
    "Mixed mahashi in a tart tomato-lemon broth",
  ],
  proteinNote:
    "The rice stuffing leans on a pot of lentils or chickpeas folded in, and a bowl of yogurt alongside, to clear the floor on the meatless versions.",
  bonus: false,
  preciousThread: "A jar of grape leaves, or fresh ones in season, for the warak enab.",
  engine: [
    "A big bowl of spiced rice stuffing — mixed Sunday, packed into everything all week",
    "A pot of lentils or chickpeas — folded into the stuffing for protein",
    "khubz and a tub of garlicky yogurt — to mop the broth and cool the plate",
    "The constant base: olive oil, lemon, garlic on the counter",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "warak-enab — the first tray of vine leaves rolled and simmered in lemon broth",
      estCalories: 580,
      estProtein: 16,
    },
    {
      day: "Mon",
      dinner: "mahshi-koosa — cored squash packed with the spiced rice, garlicky yogurt alongside",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Tue",
      dinner: "sheikh-el-mahshi — eggplant split, crowned with rice, baked in tomato",
      estCalories: 620,
      estProtein: 19,
    },
    {
      day: "Wed",
      dinner: "warak-enab again, with a bowl of lentils folded through the stuffing",
      estCalories: 600,
      estProtein: 20,
    },
    {
      day: "Thu",
      dinner: "mahshi-koosa with the cored-squash flesh stewed into the broth, nothing wasted",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Fri",
      dinner: "a mixed mahashi pot — leaves, squash, and eggplant in one tart broth",
      estCalories: 640,
      estProtein: 21,
    },
    {
      day: "Sat",
      dinner: "the last stuffing rolled and packed into whatever's left, the broth scooped up with the last khubz",
      estCalories: 620,
      estProtein: 20,
    },
  ],
  shopping: [
    { item: "Grape leaves (jarred or fresh)", qty: "1 jar / a bunch", cost: 4.5, note: "the precious thread — for the warak enab" },
    { item: "Short-grain rice", qty: "2 lb", cost: 2.0, note: "the stuffing bank" },
    { item: "Zucchini / small squash (koosa)", qty: "~3 lb", cost: 4.0 },
    { item: "Eggplant", qty: "~3 lb", cost: 4.0 },
    { item: "Brown lentils", qty: "1 lb", cost: 1.5 },
    { item: "Tomatoes + tomato paste", qty: "~2 lb / 1 can", cost: 3.0 },
    { item: "Plain yogurt", qty: "1 tub", cost: 2.5 },
    { item: "Flour (for khubz) or pita", qty: "2 lb / 1 bag", cost: 1.8 },
    { item: "Lemons", qty: "8", cost: 2.5, spansWeeks: true },
    { item: "Garlic + dried mint", qty: "2 heads / small", cost: 2.0, spansWeeks: true },
    { item: "Olive oil", qty: "top up", cost: 3.0, spansWeeks: true },
    { item: "Allspice + cinnamon + black pepper", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Onion + parsley", qty: "2 / 1 bunch", cost: 1.5 },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const levWeek5Yakhni: WeekPlan = {
  slug: "lev-week-5-yakhni",
  number: 5,
  cuisine: "levantine",
  theme: "Yakhni (Stews)",
  title: "Week 5 — Yakhni (Stews)",
  description:
    "The slow-pot week — okra, green beans, and white beans braised soft in olive oil and tomato. The bil-zeit family of stews, cooked meatless and eaten warm or at room temperature, with spiced fried potatoes on the side and bread to finish the sauce.",
  context:
    `Yakhni is the everyday stew, and its great vegetarian branch is the bil-zeit ("in oil") family — vegetables and beans braised slow in olive oil and tomato until meltingly soft, eaten warm or, the Levantine way, at room temperature so the oil and flavors settle. Bamia (okra), loubia bzeit (green beans in oil), and fasolia yakhni (white beans in tomato) are the staples — each a pot that costs almost nothing and feeds for days, getting better on the second night. Batata harra, potatoes fried crisp and tossed with garlic, coriander, and chile, is the fiery side that wakes the gentle stews up. The constant base finishes every bowl: a thread of raw good oil over the top, a squeeze of lemon, and bread to chase the sauce. The move is to cook these low and unhurried, and to let them rest before eating.`,
  dishes: [
    "Bamia (okra braised in tomato and oil)",
    "Loubia bzeit (green beans stewed in olive oil)",
    "Fasolia yakhni (white beans in tomato)",
    "Batata harra (crisp potatoes with garlic, coriander, chile)",
  ],
  proteinNote:
    "White beans bring ~15g protein per cooked cup, the backbone of fasolia yakhni; a bowl of yogurt or a scoop of the lentil pot tops off the gentler vegetable stews.",
  bonus: false,
  preciousThread: "A generous pour of the good oil — these stews are named for it.",
  engine: [
    "A pot of cooked white beans — the base for fasolia yakhni and to bulk the others",
    "A garlicky tomato base — the bed for bamia and fasolia all week",
    "khubz — the stack that finishes every bowl of sauce",
    "The constant base: good olive oil, lemon, garlic on the counter",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "fasolia-yakhni — white beans simmered soft in the fresh tomato base",
      estCalories: 600,
      estProtein: 21,
    },
    {
      day: "Mon",
      dinner: "loubia-bzeit — green beans stewed slow in olive oil, eaten at room temperature",
      estCalories: 560,
      estProtein: 16,
    },
    {
      day: "Tue",
      dinner: "bamia — okra braised in tomato, with a side of batata-harra",
      estCalories: 620,
      estProtein: 17,
    },
    {
      day: "Wed",
      dinner: "fasolia-yakhni again, deeper on the second pot, scooped with khubz",
      estCalories: 610,
      estProtein: 21,
    },
    {
      day: "Thu",
      dinner: "batata-harra piled over the last white beans, fiery and crisp",
      estCalories: 640,
      estProtein: 18,
    },
    {
      day: "Fri",
      dinner: "loubia-bzeit with a soft egg and a flood of raw oil",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Sat",
      dinner: "the last of every stew pooled into one big bil-zeit bowl, the oil and sauce mopped clean with the last bread",
      estCalories: 630,
      estProtein: 20,
    },
  ],
  shopping: [
    { item: "Olive oil (good — the stews are named for it)", qty: "1 bottle", cost: 8.0, spansWeeks: true, note: "the precious thread — bil-zeit means 'in oil'" },
    { item: "Dried white beans (cannellini / navy)", qty: "2 lb", cost: 3.0, note: "the bank for the week" },
    { item: "Okra (fresh or frozen)", qty: "1.5 lb", cost: 3.5 },
    { item: "Green beans", qty: "1.5 lb", cost: 3.0 },
    { item: "Potatoes", qty: "~3 lb", cost: 2.0 },
    { item: "Tomatoes + tomato paste", qty: "~3 lb / 1 can", cost: 4.0 },
    { item: "Flour (for khubz) or pita", qty: "2 lb / 1 bag", cost: 1.8 },
    { item: "Garlic", qty: "3 heads", cost: 1.5, spansWeeks: true },
    { item: "Lemons", qty: "6", cost: 2.0, spansWeeks: true },
    { item: "Fresh coriander + chile", qty: "1 bunch / a few", cost: 2.0, note: "for the batata harra" },
    { item: "Onions", qty: "~2 lb", cost: 1.5 },
    { item: "Plain yogurt", qty: "1 tub", cost: 2.5 },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const levWeek6Mezze: WeekPlan = {
  slug: "lev-week-6-mezze",
  number: 6,
  cuisine: "levantine",
  theme: "Mezze",
  title: "Week 6 — Mezze",
  description:
    "The spread week — many small dishes instead of one big one. Tabbouleh, fattoush, falafel, smoky moutabal, cool labneh, and a simple tomato salad laid out together: dinner as a table of bright, sharp, herby plates you build from whatever's freshest.",
  context:
    `The mezze is the Levant's genius for hospitality and thrift at once — a dozen small dishes laid out together so a little of everything makes an abundant table, and so nothing in the kitchen goes unused. Tabbouleh is mostly parsley with a whisper of bulgur; fattoush turns yesterday's bread crisp and folds it through the salad; falafel fries ground chickpeas into the cheapest protein crisp; moutabal smokes an eggplant into silk with tahini; labneh is yesterday's yogurt strained to a soft cheese; salatet banadoura is just tomatoes and onion and oil. The constant base is the whole grammar here — oil, lemon, garlic, tahini, and bread are in nearly every plate. The move is freshness and sharpness: chop the herbs by hand, dress at the last moment, and let the lemon and oil and salt do the cooking.`,
  dishes: [
    "Tabbouleh (parsley, bulgur, tomato, lemon)",
    "Fattoush (chopped salad with crisped bread)",
    "Falafel (fried ground chickpeas)",
    "Moutabal & labneh & salatet banadoura (the spread)",
  ],
  proteinNote:
    "Falafel and the tahini in moutabal carry the protein, with labneh (strained yogurt) adding more — a mezze spread clears the floor across its many small plates.",
  bonus: false,
  preciousThread: "A muslin cloth and good yogurt to strain your own labneh.",
  engine: [
    "A bowl of soaked, ground chickpeas — the falafel mix, kept cold for the week",
    "Labneh straining in a cloth — yesterday's yogurt becoming soft cheese",
    "Crisped bread shards and a jar of finely chopped parsley — for fattoush and tabbouleh",
    "The constant base: olive oil, tahini, lemon, garlic on the counter",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "falafel fried fresh, with tabbouleh, labneh, and warm khubz",
      estCalories: 640,
      estProtein: 22,
    },
    {
      day: "Mon",
      dinner: "fattoush with crisped bread and a bowl of labneh drizzled with oil",
      estCalories: 540,
      estProtein: 15,
    },
    {
      day: "Tue",
      dinner: "moutabal — smoky eggplant whipped with tahini — with tabbouleh and bread",
      estCalories: 560,
      estProtein: 16,
    },
    {
      day: "Wed",
      dinner: "falafel again, tucked into khubz with tahini sauce and salatet-banadoura",
      estCalories: 650,
      estProtein: 23,
    },
    {
      day: "Thu",
      dinner: "a full mezze spread — tabbouleh, fattoush, moutabal, labneh, olives",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Fri",
      dinner: "labneh and salatet-banadoura with the last falafel crumbled over",
      estCalories: 580,
      estProtein: 17,
    },
    {
      day: "Sat",
      dinner: "the whole table laid out — every mezze leftover and the last bread crisped into fattoush, nothing thrown away",
      estCalories: 620,
      estProtein: 19,
    },
  ],
  shopping: [
    { item: "Plain whole-milk yogurt (for labneh)", qty: "2 large tubs", cost: 5.0, note: "the precious thread — strain your own labneh" },
    { item: "Dried chickpeas (for falafel)", qty: "2 lb", cost: 3.0 },
    { item: "Parsley + mint", qty: "3 bunches / 1 bunch", cost: 4.0, note: "tabbouleh is mostly parsley" },
    { item: "Bulgur (fine)", qty: "1 lb", cost: 1.5 },
    { item: "Eggplant", qty: "2 lb", cost: 3.0 },
    { item: "Tomatoes + cucumbers", qty: "for the salads", cost: 3.5 },
    { item: "Radishes + scallions + lettuce", qty: "for fattoush", cost: 2.5 },
    { item: "Flour (for khubz) or pita", qty: "3 lb / 2 bags", cost: 2.5 },
    { item: "Tahini", qty: "top up", cost: 3.0, spansWeeks: true },
    { item: "Sumac + dried mint", qty: "small", cost: 2.5, spansWeeks: true },
    { item: "Olive oil + lemons + garlic", qty: "top up / 8 / 2 heads", cost: 4.0, spansWeeks: true },
    { item: "Oil for frying the falafel", qty: "1 bottle", cost: 3.0 },
    { item: "Olives", qty: "1 cup", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const levWeek7Fatteh: WeekPlan = {
  slug: "lev-week-7-fatteh",
  number: 7,
  cuisine: "levantine",
  theme: "Fatteh & Bread",
  title: "Week 7 — Fatteh & Bread",
  description:
    "The zero-waste finale — the week built entirely on yesterday's bread. Fatteh layers torn stale khubz with chickpeas, garlicky yogurt, and toasted nuts; fattoush crisps it into salad. The whole arc closes on the dish whose name means 'crushed crumbs.'",
  context:
    `In a tradition where bread is the plate, the spoon, and the staff of life, no crust is ever thrown away — and fatteh is the proof. The word means "crumbs," and the dish is built in layers from torn day-old khubz: bread on the bottom, warm chickpeas and their broth poured over to soften it, a flood of garlicky yogurt, a slick of oil sizzled with toasted nuts on top. It is breakfast, lunch, and supper across the Levant, infinitely variable, and it costs almost nothing because it begins with what would otherwise be waste. Fattoush is its cold cousin — stale bread crisped and folded through a sharp herb salad. This week is the arc's resolution: the constant base — bread, chickpeas, yogurt, oil, lemon, garlic — turned on itself, every leftover and every stale loaf from six weeks consolidated into the dish that wastes nothing.`,
  dishes: [
    "Fatteh (layered stale bread, chickpeas, garlicky yogurt)",
    "Fattoush (crisped stale bread in a sharp salad)",
    "Fatteh hummus (with a tahini-yogurt flood)",
    "The week's every crust and leftover, reborn",
  ],
  proteinNote:
    "Chickpeas and a flood of yogurt carry the protein in fatteh, with toasted nuts adding more — the bread is the carrier, the legumes clear the floor.",
  bonus: false,
  preciousThread: "A handful of pine nuts toasted in browned butter to crown the fatteh.",
  engine: [
    "A pot of cooked chickpeas, kept warm in their broth — the heart of every fatteh",
    "A bowl of garlicky yogurt whisked with tahini — the flood that softens the bread",
    "A bin of saved stale khubz from the whole arc — torn and toasted, the base layer",
    "The constant base: olive oil, lemon, garlic on the counter",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "fatteh — torn bread under warm chickpeas, garlicky yogurt, and browned-butter pine nuts",
      estCalories: 660,
      estProtein: 24,
    },
    {
      day: "Mon",
      dinner: "fattoush — stale bread crisped and folded through a sharp sumac salad",
      estCalories: 540,
      estProtein: 14,
    },
    {
      day: "Tue",
      dinner: "fatteh again, with a tahini-yogurt flood and a dusting of cumin",
      estCalories: 650,
      estProtein: 23,
    },
    {
      day: "Wed",
      dinner: "fattoush with the last radishes and a flood of oil and lemon",
      estCalories: 550,
      estProtein: 15,
    },
    {
      day: "Thu",
      dinner: "fatteh layered with the last of the week's chickpeas and crisped bread",
      estCalories: 650,
      estProtein: 23,
    },
    {
      day: "Fri",
      dinner: "fatteh with a soft egg folded in and toasted nuts on top",
      estCalories: 670,
      estProtein: 25,
    },
    {
      day: "Sat",
      dinner: "the grand fatteh finale — every saved crust from the whole arc torn into one great tray under chickpeas and yogurt, nothing wasted",
      estCalories: 680,
      estProtein: 26,
    },
  ],
  shopping: [
    { item: "Pine nuts (and a knob of butter)", qty: "small / 1/4 lb", cost: 4.0, note: "the precious thread — browned-butter crown" },
    { item: "Dried chickpeas", qty: "2 lb", cost: 3.0, note: "the heart of every fatteh" },
    { item: "Plain yogurt", qty: "2 tubs", cost: 5.0, note: "the garlicky flood" },
    { item: "Stale khubz (saved) + 1 bag pita", qty: "the arc's crusts / 1 bag", cost: 1.5, note: "the base layer — mostly free" },
    { item: "Tahini", qty: "top up", cost: 3.0, spansWeeks: true },
    { item: "Garlic", qty: "3 heads", cost: 1.5, spansWeeks: true },
    { item: "Lemons", qty: "6", cost: 2.0, spansWeeks: true },
    { item: "Cucumbers + tomatoes + radishes", qty: "for fattoush", cost: 3.5 },
    { item: "Lettuce + scallions", qty: "for fattoush", cost: 2.0 },
    { item: "Sumac", qty: "top up", cost: 1.5, spansWeeks: true },
    { item: "Olive oil", qty: "top up", cost: 3.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Cumin + parsley", qty: "small / 1 bunch", cost: 1.5 },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 16,
};

export const levantineWeeks: WeekPlan[] = [
  levWeek1Mujaddara,
  levWeek2Ful,
  levWeek3Burghul,
  levWeek4Mahashi,
  levWeek5Yakhni,
  levWeek6Mezze,
  levWeek7Fatteh,
];
