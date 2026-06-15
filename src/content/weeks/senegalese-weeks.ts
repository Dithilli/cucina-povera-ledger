import type { WeekPlan } from "../types";

// Challenge — Senegal (Wolof & Lebou home cooking): the shared bowl on the
// Atlantic coast. The full seven-week arc, each week built out into an
// executable WeekPlan (engine + 7 days + costed shopping list). cuisine is
// "senegalese"; the engine is cuisine-agnostic, so these slot into the shared
// content arrays, tagged by cuisine. These are the curated, pregenerated
// defaults — the AI menu generator lets users compose variations on the same
// recipe pool.
//
// RULE #6 (constant foundation): the Senegalese foundation — broken rice
// (riz brisé), the onion-tomato nokoss seasoning base, fish/maggi stock,
// nététou (fermented locust bean), and the kaani chili (with millet/fonio as
// the alt grain) — is NEVER itself a theme. It lives in every week's `engine`
// as the constant beneath seven distinct, real dinner categories.

export const snWeek1Ceebu: WeekPlan = {
  slug: "sn-week-1-ceebu",
  number: 1,
  cuisine: "senegalese",
  theme: "Ceebu Jën",
  title: "Week 1 — Ceebu Jën",
  description:
    "Begin at the center of everything: ceebu jën, the rice-and-fish one-pot that is Senegal's national dish and its idea of a perfect table. A scarlet thiéboudienne with stuffed fish and soft vegetables, its gentler white cousin, and the meat version — one pot, one bowl, every spoon reaching in.",
  context:
    `Ceebu jën — literally "rice and fish" in Wolof — is the dish Saint-Louis gave the country and the one a UNESCO listing later gave the world. Fish is stuffed with a rof of parsley, garlic and chili, browned, then simmered into a tomato base loud with nététou; the broth poaches cassava, carrot, cabbage and bitter jakhatu before the broken rice drinks every drop of it red. The prize is the xooñ, the scorched crust at the bottom of the pot, scraped up and shared. The white version, ceebu jën bu weex, skips the tomato for a paler, tamarind-bright broth; riz au gras and ceebu yapp swap the fish for a little meat. Broken rice, the nokoss base, fish and stock are the constant foundation; this week simply turns them four ways.`,
  dishes: [
    "Ceebu jën (thiéboudienne)",
    "Ceebu jën bu weex (the white version)",
    "Ceebu yapp (the meat one-pot)",
    "Riz au gras",
  ],
  proteinNote:
    "Fresh fish (thiof or tilapia) is the headline; dried fish and a stock cube thread protein and depth through the rice, and a little meat carries the yapp version.",
  bonus: false,
  preciousThread: "A whole piece of thiof (or a meaty white fillet) to stuff with rof and brown for the headline pot.",
  engine: [
    "Broken rice (riz brisé) — a big pot of it, the plate under every dinner (the constant base)",
    "Nokoss — the blended onion, garlic, parsley, chili & nététou seasoning the week runs on",
    "Fish & stock — fresh fish browned for the pot, dried fish and maggi for the umami spine",
    "Kaani — the scotch-bonnet table sauce; millet (thiéré) kept as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ceebu jën — stuffed fish, soft vegetables and red rice from one pot, xooñ scraped over", estCalories: 660, estProtein: 28 },
    { day: "Mon", dinner: "ceebu jën bu weex — the white version, tamarind-bright broth over broken rice", estCalories: 560, estProtein: 22 },
    { day: "Tue", dinner: "leftover ceebu jën crisped in the pan, with extra kaani", estCalories: 580, estProtein: 21 },
    { day: "Wed", dinner: "ceebu yapp — the meat one-pot, rice deep with onion and nététou", estCalories: 600, estProtein: 24 },
    { day: "Thu", dinner: "riz au gras with the day's vegetables and a spoon of dried-fish stock", estCalories: 580, estProtein: 20 },
    { day: "Fri", dinner: "ceebu jën again, the second pot, fish poached gently in the red broth", estCalories: 640, estProtein: 26 },
    { day: "Sat", dinner: "zero-waste: rice, fish flakes and braised vegetables fried together into one last bowl", estCalories: 520, estProtein: 19 },
  ],
  shopping: [
    { item: "Broken rice (riz brisé)", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Fish (thiof/tilapia)", qty: "~2 lb", cost: 5.0, note: "the precious thread — browned for the pot" },
    { item: "Dried fish (yett/guedj)", qty: "small", cost: 2.5, spansWeeks: true, note: "cheap, intense depth" },
    { item: "Tomato paste + plum tomatoes", qty: "~2 lb", cost: 2.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Garlic + parsley (for rof/nokoss)", qty: "bunch + head", cost: 1.5 },
    { item: "Cassava, carrot, cabbage", qty: "~3 lb", cost: 3.5 },
    { item: "Jakhatu (bitter eggplant) + okra", qty: "small", cost: 1.5 },
    { item: "Nététou (fermented locust bean)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Stock cubes (Maggi)", qty: "1 box", cost: 1.5, spansWeeks: true },
    { item: "Scotch bonnets (for kaani)", qty: "a handful", cost: 1.0, spansWeeks: true },
    { item: "Tamarind", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Millet (thiéré)", qty: "1 lb", cost: 1.5, spansWeeks: true, note: "the alt grain" },
    { item: "Oil, salt, bay, black pepper", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const snWeek2Yassa: WeekPlan = {
  slug: "sn-week-2-yassa",
  number: 2,
  cuisine: "senegalese",
  theme: "Yassa",
  title: "Week 2 — Yassa",
  description:
    "A mountain of onions cooked slow and sweet, sharpened with lemon and mustard — yassa is Casamance's gift and the country's favorite weeknight braise. Over chicken, over fish, rolled into fish balls, it turns the cheapest ingredient in the market into the star.",
  context:
    `Yassa is the proof that onions, of all things, can be the luxury. Pounds of them are sliced and softened low and long until they collapse into a sweet, golden tangle, then cut through with lemon juice, vinegar and a fat spoon of mustard — the bright, acidic counterpoint that defines the dish. Yassa poulet marinates chicken in that same onion-lemon mix before grilling and folding it back in; yassa poisson does it with fish; boulettes de poisson rolls white fish with rof into little balls and simmers them in the sauce so nothing of the fish is lost. A stock cube and a whisper of nététou ground the sweetness. Broken rice underneath, the nokoss aromatics, fish and stock — the constant foundation — stay put; the onion braise is the changing theme.`,
  dishes: [
    "Yassa poulet (onion-lemon-mustard chicken)",
    "Yassa poisson (the fish version)",
    "Boulettes de poisson (fish balls in yassa sauce)",
    "Yassa onions over broken rice",
  ],
  proteinNote:
    "A small bird stretched across several nights, fish fillets and the bound fish balls carry the protein; the onion sauce makes a little go a long way.",
  bonus: false,
  preciousThread: "A whole chicken (or a few thighs) to marinate and grill for the headline yassa.",
  engine: [
    "Broken rice (riz brisé) — the pot of plain white rice the yassa is spooned over (the constant base)",
    "Nokoss — onion, garlic and chili pounded for marinades and the fish-ball rof",
    "Fish & stock — fish for the boulettes, dried fish and maggi backing the sauce",
    "Kaani — the scotch-bonnet sauce on the side; millet kept as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "yassa poulet — grilled chicken folded into the slow onion-lemon-mustard sauce, over broken rice", estCalories: 640, estProtein: 27 },
    { day: "Mon", dinner: "yassa poisson — grilled fish in the same bright onion braise", estCalories: 580, estProtein: 25 },
    { day: "Tue", dinner: "boulettes de poisson — fish balls simmered in yassa sauce, over rice", estCalories: 600, estProtein: 24 },
    { day: "Wed", dinner: "leftover yassa onions and chicken, warmed with extra lemon, over rice", estCalories: 560, estProtein: 22 },
    { day: "Thu", dinner: "yassa onions over rice with a fried egg and kaani", estCalories: 540, estProtein: 19 },
    { day: "Fri", dinner: "the second yassa poisson, sauce reduced sweet and dark", estCalories: 580, estProtein: 23 },
    { day: "Sat", dinner: "zero-waste: leftover onions, fish scraps and rice fried into a yassa-fried-rice bowl", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "Broken rice (riz brisé)", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Onions", qty: "~6 lb", cost: 4.5, note: "the star — yassa is mostly onion" },
    { item: "Chicken (whole or thighs)", qty: "~2 lb", cost: 4.5, note: "the precious thread" },
    { item: "Fish for poisson + boulettes", qty: "~1.5 lb", cost: 4.0 },
    { item: "Lemons + lime", qty: "~6", cost: 2.0 },
    { item: "Mustard", qty: "1 jar", cost: 2.0, spansWeeks: true },
    { item: "Vinegar", qty: "small bottle", cost: 1.0, spansWeeks: true },
    { item: "Garlic + parsley", qty: "head + bunch", cost: 1.5 },
    { item: "Stock cubes (Maggi)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Nététou", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Scotch bonnets (for kaani)", qty: "a handful", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Oil, salt, bay, black pepper", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 17,
};

export const snWeek3Mafe: WeekPlan = {
  slug: "sn-week-3-mafe",
  number: 3,
  cuisine: "senegalese",
  theme: "Mafé & Domoda",
  title: "Week 3 — Mafé & Domoda",
  description:
    "The peanut week — a jar of groundnut paste loosened into a thick, russet stew that is fat and protein from one cheap pantry staple. Mafé is rich and round; domoda turns tart with tomato and lime; mbahal cooks the same flavors straight into the rice.",
  context:
    `Mafé is what happens when West Africa's groundnut meets the Senegalese pot: a spoonful or two of peanut paste thinned with stock and tomato into a stew so thick and nutty it coats the back of a spoon, ladled glossy over broken rice. A small amount of meat or fish flavors the whole pot; the peanut does the rest, carrying both fat and protein for pennies. Domoda is its sharper Gambian-leaning cousin, the same base brightened with tomato and a squeeze of lime; mbahal cooks the peanut sauce straight into the rice with dried fish and nététou so the grain itself turns savory. Sweet potato, cassava and carrot go soft in the gravy. Broken rice, the nokoss aromatics, fish and stock stay the constant beneath the peanut stew.`,
  dishes: [
    "Mafé (groundnut stew over rice)",
    "Domoda (the tart, tomato-bright peanut stew)",
    "Mbahal (peanut-and-dried-fish rice)",
    "Mafé with sweet potato and cassava",
  ],
  proteinNote:
    "The groundnut paste is the protein engine, stretched with a little meat or fish; one jar carries fat and protein across the whole week.",
  bonus: false,
  preciousThread: "A little stewing beef or a piece of fish to flavor the peanut pot — a garnish, not the meal.",
  engine: [
    "Broken rice (riz brisé) — the bed the peanut stew is ladled over (the constant base)",
    "Nokoss — onion, garlic and tomato fried down as the body of the gravy",
    "Fish & stock — dried fish and maggi seasoning the peanut pot; groundnut paste the week's spine",
    "Kaani — the scotch-bonnet sauce alongside; millet kept as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "mafé — thick groundnut stew with a little meat and soft cassava, over broken rice", estCalories: 660, estProtein: 26 },
    { day: "Mon", dinner: "domoda — the tomato-bright peanut stew with lime, over rice", estCalories: 600, estProtein: 22 },
    { day: "Tue", dinner: "mbahal — peanut-and-dried-fish rice cooked in one pot", estCalories: 620, estProtein: 24 },
    { day: "Wed", dinner: "leftover mafé loosened with stock, sweet potato added, over rice", estCalories: 580, estProtein: 21 },
    { day: "Thu", dinner: "domoda again, sharpened with extra tomato and a fried egg", estCalories: 580, estProtein: 23 },
    { day: "Fri", dinner: "mafé with the last of the meat, gravy reduced dark and glossy", estCalories: 640, estProtein: 25 },
    { day: "Sat", dinner: "zero-waste: peanut-gravy ends and rice fried into a thick mafé-rice bowl", estCalories: 540, estProtein: 19 },
  ],
  shopping: [
    { item: "Broken rice (riz brisé)", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Groundnut (peanut) paste", qty: "1 jar", cost: 3.0, note: "the precious thread — fat and protein in one" },
    { item: "Stewing beef or fish", qty: "~1.5 lb", cost: 4.0 },
    { item: "Tomato paste + plum tomatoes", qty: "~2 lb", cost: 2.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Sweet potato, cassava, carrot", qty: "~3 lb", cost: 3.5 },
    { item: "Dried fish (yett/guedj)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Limes", qty: "~4", cost: 1.0 },
    { item: "Nététou", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Stock cubes (Maggi)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Scotch bonnets (for kaani)", qty: "a handful", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Oil, salt, bay, black pepper", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const snWeek4Soupou: WeekPlan = {
  slug: "sn-week-4-soupou",
  number: 4,
  cuisine: "senegalese",
  theme: "Soupou & Sauces",
  title: "Week 4 — Soupou & Sauces",
  description:
    "The week of brothy sauces ladled over rice — slippery okra soupou kanja, soft black-eyed peas in palm oil, a clean tomato thiou, the white-broth caldou with lime. Cheap vegetables and a little fish become a pot that feeds the table for almost nothing.",
  context:
    `Where ceebu jën cooks the rice in the sauce, the soupou week keeps them apart: a deep, brothy stew in one pot, plain broken rice in another, the sauce spooned generously over. Soupou kanja is the famous one — okra cooked down with palm oil and dried fish into a thick, prized "draw" that carries the rice; soupou ñebbe softens black-eyed peas in a red sauce for cheap, filling protein. Thiou poisson is a clean tomato-and-fish stew, and caldou is the Casamance white broth, fish poached in water sharp with lime and chili. Dried fish, nététou and a stock cube do the seasoning a meat broth would. Broken rice, the nokoss base, fish and stock hold steady underneath the changing sauces.`,
  dishes: [
    "Soupou kanja (okra stew over rice)",
    "Soupou ñebbe (black-eyed peas in red sauce)",
    "Thiou poisson (tomato-fish stew)",
    "Caldou (white-broth fish with lime)",
  ],
  proteinNote:
    "Black-eyed peas carry the protein floor; dried and fresh fish thread depth through the okra and tomato pots for a fraction of a meat budget.",
  bonus: false,
  preciousThread: "A piece of fresh fish for the caldou and thiou, poached gently so its broth flavors the pot.",
  engine: [
    "Broken rice (riz brisé) — a plain pot of it, the sauces ladled over (the constant base)",
    "Nokoss — onion, garlic and tomato fried as the body of each sauce",
    "Fish & stock — fresh and dried fish, maggi backing the okra and bean pots",
    "Kaani — the scotch-bonnet sauce alongside; millet kept as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "soupou kanja — slippery okra stew with dried fish and palm oil, over broken rice", estCalories: 600, estProtein: 23 },
    { day: "Mon", dinner: "soupou ñebbe — black-eyed peas in red sauce, over rice", estCalories: 580, estProtein: 24 },
    { day: "Tue", dinner: "thiou poisson — clean tomato-and-fish stew over rice", estCalories: 580, estProtein: 25 },
    { day: "Wed", dinner: "caldou — fish poached in lime-sharp white broth, with rice", estCalories: 540, estProtein: 24 },
    { day: "Thu", dinner: "leftover soupou kanja reheated with extra okra, over rice", estCalories: 560, estProtein: 21 },
    { day: "Fri", dinner: "soupou ñebbe again, deepened with nététou, with kaani", estCalories: 580, estProtein: 23 },
    { day: "Sat", dinner: "zero-waste: the week's sauce ends pooled together over the last rice", estCalories: 520, estProtein: 20 },
  ],
  shopping: [
    { item: "Broken rice (riz brisé)", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Okra (fresh or frozen)", qty: "~1.5 lb", cost: 2.5 },
    { item: "Black-eyed peas (ñebbe)", qty: "1.5 lb", cost: 2.0 },
    { item: "Fresh fish (tilapia)", qty: "~1.5 lb", cost: 4.5, note: "the precious thread for caldou/thiou" },
    { item: "Dried fish (yett/guedj)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Tomato paste + plum tomatoes", qty: "~2 lb", cost: 2.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Palm oil", qty: "small bottle", cost: 2.5, spansWeeks: true, note: "for the okra pot" },
    { item: "Limes", qty: "~5", cost: 1.0 },
    { item: "Nététou", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Stock cubes (Maggi)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Scotch bonnets (for kaani)", qty: "a handful", cost: 1.0, spansWeeks: true },
    { item: "Oil, salt, bay, black pepper", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 17,
};

export const snWeek5Cereales: WeekPlan = {
  slug: "sn-week-5-cereales",
  number: 5,
  cuisine: "senegalese",
  theme: "Céréales",
  title: "Week 5 — Céréales",
  description:
    "The older grains step forward: millet steamed into couscous-like thiéré, fonio fluffed with vegetables, bassi-salté under a Wolof stew, and laax — millet porridge with curdled milk — for a soft, frugal supper. The grains change; the nokoss base does not.",
  context:
    `Long before broken rice arrived on the colonial trade routes, the Sahel ate millet and fonio — and they remain the deeper, drought-hardy foundation of the Wolof and Lebou table. This week the alt grain that sits quietly in every other engine takes the plate. Millet steamed fine becomes thiéré, the couscous-like base for bassi-salté — a rich Wolof meat-and-vegetable stew poured over the steamed grain. Fonio, the tiny ancient grain that cooks in minutes, is fluffed with onions and vegetables. Laax is supper at its gentlest: millet porridge spooned with soured milk and a little sugar or baobab. Even here the nokoss aromatics, dried fish, nététou and stock — the constant seasoning foundation — flavor the stews; only the grain beneath has shifted from rice to millet.`,
  dishes: [
    "Thiéré (steamed millet couscous)",
    "Bassi-salté (Wolof stew over millet)",
    "Fonio aux légumes (fonio with vegetables)",
    "Laax (millet porridge with soured milk)",
  ],
  proteinNote:
    "Bassi-salté's stewed meat and the dried fish in the stews carry the protein; the curdled milk over laax adds a little more for next to nothing.",
  bonus: false,
  preciousThread: "A little stewing meat for the bassi-salté pot, and a pot of soured milk (lait caillé) for the laax.",
  engine: [
    "Millet & fonio — the older grains take the plate this week (the foundation, foregrounded)",
    "Nokoss — onion, garlic and tomato fried as the body of the stews over the grain",
    "Fish & stock — dried fish and maggi seasoning the bassi-salté and vegetable pots",
    "Kaani — the scotch-bonnet sauce alongside; broken rice held back as the alt grain this week",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "bassi-salté — rich Wolof meat-and-vegetable stew poured over steamed millet thiéré", estCalories: 640, estProtein: 25 },
    { day: "Mon", dinner: "fonio aux légumes — fonio fluffed with onions, carrot and cabbage", estCalories: 560, estProtein: 18 },
    { day: "Tue", dinner: "leftover bassi-salté stew over fresh-steamed thiéré", estCalories: 600, estProtein: 23 },
    { day: "Wed", dinner: "thiéré with a dried-fish-and-vegetable sauce", estCalories: 560, estProtein: 21 },
    { day: "Thu", dinner: "fonio with the last vegetables and a fried egg", estCalories: 540, estProtein: 19 },
    { day: "Fri", dinner: "laax — millet porridge with soured milk, a frugal soft supper", estCalories: 520, estProtein: 17 },
    { day: "Sat", dinner: "zero-waste: leftover grains and stew ends pressed into pan-fried millet cakes", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "Millet (thiéré)", qty: "3 lb", cost: 3.0, note: "the week's base grain" },
    { item: "Fonio", qty: "1.5 lb", cost: 3.0, note: "the ancient quick-cooking grain" },
    { item: "Stewing meat (for bassi-salté)", qty: "~1.5 lb", cost: 4.0, note: "the precious thread" },
    { item: "Carrot, cabbage, cassava, sweet potato", qty: "~4 lb", cost: 4.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Tomato paste", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Soured milk (lait caillé)", qty: "1 tub", cost: 2.5, note: "for the laax" },
    { item: "Dried fish (yett/guedj)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Nététou", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Stock cubes (Maggi)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Scotch bonnets (for kaani)", qty: "a handful", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Broken rice (riz brisé)", qty: "2 lb", cost: 1.5, spansWeeks: true, note: "the alt grain, held back" },
    { item: "Oil, salt, sugar, baobab powder", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const snWeek6Nebbe: WeekPlan = {
  slug: "sn-week-6-nebbe",
  number: 6,
  cuisine: "senegalese",
  theme: "Ñebbe & Poisson",
  title: "Week 6 — Ñebbe & Poisson",
  description:
    "The everyday week — soft black-eyed peas the way a Dakar morning eats them, small whole fish fried crisp (firire), and dibi, the grilled meat of the roadside. Cheap beans and the day's catch, the simplest the table gets and the most often eaten.",
  context:
    `Not every night is a one-pot occasion; ñebbe — black-eyed peas — and small fish are the quiet, daily backbone of the Lebou coast and the Dakar neighborhood. Ñebbe is cooked soft and dressed simply with onion and palm oil, the cheapest generous protein on the market, eaten with bread or rice. Firire jën is the everyday fish: small whole fish or fillets dusted, fried crisp and served with an onion-and-mustard sauce and kaani. Dibi is the smell of the evening street — meat grilled hard over wood, dusted with pepper, wrapped in paper with raw onion. A stock cube and nététou season the bean pot; the day's small fish needs almost nothing. Broken rice, the nokoss base, fish and stock stay the constant beneath the simplest dinners of the arc.`,
  dishes: [
    "Ñebbe (black-eyed peas with onion and oil)",
    "Firire jën (crisp-fried small fish)",
    "Dibi (grilled, peppered meat with onions)",
    "Ñebbe and fried fish over rice",
  ],
  proteinNote:
    "Black-eyed peas and the day's small fried fish do most of the protein; dibi adds a little grilled meat when the budget allows.",
  bonus: false,
  preciousThread: "A small cut of meat for the dibi grill, and a few whole small fish for firire.",
  engine: [
    "Broken rice (riz brisé) — a pot for the beans and fish to sit beside (the constant base)",
    "Nokoss — onion and garlic for the bean pot and the onion-mustard fish sauce",
    "Fish & stock — small fish for firire, dried fish and maggi seasoning the ñebbe",
    "Kaani — the scotch-bonnet sauce on every plate; millet kept as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "ñebbe — black-eyed peas cooked soft with onion and palm oil, over broken rice", estCalories: 580, estProtein: 24 },
    { day: "Mon", dinner: "firire jën — small whole fish fried crisp, onion-mustard sauce, with rice", estCalories: 580, estProtein: 26 },
    { day: "Tue", dinner: "dibi — peppered grilled meat with raw onion and kaani, with rice", estCalories: 620, estProtein: 27 },
    { day: "Wed", dinner: "leftover ñebbe reheated with the firire fish flaked through, over rice", estCalories: 560, estProtein: 23 },
    { day: "Thu", dinner: "firire again, the last small fish, with a sharp onion sauce", estCalories: 560, estProtein: 25 },
    { day: "Fri", dinner: "ñebbe with a fried egg and extra kaani over rice", estCalories: 540, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: bean ends, fish flakes and rice fried into one last bowl", estCalories: 520, estProtein: 20 },
  ],
  shopping: [
    { item: "Broken rice (riz brisé)", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Black-eyed peas (ñebbe)", qty: "2 lb", cost: 2.5, note: "the cheap protein backbone" },
    { item: "Small whole fish (for firire)", qty: "~2 lb", cost: 4.0, note: "the day's catch" },
    { item: "Grilling meat (for dibi)", qty: "~1 lb", cost: 3.5, note: "the precious thread" },
    { item: "Onions", qty: "~4 lb", cost: 3.0, spansWeeks: true },
    { item: "Mustard", qty: "jar (on hand)", cost: 0.5, spansWeeks: true },
    { item: "Palm oil", qty: "small bottle", cost: 2.0, spansWeeks: true },
    { item: "Dried fish (yett/guedj)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Nététou", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Stock cubes (Maggi)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Scotch bonnets (for kaani)", qty: "a handful", cost: 1.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Flour for dusting, oil, salt, pepper", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 17,
};

export const snWeek7Fete: WeekPlan = {
  slug: "sn-week-7-fete",
  number: 7,
  cuisine: "senegalese",
  theme: "Fête & Rue",
  title: "Week 7 — Fête & Rue",
  description:
    "The closing week is a party — Dakar's street food and a grand celebration ceebu jën. Fataya and pastels fried golden, accara bean fritters from the morning corner, crisp nem, and a final feast pot of thiéboudienne to bring the arc full circle.",
  context:
    `The arc ends where the street and the celebration meet. Senegalese street food is its own frugal genius: fataya, little fried pastries of spiced fish or meat; pastels, the crisp fish-stuffed turnovers eaten with a fiery onion sauce; accara, the black-eyed-pea fritters sold from the morning corner with bread and kaani; and nem, the crisp spring rolls the Vietnamese diaspora left behind and Dakar made its own. The week closes with a grand fête ceebu jën — the same national one-pot that opened the arc, now cooked large and proud for a crowd, the whole table reaching into one bowl. Every fritter and pastry is built on the same constant base: broken rice, the nokoss seasoning, fish and stock, the kaani on the side — the foundation that carried all seven weeks, dressed up one last time for a party.`,
  dishes: [
    "Fataya (fried fish/meat pastries)",
    "Accara (black-eyed-pea fritters)",
    "Pastels (crisp fish turnovers)",
    "Nem (crisp spring rolls) + a grand fête ceebu jën",
  ],
  proteinNote:
    "Black-eyed peas in the accara, fish and a little meat in the fataya and pastels, and the feast ceebu jën's stuffed fish carry the protein through the party.",
  bonus: false,
  preciousThread: "A whole fish for the closing fête ceebu jën — the centerpiece of the celebration pot.",
  engine: [
    "Broken rice (riz brisé) — saved for the grand fête ceebu jën that closes the arc (the constant base)",
    "Nokoss — onion, garlic and parsley for the fritter and pastry fillings and the feast pot",
    "Fish & stock — fish for the pastels and fataya, dried fish and maggi for the celebration pot",
    "Kaani — the scotch-bonnet sauce every street bite needs; millet kept as the alt grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "fataya and pastels fried golden, with a fiery onion sauce and kaani", estCalories: 640, estProtein: 22 },
    { day: "Mon", dinner: "accara — black-eyed-pea fritters with bread and onion sauce", estCalories: 560, estProtein: 21 },
    { day: "Tue", dinner: "nem — crisp spring rolls with dipping sauce, with rice", estCalories: 580, estProtein: 23 },
    { day: "Wed", dinner: "leftover fataya and accara warmed, with extra kaani over rice", estCalories: 560, estProtein: 20 },
    { day: "Thu", dinner: "pastels again with the last fish filling, fried fresh", estCalories: 580, estProtein: 24 },
    { day: "Fri", dinner: "the grand fête ceebu jën — stuffed fish, vegetables and red rice for a crowd", estCalories: 680, estProtein: 28 },
    { day: "Sat", dinner: "zero-waste: leftover feast rice, fish and fritter ends crisped into one final shared bowl", estCalories: 540, estProtein: 20 },
  ],
  shopping: [
    { item: "Broken rice (riz brisé)", qty: "5 lb", cost: 4.0, note: "saved for the closing feast pot" },
    { item: "Fish (thiof/tilapia)", qty: "~2.5 lb", cost: 6.0, note: "the precious thread — fillings and the fête pot" },
    { item: "Black-eyed peas (for accara)", qty: "1.5 lb", cost: 2.0 },
    { item: "Flour (for pastry/fataya/pastels)", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Spring-roll wrappers (for nem)", qty: "1 pack", cost: 2.0 },
    { item: "Onions", qty: "~4 lb", cost: 3.0, spansWeeks: true },
    { item: "Cassava, carrot, cabbage (for the fête pot)", qty: "~3 lb", cost: 3.5 },
    { item: "Garlic + parsley", qty: "head + bunch", cost: 1.5 },
    { item: "Dried fish (yett/guedj)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Nététou", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Stock cubes (Maggi)", qty: "few", cost: 1.0, spansWeeks: true },
    { item: "Scotch bonnets (for kaani)", qty: "a handful", cost: 1.0, spansWeeks: true },
    { item: "Oil for frying, salt, pepper", qty: "pantry", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const senegaleseWeeks: WeekPlan[] = [
  snWeek1Ceebu,
  snWeek2Yassa,
  snWeek3Mafe,
  snWeek4Soupou,
  snWeek5Cereales,
  snWeek6Nebbe,
  snWeek7Fete,
];
