import type { WeekPlan } from "../types";

// Challenge — Appalachian: Mountain Home Cooking.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "appalachian"; the
// engine is cuisine-agnostic, so these slot into the shared content arrays,
// tagged by cuisine. These are the curated, pregenerated defaults — the AI menu
// generator lets users compose variations on top of the same recipe pool.
//
// This is HILL-COUNTRY Appalachian — Scots-Irish and German mountain thrift —
// deliberately DISTINCT from the "american-south" Soul & Creole challenge: less
// rice, more cornbread + soup beans + sidemeat + a garden put up for winter.
//
// FOUNDATION (RULE #6): the constant base under every single week is cornbread +
// a pot of soup beans (pinto) + pork seasoning (fatback/sidemeat/lard) + a mess
// of greens + potatoes, with cornmeal as the staple grain. It lives in each
// week's `engine`, worded naturally for that week — it is NEVER itself a theme.
// Each of the seven weeks is a distinct real mountain dinner sitting on that base.

export const apWeek1Beans: WeekPlan = {
  slug: "ap-week-1-beans",
  number: 1,
  cuisine: "appalachian",
  theme: "Soup Beans & Cornbread",
  title: "Week 1 — Soup Beans & Cornbread",
  description:
    "The supper the whole mountain runs on: a pot of pinto beans simmered all day with a hunk of sidemeat until the pot likker turns thick and brown, ladled into a bowl and eaten with a wedge of hot skillet cornbread crumbled in. Cheap, filling, and better the second day.",
  context:
    `Soup beans and cornbread is the daily bread of the southern mountains — the supper a hill family could set on the back of the stove in the morning and forget until dark. A pound of dried pinto beans costs almost nothing, and seasoned with a little fatback or streaked meat and simmered slow, they throw off a brown pot likker that's half the meal: you sop it with cornbread or crumble the bread right into the bowl. Around it goes a mess of greens, fried taters, and a saucer of raw onion or chow-chow for bite. Nothing here is fancy and nothing is wasted — even the dried "leather britches" beans strung up on a porch the summer before come back to life in the same pot all winter long. This is the week that teaches the whole arc: everything else is built on this bowl.`,
  dishes: ["Soup beans", "Skillet cornbread", "Leather britches", "Fried taters & onions"],
  proteinNote:
    "Pinto beans carry the floor — about 15g protein per cooked cup — and the sidemeat is seasoning, a little flavoring a lot, not the protein source.",
  bonus: false,
  preciousThread: "A hunk of streaked sidemeat / fatback — the one bit of cured pork that flavors every pot of beans all week.",
  engine: [
    "Cornbread — cast-iron skillet cornbread baked in bacon grease, the daily bread (the constant base)",
    "Soup beans — a big pot of pinto beans simmered with sidemeat, the brown pot likker prized",
    "Pork seasoning — fatback/sidemeat/lard rendered down, a little flavoring a lot",
    "A mess of greens + potatoes — garden greens kilt with grease; taters fried in the skillet",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "soup beans simmered with sidemeat over hot skillet cornbread, with fried taters", estCalories: 580, estProtein: 21 },
    { day: "Mon", dinner: "soup beans and cornbread, the pot likker sopped, with kilt greens", estCalories: 520, estProtein: 18 },
    { day: "Tue", dinner: "leather britches beans cooked soft with a piece of fatback and a wedge of cornbread", estCalories: 530, estProtein: 19 },
    { day: "Wed", dinner: "fried taters and onions with the last of the soup beans and cornbread", estCalories: 500, estProtein: 16 },
    { day: "Thu", dinner: "soup beans again, deepened, with raw onion and a mess of greens", estCalories: 540, estProtein: 19 },
    { day: "Fri", dinner: "a soup-beans-and-cornbread supper with chow-chow and fried taters", estCalories: 510, estProtein: 17 },
    { day: "Sat", dinner: "zero-waste: a bean and cornbread skillet — leftover beans, greens, and crumbled cornbread fried up together", estCalories: 470, estProtein: 15 },
  ],
  shopping: [
    { item: "Pinto beans", qty: "2 lb", cost: 2.5, spansWeeks: true, note: "the pot under every week" },
    { item: "Cornmeal", qty: "5 lb", cost: 3.0, spansWeeks: true, note: "cornbread, the base" },
    { item: "Sidemeat / fatback", qty: "1 lb", cost: 3.0, spansWeeks: true, note: "seasons every bean pot" },
    { item: "Lard", qty: "1 lb", cost: 2.0, spansWeeks: true, note: "for the skillet and the cornbread" },
    { item: "Leather britches (dried shuck beans)", qty: "8 oz", cost: 2.0, note: "put up last summer" },
    { item: "Potatoes", qty: "5 lb", cost: 2.5, spansWeeks: true },
    { item: "Yellow onions", qty: "3 lb", cost: 1.5, spansWeeks: true },
    { item: "Collard / mustard greens", qty: "2 bunches", cost: 2.0 },
    { item: "Buttermilk", qty: "1 qt", cost: 1.5, note: "for the cornbread" },
    { item: "Cornmeal-rising / baking soda", qty: "1 box", cost: 1.0, spansWeeks: true },
    { item: "Chow-chow relish", qty: "1 jar", cost: 2.0, note: "canned last fall" },
  ],
  firstShopTotal: 25,
  steadyStateWeekly: 14,
};

