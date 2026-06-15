import type { WeekPlan } from "../types";

// Challenge #4 — Ashkenazi Jewish cucina povera ("Schmaltz & Onions").
//
// The shape here is NOT the Italian one-ingredient-per-week arc. The Ashkenazi
// table has a constant foundation present every week — schmaltz & gribenes,
// jammy onions, a pot of beans, the bread — shown once in each week's engine,
// never made a theme. The weeks emphasize what you actually eat (potato,
// herring, kasha, cabbage, the dairy supper, eggs) under the cuisine's real
// structural rhythm: the kosher meat/dairy line (weekdays pareve and dairy,
// meat scarce and dear) and the slow bend of the whole week toward the Sabbath.
// Week 7 — Shabbos — is the feast the thrift of Weeks 1–6 pays for.

const ENGINE_NOTE = {
  schmaltz: "schmaltz-and-gribenes — render a jar Sunday; the gold and the cracklings dress the whole week",
  onions: "caramelized-onions — a big pot of jammy onions; the flavor under everything",
  beans: "pot-of-white-beans — a pot of beans for soups, borscht, and the cholent to come",
  challah: "challah — bake or buy the braid; stale slices feed kugel and chopped herring",
};

export const ashWeek1Potato: WeekPlan = {
  slug: "ash-week-1-potato",
  number: 1,
  cuisine: "ashkenazi",
  theme: "The Potato",
  title: "Week 1 — Bulbe",
  description:
    "Bulbe — the potato — was the floor under shtetl life: cheap, filling, and alive in the cellar all winter long. A whole week of one humble tuber made glorious by fire and fat — shredded into lacy latkes, baked into a shatter-topped kugel, folded into knishes, simmered into soup.",
  context:
    "When the harvest failed and the purse was empty, there was always bulbe. An old Yiddish rhyme runs the week out — Sunday potatoes, Monday potatoes, and for Shabbos, a potato kugel. It sounds like deprivation; on the plate it is anything but. Grated raw and wrung bone-dry, bound with egg and a whisper of matzo meal, fried in hot oil or baked over a slick of schmaltz, the poorest root in the ground turns crackling, golden, and rich.",
  dishes: [
    "Potato latkes with applesauce",
    "Potato kugel, shatter-topped",
    "Potato knish",
    "Potato & onion soup",
    "Draniki with a fried egg",
  ],
  proteinNote:
    "Leanest week of the arc — carried by the egg in the latkes and kugel, the schmaltz, and a side of herring or beans. Lean on the engine.",
  preciousThread:
    "A jar of rendered schmaltz and its gribenes — the gold that makes a potato taste like far more than a potato.",
  engine: [ENGINE_NOTE.schmaltz, ENGINE_NOTE.onions, ENGINE_NOTE.challah, "A sack of potatoes and a box grater — Sunday's whole job is grating, salting, and wringing the shreds dry"],
  days: [
    { day: "Sun", isCookDay: true, dinner: "potato-onion-soup", estCalories: 420, estProtein: 13 },
    { day: "Mon", dinner: "potato-latkes", estCalories: 480, estProtein: 12 },
    { day: "Tue", dinner: "knish", estCalories: 450, estProtein: 12 },
    { day: "Wed", dinner: "potato-kugel", estCalories: 430, estProtein: 11 },
    { day: "Thu", dinner: "draniki (thin potato pancakes) with a fried egg and scallion", estCalories: 500, estProtein: 18 },
    { day: "Fri", dinner: "potato-latkes", estCalories: 480, estProtein: 12 },
    { day: "Sat", dinner: "potato kugel reheated crisp, with sweet-and-sour cabbage", estCalories: 470, estProtein: 14 },
  ],
  shopping: [
    { item: "Potatoes (russet/Yukon)", qty: "~8 lb", cost: 5.0 },
    { item: "Onions", qty: "~4 lb", cost: 3.5, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 4.5, spansWeeks: true },
    { item: "Chicken fat + skin (for schmaltz)", qty: "~1 lb", cost: 2.0 },
    { item: "Matzo meal", qty: "1 box", cost: 3.5, spansWeeks: true },
    { item: "Neutral oil", qty: "1 bottle", cost: 4.0, spansWeeks: true },
    { item: "Rye bread", qty: "1 loaf", cost: 3.5 },
    { item: "Apples (for applesauce)", qty: "~2 lb", cost: 2.5 },
    { item: "Flour (knish dough)", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Sour cream (optional)", qty: "1 tub", cost: 2.5 },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 15,
};

export const ashWeek2Herring: WeekPlan = {
  slug: "ash-week-2-herring",
  number: 2,
  cuisine: "ashkenazi",
  theme: "Herring & Pickle",
  title: "Week 2 — The Brine Barrel",
  description:
    "Before refrigeration there was salt and sour. Herring came north by the barrel — the poor man's protein, fat and cheap — and everything that could be pickled was: cucumbers, beets, cabbage, the roots of the cellar. A week built from the brine barrel and a good loaf of rye.",
  context:
    "A barrel of salt herring in the corner of the shop fed a family through the winter. Soaked to tame the salt, it was chopped with apple and onion into a spread, layered with onion under a film of oil, or folded into sour cream for a dairy supper. Around it stood the pickle crock — half-sours, sauerkraut, pickled beets — sharpness to cut the cold and the fat. Nothing fresh, nothing wasted, and somehow a table full of flavor.",
  dishes: [
    "Chopped herring on rye",
    "Herring in sour cream with boiled potatoes",
    "Schmaltz herring with onions",
    "Vinegret (beet & potato salad)",
  ],
  proteinNote:
    "Strong this week — herring is oily, cheap, and protein-dense. A board of herring, egg, and beans clears the floor with no meat at all.",
  preciousThread:
    "A jar of good sour cream — the one dairy indulgence that turns herring into a feast.",
  engine: [ENGINE_NOTE.onions, ENGINE_NOTE.beans, ENGINE_NOTE.challah, "A crock of half-sour pickles and a bag of beets and potatoes boiled ahead — the cold larder the week is built on"],
  days: [
    { day: "Sun", isCookDay: true, dinner: "vinegret", estCalories: 380, estProtein: 12 },
    { day: "Mon", dinner: "chopped-herring", estCalories: 430, estProtein: 20 },
    { day: "Tue", dinner: "schmaltz-herring", estCalories: 450, estProtein: 22 },
    { day: "Wed", dinner: "herring-in-sour-cream", estCalories: 470, estProtein: 22 },
    { day: "Thu", dinner: "chopped herring and a hard egg on rye, with pickles", estCalories: 440, estProtein: 22 },
    { day: "Fri", dinner: "schmaltz-herring", estCalories: 450, estProtein: 22 },
    { day: "Sat", dinner: "vinegret with white beans and the last of the rye", estCalories: 410, estProtein: 16 },
  ],
  shopping: [
    { item: "Salt / pickled herring", qty: "~2 lb", cost: 7.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Beets", qty: "~2 lb", cost: 2.5 },
    { item: "Potatoes", qty: "~3 lb", cost: 2.0 },
    { item: "Carrots", qty: "~1 lb", cost: 1.0 },
    { item: "Half-sour pickles", qty: "1 jar", cost: 3.5 },
    { item: "Sour cream", qty: "1 tub", cost: 2.5 },
    { item: "Apples", qty: "2", cost: 1.0 },
    { item: "Eggs", qty: "½ dozen", cost: 2.5, spansWeeks: true },
    { item: "Rye bread", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 17,
};

export const ashWeek3Kasha: WeekPlan = {
  slug: "ash-week-3-kasha",
  number: 3,
  cuisine: "ashkenazi",
  theme: "Kasha & Barley",
  title: "Week 3 — The Grain Pot",
  description:
    "Buckwheat and barley — the cheap, nutty, stick-to-your-ribs grains of the cold countries. Toasted kasha tossed with noodles and a heap of fried onion, barley swelling a mushroom soup, a mound of groats under brown gravy. The grain pot that filled the belly when meat was a rumor.",
  context:
    "Kasha — toasted buckwheat groats — is the taste of the Pale: earthy, a little smoky, deeply savory. Coated in egg and dried grain by grain so it stays fluffy, then married to bowtie noodles (varnishkes) and onions fried almost black, it becomes a dish people who grew up poor still crave. Barley does the same work in the soup pot, drinking up the liquor of dried mushrooms into something that tastes like it simmered with a roast — though no roast was anywhere near it.",
  dishes: [
    "Kasha varnishkes",
    "Mushroom & barley soup",
    "Kasha with mushroom gravy",
    "Lima bean soup",
  ],
  proteinNote:
    "Solid — buckwheat is a complete protein, and the beans and barley back it up. The egg that coats the kasha adds more.",
  preciousThread:
    "A handful of dried wild mushrooms — pennies' worth of perfume that gives the whole pot a meaty soul.",
  engine: [ENGINE_NOTE.schmaltz, ENGINE_NOTE.onions, ENGINE_NOTE.beans, "Toast and steam a big pot of kasha and soak the dried mushrooms (save every drop of the dark soaking liquor for stock)"],
  days: [
    { day: "Sun", isCookDay: true, dinner: "mushroom-barley-soup", estCalories: 420, estProtein: 16 },
    { day: "Mon", dinner: "kasha-varnishkes", estCalories: 520, estProtein: 17 },
    { day: "Tue", dinner: "lima-bean-soup", estCalories: 440, estProtein: 20 },
    { day: "Wed", dinner: "kasha-with-mushroom-gravy", estCalories: 480, estProtein: 15 },
    { day: "Thu", dinner: "kasha-varnishkes", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "mushroom-barley-soup with rye and butter", estCalories: 450, estProtein: 16 },
    { day: "Sat", dinner: "lima beans and the last of the kasha, fried together with onion", estCalories: 470, estProtein: 19 },
  ],
  shopping: [
    { item: "Buckwheat groats (kasha)", qty: "1 box", cost: 3.5 },
    { item: "Pearl barley", qty: "1 lb", cost: 1.5 },
    { item: "Bowtie noodles (varnishkes)", qty: "1 lb", cost: 1.5 },
    { item: "Dried lima beans", qty: "1 lb", cost: 2.0 },
    { item: "Dried mushrooms", qty: "1 oz", cost: 3.0, spansWeeks: true },
    { item: "Fresh mushrooms", qty: "~1 lb", cost: 3.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Carrots + celery", qty: "—", cost: 2.5 },
    { item: "Eggs", qty: "½ dozen", cost: 2.5, spansWeeks: true },
    { item: "Rye bread", qty: "1 loaf", cost: 3.5 },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 15,
};

export const ashWeek4Cabbage: WeekPlan = {
  slug: "ash-week-4-cabbage",
  number: 4,
  cuisine: "ashkenazi",
  theme: "Cabbage & Beet",
  title: "Week 4 — The Winter Cellar",
  description:
    "What survived the long winter underground and in the crock: cabbage and beets, carrots and onions. Sweet-and-sour is the key of the week — vinegar against sugar, the bright trick that made dull roots sing. Borscht, stuffed cabbage, glazed carrots, a slow sweet-sour braise.",
  context:
    "The root cellar and the cabbage crock were the difference between eating and not eating from November to spring. Ashkenazi cooks answered their monotony with the sweet-and-sour note — esik-fleish, holishkes, sweet-sour cabbage — balancing a little sour salt or vinegar against a little sugar or raisin until a cheap head of cabbage tasted like a celebration. Beets went into borscht in a dozen forms; carrots, braised slow with honey into tzimmes, carried the hope of a sweeter year.",
  dishes: [
    "Holishkes (sweet-and-sour stuffed cabbage)",
    "Borscht with potato & beans",
    "Sweet-and-sour cabbage",
    "Carrot tzimmes",
  ],
  proteinNote:
    "The stuffed cabbage carries a little meat and rice; the beans in the borscht and a hard egg do the rest. A meatier week than it looks.",
  preciousThread:
    "A half-pound of cheap ground beef for the holishkes — the one taste of meat before Shabbos.",
  engine: [ENGINE_NOTE.schmaltz, ENGINE_NOTE.onions, ENGINE_NOTE.beans, "Core and blanch a head of cabbage for rolling, and roast a tray of beets — the week's two long jobs, done once"],
  days: [
    { day: "Sun", isCookDay: true, dinner: "borscht", estCalories: 360, estProtein: 14 },
    { day: "Mon", dinner: "holishkes", estCalories: 480, estProtein: 22 },
    { day: "Tue", dinner: "sweet-and-sour-cabbage", estCalories: 380, estProtein: 10 },
    { day: "Wed", dinner: "tzimmes", estCalories: 400, estProtein: 9 },
    { day: "Thu", dinner: "holishkes", estCalories: 480, estProtein: 22 },
    { day: "Fri", dinner: "borscht with a boiled potato and a hard egg", estCalories: 380, estProtein: 16 },
    { day: "Sat", dinner: "sweet-and-sour cabbage over kasha with white beans", estCalories: 430, estProtein: 16 },
  ],
  shopping: [
    { item: "Green cabbage", qty: "2 heads", cost: 3.0 },
    { item: "Beets", qty: "~3 lb", cost: 3.5 },
    { item: "Carrots", qty: "~2 lb", cost: 2.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Ground beef", qty: "½ lb", cost: 3.0 },
    { item: "Rice", qty: "1 cup", cost: 0.75, spansWeeks: true },
    { item: "Canned tomatoes", qty: "1 × 28 oz", cost: 2.5 },
    { item: "Raisins", qty: "small bag", cost: 1.5, spansWeeks: true },
    { item: "Prunes (for tzimmes)", qty: "small bag", cost: 2.5 },
    { item: "Potatoes", qty: "~2 lb", cost: 1.5 },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 16,
};

export const ashWeek5Dairy: WeekPlan = {
  slug: "ash-week-5-dairy",
  number: 5,
  cuisine: "ashkenazi",
  theme: "Milchig — The Dairy Supper",
  title: "Week 5 — Milchig",
  description:
    "The meatless dairy meal — milchig — was the everyday luxury of the poor: cheese, butter, sour cream, and eggs, kept strictly apart from meat by kosher law. Blintzes, noodle kugel, farmer cheese and noodles, cold pink borscht — the soft, white, comforting supper that asked for no meat at all.",
  context:
    "Because meat was dear and the laws of kashrut keep it forever apart from dairy, the weekday table leaned milchig — and made an art of it. Farmer cheese and pot cheese were cheap; an egg was always to hand; a spoon of sour cream made a soup a feast. Blintzes folded that cheese into thin crepes and fried them gold; lokshen kugel baked it sweet with noodles and raisins; on a hot day, cold beet borscht or sorrel schav, shocking pink and green with sour cream, was supper. This is the gentle, white heart of the cuisine.",
  dishes: [
    "Cheese blintzes with sour cream",
    "Lokshen kugel (sweet noodle pudding)",
    "Farmer cheese & noodles",
    "Cold beet borscht",
    "Schav (sorrel soup)",
  ],
  proteinNote:
    "High and easy — farmer cheese, cottage cheese, sour cream, and eggs do all the work. The richest-feeling week on the least money.",
  preciousThread:
    "A tub of real farmer cheese — the soul of the blintz and the noodle bowl.",
  engine: [ENGINE_NOTE.onions, ENGINE_NOTE.challah, "Make a stack of thin blintz crepes ahead and boil a pot of egg noodles", "Keep cheese, butter, and sour cream strictly to this dairy week — no schmaltz, no meat"],
  days: [
    { day: "Sun", isCookDay: true, dinner: "cold-beet-borscht", estCalories: 360, estProtein: 16 },
    { day: "Mon", dinner: "farmer-cheese-and-noodles", estCalories: 520, estProtein: 26 },
    { day: "Tue", dinner: "cheese-blintzes", estCalories: 520, estProtein: 24 },
    { day: "Wed", dinner: "lokshen-kugel", estCalories: 470, estProtein: 15 },
    { day: "Thu", dinner: "schav", estCalories: 320, estProtein: 15 },
    { day: "Fri", dinner: "cheese-blintzes", estCalories: 520, estProtein: 24 },
    { day: "Sat", dinner: "cold lokshen kugel with sour cream and a glass of schav", estCalories: 450, estProtein: 18 },
  ],
  shopping: [
    { item: "Farmer cheese", qty: "~2 lb", cost: 6.0 },
    { item: "Cottage cheese", qty: "1 tub", cost: 3.0 },
    { item: "Sour cream", qty: "2 tubs", cost: 5.0 },
    { item: "Butter", qty: "1 lb", cost: 4.0, spansWeeks: true },
    { item: "Egg noodles", qty: "2 lb", cost: 3.0 },
    { item: "Eggs", qty: "1 dozen", cost: 4.5, spansWeeks: true },
    { item: "Flour (crepes)", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Beets", qty: "~2 lb", cost: 2.5 },
    { item: "Sorrel (schav)", qty: "1 bunch", cost: 2.5 },
    { item: "Raisins + cinnamon", qty: "—", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const ashWeek6Eggs: WeekPlan = {
  slug: "ash-week-6-eggs",
  number: 6,
  cuisine: "ashkenazi",
  theme: "Eggs & the Schmaltz Larder",
  title: "Week 6 — Eier un Tsibeles",
  description:
    "Eggs and onions — eier mit tsibeles — and the schmaltz larder behind them. The thriftiest suppers in the book: eggs mashed with onion and chicken fat, broken matzo fried into a tangle, good rye spread thick with schmaltz and scattered with gribenes. Almost nothing, made into plenty.",
  context:
    "When there was truly nothing, there were eggs, onions, and the schmaltz jar. Hard eggs mashed coarse with masses of raw and fried onion and enough rendered fat to bind — eier mit tsibeles — is a dish Jews of a certain age will tell you they'd choose over anything fancier. Matzo brei rescued the broken sheets at the bottom of the Passover box; schmaltz on rye with crisp gribenes and coarse salt was the poorest plate of all, and a benediction. This is the larder at its barest, and its most beloved.",
  dishes: [
    "Eggs and onions (eier mit tsibeles)",
    "Matzo brei",
    "Schmaltz on rye with gribenes",
    "Baked eggs over caramelized onions",
  ],
  proteinNote:
    "Carried almost entirely by eggs — cheap, complete, and everywhere. A board of egg-and-onion on rye is a full supper.",
  preciousThread:
    "The schmaltz jar itself — a winter's worth of rendered gold, hoarded spoon by spoon.",
  engine: [ENGINE_NOTE.schmaltz, ENGINE_NOTE.onions, ENGINE_NOTE.challah, "Hard-boil a dozen eggs at the start of the week — they become half the suppers"],
  days: [
    { day: "Sun", isCookDay: true, dinner: "baked-eggs-with-onions", estCalories: 380, estProtein: 18 },
    { day: "Mon", dinner: "eggs-and-onions", estCalories: 420, estProtein: 20 },
    { day: "Tue", dinner: "matzo-brei", estCalories: 480, estProtein: 20 },
    { day: "Wed", dinner: "schmaltz-on-rye", estCalories: 380, estProtein: 11 },
    { day: "Thu", dinner: "eggs-and-onions", estCalories: 420, estProtein: 20 },
    { day: "Fri", dinner: "baked-eggs-with-onions", estCalories: 380, estProtein: 18 },
    { day: "Sat", dinner: "matzo brei, savory, with the last of the gribenes", estCalories: 500, estProtein: 21 },
  ],
  shopping: [
    { item: "Eggs", qty: "2 dozen", cost: 9.0, spansWeeks: true },
    { item: "Onions", qty: "~4 lb", cost: 3.5, spansWeeks: true },
    { item: "Chicken fat + skin (for schmaltz)", qty: "~1 lb", cost: 2.0 },
    { item: "Matzo", qty: "1 box", cost: 4.0 },
    { item: "Rye bread", qty: "1 loaf", cost: 3.5 },
    { item: "Radishes + scallions", qty: "—", cost: 2.0 },
    { item: "Neutral oil", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Salt, pepper", qty: "—", cost: 0.5, spansWeeks: true },
  ],
  firstShopTotal: 25,
  steadyStateWeekly: 14,
};

export const ashWeek7Shabbos: WeekPlan = {
  slug: "ash-week-7-shabbos",
  number: 7,
  cuisine: "ashkenazi",
  theme: "Shabbos — The Feast",
  title: "Week 7 — Shabbos",
  description:
    "The feast the whole frugal week pays for. Once a week, the meat comes out: golden chicken soup with kneydlach, gefilte fish and sharp chrein, the roast bird, and cholent — the slow overnight stew born of the law against lighting a fire on the Sabbath. Six days of thrift, redeemed in one table.",
  context:
    "Everything saved through the week — the schmaltz, the carcass, the last of the beans and barley — comes together for Shabbos, the still point the calendar turns on. Because no fire may be kindled on the Sabbath, the cholent goes into a low oven or onto banked coals at Friday dusk and emerges, transformed by eighteen patient hours, at Saturday noon. The chicken gives its broth to the soup and its body to the table; its bones will start next week's pot. This is constraint turned, one day in seven, into abundance — and it is the point of all the rest.",
  dishes: [
    "Cholent (the overnight stew)",
    "Chicken soup with kneydlach",
    "Gefilte fish with chrein",
    "Roast chicken with schmaltz",
    "Kreplach in broth",
  ],
  proteinNote:
    "The meat week — chicken, beef, fish, eggs, and beans together. The protein floor is the easiest of the arc to clear; the discipline this week is the budget, not the protein.",
  preciousThread:
    "The Shabbos chicken — bought whole, it becomes broth, soup meat, a roast, schmaltz, and the bones for next week. One bird, the whole table.",
  engine: [ENGINE_NOTE.beans, ENGINE_NOTE.challah, "Friday afternoon: build the cholent and set it on the lowest flame to hold overnight", "Simmer the whole chicken Friday — the broth for soup, the meat for kreplach, the fat for schmaltz, the carcass saved"],
  days: [
    { day: "Sun", dinner: "kreplach", estCalories: 420, estProtein: 20 },
    { day: "Mon", dinner: "chicken-soup-with-kneydlach", estCalories: 380, estProtein: 24 },
    { day: "Tue", dinner: "gefilte-fish", estCalories: 260, estProtein: 22 },
    { day: "Wed", dinner: "lima beans and barley with the last of the soup meat", estCalories: 460, estProtein: 24 },
    { day: "Thu", dinner: "roast-chicken-with-schmaltz", estCalories: 520, estProtein: 40 },
    { day: "Fri", isCookDay: true, dinner: "gefilte-fish", estCalories: 260, estProtein: 22 },
    { day: "Sat", dinner: "cholent", estCalories: 620, estProtein: 34 },
  ],
  shopping: [
    { item: "Whole chicken", qty: "1 (~4 lb)", cost: 7.0 },
    { item: "Flanken / marrow bone (cholent)", qty: "~1 lb", cost: 4.0 },
    { item: "Freshwater fish (carp/whitefish/pike)", qty: "~2 lb", cost: 6.0 },
    { item: "Dried beans + barley", qty: "—", cost: 2.0, spansWeeks: true },
    { item: "Potatoes + onions", qty: "—", cost: 3.0, spansWeeks: true },
    { item: "Carrots, celery, parsnip, dill", qty: "—", cost: 3.5 },
    { item: "Matzo meal (kneydlach)", qty: "—", cost: 1.0, spansWeeks: true },
    { item: "Horseradish (chrein)", qty: "1 root", cost: 1.5 },
    { item: "Eggs", qty: "½ dozen", cost: 2.5, spansWeeks: true },
    { item: "Flour (challah, kreplach)", qty: "—", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 34,
  steadyStateWeekly: 24,
};

export const ashkenaziWeeks: WeekPlan[] = [
  ashWeek1Potato,
  ashWeek2Herring,
  ashWeek3Kasha,
  ashWeek4Cabbage,
  ashWeek5Dairy,
  ashWeek6Eggs,
  ashWeek7Shabbos,
];
