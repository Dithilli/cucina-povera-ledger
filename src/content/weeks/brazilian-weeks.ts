import type { WeekPlan } from "../types";

// Challenge — Brazil: comida caseira (everyday home cooking).
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "brazilian"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// composes variations on top of the same recipe pool.
//
// RULE #6: the Brazilian FOUNDATION — a big pot of white rice (arroz), the daily
// pot of feijão (beans, black or carioca), farinha/farofa (toasted cassava
// flour), and a refogado (the garlic-onion sofrito) base — is the CONSTANT that
// lives in EVERY week's `engine`. It is never itself a week theme. Each of the
// seven weeks is a distinct real DINNER category that sits on that base: the
// everyday "prato feito" of rice, beans, a protein, and something to finish.

export const brWeek1Feijao: WeekPlan = {
  slug: "br-week-1-feijao",
  number: 1,
  cuisine: "brazilian",
  theme: "Feijão & Tutu",
  title: "Week 1 — Feijão & Tutu",
  description:
    "The week the beans stop being a side and become the whole dinner. Brazil simmers a pot of feijão every single day, and this week we cook the dishes where that pot is the plate — beans bound with farofa, mashed to a velvet tutu, baked into rice. Cheap, dark, and filling enough to forget there was ever meat in the room.",
  context:
    `Feijão is the heartbeat of the Brazilian kitchen — a pot of beans simmers in every house every day, and the question "já almoçou?" really means "did you have your rice and beans?" In Minas Gerais the cook goes a step further and makes the beans the dinner itself: **tutu de feijão** thickens the bean broth with farinha into a creamy purée; **feijão tropeiro** — the muleteer's dish, born on the long cattle roads where everything had to travel dry — tumbles beans together with toasted farofa, eggs, collards, and whatever cured pork was in the saddlebag. **Baião de dois**, from the Nordeste, cooks beans and rice in one pot with cheese melted through. The technique that defines the week is stretching: a little bacon or sausage, an egg, a handful of greens, and a great deal of toasted cassava flour turn a pot of beans into a meal that feeds a whole table. Nothing here needs much meat to read as a real, satisfying dinner — the beans and the farofa do the work.`,
  dishes: [
    "Feijão tropeiro — beans tumbled with farofa, eggs, collards and a little sausage",
    "Tutu de feijão — bean purée thickened with cassava flour, mineiro-style",
    "Baião de dois — beans and rice cooked in one pot with cheese",
    "Feijoada (weeknight) — a quick black-bean braise with the cheap smoked cuts",
  ],
  proteinNote:
    "The floor comes from the beans themselves plus eggs: tropeiro and tutu both fold in fried eggs, and a small amount of cheap smoked sausage or bacon (linguiça calabresa, a little bacon) seasons the whole pot rather than feeding it. The rice-and-beans pairing is a complete protein on its own.",
  bonus: false,
  preciousThread: "A short length of smoked linguiça calabresa to flavour every pot.",
  engine: [
    "White rice — a big pot, reheated all week (the constant base)",
    "Feijão — the daily pot of beans (carioca this week), simmered Sunday with garlic and a bay leaf",
    "Farinha/farofa — toasted cassava flour, some loose to finish plates, some fried into farofa",
    "Refogado — the garlic-onion sofrito that starts every pot of beans and every dish",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "feijão tropeiro with a fried egg, collards and rice on the side", estCalories: 580, estProtein: 22 },
    { day: "Mon", dinner: "tutu de feijão over rice, a little sausage and a fried egg on top", estCalories: 540, estProtein: 20 },
    { day: "Tue", dinner: "baião de dois — beans and rice cooked together with cheese melted through", estCalories: 560, estProtein: 21 },
    { day: "Wed", dinner: "weeknight feijoada — black beans braised with the cheap smoked cuts, over rice with farofa", estCalories: 560, estProtein: 22 },
    { day: "Thu", dinner: "tutu de feijão again, thicker, with sautéed collards and an egg", estCalories: 520, estProtein: 19 },
    { day: "Fri", dinner: "feijão tropeiro, second round, with extra farofa and whatever sausage is left", estCalories: 560, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: virado — the week's leftover beans, rice and farofa fried together with a fresh egg on top", estCalories: 520, estProtein: 19 },
  ],
  shopping: [
    { item: "White rice", qty: "5 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Dried beans (carioca)", qty: "2 lb", cost: 3.0, spansWeeks: true },
    { item: "Cassava flour (farinha)", qty: "1 bag", cost: 3.0, spansWeeks: true },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Smoked linguiça calabresa", qty: "8 oz", cost: 3.0, note: "the precious thread — seasons every pot" },
    { item: "Bacon", qty: "4 oz", cost: 1.5, note: "rendered to start the tropeiro" },
    { item: "Collard greens (couve)", qty: "1 bunch", cost: 1.5 },
    { item: "Cheese (queijo coalho or mozzarella)", qty: "6 oz", cost: 2.5, note: "for the baião de dois" },
    { item: "Onions & garlic", qty: "for the refogado", cost: 2.5, spansWeeks: true },
    { item: "Bay leaves, cumin, oil", qty: "pantry seasoning", cost: 2.0, spansWeeks: true },
    { item: "Smoked pork cuts (for feijoada)", qty: "8 oz cheap ends", cost: 2.5 },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 17,
};

export const brWeek2Moqueca: WeekPlan = {
  slug: "br-week-2-moqueca",
  number: 2,
  cuisine: "brazilian",
  theme: "Moqueca & Peixe",
  title: "Week 2 — Moqueca & Peixe",
  description:
    "The coast comes to the table: cheap white fish simmered in coconut, dendê and tomato until the broth is the best part. This is the Bahian and Espírito Santo dinner — a moqueca you spoon over rice, fried fish with a cassava porridge to catch the bones' richness, a soft bobó thickened with mandioca. Frugal fish cookery, where the stew stretches a single fillet across a household.",
  context:
    `Along Brazil's long coast the daily dinner often comes out of the water, and the frugal genius is making a little fish feed many. **Moqueca** — the country's great fish stew, claimed by both Bahia and Espírito Santo — is built without browning: raw fish and onions, tomatoes and peppers are layered in a pot and gently simmered, then in the Bahian version finished with **coconut milk and dendê** (red palm oil) for a broth so rich you barely notice how little fish is in it; the *capixaba* version stays lighter, with urucum (annatto) for colour instead of palm oil. **Bobó de camarão/peixe** purées cooked cassava into the coconut broth so the dish thickens to a spoonable cream around the seafood. And the thriftiest move of all is **peixe frito com pirão** — fried fish whose head and bones are simmered into a stock, then thickened with farinha into a savoury cassava porridge so that nothing of the fish is wasted, not even the skeleton. Coconut, palm oil, cassava, and tomato do the heavy lifting; the fish is the seasoning, not the bulk.`,
  dishes: [
    "Moqueca de peixe — white fish simmered in coconut milk, dendê, tomato and peppers",
    "Peixe frito com pirão — fried fish with a cassava porridge made from the fish stock",
    "Bobó de mandioca — cassava puréed into a coconut broth around fish or shrimp",
    "Moqueca capixaba — the lighter, dendê-free version with annatto",
  ],
  proteinNote:
    "Cheap frozen or whole white fish (tilapia, hake, croaker) is the protein, stretched by the stew so one fillet feeds a plate; the pirão recovers every scrap of fish from the bones. Dried shrimp adds savour without adding much cost. A pot of beans on the side keeps the protein floor honest on the lighter nights.",
  bonus: false,
  preciousThread: "A small bottle of dendê (red palm oil) — a teaspoon colours and perfumes a whole moqueca.",
  engine: [
    "White rice — a big pot, reheated all week to soak up the moqueca broth (the constant base)",
    "Feijão — the daily pot of beans (black this week), kept simmering for the side and the lighter nights",
    "Farinha/farofa — toasted cassava flour, the body of the pirão and a finish on every plate",
    "Refogado — the garlic-onion-tomato-pepper base that every moqueca and bobó is built on",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "moqueca de peixe in coconut milk and dendê, over rice with farofa", estCalories: 560, estProtein: 24 },
    { day: "Mon", dinner: "peixe frito com pirão — fried fish, cassava porridge from the fish stock, rice", estCalories: 580, estProtein: 26 },
    { day: "Tue", dinner: "bobó de mandioca — cassava puréed into coconut broth around the last of the fish", estCalories: 540, estProtein: 20 },
    { day: "Wed", dinner: "moqueca capixaba — the lighter annatto version, beans and rice on the side", estCalories: 520, estProtein: 22 },
    { day: "Thu", dinner: "fish-and-coconut rice — the leftover moqueca broth cooked straight into the rice with dried shrimp", estCalories: 540, estProtein: 21 },
    { day: "Fri", dinner: "bobó again, thicker, with collards stirred through and farofa", estCalories: 520, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: a fish-broth caldo — every leftover broth pooled, thinned, thickened with farinha into a final pirão-soup with the rice", estCalories: 480, estProtein: 18 },
  ],
  shopping: [
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true, note: "the base under every dinner" },
    { item: "Frozen white fish (tilapia/hake)", qty: "2 lb", cost: 7.0, note: "the protein, stretched by the stew" },
    { item: "Coconut milk", qty: "2 cans", cost: 3.0 },
    { item: "Dendê (red palm oil)", qty: "1 small bottle", cost: 4.0, spansWeeks: true, note: "the precious thread — a teaspoon perfumes the pot" },
    { item: "Cassava (fresh mandioca)", qty: "1.5 lb", cost: 2.0 },
    { item: "Tomatoes", qty: "4", cost: 2.0 },
    { item: "Bell peppers", qty: "2", cost: 1.5 },
    { item: "Dried shrimp", qty: "2 oz", cost: 2.0, spansWeeks: true, note: "savour without much cost" },
    { item: "Cilantro & lime", qty: "1 bunch + 3 limes", cost: 1.5 },
    { item: "Cassava flour (farinha)", qty: "from last week's bag", cost: 0.0, spansWeeks: true },
    { item: "Dried beans (black)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Onions & garlic", qty: "for the refogado", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const brWeek3Frango: WeekPlan = {
  slug: "br-week-3-frango",
  number: 3,
  cuisine: "brazilian",
  theme: "Frango & Galinhada",
  title: "Week 3 — Frango & Galinhada",
  description:
    "Chicken the Brazilian way — the cheapest cuts, the bones included, simmered down until the rice itself tastes of the bird. Galinhada cooks chicken and rice into one golden pot; frango com quiabo braises it with okra; xinxim brings in peanut and dried shrimp from Bahia. One backyard chicken, made to last a week.",
  context:
    `For most of Brazil's history a chicken was a small fortune — a backyard bird killed for Sunday, then made to stretch all week. **Galinhada** is the mineiro/goiano answer: chicken browned in the refogado, then rice cooked right in the pot with the meat and its juices, tinted gold with açafrão-da-terra (turmeric) or annatto, so even the rice is dinner. The frugal logic is everywhere — bony, cheap pieces (thighs, drumsticks, backs, wings) give the most flavour for the least money, and the bones enrich the broth that cooks the rice or the beans. **Frango com quiabo**, the Minas classic, braises chicken with okra until the whole thing is silky; **frango ensopado** is the plain weeknight stew of chicken collapsed into a tomato-and-onion gravy you ladle over rice; and from Bahia, **xinxim de galinha** thickens the braise with ground peanuts, cashews, and dried shrimp into something far richer than its cost. A pot of beans alongside, a scatter of farofa, and one cheap chicken becomes a week of dinners.`,
  dishes: [
    "Galinhada — chicken and rice cooked together in one golden pot",
    "Frango com quiabo — chicken braised with okra, mineiro-style",
    "Xinxim de galinha — Bahian chicken thickened with peanut, cashew and dried shrimp",
    "Frango ensopado — plain weeknight chicken stewed in tomato-onion gravy",
  ],
  proteinNote:
    "Cheap bone-in chicken (thighs, drumsticks, backs) is the protein, and the bones double as the stock that cooks the rice and beans, so nothing of the bird is lost. Beans on the side and the peanut/shrimp in the xinxim round out the floor; one small chicken seasons the whole week.",
  bonus: false,
  preciousThread: "A handful of cashews and peanuts, ground into the xinxim for a Bahian richness.",
  engine: [
    "White rice — a big pot, plus extra raw rice held back to cook into the galinhada (the constant base)",
    "Feijão — the daily pot of beans (carioca this week), simmered with a little chicken broth for depth",
    "Farinha/farofa — toasted cassava flour to finish every plate, fried with garlic for the heavier nights",
    "Refogado — the garlic-onion sofrito the chicken is browned into before every braise",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "galinhada — chicken and rice cooked golden in one pot, farofa on top", estCalories: 580, estProtein: 26 },
    { day: "Mon", dinner: "frango com quiabo over rice, beans on the side", estCalories: 540, estProtein: 24 },
    { day: "Tue", dinner: "frango ensopado — chicken stewed in tomato-onion gravy, ladled over rice", estCalories: 520, estProtein: 23 },
    { day: "Wed", dinner: "xinxim de galinha — chicken in peanut-cashew-shrimp sauce, rice and farofa", estCalories: 580, estProtein: 25 },
    { day: "Thu", dinner: "galinhada again from the held-back rice and the last chicken, plus beans", estCalories: 560, estProtein: 24 },
    { day: "Fri", dinner: "frango com quiabo, second round, thicker, with extra okra and farofa", estCalories: 520, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: canja — the chicken carcass and bones simmered into a rice-and-chicken broth soup with the leftover meat", estCalories: 480, estProtein: 21 },
  ],
  shopping: [
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true, note: "the base, plus the galinhada pot" },
    { item: "Bone-in chicken (thighs/drumsticks/backs)", qty: "3 lb", cost: 5.5, note: "cheap cuts, bones included" },
    { item: "Okra (quiabo)", qty: "12 oz", cost: 2.0 },
    { item: "Peanuts", qty: "4 oz", cost: 1.0, note: "ground into the xinxim" },
    { item: "Cashews", qty: "3 oz", cost: 2.0, note: "the precious thread — Bahian richness in the xinxim" },
    { item: "Dried shrimp", qty: "from last week's bag", cost: 0.0, spansWeeks: true },
    { item: "Tomatoes", qty: "4", cost: 2.0 },
    { item: "Turmeric / annatto (açafrão)", qty: "1 small jar", cost: 1.5, spansWeeks: true, note: "the gold in the galinhada" },
    { item: "Dried beans (carioca)", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Cassava flour (farinha)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Cilantro & green onion", qty: "1 bunch each", cost: 1.5 },
    { item: "Onions & garlic", qty: "for the refogado", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 16,
};

export const brWeek4Carne: WeekPlan = {
  slug: "br-week-4-carne",
  number: 4,
  cuisine: "brazilian",
  theme: "Carne & Picadinho",
  title: "Week 4 — Carne & Picadinho",
  description:
    "The week meat is real, but only a little of it. Brazil's frugal beef cookery is all in the cheap cuts — the braising chuck of carne de panela, the diced scraps of picadinho, the salt-cured carne seca that built the sertão's kitchen — slow-cooked until tender and spread thin over rice, beans and farofa. A small piece of tough meat, made to taste like plenty.",
  context:
    `Brazilian home cooking treats beef the way a frugal kitchen everywhere treats it — sparingly, and only the cheap, tough cuts that reward long heat. **Picadinho** dices the offcuts and stews them small in a tomato-onion gravy so a half-pound of meat covers a whole table over rice; **carne de panela** (pot roast) braises a cheap chuck or brisket low and slow until it shreds into its own dark sauce. The true frugal hero is **carne seca / carne de sol** — beef salted and sun-dried in the cattle-country Nordeste so it kept for months without refrigeration, the original travelling protein; soaked and shredded, a little goes very far. **Escondidinho** — "the little hidden one" — buries that shredded carne seca under a blanket of puréed cassava (or aipim), baked until golden, the casserole that hides a small amount of meat under a mountain of mandioca. Across all of it the move is the same: long braise, deep refogado, and rice-and-beans-and-farofa to carry the meat further than it has any right to go.`,
  dishes: [
    "Picadinho — diced cheap beef stewed small in tomato-onion gravy",
    "Carne de panela — chuck or brisket braised low until it shreds",
    "Escondidinho de carne seca — shredded dried beef hidden under baked cassava purée",
    "Carne seca com abóbora — dried beef braised with pumpkin",
  ],
  proteinNote:
    "A small amount of cheap braising beef (chuck) and salt-cured carne seca is the protein, spread thin by long cooking and stretched across rice, beans and cassava. The beans carry the floor on every plate; the carne seca, being salted, seasons as much as it feeds.",
  bonus: false,
  preciousThread: "A piece of carne seca (dried, salted beef) — soaked and shredded, it flavours a whole casserole.",
  engine: [
    "White rice — a big pot, reheated all week under every braise (the constant base)",
    "Feijão — the daily pot of beans (black this week), simmered Sunday to soak up the braising juices",
    "Farinha/farofa — toasted cassava flour, plus puréed cassava held for the escondidinho top",
    "Refogado — the deep garlic-onion sofrito every braise and stew is built on",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "carne de panela — chuck braised until it shreds, over rice with farofa and beans", estCalories: 580, estProtein: 24 },
    { day: "Mon", dinner: "picadinho — diced beef in tomato-onion gravy over rice, a fried egg on top", estCalories: 560, estProtein: 23 },
    { day: "Tue", dinner: "escondidinho de carne seca — shredded dried beef under baked cassava purée", estCalories: 600, estProtein: 25 },
    { day: "Wed", dinner: "carne seca com abóbora — dried beef braised soft with pumpkin, over rice", estCalories: 540, estProtein: 22 },
    { day: "Thu", dinner: "picadinho again, stretched with extra beans and a runny egg", estCalories: 540, estProtein: 22 },
    { day: "Fri", dinner: "the last of the carne de panela shredded into a rice-and-bean bowl with farofa", estCalories: 520, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: cuscuz / virado — all the leftover braised meat, beans and rice fried together, topped with the last egg", estCalories: 520, estProtein: 20 },
  ],
  shopping: [
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true, note: "the base under every dinner" },
    { item: "Cheap braising beef (chuck)", qty: "1.5 lb", cost: 6.0, note: "the cut that rewards long heat" },
    { item: "Carne seca (dried salted beef)", qty: "8 oz", cost: 4.0, spansWeeks: true, note: "the precious thread — a little flavours a whole dish" },
    { item: "Cassava (mandioca)", qty: "2 lb", cost: 2.5, note: "puréed for the escondidinho top" },
    { item: "Pumpkin (abóbora)", qty: "1.5 lb", cost: 2.0 },
    { item: "Tomatoes", qty: "4", cost: 2.0 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Cheese (for escondidinho top)", qty: "4 oz", cost: 1.5 },
    { item: "Dried beans (black)", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Cassava flour (farinha)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Bay leaf, cumin, oil", qty: "pantry seasoning", cost: 1.5, spansWeeks: true },
    { item: "Onions & garlic", qty: "for the refogado", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const brWeek5Milho: WeekPlan = {
  slug: "br-week-5-milho",
  number: 5,
  cuisine: "brazilian",
  theme: "Milho & Angu",
  title: "Week 5 — Milho & Angu",
  description:
    "Corn and cassava as the centre of the plate, the way the poorest and oldest Brazilian kitchens ate. Angu and creamy polenta from cornmeal, a steamed cuscuz paulista loaded with vegetables and egg, the dense northeastern cuscuz of flaked corn. Starch made into a meal with a good sauce and whatever the garden gave.",
  context:
    `Before rice ruled the Brazilian plate, the base of dinner for much of the country was **fubá** (cornmeal) and **mandioca** (cassava) — the Indigenous and backlands staples, cheaper than anything and endlessly forgiving. **Angu** is the Brazilian polenta: fubá whisked into water until thick and pourable, eaten under a meaty or simply oniony **molho**, the same dish a Roman or a Georgian would recognise as cornmeal mush dressed up to be dinner. **Cuscuz paulista** is a showpiece of thrift — moistened cornmeal steamed in a mould lined with tomatoes, peppers, peas, palm hearts, sardines and hard-boiled egg, a whole vegetable course bound by cheap corn flour. **Cuscuz nordestino** is its austere cousin: flaked corn (flocão de milho) steamed plain in a *cuscuzeira* and eaten with butter, cheese, or a fried egg, the everyday Northeastern breakfast-or-dinner. And **polenta cremosa** rounds it out, loose and buttery under a tomato or sausage molho. The whole week proves the cucina-povera point: a pot of corn flour and a good sauce is a complete, comforting dinner, with the rice and beans always at the ready beside it.`,
  dishes: [
    "Angu com molho — cornmeal mush under a meaty or onion-tomato sauce",
    "Cuscuz paulista — steamed cornmeal moulded with vegetables, sardines and egg",
    "Cuscuz nordestino — flaked-corn cuscuz steamed plain, with egg or cheese",
    "Polenta cremosa — loose creamy polenta under a tomato-sausage molho",
  ],
  proteinNote:
    "Eggs and a tin of sardines do most of the protein work — the cuscuz paulista is studded with both — and the ever-present pot of beans on the side carries the floor. A little sausage or ground beef in the molho is seasoning, not the meal; the corn and cassava are the bulk.",
  bonus: false,
  preciousThread: "A tin of sardines to layer through the cuscuz paulista and lift the cheapest starch.",
  engine: [
    "White rice — a big pot, reheated all week beside the corn dishes (the constant base)",
    "Feijão — the daily pot of beans (carioca this week), the steady protein next to the starch",
    "Farinha/farofa — toasted cassava flour, plus a bag of fubá/flocão for the angu and cuscuz",
    "Refogado — the garlic-onion sofrito that becomes the molho ladled over every dish",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "angu com molho — cornmeal mush under a tomato-sausage sauce, beans on the side", estCalories: 560, estProtein: 20 },
    { day: "Mon", dinner: "cuscuz paulista — steamed cornmeal moulded with vegetables, sardines and egg, sliced", estCalories: 540, estProtein: 21 },
    { day: "Tue", dinner: "polenta cremosa under a tomato-and-onion molho, rice and beans alongside", estCalories: 520, estProtein: 17 },
    { day: "Wed", dinner: "cuscuz nordestino — flaked-corn cuscuz with a fried egg and crumbled cheese", estCalories: 500, estProtein: 18 },
    { day: "Thu", dinner: "angu again under the last of the molho, with farofa and beans", estCalories: 540, estProtein: 19 },
    { day: "Fri", dinner: "cuscuz paulista, second mould, with whatever vegetables and egg are left", estCalories: 520, estProtein: 20 },
    { day: "Sat", dinner: "zero-waste: a fried-polenta bowl — leftover angu and cuscuz crisped in the pan, beans and a fresh egg on top", estCalories: 500, estProtein: 18 },
  ],
  shopping: [
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true, note: "the base under every dinner" },
    { item: "Cornmeal (fubá)", qty: "2 lb", cost: 2.0, spansWeeks: true, note: "for angu and polenta" },
    { item: "Flaked corn (flocão de milho)", qty: "1 lb", cost: 2.0, spansWeeks: true, note: "for cuscuz nordestino" },
    { item: "Sardines (tinned)", qty: "2 tins", cost: 3.0, note: "the precious thread — through the cuscuz paulista" },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Tomatoes", qty: "4", cost: 2.0 },
    { item: "Bell peppers", qty: "2", cost: 1.5 },
    { item: "Frozen peas", qty: "8 oz", cost: 1.5 },
    { item: "Cheese (for the cuscuz)", qty: "4 oz", cost: 1.5 },
    { item: "Smoked sausage (calabresa)", qty: "4 oz", cost: 1.5, note: "for the molho" },
    { item: "Dried beans (carioca)", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Onions & garlic", qty: "for the refogado / molho", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 25,
  steadyStateWeekly: 15,
};

export const brWeek6Caldos: WeekPlan = {
  slug: "br-week-6-caldos",
  number: 6,
  cuisine: "brazilian",
  theme: "Caldos & Sopas",
  title: "Week 6 — Caldos & Sopas",
  description:
    "The dinner you drink with a spoon when the budget is thinnest. Brazil's caldos and sopas turn a few potatoes, a handful of beans, a chicken back, and a sausage into a whole warming meal — caldo verde green with collards, canja that doubles as medicine, a thick sopa de feijão. The most frugal week of all, and somehow the most comforting.",
  context:
    `When money or time is shortest, the Brazilian kitchen reaches for the pot of soup — the **caldo**, eaten as the whole dinner on a cool night or after a long day. **Caldo verde**, carried over from Portugal and made entirely Brazil's own, is potato simmered soft and blended smooth, then ribboned with finely shredded collard greens (couve) and a few coins of sausage — three cheap things turned silky and green. **Canja de galinha** is the country's chicken-and-rice soup, the thing you cook for the sick and the new mother, where a single chicken back and a handful of rice feed and heal a household. **Sopa de feijão** simply takes the daily bean pot, blends part of it smooth, and stretches it with vegetables and a little pasta or farofa into a thick, complete bowl. The frugal logic is total: every caldo is a way of making the smallest amount of protein and the cheapest vegetables go furthest, with bread or rice on the side and farofa always within reach to thicken and finish.`,
  dishes: [
    "Caldo verde — blended potato soup with shredded collards and sausage",
    "Canja de galinha — chicken-and-rice soup, the Brazilian comfort cure",
    "Sopa de feijão — thick blended bean soup stretched with vegetables",
    "Caldo de mandioca — cassava soup with a little dried beef",
  ],
  proteinNote:
    "A chicken back for the canja, a few coins of sausage in the caldo verde, and the blended beans of the sopa de feijão carry the protein — each soup spreads a tiny amount of meat across a whole bowl. Rice in the canja and farofa to thicken keep every bowl filling.",
  bonus: false,
  preciousThread: "A length of smoked sausage, sliced thin, to crown the caldo verde and scent the broths.",
  engine: [
    "White rice — a big pot, plus a handful held back to cook into the canja (the constant base)",
    "Feijão — the daily pot of beans (black this week), half of it blended into the sopa de feijão",
    "Farinha/farofa — toasted cassava flour to thicken the caldos and finish every bowl",
    "Refogado — the garlic-onion sofrito that starts every pot of soup",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "caldo verde — blended potato soup with collards and sausage, bread on the side", estCalories: 520, estProtein: 18 },
    { day: "Mon", dinner: "canja de galinha — chicken-and-rice soup from a chicken back, farofa to thicken", estCalories: 540, estProtein: 22 },
    { day: "Tue", dinner: "sopa de feijão — half the bean pot blended thick with vegetables and a little pasta", estCalories: 560, estProtein: 20 },
    { day: "Wed", dinner: "caldo de mandioca — cassava simmered soft with a little dried beef, blended creamy", estCalories: 540, estProtein: 19 },
    { day: "Thu", dinner: "caldo verde again with the last collards, an egg poached in the broth", estCalories: 500, estProtein: 18 },
    { day: "Fri", dinner: "canja, second pot, from the chicken bones and the held-back rice", estCalories: 520, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: a pooled caldão — every leftover soup combined, thickened with farinha, finished with the last sausage and an egg", estCalories: 500, estProtein: 19 },
  ],
  shopping: [
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true, note: "the base, plus the canja" },
    { item: "Potatoes", qty: "3 lb", cost: 2.0, note: "the body of the caldo verde" },
    { item: "Chicken backs/wings", qty: "1.5 lb", cost: 2.5, note: "the canja's protein and broth" },
    { item: "Smoked sausage (calabresa)", qty: "8 oz", cost: 3.0, note: "the precious thread — across every broth" },
    { item: "Collard greens (couve)", qty: "1 bunch", cost: 1.5 },
    { item: "Cassava (mandioca)", qty: "1.5 lb", cost: 2.0 },
    { item: "Carrots", qty: "1 lb", cost: 1.0 },
    { item: "Small pasta / vermicelli", qty: "8 oz", cost: 1.0 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Carne seca (a little, for the caldo de mandioca)", qty: "from last month's piece", cost: 0.0, spansWeeks: true },
    { item: "Dried beans (black)", qty: "from the pantry sack", cost: 0.0, spansWeeks: true },
    { item: "Cassava flour (farinha)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Onions & garlic", qty: "for the refogado", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 25,
  steadyStateWeekly: 15,
};

export const brWeek7Festa: WeekPlan = {
  slug: "br-week-7-festa",
  number: 7,
  cuisine: "brazilian",
  theme: "Festa & Boteco",
  title: "Week 7 — Festa & Boteco",
  description:
    "The week earns its feijoada. Brazilian salgados — the boteco and birthday-party snacks of coxinha, pastel, bolinho de bacalhau, pão de queijo — are little frugal triumphs of dough and scraps, and they make a fine cheap dinner. The arc closes on a proper weekend feijoada, the black-bean feast that famously turned the cheapest cuts into the national dish.",
  context:
    `The salgados of the **boteco** (corner bar) and the children's party are pure cucina povera dressed up for celebration: cheap dough and a little filling, fried or baked into something everyone fights over. **Coxinha** wraps shredded chicken (originally the scraps off the bone) in a dough teardrop and fries it; **pastel** fries a thin wheat envelope around whatever's cheap — cheese, ground meat, hearts of palm; **bolinho de bacalhau** stretches a small amount of salt cod with mashed potato into golden fritters; **pão de queijo**, the cheese-and-cassava-starch roll of Minas, is naturally gluten-free thrift that travels to every table in Brazil. They make a genuinely good, festive dinner for very little. And then the arc closes where Brazilian frugality is most famous of all: **feijoada**, the black-bean-and-pork stew whose legend (whether or not the textbooks fully agree) holds that the enslaved cooks of the colonial kitchen made the national dish out of the cuts the master's house discarded — ears, feet, tails, trimmings — simmered for hours with black beans into something so good it became the thing all Brazil eats on a Saturday. Served with rice, farofa, couve, and orange, it is the perfect end: nothing wasted, everyone fed, a feast pulled from the cheapest things in the kitchen.`,
  dishes: [
    "Coxinha — shredded-chicken croquettes in a fried dough teardrop",
    "Pastel — fried wheat envelopes filled with cheese or meat",
    "Bolinho de bacalhau — salt-cod and potato fritters",
    "Pão de queijo + weekend feijoada — cheese rolls, then the black-bean-and-pork feast",
  ],
  proteinNote:
    "Shredded chicken (coxinha), a small amount of salt cod stretched with potato (bolinho), eggs in the doughs, and the smoked pork of the feijoada carry the protein — and the feijoada's beans make it a complete protein on their own. As always, the cheapest cuts do the most work.",
  bonus: false,
  preciousThread: "A small piece of salt cod (bacalhau), flaked thin into the bolinhos for a festive touch.",
  engine: [
    "White rice — a big pot, the bed for the closing feijoada and beside every salgado (the constant base)",
    "Feijão — the daily pot of beans, built up this week into the long-simmered black-bean feijoada",
    "Farinha/farofa — toasted cassava flour, fried into the farofa that finishes the feijoada plate",
    "Refogado — the garlic-onion sofrito that seasons the feijoada pot and the salgado fillings",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "coxinhas — shredded-chicken croquettes fried golden, a tomato salad alongside", estCalories: 560, estProtein: 22 },
    { day: "Mon", dinner: "pastéis filled with cheese and the leftover chicken, rice and beans on the side", estCalories: 580, estProtein: 20 },
    { day: "Tue", dinner: "bolinho de bacalhau — salt-cod-and-potato fritters with a squeeze of lime, beans alongside", estCalories: 540, estProtein: 21 },
    { day: "Wed", dinner: "pão de queijo with a bowl of beans and a fried egg — the cheap mineiro supper", estCalories: 500, estProtein: 18 },
    { day: "Thu", dinner: "the feijoada gets started — black beans and smoked cuts onto a long simmer; tonight, beans and rice from the first ladle", estCalories: 560, estProtein: 23 },
    { day: "Fri", dinner: "weekend feijoada — the full black-bean-and-pork feast over rice, with farofa, couve and orange", estCalories: 620, estProtein: 26 },
    { day: "Sat", dinner: "zero-waste: feijoada-fried-rice and the last salgados — leftover feijoada, rice and farofa fried together, the final coxinha or pastel reheated", estCalories: 540, estProtein: 22 },
  ],
  shopping: [
    { item: "White rice", qty: "from the pantry sack", cost: 0.0, spansWeeks: true, note: "the bed for the feijoada" },
    { item: "Dried black beans", qty: "2 lb", cost: 3.0, spansWeeks: true, note: "the feijoada feast" },
    { item: "Smoked pork cuts (cheap ends, sausage, trimmings)", qty: "1.5 lb", cost: 5.0, note: "the feijoada's heart" },
    { item: "Chicken thighs (for coxinha)", qty: "1 lb", cost: 2.0 },
    { item: "Salt cod (bacalhau)", qty: "6 oz", cost: 4.0, note: "the precious thread — flaked through the bolinhos" },
    { item: "Potatoes", qty: "2 lb", cost: 1.5, note: "body for the bolinhos" },
    { item: "Wheat flour", qty: "2 lb", cost: 1.5, spansWeeks: true, note: "coxinha and pastel dough" },
    { item: "Tapioca/cassava starch (polvilho)", qty: "1 lb", cost: 2.5, note: "for the pão de queijo" },
    { item: "Cheese (queijo + parmesan)", qty: "8 oz", cost: 3.0 },
    { item: "Eggs", qty: "1 dozen", cost: 2.5 },
    { item: "Collard greens & oranges", qty: "1 bunch + 4", cost: 2.5, note: "the feijoada garnish" },
    { item: "Cassava flour (farinha)", qty: "from the pantry bag", cost: 0.0, spansWeeks: true },
    { item: "Onions & garlic", qty: "for the refogado", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const brazilianWeeks: WeekPlan[] = [
  brWeek1Feijao,
  brWeek2Moqueca,
  brWeek3Frango,
  brWeek4Carne,
  brWeek5Milho,
  brWeek6Caldos,
  brWeek7Festa,
];