export const apWeek2Greens: WeekPlan = {
  slug: "ap-week-2-greens",
  number: 2,
  cuisine: "appalachian",
  theme: "A Mess o' Greens",
  title: "Week 2 — A Mess o' Greens",
  description:
    "When the garden and the hillsides green up, dinner turns to a mess of greens — mustard, turnip, poke and creasy greens wilted down with a piece of sidemeat, plus killed lettuce dressed with hot bacon grease. Cheap spring food that tastes like the whole hollow waking up.",
  context:
    `Greens are the mountain's first crop and its longest one — from the wild creasy greens and poke that come up along the creek in early spring to the turnip and mustard greens that hold in the garden past frost. A "mess" just means enough for the table, picked that afternoon and cooked down low with a chunk of fatback until the leaves go silky and the pot likker turns dark and mineral. In April, before anything else is ready, mountain cooks make killed (or "kilt") lettuce: tender garden leaf-lettuce and green onions wilted at the table under a spoonful of screaming-hot bacon grease and a splash of vinegar. Poke is treasured but must be boiled through two changes of water before it's safe — the old hands knew exactly when in spring it was tender enough to eat and when it had grown too rank. Greens lean on the same bowl of soup beans and wedge of cornbread that anchors every week; here they step to the front of the plate.`,
  dishes: ["Killed lettuce & onions", "Kilt greens with sidemeat", "Poke sallet (twice-boiled)", "Creasy greens & potatoes"],
  proteinNote:
    "The week still rests on the bean pot and a fried egg or two for protein; the greens bring iron and bulk, and the sidemeat is seasoning, not the protein floor.",
  bonus: false,
  preciousThread: "A few rashers of good smoked bacon — rendered for the killed-lettuce dressing and to season the greens pot.",
  engine: [
    "Cornbread — a skillet of cornbread baked in hot grease, the daily bread (the constant base)",
    "Soup beans — the standing pot of pinto beans with sidemeat, still under every supper",
    "Pork seasoning — fatback and rendered bacon grease, a little flavoring the whole pot of greens",
    "A mess of greens + potatoes — the week's headline: greens kilt with grease, taters in the skillet",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "a big mess of kilt greens cooked down with sidemeat, soup beans, and skillet cornbread", estCalories: 560, estProtein: 20 },
    { day: "Mon", dinner: "killed lettuce and green onions under hot bacon grease, with beans and cornbread", estCalories: 500, estProtein: 16 },
    { day: "Tue", dinner: "creasy greens and potatoes simmered together with a fried egg on top", estCalories: 520, estProtein: 18 },
    { day: "Wed", dinner: "poke sallet, twice-boiled and finished in bacon grease, with cornbread and beans", estCalories: 480, estProtein: 15 },
    { day: "Thu", dinner: "turnip greens and their pot likker with cornbread to sop and a saucer of beans", estCalories: 540, estProtein: 19 },
    { day: "Fri", dinner: "kilt greens and fried taters with a wedge of cornbread and raw onion", estCalories: 500, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: a greens-and-bean pot likker soup with cornbread dumplings dropped in", estCalories: 460, estProtein: 14 },
  ],
  shopping: [
    { item: "Mustard / turnip greens", qty: "4 bunches", cost: 4.0, note: "or picked from the garden free" },
    { item: "Leaf lettuce & green onions", qty: "2 bunches", cost: 2.5, note: "for killed lettuce" },
    { item: "Smoked bacon", qty: "8 oz", cost: 3.0 },
    { item: "Pinto beans", qty: "1 lb", cost: 1.25, spansWeeks: true, note: "the standing pot" },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Sidemeat / fatback", qty: "8 oz", cost: 1.5, spansWeeks: true },
    { item: "Potatoes", qty: "3 lb", cost: 1.5, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.0, spansWeeks: true },
    { item: "Cider vinegar", qty: "1 bottle", cost: 1.5, spansWeeks: true, note: "for the greens and dressing" },
    { item: "Yellow onions", qty: "2 lb", cost: 1.0, spansWeeks: true },
    { item: "Buttermilk", qty: "1 qt", cost: 1.5 },
  ],
  firstShopTotal: 23,
  steadyStateWeekly: 14,
};

