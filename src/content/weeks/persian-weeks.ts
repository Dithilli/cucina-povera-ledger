import type { WeekPlan } from "../types";

// Challenge — Iran/Persia: one cucina-povera dinner a night.
// Seven weeks, each built out into an executable WeekPlan (engine + 7 days +
// costed shopping list). cuisine is "persian"; the engine is cuisine-agnostic,
// so these slot into the shared content arrays, tagged by cuisine. These are the
// curated, pregenerated defaults — the AI menu generator composes variations on
// the same recipe pool.
//
// FOUNDATION RULE: the constant Persian foundation — chelo rice + tahdig, bread,
// the onion-turmeric base, and dried lime — lives in EACH week's `engine`, never
// as a theme. A theme is something you actually eat as that night's dinner
// (khoresh, polo, ash, kuku…); the foundation is the constant base beneath all
// of them, shown once per week in the engine.

export const irWeek1Khoresh: WeekPlan = {
  slug: "ir-week-1-khoresh",
  number: 1,
  cuisine: "persian",
  theme: "Khoresh",
  title: "Week 1 — Khoresh",
  description:
    "The slow Persian braise — a pot of herbs, beans, and a little meat simmered long over the onion-turmeric base and a dried lime, ladled beside white rice. This is the everyday heart of the table: the sauce stretches, the rice carries, and the tahdig is the prize underneath.",
  context:
    `Khoresh is the Persian art of making a little meat go a long way: a fistful of lamb or none at all, simmered for hours with herbs, beans, and a dried lime until the pot tastes of far more than went into it. Ghormeh sabzi leans on a kilo of cheap sabzi bought in a huge bundle and a handful of kidney beans; gheymeh stretches a few ounces of meat across yellow split peas and a crown of fried potatoes. The dried lime (limoo amani) is the thrift trick — one shriveled fruit perfumes the whole pot for a season. Everything is ladled beside chelo, and the scorched tahdig at the bottom of the rice pot is fought over as the best part. Nothing is wasted: the herbs, the bean liquor, the crust, all of it earns its place.`,
  dishes: [
    "Ghormeh sabzi (herb, bean, and dried-lime braise)",
    "Gheymeh (split-pea and meat braise, fried-potato crown)",
    "Khoresh-e bademjan (eggplant and tomato braise)",
    "Khoresh-e karafs (celery and herb braise)",
  ],
  proteinNote:
    "Kidney beans and yellow split peas carry the protein floor; the meat is a seasoning, a few ounces stretched across the whole pot and the week.",
  bonus: false,
  preciousThread: "A small bag of dried limes (limoo amani) to perfume every khoresh.",
  engine: [
    "chelo — the parboil-and-steam white rice with its crisp tahdig, made fresh and carried as leftovers all week",
    "the onion-turmeric base — a big batch of onions sweated golden with turmeric, the foundation every khoresh starts from",
    "dried lime (limoo amani) — pierced and dropped into each braise to sour and perfume it",
    "barbari or sangak bread — a flatbread on hand to mop the sauce and stretch the plate",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ghormeh-sabzi over chelo with tahdig", estCalories: 690, estProtein: 26 },
    { day: "Mon", dinner: "gheymeh over chelo, fried-potato crown", estCalories: 700, estProtein: 24 },
    { day: "Tue", dinner: "khoresh-bademjan over chelo", estCalories: 650, estProtein: 18 },
    { day: "Wed", dinner: "ghormeh-sabzi again, the pot deepened, with rice", estCalories: 680, estProtein: 25 },
    { day: "Thu", dinner: "khoresh-karafs (celery and herb) over chelo", estCalories: 640, estProtein: 19 },
    { day: "Fri", dinner: "gheymeh with bread and the last of the rice", estCalories: 690, estProtein: 23 },
    { day: "Sat", dinner: "leftover khoresh and rice fried into a tahdig cake — nothing wasted", estCalories: 660, estProtein: 21 },
  ],
  shopping: [
    { item: "Basmati rice", qty: "4 lb", cost: 5.0, spansWeeks: true, note: "the foundation — chelo all week" },
    { item: "Sabzi (parsley, cilantro, fenugreek bundle)", qty: "2 big bundles", cost: 3.0, note: "for ghormeh sabzi, bought cheap by the armful" },
    { item: "Lamb or beef stew meat", qty: "~3/4 lb", cost: 4.5, note: "a little meat across two pots" },
    { item: "Red kidney beans", qty: "1 lb", cost: 1.6 },
    { item: "Yellow split peas (for gheymeh)", qty: "1 lb", cost: 1.5 },
    { item: "Dried limes (limoo amani)", qty: "small bag", cost: 2.5, spansWeeks: true, note: "the precious thread — perfumes every braise" },
    { item: "Onions", qty: "~4 lb", cost: 3.0 },
    { item: "Eggplants (for bademjan)", qty: "3", cost: 2.0 },
    { item: "Celery (for karafs)", qty: "1 bunch", cost: 1.5 },
    { item: "Tomatoes + tomato paste", qty: "~2 lb / 1 can", cost: 2.5 },
    { item: "Potatoes (gheymeh crown + tahdig)", qty: "~2 lb", cost: 1.5 },
    { item: "Turmeric, cinnamon, dried mint", qty: "spice top-up", cost: 1.5, spansWeeks: true },
    { item: "Flatbread (barbari/sangak)", qty: "2 rounds", cost: 2.0 },
    { item: "Oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const irWeek2Polo: WeekPlan = {
  slug: "ir-week-2-polo",
  number: 2,
  cuisine: "persian",
  theme: "Polo",
  title: "Week 2 — Polo",
  description:
    "Layered, mixed rice — beans, lentils, or herbs folded through the parboiled grains and steamed into a fragrant pilaf with a crisp tahdig. Polo turns a pot of rice into a whole dinner with almost no meat at all.",
  context:
    `Where chelo is plain rice beside a stew, polo is rice that has become the meal itself: parboiled basmati layered with beans, lentils, herbs, or dried fruit and steamed until the flavors marry and a tahdig forms below. Adas polo hides lentils, raisins, and dates in the rice; loobia polo folds in green beans and a few ounces of meat; baghali polo perfumes the pot with fava beans and dill; sabzi polo is a green bank of cheap herbs for Nowruz. Each is built on the same constant foundation — parboiled rice and the patient steam that makes the crust — and each stretches a tiny bit of protein across a fragrant, filling plate. The bundles of herbs and the bags of dried beans cost almost nothing; the tahdig is still the prize.`,
  dishes: [
    "Adas polo (lentil, raisin, and date rice)",
    "Loobia polo (green-bean and meat rice)",
    "Baghali polo (fava bean and dill rice)",
    "Sabzi polo (herb rice)",
  ],
  proteinNote:
    "Lentils, favas, and green beans build the protein into the rice itself; loobia polo's few ounces of meat are a seasoning, not a center.",
  bonus: false,
  preciousThread: "A handful of dates and raisins to sweeten the adas polo.",
  engine: [
    "chelo / parboiled rice — the constant: rinse, soak, parboil, and steam to a crisp tahdig under every polo",
    "the onion-turmeric base — caramelized onions to fold through the mixed rices",
    "dried lime (limoo amani) — a pierced lime to brighten the loobia polo's meat",
    "flatbread — kept on hand to mop and stretch alongside the rice",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "adas-polo with caramelized onion and tahdig", estCalories: 640, estProtein: 18 },
    { day: "Mon", dinner: "loobia-polo (green bean and meat rice)", estCalories: 700, estProtein: 24 },
    { day: "Tue", dinner: "baghali-polo (fava and dill rice) with yogurt", estCalories: 660, estProtein: 19 },
    { day: "Wed", dinner: "sabzi-polo, a green herb rice, with a fried egg", estCalories: 620, estProtein: 17 },
    { day: "Thu", dinner: "adas-polo again, the pot crisped fresh", estCalories: 650, estProtein: 18 },
    { day: "Fri", dinner: "loobia-polo with bread and the last beans", estCalories: 690, estProtein: 23 },
    { day: "Sat", dinner: "mixed-polo from the week's leftovers, pressed into one tahdig cake", estCalories: 640, estProtein: 18 },
  ],
  shopping: [
    { item: "Basmati rice", qty: "4 lb", cost: 5.0, spansWeeks: true },
    { item: "Brown/green lentils (adas)", qty: "1 lb", cost: 1.4 },
    { item: "Dried fava beans (baghali)", qty: "1 lb", cost: 1.8 },
    { item: "Green beans (loobia)", qty: "1 lb", cost: 2.0 },
    { item: "Lamb or beef stew meat", qty: "~1/2 lb", cost: 3.0, note: "just for the loobia polo" },
    { item: "Dates + raisins", qty: "small / small", cost: 2.0, note: "the precious thread — sweetness for adas polo" },
    { item: "Sabzi (dill, parsley, cilantro bundle)", qty: "2 bundles", cost: 3.0, note: "bought cheap by the armful" },
    { item: "Onions", qty: "~3 lb", cost: 2.5 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Plain yogurt", qty: "1 tub", cost: 1.5, spansWeeks: true },
    { item: "Turmeric, cinnamon, saffron pinch", qty: "spice top-up", cost: 2.0, spansWeeks: true },
    { item: "Flatbread", qty: "2 rounds", cost: 2.0 },
    { item: "Oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const irWeek3Ash: WeekPlan = {
  slug: "ir-week-3-ash",
  number: 3,
  cuisine: "persian",
  theme: "Ash",
  title: "Week 3 — Ash",
  description:
    "Thick Persian soup-stews — beans, barley, lentils, and a mountain of herbs simmered into one great pot that feeds a crowd from a single ladle of meat or none. Ash is the deepest thrift on the arc: many bowls from almost nothing.",
  context:
    `Ash is the Persian pot that feeds many from little: beans, lentils, barley, noodles, and a huge bundle of greens cooked down into a thick, sour, restorative soup-stew. Ash reshteh threads wheat noodles and chickpeas through fistfuls of herbs, finished with kashk, fried mint, and caramelized onion; ash-e jo stretches a handful of barley into a creamy, lemony pot; ash-e anar leans on pomegranate molasses for a sweet-sour winter bowl. A little meat, or none, disappears into the greens and beans, and a single pot makes bowl after bowl. The herbs are bought cheap in bundles and the kashk and pomegranate molasses are preserved bottlings that carry flavor for months. It is soup as economy and ceremony at once.`,
  dishes: [
    "Ash reshteh (noodle, bean, and herb soup with kashk)",
    "Ash-e jo (barley and vegetable soup)",
    "Ash-e anar (pomegranate soup)",
  ],
  proteinNote:
    "Chickpeas, kidney beans, lentils, and barley pile the protein high; kashk adds a dairy lift, so the bowls clear the floor with no meat.",
  bonus: false,
  preciousThread: "A jar of kashk and a bottle of pomegranate molasses to finish the bowls.",
  engine: [
    "chelo / steamed rice and tahdig — kept on hand to round out a bowl of ash midweek",
    "the onion-turmeric base — and the prized fried-mint-and-onion garnish (na'na dagh, piaz dagh) that crowns every ash",
    "dried lime (limoo amani) — a pierced lime to sour the barley and herb pots",
    "flatbread — torn into the ash to thicken and stretch each bowl",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ash-reshteh with kashk, fried mint, and onion", estCalories: 680, estProtein: 24 },
    { day: "Mon", dinner: "ash-reshteh, the pot thickened overnight, with bread", estCalories: 690, estProtein: 25 },
    { day: "Tue", dinner: "ash-jo (barley soup) with a dried lime", estCalories: 650, estProtein: 20 },
    { day: "Wed", dinner: "ash-anar (pomegranate soup), sweet-sour", estCalories: 660, estProtein: 22 },
    { day: "Thu", dinner: "ash-reshteh again, finished with extra kashk", estCalories: 690, estProtein: 25 },
    { day: "Fri", dinner: "ash-jo with rice and the last of the herbs", estCalories: 640, estProtein: 19 },
    { day: "Sat", dinner: "one great pot of mixed ash from every leftover bean and green — nothing wasted", estCalories: 670, estProtein: 23 },
  ],
  shopping: [
    { item: "Basmati rice", qty: "3 lb", cost: 4.0, spansWeeks: true },
    { item: "Reshteh (or linguine) noodles", qty: "1 lb", cost: 1.8 },
    { item: "Chickpeas + kidney beans", qty: "1 lb each", cost: 3.0 },
    { item: "Green/brown lentils", qty: "1 lb", cost: 1.4 },
    { item: "Pearl barley (for ash-e jo)", qty: "1 lb", cost: 1.2 },
    { item: "Kashk", qty: "1 jar", cost: 3.0, spansWeeks: true, note: "the precious thread — the tangy whey finish" },
    { item: "Pomegranate molasses", qty: "1 bottle", cost: 3.0, spansWeeks: true, note: "the precious thread — sweet-sour preserve for ash-e anar" },
    { item: "Sabzi (parsley, cilantro, dill, spinach bundle)", qty: "3 bundles", cost: 4.0, note: "the heart of every ash, bought cheap by the armful" },
    { item: "Onions", qty: "~4 lb", cost: 3.0 },
    { item: "Dried mint", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Dried limes (top up)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Flatbread", qty: "2 rounds", cost: 2.0 },
    { item: "Oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 17,
};

export const irWeek4Kuku: WeekPlan = {
  slug: "ir-week-4-kuku",
  number: 4,
  cuisine: "persian",
  theme: "Kuku",
  title: "Week 4 — Kuku",
  description:
    "Persian baked omelets — eggs barely binding a mountain of herbs, eggplant, or potato into a thick, sliceable cake. Kuku turns a few eggs and whatever is cheap and green into a full, frugal dinner.",
  context:
    `Kuku is the Persian frittata: a few eggs used not as the dish but as the glue that holds a great heap of vegetables together. Kuku sabzi is almost solid herb — parsley, cilantro, dill, and fenugreek bound by just enough egg, dark green and fragrant; kuku bademjan folds in mashed roasted eggplant; kuku sibzamini is grated potato into a golden cake. A half-dozen eggs and a bundle of greens or a couple of potatoes feed the table, hot or cold, with bread. It is the thriftiest protein on the arc — eggs stretched by the cheap green abundance of the sabzi bundle — and it keeps for days, sliced cold into bread for the next meal so nothing is wasted.`,
  dishes: [
    "Kuku sabzi (herb omelet cake)",
    "Kuku bademjan (eggplant omelet)",
    "Kuku sibzamini (potato omelet)",
  ],
  proteinNote:
    "Eggs are the protein bank here, stretched by herbs and vegetables; a generous wedge with bread and yogurt clears the floor cheaply.",
  bonus: false,
  preciousThread: "A spoon of barberries and a few walnuts to stud the kuku sabzi.",
  engine: [
    "chelo / steamed rice and tahdig — a scoop of rice or bread to round the plate beside the kuku",
    "the onion-turmeric base — golden onions folded into the eggplant and potato kukus",
    "dried lime / sabzi staples — the bundle of cheap herbs that fills the kuku sabzi",
    "flatbread — kuku sliced cold into bread makes the next day's meal",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "kuku-sabzi with barberries and walnut, plus rice", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "kuku-bademjan (eggplant) with bread and yogurt", estCalories: 620, estProtein: 20 },
    { day: "Tue", dinner: "kuku-sibzamini (potato) with a tomato salad", estCalories: 640, estProtein: 19 },
    { day: "Wed", dinner: "kuku-sabzi again, cold in bread with herbs", estCalories: 590, estProtein: 21 },
    { day: "Thu", dinner: "kuku-bademjan over rice with a dried-lime dressing", estCalories: 630, estProtein: 20 },
    { day: "Fri", dinner: "kuku-sibzamini with the last of the rice and yogurt", estCalories: 640, estProtein: 19 },
    { day: "Sat", dinner: "one big mixed kuku from every leftover herb and vegetable — nothing wasted", estCalories: 610, estProtein: 21 },
  ],
  shopping: [
    { item: "Basmati rice", qty: "3 lb", cost: 4.0, spansWeeks: true },
    { item: "Eggs", qty: "2 dozen", cost: 6.0, note: "the protein bank for the week of kukus" },
    { item: "Sabzi (parsley, cilantro, dill, fenugreek bundle)", qty: "3 bundles", cost: 4.0, note: "the body of kuku sabzi, cheap by the armful" },
    { item: "Eggplants (for bademjan)", qty: "3", cost: 2.0 },
    { item: "Potatoes (for sibzamini)", qty: "~2 lb", cost: 1.5 },
    { item: "Barberries + walnuts", qty: "small / small", cost: 2.5, spansWeeks: true, note: "the precious thread — studding the kuku sabzi" },
    { item: "Onions", qty: "~2 lb", cost: 1.5 },
    { item: "Plain yogurt", qty: "1 tub", cost: 1.5, spansWeeks: true },
    { item: "Tomatoes (for salad)", qty: "~1 lb", cost: 1.5 },
    { item: "Turmeric, baking soda, spices", qty: "top-up", cost: 1.0, spansWeeks: true },
    { item: "Flatbread", qty: "3 rounds", cost: 3.0 },
    { item: "Oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 16,
};

export const irWeek5Abgoosht: WeekPlan = {
  slug: "ir-week-5-abgoosht",
  number: 5,
  cuisine: "persian",
  theme: "Abgoosht & Adasi",
  title: "Week 5 — Abgoosht & Adasi",
  description:
    "The two-meals-from-one-pot week. Abgoosht is a mutton-and-bean stew strained so the broth is supped first and the meat-and-bean mash (gusht koobideh) is mashed and eaten second; adasi is a humble lentil pottage. The deepest stretch on the arc.",
  context:
    `Abgoosht (or dizi) is the masterpiece of Persian thrift: a clay pot of a little fatty mutton or lamb shank simmered all day with chickpeas, white beans, potato, and a dried lime, then strained so it becomes two meals. First you drink the rich golden broth poured over torn bread (tilit); then the solids — meat, beans, potato — are pounded to a coarse mash called gusht koobideh and eaten second with raw onion and herbs. One small bone and a handful of beans feed a family twice. Adasi, a soft lentil pottage spiced with cumin and dried lime, is its even cheaper cousin, eaten by the bowl with bread. Nothing leaves the pot uneaten — broth, meat, beans, and crust all become food.`,
  dishes: [
    "Abgoosht / dizi (the broth, then the koobideh mash)",
    "Adasi (cumin-spiced lentil pottage)",
  ],
  proteinNote:
    "Chickpeas and white beans plus a small piece of mutton make abgoosht protein-dense across two servings; adasi's lentils clear the floor on their own.",
  bonus: false,
  preciousThread: "One meaty lamb shank or neck bone to give the abgoosht its depth.",
  engine: [
    "chelo / steamed rice and tahdig — alongside the bowls of lentils midweek",
    "the onion-turmeric base — and raw onion served alongside the gusht koobideh mash",
    "dried lime (limoo amani) — pierced into the abgoosht and the adasi to sour and perfume",
    "flatbread — torn into the broth for tilit, the soul of the abgoosht ritual",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "abgoosht — broth with tilit, then the koobideh mash", estCalories: 720, estProtein: 28 },
    { day: "Mon", dinner: "leftover koobideh mash with rice and raw onion", estCalories: 700, estProtein: 26 },
    { day: "Tue", dinner: "adasi (lentil pottage) with bread and a dried lime", estCalories: 640, estProtein: 22 },
    { day: "Wed", dinner: "abgoosht, a fresh pot, broth then mash", estCalories: 720, estProtein: 28 },
    { day: "Thu", dinner: "adasi again, thickened, with a fried egg on top", estCalories: 660, estProtein: 24 },
    { day: "Fri", dinner: "koobideh mash fried into a tahdig with rice", estCalories: 700, estProtein: 25 },
    { day: "Sat", dinner: "one last pot from every leftover bean and the broth — nothing wasted", estCalories: 680, estProtein: 24 },
  ],
  shopping: [
    { item: "Basmati rice", qty: "3 lb", cost: 4.0, spansWeeks: true },
    { item: "Lamb shank or neck bone", qty: "~1 lb", cost: 5.0, note: "the precious thread — the depth of the abgoosht" },
    { item: "Chickpeas + white beans", qty: "1 lb each", cost: 3.0, note: "the body of the dizi pot" },
    { item: "Brown lentils (for adasi)", qty: "2 lb", cost: 2.8, note: "the bank for the lentil pottage" },
    { item: "Potatoes", qty: "~3 lb", cost: 2.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.5 },
    { item: "Tomato paste", qty: "1 can", cost: 1.0, spansWeeks: true },
    { item: "Dried limes (top up)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Cumin, turmeric, cinnamon", qty: "spice top-up", cost: 1.5, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Fresh herbs + radish (sabzi khordan)", qty: "1 bundle", cost: 2.0, note: "raw herbs alongside the mash" },
    { item: "Flatbread", qty: "3 rounds", cost: 3.0, note: "torn into the broth for tilit" },
    { item: "Oil", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const irWeek6Kashk: WeekPlan = {
  slug: "ir-week-6-kashk",
  number: 6,
  cuisine: "persian",
  theme: "Kashk & Eggplant",
  title: "Week 6 — Kashk & Eggplant",
  description:
    "Eggplant, the meat of the poor, in its richest Persian guises — fried soft and dressed with kashk, garlic, and fried mint, or smoked into a tomato-and-egg mash. Cheap summer eggplant becomes a luxurious-tasting dinner with no meat at all.",
  context:
    `Eggplant has long been called the meat of the poor in Iran, and this week is its showcase. Kashk-e bademjan fries or roasts eggplant to a silky pulp and dresses it with kashk (the tangy dried whey, reconstituted), caramelized onion, fried mint, garlic, and a few walnuts — a dish that tastes rich and meaty for the price of a vegetable. Mirza ghasemi smokes the eggplant over flame, then folds it with tomato, garlic, and egg into a savory mash. Borani bademjan cools fried eggplant in garlicky yogurt. Each leans on the preserved kashk or a tub of yogurt to add body and tang where meat would be, and on the cheap glut of summer eggplant. Served with bread and rice, nothing of the vegetable is wasted.`,
  dishes: [
    "Kashk-e bademjan (eggplant with kashk and fried mint)",
    "Mirza ghasemi (smoked eggplant with tomato and egg)",
    "Borani bademjan (fried eggplant in garlic yogurt)",
  ],
  proteinNote:
    "Kashk, yogurt, eggs, and walnuts carry the protein where meat would be; with bread and rice the eggplant dishes clear the floor without it.",
  bonus: false,
  preciousThread: "A jar of kashk and a handful of walnuts to enrich the bademjan.",
  engine: [
    "chelo / steamed rice and tahdig — beside the eggplant dishes, or bread to scoop them",
    "the onion-turmeric base — and the fried mint and crisp onion (na'na dagh, piaz dagh) that crown kashk-e bademjan",
    "dried lime / garlic staples — the foundation aromatics under every eggplant dish",
    "flatbread — torn to scoop the kashk-e bademjan and mirza ghasemi",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "kashk-e-bademjan with fried mint, onion, and walnut, plus bread", estCalories: 650, estProtein: 18 },
    { day: "Mon", dinner: "mirza-ghasemi (smoked eggplant and egg) with rice", estCalories: 640, estProtein: 20 },
    { day: "Tue", dinner: "borani-bademjan (eggplant in garlic yogurt) with bread", estCalories: 620, estProtein: 17 },
    { day: "Wed", dinner: "kashk-e-bademjan again, extra kashk, over rice", estCalories: 660, estProtein: 18 },
    { day: "Thu", dinner: "mirza-ghasemi with a fried egg and the last rice", estCalories: 650, estProtein: 21 },
    { day: "Fri", dinner: "borani-bademjan with bread and a tomato salad", estCalories: 610, estProtein: 16 },
    { day: "Sat", dinner: "one big eggplant mash from every leftover — kashk, tomato, egg, all of it", estCalories: 640, estProtein: 19 },
  ],
  shopping: [
    { item: "Basmati rice", qty: "3 lb", cost: 4.0, spansWeeks: true },
    { item: "Eggplants", qty: "~6 lb", cost: 5.0, note: "the meat of the poor — the week runs on the cheap glut" },
    { item: "Kashk", qty: "1 jar", cost: 3.0, spansWeeks: true, note: "the precious thread — tangy whey for the bademjan" },
    { item: "Walnuts", qty: "small", cost: 2.0, spansWeeks: true, note: "the precious thread — to stud the kashk-e bademjan" },
    { item: "Eggs (for mirza ghasemi)", qty: "1/2 dozen", cost: 1.5 },
    { item: "Tomatoes", qty: "~2 lb", cost: 2.0 },
    { item: "Plain yogurt (for borani)", qty: "1 tub", cost: 1.5, spansWeeks: true },
    { item: "Onions", qty: "~3 lb", cost: 2.5 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Dried mint", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Flatbread", qty: "3 rounds", cost: 3.0 },
    { item: "Oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 16,
};

export const irWeek7Tahchin: WeekPlan = {
  slug: "ir-week-7-tahchin",
  number: 7,
  cuisine: "persian",
  theme: "Tahchin & Dami",
  title: "Week 7 — Tahchin & Dami",
  description:
    "The rice-cake finale. Tahchin bakes saffron, yogurt, and egg into a golden sliceable cake around a little chicken; dami and estamboli polo steam everything in one pot. The week the tahdig — the prized scorched crust — becomes the whole dinner.",
  context:
    `The arc closes by canonizing the tahdig — the scorched crust at the bottom of the rice pot, the most fought-over part of every Persian meal — into the dish itself. Tahchin binds saffron, yogurt, and egg with the rice and bakes it into a golden cake, hiding a little poached chicken inside so a few ounces of meat dress a celebration; the whole thing is crust. Dami gojeh steams tomato rice in one frugal pot until it forms its own crisp base; estamboli polo stretches the rice with diced potato and tomato. Each is the constant foundation — rice, the patient steam, the tahdig — promoted from side to center, and each makes a feast-looking dinner from pantry rice, a saffron pinch, and whatever is cheap. The prize crust, the whole point, and nothing wasted.`,
  dishes: [
    "Tahchin (baked saffron-yogurt rice cake with chicken)",
    "Dami gojeh (one-pot tomato rice)",
    "Estamboli polo (potato and tomato rice)",
  ],
  proteinNote:
    "Tahchin's yogurt, egg, and small piece of chicken carry the protein; the dami and polo lean on the rice itself and a little yogurt alongside.",
  bonus: false,
  preciousThread: "A generous pinch of saffron to gild the tahchin and the dami.",
  engine: [
    "chelo / parboiled rice and the tahdig — the constant foundation, here promoted to the dish itself",
    "the onion-turmeric base — under the dami and estamboli tomato rices",
    "dried lime / saffron staples — the foundation aromatics that perfume the rice cakes",
    "flatbread — alongside the rice cakes and to wrap the leftovers",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "tahchin — baked saffron-yogurt rice cake with chicken", estCalories: 700, estProtein: 26 },
    { day: "Mon", dinner: "leftover tahchin wedges with yogurt and herbs", estCalories: 680, estProtein: 24 },
    { day: "Tue", dinner: "dami-gojeh (one-pot tomato rice) with its tahdig", estCalories: 600, estProtein: 16 },
    { day: "Wed", dinner: "estamboli-polo (potato and tomato rice)", estCalories: 640, estProtein: 17 },
    { day: "Thu", dinner: "tahchin again, a fresh cake, with a tomato salad", estCalories: 700, estProtein: 26 },
    { day: "Fri", dinner: "dami-gojeh with a fried egg and bread", estCalories: 640, estProtein: 19 },
    { day: "Sat", dinner: "every leftover rice pressed and fried into one great tahdig cake — nothing wasted", estCalories: 660, estProtein: 20 },
  ],
  shopping: [
    { item: "Basmati rice", qty: "5 lb", cost: 6.0, spansWeeks: true, note: "the foundation, now the dish itself" },
    { item: "Chicken thigh/leg (for tahchin)", qty: "~3/4 lb", cost: 2.5, note: "a little meat dresses the rice cake" },
    { item: "Saffron", qty: "small", cost: 3.0, spansWeeks: true, note: "the precious thread — gilds tahchin and dami" },
    { item: "Plain yogurt", qty: "1 large tub", cost: 2.0, spansWeeks: true, note: "binds the tahchin crust" },
    { item: "Eggs", qty: "1 dozen", cost: 3.0 },
    { item: "Tomatoes + tomato paste", qty: "~3 lb / 1 can", cost: 3.0 },
    { item: "Potatoes (for estamboli)", qty: "~2 lb", cost: 1.5 },
    { item: "Onions", qty: "~2 lb", cost: 1.5 },
    { item: "Barberries", qty: "small", cost: 1.5, spansWeeks: true, note: "to garnish the tahchin" },
    { item: "Dried mint + herbs", qty: "1 bundle", cost: 1.5 },
    { item: "Flatbread", qty: "2 rounds", cost: 2.0 },
    { item: "Oil/butter", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 18,
};

export const persianWeeks: WeekPlan[] = [
  irWeek1Khoresh,
  irWeek2Polo,
  irWeek3Ash,
  irWeek4Kuku,
  irWeek5Abgoosht,
  irWeek6Kashk,
  irWeek7Tahchin,
];
