import type { WeekPlan } from "../types";

// Challenge — Portugal: cozinha pobre.
// The full seven-week arc, every week built out into an executable WeekPlan
// (engine + 7 days + costed shopping list). cuisine is "portuguese"; the engine
// is cuisine-agnostic, so these slot into the shared content arrays, tagged by
// cuisine. These are the curated, pregenerated defaults — the AI menu generator
// lets users compose variations on top of the same recipe pool.
//
// The foundation never becomes a theme: bread/broa, olive oil, salt cod, beans,
// and the refogado base live in each week's `engine`, present every week, never
// a week of their own. The themes ride on top — bacalhau, açorda, sopas, feijão,
// sardinhas, arroz, cozido — each a dinner you actually eat.

export const ptWeek1Bacalhau: WeekPlan = {
  slug: "pt-week-1-bacalhau",
  number: 1,
  cuisine: "portuguese",
  theme: "Bacalhau",
  title: "Week 1 — Bacalhau",
  description:
    "The fiel amigo, the faithful friend. Salt cod soaked back to life and turned a hundred ways — shredded with eggs and potato straws, layered and baked, fried into fritters and little balls. A fish that keeps for a year and stretches across a week.",
  context:
    `Bacalhau is the salt-preserved cod the Portuguese call the fiel amigo — the faithful friend — said to have 365 preparations, one for every day of the year, all born of dirt-poor thrift on a coast with no refrigeration. You soak the stiff salt plank back to life over a day and a half, changing the water, and what was the cheapest keeping-fish becomes the most beloved dinner in the country. This week is its core four: bacalhau à brás (shredded cod, eggs, and matchstick potatoes), gomes de sá (layered with potato and onion and baked), pataniscas (loose fritters), and bolinhos (little fried balls). Nothing is wasted — the soaking softens the salt into seasoning, and the smallest flakes go into the fritters.`,
  dishes: [
    "Bacalhau à brás (shredded cod, egg, potato straws)",
    "Bacalhau à Gomes de Sá (baked with potato and onion)",
    "Pataniscas de bacalhau (loose cod fritters)",
    "Bolinhos de bacalhau (little fried cod balls)",
  ],
  proteinNote:
    "Salt cod is nearly pure protein once reconstituted; bound with eggs and stretched over potato, a plate clears the floor with a modest amount of fish.",
  bonus: false,
  preciousThread: "A good thick loin of salt cod — the one fish worth soaking back to life.",
  engine: [
    "Soak the salt cod 24–36 hours, changing the water — the week's protein bank, reconstituted",
    "broa / day-old bread and a bottle of olive oil — the constant Portuguese table",
    "A pot of dried beans, soaked and simmered, for salads and the side bean dishes",
    "The refogado base — onions and garlic slow-melted in olive oil for every dish",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "bacalhau-a-bras — the headline, shredded cod and potato straws bound with egg", estCalories: 700, estProtein: 28 },
    { day: "Mon", dinner: "bacalhau-gomes-de-sa — baked with potato, onion, and egg", estCalories: 680, estProtein: 27 },
    { day: "Tue", dinner: "pataniscas-de-bacalhau with a bean salad", estCalories: 640, estProtein: 24 },
    { day: "Wed", dinner: "bacalhau-a-bras again, the pan deepened with the week's refogado", estCalories: 690, estProtein: 27 },
    { day: "Thu", dinner: "bolinhos-de-bacalhau with greens and broa", estCalories: 620, estProtein: 22 },
    { day: "Fri", dinner: "bacalhau-gomes-de-sa, the second bake of the week", estCalories: 670, estProtein: 26 },
    { day: "Sat", dinner: "pataniscas and bolinhos from the last cod flakes — the zero-waste fry-up", estCalories: 650, estProtein: 23 },
  ],
  shopping: [
    { item: "Salt cod (bacalhau), thick loin", qty: "~1 1/2 lb", cost: 9.0, note: "the precious thread — soaks back to feed the week" },
    { item: "Potatoes", qty: "~5 lb", cost: 3.0 },
    { item: "Eggs", qty: "1 1/2 dozen", cost: 5.0, note: "binds the brás and the bolinhos" },
    { item: "Onions", qty: "~3 lb", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Dried white beans", qty: "1 lb", cost: 1.2 },
    { item: "Broa / country bread", qty: "2 loaves", cost: 3.0 },
    { item: "Black olives + parsley", qty: "small / 1 bunch", cost: 1.5 },
    { item: "Flour (for fritters)", qty: "1 lb", cost: 0.8, spansWeeks: true },
    { item: "Greens (couve / kale)", qty: "1 bunch", cost: 1.5 },
    { item: "Olive oil", qty: "for the week + frying", cost: 4.0, spansWeeks: true },
    { item: "Bay leaf, salt, pepper, piri-piri", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 33,
  steadyStateWeekly: 22,
};

export const ptWeek2Acorda: WeekPlan = {
  slug: "pt-week-2-acorda",
  number: 2,
  cuisine: "portuguese",
  theme: "Açorda & Migas",
  title: "Week 2 — Açorda & Migas",
  description:
    "The genius of stale bread. Boiling water, raw garlic, coriander or fried garlic, and yesterday's loaf turn into a hot, fragrant meal — the Alentejo's proof that a kitchen with almost nothing in it can still set a real dinner.",
  context:
    `Açorda is the Alentejo's great conjuring trick: boiling water, a pounded paste of raw garlic and coriander, olive oil, and stale bread become a fragrant green soup-pap crowned with a poached egg — a whole meal from a loaf too dry to slice. Migas is its drier cousin, day-old bread fried with garlic until it forms a soft golden cake. The motto of this cooking is pão, azeite, alho, coentros — bread, olive oil, garlic, coriander — the four cheap things that, handled right, taste like plenty. The whole point is that nothing is wasted: the staler the bread, the better it drinks the broth. This is poverty cooking that the rest of Portugal envies.`,
  dishes: [
    "Açorda alentejana (garlic-coriander bread soup, poached egg)",
    "Migas de pão (bread fried into a golden cake with garlic)",
    "Açorda de alho (the plainest garlic-bread açorda)",
    "A bean salad alongside",
  ],
  proteinNote:
    "The poached or scrambled egg carries the protein; a bean salad on the side lifts the bread-heavy days over the floor.",
  bonus: false,
  preciousThread: "A big bunch of fresh coriander — the herb that makes açorda sing.",
  engine: [
    "Save and dry every heel of bread / broa — the week runs on stale bread and olive oil",
    "Pound a garlic-and-coriander paste, the raw flavor base for every açorda",
    "A pot of dried beans, soaked and simmered, for the side salads",
    "The refogado base — garlic slow-fried in olive oil for the migas",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "acorda-alentejana — garlic-coriander bread soup with a poached egg", estCalories: 600, estProtein: 18 },
    { day: "Mon", dinner: "migas-de-pao with greens and a fried egg", estCalories: 640, estProtein: 20 },
    { day: "Tue", dinner: "acorda-de-alho — the plain garlic-bread açorda with a bean salad", estCalories: 580, estProtein: 17 },
    { day: "Wed", dinner: "acorda-alentejana again, the broth built on the week's garlic paste", estCalories: 600, estProtein: 18 },
    { day: "Thu", dinner: "migas-de-pao, the golden cake, with a side of beans", estCalories: 650, estProtein: 21 },
    { day: "Fri", dinner: "acorda-de-alho with a poached egg and olive oil", estCalories: 590, estProtein: 18 },
    { day: "Sat", dinner: "a migas-and-açorda fry-up from the last bread heels — nothing thrown away", estCalories: 630, estProtein: 19 },
  ],
  shopping: [
    { item: "Fresh coriander (cilantro)", qty: "2 bunches", cost: 2.5, note: "the precious thread — the soul of açorda" },
    { item: "Broa / country bread", qty: "3 loaves (let it stale)", cost: 4.5, note: "the cheaper and staler the better" },
    { item: "Eggs", qty: "1 dozen", cost: 3.5 },
    { item: "Garlic", qty: "3 heads", cost: 1.5, spansWeeks: true },
    { item: "Dried beans", qty: "1 lb", cost: 1.2 },
    { item: "Onions", qty: "2 lb", cost: 1.5 },
    { item: "Greens (couve / kale)", qty: "1 bunch", cost: 1.5 },
    { item: "Tomatoes (for the bean salad)", qty: "1 lb", cost: 1.5 },
    { item: "Olive oil", qty: "for the week", cost: 4.0, spansWeeks: true },
    { item: "Coarse salt, pepper, bay, piri-piri", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 23,
  steadyStateWeekly: 16,
};

export const ptWeek3Sopas: WeekPlan = {
  slug: "pt-week-3-sopas",
  number: 3,
  cuisine: "portuguese",
  theme: "Sopas",
  title: "Week 3 — Sopas",
  description:
    "Soup as the everyday dinner. Caldo verde — potato, kale, water, and a coin of sausage — feeds the whole country; a bean soup carries the protein; a chicken canja stretches one carcass into a healing pot. A meal in a bowl, eaten most nights.",
  context:
    `In Portugal soup is not a starter but the dinner itself, eaten almost every night. Caldo verde is the national one: potatoes simmered in water and puréed for body, finely shredded couve galega stirred in, and a single coin of chouriço per bowl for flavor it can't really afford — that one coin is the trick, meat as seasoning, not centre. Sopa de feijão carries the protein on beans alone; canja de galinha stretches one chicken carcass and a fistful of rice into a healing pot that feeds the sick and the well. The base of all of them is the same humble water and a refogado of onion in olive oil. Nothing is wasted: every bone, heel of bread, and outer cabbage leaf goes into the pot.`,
  dishes: [
    "Caldo verde (potato, kale, a coin of chouriço)",
    "Sopa de feijão (white bean soup)",
    "Canja de galinha (chicken-and-rice broth)",
    "Bread and olive oil alongside",
  ],
  proteinNote:
    "Beans and the canja's chicken and rice carry the floor; caldo verde leans on its bean-and-potato body plus the sausage coin and an egg or bread on the side.",
  bonus: false,
  preciousThread: "A length of chouriço — sliced thin so one sausage seasons a week of soup.",
  engine: [
    "A big pot of dried beans, soaked and simmered — the base for sopa de feijão and to thicken caldo verde",
    "broa / day-old bread and olive oil — the constant table beside every bowl",
    "A chicken carcass simmered to broth — the stock bank for canja and beyond",
    "The refogado base — onion slow-melted in olive oil for every soup",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "caldo-verde — potato-kale soup with a coin of chouriço", estCalories: 560, estProtein: 18 },
    { day: "Mon", dinner: "sopa-de-feijao — white bean soup with broa", estCalories: 620, estProtein: 24 },
    { day: "Tue", dinner: "canja-de-galinha — chicken-and-rice broth", estCalories: 580, estProtein: 26 },
    { day: "Wed", dinner: "caldo-verde again, the pot deepened with the week's broth", estCalories: 560, estProtein: 18 },
    { day: "Thu", dinner: "sopa-de-feijao with greens stirred through and bread", estCalories: 640, estProtein: 25 },
    { day: "Fri", dinner: "canja-de-galinha, the last of the chicken pulled into the rice", estCalories: 590, estProtein: 27 },
    { day: "Sat", dinner: "a sopa do dia — every leftover vegetable and bean blitzed into one pot", estCalories: 600, estProtein: 22 },
  ],
  shopping: [
    { item: "Chouriço", qty: "~8 oz length", cost: 3.0, note: "the precious thread — sliced thin to season every bowl" },
    { item: "Couve galega / kale", qty: "2 bunches", cost: 3.0 },
    { item: "Potatoes", qty: "~5 lb", cost: 3.0 },
    { item: "Whole chicken (for canja + stock)", qty: "~3 1/2 lb", cost: 6.0, note: "one bird makes the broth bank" },
    { item: "Dried white beans", qty: "1 1/2 lb", cost: 1.8 },
    { item: "Rice", qty: "1 lb", cost: 1.0 },
    { item: "Onions", qty: "3 lb", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Broa / country bread", qty: "2 loaves", cost: 3.0 },
    { item: "Carrots + lemon (for canja)", qty: "1 lb / 2", cost: 1.5 },
    { item: "Olive oil", qty: "for the week", cost: 4.0, spansWeeks: true },
    { item: "Bay, salt, pepper, mint (for canja)", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 20,
};

export const ptWeek4Feijao: WeekPlan = {
  slug: "pt-week-4-feijao",
  number: 4,
  cuisine: "portuguese",
  theme: "Feijão",
  title: "Week 4 — Feijão",
  description:
    "Beans as the centre. A Trás-os-Montes feijoada of beans and cheap pork trimmings, broad favas stewed with onion and chouriço, a humble bean-and-rice pot. The protein bank of poor Portugal, cooked three filling ways.",
  context:
    `When the cod and the chicken are gone, beans are what's left, and the Portuguese made them a feast. Feijoada à transmontana is the northern bean stew — red beans cooked long with whatever cheap pork the pig gives up, ear and trotter and a length of sausage, until it's thick and burnished. Favas guisadas stews broad beans with onion, a little chouriço, and coriander into something green and savoury. Arroz de feijão is the everyday pot: beans and rice cooked together with a tomato refogado, the most filling dinner there is for the least money. A pound of dried beans gives about ninety grams of protein for under two dollars, and nothing is wasted — the bean liquor thickens every pot.`,
  dishes: [
    "Feijoada à transmontana (bean and pork stew)",
    "Favas guisadas (stewed broad beans with chouriço)",
    "Arroz de feijão (beans and rice in tomato refogado)",
    "Broa to mop the pot",
  ],
  proteinNote:
    "Beans do the heavy lifting — a pound of dried beans is ~90g protein; the pork scraps and chouriço in the feijoada add a little more, easily clearing the floor.",
  bonus: false,
  preciousThread: "A length of chouriço and a smoked pork bone to flavor the bean pots.",
  engine: [
    "A big pot of dried red beans, soaked and simmered — the protein bank, split across all three dishes",
    "broa / country bread and olive oil — the constant table to mop the pots",
    "Cook the salt cod or save its trimmings for a bean-and-cod salad",
    "The refogado base — onion, garlic, and tomato slow-cooked in olive oil",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "feijoada-transmontana — red beans cooked long with cheap pork", estCalories: 720, estProtein: 30 },
    { day: "Mon", dinner: "favas-guisadas — broad beans stewed with onion and chouriço", estCalories: 640, estProtein: 24 },
    { day: "Tue", dinner: "arroz-de-feijao — beans and rice in a tomato refogado", estCalories: 660, estProtein: 22 },
    { day: "Wed", dinner: "feijoada-transmontana again, richer on the second day", estCalories: 710, estProtein: 29 },
    { day: "Thu", dinner: "favas-guisadas with broa and a poached egg", estCalories: 650, estProtein: 25 },
    { day: "Fri", dinner: "arroz-de-feijao with greens stirred through", estCalories: 660, estProtein: 22 },
    { day: "Sat", dinner: "a bean-and-cod salad from the week's leftovers — nothing thrown away", estCalories: 630, estProtein: 26 },
  ],
  shopping: [
    { item: "Chouriço + smoked pork bone/trotter", qty: "8 oz / pieces", cost: 4.0, note: "the precious thread — flavors the bean pots" },
    { item: "Dried red beans", qty: "2 lb", cost: 2.4, note: "the bank for the week" },
    { item: "Dried or frozen broad beans (favas)", qty: "1 1/2 lb", cost: 2.5 },
    { item: "Rice", qty: "1 1/2 lb", cost: 1.5 },
    { item: "Onions", qty: "3 lb", cost: 2.0 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Tomatoes / canned tomato", qty: "for refogado", cost: 1.5 },
    { item: "Coriander + parsley", qty: "1 bunch each", cost: 1.5 },
    { item: "Greens (couve / kale)", qty: "1 bunch", cost: 1.5 },
    { item: "Broa / country bread", qty: "2 loaves", cost: 3.0 },
    { item: "Olive oil", qty: "for the week", cost: 3.0, spansWeeks: true },
    { item: "Bay, salt, pepper, piri-piri", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 18,
};

export const ptWeek5Sardinhas: WeekPlan = {
  slug: "pt-week-5-sardinhas",
  number: 5,
  cuisine: "portuguese",
  theme: "Sardinhas & Peixe",
  title: "Week 5 — Sardinhas & Peixe",
  description:
    "The cheap fish of a fishing nation. Sardines charred over coals and eaten on bread, a fishermen's caldeirada layering whatever the boats brought in, and a paper of fried jaquinzinhos — small fish, big flavor, almost no money.",
  context:
    `Portugal is a fishing country, and its poorest, most beloved fish are the cheapest. Sardinhas assadas — fat sardines salted and grilled hard over coals until the skin blisters, eaten off a slab of broa that soaks up the oil — are the smell of every summer festa. Caldeirada is the fishermen's stew, layered like a lasagne with whatever the boats couldn't sell — onions, potatoes, peppers, and a mix of cheap fish — cooked in its own steam with no stock needed. Jaquinzinhos are tiny horse mackerel floured and fried whole, eaten bones and all in a paper cone. Oily small fish are dirt cheap, rich in protein, and nothing is wasted — the grilling drippings flavor the bread.`,
  dishes: [
    "Sardinhas assadas (charred sardines on broa)",
    "Caldeirada (layered fishermen's stew)",
    "Jaquinzinhos fritos (fried small fish)",
    "A bean or tomato salad alongside",
  ],
  proteinNote:
    "Oily small fish are protein-dense and cheap; sardines and the caldeirada's mixed fish clear the floor easily, with beans on the side to back them up.",
  bonus: false,
  preciousThread: "A kilo of fresh sardines on a festa day — coarse salt and coals do the rest.",
  engine: [
    "broa / country bread and olive oil — the constant table the grilled fish sits on",
    "A pot of dried beans, soaked and simmered, for the side salads",
    "The refogado base — onion, garlic, pepper, and tomato for the caldeirada layers",
    "Coarse salt and the grill / heavy pan — the fish needs almost nothing else",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "sardinhas-assadas — charred sardines on oil-soaked broa", estCalories: 640, estProtein: 30 },
    { day: "Mon", dinner: "caldeirada — layered fish-and-potato stew", estCalories: 620, estProtein: 26 },
    { day: "Tue", dinner: "jaquinzinhos fried whole with a bean salad", estCalories: 600, estProtein: 24 },
    { day: "Wed", dinner: "sardinhas-assadas again, with a tomato-and-onion salad", estCalories: 630, estProtein: 29 },
    { day: "Thu", dinner: "caldeirada, the pot deepened with the week's refogado", estCalories: 620, estProtein: 26 },
    { day: "Fri", dinner: "jaquinzinhos fritos with greens and broa", estCalories: 590, estProtein: 23 },
    { day: "Sat", dinner: "a fish-and-bread fry-up from the last of the catch — nothing wasted", estCalories: 610, estProtein: 25 },
  ],
  shopping: [
    { item: "Fresh sardines", qty: "~2 lb", cost: 5.0, note: "the precious thread — cheap, oily, and charred over coals" },
    { item: "Mixed cheap fish (for caldeirada)", qty: "~1 1/2 lb", cost: 5.0 },
    { item: "Jaquinzinhos / small horse mackerel", qty: "1 lb", cost: 3.0 },
    { item: "Potatoes", qty: "~3 lb", cost: 2.0 },
    { item: "Onions + peppers", qty: "2 lb / 2", cost: 2.5 },
    { item: "Tomatoes", qty: "1 1/2 lb", cost: 2.0 },
    { item: "Dried beans", qty: "1 lb", cost: 1.2 },
    { item: "Broa / country bread", qty: "2 loaves", cost: 3.0 },
    { item: "Flour (for frying)", qty: "1 lb", cost: 0.8, spansWeeks: true },
    { item: "Garlic + parsley + lemon", qty: "2 heads / bunch / 3", cost: 2.0, spansWeeks: true },
    { item: "Olive oil + coarse salt", qty: "for the week + frying", cost: 4.0, spansWeeks: true },
    { item: "Bay, pepper, piri-piri", qty: "pantry", cost: 1.0, spansWeeks: true },
  ],
  firstShopTotal: 33,
  steadyStateWeekly: 22,
};

export const ptWeek6Arroz: WeekPlan = {
  slug: "pt-week-6-arroz",
  number: 6,
  cuisine: "portuguese",
  theme: "Arroz & Broa",
  title: "Week 6 — Arroz & Broa",
  description:
    "Soupy rice and corn bread. Malandrinho rice cooked loose and brothy with tomato or with greens, and the green-bean 'peixinhos da horta' — little vegetable fritters that mimic fish. Cheap grains made to taste of more than they cost.",
  context:
    `The Portuguese like their rice malandrinho — loose and soupy, not dry — and built on the same refogado as everything else. Arroz de tomate is the everyday pot: a quick tomato-and-onion base, rice, water, and that's dinner. Arroz de grelos cooks the rice with turnip greens until it's green and savoury. Beside it sits broa, the dense maize-and-rye bread of the north that keeps for days and mops every plate. Peixinhos da horta — 'little fish of the garden' — are green beans battered and fried so they look like small fish, the trick of a kitchen that had vegetables but no fish that day. Cheap grains and a garden, made to taste like plenty, with the bread heels saved for tomorrow's açorda.`,
  dishes: [
    "Arroz de tomate (soupy tomato rice)",
    "Arroz de grelos (rice with turnip greens)",
    "Peixinhos da horta (battered green-bean fritters)",
    "Broa and olive oil alongside",
  ],
  proteinNote:
    "Grains lean light on protein, so an egg, a handful of beans, or the fritters' batter backs each day; a bean side keeps the floor cleared.",
  bonus: false,
  preciousThread: "A loaf of proper broa de milho — the dense maize bread of the north.",
  engine: [
    "Bake or buy broa / keep day-old bread and olive oil — the constant table",
    "A pot of dried beans, soaked and simmered, to back the grain-light days",
    "The refogado base — onion, garlic, tomato slow-cooked in olive oil for every rice",
    "A jug of light vegetable stock from trimmings to cook the rice loose and brothy",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "arroz-de-tomate — soupy tomato rice with a poached egg", estCalories: 600, estProtein: 18 },
    { day: "Mon", dinner: "arroz-de-grelos — rice cooked green with turnip tops", estCalories: 590, estProtein: 17 },
    { day: "Tue", dinner: "peixinhos-da-horta — green-bean fritters with a bean salad", estCalories: 620, estProtein: 20 },
    { day: "Wed", dinner: "arroz-de-tomate again, with chouriço coins if any remain", estCalories: 610, estProtein: 19 },
    { day: "Thu", dinner: "arroz-de-grelos with a fried egg and broa", estCalories: 600, estProtein: 19 },
    { day: "Fri", dinner: "peixinhos-da-horta with greens and a tomato salad", estCalories: 610, estProtein: 18 },
    { day: "Sat", dinner: "a rice-and-vegetable fritter plate from the week's odds — nothing wasted", estCalories: 600, estProtein: 18 },
  ],
  shopping: [
    { item: "Broa de milho (maize bread)", qty: "2 loaves", cost: 4.5, note: "the precious thread — the dense northern corn bread" },
    { item: "Rice", qty: "2 lb", cost: 2.0, note: "the bank for the week" },
    { item: "Tomatoes / canned tomato", qty: "2 lb / 1 can", cost: 2.5 },
    { item: "Grelos (turnip tops) / greens", qty: "2 bunches", cost: 3.0 },
    { item: "Green beans (for peixinhos)", qty: "1 1/2 lb", cost: 3.0 },
    { item: "Eggs", qty: "1 dozen", cost: 3.5 },
    { item: "Onions", qty: "2 lb", cost: 1.5 },
    { item: "Garlic", qty: "2 heads", cost: 1.0, spansWeeks: true },
    { item: "Dried beans", qty: "1 lb", cost: 1.2 },
    { item: "Flour (for batter)", qty: "1 lb", cost: 0.8, spansWeeks: true },
    { item: "Olive oil", qty: "for the week + frying", cost: 4.0, spansWeeks: true },
    { item: "Bay, salt, pepper, parsley", qty: "pantry / 1 bunch", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const ptWeek7Cozido: WeekPlan = {
  slug: "pt-week-7-cozido",
  number: 7,
  cuisine: "portuguese",
  theme: "Cozido",
  title: "Week 7 — Cozido",
  description:
    "The great boiled dinner that gathers the whole arc. Cheap meats and sausage simmered with vegetables and beans, the broth poured over rice; a gardener's beef-and-vegetable jardineira; and scrambled eggs with greens. One pot, everything in it, nothing left over.",
  context:
    `Cozido à portuguesa is the Sunday boiled dinner and the natural finale of the arc — every cheap thing in the house in one pot: a little pork, a length of chouriço or morcela, cabbage, potatoes, carrots, turnip, and a scoop of beans, all simmered together until the broth runs gold. Then the masterstroke: the rice is cooked in that broth, so the cheapest part of the meal becomes its richest, and a pound of meat feeds six. Jardineira is its weeknight cousin, a gardener's stew of a little beef and a whole drawer of vegetables. And ovos mexidos com grelos — eggs scrambled soft through garlicky greens — is the five-minute supper for the night you're tired. Nothing is wasted: the cozido's leftovers become the week's soup, and the last greens go into the eggs.`,
  dishes: [
    "Cozido à portuguesa (boiled dinner with broth-rice)",
    "Jardineira (beef-and-vegetable stew)",
    "Ovos mexidos com grelos (scrambled eggs with greens)",
    "Sopa do dia from the leftovers",
  ],
  proteinNote:
    "The cozido's mixed meats and sausage, the jardineira's beef, and the eggs all carry the floor; the beans and broth-rice stretch the meat across the week.",
  bonus: false,
  preciousThread: "A length of chouriço or morcela — the sausage that colors the whole cozido broth.",
  engine: [
    "A big pot of dried beans, soaked and simmered — into the cozido and the side dishes",
    "broa / country bread and olive oil — the constant table beside the platter",
    "The cozido broth, saved and reused — the bank for broth-rice and the week's soup",
    "The refogado base — onion, garlic, tomato in olive oil for the jardineira",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "cozido-a-portuguesa — the boiled dinner with broth-rice", estCalories: 720, estProtein: 32 },
    { day: "Mon", dinner: "jardineira — beef and a garden of vegetables", estCalories: 660, estProtein: 26 },
    { day: "Tue", dinner: "ovos-mexidos-com-grelos — soft scrambled eggs through garlicky greens", estCalories: 560, estProtein: 22 },
    { day: "Wed", dinner: "cozido-a-portuguesa again, the meats and broth-rice from the big pot", estCalories: 710, estProtein: 31 },
    { day: "Thu", dinner: "jardineira, thickened and richer on the second day", estCalories: 650, estProtein: 25 },
    { day: "Fri", dinner: "ovos-mexidos-com-grelos with broa and a bean salad", estCalories: 580, estProtein: 23 },
    { day: "Sat", dinner: "a sopa do dia — the cozido and jardineira leftovers blitzed into one pot", estCalories: 620, estProtein: 24 },
  ],
  shopping: [
    { item: "Chouriço / morcela", qty: "~10 oz", cost: 3.5, note: "the precious thread — colors the cozido broth" },
    { item: "Cheap pork cuts (shank / hock / ear)", qty: "~1 1/2 lb", cost: 5.0 },
    { item: "Stewing beef (for jardineira)", qty: "~3/4 lb", cost: 4.0 },
    { item: "Potatoes", qty: "~4 lb", cost: 2.5 },
    { item: "Cabbage / couve + carrots + turnip", qty: "for the pot", cost: 3.0 },
    { item: "Peas + green beans (for jardineira)", qty: "1 lb each", cost: 2.5 },
    { item: "Eggs", qty: "1 dozen", cost: 3.5 },
    { item: "Grelos / greens", qty: "2 bunches", cost: 3.0 },
    { item: "Rice", qty: "1 lb", cost: 1.0 },
    { item: "Dried beans", qty: "1 lb", cost: 1.2 },
    { item: "Onions + garlic", qty: "3 lb / 2 heads", cost: 3.0, spansWeeks: true },
    { item: "Broa / country bread + olive oil", qty: "2 loaves / for the week", cost: 6.0, spansWeeks: true },
  ],
  firstShopTotal: 34,
  steadyStateWeekly: 23,
};

export const portugueseWeeks: WeekPlan[] = [
  ptWeek1Bacalhau,
  ptWeek2Acorda,
  ptWeek3Sopas,
  ptWeek4Feijao,
  ptWeek5Sardinhas,
  ptWeek6Arroz,
  ptWeek7Cozido,
];