export const apWeek3Pork: WeekPlan = {
  slug: "ap-week-3-pork",
  number: 3,
  cuisine: "appalachian",
  theme: "Pork & Sidemeat",
  title: "Week 3 — Pork & Sidemeat",
  description:
    "Hog-killing was the mountain bank, and this is the week it pays out: sausage gravy over biscuits, fried pork chops with milk gravy, country ham with red-eye gravy, and souse made from the bits nothing else would use. Every scrap of the hog earns its keep.",
  context:
    `In the mountains the hog was the family bank — fattened on garden scraps and mast through the fall, then killed in the first hard cold so the meat would keep. A single hog rendered into lard for the skillet, sidemeat and fatback to season every bean pot for a year, hams and shoulders salt-cured and hung in the smokehouse, sausage ground and seasoned with sage, and the odd bits — the head, the feet, the cheeks — boiled into souse and pressed into a vinegar-sharp loaf so that, as the saying went, you used everything but the squeal. Country ham gives up its salt and a little fat to make red-eye gravy, a splash of black coffee swirled in the hot pan; a fried pork chop gives milk gravy. Even this protein-rich week never strays from the base — biscuits and cornbread, soup beans, greens, and taters fill the plate around the meat, which is treated as the treasure it was.`,
  dishes: ["Sausage gravy & biscuits", "Fried pork chops & milk gravy", "Country ham & red-eye gravy", "Souse / head cheese"],
  proteinNote:
    "This is the protein-rich week — pork chops, country ham, and sausage carry it directly — but the bean pot still backs the plate, and a little ham seasons the rest of the week's pots.",
  bonus: false,
  preciousThread: "A slice or two of salt-cured country ham — too precious to be the meal, just enough to make red-eye gravy and salt the beans.",
  engine: [
    "Cornbread & biscuits — the skillet cornbread plus a pan of buttermilk biscuits, the daily bread (the constant base)",
    "Soup beans — the standing pinto pot, this week seasoned with a country-ham hock",
    "Pork seasoning — fatback, lard, and rendered sausage grease flavoring everything",
    "A mess of greens + potatoes — greens kilt in the pork fat; taters fried alongside the chops",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "fried pork chops with milk gravy, soup beans, and biscuits", estCalories: 620, estProtein: 26 },
    { day: "Mon", dinner: "sausage gravy ladled over split buttermilk biscuits with fried taters", estCalories: 600, estProtein: 22 },
    { day: "Tue", dinner: "country ham with red-eye gravy, cornbread, and a mess of greens", estCalories: 560, estProtein: 24 },
    { day: "Wed", dinner: "souse and crackers with soup beans and raw onion", estCalories: 520, estProtein: 20 },
    { day: "Thu", dinner: "leftover pork chop chopped into the bean pot, over cornbread", estCalories: 580, estProtein: 23 },
    { day: "Fri", dinner: "sausage and fried taters with greens and the last biscuits", estCalories: 590, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: a pork-and-bean skillet — every leftover bit of pork, the beans, greens, and crumbled cornbread", estCalories: 540, estProtein: 22 },
  ],
  shopping: [
    { item: "Pork chops (bone-in)", qty: "2 lb", cost: 6.0, note: "the headline meat" },
    { item: "Bulk pork sausage", qty: "1 lb", cost: 3.5 },
    { item: "Country ham slices", qty: "8 oz", cost: 4.0, note: "for red-eye gravy" },
    { item: "Souse / head cheese", qty: "8 oz", cost: 2.5, note: "made at hog-killing" },
    { item: "All-purpose flour", qty: "5 lb", cost: 2.5, spansWeeks: true, note: "biscuits & gravy" },
    { item: "Buttermilk", qty: "1 qt", cost: 1.5, spansWeeks: true },
    { item: "Pinto beans", qty: "1 lb", cost: 1.25, spansWeeks: true },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Potatoes", qty: "3 lb", cost: 1.5, spansWeeks: true },
    { item: "Collard greens", qty: "1 bunch", cost: 1.5 },
    { item: "Milk", qty: "1/2 gal", cost: 2.0, note: "for the milk gravy" },
    { item: "Coffee", qty: "small bag", cost: 2.0, spansWeeks: true, note: "for red-eye gravy" },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 16,
};

export const apWeek4Cornmeal: WeekPlan = {
  slug: "ap-week-4-cornmeal",
  number: 4,
  cuisine: "appalachian",
  theme: "Cornmeal",
  title: "Week 4 — Cornmeal",
  description:
    "Corn is king in the hills, and this week walks every road it travels: fried cornmeal mush crisped in grease, thin johnnycakes off the griddle, grits under sausage, and corn fritters sweet with summer ears. The same meal that makes the daily bread becomes the dinner itself.",
  context:
    `Where wheat wouldn't grow on a steep hillside, corn would — and so the mountain table was built on cornmeal in a dozen forms. Boiled into a thick mush and left to set overnight, it's sliced and fried crisp in the morning grease; thinned and griddled, it's johnnycakes, the plainest cake there is; ground coarse and simmered, it's grits, eaten under a piece of sausage and its gravy. In high summer, kernels cut fresh from the cob go into corn fritters and fried corn. This is the one week where the constant grain steps fully into the spotlight — but note the discipline of RULE #6: cornbread, the inedible-as-a-meal "plate" of the mountain table, stays the base; the *theme* is the cornmeal dishes you actually sit down and eat for supper. Soup beans and greens still ring the plate, because mush and grits, like cornbread, want a pot of beans beside them.`,
  dishes: ["Fried cornmeal mush", "Johnnycakes", "Grits with sausage", "Corn fritters"],
  proteinNote:
    "Cornmeal is mostly starch, so the protein floor leans hard on the standing bean pot, a little sausage with the grits, and eggs cooked alongside the mush.",
  bonus: false,
  preciousThread: "A jar of sorghum molasses — the mountain sweetener, drizzled over johnnycakes and fried mush in place of store syrup.",
  engine: [
    "Cornbread — the skillet cornbread that's the daily bread (the constant base) even in cornmeal week",
    "Soup beans — the standing pinto pot, set beside the mush and grits the way it always is",
    "Pork seasoning — sausage grease and fatback flavoring the grits and the bean pot",
    "A mess of greens + potatoes — greens kilt with grease; taters fried with the morning mush",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "fried cornmeal mush crisped in grease with sorghum, sausage, and soup beans", estCalories: 580, estProtein: 19 },
    { day: "Mon", dinner: "johnnycakes off the griddle with molasses and a side of beans", estCalories: 500, estProtein: 15 },
    { day: "Tue", dinner: "grits simmered soft under a piece of sausage and its gravy, with greens", estCalories: 540, estProtein: 18 },
    { day: "Wed", dinner: "corn fritters fried golden with fried taters and onions", estCalories: 520, estProtein: 16 },
    { day: "Thu", dinner: "fried mush with a fried egg, beans, and cornbread", estCalories: 530, estProtein: 18 },
    { day: "Fri", dinner: "grits and greens with the last of the sausage and a wedge of cornbread", estCalories: 510, estProtein: 17 },
    { day: "Sat", dinner: "zero-waste: leftover grits and mush fried into cakes with beans and greens piled on", estCalories: 470, estProtein: 15 },
  ],
  shopping: [
    { item: "Cornmeal", qty: "5 lb", cost: 3.0, spansWeeks: true, note: "the week's headline grain" },
    { item: "Grits (stone-ground)", qty: "2 lb", cost: 2.5 },
    { item: "Sorghum molasses", qty: "1 pint", cost: 4.0, note: "the mountain sweetener" },
    { item: "Bulk pork sausage", qty: "8 oz", cost: 2.0 },
    { item: "Pinto beans", qty: "1 lb", cost: 1.25, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.0, spansWeeks: true },
    { item: "Sidemeat / fatback", qty: "8 oz", cost: 1.5, spansWeeks: true },
    { item: "Potatoes", qty: "3 lb", cost: 1.5, spansWeeks: true },
    { item: "Sweet corn / frozen corn", qty: "2 lb", cost: 2.0, note: "for fritters" },
    { item: "Lard", qty: "1 lb", cost: 2.0, spansWeeks: true },
    { item: "Mustard greens", qty: "1 bunch", cost: 1.5 },
  ],
  firstShopTotal: 25,
  steadyStateWeekly: 14,
};

