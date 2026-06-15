import type { WeekPlan } from "../types";

// Challenge — Vietnam: cơm nhà, the home rice table.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "vietnamese"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine.
//
// RULE #6 — the FOUNDATION is a constant present every week and lives in each
// week's `engine`, never as a theme: steamed rice, nước mắm fish sauce, the
// nước màu caramel / kho braise, and fresh herbs. The themes (kho, canh, xào,
// cơm tấm, đậu hũ & trứng, cháo & bún, cuốn & mắm) are facets of the meal you
// actually eat as that night's dinner — not the rice-and-fish-sauce base itself.
//
// Dinner slugs reference recipes in src/content/recipes/*.

export const vnWeek1Kho: WeekPlan = {
  slug: "vn-week-1-kho",
  number: 1,
  cuisine: "vietnamese",
  theme: "Kho",
  title: "Week 1 — Kho",
  description:
    "The clay-pot braise that anchors the home table. A small piece of meat or fish caramelized in nước màu and simmered down with fish sauce until salty-sweet and intense — a few ounces that season a whole pot of rice. This is how Vietnam eats less meat and more rice without ever feeling poor.",
  context:
    `Kho is poverty cooking engineered into a craft: a little protein darkened in burnt-sugar caramel (nước màu) and braised in fish sauce until it turns mahogany and almost too salty to eat alone — because it's meant to be eaten alone with rice, a sliver of meat flavoring three bites of grain. Fish sauce is the soul of the pot, the umami that lets a thin braise taste like abundance. Broken rice and herbs round the plate, and a quick pickle cuts the richness. Nothing is wasted: the braise deepens for days, and any leftover rice becomes morning cháo. The genius is restraint — the kho is salty on purpose so the rice does the eating.`,
  dishes: [
    "Thịt kho — pork (and often egg) in caramel and fish sauce",
    "Cá kho tộ — catfish braised dark in a clay pot",
    "Gà kho gừng — chicken braised with ginger",
    "Steamed rice, herbs, and a quick pickle alongside",
  ],
  proteinNote:
    "A few ounces of pork, fish, or chicken per person, salty enough to season a big bowl of rice; eggs braised in the same pot stretch the protein further.",
  bonus: false,
  preciousThread: "A piece of fatty pork belly for the thịt kho.",
  engine: [
    "com-trang — a pot of steamed rice, the constant base every night rests on",
    "nước màu — burn a small batch of caramel sauce; it darkens and sweetens every kho on the arc",
    "fish sauce (nước mắm) — the soul of the braise, seasoning every pot",
    "fresh herbs + a quick pickle — washed and ready to brighten each plate",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "thit-kho — pork and egg in caramel, over rice", estCalories: 700, estProtein: 28 },
    { day: "Mon", dinner: "thit-kho again, the pot deepened, with steamed greens", estCalories: 680, estProtein: 26 },
    { day: "Tue", dinner: "ca-kho-to — catfish braised dark in the clay pot, over rice", estCalories: 620, estProtein: 27 },
    { day: "Wed", dinner: "ga-kho-gung — ginger chicken kho, with rice and herbs", estCalories: 660, estProtein: 29 },
    { day: "Thu", dinner: "thit-kho with a fried egg and a quick cucumber pickle", estCalories: 690, estProtein: 25 },
    { day: "Fri", dinner: "ca-kho-to over rice, with rau muống on the side", estCalories: 630, estProtein: 26 },
    { day: "Sat", dinner: "the last of every kho pooled over rice — a zero-waste braise plate", estCalories: 700, estProtein: 27 },
  ],
  shopping: [
    { item: "Pork belly (for thịt kho)", qty: "~1 lb", cost: 3.5, note: "the precious thread — fat that flavors the whole pot" },
    { item: "Catfish or basa fillet (for cá kho)", qty: "~1 lb", cost: 3.5 },
    { item: "Chicken thighs (for gà kho)", qty: "~1 lb", cost: 2.5 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Jasmine rice", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the base under every dinner" },
    { item: "Fish sauce (nước mắm)", qty: "1 bottle", cost: 3.0, spansWeeks: true, note: "the soul — carries the whole arc" },
    { item: "Sugar (for nước màu caramel)", qty: "small bag", cost: 1.0, spansWeeks: true },
    { item: "Ginger + garlic + shallots", qty: "1 hand / 2 heads / a few", cost: 2.5, spansWeeks: true },
    { item: "Mixed herbs — cilantro, scallion, Thai basil", qty: "2 bunches", cost: 2.0 },
    { item: "Water spinach (rau muống)", qty: "1 bunch", cost: 1.5 },
    { item: "Cucumber + carrot (for quick pickle)", qty: "1 each", cost: 1.0 },
    { item: "Bird's-eye chili", qty: "a handful", cost: 0.5 },
    { item: "Black pepper + neutral oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const vnWeek2Canh: WeekPlan = {
  slug: "vn-week-2-canh",
  number: 2,
  cuisine: "vietnamese",
  theme: "Canh",
  title: "Week 2 — Canh",
  description:
    "The everyday soup that completes the rice plate. Canh is the light brothy bowl set beside rice at nearly every Vietnamese dinner — sweet-sour tamarind, garlicky greens, or silky pumpkin — the cheap, watery counterweight that makes a few spoonfuls of protein feel like a full meal.",
  context:
    `Canh is frugality made gentle: a thin, fragrant soup that turns a bowl of rice and a little kho into a complete dinner. A handful of greens, a tomato, a few shrimp or a knuckle of pork bone become a whole pot of soup that everyone shares. Fish sauce is the soul here too — a splash seasons the broth where salt alone would fall flat. The southern canh chua leans sweet-sour with tamarind and pineapple; the northern bowls are plainer, all garlic and greens. The plate is built to stretch: rice for fullness, kho for intensity, canh for refreshment, herbs for life — and tomorrow's rice becomes cháo, so nothing is lost.`,
  dishes: [
    "Canh chua — sweet-sour tamarind soup with a little fish",
    "Canh rau muống — water spinach in a clear garlicky broth",
    "Canh bí đỏ — silky pumpkin soup",
    "Steamed rice and a small kho alongside",
  ],
  proteinNote:
    "A little fish, shrimp, or pork bone seasons the broth; the protein floor is met by the kho and rice the canh accompanies, plus shrimp in the chua.",
  bonus: false,
  preciousThread: "A bag of small dried shrimp to deepen the broths.",
  engine: [
    "com-trang — steamed rice, the constant base under every bowl",
    "nước màu + a small kho — the salty braise that the canh refreshes against",
    "fish sauce (nước mắm) — the soul that seasons every broth",
    "fresh herbs — rice paddy herb, scallion, cilantro, washed and ready",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "canh-chua with fish, over rice, with a little thịt kho", estCalories: 640, estProtein: 26 },
    { day: "Mon", dinner: "canh-rau-muong and a fried egg over rice", estCalories: 580, estProtein: 18 },
    { day: "Tue", dinner: "canh-bi-do (pumpkin soup) with rice and kho", estCalories: 600, estProtein: 19 },
    { day: "Wed", dinner: "canh-chua again, leaning sour, over rice", estCalories: 630, estProtein: 25 },
    { day: "Thu", dinner: "canh-rau-muong with a small kho and rice", estCalories: 610, estProtein: 22 },
    { day: "Fri", dinner: "canh-bi-do with dried shrimp, over rice", estCalories: 590, estProtein: 20 },
    { day: "Sat", dinner: "a clear-out canh — every leftover green and the last kho in one pot over rice", estCalories: 620, estProtein: 21 },
  ],
  shopping: [
    { item: "Small dried shrimp", qty: "small bag", cost: 3.0, spansWeeks: true, note: "the precious thread — deepens every broth" },
    { item: "Catfish or basa fillet (for canh chua)", qty: "~3/4 lb", cost: 2.6 },
    { item: "Pork (for a small kho alongside)", qty: "~1/2 lb", cost: 1.8 },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Fish sauce (top up)", qty: "", cost: 1.0, spansWeeks: true },
    { item: "Tamarind paste + pineapple (for canh chua)", qty: "2 tbsp / 1 cup", cost: 1.5, spansWeeks: true },
    { item: "Kabocha or butternut pumpkin (for canh bí đỏ)", qty: "~2 lb", cost: 2.0 },
    { item: "Water spinach (rau muống)", qty: "2 bunches", cost: 3.0 },
    { item: "Tomatoes", qty: "~1 lb", cost: 1.5 },
    { item: "Garlic + shallots + ginger", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Mixed herbs — rice paddy herb, scallion, cilantro", qty: "2 bunches", cost: 2.0 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Sugar + chili + oil", qty: "", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 22,
  steadyStateWeekly: 15,
};

export const vnWeek3Xao: WeekPlan = {
  slug: "vn-week-3-xao",
  number: 3,
  cuisine: "vietnamese",
  theme: "Xào",
  title: "Week 3 — Xào",
  description:
    "The fast stir-fry that gets a green vegetable on the rice plate in minutes. Xào is a hot wok, a clove of garlic, a splash of fish sauce, and a bunch of whatever's cheapest — water spinach, tofu, a few slices of meat — the everyday way Vietnam eats its vegetables alongside rice.",
  context:
    `Xào is the weeknight workhorse: high heat, fast hands, almost nothing in the pan but a vegetable, garlic, and fish sauce. Rau muống xào tỏi — water spinach blistered with garlic — is the most beloved cheap dish in the country, a whole bunch of greens for pennies. A little meat or tofu sliced thin goes far when the wok does the work, seasoning a plate of rice rather than carrying it. Fish sauce is the soul again: a splash at the end gives a plain green dish savory depth. The plate stays balanced — rice for fullness, a kho or canh for the salty-brothy notes, and herbs raw on the side. Yesterday's rice fries up or simmers into cháo; nothing is thrown out.`,
  dishes: [
    "Rau muống xào tỏi — garlic water spinach",
    "Đậu hũ xào — tofu stir-fried with vegetables",
    "Thịt xào rau — thin-sliced meat stir-fried with greens",
    "Steamed rice and nước chấm alongside",
  ],
  proteinNote:
    "Tofu and a little thin-sliced pork or beef carry the protein; the greens are the volume. Fish sauce ties it to the rice.",
  bonus: false,
  preciousThread: "A head of fresh garlic and a good drizzle of sesame oil to finish.",
  engine: [
    "com-trang — steamed rice, the constant base every stir-fry sits beside",
    "nước màu + a small kho or canh — the braise/soup the dry xào is balanced against",
    "fish sauce (nước mắm) — the soul, splashed in to finish every wok",
    "fresh herbs + nước chấm — the raw, bright counter to the hot wok",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "rau-muong-xao-toi and a small kho over rice", estCalories: 600, estProtein: 20 },
    { day: "Mon", dinner: "dau-hu-xao (tofu and vegetables) over rice", estCalories: 580, estProtein: 22 },
    { day: "Tue", dinner: "thit-xao-rau — pork stir-fried with greens, over rice", estCalories: 660, estProtein: 28 },
    { day: "Wed", dinner: "rau-muong-xao-toi with a fried egg over rice", estCalories: 590, estProtein: 19 },
    { day: "Thu", dinner: "dau-hu-xao with a side of canh, over rice", estCalories: 600, estProtein: 23 },
    { day: "Fri", dinner: "thit-xao-rau with whatever greens are left, over rice", estCalories: 650, estProtein: 27 },
    { day: "Sat", dinner: "a clear-the-crisper xào — every vegetable and the last tofu, over rice", estCalories: 620, estProtein: 21 },
  ],
  shopping: [
    { item: "Garlic (heads) + sesame oil", qty: "3 heads / 1 small bottle", cost: 3.0, spansWeeks: true, note: "the precious thread — the soul of every wok" },
    { item: "Firm tofu", qty: "2 blocks", cost: 2.4 },
    { item: "Pork or beef, thin-sliced", qty: "~3/4 lb", cost: 3.0 },
    { item: "Water spinach (rau muống)", qty: "2 bunches", cost: 3.0 },
    { item: "Mixed cheap greens — bok choy, cabbage, gai lan", qty: "an armful", cost: 3.0 },
    { item: "Bean sprouts + carrot", qty: "", cost: 1.5 },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Fish sauce + oyster sauce (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Shallots + ginger + chili", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Mixed herbs — scallion, cilantro, Thai basil", qty: "2 bunches", cost: 2.0 },
    { item: "Eggs", qty: "1/2 dozen", cost: 1.5 },
    { item: "Lime + sugar + neutral oil", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 23,
  steadyStateWeekly: 16,
};

export const vnWeek4ComTam: WeekPlan = {
  slug: "vn-week-4-com-tam",
  number: 4,
  cuisine: "vietnamese",
  theme: "Cơm Tấm",
  title: "Week 4 — Cơm Tấm",
  description:
    "Broken rice — poverty by design. Cơm tấm was the fractured grains too small to sell, eaten by the poor and now beloved as Saigon's signature plate: a mound of broken rice under a grilled chop, a fried egg, pickles, and the scallion-oil and nước chấm that make it sing.",
  context:
    `Cơm tấm is the most literal poverty-by-design dish in the cuisine: tấm means the broken grains that fell through the mill, once too humble to sell, kept by farmers and the poor — and so good it became the pride of Saigon. The grain itself is the point: softer, cheaper, drinking up nước chấm. Over it goes whatever was affordable — a thin grilled pork chop (sườn nướng), a fried egg, leftover rice fried into cơm chiên, a shred of pork skin — all seasoned by fish sauce, the soul, in the dressing and the dip. Scallion oil and pickles do the work meat can't. And the broken rice fries up beautifully the next day, or simmers into cháo: nothing wasted, by tradition.`,
  dishes: [
    "Cơm tấm — broken rice under a fried egg and pickles",
    "Cơm chiên dương châu — leftover-rice fried rice",
    "Sườn nướng — lemongrass grilled pork chop",
    "Scallion oil, pickles, and nước chấm to dress",
  ],
  proteinNote:
    "A thin grilled chop or some fried-rice egg and pork per plate; the broken rice and dressings stretch a small portion of meat across a full dinner.",
  bonus: false,
  preciousThread: "A few thin-cut pork chops to marinate and grill for sườn nướng.",
  engine: [
    "broken rice (cơm tấm) — steam a big pot of the fractured grains, the constant base all week",
    "nước chấm + scallion oil (mỡ hành) — the fish-sauce dressings, the soul that flavors every plate",
    "a quick pickle (đồ chua) — carrot and daikon, ready to cut the richness",
    "fresh herbs + cucumber — the raw plate alongside",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "com-tam with suon-nuong, fried egg, and pickles", estCalories: 720, estProtein: 30 },
    { day: "Mon", dinner: "com-tam with the leftover grilled pork and scallion oil", estCalories: 690, estProtein: 27 },
    { day: "Tue", dinner: "com-chien-duong-chau — fried rice with egg and bits of pork", estCalories: 660, estProtein: 22 },
    { day: "Wed", dinner: "suon-nuong over fresh broken rice with đồ chua", estCalories: 700, estProtein: 29 },
    { day: "Thu", dinner: "com-tam with a fried egg, scallion oil, and pickles", estCalories: 620, estProtein: 18 },
    { day: "Fri", dinner: "com-chien-duong-chau clearing the fridge, with herbs", estCalories: 650, estProtein: 21 },
    { day: "Sat", dinner: "a final cơm tấm plate — the last chop, egg, and pickles over broken rice", estCalories: 700, estProtein: 26 },
  ],
  shopping: [
    { item: "Thin-cut pork chops (for sườn nướng)", qty: "~1 1/4 lb", cost: 4.0, note: "the precious thread — the grilled centerpiece" },
    { item: "Broken rice (cơm tấm)", qty: "5 lb bag", cost: 4.0, spansWeeks: true, note: "the poverty-by-design grain, the base all week" },
    { item: "Eggs", qty: "1 dozen", cost: 3.0 },
    { item: "Pork or shrimp (for fried rice)", qty: "~1/2 lb", cost: 1.8 },
    { item: "Lemongrass + shallots + garlic", qty: "for the marinade", cost: 2.0, spansWeeks: true },
    { item: "Carrot + daikon (for đồ chua pickle)", qty: "1 each", cost: 1.5 },
    { item: "Scallions (for mỡ hành)", qty: "2 bunches", cost: 1.5 },
    { item: "Cucumber + tomato", qty: "", cost: 1.5 },
    { item: "Fish sauce + sugar (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Peas + carrot (for fried rice)", qty: "1 cup", cost: 1.0 },
    { item: "Mixed herbs + lime + chili", qty: "", cost: 2.0 },
    { item: "Neutral oil", qty: "", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const vnWeek5DauHu: WeekPlan = {
  slug: "vn-week-5-dau-hu",
  number: 5,
  cuisine: "vietnamese",
  theme: "Đậu Hũ & Trứng",
  title: "Week 5 — Đậu Hũ & Trứng",
  description:
    "Tofu and eggs — the cheapest protein in the house. When there's no money for meat, a block of tofu and a few eggs carry the rice plate: tofu in tomato sauce, an omelet folded into rice, a steamed savory custard. Humble, fast, and beloved as comfort food.",
  context:
    `When the kho pot is empty and payday is far off, the Vietnamese home table leans on tofu and eggs — protein for cents, dressed up to feel like plenty. Đậu hũ sốt cà (fried tofu in tomato sauce) tastes far richer than its cost; trứng chiên (a fish-sauce omelet) folds into rice in minutes; trứng chưng (a steamed pork-and-egg custard) stretches one egg and a spoon of meat into a silky dish for the whole table. Fish sauce is the soul that lifts all three from bland to savory. A canh and rice round the plate, herbs and chili brighten it, and any leftover rice becomes cháo. This is frugality at its most everyday — and to many, the truest taste of home.`,
  dishes: [
    "Đậu hũ sốt cà — fried tofu in tomato sauce",
    "Trứng chiên — a fish-sauce omelet",
    "Trứng chưng — steamed savory pork-and-egg custard",
    "Steamed rice, canh, and herbs alongside",
  ],
  proteinNote:
    "Tofu and eggs are the whole protein engine this week — a block of tofu and a few eggs per plate clear the floor for almost nothing.",
  bonus: false,
  preciousThread: "A dozen good eggs and a couple of fresh tofu blocks.",
  engine: [
    "com-trang — steamed rice, the constant base every dish sits beside",
    "nước màu + a light canh — the sweet-salty and brothy notes the plate is built around",
    "fish sauce (nước mắm) — the soul, seasoning the tomato sauce, omelet, and custard",
    "fresh herbs + chili — the raw lift on every plate",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "dau-hu-sot-ca (tofu in tomato sauce) over rice", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "trung-chien (omelet) with rice and a canh", estCalories: 580, estProtein: 19 },
    { day: "Tue", dinner: "trung-chung — steamed pork-and-egg custard over rice", estCalories: 620, estProtein: 24 },
    { day: "Wed", dinner: "dau-hu-sot-ca again, with steamed greens and rice", estCalories: 590, estProtein: 21 },
    { day: "Thu", dinner: "trung-chien folded into rice with scallion and chili", estCalories: 570, estProtein: 18 },
    { day: "Fri", dinner: "trung-chung with a side of rau muống, over rice", estCalories: 610, estProtein: 23 },
    { day: "Sat", dinner: "a fridge-clearing plate — the last tofu and eggs, herbs, rice", estCalories: 600, estProtein: 20 },
  ],
  shopping: [
    { item: "Eggs", qty: "1 1/2 dozen", cost: 4.5, note: "the precious thread — the week's protein backbone" },
    { item: "Firm/soft tofu", qty: "3 blocks", cost: 3.6 },
    { item: "Ground pork (for trứng chưng)", qty: "~1/4 lb", cost: 1.2 },
    { item: "Tomatoes (for sốt cà)", qty: "~1 1/2 lb", cost: 2.0 },
    { item: "Dried wood-ear + glass noodles (for trứng chưng)", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Fish sauce + sugar (top up)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Scallions + shallots + garlic", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Water spinach or bok choy (for canh/greens)", qty: "2 bunches", cost: 2.5 },
    { item: "Mixed herbs + chili", qty: "2 bunches", cost: 2.0 },
    { item: "Neutral oil + black pepper", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 23,
  steadyStateWeekly: 15,
};

export const vnWeek6Chao: WeekPlan = {
  slug: "vn-week-6-chao",
  number: 6,
  cuisine: "vietnamese",
  theme: "Cháo & Bún",
  title: "Week 6 — Cháo & Bún",
  description:
    "The one-bowl meals that stretch a little the furthest. Cháo turns a handful of rice and a bone into a soothing porridge for the whole house; bún riêu and bánh canh build a fragrant noodle bowl on crab paste, tomato, and a pork bone — frugal feeding at its most generous.",
  context:
    `When rice and a few scraps must feed everyone, they become a bowl. Cháo — rice porridge, often made from the leftover rice that would otherwise go stale — simmers a knuckle of bone and a little chicken into comfort for the sick, the young, and the broke alike; it's the cuisine's purest no-waste dish. Bún riêu builds a tangy tomato broth around freshwater-crab paste and a pork bone, a few cents of shellfish flavoring a whole pot; bánh canh thickens a simple broth with tapioca-flour noodles into something that eats like a meal. Fish sauce is the soul of every broth. Herbs, sprouts, lime, and chili pile on top — the cheap bowl made abundant. Nothing is thrown away: stale rice is the porridge's whole reason for being.`,
  dishes: [
    "Cháo gà — chicken rice porridge (often from leftover rice)",
    "Bún riêu — tomato-crab vermicelli soup",
    "Bánh canh — thick tapioca-noodle soup",
    "Herbs, sprouts, lime, and chili to finish each bowl",
  ],
  proteinNote:
    "A little chicken, crab paste, and a pork bone season the broths; eggs and tofu round the protein in the bún bowls. The bone-and-scrap economy clears the floor cheaply.",
  bonus: false,
  preciousThread: "A jar of freshwater-crab paste (and shrimp paste) for bún riêu.",
  engine: [
    "com-trang — a pot of rice (and the leftover rice that becomes cháo), the constant base",
    "a pork-bone / chicken broth — the stock simmered from bones and scraps, the spine of every bowl",
    "fish sauce (nước mắm) — the soul, seasoning each broth",
    "fresh herbs + sprouts + lime — the raw heap that finishes every bowl",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "chao-ga — chicken rice porridge from the broth pot", estCalories: 560, estProtein: 24 },
    { day: "Mon", dinner: "bun-rieu — tomato-crab vermicelli soup", estCalories: 620, estProtein: 25 },
    { day: "Tue", dinner: "banh-canh — thick tapioca-noodle soup with the broth", estCalories: 640, estProtein: 22 },
    { day: "Wed", dinner: "chao-ga from leftover rice, with herbs and scallion", estCalories: 550, estProtein: 21 },
    { day: "Thu", dinner: "bun-rieu again, the broth deepened, with tofu", estCalories: 610, estProtein: 23 },
    { day: "Fri", dinner: "banh-canh with the last of the bone broth and an egg", estCalories: 630, estProtein: 22 },
    { day: "Sat", dinner: "a clear-out cháo — leftover rice, broth, and every scrap in one bowl", estCalories: 560, estProtein: 20 },
  ],
  shopping: [
    { item: "Freshwater-crab paste + shrimp paste (for bún riêu)", qty: "1 jar each", cost: 4.0, spansWeeks: true, note: "the precious thread — cents of shellfish flavor a whole pot" },
    { item: "Chicken (legs/carcass for broth + cháo)", qty: "~2 lb", cost: 4.0 },
    { item: "Pork bones (for stock)", qty: "~1 lb", cost: 2.0 },
    { item: "Rice vermicelli (bún)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Bánh canh / tapioca noodles", qty: "1 lb", cost: 2.0 },
    { item: "Jasmine rice", qty: "(from stock)", cost: 1.0, spansWeeks: true },
    { item: "Tomatoes (for bún riêu)", qty: "~1 1/2 lb", cost: 2.0 },
    { item: "Eggs + firm tofu", qty: "1/2 dozen / 1 block", cost: 2.7 },
    { item: "Bean sprouts + water spinach", qty: "", cost: 2.0 },
    { item: "Fish sauce (top up) + annatto oil", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Mixed herbs — rice paddy herb, perilla, sawtooth", qty: "2 bunches", cost: 2.0 },
    { item: "Shallots + garlic + ginger + lime + chili", qty: "", cost: 2.5, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 17,
};

export const vnWeek7Cuon: WeekPlan = {
  slug: "vn-week-7-cuon",
  number: 7,
  cuisine: "vietnamese",
  theme: "Cuốn & Mắm",
  title: "Week 7 — Cuốn & Mắm",
  description:
    "The wrap-and-dip finale. Everything the arc taught — herbs, a little protein, rice in every form, and the fermented sauces that are the soul of the table — comes together in food you assemble by hand: fresh rolls, a Hanoi tofu platter, sizzling crepes, and fried rolls, all dragged through mắm.",
  context:
    `The arc closes with the most communal way Vietnam eats: cuốn, the wrap, where a little protein disappears into a fistful of herbs and rice paper and is brought alive by mắm — the fermented fish and shrimp sauces that are the soul of the whole cuisine. Gỏi cuốn wraps a few shrimp and slivers of pork in herbs; bún đậu mắm tôm piles fried tofu and noodles to drag through whipped shrimp paste; bánh xèo folds a turmeric rice-flour crepe over sprouts; nem rán fries pork-and-vegetable rolls to a glassy crunch. Rice appears as paper, as vermicelli, as crepe — the grain in every guise. Herbs and pickles do the heavy lifting; nothing is wasted, and the table eats together with its hands. The feast and the everyday turn out to be the same plate, wrapped.`,
  dishes: [
    "Gỏi cuốn — fresh herb-and-shrimp summer rolls",
    "Bún đậu mắm tôm — fried tofu, noodles, and shrimp-paste dip",
    "Bánh xèo — crispy turmeric crepe with bean sprouts",
    "Nem rán — fried pork-and-vegetable spring rolls",
  ],
  proteinNote:
    "A little shrimp, pork, and tofu spread across rolls and crepes; herbs and rice make the volume, mắm makes the flavor — a small amount of protein feeds the whole table.",
  bonus: false,
  preciousThread: "A jar of mắm tôm (fermented shrimp paste) and a stack of rice paper.",
  engine: [
    "com-trang + rice vermicelli + rice paper — rice in every form, the constant base of the wraps",
    "nước chấm + mắm tôm — the fish- and shrimp-sauce dips, the soul dragged through everything",
    "the fresh herb plate — mint, perilla, cilantro, Thai basil, lettuce, washed and piled",
    "a quick pickle (đồ chua) — to cut the fried richness",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "goi-cuon — fresh summer rolls with shrimp, pork, and herbs", estCalories: 560, estProtein: 24 },
    { day: "Mon", dinner: "bun-dau-mam-tom — fried tofu, noodles, herbs, shrimp-paste dip", estCalories: 620, estProtein: 22 },
    { day: "Tue", dinner: "banh-xeo — crispy turmeric crepes wrapped in lettuce and herbs", estCalories: 640, estProtein: 20 },
    { day: "Wed", dinner: "nem-ran — fried spring rolls with vermicelli and nước chấm", estCalories: 660, estProtein: 23 },
    { day: "Thu", dinner: "goi-cuon again, using up the poached pork and shrimp", estCalories: 560, estProtein: 23 },
    { day: "Fri", dinner: "banh-xeo with the last of the sprouts, herbs, and nước chấm", estCalories: 640, estProtein: 19 },
    { day: "Sat", dinner: "a wrap-it-all-up platter — leftover rolls, crepe, tofu, herbs, and every dip", estCalories: 650, estProtein: 22 },
  ],
  shopping: [
    { item: "Fermented shrimp paste (mắm tôm)", qty: "1 jar", cost: 2.0, spansWeeks: true, note: "the precious thread — the soul of the platter" },
    { item: "Rice paper (bánh tráng)", qty: "2 packs", cost: 2.0, spansWeeks: true },
    { item: "Shrimp", qty: "~3/4 lb", cost: 4.5 },
    { item: "Pork — belly + ground", qty: "~1 lb total", cost: 3.0 },
    { item: "Firm tofu", qty: "2 blocks", cost: 2.4 },
    { item: "Rice vermicelli (bún)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Rice flour + cornstarch + turmeric (for bánh xèo)", qty: "", cost: 1.5, spansWeeks: true },
    { item: "Coconut milk", qty: "1 can", cost: 1.2, spansWeeks: true },
    { item: "Bean sprouts", qty: "1 lb", cost: 1.5 },
    { item: "Dried wood-ear + glass noodles (for nem rán)", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Leaf lettuce + mixed herbs — mint, perilla, cilantro, Thai basil", qty: "a big haul", cost: 4.0 },
    { item: "Carrot + daikon + cucumber (for đồ chua)", qty: "", cost: 1.5 },
    { item: "Fish sauce + sugar + lime + garlic + chili (top up)", qty: "", cost: 2.0, spansWeeks: true },
    { item: "Neutral oil (for frying)", qty: "", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 20,
};

export const vietnameseWeeks: WeekPlan[] = [
  vnWeek1Kho,
  vnWeek2Canh,
  vnWeek3Xao,
  vnWeek4ComTam,
  vnWeek5DauHu,
  vnWeek6Chao,
  vnWeek7Cuon,
];
