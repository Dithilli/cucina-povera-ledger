import type { WeekPlan } from "../types";

// Challenge — South India: the everyday saapadu (the meals).
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "south-indian"; the
// engine is cuisine-agnostic, so these slot into the shared content arrays,
// tagged by cuisine. These are the curated, pregenerated defaults — the AI menu
// generator lets users compose variations on top of the same recipe pool.
//
// Distinct from the North Indian "dal-roti" challenge: this is SOUTH India —
// rice-centric, no roti. Idli, dosa, sambar, rasam, poriyal, the coconut coast,
// the tamarind keeping-foods, the tiffin table.
//
// The FOUNDATION — steamed rice, a pot of toor dal, the tadka (mustard seed,
// curry leaf, urad dal, hing, dried chile bloomed in oil), grated coconut, and
// tamarind/sambar powder — is the constant beneath every week; it lives in each
// week's engine, never as a theme. Each theme is a real dinner category you
// actually eat on top of that base. Dinner text is lowercase free text.

export const siWeek1Sambar: WeekPlan = {
  slug: "si-week-1-sambar",
  number: 1,
  cuisine: "south-indian",
  theme: "Rice & Sambar",
  title: "Week 1 — Rice & Sambar",
  description:
    "Start where the South Indian plate starts: a mound of steamed rice and a ladle of sambar — toor dal cooked with tamarind, a vegetable, and sambar powder, finished with a curry-leaf tadka. Then the gentler members of the family — rasam over rice, cooling curd rice, and peppery ven pongal — the dinners eaten most nights of the year.",
  context: `Across Tamil Nadu, Karnataka, and beyond, the everyday dinner is rice and sambar: a pot of toor dal simmered with tamarind, a vegetable or two, and a spoon of sambar powder, then crowned with a tadka of mustard seed and curry leaf crackling in hot oil. It is poured over steamed rice, mixed by hand, and eaten off a plate or a banana leaf. The genius is balance on one plate — the dal carries the protein, the rice the energy, the tamarind the brightness, the tadka the soul. Rasam, its thin peppery cousin, follows the rice; curd rice cools the meal at the end; ven pongal turns the same rice and dal into a soft, ghee-rich one-pot. Master sambar, rasam, and the tadka this week and the rest of the arc is variation on a base you already know by heart.`,
  dishes: ["Sambar", "Rasam sadam", "Curd rice", "Ven pongal"],
  proteinNote:
    "Toor dal in the sambar and pongal carries ~16–18g protein per cooked cup; the yogurt in curd rice adds more. Rice-and-sambar clears most of the day's floor with no meat.",
  bonus: false,
  preciousThread: "A spoon of ghee melting into the ven pongal and over the hot sambar rice.",
  engine: [
    "steamed rice — a big pot of rice, the plate under every dinner this week and every week (the constant base)",
    "toor dal — a pot of split pigeon peas, the protein spine of sambar, rasam, and pongal (the constant base)",
    "tadka — mustard seed, curry leaf, urad dal, hing & dried chile bloomed in oil, poured over each pot (the constant base)",
    "coconut + tamarind/sambar powder — grated coconut for chutney and the tamarind-and-spice souring base (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "rice and sambar with a curry-leaf tadka — the headline pot", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "rasam sadam — peppery rasam poured over rice, with a little ghee", estCalories: 480, estProtein: 14 },
    { day: "Tue", dinner: "curd rice — rice folded into yogurt with a mustard-and-curry-leaf tadka", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "ven pongal — rice and moong/toor dal cooked soft with pepper, cumin, and ghee", estCalories: 460, estProtein: 13 },
    { day: "Thu", dinner: "sambar deepened on day four over rice, with a coconut chutney", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "rasam sadam again, with a spoon of curd rice on the side", estCalories: 480, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: the week's sambar and rasam pooled over the last rice, a fresh tadka on top — nothing wasted", estCalories: 440, estProtein: 12 },
  ],
  shopping: [
    { item: "Rice (sona masoori / idli rice)", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Toor dal + urad dal", qty: "2 lb + 1 lb", cost: 4.0, spansWeeks: true, note: "the protein spine and the tadka dal" },
    { item: "Moong dal (for pongal)", qty: "1 lb", cost: 1.6 },
    { item: "Tamarind, sambar powder, mustard seed, curry leaf, hing", qty: "assorted", cost: 4.0, spansWeeks: true, note: "the souring-and-tempering box that powers the arc" },
    { item: "Sambar vegetables (drumstick, pumpkin, carrot, shallots)", qty: "~3 lb", cost: 3.5 },
    { item: "Yogurt / curd (for curd rice)", qty: "~2 qt", cost: 3.0, note: "the cooling end of the meal" },
    { item: "Coconut (fresh or frozen grated)", qty: "1–2", cost: 2.5, spansWeeks: true },
    { item: "Tomatoes (for rasam)", qty: "~1.5 lb", cost: 2.0 },
    { item: "Black pepper, cumin, turmeric, dried red chiles", qty: "a starter set", cost: 4.0, spansWeeks: true, note: "rasam and tadka spices" },
    { item: "Green chiles, ginger, cilantro", qty: "a handful / 1 hand / 1 bunch", cost: 1.5 },
    { item: "Ghee", qty: "1/2 lb", cost: 3.0, spansWeeks: true, note: "the precious thread — finishes pongal and sambar rice" },
    { item: "Cooking oil (for tadka) + salt", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const siWeek2Dosa: WeekPlan = {
  slug: "si-week-2-dosa",
  number: 2,
  cuisine: "south-indian",
  theme: "Dosa & Idli",
  title: "Week 2 — Dosa & Idli",
  description:
    "The fermented batter that is the South's quiet genius. Soaked rice and urad dal ground together and left to sour overnight, then steamed into pillowy idli or spread thin and crisp into dosa — masala dosa wrapped around spiced potato, plain dosa with chutney, idli swimming in sambar, lacy rava dosa from the same pantry.",
  context: `The dosa-idli batter is South India's great act of thrift turned magic: rice and urad dal, soaked and ground to a paste, then left overnight where wild ferment makes it rise and turn faintly sour. From one bowl of cheap batter come idli (steamed soft for a gentle dinner) and dosa (spread thin on a hot griddle until lacy and crisp). The same sambar and coconut chutney from week one are the constant companions — the batter sits squarely on top of the rice-dal-tadka foundation, only fermented. A masala dosa folds in a turmeric-yellow potato saute; rava dosa skips the wait entirely, a quick semolina lace for the night you forgot to soak. The ferment is free, the protein comes from the urad dal in the batter, and a spoon of leftover batter never goes to waste — it becomes tomorrow's uttapam.`,
  dishes: ["Masala dosa", "Dosa with chutney", "Idli & sambar", "Rava dosa"],
  proteinNote:
    "Urad dal ground into the batter and the toor dal in the accompanying sambar carry the protein; idli-and-sambar or dosa-and-sambar clears the floor with no meat.",
  bonus: false,
  preciousThread: "A well-soured batch of idli/dosa batter, risen overnight — the week's whole engine in a bowl.",
  engine: [
    "idli/dosa batter — soak rice and urad dal, grind, and ferment overnight; the week's headline rests on it",
    "steamed rice + toor dal — a pot of rice and the dal for the constant sambar (the constant base)",
    "tadka — mustard seed, curry leaf, urad dal, hing & dried chile in oil for the sambar and chutney (the constant base)",
    "coconut chutney + sambar — grated coconut ground into chutney and the tamarind-sambar pot (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "masala dosa — crisp dosa wrapped around spiced potato, with sambar and coconut chutney — the headline", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "plain dosa with coconut chutney and a little sambar", estCalories: 480, estProtein: 14 },
    { day: "Tue", dinner: "idli and sambar — soft steamed cakes in the dal pot", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "rava dosa — quick lacy semolina dosa with chutney", estCalories: 460, estProtein: 13 },
    { day: "Thu", dinner: "uttapam — thick dosa griddled with onion and chile from the same batter, with sambar", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "idli with podi and ghee, a side of sambar", estCalories: 480, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: the last of the batter griddled into uttapam, leftover potato and sambar alongside — nothing wasted", estCalories: 440, estProtein: 12 },
  ],
  shopping: [
    { item: "Idli rice (or parboiled rice) for batter", qty: "4 lb", cost: 3.5, note: "the bank — the batter base" },
    { item: "Urad dal (for the batter and tadka)", qty: "2 lb", cost: 3.5, spansWeeks: true, note: "the ferment's protein" },
    { item: "Toor dal (for the sambar)", qty: "1 lb", cost: 1.5 },
    { item: "Rava / semolina (for rava dosa)", qty: "1 lb", cost: 1.2 },
    { item: "Potatoes (for masala dosa filling)", qty: "~3 lb", cost: 2.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5 },
    { item: "Coconut (for chutney)", qty: "1–2", cost: 2.5, spansWeeks: true },
    { item: "Idli/molagapodi (gunpowder) + sambar powder", qty: "small", cost: 3.0, spansWeeks: true, note: "the precious thread — podi and ghee on idli" },
    { item: "Tamarind, mustard seed, curry leaf, hing", qty: "top up", cost: 2.5, spansWeeks: true },
    { item: "Green chiles, ginger, cilantro", qty: "a handful / 1 hand / 1 bunch", cost: 1.5 },
    { item: "Turmeric, dried red chiles, chana dal (chutney)", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Ghee + cooking oil + salt", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 15,
};

export const siWeek3Poriyal: WeekPlan = {
  slug: "si-week-3-poriyal",
  number: 3,
  cuisine: "south-indian",
  theme: "Poriyal & Kootu",
  title: "Week 3 — Poriyal & Kootu",
  description:
    "The vegetable that completes the meals. Poriyal — vegetables stir-fried dry with a mustard-and-urad tadka and a fistful of grated coconut — and kootu, the softer cousin where the vegetable is simmered with a little dal. Beans, cabbage, okra, and stewed greens, each a few cheap vegetables turned bright on the rice-and-sambar base.",
  context: `A South Indian plate is never just rice and sambar — there is always a poriyal, the dry stir-fried vegetable that brings the season and a fistful of coconut to the meal. Beans poriyal, cabbage poriyal, vendakkai (okra) poriyal — each is the same simple move: a vegetable cooked quick in a mustard-seed-and-urad tadka, finished with grated coconut. Kootu softens the idea: the vegetable simmered with a little moong or toor dal into something between a stir-fry and a stew. Keerai masiyal is greens cooked down and mashed smooth. All of it rides on the constant rice-dal-tadka-coconut foundation — the poriyal is the freshness and the texture, the sambar or rasam alongside still carries the meal. This is how the home kitchen eats the market's cheapest vegetables and makes each one taste like its own dinner.`,
  dishes: ["Beans poriyal", "Cabbage poriyal", "Kootu", "Vendakkai poriyal", "Keerai masiyal"],
  proteinNote:
    "Poriyal is light on protein; the dal in the kootu and the sambar or rasam alongside carry the floor — poriyal-sambar-rice is the full plate.",
  bonus: false,
  preciousThread: "A fresh coconut grated over each poriyal — the fat and sweetness that make it.",
  engine: [
    "steamed rice — the pot of rice every poriyal and kootu rides on (the constant base)",
    "toor + moong dal — a base pot of dal for the sambar and the kootu's body (the constant base)",
    "tadka — mustard seed, curry leaf, urad dal, hing & dried chile, the start of every poriyal (the constant base)",
    "coconut + sambar/tamarind base — grated coconut to finish the poriyals and the souring-spice pot (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "beans poriyal with sambar and rice — the headline", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "cabbage poriyal with rasam and rice", estCalories: 480, estProtein: 14 },
    { day: "Tue", dinner: "kootu — vegetable simmered with moong dal, over rice", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "vendakkai (okra) poriyal with sambar and rice", estCalories: 460, estProtein: 13 },
    { day: "Thu", dinner: "keerai masiyal — mashed greens with a garlic tadka, over rice and dal", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "beans poriyal deepened, with kootu and rice", estCalories: 480, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: a mixed-poriyal plate — the week's vegetables tossed together with the last sambar over rice — nothing wasted", estCalories: 440, estProtein: 12 },
  ],
  shopping: [
    { item: "Rice (sona masoori)", qty: "3 lb", cost: 2.5, note: "the base under every plate" },
    { item: "Green beans", qty: "~1.5 lb", cost: 2.5, note: "the bank — poriyal twice" },
    { item: "Cabbage", qty: "1 head", cost: 1.5 },
    { item: "Okra (vendakkai)", qty: "1 lb", cost: 2.5 },
    { item: "Greens (spinach / amaranth / keerai)", qty: "2 bunches", cost: 2.5 },
    { item: "Toor + moong dal (for sambar and kootu)", qty: "1.5 lb total", cost: 2.4 },
    { item: "Coconut (grated over every poriyal)", qty: "2", cost: 3.0, spansWeeks: true, note: "the precious thread" },
    { item: "Tamarind, sambar powder, mustard seed, curry leaf, hing", qty: "top up", cost: 2.5, spansWeeks: true },
    { item: "Urad dal + chana dal (for the tadka crunch)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Green chiles, ginger, garlic", qty: "a handful / 1 hand / 1 head", cost: 1.5 },
    { item: "Turmeric, dried red chiles, cumin (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Cooking oil (for the tadkas) + salt", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 15,
};

export const siWeek4Rasam: WeekPlan = {
  slug: "si-week-4-rasam",
  number: 4,
  cuisine: "south-indian",
  theme: "Rasam & Charu",
  title: "Week 4 — Rasam & Charu",
  description:
    "The thin, peppery soup-broth that ends the meal and cures the cold. Rasam — tamarind, tomato, black pepper, cumin, and crushed garlic, brightened with curry leaf — and mor kuzhambu, the gentle yogurt-and-coconut curry. Each poured over rice with a poriyal alongside, the lightest, most restorative dinners on the arc.",
  context: `Rasam (charu in Telugu) is the soul of the South Indian meal in liquid form: a thin, sour, peppery broth of tamarind and tomato sharpened with crushed black pepper, cumin, and garlic, scented with curry leaf and finished with a ghee tadka. It is poured over rice, sipped at the end of the meal, and pressed on anyone with a cold — the original comfort medicine. Its counterweight this week is mor kuzhambu, a gentle buttermilk-and-coconut curry, cooling where rasam is fiery. Both rest on the constant rice-dal-tadka-coconut foundation: rasam leans on the same toor dal and tamarind as sambar, only thinner and sharper. A poriyal alongside keeps the plate whole. These are the weeknight dinners of balance — hot and sour against cool and mild, all from the same pantry.`,
  dishes: ["Rasam", "Mor kuzhambu", "Rice & poriyal", "Tomato rasam"],
  proteinNote:
    "The toor dal cooked into the rasam and the yogurt in the mor kuzhambu carry the protein; rasam-rice with a poriyal and a spoon of dal clears the floor.",
  bonus: false,
  preciousThread: "A spoon of ghee tempered with cumin and pepper, poured over the rasam at the last moment.",
  engine: [
    "steamed rice — the pot of rice rasam and kuzhambu are poured over (the constant base)",
    "toor dal — the dal cooked thin into the rasam and ready for sambar (the constant base)",
    "tadka — mustard, cumin, curry leaf, hing & dried chile in ghee/oil, the finish on rasam (the constant base)",
    "coconut + tamarind/rasam base — coconut ground for the mor kuzhambu and the tamarind souring base (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "rasam sadam with a beans poriyal and rice — the headline", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "mor kuzhambu — yogurt-coconut curry over rice, with a vegetable", estCalories: 480, estProtein: 14 },
    { day: "Tue", dinner: "tomato rasam over rice with a cabbage poriyal", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "pepper-garlic rasam (for the cold) with rice and a spoon of dal", estCalories: 460, estProtein: 13 },
    { day: "Thu", dinner: "mor kuzhambu deepened, with rice and a poriyal", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "rasam sadam again, with a coconut chutney and rice", estCalories: 480, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: the week's rasam and kuzhambu poured over the last rice with the leftover poriyal — nothing wasted", estCalories: 440, estProtein: 12 },
  ],
  shopping: [
    { item: "Rice (sona masoori)", qty: "3 lb", cost: 2.5, note: "the base under every bowl" },
    { item: "Tomatoes (for rasam)", qty: "~2.5 lb", cost: 3.0, note: "the bank — rasam runs on tomato" },
    { item: "Toor dal (cooked thin into rasam)", qty: "1.5 lb", cost: 2.2 },
    { item: "Yogurt / buttermilk (for mor kuzhambu)", qty: "~2 qt", cost: 3.0 },
    { item: "Coconut (for the kuzhambu)", qty: "1–2", cost: 2.5, spansWeeks: true },
    { item: "Vegetables for poriyal (beans, cabbage, okra)", qty: "~2 lb", cost: 3.0 },
    { item: "Tamarind, rasam powder, sambar powder", qty: "small", cost: 3.0, spansWeeks: true, note: "the souring-spice base" },
    { item: "Black pepper, cumin, garlic", qty: "a starter set / 2 heads", cost: 3.0, spansWeeks: true, note: "the precious thread — the pepper that makes rasam" },
    { item: "Mustard seed, curry leaf, hing (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Green chiles, ginger, cilantro", qty: "a handful / 1 hand / 1 bunch", cost: 1.5 },
    { item: "Ghee (for the rasam tadka)", qty: "1/2 lb", cost: 2.5, spansWeeks: true },
    { item: "Cooking oil + salt", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 16,
};

export const siWeek5Coconut: WeekPlan = {
  slug: "si-week-5-coconut",
  number: 5,
  cuisine: "south-indian",
  theme: "Coconut & Kerala",
  title: "Week 5 — Coconut & Kerala",
  description:
    "The lush coconut coast. Avial — mixed vegetables in a coconut-and-yogurt blanket — olan with white gourd and coconut milk, thoran of finely cut vegetables tossed with grated coconut, and the bright, sour Kerala fish curry simmered in coconut and kokum. The week the coast's cheapest abundance, the coconut, becomes the whole flavor of the meal.",
  context: `Kerala cooks in coconut — milk, oil, and freshly grated flesh — because the palm grows in every backyard and gives endlessly for almost nothing. Avial is the famous one: a medley of whatever vegetables the garden offers, bound in a ground coconut-and-cumin paste loosened with sour yogurt and finished, Kerala-style, with raw coconut oil and curry leaf. Olan floats ash gourd and beans in thin coconut milk; thoran tosses finely chopped vegetables with grated coconut and a mustard tadka; the Kerala fish curry simmers a cheap fish in coconut and tart kokum (or tamarind). All of it still rests on the constant rice-dal-tadka foundation — the rice is the plate, the coconut is the week's flourish on top. This is the Sadya logic of the coast: abundance built from the one ingredient that costs the least where it grows.`,
  dishes: ["Avial", "Olan", "Thoran", "Kerala fish curry"],
  proteinNote:
    "The dal underneath, the yogurt in the avial, the coconut, and the cheap fish in the curry carry the protein; coconut-rich curry over rice with a dal clears the floor.",
  bonus: false,
  preciousThread: "A drizzle of raw coconut oil and fresh curry leaf stirred into the avial off the heat.",
  engine: [
    "steamed rice — Kerala matta or sona masoori, the plate under every coconut curry (the constant base)",
    "toor dal — the base dal pot still underneath the coconut week (the constant base)",
    "tadka — mustard seed, curry leaf, urad dal, hing & dried chile, the finish on thoran and olan (the constant base)",
    "coconut + tamarind/kokum — grated coconut, coconut milk, and the souring agent — the week's whole engine (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "avial with rice and a dal — mixed vegetables in coconut and yogurt — the headline", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "thoran — finely cut vegetables tossed with grated coconut, over rice", estCalories: 480, estProtein: 14 },
    { day: "Tue", dinner: "olan — ash gourd and beans in thin coconut milk, with rice", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "kerala fish curry simmered in coconut and kokum, over rice", estCalories: 520, estProtein: 17 },
    { day: "Thu", dinner: "avial deepened on day five, with rice and rasam", estCalories: 500, estProtein: 16 },
    { day: "Fri", dinner: "thoran with a coconut chutney and rice", estCalories: 460, estProtein: 13 },
    { day: "Sat", dinner: "zero-waste: the week's avial, olan, and thoran pooled over the last rice with a fresh coconut tadka — nothing wasted", estCalories: 440, estProtein: 12 },
  ],
  shopping: [
    { item: "Rice (Kerala matta or sona masoori)", qty: "3 lb", cost: 3.0, note: "the base under every curry" },
    { item: "Coconut (fresh) + coconut milk", qty: "3 + 1 can", cost: 5.0, spansWeeks: true, note: "the bank — the week's whole flavor" },
    { item: "Mixed vegetables (drumstick, carrot, beans, ash gourd, plantain)", qty: "~4 lb", cost: 4.5 },
    { item: "A cheap fish (mackerel / sardine / tilapia)", qty: "~1.5 lb", cost: 4.0, note: "the precious thread — the coast's curry" },
    { item: "Yogurt (for avial)", qty: "~1 qt", cost: 2.0 },
    { item: "Toor dal (the base dal)", qty: "1 lb", cost: 1.5 },
    { item: "Kokum / tamarind", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Coconut oil (for the Kerala finish)", qty: "small bottle", cost: 3.0, spansWeeks: true },
    { item: "Mustard seed, curry leaf, hing, dried chile (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Green chiles, ginger, shallots", qty: "a handful / 1 hand / small", cost: 2.0 },
    { item: "Turmeric, cumin, black pepper (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Salt", qty: "", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 18,
};

export const siWeek6Tamarind: WeekPlan = {
  slug: "si-week-6-tamarind",
  number: 6,
  cuisine: "south-indian",
  theme: "Tamarind & Tangy",
  title: "Week 6 — Tamarind & Tangy",
  description:
    "The keeping foods — the tangy rices and curries that travel and last. Puliyodarai (tamarind rice) and lemon rice, rice tossed in a spiced souring paste that keeps for days, and vatha kuzhambu, the thick, dark, intensely sour tamarind gravy made to sit in the pot and only get better. The thrift of food built to outlast the day it was cooked.",
  context: `Before refrigeration, the South Indian kitchen mastered food that keeps: rices and gravies acidified and oiled enough to travel a day's journey or feed a family through a lean stretch. Puliyodarai — tamarind rice — is the great one: cooked rice tossed in a dark, roasted pulikaachal paste of tamarind, dried chile, and toasted lentils, oily and sour enough to last days unrefrigerated and only deepen. Lemon rice is its sunnier cousin, rice brightened with lemon, turmeric, and a peanut-and-curry-leaf tadka. Vatha kuzhambu is the keeping curry — a thick, dark, fiercely sour tamarind gravy with sun-dried vegetables (vathal) that sits in the pot for days and improves. All of it rides the constant rice-dal-tadka foundation; tamarind is simply turned up from accent to headline. This is travel food, temple food, lean-day food — the genius of the pantry that never spoils.`,
  dishes: ["Puliyodarai (tamarind rice)", "Vatha kuzhambu", "Lemon rice", "Coconut rice"],
  proteinNote:
    "The toasted lentils and peanuts in the mixed rices and the dal alongside carry the protein; tamarind rice with a side of dal or curd clears the floor.",
  bonus: false,
  preciousThread: "A jar of pulikaachal — the roasted tamarind paste that makes the rice and keeps for weeks.",
  engine: [
    "steamed rice — a big pot of rice to toss into puliyodarai, lemon rice, and coconut rice (the constant base)",
    "toor dal — the base dal pot to round the tangy plates and feed the kuzhambu (the constant base)",
    "tadka — mustard, urad/chana dal, peanut, curry leaf, hing & dried chile, the heart of every mixed rice (the constant base)",
    "coconut + tamarind base — grated coconut and the dark roasted tamarind souring paste — the week's engine (the constant base)",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "puliyodarai — tamarind rice tossed in the roasted pulikaachal — with a dal, the headline", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "lemon rice with a peanut-curry-leaf tadka and a coconut chutney", estCalories: 480, estProtein: 14 },
    { day: "Tue", dinner: "vatha kuzhambu — thick sour tamarind gravy over rice with an appalam", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "coconut rice with a side of rasam and a poriyal", estCalories: 460, estProtein: 13 },
    { day: "Thu", dinner: "puliyodarai deepened on day five, with curd rice on the side", estCalories: 520, estProtein: 17 },
    { day: "Fri", dinner: "vatha kuzhambu again over rice, with a beans poriyal", estCalories: 480, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: the week's mixed rices warmed together, vatha kuzhambu spooned over — nothing wasted", estCalories: 440, estProtein: 12 },
  ],
  shopping: [
    { item: "Rice (sona masoori)", qty: "4 lb", cost: 3.5, note: "the bank — every mixed rice rides on it" },
    { item: "Tamarind (block)", qty: "1 lb", cost: 2.5, spansWeeks: true, note: "the precious thread — the souring heart" },
    { item: "Peanuts (for the mixed-rice tadkas)", qty: "1 lb", cost: 2.0, spansWeeks: true },
    { item: "Lemons (for lemon rice)", qty: "6", cost: 2.0 },
    { item: "Coconut (for coconut rice and chutney)", qty: "2", cost: 3.0, spansWeeks: true },
    { item: "Toor dal (the base dal)", qty: "1 lb", cost: 1.5 },
    { item: "Sun-dried vegetables / vathal (sundakkai, manathakkali)", qty: "small", cost: 2.5, note: "for vatha kuzhambu" },
    { item: "Sambar powder, vatha kuzhambu powder, turmeric", qty: "small", cost: 2.5, spansWeeks: true },
    { item: "Urad dal + chana dal (for the tadka crunch)", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Mustard seed, curry leaf, hing, dried red chiles (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Appalam / papad", qty: "1 pack", cost: 1.5 },
    { item: "Sesame / gingelly oil (puliyodarai wants it) + salt", qty: "", cost: 3.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const siWeek7Tiffin: WeekPlan = {
  slug: "si-week-7-tiffin",
  number: 7,
  cuisine: "south-indian",
  theme: "Tiffin & Festival",
  title: "Week 7 — Tiffin & Festival",
  description:
    "The tiffin table and the festival plate that close the arc. Upma from toasted semolina, the Karnataka one-pot bisi bele bath of rice, dal, and vegetables in a fragrant spice paste, crisp medu vada from ground urad, and a small festive plate — a payasam, an extra poriyal, a banana-leaf spread. The same humble pantry dressed for a celebration.",
  context: `"Tiffin" is the South Indian word for the light savory meals eaten morning or evening — and at the end of the arc it becomes the celebration. Upma toasts semolina with a vegetable-studded tadka into a quick, comforting one-pot. Bisi bele bath is Karnataka's glory: rice and toor dal cooked together with vegetables and a fragrant roasted spice-and-coconut paste, sour with tamarind, rich with ghee — a whole feast in one pot. Medu vada are the crisp, doughnut-shaped fritters ground from soaked urad dal, the festival's savory crown. To finish, a small festive plate: a sweet payasam, an extra poriyal, the dishes laid out on a banana leaf the way a Sadya is served. Every bit of it sits on the same constant rice-dal-tadka-coconut foundation that opened the arc — proof that the everyday pantry and the festival table are the same pantry, only dressed for the occasion. The leftovers become tomorrow's plate; nothing is wasted, even at the feast.`,
  dishes: ["Upma", "Bisi bele bath", "Medu vada", "Festive banana-leaf plate"],
  proteinNote:
    "The urad dal in the medu vada and the toor dal cooked through the bisi bele bath carry the protein; a tiffin plate with vada and sambar clears the floor.",
  bonus: false,
  preciousThread: "A spoon of ghee over the bisi bele bath and a small payasam to close the feast.",
  engine: [
    "steamed rice + toor dal — the rice and dal cooked into the bisi bele bath and under the tiffin (the constant base)",
    "tadka — mustard seed, curry leaf, urad dal, hing & dried chile, the start of upma and the vada batter's dal (the constant base)",
    "coconut + tamarind/sambar base — roasted coconut in the bisi bele paste and the tamarind souring base (the constant base)",
    "festival prep — soaked urad dal ground for medu vada and a small payasam, all from the constant pantry",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "bisi bele bath with a spoon of ghee and an appalam — the festival one-pot, the headline", estCalories: 540, estProtein: 18 },
    { day: "Mon", dinner: "upma — toasted semolina with a vegetable tadka, and a coconut chutney", estCalories: 480, estProtein: 14 },
    { day: "Tue", dinner: "medu vada with sambar and chutney — crisp urad-dal fritters", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "bisi bele bath again, deepened, with a poriyal", estCalories: 460, estProtein: 13 },
    { day: "Thu", dinner: "a festive banana-leaf plate — rice, sambar, two poriyals, vada, and a small payasam", estCalories: 540, estProtein: 17 },
    { day: "Fri", dinner: "upma with leftover medu vada and a little sambar", estCalories: 480, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: the week's bisi bele bath and upma warmed together with the last sambar and a fresh tadka — nothing wasted, even after the feast", estCalories: 440, estProtein: 12 },
  ],
  shopping: [
    { item: "Rice (sona masoori, for bisi bele bath and the plate)", qty: "3 lb", cost: 2.5, note: "the base under the feast" },
    { item: "Rava / semolina (for upma)", qty: "2 lb", cost: 2.0, note: "the bank — the quick tiffin" },
    { item: "Urad dal (for medu vada)", qty: "1.5 lb", cost: 2.5, spansWeeks: true, note: "the fritter's protein" },
    { item: "Toor dal (for bisi bele bath and sambar)", qty: "1.5 lb", cost: 2.2 },
    { item: "Mixed vegetables (beans, carrot, peas, potato)", qty: "~3 lb", cost: 3.5 },
    { item: "Coconut (chutney + the bisi bele paste)", qty: "2", cost: 3.0, spansWeeks: true },
    { item: "Bisi bele bath powder + sambar powder", qty: "small", cost: 2.5, spansWeeks: true, note: "the festival spice blend" },
    { item: "Jaggery + milk/vermicelli (for a small payasam)", qty: "small", cost: 3.0, note: "the precious thread — the sweet that closes the feast" },
    { item: "Tamarind, mustard seed, curry leaf, hing (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Green chiles, ginger, cilantro", qty: "a handful / 1 hand / 1 bunch", cost: 1.5 },
    { item: "Cashews + raisins (for payasam and bath)", qty: "small", cost: 2.5 },
    { item: "Ghee + frying oil + salt", qty: "", cost: 3.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const southIndianWeeks: WeekPlan[] = [
  siWeek1Sambar,
  siWeek2Dosa,
  siWeek3Poriyal,
  siWeek4Rasam,
  siWeek5Coconut,
  siWeek6Tamarind,
  siWeek7Tiffin,
];