export const apWeek5Skillet: WeekPlan = {
  slug: "ap-week-5-skillet",
  number: 5,
  cuisine: "appalachian",
  theme: "Skillet Suppers",
  title: "Week 5 — Skillet Suppers",
  description:
    "The black cast-iron skillet is the heart of the mountain kitchen, and this week it earns its name: skillet-fried chicken, chicken and slick dumplings stewed off the bones, fried taters crusted brown, and the gravy made right in the pan. One pan, one fire, supper done.",
  context:
    `A mountain kitchen might own little, but it owned a cast-iron skillet, seasoned black over years of bacon grease and never washed with soap. This is the pan that fries the chicken — a Sunday bird from the yard, dredged in seasoned flour and shallow-fried in lard until the crust shatters — and the same pan makes cream gravy from the brown bits left behind. A stewing hen too old to lay goes into the pot instead, simmered until tender and finished with "slick" dumplings, flat noodles of rolled dough dropped into the broth, or fat "cat-head" dumplings if you like them puffed. Fried taters and onions crisp in the leftover grease. The chicken is the rare protein splurge, stretched with dumplings and the standing bean pot so a single bird feeds the table all week.`,
  dishes: ["Skillet fried chicken", "Chicken & slick dumplings", "Fried taters & onions", "Pan cream gravy"],
  proteinNote:
    "Chicken carries this week directly — fried and stewed off the bones — backed as always by the standing bean pot and eggs, so one bird stretches across seven suppers.",
  bonus: false,
  preciousThread: "A whole yard hen — the one real meat splurge, stretched into both fried chicken and a pot of dumplings so nothing is left but bones for broth.",
  engine: [
    "Cornbread — the skillet cornbread alongside (or biscuits), the daily bread (the constant base)",
    "Soup beans — the standing pinto pot, simmered with a little sidemeat as ever",
    "Pork seasoning — lard for the frying and fatback in the beans, a little flavoring a lot",
    "A mess of greens + potatoes — greens kilt with grease; taters fried in the chicken skillet",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "skillet fried chicken with pan cream gravy, fried taters, and soup beans", estCalories: 640, estProtein: 28 },
    { day: "Mon", dinner: "chicken and slick dumplings stewed off the leftover bones, with greens", estCalories: 600, estProtein: 25 },
    { day: "Tue", dinner: "fried taters and onions crusted brown with beans and cornbread", estCalories: 520, estProtein: 17 },
    { day: "Wed", dinner: "chicken and dumplings again, richer, with a wedge of cornbread", estCalories: 590, estProtein: 24 },
    { day: "Thu", dinner: "the last picked chicken stirred into the bean pot over cornbread", estCalories: 560, estProtein: 23 },
    { day: "Fri", dinner: "fried taters, kilt greens, and a fried egg with beans", estCalories: 520, estProtein: 18 },
    { day: "Sat", dinner: "zero-waste: a skillet of fried taters, picked chicken, beans, and greens bound with cornbread", estCalories: 540, estProtein: 21 },
  ],
  shopping: [
    { item: "Whole chicken / stewing hen", qty: "1 (4 lb)", cost: 6.0, note: "the one meat splurge" },
    { item: "All-purpose flour", qty: "5 lb", cost: 2.5, spansWeeks: true, note: "dredge, gravy, dumplings" },
    { item: "Lard", qty: "1 lb", cost: 2.0, spansWeeks: true, note: "for frying the chicken" },
    { item: "Pinto beans", qty: "1 lb", cost: 1.25, spansWeeks: true },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Sidemeat / fatback", qty: "8 oz", cost: 1.5, spansWeeks: true },
    { item: "Potatoes", qty: "5 lb", cost: 2.5, spansWeeks: true },
    { item: "Yellow onions", qty: "2 lb", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.0, spansWeeks: true },
    { item: "Milk", qty: "1/2 gal", cost: 2.0, note: "for the cream gravy" },
    { item: "Turnip greens", qty: "1 bunch", cost: 1.5 },
    { item: "Buttermilk", qty: "1 qt", cost: 1.5 },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const apWeek6Garden: WeekPlan = {
  slug: "ap-week-6-garden",
  number: 6,
  cuisine: "appalachian",
  theme: "Garden & Canning",
  title: "Week 6 — Garden & Canning",
  description:
    "High summer, when the garden won't quit: fried green tomatoes off the vine, succotash of corn and beans, shuck beans and potatoes from the strings hung to dry, and a big pot of garden vegetable soup. What can't be eaten now gets canned and dried for the cold months to come.",
  context:
    `The mountain garden was not a hobby — it was survival, a patch of ground worked hard from spring to frost so the family would eat through winter. In high summer it gives more than a table can hold: half-ripe green tomatoes sliced, dredged in cornmeal and fried; the "three sisters" together as succotash, corn and beans cooked with a little butter; squash, cabbage, and whatever else came on, all simmered into a garden vegetable soup that's different every day. The other half of the work is putting it up — green beans "leather-britched" on a string in the rafters, "shuck beans" dried in the hull, tomatoes and corn canned in glass jars in the August heat, kraut weighted down in a crock — so that the same garden feeds the soup-bean suppers of January. This week sits squarely on the constant base; the garden simply crowds the rest of the plate with color.`,
  dishes: ["Fried green tomatoes", "Succotash (corn & beans)", "Shuck beans & potatoes", "Garden vegetable soup"],
  proteinNote:
    "Vegetables bring vitamins and bulk; the protein floor stays on the standing bean pot, the succotash beans, and a little sidemeat in the soup.",
  bonus: false,
  preciousThread: "A few sun-warm vine tomatoes — too good to waste, sliced thick for frying green and saved ripe for the soup.",
  engine: [
    "Cornbread — the skillet cornbread to go with the soup, the daily bread (the constant base)",
    "Soup beans — the standing pinto pot; shuck beans from the rafters join it this week",
    "Pork seasoning — a little fatback in the soup and the shuck beans, flavoring a lot",
    "A mess of greens + potatoes — garden greens and new potatoes folded into the week's pots",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "a big pot of garden vegetable soup with cornbread and a saucer of beans", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "fried green tomatoes crusted in cornmeal with soup beans and greens", estCalories: 510, estProtein: 16 },
    { day: "Tue", dinner: "succotash of corn and beans cooked with butter and a wedge of cornbread", estCalories: 520, estProtein: 18 },
    { day: "Wed", dinner: "shuck beans and potatoes simmered soft with sidemeat", estCalories: 500, estProtein: 17 },
    { day: "Thu", dinner: "garden vegetable soup again, deepened, with fried green tomatoes on the side", estCalories: 530, estProtein: 17 },
    { day: "Fri", dinner: "fried taters, succotash, and beans with cornbread", estCalories: 510, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: every leftover garden bit thrown into a vegetable-and-bean soup with cornbread dumplings", estCalories: 460, estProtein: 15 },
  ],
  shopping: [
    { item: "Green tomatoes", qty: "3 lb", cost: 2.5, note: "from the garden, or cheap end-of-row" },
    { item: "Sweet corn / frozen corn", qty: "2 lb", cost: 2.0, note: "for succotash" },
    { item: "Shuck beans (dried in the hull)", qty: "8 oz", cost: 2.0, note: "put up last summer" },
    { item: "Summer squash & cabbage", qty: "3 lb", cost: 3.0, note: "for the soup" },
    { item: "Pinto beans", qty: "1 lb", cost: 1.25, spansWeeks: true },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true, note: "bread + dredge" },
    { item: "Sidemeat / fatback", qty: "8 oz", cost: 1.5, spansWeeks: true },
    { item: "Potatoes", qty: "3 lb", cost: 1.5, spansWeeks: true },
    { item: "Yellow onions", qty: "2 lb", cost: 1.0, spansWeeks: true },
    { item: "Butter", qty: "8 oz", cost: 2.0, note: "for the succotash" },
    { item: "Mustard greens", qty: "1 bunch", cost: 1.5 },
  ],
  firstShopTotal: 22,
  steadyStateWeekly: 13,
};

