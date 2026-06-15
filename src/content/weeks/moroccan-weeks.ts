import type { WeekPlan } from "../types";

// Challenge — Morocco (home cooking from the medina kitchen): the tagine on
// low coals and the loaf that is also the spoon. The full seven-week arc, each
// week built out into an executable WeekPlan (engine + 7 days + costed shopping
// list). cuisine is "moroccan"; the engine is cuisine-agnostic, so these slot
// into the shared content arrays, tagged by cuisine. These are the curated,
// pregenerated defaults — the AI menu generator lets users compose variations
// on the same recipe pool.
//
// RULE #6 (constant foundation): the Moroccan foundation — khobz (the round
// semolina bread that is both plate and utensil), the tagine base (onion,
// garlic, ras el hanout, preserved lemon, olive oil), couscous, and the cured
// olives & aged smen that finish dishes — is NEVER itself a theme. It lives in
// every week's `engine` as the constant beneath seven distinct, real dinner
// categories.

export const maWeek1Tagine: WeekPlan = {
  slug: "ma-week-1-tagine",
  number: 1,
  cuisine: "moroccan",
  theme: "Tagine",
  title: "Week 1 — Tagine",
  description:
    "Start where the Moroccan kitchen always starts: the conical clay pot set over the lowest coals, sealing a little meat, a heap of vegetables and a bright wash of spice into something far bigger than its parts. Chicken with preserved lemon and olives, lamb sweetened with prunes, kefta cradling eggs, and an all-vegetable pot — four tagines, one ritual of slow steam.",
  context:
    `The tagine is both the dish and the vessel, and the whole logic of frugal Moroccan cooking lives inside it. A heavy clay pot with a tall conical lid traps rising steam and rains it back down, so a fistful of meat and a market's worth of cheap vegetables braise for hours over almost no fuel and come out silken. Djaj mqualli is the canonical pot — chicken simmered golden with saffron, ginger, preserved lemon and cracked olives; lham bel barkok turns lamb sweet-savory with prunes, cinnamon and a scatter of sesame; kefta wa baid pokes eggs into a spiced tomato-and-meatball sauce to poach at the very end; tagine khodra leaves out the meat entirely and lets carrot, potato, zucchini and chickpea carry the day. Khobz tears at the table to scoop everything; the broth is the prize and never left in the pot. The bread, the onion-and-ras-el-hanout base, couscous and the cured olives are the constant foundation — this week simply turns the pot four ways.`,
  dishes: [
    "Tagine djaj mqualli (chicken, preserved lemon & olives)",
    "Tagine lham bel barkok (lamb with prunes)",
    "Tagine kefta wa baid (meatball & egg)",
    "Tagine khodra (vegetable tagine)",
  ],
  proteinNote:
    "A small amount of chicken and lamb is stretched across the week; eggs poached into the kefta pot and chickpeas in the vegetable tagine carry the protein floor on the meatless nights.",
  bonus: false,
  preciousThread: "A pinch of saffron threads and a few preserved lemons — the small luxuries that make a cheap braise taste like a feast.",
  engine: [
    "Khobz — round semolina bread baked or bought daily, the utensil and the plate (the constant base)",
    "Tagine base — onion, garlic, ras el hanout, preserved lemon, olive oil",
    "Couscous — steamed semolina kept for the back half of the week",
    "Olives & smen — cracked green olives and a little aged butter to finish the pots",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "tagine djaj mqualli — chicken slow-braised golden with saffron, preserved lemon and olives, khobz to scoop", estCalories: 600, estProtein: 26 },
    { day: "Mon", dinner: "tagine lham bel barkok — lamb with prunes, cinnamon and toasted sesame over the bread", estCalories: 600, estProtein: 24 },
    { day: "Tue", dinner: "tagine kefta wa baid — spiced meatballs in tomato with eggs poached on top", estCalories: 580, estProtein: 25 },
    { day: "Wed", dinner: "tagine khodra — carrot, potato, zucchini and chickpea braised in the ras el hanout base", estCalories: 520, estProtein: 17 },
    { day: "Thu", dinner: "leftover mqualli chicken folded into a quick vegetable tagine, broth mopped with khobz", estCalories: 560, estProtein: 21 },
    { day: "Fri", dinner: "tagine djaj again with the second half of the olives and preserved lemon", estCalories: 600, estProtein: 24 },
    { day: "Sat", dinner: "zero-waste: the week's braised vegetables, chickpeas and meat scraps cooked down into one last tagine over couscous", estCalories: 500, estProtein: 18 },
  ],
  shopping: [
    { item: "Semolina flour + bread (khobz)", qty: "5 lb", cost: 3.5, note: "the base under every dinner" },
    { item: "Ras el hanout + preserved lemons", qty: "jar + small", cost: 3.5, spansWeeks: true },
    { item: "Chicken (legs/thighs)", qty: "~1.5 lb", cost: 3.5, note: "the headline for the mqualli pots" },
    { item: "Lamb shoulder pieces", qty: "~0.75 lb", cost: 3.0, note: "stretched into the prune tagine" },
    { item: "Onions", qty: "~3 lb", cost: 2.0, spansWeeks: true },
    { item: "Tomatoes + tomato paste", qty: "~2 lb", cost: 2.5 },
    { item: "Carrot, potato, zucchini", qty: "~4 lb", cost: 3.5 },
    { item: "Chickpeas (dried)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Prunes", qty: "small bag", cost: 2.0 },
    { item: "Cracked green olives", qty: "jar", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "half dozen", cost: 1.5 },
    { item: "Saffron + ginger + cinnamon", qty: "pinch + small", cost: 2.0, spansWeeks: true },
    { item: "Couscous (semolina)", qty: "1 lb", cost: 1.0, spansWeeks: true },
    { item: "Olive oil, smen, salt", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 33,
  steadyStateWeekly: 19,
};

export const maWeek2Couscous: WeekPlan = {
  slug: "ma-week-2-couscous",
  number: 2,
  cuisine: "moroccan",
  theme: "Couscous",
  title: "Week 2 — Couscous",
  description:
    "Friday is couscous day across Morocco, and this week leans into the steamed semolina that crowns the week: a seven-vegetable mound, a sweet caramelized-onion tfaya, and seffa folded with butter, cinnamon and sugar. Hand-rolled grain, steamed three times until it is light as air, and a ladle of saffron broth poured over.",
  context:
    `Couscous is not a side in Morocco; it is the Friday meal, the dish that gathers a family after midday prayer around one great communal platter. The grain is steamed — never boiled — in a couscoussier set over a simmering pot of broth, lifted and raked and steamed again two or three times until each tiny pellet is separate and tender. Couscous bel khodra (seven-vegetable) piles carrot, turnip, pumpkin, zucchini, cabbage and chickpea into a saffron-gold dome, the broth ladled over to moisten. Couscous tfaya crowns it with onions cooked down slow with cinnamon, honey and raisins until they are dark and jammy — sweet against the savory grain. Seffa medfouna goes all the way to dessert-adjacent, the steamed couscous mounded with butter, cinnamon and powdered sugar, sometimes hiding shredded chicken beneath. Khobz, the ras-el-hanout base, the cured olives — the constant foundation — sit under the week; the steamed grain is the changing theme.`,
  dishes: [
    "Couscous bel khodra (seven-vegetable couscous)",
    "Couscous tfaya (caramelized onion & raisin)",
    "Seffa medfouna (sweet couscous, sometimes over chicken)",
    "Couscous with the week's broth ladled over",
  ],
  proteinNote:
    "A little chicken simmered for the broth and tucked into the seffa, plus chickpeas folded through the vegetable couscous, carry the protein; the grain stretches it across a crowd.",
  bonus: false,
  preciousThread: "A handful of raisins and a knob of butter for the tfaya — the small sweetness that turns plain grain into a Friday dish.",
  engine: [
    "Khobz — the round semolina bread torn alongside the grain (the constant base)",
    "Tagine base — onion, garlic, ras el hanout, preserved lemon, olive oil for the broth",
    "Couscous — the steamed semolina, this week's headline, raked three times",
    "Olives & smen — cured olives on the side and smen stirred through the grain",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "couscous bel khodra — seven vegetables steamed gold, saffron broth ladled over the mound", estCalories: 580, estProtein: 20 },
    { day: "Mon", dinner: "couscous tfaya — the grain crowned with dark caramelized onions, raisins and cinnamon", estCalories: 600, estProtein: 19 },
    { day: "Tue", dinner: "leftover couscous steamed again with the day's vegetables and a spoon of smen", estCalories: 540, estProtein: 17 },
    { day: "Wed", dinner: "seffa medfouna — sweet buttered couscous with cinnamon, shredded chicken hidden beneath", estCalories: 620, estProtein: 24 },
    { day: "Thu", dinner: "couscous with chickpeas and the saved seven-vegetable broth poured over", estCalories: 560, estProtein: 21 },
    { day: "Fri", dinner: "the proper Friday couscous — full vegetable mound with broth, olives and khobz at the table", estCalories: 600, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: leftover grain fried with vegetables and chickpeas into a crisp couscous cake", estCalories: 500, estProtein: 16 },
  ],
  shopping: [
    { item: "Couscous (semolina)", qty: "3 lb", cost: 3.0, note: "the week's headline grain" },
    { item: "Semolina flour + bread (khobz)", qty: "3 lb", cost: 2.5, note: "the base under every dinner" },
    { item: "Ras el hanout + preserved lemons", qty: "jar + small", cost: 2.0, spansWeeks: true },
    { item: "Chicken (for broth & seffa)", qty: "~1 lb", cost: 2.5 },
    { item: "Carrot, turnip, pumpkin", qty: "~4 lb", cost: 3.0 },
    { item: "Zucchini + cabbage", qty: "~3 lb", cost: 2.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.0, spansWeeks: true },
    { item: "Chickpeas (dried)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Raisins", qty: "small bag", cost: 1.5 },
    { item: "Butter / smen", qty: "small", cost: 2.0, spansWeeks: true },
    { item: "Saffron + cinnamon", qty: "pinch + small", cost: 1.5, spansWeeks: true },
    { item: "Cured olives", qty: "jar", cost: 1.5, spansWeeks: true },
    { item: "Olive oil, salt, sugar", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const maWeek3Harira: WeekPlan = {
  slug: "ma-week-3-harira",
  number: 3,
  cuisine: "moroccan",
  theme: "Harira & Soups",
  title: "Week 3 — Harira & Soups",
  description:
    "The deep, cheap warmth of the Moroccan soup pot: harira thick with lentils, chickpeas and tomato, the velvet split-pea bissara of the medina mornings, a brothy chorba, and rfissa with its shredded msemen and fenugreek. One pot of legumes and grain, a few dates alongside, dinner done.",
  context:
    `When meat is scarce and money is short, Morocco reaches for the soup pot, and no soup is more loved than harira — the rich, tomato-dark broth of lentils and chickpeas thickened with a flour-and-water tedouira and brightened with a fistful of cilantro and parsley, the soup that breaks the fast every night of Ramadan, eaten with dates and chebakia. Bissara is even humbler: dried split peas or fava simmered to a smooth purée, pooled with olive oil, cumin and a dust of paprika — a few coins' worth of breakfast or supper sold from medina stalls in winter. Chorba is the lighter, brothier everyday soup; rfissa layers shredded msemen or day-old bread under a fenugreek-and-lentil chicken broth, a dish traditionally cooked for a new mother to restore her. Each is a near-meatless bowl made deep by legumes, spice and bread. The khobz, the ras-el-hanout aromatics, couscous and olives — the constant foundation — hold under the soups; the simmered legume bowl is the changing theme.`,
  dishes: [
    "Harira (lentil, chickpea & tomato soup)",
    "Bissara (split-pea/fava purée with olive oil & cumin)",
    "Chorba (light everyday broth)",
    "Rfissa (shredded msemen with fenugreek lentil broth)",
  ],
  proteinNote:
    "Lentils, chickpeas, split peas and favas are the protein engine all week; a little chicken threads the rfissa and chorba, and eggs can finish a bowl.",
  bonus: false,
  preciousThread: "A pinch of dried fenugreek (helba) and good cilantro — the herb-and-bitter notes that lift a pot of cheap legumes.",
  engine: [
    "Khobz — torn into the bowl and used to scoop (the constant base)",
    "Tagine base — onion, garlic, ras el hanout, preserved lemon, olive oil to build the broth",
    "Couscous — kept for a steamed night alongside the soups",
    "Olives & smen — olives on the side and a thread of smen to enrich a bowl",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "harira — lentils, chickpeas and tomato thickened with tedouira, cilantro and a squeeze of lemon, dates alongside", estCalories: 540, estProtein: 22 },
    { day: "Mon", dinner: "bissara — smooth split-pea purée pooled with olive oil, cumin and paprika, khobz to dip", estCalories: 520, estProtein: 20 },
    { day: "Tue", dinner: "chorba — a lighter brothy soup with the day's vegetables and a little vermicelli", estCalories: 500, estProtein: 16 },
    { day: "Wed", dinner: "rfissa — shredded msemen under a fenugreek-lentil broth with shredded chicken", estCalories: 580, estProtein: 24 },
    { day: "Thu", dinner: "leftover harira reheated thicker, an egg cracked in to poach", estCalories: 540, estProtein: 21 },
    { day: "Fri", dinner: "harira again, the second pot, with extra chickpeas and a crust of bread", estCalories: 560, estProtein: 23 },
    { day: "Sat", dinner: "zero-waste: the week's odd legumes and broth blended into one last thick soup over stale bread", estCalories: 500, estProtein: 19 },
  ],
  shopping: [
    { item: "Brown/green lentils", qty: "2 lb", cost: 2.5, note: "the soup engine", spansWeeks: true },
    { item: "Split peas + dried fava", qty: "1.5 lb", cost: 2.0, spansWeeks: true },
    { item: "Chickpeas (dried)", qty: "1 lb", cost: 1.5, spansWeeks: true },
    { item: "Semolina flour + bread (khobz)", qty: "4 lb", cost: 3.0, note: "the base under every dinner" },
    { item: "Tomatoes + tomato paste", qty: "~3 lb", cost: 3.0 },
    { item: "Onions + celery", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Chicken (for rfissa/chorba)", qty: "~0.75 lb", cost: 2.0 },
    { item: "Cilantro + parsley", qty: "bunches", cost: 1.5 },
    { item: "Fenugreek (helba) + cumin", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Vermicelli + flour (for tedouira)", qty: "small + 1 lb", cost: 1.5, spansWeeks: true },
    { item: "Dates", qty: "small bag", cost: 2.0 },
    { item: "Eggs", qty: "half dozen", cost: 1.5 },
    { item: "Ras el hanout + paprika", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Olive oil, salt, smen", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const maWeek4Khobz: WeekPlan = {
  slug: "ma-week-4-khobz",
  number: 4,
  cuisine: "moroccan",
  theme: "Khobz & Msemen",
  title: "Week 4 — Khobz & Msemen",
  description:
    "A week built on the breads themselves and the dishes they cradle: flaky folded msemen, the rustic bran loaf khobz bayldi, batbout pockets stuffed and griddled, and maakouda potato cakes tucked into a sandwich. Flour, water, a little semolina and a hot pan — the cheapest dinner in Morocco is also one of its best.",
  context:
    `Bread is the one constant of the Moroccan table, and this week makes it the meal rather than the utensil. Msemen is the famous square pancake — dough stretched gossamer-thin, smeared with oil and semolina, folded into a flaky packet and griddled until it shatters into buttery layers; eaten plain with honey, or stuffed with onion-and-tomato khlea filling. Khobz bayldi is the rustic country loaf, coarse with whole-wheat and barley flour and studded with sesame and anise, baked dense to mop a tagine or carry a sandwich. Batbout is the soft, hollow griddle-bread that puffs into a pocket — split and mahshi (stuffed) with spiced kefta, vegetables or cheese, it becomes a whole handheld dinner. Maakouda — fried mashed-potato cakes spiced with cumin and herbs — are folded into a split loaf with harissa and olives for the classic medina street sandwich. The grain that is normally the plate becomes the plate AND the dinner; the ras-el-hanout base, couscous and olives — the constant foundation — stay beneath it.`,
  dishes: [
    "Msemen (flaky folded griddle bread, plain or stuffed)",
    "Khobz bayldi (rustic bran & semolina loaf)",
    "Batbout mahshi (stuffed griddle-bread pockets)",
    "Maakouda in bread (potato cakes in a loaf sandwich)",
  ],
  proteinNote:
    "Eggs and a little spiced kefta stuff the breads, cheese fills the batbout, and chickpeas or lentils round out the meatless nights; the bread carries the calories.",
  bonus: false,
  preciousThread: "A spoon of khlea (preserved meat) or good cheese to stuff the breads — a little richness folded into a cheap loaf.",
  engine: [
    "Khobz — this week the headline, in its many forms (the constant base)",
    "Tagine base — onion, garlic, ras el hanout, preserved lemon, olive oil for the fillings",
    "Couscous — kept for a steamed night between the bread days",
    "Olives & smen — olives in the sandwiches and smen brushed on the hot griddle breads",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "msemen — flaky folded griddle bread, some stuffed with onion-tomato khlea, some with honey", estCalories: 580, estProtein: 18 },
    { day: "Mon", dinner: "khobz bayldi fresh from the oven with a bowl of olive oil, olives and a fried egg", estCalories: 540, estProtein: 19 },
    { day: "Tue", dinner: "batbout mahshi — pockets stuffed with spiced kefta and griddled to puff", estCalories: 600, estProtein: 24 },
    { day: "Wed", dinner: "maakouda in bread — cumin potato cakes folded into a loaf with harissa and olives", estCalories: 580, estProtein: 17 },
    { day: "Thu", dinner: "leftover msemen reheated and stuffed with the day's vegetables and cheese", estCalories: 560, estProtein: 20 },
    { day: "Fri", dinner: "batbout filled with chickpeas, herbs and a spoon of harira-style broth", estCalories: 560, estProtein: 21 },
    { day: "Sat", dinner: "zero-waste: stale breads torn and griddled with eggs, leftover potato and herbs into one last skillet", estCalories: 500, estProtein: 18 },
  ],
  shopping: [
    { item: "Bread flour + whole-wheat/barley flour", qty: "6 lb", cost: 4.0, note: "the week's headline, the base under every dinner" },
    { item: "Fine semolina (for msemen)", qty: "2 lb", cost: 1.5, spansWeeks: true },
    { item: "Potatoes (for maakouda)", qty: "~4 lb", cost: 2.5 },
    { item: "Onions + tomatoes", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Kefta / ground meat", qty: "~0.75 lb", cost: 3.0 },
    { item: "Eggs", qty: "dozen", cost: 2.5 },
    { item: "Cheese (for batbout)", qty: "small", cost: 2.0 },
    { item: "Chickpeas + lentils", qty: "1.5 lb", cost: 2.0, spansWeeks: true },
    { item: "Harissa + cumin + anise", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Sesame seeds", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Cured olives", qty: "jar", cost: 1.5, spansWeeks: true },
    { item: "Yeast + ras el hanout", qty: "small", cost: 1.0, spansWeeks: true },
    { item: "Olive oil, smen, honey, salt", qty: "pantry", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 29,
  steadyStateWeekly: 18,
};

export const maWeek5Kefta: WeekPlan = {
  slug: "ma-week-5-kefta",
  number: 5,
  cuisine: "moroccan",
  theme: "Kefta & Brochettes",
  title: "Week 5 — Kefta & Brochettes",
  description:
    "Ground meat is how Morocco makes a little go far, and this week is the smoke of the grill and the spice of the mince: kefta mkaouara in tomato, skewered brochettes off the coals, and merguez with potatoes. A handful of meat, a heavy hand with cumin and paprika, bread to wrap it all.",
  context:
    `When a household can afford only a little meat, it grinds it — kefta, the spiced mince of beef or lamb worked through with grated onion, cumin, paprika, cilantro and parsley, stretches a quarter-pound into a meal for four. Kefta mkaouara simmers the meatballs in a bright tomato-and-garlic sauce, then cracks eggs over the top to poach in the bubbling pan — the same beloved logic as the egg tagine, served straight from the dish with bread. Brochettes de kefta press that same seasoned mince onto skewers and grill it over charcoal, the smoke perfuming every bite, eaten off the stick with khobz and a raw-onion-and-cumin salad. Merguez — the lamb sausage red with harissa and fennel — is fried up with potatoes and a fried egg into a quick, fiery skillet. The grill and the spiced mince are the theme; khobz to wrap them, the ras-el-hanout base, couscous and olives — the constant foundation — stay underneath.`,
  dishes: [
    "Kefta mkaouara (meatballs & eggs in tomato)",
    "Brochettes de kefta (grilled spiced-mince skewers)",
    "Merguez wa batata (sausage with potatoes & egg)",
    "Kefta wrapped in khobz with onion-cumin salad",
  ],
  proteinNote:
    "A small amount of ground beef or lamb and merguez sausage is stretched all week with grated onion and herbs; eggs poached over the mkaouara lift the protein on every plate.",
  bonus: false,
  preciousThread: "Merguez sausage and good charcoal smoke — the fatty, fiery accent that makes a little mince taste like a feast.",
  engine: [
    "Khobz — torn to wrap the skewers and scoop the kefta sauce (the constant base)",
    "Tagine base — onion, garlic, ras el hanout, preserved lemon, olive oil for the mkaouara",
    "Couscous — kept for a steamed night between the grill days",
    "Olives & smen — olives in the salad and smen melted into the meatball sauce",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "kefta mkaouara — spiced meatballs in tomato-garlic sauce with eggs poached on top, khobz to scoop", estCalories: 600, estProtein: 27 },
    { day: "Mon", dinner: "brochettes de kefta — grilled mince skewers with raw onion, cumin and bread", estCalories: 580, estProtein: 25 },
    { day: "Tue", dinner: "merguez wa batata — sausage fried with potatoes, paprika and a fried egg", estCalories: 620, estProtein: 24 },
    { day: "Wed", dinner: "leftover kefta crumbled into a quick vegetable tagine over couscous", estCalories: 560, estProtein: 22 },
    { day: "Thu", dinner: "kefta wrapped in khobz with an onion-cumin-tomato salad and harissa", estCalories: 580, estProtein: 23 },
    { day: "Fri", dinner: "kefta mkaouara again, the second pan, extra eggs and a crust of bread", estCalories: 600, estProtein: 26 },
    { day: "Sat", dinner: "zero-waste: the week's meat scraps, potatoes and sauce fried together with eggs into one last skillet", estCalories: 500, estProtein: 20 },
  ],
  shopping: [
    { item: "Ground beef/lamb (kefta)", qty: "~1.5 lb", cost: 5.0, note: "the headline mince, stretched all week" },
    { item: "Merguez sausage", qty: "~0.75 lb", cost: 3.0, note: "the precious thread" },
    { item: "Semolina flour + bread (khobz)", qty: "4 lb", cost: 3.0, note: "the base under every dinner" },
    { item: "Tomatoes + tomato paste", qty: "~3 lb", cost: 3.0 },
    { item: "Onions", qty: "~3 lb", cost: 2.0, spansWeeks: true },
    { item: "Potatoes", qty: "~3 lb", cost: 2.0 },
    { item: "Eggs", qty: "dozen", cost: 2.5 },
    { item: "Cilantro + parsley + garlic", qty: "bunches + head", cost: 1.5 },
    { item: "Cumin + paprika + harissa", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Cured olives", qty: "jar", cost: 1.5, spansWeeks: true },
    { item: "Charcoal (for the grill)", qty: "small bag", cost: 2.0, spansWeeks: true },
    { item: "Couscous (semolina)", qty: "1 lb", cost: 1.0, spansWeeks: true },
    { item: "Olive oil, smen, salt, ras el hanout", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 20,
};

export const maWeek6Hoot: WeekPlan = {
  slug: "ma-week-6-hoot",
  number: 6,
  cuisine: "moroccan",
  theme: "Hoot & Chermoula",
  title: "Week 6 — Hoot & Chermoula",
  description:
    "From the long Atlantic and Mediterranean coasts: cheap, oily small fish lifted by chermoula, the green marinade of cilantro, garlic, cumin and preserved lemon that defines Moroccan seafood. Sardines butterflied around their own stuffing, white fish baked over the marinade — a few coins of fish made bright and unforgettable.",
  context:
    `Morocco has two long coastlines and a fishing fleet that lands sardines by the crate, so the cheapest protein in many a market is small, oily fish — and chermoula is the green alchemy that makes it sing. The marinade pounds together cilantro, parsley, garlic, cumin, paprika, a little chili and the juice of preserved lemon into a vivid, herby, slightly sour paste that is rubbed into the fish, baked under it, and spooned over it. Sardines mchermel is the classic: cheap sardines butterflied and pressed in pairs around a layer of chermoula, then fried or baked so the fish steams in its own herbed crust — eaten whole, bones and all, with bread and a wedge of lemon. Hoot bel chermoula bakes a whole white fish or fillets over a bed of sliced potato and tomato, blanketed in the marinade and the broth it makes, scooped up with khobz. A coastal pot of mussels or a tagine of fish with olives rounds the week. The bread, the ras-el-hanout base, couscous and olives — the constant foundation — sit beneath the fish; chermoula is the changing theme.`,
  dishes: [
    "Sardines mchermel (chermoula-stuffed sardines)",
    "Hoot bel chermoula (white fish baked in chermoula)",
    "Fish tagine with potato, tomato & olives",
    "Chermoula mussels or sardine sandwich",
  ],
  proteinNote:
    "Cheap oily fish — sardines and whatever white fish is fresh — is the protein all week; eaten whole with the bones, it is among the cheapest complete protein in the market.",
  bonus: false,
  preciousThread: "A fresh whole white fish for the baked chermoula dish, and a big bunch of cilantro for the marinade.",
  engine: [
    "Khobz — torn to scoop the chermoula broth and eat the fish whole (the constant base)",
    "Tagine base — onion, garlic, ras el hanout, preserved lemon, olive oil under the fish",
    "Couscous — kept for a steamed night alongside the fish",
    "Olives & smen — olives layered into the fish tagine and smen to enrich the broth",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "sardines mchermel — sardines butterflied around chermoula and baked, lemon and khobz alongside", estCalories: 560, estProtein: 28 },
    { day: "Mon", dinner: "hoot bel chermoula — white fish baked over potato, tomato and the green marinade", estCalories: 580, estProtein: 26 },
    { day: "Tue", dinner: "fish tagine with potato, tomato, preserved lemon and olives over the bread", estCalories: 540, estProtein: 24 },
    { day: "Wed", dinner: "leftover baked fish flaked into a quick couscous with the chermoula broth", estCalories: 520, estProtein: 22 },
    { day: "Thu", dinner: "chermoula mussels (or a sardine sandwich) with a tomato-onion salad", estCalories: 520, estProtein: 20 },
    { day: "Fri", dinner: "sardines mchermel again, fried crisp this time, with extra chermoula and lemon", estCalories: 560, estProtein: 27 },
    { day: "Sat", dinner: "zero-waste: the week's fish scraps and chermoula folded into a potato-and-egg skillet", estCalories: 500, estProtein: 21 },
  ],
  shopping: [
    { item: "Sardines (fresh)", qty: "~2 lb", cost: 3.5, note: "the cheap oily protein of the week" },
    { item: "White fish (whole/fillets)", qty: "~1.5 lb", cost: 4.0, note: "the precious thread for the baked dish" },
    { item: "Semolina flour + bread (khobz)", qty: "4 lb", cost: 3.0, note: "the base under every dinner" },
    { item: "Cilantro + parsley (for chermoula)", qty: "big bunches", cost: 2.0 },
    { item: "Garlic + lemons", qty: "heads + bag", cost: 2.0, spansWeeks: true },
    { item: "Potatoes + tomatoes", qty: "~4 lb", cost: 3.0 },
    { item: "Onions", qty: "~2 lb", cost: 1.5, spansWeeks: true },
    { item: "Mussels (or extra sardines)", qty: "~1 lb", cost: 2.5 },
    { item: "Cumin + paprika + chili", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Preserved lemons", qty: "small jar", cost: 1.5, spansWeeks: true },
    { item: "Cured olives", qty: "jar", cost: 1.5, spansWeeks: true },
    { item: "Eggs + couscous", qty: "half dozen + 1 lb", cost: 1.5, spansWeeks: true },
    { item: "Olive oil, smen, salt, ras el hanout", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 31,
  steadyStateWeekly: 19,
};

export const maWeek7Fete: WeekPlan = {
  slug: "ma-week-7-fete",
  number: 7,
  cuisine: "moroccan",
  theme: "Briouats & Fête",
  title: "Week 7 — Briouats & Fête",
  description:
    "The celebration week, where thrift dresses up for a feast: crisp little briouats folded around spiced filling, the great sweet-savory bastilla under its dusting of cinnamon and sugar, and the smoky grilled-vegetable salads zaalouk and taktouka that crowd the festive table. A little splurge, everything stretched, nothing wasted.",
  context:
    `Even a celebration in a frugal kitchen is an exercise in stretching, and the Moroccan fête does it with pastry and salad. Briouats are the small triumph: warqa pastry (or filo) folded into crisp triangles or cigars around a little spiced filling — minced meat with egg, vermicelli and cheese, or shrimp — then fried golden, a few coins of filling made festive by the wrapper. Bastilla is the showpiece, the sweet-savory pie that once crowned weddings: shredded chicken or pigeon cooked with onions and eggs, layered with crushed almonds, sugar and cinnamon between sheets of pastry, baked, and dusted with powdered sugar and cinnamon in a lattice on top — the famous collision of savory and sweet that says, this is a special night. Around it crowd the cooked salads: zaalouk, the smoky mash of grilled eggplant and tomato with garlic and cumin; taktouka, the soft stew of roasted peppers and tomato — both eaten cool with bread, both made from the cheapest produce in the souk. Khobz to scoop, the ras-el-hanout base, couscous and olives — the constant foundation — anchor even the feast.`,
  dishes: [
    "Briouats (crisp filled pastry triangles)",
    "Bastilla (sweet-savory chicken & almond pie)",
    "Zaalouk (smoky eggplant & tomato salad)",
    "Taktouka (roasted pepper & tomato salad)",
  ],
  proteinNote:
    "A little chicken and egg fill the bastilla and briouats; almonds add richness, and the eggplant-and-pepper salads round the table — the splurge is concentrated in one feast and stretched across the week.",
  bonus: false,
  preciousThread: "A handful of almonds and a few sheets of warqa pastry for the bastilla — the festive splurge that makes the week a celebration.",
  engine: [
    "Khobz — torn to scoop the cooked salads and the feast (the constant base)",
    "Tagine base — onion, garlic, ras el hanout, preserved lemon, olive oil for the fillings",
    "Couscous — kept for a steamed feast night alongside the pastries",
    "Olives & smen — olives on the festive table and smen folded into the bastilla filling",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "briouats — crisp pastry triangles around spiced meat, vermicelli and cheese, with zaalouk to dip", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "zaalouk and taktouka with warm khobz and a fried egg — the smoky cooked salads as supper", estCalories: 520, estProtein: 16 },
    { day: "Tue", dinner: "bastilla — the sweet-savory chicken-and-almond pie under cinnamon sugar, the feast night", estCalories: 640, estProtein: 25 },
    { day: "Wed", dinner: "leftover bastilla filling folded into briouats and fried crisp", estCalories: 580, estProtein: 21 },
    { day: "Thu", dinner: "couscous crowned with the week's vegetables and a scatter of toasted almonds", estCalories: 560, estProtein: 19 },
    { day: "Fri", dinner: "briouats again with the last of the filling, taktouka and olives at the table", estCalories: 580, estProtein: 20 },
    { day: "Sat", dinner: "zero-waste: leftover salads, pastry scraps and filling baked into one last savory pie", estCalories: 500, estProtein: 17 },
  ],
  shopping: [
    { item: "Warqa / filo pastry", qty: "2 packs", cost: 3.0, note: "the festive wrapper" },
    { item: "Chicken (for bastilla & briouats)", qty: "~1.25 lb", cost: 3.0 },
    { item: "Almonds", qty: "small bag", cost: 3.0, note: "the precious thread" },
    { item: "Semolina flour + bread (khobz)", qty: "4 lb", cost: 3.0, note: "the base under every dinner" },
    { item: "Eggplant", qty: "~3 lb", cost: 2.5 },
    { item: "Bell peppers + tomatoes", qty: "~4 lb", cost: 3.5 },
    { item: "Onions + garlic", qty: "~3 lb", cost: 2.0, spansWeeks: true },
    { item: "Eggs", qty: "dozen", cost: 2.5 },
    { item: "Vermicelli + cheese (for briouats)", qty: "small", cost: 2.0 },
    { item: "Cinnamon + powdered sugar", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Cured olives", qty: "jar", cost: 1.5, spansWeeks: true },
    { item: "Couscous (semolina)", qty: "1 lb", cost: 1.0, spansWeeks: true },
    { item: "Olive oil, smen, salt, ras el hanout", qty: "pantry", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 32,
  steadyStateWeekly: 20,
};

export const moroccanWeeks: WeekPlan[] = [
  maWeek1Tagine,
  maWeek2Couscous,
  maWeek3Harira,
  maWeek4Khobz,
  maWeek5Kefta,
  maWeek6Hoot,
  maWeek7Fete,
];
