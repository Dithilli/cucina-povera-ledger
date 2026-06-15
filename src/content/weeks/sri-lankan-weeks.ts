import type { WeekPlan } from "../types";

// Challenge — Sri Lanka: the island home plate, rice and curry every night.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "sri-lankan"; the
// engine is cuisine-agnostic, so these slot into the shared content arrays,
// tagged by cuisine. These are the curated, pregenerated defaults — the AI menu
// generator lets users compose variations on top of the same recipe pool.
//
// Distinct from the South Indian "saapadu" arc: this is the ISLAND. Roasted
// dark curry powder (not India's), scraped coconut and pol sambol on every
// plate, the rampe-curry-leaf-cinnamon tempering, Maldive fish for umami, goraka
// for the keeping curries, hoppers from a fermented batter, kottu off the
// griddle.
//
// The FOUNDATION — a pot of rice, scraped coconut / coconut milk, the
// rampe(pandan)-curry-leaf-cinnamon tempering, Maldive fish, roasted curry
// powder & chili, and pol sambol as the daily relish — is the constant beneath
// every week; it lives in each week's engine, worded naturally, and is NEVER
// itself a theme. Each theme is a real dinner category you actually eat on top
// of that base. Dinner text is lowercase free text. Saturday is always
// zero-waste — the week's leftovers into kottu.

