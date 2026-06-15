import type { WeekPlan } from "../types";

// Challenge #4 — American South: Soul & Creole.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "american-south"; the
// engine is cuisine-agnostic, so these slot into the shared content arrays,
// tagged by cuisine. These are the curated, pregenerated defaults — the AI menu
// generator lets users compose variations on top of the same recipe pool.
//
// FOUNDATION (RULE #6): the constant base under every week is rice, cornmeal/
// cornbread, the holy trinity (onion, celery, bell pepper), and a little smoked
// pork to season the pot. It lives in each week's `engine`, never as a theme —
// each theme is a real dinner you actually eat. Dinner slugs reference recipes
// in src/content/recipes/*.

export const asWeek1RedBeans: WeekPlan = {
  slug: "as-week-1-red-beans",
  number: 1,
  cuisine: "american-south",
  theme: "Red Beans & Rice",
  title: "Week 1 — Red Beans & Rice",
  description:
    "The Monday pot that anchors the whole tradition. A long, lazy simmer of red beans seasoned with a smoked ham bone, ladled over rice — washday food, cooked while the laundry boiled, cheap and unhurried and better the second day.",
  context:
    `Red beans on a Monday is the oldest rhythm in the Creole and soul kitchen — a pot set to simmer while the week's wash boiled on the stove, so dinner cooked itself with almost no tending. The beans are West African in spirit (the one-pot bean dish brought across the Atlantic), the rice is the grain enslaved cooks grew and milled in the Carolina lowcountry, and the seasoning is the South's thrift made flavor: the bone left from Sunday's ham, a little smoked pork, the holy trinity sweated soft. A pound of dried beans and the pot likker they make feed a family for days, and the leftovers only deepen. Cornbread sops the bowl, and Hoppin' John — beans and rice's New Year cousin — promises the luck and coins the next year owes you.`,
  dishes: [
    "Red beans and rice (the Monday pot)",
    "Hoppin' John (black-eyed peas + rice)",
    "Butter beans (smothered lima beans)",
    "Cornbread to sop the pot likker",
  ],
  proteinNote:
    "The beans and peas carry the floor — red beans run ~15g protein per cooked cup — and the smoked pork is seasoning, not the protein source.",
  bonus: false,
  preciousThread: "A smoked ham hock or ham bone — the one seasoning meat the whole week's pots lean on.",
  engine: [
    "A big pot of rice — the constant grain under every bowl this week",
    "Cornbread / cornmeal — a skillet of cornbread to sop, plus meal kept for the week",
    "The holy trinity — a tub of onion, celery, and bell pepper sweated soft, the base of every pot",
    "A little smoked pork (ham hock / bone) simmered into the bean pot to season it",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "red-beans-and-rice — the headline pot set to simmer, over rice",
      estCalories: 690,
      estProtein: 24,
    },
    {
      day: "Mon",
      dinner: "red-beans-and-rice, the washday Monday pot, deepened overnight",
      estCalories: 700,
      estProtein: 25,
    },
    {
      day: "Tue",
      dinner: "hoppin-john — black-eyed peas and rice with a side of greens",
      estCalories: 680,
      estProtein: 22,
    },
    {
      day: "Wed",
      dinner: "butter-beans smothered soft, over rice with cornbread",
      estCalories: 660,
      estProtein: 20,
    },
    {
      day: "Thu",
      dinner: "red-beans-and-rice again, the last of the pot, with cornbread",
      estCalories: 690,
      estProtein: 24,
    },
    {
      day: "Fri",
      dinner: "hoppin-john with a fried egg and hot sauce",
      estCalories: 700,
      estProtein: 26,
    },
    {
      day: "Sat",
      dinner: "a zero-waste bean plate — red beans, butter beans, and rice pulled together with the last cornbread",
      estCalories: 710,
      estProtein: 25,
    },
  ],
  shopping: [
    { item: "Dried red kidney beans", qty: "2 lb", cost: 3.0, note: "the bank — the whole week runs on this" },
    { item: "Black-eyed peas (for Hoppin' John)", qty: "1 lb", cost: 1.5 },
    { item: "Dried or frozen butter/lima beans", qty: "1 lb", cost: 2.0 },
    { item: "Long-grain white rice", qty: "5 lb", cost: 4.0, spansWeeks: true, note: "the constant grain" },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Smoked ham hock / ham bone", qty: "1–2", cost: 4.0, note: "the precious thread — seasons the pots" },
    { item: "Andouille or smoked sausage", qty: "1/2 lb", cost: 3.0 },
    { item: "Yellow onions", qty: "~3 lb", cost: 2.5 },
    { item: "Celery", qty: "1 bunch", cost: 1.5 },
    { item: "Green bell peppers", qty: "3", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Collard or mustard greens", qty: "1 bunch", cost: 1.5 },
    { item: "Eggs", qty: "1 dozen", cost: 3.0, spansWeeks: true },
    { item: "Bay leaf, thyme, cayenne, hot sauce", qty: "pantry", cost: 3.0, spansWeeks: true },
    { item: "Buttermilk + a little fat (for cornbread)", qty: "1 qt", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const asWeek2Gumbo: WeekPlan = {
  slug: "as-week-2-gumbo",
  number: 2,
  cuisine: "american-south",
  theme: "Gumbo",
  title: "Week 2 — Gumbo",
  description:
    "The pot where three continents meet. A dark roux, the trinity, and whatever the week could spare — chicken and andouille, or just okra and greens — simmered long and ladled over rice. The dish that is the whole South in one bowl.",
  context:
    `Gumbo is the South argued into a single pot. The word itself is West African (ki ngombo, okra), the file is Choctaw (ground sassafras the Indigenous cooks taught), the roux is French technique, and the rice underneath is Carolina Gold's legacy — three continents stirred together over a low flame. The thrift is in the bones: a dark roux of flour and fat costs pennies and does the work of pounds of meat, and a little smoked andouille seasons a pot that feeds a crowd. Gumbo z'herbes, the Lenten "green gumbo," is the meatless version built entirely from cleaned-out greens — and tradition says you'll make a new friend for every kind of green in the pot. Okra thickens the lean weeks; everything goes over rice, always over rice.`,
  dishes: [
    "Chicken and andouille gumbo (the dark-roux classic)",
    "Gumbo z'herbes (the Lenten green gumbo)",
    "Okra gumbo (okra does the thickening)",
    "Rice and cornbread alongside",
  ],
  proteinNote:
    "A little chicken and smoked sausage season the pot; the floor is met with the meat plus the beans and rice underneath.",
  bonus: false,
  preciousThread: "A half pound of andouille — the smoked sausage that gives the gumbo its backbone.",
  engine: [
    "A big pot of rice — the constant bed under every bowl of gumbo",
    "Cornbread / cornmeal — a skillet baked off, meal kept for the week",
    "The holy trinity — a tub of onion, celery, bell pepper, ready to hit the roux",
    "A dark roux + a little smoked pork/andouille — the gumbo backbone simmered ahead",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "chicken-andouille-gumbo — the dark-roux pot, over rice",
      estCalories: 720,
      estProtein: 28,
    },
    {
      day: "Mon",
      dinner: "chicken-andouille-gumbo, deepened overnight, over rice",
      estCalories: 710,
      estProtein: 27,
    },
    {
      day: "Tue",
      dinner: "okra-gumbo — okra carrying the thickening, over rice",
      estCalories: 680,
      estProtein: 22,
    },
    {
      day: "Wed",
      dinner: "gumbo-zherbes — the green Lenten gumbo, over rice",
      estCalories: 670,
      estProtein: 21,
    },
    {
      day: "Thu",
      dinner: "chicken-andouille-gumbo, the last of the pot, with cornbread",
      estCalories: 710,
      estProtein: 27,
    },
    {
      day: "Fri",
      dinner: "okra-gumbo with a side of red beans over rice",
      estCalories: 700,
      estProtein: 24,
    },
    {
      day: "Sat",
      dinner: "a zero-waste gumbo finale — every leftover gumbo pooled, stretched with okra and the last rice",
      estCalories: 720,
      estProtein: 26,
    },
  ],
  shopping: [
    { item: "Andouille / smoked sausage", qty: "1/2 lb", cost: 3.0, note: "the precious thread — the smoked backbone" },
    { item: "Chicken thighs or a small whole chicken", qty: "~2 lb", cost: 4.0 },
    { item: "Okra (fresh or frozen)", qty: "1 lb", cost: 2.5 },
    { item: "Flour (for the dark roux)", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Long-grain white rice", qty: "3 lb", cost: 2.5 },
    { item: "Cornmeal", qty: "1 lb", cost: 0.8, spansWeeks: true },
    { item: "Yellow onions", qty: "~3 lb", cost: 2.5 },
    { item: "Celery", qty: "1 bunch", cost: 1.5 },
    { item: "Green bell peppers", qty: "3", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Mixed greens (for gumbo z'herbes)", qty: "2 bunches", cost: 3.0 },
    { item: "Smoked ham hock (for the pots)", qty: "1", cost: 2.5, spansWeeks: true },
    { item: "File powder + bay, thyme, cayenne, hot sauce", qty: "pantry", cost: 3.0, spansWeeks: true },
    { item: "Oil / fat (for roux)", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 20,
};

export const asWeek3Jambalaya: WeekPlan = {
  slug: "as-week-3-jambalaya",
  number: 3,
  cuisine: "american-south",
  theme: "Jambalaya & Dirty Rice",
  title: "Week 3 — Jambalaya & Dirty Rice",
  description:
    "The week the rice cooks in the pot. Instead of being ladled over, the grain absorbs everything — trinity, smoked sausage, and stock — into one seasoned skillet. Jambalaya, dirty rice, red rice: the South's answer to paella, built on scraps.",
  context:
    `Where the bean weeks ladle over rice, this week the rice cooks in the pot and soaks up everything around it — the South's kin to jollof and paella, carried over by West African and Spanish hands and married to Louisiana smoke. Jambalaya stretches a little sausage and chicken across a whole skillet of seasoned grain; dirty rice is thrift itself, the rice browned and "dirtied" with the chicken livers and gizzards too humble to sell, so nothing of the bird is wasted. Red rice — the Lowcountry's tomato-stained version — does the same trick with a can of tomatoes. One pot, one grain, the trinity and a little smoked pork doing the seasoning, and a skillet of cornbread on the side. This is how you feed many from little and call it a feast.`,
  dishes: [
    "Jambalaya (the one-pot seasoned rice)",
    "Dirty rice (browned with liver and gizzards)",
    "Red rice (the Lowcountry tomato version)",
    "Cornbread alongside",
  ],
  proteinNote:
    "Smoked sausage, chicken, and the giblets in the dirty rice carry the protein; the rice and a side of beans backstop the floor.",
  bonus: false,
  preciousThread: "Chicken livers and gizzards — the cheap giblets that make dirty rice taste like more than its cost.",
  engine: [
    "A pot of rice held back raw — this week the grain cooks IN the pot, so par-stock and season as you go",
    "Cornbread / cornmeal — a skillet baked off, meal kept for the week",
    "The holy trinity — a tub of onion, celery, bell pepper, the base of every rice pot",
    "A little smoked sausage / pork + stock — the seasoning the grain drinks up",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "jambalaya — the headline one-pot seasoned rice",
      estCalories: 730,
      estProtein: 28,
    },
    {
      day: "Mon",
      dinner: "jambalaya, the skillet reheated, with hot sauce",
      estCalories: 720,
      estProtein: 27,
    },
    {
      day: "Tue",
      dinner: "dirty-rice — rice browned with liver and gizzards",
      estCalories: 700,
      estProtein: 26,
    },
    {
      day: "Wed",
      dinner: "red-rice — the Lowcountry tomato-stained rice, with sausage",
      estCalories: 690,
      estProtein: 24,
    },
    {
      day: "Thu",
      dinner: "jambalaya again, the last of the pot, with cornbread",
      estCalories: 720,
      estProtein: 27,
    },
    {
      day: "Fri",
      dinner: "dirty-rice with a fried egg and greens",
      estCalories: 710,
      estProtein: 27,
    },
    {
      day: "Sat",
      dinner: "a zero-waste rice finale — every leftover rice pot folded together, crisped in the skillet",
      estCalories: 720,
      estProtein: 26,
    },
  ],
  shopping: [
    { item: "Chicken livers + gizzards (for dirty rice)", qty: "1 lb", cost: 2.0, note: "the precious thread — thrift made flavor" },
    { item: "Andouille / smoked sausage", qty: "3/4 lb", cost: 4.0 },
    { item: "Chicken thighs", qty: "~1 lb", cost: 2.5 },
    { item: "Long-grain white rice", qty: "5 lb", cost: 4.0, spansWeeks: true, note: "the grain that cooks in the pot" },
    { item: "Cornmeal", qty: "1 lb", cost: 0.8, spansWeeks: true },
    { item: "Canned tomatoes (for red rice)", qty: "1 large can", cost: 1.5 },
    { item: "Yellow onions", qty: "~3 lb", cost: 2.5 },
    { item: "Celery", qty: "1 bunch", cost: 1.5 },
    { item: "Green bell peppers", qty: "3", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Smoked ham hock (for stock)", qty: "1", cost: 2.5, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5, spansWeeks: true },
    { item: "Mustard or collard greens", qty: "1 bunch", cost: 1.5 },
    { item: "Bay, thyme, cayenne, hot sauce", qty: "pantry", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 19,
};

export const asWeek4Smothered: WeekPlan = {
  slug: "as-week-4-smothered",
  number: 4,
  cuisine: "american-south",
  theme: "Smothered & Étouffée",
  title: "Week 4 — Smothered & Étouffée",
  description:
    "The week of the gravy. A tough, cheap cut browned hard and then smothered — buried under a slow onion gravy until it surrenders into tenderness — and étouffée, the Cajun cousin, smothering shellfish in a roux. All of it spooned over rice.",
  context:
    `"Smothering" is the technique that turns the cheapest cut into Sunday food: brown it hard, then bury it under onions and a flour-thickened gravy and let it braise low until it falls apart, the gravy doing the tenderizing the cut can't afford to skip. It's how the South cooked the parts nobody else wanted — chicken backs and necks, tough pork chops, even just onions over rice on a thin week. Étouffée ("smothered" in French) is the Cajun cousin: crawfish or shrimp smothered in a roux-and-trinity gravy, the same move with the bayou's catch. Every plate ends the same way — the gravy spooned over rice, mopped with cornbread, nothing wasted. The roux and the trinity do the heavy lifting; the meat is almost incidental.`,
  dishes: [
    "Smothered chicken (in onion gravy)",
    "Crawfish étouffée (the roux-smothered cousin)",
    "Smothered pork chops",
    "Rice and cornbread to catch the gravy",
  ],
  proteinNote:
    "The braised meat carries the protein here; even stretched in gravy, a smothered cut plus rice clears the floor.",
  bonus: false,
  preciousThread: "A pound of crawfish tails (or shrimp) for the étouffée — the one splurge from the water.",
  engine: [
    "A big pot of rice — the constant bed that catches every gravy this week",
    "Cornbread / cornmeal — a skillet baked off to mop the gravy, meal kept for the week",
    "The holy trinity + a deep onion gravy base — the smother that tenderizes the cuts",
    "A little smoked pork + a roux — the seasoning and thickener under every plate",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "smothered-chicken — browned and buried in onion gravy, over rice",
      estCalories: 720,
      estProtein: 30,
    },
    {
      day: "Mon",
      dinner: "smothered-chicken, the gravy deepened overnight, over rice",
      estCalories: 710,
      estProtein: 29,
    },
    {
      day: "Tue",
      dinner: "smothered-pork-chops over rice with greens",
      estCalories: 730,
      estProtein: 30,
    },
    {
      day: "Wed",
      dinner: "crawfish-etouffee — shellfish smothered in roux gravy, over rice",
      estCalories: 700,
      estProtein: 26,
    },
    {
      day: "Thu",
      dinner: "smothered-chicken, the last of the pot, with cornbread",
      estCalories: 710,
      estProtein: 28,
    },
    {
      day: "Fri",
      dinner: "crawfish-etouffee again, stretched with extra rice and the trinity",
      estCalories: 690,
      estProtein: 24,
    },
    {
      day: "Sat",
      dinner: "a zero-waste gravy finale — every leftover smother and étouffée pooled over the last rice and cornbread",
      estCalories: 720,
      estProtein: 27,
    },
  ],
  shopping: [
    { item: "Crawfish or shrimp (for étouffée)", qty: "1 lb", cost: 6.0, note: "the precious thread — the splurge from the water" },
    { item: "Chicken thighs / backs", qty: "~2 lb", cost: 4.0 },
    { item: "Cheap pork chops", qty: "~1 lb", cost: 3.0 },
    { item: "Long-grain white rice", qty: "3 lb", cost: 2.5 },
    { item: "Cornmeal", qty: "1 lb", cost: 0.8, spansWeeks: true },
    { item: "Flour (for roux + gravy)", qty: "for the week", cost: 1.0, spansWeeks: true },
    { item: "Yellow onions", qty: "~4 lb", cost: 3.5, note: "the smother eats onions" },
    { item: "Celery", qty: "1 bunch", cost: 1.5 },
    { item: "Green bell peppers", qty: "3", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Smoked ham hock (for seasoning)", qty: "1", cost: 2.5, spansWeeks: true },
    { item: "Collard or mustard greens", qty: "1 bunch", cost: 1.5 },
    { item: "Bay, thyme, cayenne, hot sauce", qty: "pantry", cost: 2.5, spansWeeks: true },
    { item: "Oil / fat (for roux)", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 33,
  steadyStateWeekly: 21,
};

export const asWeek5Greens: WeekPlan = {
  slug: "as-week-5-greens",
  number: 5,
  cuisine: "american-south",
  theme: "Greens & Cornbread",
  title: "Week 5 — Greens & Cornbread",
  description:
    "The vegetable heart of the table. Collards stewed soft with a smoked hock until they make pot likker, fried green tomatoes, maque choux off the cob, candied yams — the sides that are really the meal, eaten with cornbread to sop the green broth.",
  context:
    `The greens are where the South's thrift and its genius meet. Collards, mustards, and turnip tops — tough, cheap, and abundant — are stewed for an hour with a smoked hock until they collapse into silk and the pot fills with pot likker, the vitamin-rich broth that was never thrown out and was often the most nourishing thing on a poor table. Around them sit the season's odds and ends made glorious: green tomatoes too unripe to eat raw, battered in cornmeal and fried; maque choux, the Indigenous corn dish cut fresh off the cob and stewed with the trinity; candied yams turning a cheap root into something like dessert. Cornbread isn't a side here — it's the spoon, baked to sop every drop of that pot likker.`,
  dishes: [
    "Collard greens (stewed with a smoked hock)",
    "Fried green tomatoes (cornmeal-crusted)",
    "Maque choux (corn off the cob)",
    "Candied yams + cornbread to sop the pot likker",
  ],
  proteinNote:
    "The leanest week — the floor leans on the smoked pork, a pot of beans or peas alongside, and an egg in the batter to keep protein up.",
  bonus: false,
  preciousThread: "A meaty smoked turkey neck or ham hock to make the greens' pot likker rich.",
  engine: [
    "A big pot of rice — the constant grain beside the greens",
    "Cornbread / cornmeal — a double skillet this week; it's the spoon for the pot likker, plus meal for frying",
    "The holy trinity — a tub of onion, celery, bell pepper, the base for maque choux and the greens pot",
    "A smoked hock simmered into a big pot of greens, making the pot likker the week leans on",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "collard-greens stewed with a hock, over rice with cornbread to sop the pot likker",
      estCalories: 640,
      estProtein: 18,
    },
    {
      day: "Mon",
      dinner: "fried-green-tomatoes with greens and rice",
      estCalories: 650,
      estProtein: 16,
    },
    {
      day: "Tue",
      dinner: "maque-choux — corn off the cob with the trinity, and a side of greens",
      estCalories: 620,
      estProtein: 15,
    },
    {
      day: "Wed",
      dinner: "candied-yams with greens, rice, and cornbread",
      estCalories: 660,
      estProtein: 16,
    },
    {
      day: "Thu",
      dinner: "collard-greens again with a pot of black-eyed peas over rice",
      estCalories: 680,
      estProtein: 22,
    },
    {
      day: "Fri",
      dinner: "fried-green-tomatoes and maque-choux, a fried-and-fresh plate",
      estCalories: 650,
      estProtein: 17,
    },
    {
      day: "Sat",
      dinner: "a zero-waste vegetable plate — greens, maque choux, candied yams, and the last cornbread on one plate",
      estCalories: 670,
      estProtein: 18,
    },
  ],
  shopping: [
    { item: "Smoked turkey neck / ham hock", qty: "1–2", cost: 4.0, note: "the precious thread — makes the pot likker rich" },
    { item: "Collard / mustard / turnip greens", qty: "3 bunches", cost: 4.5, note: "the green week" },
    { item: "Green (unripe) tomatoes", qty: "~2 lb", cost: 2.5 },
    { item: "Corn (fresh or frozen, for maque choux)", qty: "~6 ears / 1 bag", cost: 3.0 },
    { item: "Sweet potatoes / yams", qty: "~3 lb", cost: 2.5 },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true, note: "the spoon + the fry crust" },
    { item: "Long-grain white rice", qty: "2 lb", cost: 1.5 },
    { item: "Black-eyed peas", qty: "1 lb", cost: 1.5 },
    { item: "Yellow onions", qty: "~2 lb", cost: 1.5 },
    { item: "Celery + green bell peppers", qty: "1 bunch / 2", cost: 2.5 },
    { item: "Garlic", qty: "1 head", cost: 0.5, spansWeeks: true },
    { item: "Eggs + buttermilk (batter + cornbread)", qty: "1 dozen / 1 qt", cost: 4.0, spansWeeks: true },
    { item: "Cane syrup / brown sugar (for yams)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Cayenne, vinegar, hot sauce", qty: "pantry", cost: 2.0, spansWeeks: true },
    { item: "Oil / fat (for frying)", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 17,
};

export const asWeek6Fried: WeekPlan = {
  slug: "as-week-6-fried",
  number: 6,
  cuisine: "american-south",
  theme: "Fried (the Skillet)",
  title: "Week 6 — Fried (the Skillet)",
  description:
    "The cast-iron week. A cornmeal crust on catfish, salmon croquettes stretched from a tin, buttermilk-brined chicken, and hush puppies fried in the same fat — the Sunday-best cooking that made the cheapest cut or the canned fish into the centerpiece.",
  context:
    `Frying is the South's transformation: the cast-iron skillet and a crust of seasoned cornmeal or flour turning the cheap and the canned into the centerpiece of the plate. Catfish — the bottom-feeder nobody respected — becomes the Friday-night fish fry dredged in cornmeal. Salmon croquettes stretch a single tin of salmon with crushed crackers and an egg into patties that feed the whole table, the Depression-era trick of making a little protein go far. Buttermilk-brined chicken, the Sunday-best dish, used the whole bird. And hush puppies — spoonfuls of cornmeal batter dropped into the same fish-fry fat — were the cook's thrift, "hushing the pups" with the scraps so nothing and no one went hungry. One skillet, one pot of hot fat, the whole meal.`,
  dishes: [
    "Fried catfish (cornmeal-crusted)",
    "Salmon croquettes (stretched from a tin)",
    "Buttermilk fried chicken",
    "Hush puppies in the same fat",
  ],
  proteinNote:
    "The richest-protein week — fish, chicken, and egg-bound croquettes all clear the floor easily, even stretched.",
  bonus: false,
  preciousThread: "A whole frying chicken for the Sunday-best buttermilk fry.",
  engine: [
    "A big pot of rice — the constant grain beside the skillet",
    "Cornmeal / cornbread — the fry crust AND the hush-puppy batter; the constant base, doing double duty",
    "The holy trinity — a tub of onion, celery, bell pepper for the croquettes and the sides",
    "A little smoked pork + a pot of greens or beans — the seasoned side under the fried plate",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "fried-chicken — buttermilk-brined, the Sunday-best plate, with rice and greens",
      estCalories: 740,
      estProtein: 32,
    },
    {
      day: "Mon",
      dinner: "fried-chicken again, cold or reheated, with a bean side over rice",
      estCalories: 720,
      estProtein: 30,
    },
    {
      day: "Tue",
      dinner: "fried-catfish — cornmeal-crusted, with hush-puppies",
      estCalories: 710,
      estProtein: 28,
    },
    {
      day: "Wed",
      dinner: "salmon-croquettes — a tin stretched into patties, with rice and greens",
      estCalories: 690,
      estProtein: 26,
    },
    {
      day: "Thu",
      dinner: "fried-catfish again with hush-puppies and greens",
      estCalories: 710,
      estProtein: 28,
    },
    {
      day: "Fri",
      dinner: "the Friday fish fry — fried-catfish and hush-puppies, the whole skillet",
      estCalories: 730,
      estProtein: 29,
    },
    {
      day: "Sat",
      dinner: "a zero-waste skillet finale — last fish and croquettes crisped up, hush puppies from the batter ends, over rice",
      estCalories: 720,
      estProtein: 28,
    },
  ],
  shopping: [
    { item: "Whole frying chicken", qty: "~3 1/2 lb bird", cost: 6.0, note: "the precious thread — the Sunday-best fry" },
    { item: "Catfish fillets", qty: "~1.5 lb", cost: 7.0 },
    { item: "Canned salmon (for croquettes)", qty: "2 cans", cost: 4.0 },
    { item: "Cornmeal", qty: "3 lb", cost: 2.0, spansWeeks: true, note: "the fry crust + hush-puppy batter" },
    { item: "Long-grain white rice", qty: "2 lb", cost: 1.5 },
    { item: "Saltine crackers (for croquettes)", qty: "1 sleeve", cost: 1.0 },
    { item: "Buttermilk (brine + batter)", qty: "1 qt", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 3.0, spansWeeks: true },
    { item: "Yellow onions + celery + bell pepper (trinity)", qty: "", cost: 3.0 },
    { item: "Garlic", qty: "1 head", cost: 0.5, spansWeeks: true },
    { item: "Collard / mustard greens", qty: "1 bunch", cost: 1.5 },
    { item: "Black-eyed peas or beans (side)", qty: "1 lb", cost: 1.5 },
    { item: "Flour (for dredge)", qty: "for the week", cost: 1.0, spansWeeks: true },
    { item: "Cayenne, paprika, hot sauce", qty: "pantry", cost: 2.0, spansWeeks: true },
    { item: "Frying oil / lard", qty: "1 large", cost: 4.0, spansWeeks: true },
  ],
  firstShopTotal: 34,
  steadyStateWeekly: 22,
};

export const asWeek7Supper: WeekPlan = {
  slug: "as-week-7-supper",
  number: 7,
  cuisine: "american-south",
  theme: "The One-Pot Supper",
  title: "Week 7 — The One-Pot Supper",
  description:
    "The comfort consolidation. Chicken and dumplings — the whole bird stretched into a creamy pot with flour dumplings — cornbread dressing baked from the week's stale bread, and smothered okra. The Sunday-supper dishes that turn the week's ends into one warm meal.",
  context:
    `The one-pot supper is where the South's whole thrift comes home for Sunday dinner. Chicken and dumplings stretches a single bird across a creamy pot and then stretches it further with dumplings — flour, fat, and broth dropped in to make a starch that feeds twice the table for pennies. Cornbread dressing is the consolidation made holy: the week's stale cornbread, torn up and bound with the trinity, broth, and an egg, baked into the dish no Southern table goes without — the literal leftovers of the week made into the feast. Smothered okra ends the season's pods in a slow stew. Everything still rides the same foundation — rice, cornmeal, the trinity, a little smoked pork — proving the base that opened the arc is the same base that closes it. The everyday supper and the feast turn out to be one pot.`,
  dishes: [
    "Chicken and dumplings (the bird stretched with dumplings)",
    "Cornbread dressing (baked from the week's stale cornbread)",
    "Smothered okra",
    "Rice and the week's leftovers consolidated",
  ],
  proteinNote:
    "The chicken carries it, stretched by the dumplings and dressing; with the egg-bound dressing the day clears the floor comfortably.",
  bonus: false,
  preciousThread: "One whole chicken for the dumpling pot — and its carcass becomes the broth for the dressing.",
  engine: [
    "A big pot of rice — the constant grain, closing the arc on the same base it opened",
    "Cornbread / cornmeal — a big skillet baked off; half eaten fresh, half saved stale for the dressing",
    "The holy trinity — a tub of onion, celery, bell pepper for the dumpling pot, dressing, and okra",
    "One chicken + a little smoked pork simmered into a stock — the broth under dumplings and dressing",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "chicken-and-dumplings — the whole bird stretched into a creamy dumpling pot",
      estCalories: 740,
      estProtein: 32,
    },
    {
      day: "Mon",
      dinner: "chicken-and-dumplings, the pot deepened overnight, over rice",
      estCalories: 720,
      estProtein: 30,
    },
    {
      day: "Tue",
      dinner: "cornbread-dressing baked from the week's stale cornbread, with greens",
      estCalories: 700,
      estProtein: 24,
    },
    {
      day: "Wed",
      dinner: "smothered-okra over rice with a side of dressing",
      estCalories: 680,
      estProtein: 21,
    },
    {
      day: "Thu",
      dinner: "chicken-and-dumplings, the last of the bird, with cornbread",
      estCalories: 720,
      estProtein: 29,
    },
    {
      day: "Fri",
      dinner: "cornbread-dressing and smothered-okra, the comfort plate, over rice",
      estCalories: 700,
      estProtein: 23,
    },
    {
      day: "Sat",
      dinner: "the grand one-pot finale — the week's leftovers pulled into one supper: dumplings, dressing, okra, and the last rice",
      estCalories: 730,
      estProtein: 27,
    },
  ],
  shopping: [
    { item: "Whole chicken (for dumplings + stock)", qty: "~3 1/2 lb bird", cost: 6.0, note: "the precious thread — the bird and its carcass-broth" },
    { item: "Flour (for dumplings + roux)", qty: "3 lb", cost: 2.0, spansWeeks: true },
    { item: "Cornmeal", qty: "2 lb", cost: 1.5, spansWeeks: true, note: "fresh + stale for the dressing" },
    { item: "Long-grain white rice", qty: "2 lb", cost: 1.5 },
    { item: "Okra (fresh or frozen)", qty: "1 lb", cost: 2.5 },
    { item: "Yellow onions", qty: "~3 lb", cost: 2.5 },
    { item: "Celery", qty: "1 bunch", cost: 1.5 },
    { item: "Green bell peppers", qty: "2", cost: 1.5 },
    { item: "Garlic", qty: "1 head", cost: 0.5, spansWeeks: true },
    { item: "Smoked ham hock / sausage (for stock)", qty: "1", cost: 2.5, spansWeeks: true },
    { item: "Eggs + buttermilk (dressing + cornbread)", qty: "1 dozen / 1 qt", cost: 4.0, spansWeeks: true },
    { item: "Collard / mustard greens", qty: "1 bunch", cost: 1.5 },
    { item: "Canned tomatoes (for smothered okra)", qty: "1 can", cost: 1.0 },
    { item: "Sage, thyme, bay, cayenne, hot sauce", qty: "pantry", cost: 2.5, spansWeeks: true },
    { item: "Oil / fat", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 20,
};

export const americanSouthWeeks: WeekPlan[] = [
  asWeek1RedBeans,
  asWeek2Gumbo,
  asWeek3Jambalaya,
  asWeek4Smothered,
  asWeek5Greens,
  asWeek6Fried,
  asWeek7Supper,
];
