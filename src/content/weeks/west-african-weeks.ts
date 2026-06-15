import type { WeekPlan } from "../types";

// Challenge — West Africa (Nigeria & Ghana): the swallow-and-soup table.
// The full seven-week arc, each week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "west-african"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// lets users compose variations on top of the same recipe pool.
//
// RULE #6 (constant foundation): the West African foundation — rice, a swallow
// (eba/fufu/garri), red palm oil, and the obe-ata pepper base — is NEVER a theme.
// It lives in each week's `engine` as the constant beneath the themed dinners.
// Dinner slugs reference recipes in src/content/recipes/*.

export const waWeek1Jollof: WeekPlan = {
  slug: "wa-week-1-jollof",
  number: 1,
  cuisine: "west-african",
  theme: "Jollof & Rice",
  title: "Week 1 — Jollof & Rice",
  description:
    "Start where the whole region agrees and argues — the smoky, tomato-red one-pot of jollof, and its cousins waakye and coconut rice. One pot of seasoned rice feeds a table for pennies, and the párty-jollof bottom-of-the-pot is the prize.",
  context:
    `Everything begins with the pepper base: blended tomato, red bell pepper, scotch bonnet, and onion, fried down low in red palm or groundnut oil until it loses its raw edge and turns to a deep red obe ata. Cook rice straight in that base and you have jollof — the dish two nations will fight over, stretched to feed a crowd from one pot. Dried crayfish and a crumbled stock cube do the seasoning that meat would, so a little goes a long way. The smoky scorched layer at the bottom — the párty jollof bottom-pot — is treasure, not waste. Rice, the pepper base, and palm oil are the constant foundation here; the week just turns them three ways.`,
  dishes: [
    "Jollof rice (the smoky one-pot)",
    "Waakye (rice and beans cooked with millet-leaf)",
    "Coconut rice (jollof's gentler cousin)",
    "Party-jollof bottom-pot, scraped and shared",
  ],
  proteinNote:
    "Waakye's beans carry the protein floor; jollof and coconut rice lean on dried crayfish, a little fish, and a few eggs or beans on the side.",
  bonus: false,
  preciousThread: "A small smoked turkey or piece of dried fish to deepen the jollof pot.",
  engine: [
    "obe-ata — blend and fry down the pepper base (tomato, red pepper, scotch bonnet, onion): the foundation under every pot",
    "rice — a big bag of long-grain, the constant staple all week",
    "red palm oil + groundnut oil — the two cooking fats the cuisine rests on",
    "garri — keep a tub for eba on the side and for soaking",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "jollof-rice — the smoky headline pot, with fried plantain", estCalories: 720, estProtein: 18 },
    { day: "Mon", dinner: "waakye — rice and beans, with a peppery shito sauce", estCalories: 700, estProtein: 24 },
    { day: "Tue", dinner: "jollof-rice with a fried egg and dodo", estCalories: 690, estProtein: 20 },
    { day: "Wed", dinner: "coconut-rice with stewed beans on the side", estCalories: 680, estProtein: 21 },
    { day: "Thu", dinner: "waakye again, the pot deepened, with garri sprinkle", estCalories: 710, estProtein: 25 },
    { day: "Fri", dinner: "jollof-rice, party-style, with the bottom-pot scraped over", estCalories: 730, estProtein: 19 },
    { day: "Sat", dinner: "fried-rice-and-jollof combo from the week's leftovers — nothing wasted", estCalories: 700, estProtein: 22 },
  ],
  shopping: [
    { item: "Long-grain rice", qty: "5 lb", cost: 4.5, note: "the bank — the week runs on this" },
    { item: "Black-eyed peas / cowpeas (for waakye)", qty: "1.5 lb", cost: 2.0 },
    { item: "Plum tomatoes + red bell peppers (for obe ata)", qty: "~3 lb", cost: 4.0 },
    { item: "Scotch bonnets", qty: "a handful", cost: 1.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.5 },
    { item: "Red palm oil", qty: "1 bottle", cost: 4.0, spansWeeks: true, note: "the precious thread — the signature fat" },
    { item: "Groundnut / vegetable oil", qty: "1 bottle", cost: 3.0, spansWeeks: true },
    { item: "Ground dried crayfish", qty: "small bag", cost: 2.5, spansWeeks: true, note: "cheap, intense seasoning" },
    { item: "Stock cubes (Maggi)", qty: "1 box", cost: 1.5, spansWeeks: true },
    { item: "Dried fish or smoked turkey", qty: "a piece", cost: 3.0 },
    { item: "Garri (cassava flour)", qty: "2 lb", cost: 2.0, spansWeeks: true },
    { item: "Coconut milk (for coconut rice)", qty: "1 tin", cost: 1.5 },
    { item: "Plantains", qty: "4", cost: 2.0 },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Curry, thyme, bay, salt", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 18,
};