export const slWeek1RiceCurry: WeekPlan = {
  slug: "sl-week-1-rice-curry",
  number: 1,
  cuisine: "sri-lankan",
  theme: "Rice & Curry",
  title: "Week 1 — Rice & Curry",
  description:
    "Start where the island plate starts: a mound of rice ringed by small curries. Parippu — red lentils melted in coconut milk and a tempering — beetroot curry stained deep purple, pumpkin simmered with roasted spice and coconut, and a fierce red pol sambol on the side. Three or four cheap curries around the rice, the dinner eaten most nights of the year.",
  context: `In every Sri Lankan home the everyday dinner has one shape: rice in the middle of the plate, and a ring of small curries around it — one of lentils, one or two of vegetables, a sambol, maybe a fried something. The cheapest and most constant is parippu, masoor dal melted soft in coconut milk and finished with a tempering of onion, curry leaf, and rampe. Around it go whatever the market gave cheap — beetroot turned sweet and purple, pumpkin gone silky with roasted curry powder, a green leaf mallung. A spoon of pol sambol — scraped coconut pounded with chili, lime, and Maldive fish — sits on the rim of every plate, the relish that wakes the whole meal. Learn to build the rice-and-curry plate this week and the rest of the arc is variation on a base you already eat by hand.`,
  dishes: ["Parippu (dhal curry)", "Beetroot curry", "Pumpkin curry", "Pol sambol"],
  proteinNote:
    "Masoor dal in the parippu carries most of the protein floor; the scraped coconut, a little Maldive fish in the sambol, and an egg here and there top it up. Rice-and-curry clears the floor with no meat.",
  bonus: false,
  preciousThread: "A knob of Maldive fish pounded into the pol sambol — the dried-tuna umami that makes the relish sing.",
  engine: [
    "rice — a big pot of rice, the plate under every dinner this week and every week (the constant base)",
    "coconut — scraped coconut and coconut milk, the body of the parippu and the heart of the pol sambol (the constant base)",
    "rampe-curry-leaf-cinnamon tempering + Maldive fish — the aromatic, umami base under every curry (the constant base)",
    "roasted curry powder & chili + pol sambol — the dark island spice blend and the daily relish on every plate (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "rice and curry — parippu, beetroot curry, pumpkin curry, and pol sambol, the full ring of small curries", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "parippu over rice with pol sambol and a fried papadam", estCalories: 500, estProtein: 14 },
    { day: "Tue", dinner: "beetroot curry and parippu over rice with pol sambol", estCalories: 520, estProtein: 16 },
    { day: "Wed", dinner: "pumpkin curry with rice, dal, and a spoon of pol sambol", estCalories: 480, estProtein: 13 },
    { day: "Thu", dinner: "rice and curry with a fried egg laid over the dal and sambol", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "parippu deepened on day five, rice, beetroot, and pol sambol", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: the week's curries and rice chopped together on the griddle into a vegetable kottu — nothing wasted", estCalories: 460, estProtein: 13 },
  ],
  shopping: [
    { item: "Rice (white / red samba)", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Coconut (fresh/desiccated) + coconut milk", qty: "several + 2 cans", cost: 5.0, spansWeeks: true, note: "the body of every curry and the pol sambol" },
    { item: "Masoor dal (red lentils, for parippu)", qty: "2 lb", cost: 3.0, note: "the bank — dal most nights" },
    { item: "Roasted curry powder, rampe, curry leaf, cinnamon, Maldive fish, chili", qty: "assorted", cost: 5.0, spansWeeks: true, note: "the tempering-and-spice box that powers the arc" },
    { item: "Beetroot", qty: "~2 lb", cost: 2.0 },
    { item: "Pumpkin", qty: "1 small", cost: 2.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Green chilies, garlic, ginger", qty: "a handful / 1 head / 1 hand", cost: 1.5 },
    { item: "Limes", qty: "6", cost: 1.5, note: "for the pol sambol" },
    { item: "Turmeric, mustard seed, fenugreek, dried red chili", qty: "a starter set", cost: 3.0, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Papadam + cooking oil + salt", qty: "1 pack", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const slWeek2Hoppers: WeekPlan = {
  slug: "sl-week-2-hoppers",
  number: 2,
  cuisine: "sri-lankan",
  theme: "Hoppers & String Hoppers",
  title: "Week 2 — Hoppers & String Hoppers",
  description:
    "The island's fermented-batter genius. A rice-flour-and-coconut batter soured overnight, swirled in a little bowl-shaped pan into a crisp-edged, soft-bellied appa — plain, or with an egg cracked into the center — and the steamed lace of idiyappam (string hoppers) pressed from the same pantry, eaten under a thin coconut gravy.",
  context: `Hoppers are Sri Lanka's great act of thrift turned magic. Ground rice flour loosened with coconut milk and a touch of toddy or yeast ferments overnight until it is alive and faintly sour, then a ladleful swirled in a small curved pan crisps lacy at the rim and stays soft and spongy in the middle — appa. Crack an egg into the well and it is a whole dinner: egg hopper. String hoppers (idiyappam) come from a steamed dough of the same rice flour, pressed through a mould into nests of fine white lace and steamed soft. Both are gentle, plain things that live entirely on what you pour over and around them — kiri hodi (a mild coconut-milk gravy), ala hodi (a thin potato curry), and always a spoon of pol sambol. The batter sits squarely on the rice-coconut-tempering foundation, only fermented; the ferment costs nothing but a night's wait, and yesterday's extra batter never goes to waste.`,
  dishes: ["Egg hoppers", "Plain hoppers", "String hoppers with kiri hodi", "Ala hodi"],
  proteinNote:
    "The egg in the egg hopper, a little dal or sprat curry alongside, and the Maldive fish in the sambol carry the protein; an egg hopper with kiri hodi and sambol clears the floor.",
  bonus: false,
  preciousThread: "A well-soured hopper batter risen overnight — the week's whole engine in a bowl — and an egg dropped into the hot pan.",
  engine: [
    "hopper batter — rice flour loosened with coconut milk, soured overnight; the week's headline rests on it",
    "rice + coconut — a pot of rice for the side plates and the coconut milk that thins the batter and the kiri hodi (the constant base)",
    "rampe-curry-leaf-cinnamon tempering + Maldive fish — the aromatic base under the hodi and the sambol (the constant base)",
    "roasted curry powder & chili + pol sambol — the dark spice for the ala hodi and the daily relish on every plate (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "egg hoppers — appa with an egg in the well — with kiri hodi and pol sambol, the headline", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "plain hoppers with ala hodi and a spoon of pol sambol", estCalories: 500, estProtein: 14 },
    { day: "Tue", dinner: "string hoppers under kiri hodi with seeni sambol on the side", estCalories: 520, estProtein: 16 },
    { day: "Wed", dinner: "ala hodi — thin potato curry — over string hoppers with pol sambol", estCalories: 480, estProtein: 13 },
    { day: "Thu", dinner: "egg hoppers again with a leftover dal and pol sambol", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "string hoppers with kiri hodi, an egg, and pol sambol", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: leftover hoppers and string hoppers torn up and griddled with the last hodi into a kottu — nothing wasted", estCalories: 460, estProtein: 13 },
  ],
  shopping: [
    { item: "Rice flour (for hopper and string-hopper batter)", qty: "5 lb", cost: 4.0, note: "the bank — the batter base" },
    { item: "Coconut milk (thins the batter and the kiri hodi)", qty: "3 cans / fresh", cost: 4.0, spansWeeks: true, note: "the body of the gravy" },
    { item: "Yeast / toddy (to start the ferment)", qty: "small", cost: 1.5 },
    { item: "Eggs (for egg hoppers)", qty: "1 dozen", cost: 2.5, note: "the precious thread — the egg in the well" },
    { item: "Potatoes (for ala hodi)", qty: "~3 lb", cost: 2.5 },
    { item: "Rice (for the side plates)", qty: "2 lb", cost: 1.6 },
    { item: "Coconut (for pol sambol)", qty: "1–2", cost: 2.5, spansWeeks: true },
    { item: "Rampe, curry leaf, cinnamon, Maldive fish (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Roasted curry powder + chili (top up)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Onions, green chilies, garlic, ginger", qty: "~3 lb / a handful / 1 head / 1 hand", cost: 3.0, spansWeeks: true },
    { item: "Limes", qty: "6", cost: 1.5 },
    { item: "Cooking oil + salt", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const slWeek3Sambol: WeekPlan = {
  slug: "sl-week-3-sambol",
  number: 3,
  cuisine: "sri-lankan",
  theme: "Pol Sambol & Mallung",
  title: "Week 3 — Pol Sambol & Mallung",
  description:
    "The relishes and the green that finish every plate, turned up to headline. Pol sambol — scraped coconut pounded fierce with chili, lime, and Maldive fish — gotu kola mallung shredded fine and tossed raw with coconut, sweet-dark seeni sambol of slow-caramelized onion, and a quick fry of dried sprats — all eaten over rice.",
  context: `No Sri Lankan plate is complete without a sambol and a mallung — the fresh, sharp, green counterpoints that lift a plate of rice and curry. Pol sambol is the daily one: fresh-scraped coconut pounded in a mortar with red chili, lime, salt, a little onion, and a knob of Maldive fish until it is coral-red and electric. Mallung is the green — gotu kola, mukunuwenna, or any cheap leaf shredded to a confetti and tossed barely-cooked with grated coconut, turmeric, and lime, all vitamins and freshness. Seeni sambol is the sweet, dark, jammy one: onions cooked down slow with chili, tamarind, and a little sugar until they caramelize into something between a relish and a candy. A fast fry of dried sprats (haal masso) gives the salt-and-crunch. None of it is a meal alone — each rides the constant rice-coconut-tempering foundation — but together over a mound of rice they are some of the cheapest, brightest eating on the island.`,
  dishes: ["Pol sambol", "Gotu kola mallung", "Seeni sambol", "Dried sprats (haal masso)"],
  proteinNote:
    "The dried sprats and the Maldive fish in the sambol carry the protein, with a dal alongside; a plate of rice, sprats, mallung, and pol sambol clears the floor.",
  bonus: false,
  preciousThread: "Dried sprats (haal masso) fried crisp — the cheap little fish that bring the salt and the protein to the green plate.",
  engine: [
    "rice — the mound of rice every sambol and mallung is eaten over (the constant base)",
    "coconut — fresh-scraped coconut for the pol sambol and the mallung, coconut milk for a side dal (the constant base)",
    "rampe-curry-leaf-cinnamon tempering + Maldive fish — the aromatic base and the umami pounded into the sambol (the constant base)",
    "roasted curry powder & chili + pol sambol — the dark spice for the seeni sambol and the daily coral-red relish (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "rice with pol sambol, gotu kola mallung, seeni sambol, and fried dried sprats — the full relish plate, the headline", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "rice with pol sambol, mallung, and a side parippu", estCalories: 500, estProtein: 14 },
    { day: "Tue", dinner: "seeni sambol and dried sprats over rice with pol sambol", estCalories: 520, estProtein: 16 },
    { day: "Wed", dinner: "gotu kola mallung with rice, dal, and pol sambol", estCalories: 480, estProtein: 13 },
    { day: "Thu", dinner: "rice with dried sprats, seeni sambol, and a fried egg", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "rice with pol sambol, mallung, and the last of the seeni sambol", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: the week's sambols, mallung, and sprats stirred through the last rice on the griddle into a kottu — nothing wasted", estCalories: 460, estProtein: 13 },
  ],
  shopping: [
    { item: "Rice (white / red samba)", qty: "3 lb", cost: 2.5, note: "the base under every relish plate" },
    { item: "Coconut (fresh, for sambol and mallung)", qty: "3", cost: 4.0, spansWeeks: true, note: "the bank — scraped coconut all week" },
    { item: "Dried sprats (haal masso)", qty: "1 lb", cost: 3.5, note: "the precious thread — the crunch and protein" },
    { item: "Gotu kola / mukunuwenna / cheap greens", qty: "3 bunches", cost: 2.5 },
    { item: "Onions (the seeni sambol runs on them)", qty: "~4 lb", cost: 3.0, spansWeeks: true },
    { item: "Maldive fish + chili (for the sambols, top up)", qty: "small", cost: 2.5, spansWeeks: true },
    { item: "Masoor dal (for a side parippu)", qty: "1 lb", cost: 1.5 },
    { item: "Limes", qty: "8", cost: 2.0, note: "the sambol's bright" },
    { item: "Tamarind + a little jaggery/sugar (for seeni sambol)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Rampe, curry leaf, cinnamon (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "half dozen", cost: 1.5 },
    { item: "Cooking oil + salt", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const slWeek4Fish: WeekPlan = {
  slug: "sl-week-4-fish",
  number: 4,
  cuisine: "sri-lankan",
  theme: "Fish & Maldive Fish",
  title: "Week 4 — Fish & Maldive Fish",
  description:
    "An island eats fish, and keeps it clever. Ambul thiyal — chunks of fish blackened and soured in goraka until they keep for days unrefrigerated — a coconut-milk fish curry (maalu hodi) gone red with roasted spice, crisp fried fish cutlets bound with potato, and a dried-sprat curry for the lean night. The sea, made to stretch and to last.",
  context: `Ringed by the ocean, Sri Lanka built a whole grammar around fish — and, crucially, around making it last in a hot climate before iceboxes. The masterpiece is ambul thiyal, "sour fish": firm chunks of tuna rubbed dark with roasted curry powder, black pepper, and goraka (the dried, intensely sour fruit of the gamboge tree), then cooked nearly dry until the fish turns black-brown and so acidified it keeps for days without a fridge. Maalu hodi is the everyday opposite — fish simmered in coconut milk and roasted spice into a loose red curry poured over rice. Fish cutlets stretch a little fish a long way, mashed with potato, spiced, breaded, and fried into crisp rounds. And when fresh fish is dear, a curry of dried sprats does the job. Maldive fish — sun-dried, smoked, rock-hard tuna shaved into almost everything for its deep savory hit — is the island's oldest trade good and the umami running through the whole arc. All of it rests on the constant rice-coconut-tempering base; the fish is the week's flourish on top.`,
  dishes: ["Ambul thiyal (sour fish curry)", "Fish curry (maalu hodi)", "Fish cutlets", "Dried sprat curry"],
  proteinNote:
    "The fresh fish in the thiyal and hodi, the fish-and-potato cutlets, the dried sprats, and the Maldive fish all carry the protein hard this week; fish curry over rice clears the floor with room to spare.",
  bonus: false,
  preciousThread: "A piece of goraka — the dried sour gamboge — that blackens the ambul thiyal and lets it keep for days.",
  engine: [
    "rice — the pot of rice every fish curry is poured over (the constant base)",
    "coconut — coconut milk for the maalu hodi and scraped coconut for the pol sambol (the constant base)",
    "rampe-curry-leaf-cinnamon tempering + Maldive fish — the aromatic base and the dried-tuna umami shaved into the curries (the constant base)",
    "roasted curry powder & chili + goraka + pol sambol — the dark spice, the souring goraka, and the daily relish (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ambul thiyal — fish blackened and soured in goraka — with rice and pol sambol, the headline that keeps", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "maalu hodi — fish in red coconut curry — over rice with pol sambol", estCalories: 500, estProtein: 14 },
    { day: "Tue", dinner: "fish cutlets with rice, a dal, and pol sambol", estCalories: 520, estProtein: 16 },
    { day: "Wed", dinner: "dried sprat curry over rice with a mallung", estCalories: 480, estProtein: 13 },
    { day: "Thu", dinner: "ambul thiyal again, deeper on day five, with rice and pol sambol", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "maalu hodi with leftover cutlets and rice", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: the week's fish curries and rice chopped on the griddle into a fish kottu — nothing wasted", estCalories: 460, estProtein: 13 },
  ],
  shopping: [
    { item: "Rice (white / red samba)", qty: "3 lb", cost: 2.5, note: "the base under every curry" },
    { item: "A firm fish (tuna / mackerel, for thiyal and hodi)", qty: "~2.5 lb", cost: 6.0, note: "the bank — fish twice over" },
    { item: "Dried sprats (haal masso, for the sprat curry)", qty: "1/2 lb", cost: 2.0 },
    { item: "Goraka (dried gamboge)", qty: "small", cost: 2.0, spansWeeks: true, note: "the precious thread — sours and keeps the thiyal" },
    { item: "Coconut milk (for maalu hodi)", qty: "2 cans / fresh", cost: 3.0, spansWeeks: true },
    { item: "Potatoes (for the cutlets)", qty: "~2 lb", cost: 1.8 },
    { item: "Coconut (for pol sambol)", qty: "1–2", cost: 2.5, spansWeeks: true },
    { item: "Roasted curry powder, black pepper, Maldive fish (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Onions, green chilies, garlic, ginger", qty: "~3 lb / a handful / 1 head / 1 hand", cost: 3.0, spansWeeks: true },
    { item: "Breadcrumbs + egg (for the cutlets)", qty: "small / half dozen", cost: 2.0 },
    { item: "Rampe, curry leaf, cinnamon (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Frying oil + salt + limes", qty: "/ 4", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 20,
};

export const slWeek5Kottu: WeekPlan = {
  slug: "sl-week-5-kottu",
  number: 5,
  cuisine: "sri-lankan",
  theme: "Kottu & Roti",
  title: "Week 5 — Kottu & Roti",
  description:
    "The griddle and the great leftover dish. Kottu roti — godamba flatbread chopped to ribbons on a hot plate with vegetables, egg, and curry to that clattering two-blade rhythm — pol roti, the dense coconut flatbread eaten with sambol, and godamba roti torn and dipped into curry. The week the leftovers become the headline.",
  context: `Kottu is the sound of a Sri Lankan night: two flat blades clattering against a steel griddle, chopping godamba roti to ribbons with vegetables, egg, a little curry, and a spoon of spice until it is a fragrant, springy tangle. It was born of thrift — a way to use up the day's leftover roti and gravy, turned by the street cooks into the island's most beloved dish. Godamba roti itself is a thin, elastic dough slapped and stretched translucent on the griddle, eaten torn and dipped into curry. Pol roti is the homely cousin: rice flour and scraped coconut pressed into a dense, chewy flatbread griddled brown and eaten with pol sambol or lunu miris for breakfast or a frugal dinner. All of it sits on the constant rice-coconut-tempering base — the roti is dough and coconut, the kottu is the roti plus whatever curry the week made. This is the week the foundation teaches its best lesson: nothing on the island is ever wasted, because the leftovers become the thing everyone fights over.`,
  dishes: ["Kottu roti", "Pol roti", "Godamba roti with curry", "Vegetable kottu"],
  proteinNote:
    "The egg chopped through the kottu, a little dal or sprat curry folded in, and the coconut in the pol roti carry the protein; an egg kottu with curry clears the floor.",
  bonus: false,
  preciousThread: "An egg (or a little leftover chicken) chopped into the kottu on the griddle — the bit of protein that makes it dinner.",
  engine: [
    "rice + rice flour — a pot of rice and the rice flour for the pol roti and godamba dough (the constant base)",
    "coconut — scraped coconut pressed into the pol roti and the coconut milk for the curry that goes in the kottu (the constant base)",
    "rampe-curry-leaf-cinnamon tempering + Maldive fish — the aromatic base under the kottu curry and the sambol (the constant base)",
    "roasted curry powder & chili + pol sambol — the dark spice tossed through the kottu and the daily relish (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "egg kottu — godamba roti chopped with vegetables, egg, and curry on the griddle — with pol sambol, the headline", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "pol roti with lunu miris and a spoon of dal", estCalories: 500, estProtein: 14 },
    { day: "Tue", dinner: "godamba roti torn and dipped into a coconut vegetable curry", estCalories: 520, estProtein: 16 },
    { day: "Wed", dinner: "vegetable kottu from the day's curries with pol sambol", estCalories: 480, estProtein: 13 },
    { day: "Thu", dinner: "pol roti with seeni sambol and a fried egg", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "godamba roti with the last curry and a kottu on the side", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: every scrap of roti and curry left chopped together into one big kottu — the dish that exists to waste nothing", estCalories: 460, estProtein: 13 },
  ],
  shopping: [
    { item: "Flour (for godamba roti dough)", qty: "5 lb", cost: 3.5, note: "the bank — the stretchy roti and the kottu base" },
    { item: "Rice flour (for pol roti)", qty: "2 lb", cost: 1.6 },
    { item: "Coconut (scraped into the pol roti and sambol)", qty: "3", cost: 4.0, spansWeeks: true, note: "the body of the roti" },
    { item: "Eggs (chopped into the kottu)", qty: "1 dozen", cost: 2.5, note: "the precious thread — protein on the griddle" },
    { item: "Rice (a small pot for the side)", qty: "2 lb", cost: 1.6 },
    { item: "Mixed vegetables (leeks, carrot, cabbage for the kottu)", qty: "~3 lb", cost: 3.0 },
    { item: "Coconut milk (for the kottu curry)", qty: "2 cans / fresh", cost: 2.5, spansWeeks: true },
    { item: "Masoor dal (for a side and to fold into kottu)", qty: "1 lb", cost: 1.5 },
    { item: "Onions, green chilies, garlic, ginger", qty: "~3 lb / a handful / 1 head / 1 hand", cost: 3.0, spansWeeks: true },
    { item: "Roasted curry powder, chili, Maldive fish (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Rampe, curry leaf, cinnamon (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Cooking oil + salt + limes", qty: "/ 4", cost: 2.8, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const slWeek6Coconut: WeekPlan = {
  slug: "sl-week-6-coconut",
  number: 6,
  cuisine: "sri-lankan",
  theme: "Kiri & Coconut Curries",
  title: "Week 6 — Kiri & Coconut Curries",
  description:
    "The gentle, milk-rich curries — the white side of the island plate. Kiri hodi, a mild turmeric-and-coconut-milk gravy with no chili heat, a luxurious cashew curry stewed soft in thick coconut milk, ash plantain curry in the same white sauce, and parippu cooked with spinach. The week the coconut is poured whole, not just scraped.",
  context: `Sri Lankan curries come in two registers — the fiery red ones turned dark with roasted chili, and the gentle white ones bathed in coconut milk with barely any heat — and this week belongs to the white. Kiri hodi is the simplest and most loved: coconut milk warmed with turmeric, onion, green chili, curry leaf, and a squeeze of lime into a thin, pale, soothing gravy poured over rice or string hoppers. Cashew curry (kaju maluwa) is the small luxury — whole cashews simmered soft in thick coconut milk until they go buttery, a dish for a good week. Ash plantain (alu kesel) curry takes the cheap green banana and stews it in the same white sauce. And parippu cooked with a handful of spinach rounds the table. The whole week leans on the coconut poured as milk rather than scraped as flesh — the same constant foundation, turned creamy and calm. The cashews and the coconut milk are the splurge; the rice, the tempering, and the pol sambol on the rim keep it grounded.`,
  dishes: ["Kiri hodi", "Cashew curry (kaju maluwa)", "Ash plantain curry", "Parippu with spinach"],
  proteinNote:
    "The cashews, the parippu, the coconut, and the dal-with-spinach carry the protein; a plate of cashew curry, dal, and rice clears the floor with no meat.",
  bonus: false,
  preciousThread: "A handful of whole cashews stewed soft in thick coconut milk — the island's gentlest small luxury.",
  engine: [
    "rice — the pot of rice every white curry is poured over (the constant base)",
    "coconut — thick coconut milk poured whole into the kiri hodi and the cashew curry, scraped coconut for the sambol (the constant base)",
    "rampe-curry-leaf-cinnamon tempering + Maldive fish — the aromatic base under the curries and the sambol (the constant base)",
    "roasted curry powder & chili + pol sambol — the dark spice held back this gentle week, and the daily relish on the rim (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "cashew curry in thick coconut milk with rice, parippu, and pol sambol — the headline splurge", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "kiri hodi over rice with a spoon of pol sambol", estCalories: 500, estProtein: 14 },
    { day: "Tue", dinner: "ash plantain curry in white coconut sauce with rice and dal", estCalories: 520, estProtein: 16 },
    { day: "Wed", dinner: "parippu cooked with spinach over rice with pol sambol", estCalories: 480, estProtein: 13 },
    { day: "Thu", dinner: "cashew curry again with rice, kiri hodi, and a mallung", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "kiri hodi with ash plantain and rice", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: the week's white curries and rice chopped on the griddle into a mild kottu — nothing wasted", estCalories: 460, estProtein: 13 },
  ],
  shopping: [
    { item: "Rice (white / red samba)", qty: "3 lb", cost: 2.5, note: "the base under every white curry" },
    { item: "Coconut milk (poured whole into kiri hodi and cashew curry)", qty: "4 cans / fresh", cost: 5.0, spansWeeks: true, note: "the bank — the week's whole body" },
    { item: "Cashews (whole, for kaju maluwa)", qty: "1 lb", cost: 5.0, note: "the precious thread — the gentle luxury" },
    { item: "Ash plantain / green banana", qty: "~2 lb", cost: 2.0 },
    { item: "Masoor dal (for parippu with spinach)", qty: "1 lb", cost: 1.5 },
    { item: "Spinach / cheap greens", qty: "2 bunches", cost: 2.0 },
    { item: "Coconut (scraped, for pol sambol)", qty: "1–2", cost: 2.5, spansWeeks: true },
    { item: "Onions, green chilies, garlic, ginger", qty: "~3 lb / a handful / 1 head / 1 hand", cost: 3.0, spansWeeks: true },
    { item: "Turmeric, rampe, curry leaf, cinnamon (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Maldive fish + chili (top up)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Limes", qty: "6", cost: 1.5 },
    { item: "Cooking oil + salt", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const slWeek7Feast: WeekPlan = {
  slug: "sl-week-7-feast",
  number: 7,
  cuisine: "sri-lankan",
  theme: "Rice Feast & Festival",
  title: "Week 7 — Rice Feast & Festival",
  description:
    "The plate dressed for celebration. Kaha bath — golden rice cooked in coconut milk and turmeric — the Dutch-Burgher lamprais of rice, curries, and a frikkadel baked in a banana leaf, kukul mas (Sri Lankan chicken curry) gone deep and dark with roasted spice, and milk-white kiribath cut in diamonds for the New Year. The same humble pantry, in its best clothes.",
  context: `At the close of the arc the everyday plate becomes the feast — for Avurudu (the Sinhala and Tamil New Year), for a wedding, for a Sunday that matters. Kaha bath is festival rice: grains cooked in coconut milk with turmeric, rampe, cinnamon, and cardamom until they are golden and fragrant. Lamprais is the island's great fusion treasure — the Dutch Burghers' "lump rice," a portion of rice and several curries, a frikkadel meatball, a sambol and a blachan, all parcelled into a banana leaf and baked so the flavors marry. Kukul mas, the Sri Lankan chicken curry, is the celebration's centerpiece: chicken stewed in roasted dark curry powder, coconut milk, and goraka until the gravy turns near-black and intense. And kiribath — rice cooked in thick coconut milk, pressed flat and cut into diamonds — is the milk-rice eaten at every threshold, the first food of the New Year, served with lunu miris and a piece of jaggery. Every bit of it rests on the same constant rice-coconut-tempering-and-pol-sambol foundation that opened the arc — proof that the everyday kitchen and the festival table are the same kitchen, only dressed up. And even the feast wastes nothing: tomorrow it is kottu.`,
  dishes: ["Kaha bath (yellow rice)", "Lamprais", "Kukul mas (chicken curry)", "Kiribath"],
  proteinNote:
    "The chicken in the kukul mas and the lamprais, the frikkadel, the dal, and the coconut carry the protein hard this feast week; a plate of yellow rice and chicken curry clears the floor with room to spare.",
  bonus: false,
  preciousThread: "A small bird's worth of chicken stewed dark in roasted curry powder and goraka — kukul mas, the centerpiece of the feast.",
  engine: [
    "rice — a big pot, cooked golden into kaha bath, white into kiribath, and parcelled into the lamprais (the constant base)",
    "coconut — coconut milk for the festival rices and the chicken curry, scraped coconut for the sambol (the constant base)",
    "rampe-curry-leaf-cinnamon tempering + Maldive fish — the aromatic base scenting the rices and the curries (the constant base)",
    "roasted curry powder & chili + goraka + pol sambol — the dark spice that blackens the kukul mas and the daily relish (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "kaha bath with kukul mas — golden rice and dark chicken curry — pol sambol and a papadam, the festival headline", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "lamprais — rice, curries, and a frikkadel baked in a banana leaf", estCalories: 540, estProtein: 17 },
    { day: "Tue", dinner: "kiribath cut in diamonds with lunu miris and a leftover curry", estCalories: 500, estProtein: 14 },
    { day: "Wed", dinner: "kaha bath again with kukul mas and a mallung", estCalories: 520, estProtein: 16 },
    { day: "Thu", dinner: "a festive plate — yellow rice, chicken curry, dal, two sambols, and a papadam", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "kiribath with the last of the chicken curry and pol sambol", estCalories: 500, estProtein: 15 },
    { day: "Sat", dinner: "zero-waste: the week's yellow rice, chicken, and curries chopped together into a chicken kottu — nothing wasted, even after the feast", estCalories: 460, estProtein: 13 },
  ],
  shopping: [
    { item: "Rice (for kaha bath, kiribath, and lamprais)", qty: "4 lb", cost: 3.5, note: "the base under the feast" },
    { item: "Chicken (a small bird, for kukul mas and lamprais)", qty: "~3 lb", cost: 6.0, note: "the precious thread — the centerpiece" },
    { item: "Coconut milk (the festival rices and the curry)", qty: "4 cans / fresh", cost: 5.0, spansWeeks: true, note: "the bank — golden rice and white kiribath" },
    { item: "Coconut (scraped, for sambol and frikkadel)", qty: "1–2", cost: 2.5, spansWeeks: true },
    { item: "Banana leaves (for the lamprais parcels)", qty: "1 pack", cost: 2.0 },
    { item: "Ground meat (for the frikkadel)", qty: "1/2 lb", cost: 2.5 },
    { item: "Roasted curry powder, goraka, cardamom, cinnamon", qty: "assorted", cost: 3.0, spansWeeks: true, note: "the festival spice and the dark gravy" },
    { item: "Onions, green chilies, garlic, ginger", qty: "~3 lb / a handful / 1 head / 1 hand", cost: 3.0, spansWeeks: true },
    { item: "Masoor dal + a vegetable (for the lamprais curries)", qty: "1 lb / ~2 lb", cost: 3.0 },
    { item: "Turmeric, rampe, curry leaf, Maldive fish (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Jaggery (for the kiribath) + limes", qty: "small / 4", cost: 2.0, note: "the New Year's sweet" },
    { item: "Papadam + frying oil + salt", qty: "1 pack", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 33,
  steadyStateWeekly: 21,
};

export const sriLankanWeeks: WeekPlan[] = [
  slWeek1RiceCurry,
  slWeek2Hoppers,
  slWeek3Sambol,
  slWeek4Fish,
  slWeek5Kottu,
  slWeek6Coconut,
  slWeek7Feast,
];
