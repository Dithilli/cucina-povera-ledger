import type { WeekPlan } from "../types";

// Challenge — The Philippines: lutong bahay, one frugal dinner a night.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "filipino"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// lets users compose variations on top of the same recipe pool.
//
// Dinner slugs reference recipes in src/content/recipes/*. RULE #6: the
// constant FOUNDATION — steamed rice + the ginisa garlic-onion-tomato sauté
// base + the vinegar/patis (suka/patis) seasoning — lives in each week's
// `engine`, never as a theme. A theme is something you eat as dinner; the
// foundation is the plate beneath every dinner, shown once, never a week.

export const phWeek1Adobo: WeekPlan = {
  slug: "ph-week-1-adobo",
  number: 1,
  cuisine: "filipino",
  theme: "Adobo",
  title: "Week 1 — Adobo",
  description:
    "The national braise and the cleverest preservation trick in the islands — meat or vegetables simmered in vinegar, soy, garlic, and bay until they keep for days without a fridge. Start here: it's the dish every Filipino household argues about and every region claims.",
  context:
    `Adobo is older than the Spanish word for it — long before refrigeration, cooks in a tropical climate learned that meat braised in vinegar and salt would keep on the counter for days, only getting better as it sat. That's the whole genius of the dish: the acid and the patis are preservatives first and seasoning second. It sits, as everything here does, over a mound of steamed rice, and leans on the garlic-onion sauté base every Filipino kitchen starts with. A little pork or one chicken stretches across the week; the long beans take the same braise when meat runs short. Nothing is wasted — the day-old rice becomes garlic fried sinangag, and the adobo only deepens.`,
  dishes: [
    "Adobong manok (chicken adobo)",
    "Adobong baboy (pork adobo)",
    "Adobong sitaw (long-bean adobo, the meatless night)",
    "Sinangag from day-old rice",
  ],
  proteinNote:
    "A little pork and one chicken carry the meat nights; adobong sitaw is the cheap meatless night, and the patis seasons everything. A fried egg over rice covers any gap.",
  bonus: false,
  preciousThread: "A good bottle of cane vinegar (sukang maasim) and the week's chicken.",
  engine: [
    "Steamed rice — a big pot daily; the foundation under every dinner, with the surplus saved for sinangag",
    "The ginisa base — garlic, onion, tomato sautéed; the start of nearly every dish",
    "Suka + patis — cane vinegar and fish sauce, the souring-and-salting that defines the table",
    "A master adobo braise — one big pot of vinegar-soy braising liquid, split across the meats and the beans",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "adobong-manok over rice — the headline braise", estCalories: 680, estProtein: 28 },
    { day: "Mon", dinner: "adobong-baboy over rice", estCalories: 700, estProtein: 26 },
    { day: "Tue", dinner: "adobong-manok, deepened on day two, with sinangag", estCalories: 670, estProtein: 27 },
    { day: "Wed", dinner: "adobong-sitaw — long beans in the same braise, over rice", estCalories: 560, estProtein: 17 },
    { day: "Thu", dinner: "adobo-flakes — leftover adobo shredded and crisped over sinangag with a fried egg", estCalories: 640, estProtein: 24 },
    { day: "Fri", dinner: "adobong-baboy, the pot reduced sticky, over rice", estCalories: 690, estProtein: 25 },
    { day: "Sat", dinner: "the last of the adobo and adobong-sitaw — zero waste, every scrap into sinangag", estCalories: 580, estProtein: 19 },
  ],
  shopping: [
    { item: "Chicken (whole or thighs)", qty: "~3 lb", cost: 5.0, note: "the precious thread — carries the meat nights" },
    { item: "Pork belly / shoulder", qty: "~1 lb", cost: 4.0 },
    { item: "Cane vinegar (suka)", qty: "1 bottle", cost: 2.0, spansWeeks: true, note: "the soul of adobo — preservation in a bottle" },
    { item: "Soy sauce (toyo)", qty: "1 bottle", cost: 2.0, spansWeeks: true },
    { item: "Patis (fish sauce)", qty: "1 bottle", cost: 2.0, spansWeeks: true },
    { item: "Garlic", qty: "3 heads", cost: 1.5, spansWeeks: true },
    { item: "Onions", qty: "~2 lb", cost: 2.0 },
    { item: "Tomatoes", qty: "~1 lb", cost: 1.5 },
    { item: "Long beans (sitaw)", qty: "1 bunch", cost: 1.5 },
    { item: "Bay leaves + black peppercorns", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.5, spansWeeks: true },
    { item: "Rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the foundation — carries every dinner and the sinangag" },
    { item: "Cooking oil", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const phWeek2Sinigang: WeekPlan = {
  slug: "ph-week-2-sinigang",
  number: 2,
  cuisine: "filipino",
  theme: "Sinigang",
  title: "Week 2 — Sinigang",
  description:
    "The sour soup that is the Filipino comfort dish — a clear broth soured with tamarind, swimming with vegetables and a little pork, fish, or shrimp. The rainy-season antidote, and the most-loved dish in the country.",
  context:
    `Sinigang is sourness as the whole point — a broth pulled tart with tamarind (sampalok), or whatever local fruit is souring on the tree: guava, kamias, green mango. In a hot climate a sharp, sour soup is what the body wants, and the acid does the same preserving work it does in adobo. The pot rides on the ginisa base and is finished with patis at the table; it sits, of course, over steamed rice. A little pork or a handful of cheap river shrimp flavors a whole pot of swamp cabbage, radish, and long beans — the meat is seasoning, the vegetables are the meal. The broth is sipped to the last drop and the leftover rice fries up for breakfast.`,
  dishes: [
    "Sinigang na baboy (pork in sour tamarind broth)",
    "Sinigang na isda (fish sinigang, the quick one)",
    "Sinigang na hipon (shrimp sinigang)",
    "Sinangag from day-old rice",
  ],
  proteinNote:
    "A little pork, cheap fish, or a handful of shrimp seasons a whole pot of vegetables; patis lifts the protein floor and the rice fills the rest.",
  bonus: false,
  preciousThread: "Fresh tamarind pods (or a good sampalok mix) and a handful of shrimp.",
  engine: [
    "Steamed rice — the daily pot beneath every bowl, surplus saved for sinangag",
    "The ginisa base — garlic, onion, tomato, the start of the souring pot",
    "Suka + patis — vinegar in the cupboard, patis to finish every bowl at the table",
    "A souring agent — tamarind broth base, the sampalok pulled tart, ready to take any protein",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "sinigang-na-baboy over rice — the headline sour pot", estCalories: 650, estProtein: 26 },
    { day: "Mon", dinner: "sinigang-na-baboy, the broth deepened, over rice", estCalories: 640, estProtein: 24 },
    { day: "Tue", dinner: "sinigang-na-isda — quick fish sinigang, over rice", estCalories: 580, estProtein: 22 },
    { day: "Wed", dinner: "sinigang-na-hipon — shrimp in sour broth, over rice", estCalories: 600, estProtein: 23 },
    { day: "Thu", dinner: "ginisang-gulay in leftover sour broth, with a fried egg over rice", estCalories: 560, estProtein: 18 },
    { day: "Fri", dinner: "sinigang-na-isda again, the cheap fish night, over rice", estCalories: 590, estProtein: 22 },
    { day: "Sat", dinner: "the last sour broth with all the vegetables and a fried egg — nothing wasted, rice fried for the morning", estCalories: 570, estProtein: 19 },
  ],
  shopping: [
    { item: "Tamarind (sampalok), fresh or mix", qty: "for the week", cost: 2.5, note: "the precious thread — the soul of the souring" },
    { item: "Pork (belly or ribs)", qty: "~1.25 lb", cost: 4.5 },
    { item: "Fish (bangus, tilapia, or cheap whole)", qty: "~1.5 lb", cost: 4.0 },
    { item: "Shrimp (hipon)", qty: "~1/2 lb", cost: 4.0, note: "a handful flavors a whole pot" },
    { item: "Kangkong (water spinach)", qty: "2 bunches", cost: 2.0 },
    { item: "Radish (labanos) + long beans + okra", qty: "an assortment", cost: 3.0 },
    { item: "Tomatoes + onions", qty: "~2 lb", cost: 3.0 },
    { item: "Patis (top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5, spansWeeks: true },
    { item: "Rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the foundation" },
    { item: "Cooking oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 20,
};

export const phWeek3Monggo: WeekPlan = {
  slug: "ph-week-3-monggo",
  number: 3,
  cuisine: "filipino",
  theme: "Monggo & Gulay",
  title: "Week 3 — Monggo & Gulay",
  description:
    "The cheapest, most nourishing week — mung beans and vegetables. A pot of monggo, the bagoong-rich pinakbet, and a crisp chopsuey: the meatless backbone of the lutong-bahay week, where a few pesos of beans and greens feed a family.",
  context:
    `This is the frugal heart of the Filipino week. Monggo (mung beans) is the Friday pot in countless households — almost free, simmered soft and creamy and lifted with malunggay, the moringa leaf that grows like a weed in every backyard. The vegetable dishes lean on the ginisa base and the islands' preservation pantry: pinakbet is bound by bagoong, the fermented shrimp paste that turns a pot of vegetables savory; chopsuey is whatever is cheapest at the palengke, stir-fried fast. A scrap of pork or dried fish seasons a whole pot, the patis finishes it, and it all rides over steamed rice. Nothing is wasted — yesterday's rice becomes sinangag.`,
  dishes: [
    "Ginisang munggo (mung bean stew with malunggay)",
    "Pinakbet (mixed vegetables with bagoong)",
    "Chopsuey (sautéed mixed vegetables)",
    "Sinangag from day-old rice",
  ],
  proteinNote:
    "Mung beans carry the protein floor cheaply; a scrap of pork, smoked fish, or shrimp seasons the vegetable dishes, and the malunggay rounds the monggo toward a complete meal.",
  bonus: false,
  preciousThread: "A jar of good bagoong (alamang) and a bag of dried mung beans.",
  engine: [
    "Steamed rice — the daily foundation under every plate, surplus for sinangag",
    "The ginisa base — garlic, onion, tomato, the start of monggo, pinakbet, and chopsuey alike",
    "Suka + patis — vinegar in the cupboard, patis to season every pot",
    "A pot of cooked mung beans — simmered soft Sunday, the base for the week's monggo nights",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ginisang-munggo with malunggay over rice — the headline pot", estCalories: 600, estProtein: 24 },
    { day: "Mon", dinner: "pinakbet — vegetables bound with bagoong, over rice", estCalories: 540, estProtein: 16 },
    { day: "Tue", dinner: "chopsuey — fast-stir-fried vegetables, over rice", estCalories: 530, estProtein: 18 },
    { day: "Wed", dinner: "ginisang-munggo again, the pot deepened, with a fried egg", estCalories: 620, estProtein: 22 },
    { day: "Thu", dinner: "pinakbet with a scrap of crisped pork, over rice", estCalories: 560, estProtein: 18 },
    { day: "Fri", dinner: "chopsuey with shrimp, over rice", estCalories: 560, estProtein: 20 },
    { day: "Sat", dinner: "the last monggo and chopsuey on one plate — zero waste, rice fried for the morning", estCalories: 580, estProtein: 21 },
  ],
  shopping: [
    { item: "Dried mung beans (munggo)", qty: "2 lb", cost: 3.0, note: "the bank — the whole week's protein floor" },
    { item: "Bagoong (alamang / shrimp paste)", qty: "1 jar", cost: 2.5, spansWeeks: true, note: "the precious thread — turns vegetables savory" },
    { item: "Malunggay (moringa) or spinach", qty: "2 bunches", cost: 1.5 },
    { item: "Squash + eggplant + bitter melon + okra (for pinakbet)", qty: "an assortment", cost: 3.5 },
    { item: "Cabbage + carrots + chayote + snow peas (for chopsuey)", qty: "an assortment", cost: 3.5 },
    { item: "Pork scrap / dried fish", qty: "~1/2 lb", cost: 2.0 },
    { item: "Shrimp", qty: "~1/4 lb", cost: 2.0 },
    { item: "Tomatoes + onions", qty: "~2 lb", cost: 2.5 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Patis (top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5, spansWeeks: true },
    { item: "Rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the foundation" },
    { item: "Cooking oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 16,
};

export const phWeek4Ginisa: WeekPlan = {
  slug: "ph-week-4-ginisa",
  number: 4,
  cuisine: "filipino",
  theme: "Ginisa",
  title: "Week 4 — Ginisa (sautéed)",
  description:
    "The week that celebrates the base itself — ginisa, the garlic-onion-tomato sauté that begins nearly everything. Tinned sardines stretched, an eggplant omelette, a quick pan of whatever greens are cheap: this is weeknight lutong bahay at its fastest.",
  context:
    `Ginisa names the move every Filipino cook does without thinking — gisa, the sauté of garlic, then onion, then tomato that begins almost every savory dish. This week makes that base the dinner. Ginisang sardinas turns a cheap tin of sardines, the islands' great pantry preservation, into a hot meal in ten minutes. Tortang talong is the resourceful eggplant omelette that turns one egg and a roasted eggplant into a whole plate. Ginisang gulay is simply whatever vegetables are cheapest, sautéed fast and seasoned with patis. Everything rides over rice; nothing is wasted, and the day-old rice fries into sinangag to start tomorrow.`,
  dishes: [
    "Ginisang sardinas (sautéed tinned sardines)",
    "Tortang talong (eggplant omelette)",
    "Ginisang gulay (sautéed mixed vegetables)",
    "Sinangag from day-old rice",
  ],
  proteinNote:
    "Tinned sardines and eggs are the cheap, shelf-stable protein this week; a fried egg over any plate clears the floor, and the patis seasons the rest.",
  bonus: false,
  preciousThread: "A flat of fresh eggs and a few good tins of sardines.",
  engine: [
    "Steamed rice — the daily foundation, the surplus the heart of every sinangag",
    "The ginisa base — garlic, onion, tomato; this week it IS the dinner, not just the start",
    "Suka + patis — vinegar in the cupboard, patis to finish the sautés",
    "A flat of eggs — the binder for torta and the topper for any plate that needs protein",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ginisang-sardinas over rice with a fried egg — the headline sauté", estCalories: 620, estProtein: 26 },
    { day: "Mon", dinner: "tortang-talong — eggplant omelette, over rice", estCalories: 580, estProtein: 19 },
    { day: "Tue", dinner: "ginisang-gulay with patis, over rice", estCalories: 530, estProtein: 16 },
    { day: "Wed", dinner: "ginisang-sardinas again, the tin stretched with tomato, over rice", estCalories: 600, estProtein: 24 },
    { day: "Thu", dinner: "tortang-talong with a little ground pork folded in, over rice", estCalories: 640, estProtein: 22 },
    { day: "Fri", dinner: "ginisang-gulay with a fried egg, over rice", estCalories: 560, estProtein: 18 },
    { day: "Sat", dinner: "the last sardines and vegetables in one pan — zero waste, rice fried for the morning", estCalories: 580, estProtein: 20 },
  ],
  shopping: [
    { item: "Eggs", qty: "2 dozen", cost: 5.0, note: "the precious thread — binder and protein all week" },
    { item: "Tinned sardines", qty: "4–5 tins", cost: 5.0, spansWeeks: true, note: "shelf-stable preservation, the great Filipino pantry tin" },
    { item: "Eggplant (talong)", qty: "~2 lb", cost: 2.5 },
    { item: "Mixed cheap vegetables (cabbage, sitaw, squash, chayote)", qty: "an assortment", cost: 4.0 },
    { item: "Ground pork", qty: "~1/2 lb", cost: 2.0 },
    { item: "Tomatoes + onions", qty: "~2.5 lb", cost: 3.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Patis (top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the foundation" },
    { item: "Cooking oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 17,
};

export const phWeek5Tinola: WeekPlan = {
  slug: "ph-week-5-tinola",
  number: 5,
  cuisine: "filipino",
  theme: "Tinola & Nilaga",
  title: "Week 5 — Tinola & Nilaga",
  description:
    "The clear, clean broths — the gentle counterweight to the sour and the salty. Ginger-bright chicken tinola, the boiled comfort of nilaga, and the porridge arroz caldo that stretches a cup of rice and a few bones into a whole pot.",
  context:
    `After weeks of vinegar and tamarind, the clear broths are the rest. Tinola is chicken simmered with ginger, green papaya, and chili leaves — restorative, the soup you make for the sick and the new mother. Nilaga is the plainest comfort there is: meat and vegetables boiled soft, seasoned only with patis at the table. Arroz caldo is the great stretcher — a cup of rice, a few bones, a thumb of ginger, simmered into a thick congee that feeds many from almost nothing, the Filipino answer to having little. These still begin with a light ginisa of garlic and ginger, sit over (or absorb) the rice, and waste nothing — the carcass becomes the next day's broth.`,
  dishes: [
    "Tinola (ginger chicken soup with papaya)",
    "Nilaga (boiled beef/pork and vegetables)",
    "Arroz caldo (chicken-and-ginger rice porridge)",
    "Sinangag from day-old rice",
  ],
  proteinNote:
    "One chicken and a little beef shank stretch across the broths; the arroz caldo turns bones and a cup of rice into a filling pot, and patis seasons the rest.",
  bonus: false,
  preciousThread: "A whole chicken and a hand of fresh ginger.",
  engine: [
    "Steamed rice — the daily foundation; in arroz caldo it becomes the dish itself",
    "The ginisa base — here a light garlic-and-ginger sauté to start the clear broths",
    "Suka + patis — patis the only seasoning the boiled broths need at the table",
    "A pot of chicken/bone broth — Sunday's stock, the base for tinola and arroz caldo all week",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "tinola — ginger chicken with papaya, over rice — the headline broth", estCalories: 620, estProtein: 28 },
    { day: "Mon", dinner: "arroz-caldo — chicken-ginger rice porridge with a soft egg", estCalories: 640, estProtein: 22 },
    { day: "Tue", dinner: "nilaga — boiled pork and vegetables, over rice", estCalories: 660, estProtein: 26 },
    { day: "Wed", dinner: "tinola again, the broth deepened, over rice", estCalories: 600, estProtein: 25 },
    { day: "Thu", dinner: "arroz-caldo from the carcass, with crisp garlic and a fried egg", estCalories: 620, estProtein: 20 },
    { day: "Fri", dinner: "nilaga, the vegetables refreshed, over rice", estCalories: 640, estProtein: 24 },
    { day: "Sat", dinner: "the last broth poured over rice with a fried egg — nothing wasted, the carcass already simmering for the morning", estCalories: 600, estProtein: 21 },
  ],
  shopping: [
    { item: "Whole chicken", qty: "~3 lb", cost: 5.0, note: "the precious thread — tinola, arroz caldo, and the stock" },
    { item: "Pork or beef shank (for nilaga)", qty: "~1 lb", cost: 4.0 },
    { item: "Ginger", qty: "1 large hand", cost: 1.5, spansWeeks: true, note: "the bright heart of the clear broths" },
    { item: "Green papaya / chayote", qty: "1–2", cost: 1.5 },
    { item: "Chili leaves / malunggay / pechay", qty: "2 bunches", cost: 2.0 },
    { item: "Potatoes + cabbage + corn (for nilaga)", qty: "an assortment", cost: 3.0 },
    { item: "Tomatoes + onions", qty: "~1.5 lb", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Patis (top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5, spansWeeks: true },
    { item: "Rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the foundation, and the body of the arroz caldo" },
    { item: "Cooking oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const phWeek6Prito: WeekPlan = {
  slug: "ph-week-6-prito",
  number: 6,
  cuisine: "filipino",
  theme: "Prito (Fried)",
  title: "Week 6 — Prito (Fried)",
  description:
    "The crisp week — fried fish and a little fried meat, the simplest treat the budget allows. Cheap galunggong shallow-fried whole, salt-and-sun-cured daing na bangus, and a frugal pork-and-potato torta that stretches a quarter-pound across a whole pan.",
  context:
    `Frying is the small luxury of the frugal table — a hot pan of oil turns the cheapest fish into something everyone wants. Pritong galunggong is the people's fish, the round scad fried whole and crisp, eaten with vinegar dip and rice. Daing na bangus carries the islands' oldest preservation in it — milkfish split, salted, and dried in the sun (or marinated in vinegar and garlic) so it keeps, then fried to a salty crackle. Tortang giniling stretches a little ground pork with potato and egg into a sizzling torta that feeds the table. Each is dunked in spiced suka, eaten over rice, and the leftover rice fries into sinangag — the breakfast partner of every fried fish.`,
  dishes: [
    "Pritong galunggong (fried scad)",
    "Daing na bangus (cured-and-fried milkfish)",
    "Tortang giniling (ground pork and potato torta)",
    "Sinangag from day-old rice",
  ],
  proteinNote:
    "Cheap whole fish and cured bangus carry the protein, fried crisp; the giniling torta stretches a little pork with egg and potato, and a vinegar dip seasons it all.",
  bonus: false,
  preciousThread: "A good cane vinegar for the sawsawan, and the sun-dried bangus.",
  engine: [
    "Steamed rice — the daily foundation under every fried plate, surplus for sinangag",
    "The ginisa base — garlic and onion to start the giniling torta and the dipping sauces",
    "Suka + patis — the spiced vinegar dip (sawsawan) that every fried dish is eaten with",
    "Hot oil for frying — a shared pan, the cheap fish turned crisp and craveable",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "pritong-galunggong with spiced suka, over rice — the headline fry", estCalories: 640, estProtein: 28 },
    { day: "Mon", dinner: "daing-na-bangus, fried crisp, with sinangag and tomato", estCalories: 660, estProtein: 26 },
    { day: "Tue", dinner: "tortang-giniling — pork-and-potato torta, over rice", estCalories: 680, estProtein: 24 },
    { day: "Wed", dinner: "pritong-galunggong again, the cheap fish night, over rice", estCalories: 620, estProtein: 27 },
    { day: "Thu", dinner: "daing-na-bangus with garlic rice and a fried egg", estCalories: 650, estProtein: 25 },
    { day: "Fri", dinner: "tortang-giniling, the leftover torta crisped, over rice", estCalories: 660, estProtein: 23 },
    { day: "Sat", dinner: "the last fried fish with vinegar dip and a fried egg — nothing wasted, rice fried for the morning", estCalories: 600, estProtein: 22 },
  ],
  shopping: [
    { item: "Galunggong (round scad) or cheap whole fish", qty: "~2 lb", cost: 4.5, note: "the people's fish, fried whole" },
    { item: "Daing na bangus (dried/cured milkfish)", qty: "~1.5 lb", cost: 5.0, note: "the precious thread — salt-and-sun preservation" },
    { item: "Ground pork", qty: "~1/2 lb", cost: 2.0 },
    { item: "Potatoes", qty: "~1.5 lb", cost: 1.5 },
    { item: "Cane vinegar (top up, for sawsawan)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Tomatoes + onions", qty: "~1.5 lb", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.5, spansWeeks: true },
    { item: "Patis (top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the foundation" },
    { item: "Cooking oil (frying)", qty: "1 bottle", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const phWeek7Bagoong: WeekPlan = {
  slug: "ph-week-7-bagoong",
  number: 7,
  cuisine: "filipino",
  theme: "Bagoong & Festive",
  title: "Week 7 — Bagoong & Festive",
  description:
    "The festive close — the deep, fermented, special-occasion dishes the whole arc was building toward. Bagoong-rich binagoongan, the peanutty kare-kare, the rich dinuguan, and the coconut-and-taro laing: the fiesta table, still frugal, a little meat made grand.",
  context:
    `The arc closes at the fiesta table, where the islands' deepest preservation — bagoong and patis, the fermented shrimp and fish that underpin everything — comes fully forward. Binagoongan is pork braised in that funky-savory paste; kare-kare stretches oxtail or tripe across a thick peanut sauce, eaten with a smear of bagoong on the side; dinuguan wastes nothing of the pig, simmering offcuts in vinegar and blood; laing is dried taro leaves slow-cooked in coconut milk, the Bicolano festive green. Each still rests on rice and the ginisa base, each soured or salted by the same suka and patis. A little meat, made grand for the feast — and even the celebration throws nothing away.`,
  dishes: [
    "Binagoongan (pork in shrimp paste)",
    "Kare-kare (oxtail/tripe in peanut sauce with bagoong)",
    "Dinuguan (pork offcuts in vinegar and blood)",
    "Laing (dried taro leaves in coconut milk)",
  ],
  proteinNote:
    "A little pork stretched across rich sauces carries the feast; the peanut and coconut deepen it, and the bagoong/patis season everything. The day clears the floor on celebration portions.",
  bonus: false,
  preciousThread: "A length of oxtail for the kare-kare, the one fiesta splurge.",
  engine: [
    "Steamed rice — the foundation beneath every festive plate, surplus for sinangag",
    "The ginisa base — garlic, onion, tomato, the start of binagoongan and dinuguan",
    "Suka + patis + bagoong — the full fermented pantry, brought forward for the feast",
    "A pot of rich sauce base — the peanut sauce for kare-kare and the coconut base for laing",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "kare-kare with bagoong on the side, over rice — the fiesta headline", estCalories: 720, estProtein: 28 },
    { day: "Mon", dinner: "binagoongan — pork in shrimp paste, over rice", estCalories: 700, estProtein: 26 },
    { day: "Tue", dinner: "laing — taro leaves in coconut milk, with a little pork, over rice", estCalories: 620, estProtein: 18 },
    { day: "Wed", dinner: "dinuguan — pork offcuts in vinegar and blood, over rice", estCalories: 690, estProtein: 27 },
    { day: "Thu", dinner: "kare-kare again, the peanut sauce deepened, over rice", estCalories: 700, estProtein: 25 },
    { day: "Fri", dinner: "binagoongan with laing on the side, over rice", estCalories: 680, estProtein: 24 },
    { day: "Sat", dinner: "the fiesta finale — kare-kare, binagoongan, dinuguan, and laing together; every leftover on one platter, nothing wasted", estCalories: 720, estProtein: 28 },
  ],
  shopping: [
    { item: "Oxtail / beef tripe (for kare-kare)", qty: "~1.5 lb", cost: 7.0, note: "the precious thread — the fiesta splurge" },
    { item: "Pork (belly + offcuts, for binagoongan and dinuguan)", qty: "~2 lb", cost: 6.0 },
    { item: "Bagoong (alamang)", qty: "1 jar", cost: 2.5, spansWeeks: true, note: "the fermented heart of the festive week" },
    { item: "Dried taro leaves (for laing)", qty: "1 bag", cost: 2.5 },
    { item: "Coconut milk (gata)", qty: "2 cans", cost: 3.0 },
    { item: "Peanut butter / ground peanuts (for kare-kare)", qty: "1 jar", cost: 2.5, spansWeeks: true },
    { item: "Long beans + eggplant + banana heart (kare-kare vegetables)", qty: "an assortment", cost: 3.0 },
    { item: "Cane vinegar (top up, for dinuguan)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Tomatoes + onions", qty: "~1.5 lb", cost: 2.0 },
    { item: "Garlic + ginger", qty: "2 heads / 1 hand", cost: 1.5, spansWeeks: true },
    { item: "Chilies (for laing)", qty: "a handful", cost: 0.5 },
    { item: "Rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the foundation" },
    { item: "Cooking oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 21,
};

export const filipinoWeeks: WeekPlan[] = [
  phWeek1Adobo,
  phWeek2Sinigang,
  phWeek3Monggo,
  phWeek4Ginisa,
  phWeek5Tinola,
  phWeek6Prito,
  phWeek7Bagoong,
];