export const waWeek2Beans: WeekPlan = {
  slug: "wa-week-2-beans",
  number: 2,
  cuisine: "west-african",
  theme: "Beans",
  title: "Week 2 — Beans",
  description:
    "The protein week, all from the humble cowpea. Red-red and ewa agoyin smother soft beans in palm-oil pepper sauce; moimoi steams them into a savory pudding; akara fries them into morning fritters. One bag of beans, four different dinners.",
  context:
    `The cowpea — the black-eyed pea — is West Africa's cheapest, most generous protein, and the bean week shows off how many ways it transforms. Soaked and peeled, the same bean becomes a smooth steamed moimoi pudding or a puff of akara fritters; cooked soft, it gets smothered in a fried palm-oil pepper sauce for red-red or the sweet-onion ewa agoyin. Dried crayfish, ground in, seasons the bean pot the way meat would, for a fraction of the cost. Palm oil bloomed with pepper is the constant thread tying every plate together. Rice, the pepper base, and palm oil stay the foundation; the beans are the changing theme.`,
  dishes: [
    "Red-red (beans in palm-oil pepper sauce, with dodo)",
    "Ewa agoyin (mashed beans, fried-pepper sauce)",
    "Moimoi (steamed bean pudding)",
    "Akara (fried bean fritters)",
  ],
  proteinNote:
    "Cowpeas are the headline protein — a bowl of red-red or moimoi clears most of the day's floor with no meat, just beans, crayfish, and palm oil.",
  bonus: false,
  preciousThread: "A small tin of sardines or a few boiled eggs to stud the moimoi.",
  engine: [
    "obe-ata — the pepper base, fried hard in palm oil for red-red and agoyin sauces",
    "a big pot of cooked cowpeas — split between red-red, agoyin, moimoi, and akara",
    "red palm oil — bloomed with pepper, the constant fat",
    "rice + garri — the foundation staples on the side all week",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "red-red — palm-oil beans with fried plantain (dodo)", estCalories: 700, estProtein: 26 },
    { day: "Mon", dinner: "ewa-agoyin with the sweet-hot fried-pepper sauce, and bread", estCalories: 690, estProtein: 24 },
    { day: "Tue", dinner: "moimoi (steamed bean pudding) with a bowl of rice", estCalories: 670, estProtein: 25 },
    { day: "Wed", dinner: "red-red again, the pot deepened, over rice", estCalories: 710, estProtein: 27 },
    { day: "Thu", dinner: "akara fritters with pap or bread, and pepper sauce", estCalories: 680, estProtein: 22 },
    { day: "Fri", dinner: "ewa-agoyin with dodo and a boiled egg", estCalories: 720, estProtein: 28 },
    { day: "Sat", dinner: "moimoi and akara from the same soaked-bean batch — nothing wasted", estCalories: 700, estProtein: 26 },
  ],
  shopping: [
    { item: "Black-eyed peas / cowpeas", qty: "4 lb", cost: 5.0, note: "the bank — the whole week is one bean" },
    { item: "Plum tomatoes + red bell peppers (obe ata)", qty: "~2.5 lb", cost: 3.5 },
    { item: "Scotch bonnets", qty: "a handful", cost: 1.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.5 },
    { item: "Red palm oil (top up)", qty: "1/2 bottle", cost: 2.0, spansWeeks: true, note: "the constant fat" },
    { item: "Groundnut / vegetable oil", qty: "for frying akara", cost: 2.0, spansWeeks: true },
    { item: "Ground dried crayfish (top up)", qty: "small bag", cost: 2.0, spansWeeks: true },
    { item: "Stock cubes", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Sardines / eggs (for moimoi)", qty: "1 tin / 6", cost: 3.0 },
    { item: "Rice", qty: "2 lb", cost: 1.8 },
    { item: "Plantains", qty: "5", cost: 2.5 },
    { item: "Bread / pap (ogi) for akara and agoyin", qty: "", cost: 2.0 },
    { item: "Garri (top up)", qty: "1 lb", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const waWeek3Egusi: WeekPlan = {
  slug: "wa-week-3-egusi",
  number: 3,
  cuisine: "west-african",
  theme: "Egusi & Draw Soups",
  title: "Week 3 — Egusi & Draw Soups",
  description:
    "The heart of the swallow-and-soup table. Ground melon seeds thicken egusi into a rich, lumpy stew; ogbono and okro draw into the slippery, elastic soups that make the swallow slide. These are the soups you tear fufu for.",
  context:
    `Now the table turns to the soups you actually scoop with a swallow. Egusi — ground melon seeds — is the cheapest way to make a soup rich and protein-dense, cooked in lumps in a red palm-oil and pepper base until it's thick enough to stand a spoon. Ogbono (wild mango seed) and okro (okra) bring the prized "draw" — the slippery, elastic stretch that carries a fist of eba or fufu down. A little dried fish and crayfish season the whole pot, so a few cents of seafood flavor a family meal. Palm oil, the pepper base, and the swallow are the constant foundation; the drawing soups are the week's theme.`,
  dishes: [
    "Egusi soup (ground melon seed, in lumps)",
    "Ogbono soup (drawing wild-mango-seed soup)",
    "Okro soup (okra draw soup)",
    "Eba and fufu to scoop them",
  ],
  proteinNote:
    "Egusi seeds bring oil and protein; with a little dried fish and crayfish, the egusi pot clears the floor. Ogbono and okro lean on the same seasoning fish.",
  bonus: false,
  preciousThread: "A length of stockfish or smoked fish to thread through every pot.",
  engine: [
    "obe-ata — the palm-oil pepper base under every soup",
    "ground egusi + ground ogbono — the seed thickeners, the week's engine",
    "red palm oil + dried fish/crayfish — the constant fat and the seasoning",
    "garri (for eba) + fufu — the swallows, the constant base",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "egusi-soup with eba — the headline pot, with greens stirred in", estCalories: 730, estProtein: 27 },
    { day: "Mon", dinner: "ogbono-soup, full of draw, with fufu", estCalories: 710, estProtein: 24 },
    { day: "Tue", dinner: "egusi-soup again, deepened, with eba", estCalories: 720, estProtein: 26 },
    { day: "Wed", dinner: "okro-soup with a little fish, over eba", estCalories: 690, estProtein: 23 },
    { day: "Thu", dinner: "ogbono-soup and okro-soup combined — double draw — with fufu", estCalories: 700, estProtein: 24 },
    { day: "Fri", dinner: "egusi-soup with stewed greens, eba on the side", estCalories: 720, estProtein: 26 },
    { day: "Sat", dinner: "a mixed soup pot from the week's leftovers, scooped with eba — nothing wasted", estCalories: 710, estProtein: 25 },
  ],
  shopping: [
    { item: "Ground egusi (melon seed)", qty: "2 lb", cost: 6.0, note: "the bank — the week's rich thickener" },
    { item: "Ground ogbono (wild mango seed)", qty: "1/2 lb", cost: 3.0 },
    { item: "Okra (fresh or frozen)", qty: "1.5 lb", cost: 2.5 },
    { item: "Stockfish / dried smoked fish", qty: "a piece", cost: 4.0, note: "the precious thread — threads every pot" },
    { item: "Plum tomatoes + red peppers + scotch bonnet (obe ata)", qty: "~2 lb", cost: 3.0 },
    { item: "Onions", qty: "~2 lb", cost: 1.8 },
    { item: "Red palm oil (top up)", qty: "1/2 bottle", cost: 2.0, spansWeeks: true },
    { item: "Ground dried crayfish (top up)", qty: "small bag", cost: 2.0, spansWeeks: true },
    { item: "Stock cubes", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Leafy greens (spinach / ugu / bitterleaf)", qty: "2 bunches", cost: 3.0 },
    { item: "Garri (for eba)", qty: "2 lb", cost: 2.0, spansWeeks: true },
    { item: "Fufu flour (cassava/plantain)", qty: "2 lb", cost: 2.5 },
    { item: "Iru / ogiri (fermented seasoning)", qty: "small", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 20,
};

export const waWeek4Soup: WeekPlan = {
  slug: "wa-week-4-soup",
  number: 4,
  cuisine: "west-african",
  theme: "Groundnut & Pepper Soup",
  title: "Week 4 — Groundnut & Pepper Soup",
  description:
    "The brothy, restorative week. Groundnut soup goes thick and nutty with peanut paste; pepper soup is a clear, fiery, herb-spiced broth that doubles as medicine; Ghana's light soup is the bright tomato-pepper consommé. Soups to drink as much as to scoop.",
  context:
    `Some West African soups are thick to scoop, and some are brothy to drink — this week is the brothy, restorative side. Groundnut soup turns ground peanuts into a rich, nutty stew, protein and fat from one cheap pantry staple. Pepper soup is the opposite: a clear, fiery broth built on a blend of aromatic spices (uziza, calabash nutmeg, scent leaf), the bowl you make when someone is cold or unwell. Ghana's light soup is a bright tomato-and-pepper consommé that lets a little fish or meat flavor a whole pot. The pepper base, palm oil, and groundnut are the constant foundation; the brothy soups are the theme.`,
  dishes: [
    "Groundnut soup (peanut stew, with rice or fufu)",
    "Pepper soup (clear, fiery, spiced broth)",
    "Light soup (Ghana's bright consommé)",
    "Rice balls / fufu to scoop",
  ],
  proteinNote:
    "Groundnut paste brings nutty protein and fat; pepper soup and light soup lean on a little dried or fresh fish to season the broth and clear the floor.",
  bonus: false,
  preciousThread: "A few pieces of fresh fish (or goat) to build the pepper-soup broth.",
  engine: [
    "obe-ata — the pepper base under the soups",
    "groundnut paste — the week's engine, the nutty thickener",
    "red palm oil + pepper-soup spice blend — the constant fat and the aromatic backbone",
    "rice + fufu — the constant swallows on the side",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "groundnut-soup with rice balls (omotuo) — the headline", estCalories: 730, estProtein: 26 },
    { day: "Mon", dinner: "pepper-soup, clear and fiery, with a chunk of yam", estCalories: 640, estProtein: 24 },
    { day: "Tue", dinner: "light-soup with fish, over fufu", estCalories: 680, estProtein: 25 },
    { day: "Wed", dinner: "groundnut-soup again, deepened, with rice", estCalories: 720, estProtein: 25 },
    { day: "Thu", dinner: "pepper-soup with assorted fish and a side of eba", estCalories: 690, estProtein: 27 },
    { day: "Fri", dinner: "light-soup with goat or fish, over fufu", estCalories: 700, estProtein: 26 },
    { day: "Sat", dinner: "a groundnut-and-light-soup combo from leftovers, with rice — nothing wasted", estCalories: 710, estProtein: 24 },
  ],
  shopping: [
    { item: "Groundnut paste (natural peanut butter)", qty: "2 lb", cost: 4.0, note: "the bank — the nutty engine" },
    { item: "Fresh fish (tilapia / mackerel)", qty: "~2 lb", cost: 5.0, note: "the precious thread — builds the broths" },
    { item: "Plum tomatoes + red peppers + scotch bonnet (obe ata)", qty: "~2 lb", cost: 3.0 },
    { item: "Onions + garlic + ginger", qty: "~2 lb / heads", cost: 3.0 },
    { item: "Pepper-soup spice blend (uziza, calabash nutmeg, scent leaf)", qty: "small", cost: 2.5, spansWeeks: true },
    { item: "Red palm oil (top up)", qty: "1/2 bottle", cost: 2.0, spansWeeks: true },
    { item: "Ground dried crayfish (top up)", qty: "small bag", cost: 2.0, spansWeeks: true },
    { item: "Stock cubes", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Yam (for pepper soup + omotuo)", qty: "~3 lb", cost: 3.0 },
    { item: "Rice", qty: "2 lb", cost: 1.8 },
    { item: "Fufu flour", qty: "2 lb", cost: 2.5 },
    { item: "Garri (top up)", qty: "1 lb", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 19,
};

export const waWeek5Stew: WeekPlan = {
  slug: "wa-week-5-stew",
  number: 5,
  cuisine: "west-african",
  theme: "Stew",
  title: "Week 5 — Stew",
  description:
    "The all-purpose red stew week — the obe ata fried into its three great forms. The deep Nigerian buka stew over rice, efo riro thick with greens, and the smoky green ayamase from fried unripe peppers. The sauce that goes with everything.",
  context:
    `If jollof is rice cooked in the pepper base, stew is the pepper base itself, fried long and patient into a deep, glossy red obe ata that dresses anything — rice, yam, beans, boiled plantain. This week cooks it three ways: the classic Nigerian buka stew, the bobbing-with-greens efo riro (with iru and crayfish), and ayamase, the smoky green "designer stew" of fried unripe peppers and bleached palm oil. The discipline is frying the blended base down completely — past raw, until the oil floats clear — which is what separates a real stew from a watery sauce. The pepper base, palm oil, and rice are the constant foundation; the stew styles are the theme.`,
  dishes: [
    "Nigerian (buka) stew over rice",
    "Efo riro (greens stew with iru and crayfish)",
    "Ayamase / ofada stew (smoky green pepper stew)",
    "Boiled rice / yam to carry it",
  ],
  proteinNote:
    "Efo riro's greens, beans on the side, and a little dried fish or assorted meat carry the protein; the stews themselves season the cheap staples beneath them.",
  bonus: false,
  preciousThread: "A little assorted meat or pomo (cow skin) to stud the ayamase.",
  engine: [
    "obe-ata — fried long and deep, the engine of every stew this week",
    "red palm oil (and bleached palm oil for ayamase) — the constant fat",
    "rice + boiled yam — the constant staples the stew dresses",
    "iru / crayfish — the constant cheap seasoning",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "nigerian-stew over rice, with fried plantain — the headline pot", estCalories: 720, estProtein: 22 },
    { day: "Mon", dinner: "efo-riro thick with greens, over rice", estCalories: 700, estProtein: 24 },
    { day: "Tue", dinner: "ayamase (green stew) over rice, with a boiled egg", estCalories: 710, estProtein: 23 },
    { day: "Wed", dinner: "nigerian-stew again, deepened, over boiled yam", estCalories: 690, estProtein: 20 },
    { day: "Thu", dinner: "efo-riro with beans on the side", estCalories: 720, estProtein: 27 },
    { day: "Fri", dinner: "ayamase over ofada rice, with assorted meat", estCalories: 730, estProtein: 26 },
    { day: "Sat", dinner: "a mixed stew over rice from the week's pots — nothing wasted", estCalories: 700, estProtein: 23 },
  ],
  shopping: [
    { item: "Plum tomatoes + red bell peppers (the stew base)", qty: "~4 lb", cost: 5.0, note: "the bank — the stew is mostly this" },
    { item: "Scotch bonnets / rodo", qty: "a handful", cost: 1.5 },
    { item: "Green bell + unripe peppers (for ayamase)", qty: "~1.5 lb", cost: 2.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5 },
    { item: "Leafy greens (spinach / efo shoko)", qty: "2 bunches", cost: 3.0 },
    { item: "Red palm oil (top up)", qty: "1/2 bottle", cost: 2.5, spansWeeks: true, note: "bleached for ayamase" },
    { item: "Assorted meat / pomo / dried fish", qty: "a little", cost: 4.0, note: "the precious thread — studs the stew" },
    { item: "Iru (locust bean) + crayfish (top up)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Stock cubes", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Rice (incl. ofada)", qty: "3 lb", cost: 3.0 },
    { item: "Yam", qty: "~2 lb", cost: 2.0 },
    { item: "Plantains + eggs", qty: "4 / 6", cost: 3.5 },
    { item: "Black-eyed peas (beans on the side)", qty: "1 lb", cost: 1.3 },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const waWeek6Plantain: WeekPlan = {
  slug: "wa-week-6-plantain",
  number: 6,
  cuisine: "west-african",
  theme: "Plantain & Yam",
  title: "Week 6 — Plantain & Yam",
  description:
    "The starchy-sweet week, off the rice. Plantain fried sweet as dodo or spiced into Ghanaian kelewele; yam mashed into peppery asaro porridge or boiled in chunks to scoop a sauce. The cheap roots and fruit that feed the table when the rice runs low.",
  context:
    `Before rice was everywhere, the yam was king — and the plantain its sweet companion. This week eats off the staple grain and onto the roots: ripe plantain fried into soft, caramelized dodo or cubed and spiced with ginger and pepper into Ghana's kelewele; yam pounded into peppery asaro (yam porridge cooked down in palm oil and pepper) or simply boiled in chunks to scoop a garden-egg or tomato sauce. These are the cheapest, most filling dinners of the arc, and the most forgiving — a bruised plantain or an odd-shaped yam costs little and feeds well. The pepper base, palm oil, and a swallow stay the constant foundation; plantain and yam are the week's theme.`,
  dishes: [
    "Dodo (fried sweet plantain) with stew",
    "Kelewele (spiced fried plantain cubes)",
    "Asaro (yam porridge in palm-oil pepper)",
    "Boiled yam with garden-egg / tomato sauce",
  ],
  proteinNote:
    "The roots are starchy, so protein rides alongside — beans, a fried egg, or a little fish with the dodo and yam keep the floor cleared.",
  bonus: false,
  preciousThread: "A handful of garden eggs (African eggplant) for the boiled-yam sauce.",
  engine: [
    "obe-ata — the pepper base for asaro and the yam sauces",
    "red palm oil — the constant fat, cooked into the asaro",
    "yam + plantain — the week's roots, batch-prepped Sunday",
    "garri / eba on the side — the constant swallow",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "asaro (yam porridge) in palm-oil pepper — the headline pot", estCalories: 700, estProtein: 16 },
    { day: "Mon", dinner: "dodo (fried plantain) with red-red beans", estCalories: 710, estProtein: 24 },
    { day: "Tue", dinner: "boiled-yam-and-sauce with garden-egg sauce and a fried egg", estCalories: 680, estProtein: 18 },
    { day: "Wed", dinner: "kelewele with a bowl of groundnuts and pepper sauce", estCalories: 690, estProtein: 19 },
    { day: "Thu", dinner: "asaro again, deepened, with a piece of fish", estCalories: 720, estProtein: 23 },
    { day: "Fri", dinner: "boiled-yam-and-sauce with stewed beans", estCalories: 700, estProtein: 25 },
    { day: "Sat", dinner: "dodo, kelewele, and yam from the week's roots — nothing wasted", estCalories: 700, estProtein: 17 },
  ],
  shopping: [
    { item: "Yam (puna / white)", qty: "~6 lb", cost: 6.0, note: "the bank — the week's root" },
    { item: "Plantains (ripe + half-ripe)", qty: "10", cost: 5.0, note: "for dodo and kelewele" },
    { item: "Garden eggs (African eggplant)", qty: "~1 lb", cost: 2.5, note: "the precious thread — the yam sauce" },
    { item: "Plum tomatoes + red peppers + scotch bonnet (obe ata)", qty: "~2 lb", cost: 3.0 },
    { item: "Onions + ginger", qty: "~2 lb / hand", cost: 2.5 },
    { item: "Red palm oil (top up)", qty: "1/2 bottle", cost: 2.0, spansWeeks: true },
    { item: "Groundnut oil (for frying)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Black-eyed peas (for red-red)", qty: "1.5 lb", cost: 2.0 },
    { item: "Dried / fresh fish", qty: "a piece", cost: 3.0 },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Crayfish + stock cubes (top up)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Garri (top up)", qty: "1 lb", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const waWeek7Greens: WeekPlan = {
  slug: "wa-week-7-greens",
  number: 7,
  cuisine: "west-african",
  theme: "Greens & Swallow",
  title: "Week 7 — Greens & Swallow",
  description:
    "The deep-soup finale — the leaf and palm-fruit soups of the south, eaten with a fist of swallow. The two-color gbegiri and ewedu of Yoruba land, the Igbo bitterleaf soup, and the Delta's rich banga. The week the whole arc gathers around the soup pot.",
  context:
    `The arc closes with the great regional soups — the ones eaten communally, from one pot, with a fist of swallow. Yoruba gbegiri (a smooth brown-bean gravy) and ewedu (a green jute-leaf draw soup) are poured side by side with a spoon of pepper stew; Igbo onugbu (bitterleaf) is washed past bitter and thickened with cocoyam; the Niger-Delta banga presses the whole palm fruit into a tawny, fragrant concentrate. A little dried fish, crayfish, and iru season every pot intensely for almost nothing. The communal soup pot and the shared swallow are the foundation made literal — everyone's hand in the same bowl, and nothing of the harvest wasted. Rice, the swallow, palm oil, and the pepper base stay the constant base; the leaf-and-fruit soups are the theme.`,
  dishes: [
    "Gbegiri & ewedu with eba (the two-color soup)",
    "Bitterleaf soup / ofe onugbu",
    "Banga soup (palm-fruit concentrate)",
    "Eba, fufu, and pounded yam to scoop",
  ],
  proteinNote:
    "Gbegiri's brown beans bring the protein; bitterleaf and banga lean on dried and smoked fish and crayfish to carry it — a little seafood seasons the whole communal pot.",
  bonus: false,
  preciousThread: "A length of stockfish and a tin of palm-fruit concentrate for the banga.",
  engine: [
    "obe-ata — the pepper base spooned through the soups",
    "red palm oil — the constant fat under gbegiri, onugbu, and banga",
    "dried fish + crayfish + iru — the constant cheap, intense seasoning",
    "garri (eba) + fufu + pounded yam — the constant swallows",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "gbegiri-and-ewedu with eba and a little stew — the two-color headline", estCalories: 700, estProtein: 24 },
    { day: "Mon", dinner: "bitterleaf-soup (ofe onugbu) with pounded yam", estCalories: 690, estProtein: 25 },
    { day: "Tue", dinner: "banga-soup with starch or eba", estCalories: 720, estProtein: 26 },
    { day: "Wed", dinner: "gbegiri-and-ewedu again, with fufu", estCalories: 700, estProtein: 23 },
    { day: "Thu", dinner: "bitterleaf-soup deepened, with eba", estCalories: 700, estProtein: 25 },
    { day: "Fri", dinner: "banga-soup with scent leaf, over rice", estCalories: 720, estProtein: 26 },
    { day: "Sat", dinner: "a communal soup spread — gbegiri, ewedu, onugbu, banga on the table, eaten from one pot, nothing wasted", estCalories: 730, estProtein: 27 },
  ],
  shopping: [
    { item: "Brown beans / black-eyed peas (for gbegiri)", qty: "2 lb", cost: 2.6, note: "the bank — the bean gravy" },
    { item: "Dried jute leaves (ewedu)", qty: "2 bags", cost: 3.0 },
    { item: "Dried bitterleaf (onugbu)", qty: "1 bag", cost: 3.0 },
    { item: "Palm-fruit concentrate (banga)", qty: "1-2 tins", cost: 4.0, note: "the precious thread — the Delta soup" },
    { item: "Stockfish / dried smoked fish", qty: "a piece", cost: 4.0, note: "threads every soup" },
    { item: "Cocoyam (to thicken onugbu)", qty: "~1 lb", cost: 2.0 },
    { item: "Red palm oil (top up)", qty: "1/2 bottle", cost: 2.5, spansWeeks: true },
    { item: "Crayfish + iru + ogiri (top up)", qty: "small", cost: 2.5, spansWeeks: true },
    { item: "Scotch bonnets + onions", qty: "a handful / 2 lb", cost: 2.5 },
    { item: "Banga spice mix / scent leaf", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Garri (for eba, top up)", qty: "2 lb", cost: 2.0, spansWeeks: true },
    { item: "Fufu flour + pounded-yam flour", qty: "2 lb each", cost: 5.0 },
    { item: "Stock cubes", qty: "", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 21,
};

export const westAfricanWeeks: WeekPlan[] = [
  waWeek1Jollof,
  waWeek2Beans,
  waWeek3Egusi,
  waWeek4Soup,
  waWeek5Stew,
  waWeek6Plantain,
  waWeek7Greens,
];
