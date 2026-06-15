import type { WeekPlan } from "../types";

// Challenge — Japan: washoku frugality, "one cucina povera dinner a night."
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "japanese"; the engine is
// cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// composes variations on top of the same recipe pool.
//
// RULE #6: the FOUNDATION — steamed rice, miso, dashi, tofu/soy, and a crock of
// tsukemono pickles — is the constant that lives every week. It is NEVER a theme;
// it is the base the themed dinners sit on. Each WeekPlan's `engine` carries that
// foundation. The DINNER model means no breakfast/lunch fields; Sun is the cook
// day, Sat is the zero-waste day.

export const jpWeek1Miso: WeekPlan = {
  slug: "jp-week-1-miso",
  number: 1,
  cuisine: "japanese",
  theme: "Misoshiru & Miso",
  title: "Week 1 — Misoshiru & Miso",
  description:
    "Start at the soul of the table: miso. A bowl of misoshiru anchors the everyday meal, and the same fermented soybean paste glazes eggplant into nasu dengaku and simmers mackerel into saba misoni. One cheap crock of paste seasons a whole week of dinners.",
  context:
    `Washoku frugality begins with the soybean, and miso is the soybean at its most useful — fermented into a paste that keeps for a year and seasons everything. A bowl of misoshiru is the daily reset: dashi, a spoon of miso whisked in off the boil, tofu and seaweed bobbing in it. The mottainai habit runs underneath — the okara left from making tofu becomes unohana, the last cold rice becomes ochazuke, nothing is thrown out. Nuka pickles ferment in their bran crock on the counter, turning yesterday's vegetable trimmings into tomorrow's tsukemono. From one paste and one pot of dashi, an entire frugal week of dinners takes its umami spine.`,
  dishes: [
    "Misoshiru — the daily miso soup",
    "Nasu dengaku — miso-glazed broiled eggplant",
    "Saba misoni — mackerel simmered in miso",
    "Tofu and wakame in the soup pot",
  ],
  proteinNote:
    "Tofu in the misoshiru, oily mackerel in the saba misoni, and soybeans in the miso itself carry the floor — meat is barely needed.",
  bonus: false,
  preciousThread: "A tin of oily mackerel (or a fresh fillet) for the saba misoni.",
  engine: [
    "Steamed short-grain rice — a big pot Sunday, reheated all week (the constant base)",
    "Dashi — kombu + bonito, a jar in the fridge to power every soup and simmer",
    "Miso + tofu/soy — the week's seasoning crock and a block or two of tofu",
    "Tsukemono — start or refresh the nuka pickle crock with this week's trimmings",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "misoshiru with tofu and wakame, rice, and a saba misoni simmer", estCalories: 640, estProtein: 26 },
    { day: "Mon", dinner: "nasu-dengaku (miso-glazed eggplant) with rice and misoshiru", estCalories: 560, estProtein: 16 },
    { day: "Tue", dinner: "saba-misoni with rice, misoshiru, and tsukemono", estCalories: 680, estProtein: 28 },
    { day: "Wed", dinner: "tofu and daikon misoshiru, rice, and a pickle plate", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "nasu-dengaku again with a poached egg and rice", estCalories: 600, estProtein: 19 },
    { day: "Fri", dinner: "saba-misoni over rice with greens and misoshiru", estCalories: 660, estProtein: 27 },
    { day: "Sat", dinner: "zero-waste: ochazuke — green tea and dashi over the week's cold rice, with pickle scraps and flaked mackerel", estCalories: 520, estProtein: 17 },
  ],
  shopping: [
    { item: "Short-grain (japonica) rice", qty: "5 lb", cost: 5.0, note: "the base under every dinner" },
    { item: "Miso paste", qty: "1 lb tub", cost: 4.0, spansWeeks: true, note: "the week's seasoning crock" },
    { item: "Kombu + bonito flakes (for dashi)", qty: "starter packs", cost: 4.0, spansWeeks: true },
    { item: "Firm/silken tofu", qty: "2 blocks", cost: 3.0 },
    { item: "Mackerel (tinned or fresh)", qty: "~3/4 lb", cost: 3.5, note: "the precious thread" },
    { item: "Japanese eggplant", qty: "3–4", cost: 2.5 },
    { item: "Daikon", qty: "1", cost: 1.5 },
    { item: "Wakame (dried seaweed)", qty: "small bag", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Scallions + greens", qty: "1 bunch + 1", cost: 2.0 },
    { item: "Rice bran (nuka) for the pickle crock", qty: "1 bag", cost: 2.5, spansWeeks: true },
    { item: "Soy sauce + mirin + sugar", qty: "bottles", cost: 4.0, spansWeeks: true },
    { item: "Green tea (for ochazuke)", qty: "1 box", cost: 2.0, spansWeeks: true },
    { item: "Nori", qty: "1 pack", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const jpWeek2Donburi: WeekPlan = {
  slug: "jp-week-2-donburi",
  number: 2,
  cuisine: "japanese",
  theme: "Donburi",
  title: "Week 2 — Donburi",
  description:
    "A bowl of rice with something good cooked on top — the donburi is frugal genius: a little chicken and egg, a few slices of pork, a sweet-savory simmer poured over rice feeds a person fully. Oyakodon, butadon, and tamago-don all stretch a small protein across a big bowl.",
  context:
    `The donburi is the proof that washoku stretches a scrap of protein further than any cuisine. A bowl of steamed rice is the canvas; over it goes whatever small thing the simmering pot of dashi, soy, and mirin can transform — chicken and egg (oyakodon, "parent and child"), a few slices of pork (butadon), or just egg over rice (tamago-don). The dashi spine does the heavy lifting, so a quarter-pound of meat seasons a meal for two. Mottainai threads through: the last cold rice becomes ochazuke, the okara from the tofu maker becomes unohana, and the nuka crock keeps turning trimmings into pickles. The soybean is everywhere — in the soy, the tofu, the miso soup beside the bowl.`,
  dishes: [
    "Oyakodon — chicken and egg over rice",
    "Butadon — sweet-savory simmered pork over rice",
    "Tamago-don — egg donburi when the budget is thinnest",
    "Misoshiru and tsukemono alongside",
  ],
  proteinNote:
    "Egg and a little chicken or pork over rice clear the floor; tamago-don shows the floor holds on egg and soy alone.",
  bonus: false,
  preciousThread: "A few slices of pork belly for the butadon.",
  engine: [
    "Steamed short-grain rice — the donburi canvas, a big pot Sunday (the constant base)",
    "Dashi — the simmer base for every bowl's sweet-savory sauce",
    "Miso + tofu/soy — misoshiru beside every donburi and soy for the simmers",
    "Tsukemono — the nuka crock, a sharp pickle to cut the rich bowls",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "oyakodon — chicken and egg over rice, with misoshiru", estCalories: 700, estProtein: 28 },
    { day: "Mon", dinner: "butadon — simmered pork over rice with pickles", estCalories: 720, estProtein: 26 },
    { day: "Tue", dinner: "tamago-don — soft egg donburi with misoshiru", estCalories: 600, estProtein: 18 },
    { day: "Wed", dinner: "oyakodon again, with extra onion and a green", estCalories: 690, estProtein: 27 },
    { day: "Thu", dinner: "butadon with shaved cabbage and tsukemono", estCalories: 710, estProtein: 25 },
    { day: "Fri", dinner: "tamago-don topped with scallion and nori, misoshiru", estCalories: 620, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: ochazuke over the week's cold rice with leftover simmered pork and pickle ends", estCalories: 560, estProtein: 20 },
  ],
  shopping: [
    { item: "Short-grain rice", qty: "5 lb", cost: 5.0, note: "the donburi base" },
    { item: "Chicken thigh", qty: "~3/4 lb", cost: 3.0 },
    { item: "Pork belly / thin pork slices", qty: "~3/4 lb", cost: 4.0, note: "the precious thread" },
    { item: "Eggs", qty: "1 1/2 dozen", cost: 4.0, note: "the bowls run on egg" },
    { item: "Onions", qty: "3", cost: 1.5 },
    { item: "Tofu", qty: "1 block", cost: 1.5 },
    { item: "Miso (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Dashi top-up (kombu/bonito)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Cabbage + scallions + greens", qty: "1/2 head + 1 bunch", cost: 2.5 },
    { item: "Soy sauce + mirin + sugar (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Nuka crock vegetables / top-up bran", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Nori + green tea (top up)", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 19,
};

export const jpWeek3Nimono: WeekPlan = {
  slug: "jp-week-3-nimono",
  number: 3,
  cuisine: "japanese",
  theme: "Nimono",
  title: "Week 3 — Nimono",
  description:
    "The simmered dishes — the gentle, sweet-savory pot of vegetables and a little meat that defines home cooking. Nikujaga softens potatoes with thin beef; kabocha and hijiki and kiriboshi daikon simmer humble vegetables and dried goods into deep, frugal, make-ahead dinners.",
  context:
    `Nimono — things simmered slowly in dashi, soy, mirin, and a little sugar — is the quiet heart of the home kitchen, and the most frugal technique in it. Dried goods that cost almost nothing rehydrate into full dishes: hijiki seaweed, kiriboshi daikon (sun-dried radish strips), shiitake. A handful of thin beef turns a pot of potatoes into nikujaga; kabocha squash simmers into sweetness on its own. These dishes deepen overnight, so they're cooked ahead and eaten across days. Dashi is the umami spine of all of it, and the niban-dashi — the gentle second stock from already-used kombu and bonito — simmers the milder vegetables. Mottainai runs through: okara becomes unohana, cold rice becomes ochazuke, nuka pickles keep fermenting.`,
  dishes: [
    "Nikujaga — beef-and-potato simmer",
    "Kabocha no nimono — simmered squash",
    "Hijiki no nimono — simmered hijiki seaweed",
    "Kiriboshi daikon — simmered dried radish",
  ],
  proteinNote:
    "Thin beef in the nikujaga, soybeans in the hijiki simmer (with aburaage), and the constant tofu/miso carry the floor.",
  bonus: false,
  preciousThread: "A few ounces of thinly sliced beef for the nikujaga.",
  engine: [
    "Steamed short-grain rice — a big pot Sunday, the base under every simmer (the constant)",
    "Dashi + niban-dashi — the second stock simmers the gentle vegetable nimono",
    "Miso + tofu/soy — misoshiru beside each plate; aburaage for the hijiki",
    "Tsukemono — the nuka crock, a pickle on every tray",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "nikujaga (beef and potato simmer), rice, and misoshiru", estCalories: 680, estProtein: 24 },
    { day: "Mon", dinner: "kabocha-no-nimono with rice, tofu, and tsukemono", estCalories: 560, estProtein: 16 },
    { day: "Tue", dinner: "hijiki-no-nimono with aburaage, rice, and misoshiru", estCalories: 580, estProtein: 18 },
    { day: "Wed", dinner: "kiriboshi-daikon simmer with rice and a grilled fish scrap", estCalories: 600, estProtein: 20 },
    { day: "Thu", dinner: "nikujaga again, deepened overnight, with rice", estCalories: 690, estProtein: 24 },
    { day: "Fri", dinner: "a nimono tray — kabocha, hijiki, kiriboshi together over rice", estCalories: 620, estProtein: 19 },
    { day: "Sat", dinner: "zero-waste: zosui — the week's leftover simmer liquids and cold rice into a savory rice soup with egg", estCalories: 560, estProtein: 18 },
  ],
  shopping: [
    { item: "Short-grain rice", qty: "5 lb", cost: 5.0 },
    { item: "Thin-sliced beef", qty: "~1/2 lb", cost: 4.0, note: "the precious thread" },
    { item: "Potatoes + onions", qty: "~2 lb + 2", cost: 2.5 },
    { item: "Kabocha squash", qty: "1 small", cost: 3.0 },
    { item: "Dried hijiki", qty: "small bag", cost: 3.0, spansWeeks: true },
    { item: "Kiriboshi daikon (dried radish)", qty: "small bag", cost: 2.5, spansWeeks: true },
    { item: "Aburaage (fried tofu pouches)", qty: "1 pack", cost: 2.0 },
    { item: "Carrots", qty: "1 lb", cost: 1.0 },
    { item: "Tofu", qty: "1 block", cost: 1.5 },
    { item: "Dashi + miso (top up)", qty: "", cost: 3.0, spansWeeks: true },
    { item: "Soy / mirin / sugar (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Eggs + scallions", qty: "1/2 dozen + 1 bunch", cost: 2.0 },
    { item: "Nuka crock top-up + nori", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 19,
};

export const jpWeek4Tofu: WeekPlan = {
  slug: "jp-week-4-tofu",
  number: 4,
  cuisine: "japanese",
  theme: "Tofu",
  title: "Week 4 — Tofu",
  description:
    "The soybean in its purest, cheapest, most protein-dense form. Cold hiyayakko needs no cooking; agedashi-dofu crisps it in a dashi pool; unohana uses the okara that tofu-making leaves behind; mabo-dofu stretches a little pork across a whole spicy braise. A block of tofu is a week of dinners.",
  context:
    `Tofu is the frugal protein the whole cuisine leans on — cheap, complete, and endlessly adaptable. In summer it needs no cooking at all: hiyayakko is a chilled block topped with ginger, bonito, and soy. Agedashi-dofu fries it lightly and floats it in seasoned dashi. And unohana is the purest mottainai dish there is — it's made from okara, the soy pulp left over when tofu is pressed, simmered with vegetables into a savory side that would otherwise be discarded. Mabo-dofu stretches a few ounces of pork across a whole pan of silken tofu. The dashi spine seasons it all, the nuka pickles keep fermenting, and cold rice still becomes ochazuke. The soybean appears as tofu, as aburaage, as okara, as miso, as soy — one bean, a dozen forms.`,
  dishes: [
    "Hiyayakko — chilled tofu with ginger and bonito",
    "Agedashi-dofu — crisp tofu in dashi",
    "Unohana — simmered okara (the zero-waste tofu by-product)",
    "Mabo-dofu — silken tofu in a little spicy pork braise",
  ],
  proteinNote:
    "Tofu and okara are protein-dense soy; a few ounces of pork in mabo-dofu is seasoning, not the source.",
  bonus: false,
  preciousThread: "A nub of ground pork and a spoon of doubanjiang for the mabo-dofu.",
  engine: [
    "Steamed short-grain rice — the base under every tofu plate (the constant)",
    "Dashi — the pool for agedashi-dofu and the soup beside each meal",
    "Miso + tofu/soy — extra tofu this week; okara saved for unohana",
    "Tsukemono — the nuka crock, a pickle on every tray",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "agedashi-dofu in dashi, rice, and misoshiru", estCalories: 580, estProtein: 20 },
    { day: "Mon", dinner: "mabo-dofu over rice with a green and tsukemono", estCalories: 700, estProtein: 26 },
    { day: "Tue", dinner: "hiyayakko (chilled tofu) with rice, misoshiru, and grilled fish scrap", estCalories: 560, estProtein: 22 },
    { day: "Wed", dinner: "unohana (simmered okara) with rice and a poached egg", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "mabo-dofu again, leftover braise stretched with more tofu", estCalories: 690, estProtein: 25 },
    { day: "Fri", dinner: "agedashi-dofu with grated daikon, rice, and misoshiru", estCalories: 590, estProtein: 20 },
    { day: "Sat", dinner: "zero-waste: unohana from the week's okara plus ochazuke over cold rice", estCalories: 540, estProtein: 19 },
  ],
  shopping: [
    { item: "Short-grain rice", qty: "5 lb", cost: 5.0 },
    { item: "Tofu (firm + silken)", qty: "4 blocks", cost: 6.0, note: "the week's protein bank" },
    { item: "Okara (soy pulp, or extra to press)", qty: "1 tub", cost: 1.5, note: "for unohana — usually nearly free" },
    { item: "Ground pork", qty: "~1/4 lb", cost: 1.5, note: "the precious thread" },
    { item: "Doubanjiang (spicy bean paste)", qty: "1 jar", cost: 3.0, spansWeeks: true },
    { item: "Ginger + scallions", qty: "1 hand + 1 bunch", cost: 2.0, spansWeeks: true },
    { item: "Carrots + dried shiitake (for unohana)", qty: "1 lb + small bag", cost: 2.5, spansWeeks: true },
    { item: "Daikon", qty: "1", cost: 1.5 },
    { item: "Potato starch (for agedashi)", qty: "1 bag", cost: 2.0, spansWeeks: true },
    { item: "Eggs + greens", qty: "1/2 dozen + 1", cost: 2.0 },
    { item: "Dashi + miso (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Soy / mirin (top up) + nuka + nori", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 18,
};

export const jpWeek5Takikomi: WeekPlan = {
  slug: "jp-week-5-takikomi",
  number: 5,
  cuisine: "japanese",
  theme: "Takikomi & Ochazuke",
  title: "Week 5 — Takikomi & Ochazuke",
  description:
    "Rice that is itself the dish. Takikomi gohan cooks rice in seasoned dashi with vegetables and a little meat so every grain carries flavor; kayaku gohan is its mixed-in cousin; and ochazuke pours tea and dashi over leftover rice to close the loop — the mottainai dish that turns the last cold bowl into dinner.",
  context:
    `When rice is cooked in seasoned dashi rather than plain water, it becomes the meal itself — takikomi gohan, studded with mushrooms, aburaage, carrot, and a little chicken, every grain flavored from the pot up. Kayaku gohan is the same idea, the add-ins folded through. It's deeply frugal: a small amount of protein and a handful of vegetables flavor a whole pot of the cheapest staple there is. And the loop closes with ochazuke — green tea or hot dashi poured over leftover cold rice with a few toppings, the canonical mottainai dish, dinner made from what would otherwise be thrown out. The soybean is in the aburaage and soy and the miso soup beside it; the nuka crock keeps turning trimmings into pickles; the niban-dashi second stock cooks the gentler pots.`,
  dishes: [
    "Takikomi gohan — rice cooked in seasoned dashi with vegetables",
    "Ochazuke — tea/dashi over leftover rice (the mottainai dish)",
    "Kayaku gohan — the mixed-rice cousin",
    "Misoshiru and tsukemono alongside",
  ],
  proteinNote:
    "Aburaage and a little chicken in the takikomi, tofu in the misoshiru, and egg over ochazuke carry the floor.",
  bonus: false,
  preciousThread: "A handful of chicken thigh and a few dried shiitake for the takikomi.",
  engine: [
    "Steamed short-grain rice — and the seasoned takikomi pot; the constant base, here the star",
    "Dashi + niban-dashi — the cooking liquid for the rice and the pour for ochazuke",
    "Miso + tofu/soy — aburaage in the rice, misoshiru beside it",
    "Tsukemono — the nuka crock, the classic ochazuke topping",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "takikomi-gohan (chicken, shiitake, aburaage) with misoshiru", estCalories: 660, estProtein: 24 },
    { day: "Mon", dinner: "kayaku-gohan with a poached egg and tsukemono", estCalories: 620, estProtein: 20 },
    { day: "Tue", dinner: "takikomi-gohan again with grilled fish and misoshiru", estCalories: 680, estProtein: 26 },
    { day: "Wed", dinner: "ochazuke over fresh rice with salmon flakes and nori", estCalories: 560, estProtein: 22 },
    { day: "Thu", dinner: "kayaku-gohan with tofu and a green", estCalories: 600, estProtein: 19 },
    { day: "Fri", dinner: "takikomi-gohan, the last of the pot, with misoshiru and pickles", estCalories: 650, estProtein: 23 },
    { day: "Sat", dinner: "zero-waste: ochazuke — green tea and dashi over the week's cold rice, pickle ends and any fish flakes", estCalories: 540, estProtein: 18 },
  ],
  shopping: [
    { item: "Short-grain rice", qty: "5 lb", cost: 5.0, note: "the star this week — cooked in dashi" },
    { item: "Chicken thigh", qty: "~1/2 lb", cost: 2.5, note: "the precious thread" },
    { item: "Dried shiitake", qty: "small bag", cost: 3.0, spansWeeks: true },
    { item: "Aburaage (fried tofu pouches)", qty: "1 pack", cost: 2.0 },
    { item: "Carrots + burdock (gobo) if available", qty: "1 lb + 1", cost: 2.0 },
    { item: "Salmon (a fillet to flake) or salted salmon", qty: "~1/3 lb", cost: 3.0 },
    { item: "Tofu", qty: "1 block", cost: 1.5 },
    { item: "Eggs + greens + scallions", qty: "1/2 dozen + 1 + 1 bunch", cost: 2.5 },
    { item: "Green tea (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Dashi + miso (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Soy / mirin (top up) + nuka + nori", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const jpWeek6Tamago: WeekPlan = {
  slug: "jp-week-6-tamago",
  number: 6,
  cuisine: "japanese",
  theme: "Tamago",
  title: "Week 6 — Tamago",
  description:
    "The egg — cheap, complete protein, and infinitely gentle. Tamagoyaki rolls it into a sweet-savory layered omelette; chawanmushi steams it into a silky savory custard around dashi; omurice wraps a thin omelette around a bowl of fried rice. A carton of eggs is a week of full dinners.",
  context:
    `The egg is the frugal cook's other great protein, and washoku treats it with reverence. Tamagoyaki is a sweet-savory omelette rolled in thin layers in a small pan — technique, not expense. Chawanmushi is the most economical luxury imaginable: one egg whisked into three parts dashi and steamed into a silky savory custard, hiding a few scraps of chicken, shiitake, and a ginkgo nut at the bottom. Omurice wraps a thin omelette around fried rice — a Western-touched dish that's pure leftover-rice thrift. The egg leans on the dashi spine and the soy beside it, and the cycle holds: okara becomes unohana, cold rice becomes ochazuke, the nuka crock keeps pickling. One carton of eggs, a pot of dashi, and yesterday's rice make a week.`,
  dishes: [
    "Tamagoyaki — rolled layered omelette",
    "Chawanmushi — steamed savory egg custard",
    "Omurice — omelette over fried rice",
    "Misoshiru and tsukemono alongside",
  ],
  proteinNote:
    "Egg is the protein all week, with tofu in the misoshiru and a few scraps of chicken in the chawanmushi and omurice.",
  bonus: false,
  preciousThread: "A handful of small shrimp or chicken to hide in the chawanmushi.",
  engine: [
    "Steamed short-grain rice — the base, and the fried rice inside the omurice (the constant)",
    "Dashi — the body of the chawanmushi custard and the soup beside each plate",
    "Miso + tofu/soy — misoshiru daily; soy and mirin season the tamago",
    "Tsukemono — the nuka crock, a sharp pickle against the soft eggs",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "chawanmushi (steamed egg custard) with rice and misoshiru", estCalories: 560, estProtein: 22 },
    { day: "Mon", dinner: "omurice — thin omelette over ketchup fried rice with a green", estCalories: 700, estProtein: 20 },
    { day: "Tue", dinner: "tamagoyaki with rice, grilled fish scrap, and tsukemono", estCalories: 600, estProtein: 22 },
    { day: "Wed", dinner: "chawanmushi again with extra chicken and shiitake, rice", estCalories: 580, estProtein: 24 },
    { day: "Thu", dinner: "omurice with the week's leftover vegetables folded in", estCalories: 690, estProtein: 19 },
    { day: "Fri", dinner: "tamagoyaki and tofu, rice, and misoshiru", estCalories: 580, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: ochazuke over cold rice topped with a strip of leftover tamagoyaki and pickle ends", estCalories: 520, estProtein: 18 },
  ],
  shopping: [
    { item: "Short-grain rice", qty: "5 lb", cost: 5.0 },
    { item: "Eggs", qty: "2 dozen", cost: 5.0, note: "the protein bank this week" },
    { item: "Chicken thigh or small shrimp (for chawanmushi)", qty: "~1/3 lb", cost: 2.5, note: "the precious thread" },
    { item: "Dried shiitake", qty: "small bag", cost: 2.0, spansWeeks: true },
    { item: "Tofu", qty: "1 block", cost: 1.5 },
    { item: "Onion + peas + mixed vegetables (for omurice)", qty: "1 + small bag", cost: 2.5 },
    { item: "Ketchup", qty: "1 bottle", cost: 2.0, spansWeeks: true },
    { item: "Greens + scallions", qty: "1 + 1 bunch", cost: 2.0 },
    { item: "Dashi + miso (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Soy / mirin / sugar (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Nuka crock top-up + nori + green tea", qty: "", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 19,
};

export const jpWeek7Nabe: WeekPlan = {
  slug: "jp-week-7-nabe",
  number: 7,
  cuisine: "japanese",
  theme: "Nabe & Zosui",
  title: "Week 7 — Nabe & Zosui",
  description:
    "The communal pot, and the meal it leaves behind. Yosenabe gathers tofu, vegetables, and a little fish in dashi at the table; ojiya turns the rich leftover broth into a soft rice porridge; zosui simmers rice loose in dashi any night at all. The pot and its second life — the perfect frugal finale.",
  context:
    `The nabe is the warm communal close of the arc and a small lesson in thrift on its own. Yosenabe — "gathered hot-pot" — is built to swallow odds and ends: a block of tofu, the vegetables nearing their end, a little fish or chicken, all simmered in dashi at the table. And the genius is what comes after: the broth left in the pot, deepened by everything cooked in it, becomes ojiya the next night — leftover rice simmered with egg into a soft savory porridge. Zosui is the same idea unbound from the pot, rice loose in dashi any night. Nothing is wasted: the okara is already unohana, the cold rice is ochazuke or zosui, the nuka crock keeps fermenting. The soybean spine — tofu, miso, soy — and the dashi umami carry the whole pot, as they have all seven weeks.`,
  dishes: [
    "Yosenabe — gathered hot-pot of tofu, vegetables, and a little fish",
    "Ojiya — rice porridge in the leftover nabe broth",
    "Zosui — savory rice soup any night",
    "Misoshiru and tsukemono alongside",
  ],
  proteinNote:
    "Tofu and a little fish or chicken in the nabe, then egg in the ojiya and zosui — the floor holds on soy and egg with meat as seasoning.",
  bonus: false,
  preciousThread: "A piece of fish (cod or a salmon collar) to deepen the yosenabe broth.",
  engine: [
    "Steamed short-grain rice — the base, and the body of ojiya and zosui (the constant)",
    "Dashi — the broth of the nabe and the soup beside each plate",
    "Miso + tofu/soy — tofu the heart of the nabe; misoshiru daily",
    "Tsukemono — the nuka crock, a sharp pickle against the brothy pots",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "yosenabe — tofu, cabbage, mushroom, and a little fish in dashi, with rice", estCalories: 640, estProtein: 26 },
    { day: "Mon", dinner: "ojiya — the leftover nabe broth and rice simmered with egg", estCalories: 560, estProtein: 20 },
    { day: "Tue", dinner: "zosui with tofu, greens, and egg, with tsukemono", estCalories: 580, estProtein: 20 },
    { day: "Wed", dinner: "a second smaller yosenabe with the midweek vegetable ends", estCalories: 620, estProtein: 24 },
    { day: "Thu", dinner: "ojiya again from the second pot's broth, with scallion and nori", estCalories: 560, estProtein: 19 },
    { day: "Fri", dinner: "zosui loaded with greens and mushrooms, misoshiru alongside", estCalories: 580, estProtein: 18 },
    { day: "Sat", dinner: "zero-waste: zosui from every last scrap of rice, broth, tofu, and vegetable in the kitchen", estCalories: 560, estProtein: 19 },
  ],
  shopping: [
    { item: "Short-grain rice", qty: "5 lb", cost: 5.0 },
    { item: "Tofu (firm)", qty: "3 blocks", cost: 4.5, note: "the heart of the nabe" },
    { item: "Fish (cod, salmon collar) or chicken thigh", qty: "~3/4 lb", cost: 4.0, note: "the precious thread" },
    { item: "Napa cabbage", qty: "1 head", cost: 2.5 },
    { item: "Mushrooms (shiitake / enoki)", qty: "2 packs", cost: 3.0 },
    { item: "Carrots + daikon", qty: "1 lb + 1", cost: 2.0 },
    { item: "Eggs", qty: "1 dozen", cost: 3.0, note: "for the ojiya and zosui" },
    { item: "Greens + scallions", qty: "1 bunch + 1 bunch", cost: 2.5 },
    { item: "Ponzu (for the nabe dip)", qty: "1 bottle", cost: 2.5, spansWeeks: true },
    { item: "Dashi + miso (top up)", qty: "", cost: 2.5, spansWeeks: true },
    { item: "Soy / mirin (top up) + nuka + nori", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 19,
};

export const japaneseWeeks: WeekPlan[] = [
  jpWeek1Miso,
  jpWeek2Donburi,
  jpWeek3Nimono,
  jpWeek4Tofu,
  jpWeek5Takikomi,
  jpWeek6Tamago,
  jpWeek7Nabe,
];
