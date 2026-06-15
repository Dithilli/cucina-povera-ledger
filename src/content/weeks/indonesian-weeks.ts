import type { WeekPlan } from "../types";

// Challenge — Indonesia & Java: the warung table.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "indonesian"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// composes variations on top of the same recipe pool.
//
// RULE #6: the FOUNDATION — steamed rice, tempe/tahu (the fermented-soy protein
// engine), sambal, and the bumbu spice paste — is the CONSTANT BASE present every
// week. It lives in each week's `engine`, never as a theme. Each theme is a real
// dinner category you actually eat.
//
// Dinner slugs reference recipes in src/content/recipes/* where they exist
// (tahu-bacem, tahu-goreng, tahu-gejrot, sambal-goreng-kentang, telur-balado,
// gado-gado, pecel, nasi-putih); other dinners are short free text.

export const idWeek1Tempe: WeekPlan = {
  slug: "id-week-1-tempe",
  number: 1,
  cuisine: "indonesian",
  theme: "Tempe",
  title: "Week 1 — Tempe",
  description:
    "Java's poor-people protein, and the best argument the cuisine makes. Whole soybeans bound by a living mould into firm white cakes — fried, simmered sweet in palm sugar, or stir-fried with chile — tempe is cheap, complete, and the dish the island eats most. Start here: it clears the protein floor with no meat at all.",
  context:
    `Tempe was born in Java as the protein of people who could not afford meat — whole soybeans cultured with a living mould into a firm, nutty cake, a thrifty Javanese invention now eaten across the archipelago. Fermentation is the trick that makes cheap soy a complete protein, and a few cents of beans becomes a slab that fries crisp or braises sweet. The everyday plate is steamed rice, a square of fried tempe, a green, and a smear of sambal — the food of the warung, the open-front home-kitchen stalls where most people actually eat. Tempe bacem simmers it in palm sugar and tamarind until caramel; tempe orek shreds it crisp with chile and kecap; tempe mendoan batters it barely-set and fries it lacy. Nothing is wasted: the day-old block becomes tomorrow's orek.`,
  dishes: [
    "tempe-bacem — simmered sweet in palm sugar, tamarind, then fried",
    "tempe-orek — shredded crisp with chile and kecap manis",
    "tempe-mendoan — barely-set lacy fritters, Banyumas style",
    "tempe goreng with sambal over rice",
  ],
  proteinNote:
    "Tempe carries about 19g protein per 100g; a fried square or two over rice clears the day's floor with no meat at all.",
  bonus: false,
  preciousThread: "A block of fresh tempe and a bottle of kecap manis (sweet soy).",
  engine: [
    "nasi-putih — steam a pot of rice; the constant base under every plate",
    "tempe and tahu — fry a batch of the fermented-soy protein engine to eat on all week",
    "sambal — pound a jar of chile-garlic-shallot sambal, the everyday heat",
    "bumbu — grind a base spice paste (shallot, garlic, candlenut, galangal) for every pot",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "tempe-bacem over rice with sambal — the headline",
      estCalories: 660,
      estProtein: 24,
    },
    {
      day: "Mon",
      dinner: "tempe-orek with rice and a green",
      estCalories: 640,
      estProtein: 22,
    },
    {
      day: "Tue",
      dinner: "tempe-mendoan fritters with rice and sambal kecap",
      estCalories: 690,
      estProtein: 21,
    },
    {
      day: "Wed",
      dinner: "tempe goreng with tumis-kangkung over rice",
      estCalories: 620,
      estProtein: 20,
    },
    {
      day: "Thu",
      dinner: "tempe-bacem again, the pot deepened, with rice",
      estCalories: 660,
      estProtein: 24,
    },
    {
      day: "Fri",
      dinner: "tempe-orek with telur (egg) over rice",
      estCalories: 700,
      estProtein: 26,
    },
    {
      day: "Sat",
      dinner: "zero-waste finale: orek-orek from the week's tempe and tahu offcuts, fried crisp with chile over rice",
      estCalories: 680,
      estProtein: 23,
    },
  ],
  shopping: [
    { item: "Tempe (fresh soybean cakes)", qty: "~5 blocks", cost: 6.0, note: "the precious thread — the week runs on this" },
    { item: "Tahu (firm tofu)", qty: "~1.5 lb", cost: 2.5 },
    { item: "White rice", qty: "5 lb", cost: 4.0, spansWeeks: true, note: "the constant base" },
    { item: "Kecap manis (sweet soy)", qty: "1 bottle", cost: 3.5, spansWeeks: true, note: "the precious thread" },
    { item: "Palm sugar (gula jawa)", qty: "1 block", cost: 2.0, spansWeeks: true },
    { item: "Tamarind (asam jawa)", qty: "small pack", cost: 1.5, spansWeeks: true },
    { item: "Shallots", qty: "~1 lb", cost: 2.5, note: "the base of every bumbu" },
    { item: "Garlic", qty: "3 heads", cost: 1.5, spansWeeks: true },
    { item: "Red chiles (cabai) + bird's-eye", qty: "a generous handful", cost: 2.0 },
    { item: "Candlenuts (or macadamia) + galangal", qty: "for bumbu", cost: 2.5, spansWeeks: true },
    { item: "Kangkung (water spinach) or spinach", qty: "1 bunch", cost: 1.5 },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Flour (for mendoan batter)", qty: "1 lb", cost: 1.0 },
    { item: "Coconut oil (for frying)", qty: "", cost: 3.5, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const idWeek2Tahu: WeekPlan = {
  slug: "id-week-2-tahu",
  number: 2,
  cuisine: "indonesian",
  theme: "Tahu",
  title: "Week 2 — Tahu",
  description:
    "Tempe's softer twin. Firm Javanese tofu fried golden and hollow, braised sweet in the same palm-sugar bath, or doused cold in a sharp palm-sugar-and-chile broth — cheap soy curd that drinks up whatever sauce the warung gives it.",
  context:
    `If tempe is fermented Java, tahu is its softer twin — firm soybean curd, just as cheap, just as much the everyday protein of people without meat money. Pressed firm and deep-fried it puffs golden and hollow, ready to soak up any sauce; that thirst is the whole point. Tahu bacem takes the same palm-sugar-and-tamarind braise as the tempe; tahu goreng is the plain fried square eaten with sambal and rice; tahu gejrot, the Cirebon street snack, drowns fried cubes in a sharp, sweet palm-sugar broth shot with raw chile and garlic. It is warung food at its purest — a few cents of curd, a smear of sambal, a mound of rice. The fried-too-many become tomorrow's gejrot, so nothing is thrown out.`,
  dishes: [
    "tahu-bacem — braised sweet in palm sugar and tamarind, then fried",
    "tahu-goreng — golden fried squares with sambal over rice",
    "tahu-gejrot — fried cubes in sharp sweet palm-sugar broth (Cirebon)",
    "tahu isi — stuffed with vegetable, battered and fried",
  ],
  proteinNote:
    "Firm tofu brings about 15g protein per 100g; a fried block over rice, paired with a square of tempe, clears the floor easily.",
  bonus: false,
  preciousThread: "Good firm tahu and palm sugar for the gejrot broth.",
  engine: [
    "nasi-putih — the pot of steamed rice under every plate",
    "tahu and tempe — fry a batch of the fermented-soy protein engine for the week",
    "sambal — the constant chile-garlic-shallot jar",
    "bumbu — the base spice paste, plus a sweet-sour palm-sugar broth for gejrot",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "tahu-bacem over rice with sambal — the headline",
      estCalories: 620,
      estProtein: 20,
    },
    {
      day: "Mon",
      dinner: "tahu-goreng with tumis kangkung over rice",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Tue",
      dinner: "tahu-gejrot — fried cubes in sweet-sharp broth, with rice",
      estCalories: 580,
      estProtein: 17,
    },
    {
      day: "Wed",
      dinner: "tahu-isi (stuffed, fried) with rice and sambal",
      estCalories: 660,
      estProtein: 19,
    },
    {
      day: "Thu",
      dinner: "tahu-bacem and tempe-orek side by side over rice",
      estCalories: 680,
      estProtein: 25,
    },
    {
      day: "Fri",
      dinner: "tahu-goreng with telur and a green over rice",
      estCalories: 690,
      estProtein: 24,
    },
    {
      day: "Sat",
      dinner: "zero-waste finale: tahu-gejrot from the week's fried offcuts, drowned in the last of the palm-sugar broth, over rice",
      estCalories: 600,
      estProtein: 18,
    },
  ],
  shopping: [
    { item: "Tahu (firm tofu)", qty: "~3 lb", cost: 5.0, note: "the bank — the whole week runs on this" },
    { item: "Tempe (for the crossover days)", qty: "~2 blocks", cost: 2.5 },
    { item: "White rice", qty: "3 lb", cost: 2.5, spansWeeks: true },
    { item: "Palm sugar (gula jawa)", qty: "1 block", cost: 2.0, spansWeeks: true, note: "the gejrot broth wants it" },
    { item: "Kecap manis (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Tamarind (asam jawa)", qty: "small pack", cost: 1.5, spansWeeks: true },
    { item: "Shallots", qty: "~1 lb", cost: 2.5 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Red + bird's-eye chiles", qty: "a generous handful", cost: 2.0 },
    { item: "Carrots + cabbage (for tahu isi)", qty: "", cost: 2.0 },
    { item: "Kangkung or spinach", qty: "1 bunch", cost: 1.5 },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Flour (for batter)", qty: "1 lb", cost: 1.0 },
    { item: "Coconut oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 15,
};

export const idWeek3Sayur: WeekPlan = {
  slug: "id-week-3-sayur",
  number: 3,
  cuisine: "indonesian",
  theme: "Sayur",
  title: "Week 3 — Sayur (vegetable stews)",
  description:
    "The brothy vegetable heart of the table. Mixed vegetables simmered in coconut milk, soured tamarind-and-melinjo soup, and quick garlicky stir-fried greens — the sayur is the everyday pot that makes a mound of rice and a square of tempe into a whole meal.",
  context:
    `Sayur — literally just \"vegetable\" — is the everyday brothy pot that turns rice and a square of tempe into a meal. Java's gardens and roadsides are full of cheap greens, gourds, and beans, and the warung pot stretches a few of them across many bowls with coconut milk or tamarind. Sayur lodeh simmers a mix of long beans, eggplant, and chayote in a gentle coconut-and-bumbu broth; sayur asem is its bright, sour opposite, soured with tamarind and studded with melinjo and corn; tumis kangkung is the fast, garlicky stir-fry of water spinach with chile and shrimp paste. The protein still comes from the constant base — tempe and tahu fried alongside — while the sayur brings the vegetables, the broth, and almost no cost. Whatever wilts in the basket goes into the next day's pot, so nothing is wasted.`,
  dishes: [
    "sayur-lodeh — mixed vegetables in gentle coconut broth",
    "sayur-asem — bright tamarind-soured vegetable soup",
    "tumis-kangkung — quick garlic-chile water spinach",
    "sayur bayam — clear spinach and corn soup",
  ],
  proteinNote:
    "The greens add little; the day leans on tempe and tahu fried alongside the sayur to clear the floor.",
  bonus: false,
  preciousThread: "A can of coconut milk and a knob of terasi (shrimp paste).",
  engine: [
    "nasi-putih — the pot of rice under every bowl of sayur",
    "tempe and tahu — fried squares of the protein engine to plate beside the vegetables",
    "sambal — the constant chile jar, terasi-spiked this week",
    "bumbu — the base spice paste for the lodeh and asem broths",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "sayur-lodeh with tempe-goreng over rice — the headline",
      estCalories: 620,
      estProtein: 19,
    },
    {
      day: "Mon",
      dinner: "sayur-asem with fried tahu and rice",
      estCalories: 580,
      estProtein: 17,
    },
    {
      day: "Tue",
      dinner: "tumis-kangkung with tempe-orek over rice",
      estCalories: 630,
      estProtein: 22,
    },
    {
      day: "Wed",
      dinner: "sayur-lodeh, the pot deepened, with tahu-bacem and rice",
      estCalories: 640,
      estProtein: 20,
    },
    {
      day: "Thu",
      dinner: "sayur-bayam (spinach + corn soup) with telur and tempe over rice",
      estCalories: 650,
      estProtein: 23,
    },
    {
      day: "Fri",
      dinner: "sayur-asem with tempe-goreng and sambal over rice",
      estCalories: 600,
      estProtein: 18,
    },
    {
      day: "Sat",
      dinner: "zero-waste finale: a clear-the-basket sayur of every wilting vegetable in coconut broth, with the last tempe and tahu over rice",
      estCalories: 620,
      estProtein: 19,
    },
  ],
  shopping: [
    { item: "Long beans + eggplant + chayote (for lodeh)", qty: "a mixed basket", cost: 4.0, note: "the vegetable week" },
    { item: "Tempe + tahu (the protein base)", qty: "3 blocks / 1 lb", cost: 4.5 },
    { item: "Coconut milk", qty: "2 cans", cost: 3.0, note: "the precious thread — the lodeh broth" },
    { item: "Kangkung (water spinach)", qty: "2 bunches", cost: 3.0 },
    { item: "Spinach + corn (for sayur bayam)", qty: "1 bunch / 2 ears", cost: 2.5 },
    { item: "White rice", qty: "3 lb", cost: 2.5, spansWeeks: true },
    { item: "Tamarind (asam jawa)", qty: "for the asem", cost: 1.0, spansWeeks: true },
    { item: "Terasi (shrimp paste)", qty: "small block", cost: 2.0, spansWeeks: true, note: "the precious thread" },
    { item: "Shallots + garlic", qty: "~1 lb / 2 heads", cost: 3.0 },
    { item: "Red + bird's-eye chiles", qty: "a handful", cost: 2.0 },
    { item: "Galangal + bay (salam) + lemongrass", qty: "for the broths", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 2.0 },
    { item: "Palm sugar + kecap manis (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Coconut oil", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 16,
};

export const idWeek4Sambal: WeekPlan = {
  slug: "id-week-4-sambal",
  number: 4,
  cuisine: "indonesian",
  theme: "Sambal & Balado",
  title: "Week 4 — Sambal & Balado",
  description:
    "The week the heat takes the plate. Where sambal is the everyday condiment, balado is the dish — a thick fried chile-shallot-tomato sauce smothering potato, egg, or dried anchovy. A few cents of chile turns the cheapest staple into the thing you crave.",
  context:
    `Sambal is the constant smear on every Indonesian plate, but balado is what happens when the chile becomes the dish itself — a thick, glossy sauce of fried red chile, shallot, garlic, and tomato that smothers whatever cheap thing it meets. This is Minang and Java cooking at its thriftiest: a few cents of chile and a single egg or a handful of dried anchovies becomes a plate you genuinely want. Sambal goreng kentang fries potato (and often liver or tempe) in the chile paste until candied and fiery; telur balado coats hard-boiled eggs; balado teri tosses tiny dried anchovies and peanuts in the same sauce until crunchy-sweet-hot. The sauce keeps for days and only deepens, so a big batch on Sunday carries the week — and a spoon of it revives any leftover.`,
  dishes: [
    "sambal-goreng-kentang — potato fried in fiery chile paste",
    "telur-balado — hard-boiled eggs in thick chile sauce",
    "balado-teri — dried anchovies and peanuts in chile, crunchy-hot",
    "tempe balado — fried tempe smothered in the same sauce",
  ],
  proteinNote:
    "Eggs, dried anchovies (teri), peanuts, and tempe in the balado carry the protein; the chile is the seasoning luxury.",
  bonus: false,
  preciousThread: "A bag of dried teri (anchovies) and a mound of fresh red chiles.",
  engine: [
    "nasi-putih — the rice the fiery balado rides on",
    "tempe and tahu — the protein engine, ready to take the chile sauce",
    "A big batch of balado base — fried red chile, shallot, garlic, tomato — the week's engine sauce",
    "sambal + bumbu — the constant jar and base paste, here scaled up into the balado",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "sambal-goreng-kentang with rice and a green — the headline",
      estCalories: 640,
      estProtein: 16,
    },
    {
      day: "Mon",
      dinner: "telur-balado over rice with tumis kangkung",
      estCalories: 660,
      estProtein: 22,
    },
    {
      day: "Tue",
      dinner: "balado-teri (anchovy + peanut) with rice and cucumber",
      estCalories: 620,
      estProtein: 24,
    },
    {
      day: "Wed",
      dinner: "tempe-balado — fried tempe in the chile sauce — over rice",
      estCalories: 670,
      estProtein: 25,
    },
    {
      day: "Thu",
      dinner: "telur-balado and sambal-goreng-kentang side by side over rice",
      estCalories: 690,
      estProtein: 23,
    },
    {
      day: "Fri",
      dinner: "tahu-balado with rice and sambal",
      estCalories: 630,
      estProtein: 20,
    },
    {
      day: "Sat",
      dinner: "zero-waste finale: every leftover potato, egg, tempe, and teri folded into the last of the balado sauce over rice",
      estCalories: 680,
      estProtein: 24,
    },
  ],
  shopping: [
    { item: "Red chiles (cabai merah)", qty: "~3/4 lb", cost: 4.0, note: "the precious thread — the balado is mostly this" },
    { item: "Dried anchovies (teri)", qty: "~1/2 lb", cost: 3.5, note: "the protein-and-crunch of balado teri" },
    { item: "Eggs", qty: "1.5 dozen", cost: 5.0, note: "for the telur balado" },
    { item: "Potatoes", qty: "~2 lb", cost: 1.5 },
    { item: "Peanuts (raw, for teri)", qty: "1/2 lb", cost: 1.5 },
    { item: "Tempe + tahu (the protein base)", qty: "2 blocks / 1 lb", cost: 3.5 },
    { item: "White rice", qty: "3 lb", cost: 2.5, spansWeeks: true },
    { item: "Tomatoes", qty: "~1 lb", cost: 1.5 },
    { item: "Shallots + garlic", qty: "~1 lb / 2 heads", cost: 3.0 },
    { item: "Kangkung + cucumber", qty: "1 bunch / 2", cost: 2.0 },
    { item: "Kecap manis + palm sugar (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Terasi (shrimp paste, top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Lime (jeruk nipis)", qty: "4", cost: 1.0 },
    { item: "Coconut oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 17,
};

export const idWeek5Pecel: WeekPlan = {
  slug: "id-week-5-pecel",
  number: 5,
  cuisine: "indonesian",
  theme: "Gado-gado & Pecel",
  title: "Week 5 — Gado-gado & Pecel",
  description:
    "The peanut-sauce salads. Blanched and raw vegetables, tempe, tofu, and egg drowned in a thick spiced peanut sauce — Indonesia's great trick for turning a pile of cheap vegetables and a handful of peanuts into a complete, crave-able plate.",
  context:
    `Gado-gado and pecel are the same brilliant idea: take a pile of cheap blanched vegetables, add tempe, tofu, and a boiled egg, and drown it all in a thick, spiced peanut sauce. A handful of ground peanuts, a little palm sugar, tamarind, garlic, and chile becomes a sauce rich enough to make a whole meal of the garden — the warung's way of feeding people protein and vegetables for almost nothing. Gado-gado (Jakarta) leans lush and saucy; pecel (East Java) keeps the sauce thicker and sharper, often pounded fresh from fried peanuts in a clay mortar; karedok (Sunda) uses the same dressing but on raw vegetables, crisp and green. The peanut sauce keeps and stretches, so one batch dresses the whole week — and whatever's left coats tomorrow's vegetables, so nothing is lost.`,
  dishes: [
    "gado-gado — blanched vegetables, tempe, tofu, egg in peanut sauce",
    "pecel — East Javanese sharp peanut sauce over greens",
    "karedok — Sundanese raw-vegetable version with the same dressing",
    "lotek — the soft-blanched cousin of karedok",
  ],
  proteinNote:
    "Peanuts in the sauce plus the tempe, tofu, and egg on the plate make these salads a complete-protein meal that clears the floor.",
  bonus: false,
  preciousThread: "A jar of good peanuts and a knob of kencur (sand ginger) for the dressing.",
  engine: [
    "nasi-putih — rice or lontong cakes alongside the peanut-sauce salads",
    "tempe and tahu — fried squares of the protein engine to top every plate",
    "A big batch of peanut sauce (bumbu kacang) — the week's engine dressing",
    "sambal + bumbu — the constant jar and base paste folded into the peanut sauce",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "gado-gado — the full plate with peanut sauce — the headline",
      estCalories: 700,
      estProtein: 26,
    },
    {
      day: "Mon",
      dinner: "pecel over blanched greens with tempe and rice",
      estCalories: 660,
      estProtein: 23,
    },
    {
      day: "Tue",
      dinner: "karedok — raw vegetables in peanut dressing — with fried tahu",
      estCalories: 640,
      estProtein: 22,
    },
    {
      day: "Wed",
      dinner: "lotek with tempe goreng and rice",
      estCalories: 670,
      estProtein: 24,
    },
    {
      day: "Thu",
      dinner: "gado-gado again, with extra egg and lontong",
      estCalories: 710,
      estProtein: 27,
    },
    {
      day: "Fri",
      dinner: "pecel with telur and tempe over rice",
      estCalories: 690,
      estProtein: 25,
    },
    {
      day: "Sat",
      dinner: "zero-waste finale: every blanched and raw vegetable left in the basket under the last of the peanut-sauce, with tempe and egg over rice",
      estCalories: 680,
      estProtein: 24,
    },
  ],
  shopping: [
    { item: "Peanuts (raw, for the sauce)", qty: "~1.5 lb", cost: 4.5, note: "the precious thread — the sauce is mostly this" },
    { item: "Tempe + tahu (the protein base)", qty: "3 blocks / 1.5 lb", cost: 5.0 },
    { item: "Eggs", qty: "1 dozen", cost: 4.0 },
    { item: "Mixed vegetables (bean sprouts, long beans, cabbage, carrot, cucumber)", qty: "a big basket", cost: 5.0, note: "the bulk of every plate" },
    { item: "White rice (+ for lontong)", qty: "3 lb", cost: 2.5, spansWeeks: true },
    { item: "Kencur (sand ginger)", qty: "small knob", cost: 1.5, spansWeeks: true, note: "the precious thread — pecel/karedok fragrance" },
    { item: "Palm sugar + tamarind (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Shallots + garlic", qty: "~3/4 lb / 2 heads", cost: 2.5 },
    { item: "Red + bird's-eye chiles", qty: "a handful", cost: 2.0 },
    { item: "Lime (jeruk nipis) + kaffir lime leaf", qty: "4 / a few", cost: 1.5 },
    { item: "Potatoes", qty: "~1 lb", cost: 1.0 },
    { item: "Kecap manis (top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Coconut oil", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 17,
};

export const idWeek6Nasi: WeekPlan = {
  slug: "id-week-6-nasi",
  number: 6,
  cuisine: "indonesian",
  theme: "Nasi",
  title: "Week 6 — Nasi (rice as the dish)",
  description:
    "The week rice steps to the center. The constant base becomes the headline — fried with kecap and chile, steamed fragrant in coconut, or sliced into cakes and bathed in coconut sayur. Day-old rice was never waste; it was tomorrow's nasi goreng.",
  context:
    `Rice is the constant base every other week, but in Java it is also, proudly, the dish. Nasi goreng was born from thrift — day-old rice fried hard with garlic, chile, and kecap manis, topped with a fried egg, the breakfast that empties the pot so nothing is wasted. Nasi uduk steams the rice in coconut milk with lemongrass and pandan into something fragrant enough to anchor a feast on a banana leaf. Lontong sayur slices compressed rice cakes into a coconut vegetable stew, a Lebaran morning standard. These are the dishes that prove rice is never just filler here — it carries kecap, coconut, chile, and a crackle of fried shallot, and a square of tempe or a fried egg sits right on top to clear the protein floor.`,
  dishes: [
    "nasi-goreng — day-old rice fried with kecap, chile, fried egg",
    "nasi-uduk — coconut-and-lemongrass steamed rice",
    "lontong-sayur — compressed rice cakes in coconut vegetable stew",
    "nasi kuning — turmeric coconut rice for a small feast",
  ],
  proteinNote:
    "The rice carries it; a fried egg, a square of tempe, or a scatter of teri on top clears the protein floor.",
  bonus: false,
  preciousThread: "Pandan leaf and lemongrass for the nasi uduk, and bawang goreng (fried shallots).",
  engine: [
    "nasi-putih — cook a big pot deliberately, so there is always day-old rice for nasi goreng",
    "tempe and tahu — fried squares of the protein engine to crown every rice plate",
    "sambal — the constant jar, with bawang goreng (fried shallots) for scattering",
    "bumbu — the base paste, plus a coconut broth for the lontong sayur",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "nasi-uduk with tempe, telur, and sambal — the headline",
      estCalories: 700,
      estProtein: 22,
    },
    {
      day: "Mon",
      dinner: "nasi-goreng with fried egg and tempe-orek",
      estCalories: 690,
      estProtein: 24,
    },
    {
      day: "Tue",
      dinner: "lontong-sayur — rice cakes in coconut vegetable stew — with telur",
      estCalories: 670,
      estProtein: 21,
    },
    {
      day: "Wed",
      dinner: "nasi-goreng again, the pot emptied, with extra tempe and teri",
      estCalories: 700,
      estProtein: 25,
    },
    {
      day: "Thu",
      dinner: "nasi kuning (turmeric coconut-rice) with tahu and balado",
      estCalories: 710,
      estProtein: 23,
    },
    {
      day: "Fri",
      dinner: "nasi-uduk with tempe-bacem and tumis kangkung",
      estCalories: 690,
      estProtein: 24,
    },
    {
      day: "Sat",
      dinner: "zero-waste finale: nasi-goreng from every grain of day-old rice in the pot, fried with the last tempe, egg, and sambal",
      estCalories: 700,
      estProtein: 25,
    },
  ],
  shopping: [
    { item: "White rice", qty: "6 lb", cost: 5.0, spansWeeks: true, note: "the headline this week — buy long, cook ahead for day-old" },
    { item: "Coconut milk (for uduk + lontong)", qty: "3 cans", cost: 4.5, note: "fragrant rice and the lontong broth" },
    { item: "Tempe + tahu (the protein base)", qty: "3 blocks / 1 lb", cost: 4.5 },
    { item: "Eggs", qty: "1 dozen", cost: 4.0, note: "a fried egg crowns every nasi goreng" },
    { item: "Pandan + lemongrass + bay (salam)", qty: "for the fragrant rice", cost: 2.0, spansWeeks: true, note: "the precious thread" },
    { item: "Shallots (for bawang goreng)", qty: "~1 lb", cost: 2.5, note: "fried shallots scattered on everything" },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Red + bird's-eye chiles", qty: "a handful", cost: 2.0 },
    { item: "Mixed vegetables (for lontong sayur)", qty: "a basket", cost: 3.0 },
    { item: "Dried anchovies (teri)", qty: "small bag", cost: 1.5 },
    { item: "Turmeric (for nasi kuning)", qty: "fresh knob", cost: 1.0, spansWeeks: true },
    { item: "Kecap manis (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Coconut oil", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const idWeek7Soto: WeekPlan = {
  slug: "id-week-7-soto",
  number: 7,
  cuisine: "indonesian",
  theme: "Soto & Ikan",
  title: "Week 7 — Soto & Ikan (the feast)",
  description:
    "The whole arc brought to a head. Fragrant turmeric chicken soup, fish steamed in banana leaf or fried whole with sambal, and a clear vegetable broth — because this is the feast week, a little chicken and fish join the constant tempe-tahu-rice base for the celebration plate.",
  context:
    `The closing feast, where the constant base is joined by the small luxuries a warung saves for a celebration. Soto ayam — a fragrant, golden turmeric-and-lemongrass chicken soup poured over rice, glass noodles, and bean sprouts — feeds a crowd from one bird, which is exactly the point: a little chicken, a big pot. Ikan brings the fish — pepes ikan steamed in a banana leaf with bumbu and basil, or ikan goreng fried whole and crisp to dredge through sambal — the cheap small fish of an island nation. Sayur sop, a clear vegetable-and-chicken broth, rounds out the table. Even here the engine holds: rice, tempe, tahu, and sambal anchor every plate, with the bird and the fish ladled and laid beside them. And the finale empties everything — the last of the soto broth, the picked chicken, the fried fish, and every vegetable into one final clear-the-kitchen pot over rice.`,
  dishes: [
    "soto-ayam — golden turmeric-lemongrass chicken soup over rice",
    "pepes-ikan — fish steamed in banana leaf with bumbu and basil",
    "ikan-goreng — whole fish fried crisp, dredged through sambal",
    "sayur-sop — clear vegetable and chicken broth",
  ],
  proteinNote:
    "Chicken and fish join the constant tempe and tahu this week; the feast plate clears the floor comfortably, the meat a seasoning luxury.",
  bonus: false,
  preciousThread: "One whole chicken for the soto and a few small whole fish.",
  engine: [
    "nasi-putih — a big pot of rice for the soto bowls and every feast plate",
    "tempe and tahu — the constant protein engine, fried alongside the bird and fish",
    "soto-ayam broth — simmer one chicken into a golden turmeric-lemongrass pot for the week",
    "sambal + bumbu — the constant jar and base paste, here also seasoning the fish and broth",
  ],
  days: [
    {
      day: "Sun",
      isCookDay: true,
      dinner: "soto-ayam over rice with tempe and sambal — the feast headline",
      estCalories: 680,
      estProtein: 28,
    },
    {
      day: "Mon",
      dinner: "soto-ayam again, the pot deepened, with telur and bean sprouts",
      estCalories: 670,
      estProtein: 27,
    },
    {
      day: "Tue",
      dinner: "pepes-ikan (banana-leaf fish) with rice and tumis kangkung",
      estCalories: 660,
      estProtein: 29,
    },
    {
      day: "Wed",
      dinner: "ikan-goreng — whole fried fish — with sambal and rice",
      estCalories: 690,
      estProtein: 30,
    },
    {
      day: "Thu",
      dinner: "sayur-sop with tempe-goreng and rice",
      estCalories: 620,
      estProtein: 22,
    },
    {
      day: "Fri",
      dinner: "soto-ayam and pepes-ikan side by side over rice",
      estCalories: 700,
      estProtein: 31,
    },
    {
      day: "Sat",
      dinner: "zero-waste finale: the last soto broth, picked chicken, fried fish, and every vegetable emptied into one clear-the-kitchen pot over rice",
      estCalories: 700,
      estProtein: 30,
    },
  ],
  shopping: [
    { item: "Whole chicken (for soto + sayur sop)", qty: "~3 1/2 lb bird", cost: 8.0, note: "the precious thread — one bird, a big pot" },
    { item: "Small whole fish (mackerel / tilapia)", qty: "~2 lb", cost: 6.0, note: "for pepes and ikan goreng" },
    { item: "Tempe + tahu (the constant base)", qty: "3 blocks / 1 lb", cost: 4.5 },
    { item: "White rice", qty: "4 lb", cost: 3.5, spansWeeks: true },
    { item: "Glass noodles + bean sprouts (for soto)", qty: "1 pack / 1 lb", cost: 2.5 },
    { item: "Banana leaf (for pepes)", qty: "1 pack", cost: 1.5 },
    { item: "Turmeric + lemongrass + galangal", qty: "for the soto broth", cost: 2.5, spansWeeks: true },
    { item: "Kaffir lime leaf + Thai basil (kemangi)", qty: "for the pepes", cost: 1.5 },
    { item: "Shallots + garlic", qty: "~3/4 lb / 2 heads", cost: 2.5 },
    { item: "Red + bird's-eye chiles", qty: "a handful", cost: 2.0 },
    { item: "Mixed soup vegetables (carrot, cabbage, celery)", qty: "a basket", cost: 3.0 },
    { item: "Eggs + lime", qty: "1/2 dozen / 4", cost: 3.0 },
    { item: "Kecap manis + coconut oil (top up)", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const indonesianWeeks: WeekPlan[] = [
  idWeek1Tempe,
  idWeek2Tahu,
  idWeek3Sayur,
  idWeek4Sambal,
  idWeek5Pecel,
  idWeek6Nasi,
  idWeek7Soto,
];