export const apWeek7River: WeekPlan = {
  slug: "ap-week-7-river",
  number: 7,
  cuisine: "appalachian",
  theme: "River & Féte",
  title: "Week 7 — River & Féte",
  description:
    "The closing week, where the creek and the gathering meet: catfish and trout rolled in cornmeal and fried at the riverbank, a long-simmered Brunswick-style chicken stew for the church homecoming, and an apple stack cake stacked thin and high for the feast. The frugal year ends in plenty.",
  context:
    `Even the poorest mountain family ate from the water — bottom-feeding catfish pulled from the muddy river, brook trout flicked out of cold mountain creeks — and the cooking was the same either way: rolled in seasoned cornmeal and fried crisp in a riverbank skillet of hot grease, eaten with cornbread and a mess of greens. The other half of this week is the *féte* — the homecoming, the funeral dinner, the all-day "working" when neighbors gathered. For that you make Brunswick-style stew, a thick mess of chicken, corn, beans and tomatoes simmered all day in a big pot to feed a crowd, and you make the apple stack cake — six or eight thin spice layers spread with sauce cooked from dried apples put up the fall before, stacked tall and left to ripen for days so the cake "melds" into one. The frugal arc closes on a table of plenty built, as always, from cheap things and patience — the same soup beans and cornbread still right there beside the feast.`,
  dishes: ["Fried catfish", "Cornmeal fried trout", "Brunswick-style chicken stew", "Apple stack cake"],
  proteinNote:
    "Fish and the stew chicken carry this week directly, backed by the stew's beans and the standing bean pot, so the protein floor holds even at the feast.",
  bonus: false,
  preciousThread: "A poke of dried apples — saved from last fall's drying, cooked down into the filling that makes the stack cake.",
  engine: [
    "Cornbread — the skillet cornbread that meets the fish and the stew, the daily bread (the constant base)",
    "Soup beans — the standing pinto pot, still beside the plate even at the homecoming",
    "Pork seasoning — fatback and lard for the frying and the bean pot, a little flavoring a lot",
    "A mess of greens + potatoes — greens kilt with grease; taters fried with the fish",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "fried catfish rolled in cornmeal with fried taters, beans, and cornbread", estCalories: 620, estProtein: 27 },
    { day: "Mon", dinner: "cornmeal fried trout with a mess of greens and a wedge of cornbread", estCalories: 560, estProtein: 25 },
    { day: "Tue", dinner: "Brunswick-style chicken stew simmered all day with corn and beans, over cornbread", estCalories: 600, estProtein: 24 },
    { day: "Wed", dinner: "the stew again, thicker, with fried taters", estCalories: 580, estProtein: 22 },
    { day: "Thu", dinner: "leftover fish flaked into the bean pot with greens and cornbread", estCalories: 540, estProtein: 21 },
    { day: "Fri", dinner: "a slice of apple stack cake after beans, greens, and cornbread", estCalories: 560, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: a fish-and-stew chowder of every leftover bit thickened with cornmeal, plus the last stack-cake slice", estCalories: 500, estProtein: 19 },
  ],
  shopping: [
    { item: "Catfish fillets", qty: "1.5 lb", cost: 6.0, note: "or caught free from the river" },
    { item: "Trout", qty: "1 lb", cost: 4.0, note: "creek-caught or cheap whole" },
    { item: "Chicken (for stew)", qty: "2 lb", cost: 3.5 },
    { item: "Dried apples", qty: "8 oz", cost: 3.0, note: "put up last fall, for the stack cake" },
    { item: "All-purpose flour", qty: "5 lb", cost: 2.5, spansWeeks: true, note: "stack cake + dredge" },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true, note: "to roll the fish + bread" },
    { item: "Sorghum molasses", qty: "1 pint", cost: 4.0, note: "for the stack cake" },
    { item: "Pinto beans", qty: "1 lb", cost: 1.25, spansWeeks: true },
    { item: "Sidemeat / fatback", qty: "8 oz", cost: 1.5, spansWeeks: true },
    { item: "Potatoes", qty: "3 lb", cost: 1.5, spansWeeks: true },
    { item: "Sweet corn / tomatoes (for stew)", qty: "2 lb", cost: 2.5 },
    { item: "Collard greens", qty: "1 bunch", cost: 1.5 },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 17,
};

export const appalachianWeeks: WeekPlan[] = [
  apWeek1Beans,
  apWeek2Greens,
  apWeek3Pork,
  apWeek4Cornmeal,
  apWeek5Skillet,
  apWeek6Garden,
  apWeek7River,
];
