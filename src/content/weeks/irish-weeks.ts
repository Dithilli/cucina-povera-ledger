import type { WeekPlan } from "../types";

// Challenge — Irish home-cooking cucina povera ("Spuds, Soda Bread & a Rasher").
//
// This is NOT the Italian one-ingredient-per-week arc. The Irish table has a
// constant foundation present in EVERY week — sacks of floury potatoes (the daily
// staple), the quick buttermilk soda/brown loaf, dairy (butter, buttermilk, milk),
// the onion-and-bacon savoury base, and oats for thickening. That foundation is
// shown once in each week's engine and is NEVER itself a theme. Each of the seven
// weeks is a distinct, real dinner category eaten that night — potato dinners,
// slow stews, bacon and cabbage, bread-and-soups, coastal fish, the grain-and-pulse
// pot, and the fry/festival table — all sitting on the same frugal base. Saturday
// is always a zero-waste dinner from the week's leftovers; Sunday is the batch cook.

export const ieWeek1Spuds: WeekPlan = {
  slug: "ie-week-1-spuds",
  number: 1,
  cuisine: "irish",
  theme: "Spuds",
  title: "Week 1 — Spuds",
  description:
    "The potato standing alone as dinner, dressed up just enough to be a feast. A sack of floury spuds, a well of butter, a few scallions and a knob of bacon become colcannon, champ, boxty and crisp potato cakes — the food that fed a whole island, and the food that, when it failed, broke its heart.",
  context: `No people ever leaned on a single crop the way the Irish leaned on the potato, and no people learned to coax more dinners out of it. Boiled and mashed with a well of melted butter and scallions, it is champ; folded through with kale or cabbage and a little bacon, it is colcannon — the everyday plate of the cottage. Grated raw and bound with the cooked mash, it becomes boxty, fried on the griddle until lacy and golden. Yesterday's leftover mash is patted into potato cakes and crisped in butter for nothing. A little salt bacon, a handful of oats to bind, a jug of milk and a soda farl on the side, and a floury spud is a whole supper. This is the food at the very root of the tradition — and the famine's long shadow makes every plate of it a small act of remembrance.`,
  dishes: ["Colcannon", "Champ", "Boxty", "Potato cakes"],
  proteinNote:
    "A little bacon or a rasher melted through, an egg fried on top of the boxty, and above all the dairy — buttermilk, milk and butter — carry the protein floor. Lean week; lean on the engine.",
  bonus: false,
  preciousThread:
    "A knob of good salt bacon and a jug of fresh buttermilk — pennies of fat and tang that turn a plain spud into colcannon worth sitting down to.",
  engine: [
    "Potatoes — sacks of floury spuds, boiled/mashed/grated, the daily staple (the constant base)",
    "Brown & soda bread — the quick buttermilk loaf and farls, buttered, beside everything",
    "Dairy — butter, buttermilk and milk; a well of butter in the mash",
    "Onion/bacon base + oats — the scallion-and-rasher savoury start; oats to bind and thicken",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "colcannon with crisped bacon and a well of butter, soda farl alongside", estCalories: 580, estProtein: 18 },
    { day: "Mon", dinner: "champ — buttery mash beaten with scallions and milk, a fried egg on top", estCalories: 520, estProtein: 15 },
    { day: "Tue", dinner: "boxty pancakes, grated and griddled lacy, with a rasher", estCalories: 540, estProtein: 17 },
    { day: "Wed", dinner: "potato cakes crisped in butter from the leftover mash, with fried onion", estCalories: 500, estProtein: 14 },
    { day: "Thu", dinner: "colcannon cakes pan-fried golden, a poached egg and buttermilk on the side", estCalories: 560, estProtein: 18 },
    { day: "Fri", dinner: "champ with melted cheese and scallions, soda bread to mop", estCalories: 520, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: leftover colcannon and potato cake fried into a crisp potato hash with the last of the bacon and onion (uses the week's leftovers)", estCalories: 480, estProtein: 14 },
  ],
  shopping: [
    { item: "Potatoes", qty: "10 lb", cost: 4.0, note: "the base under every dinner" },
    { item: "Wholemeal flour + bread soda (soda bread)", qty: "bag + box", cost: 3.0, spansWeeks: true },
    { item: "Buttermilk", qty: "1 qt", cost: 2.0, spansWeeks: true },
    { item: "Butter + milk", qty: "1 lb + 2 qt", cost: 4.5, spansWeeks: true },
    { item: "Scallions", qty: "2 bunches", cost: 2.0 },
    { item: "Kale / cabbage", qty: "1 head", cost: 1.5 },
    { item: "Salt bacon / rashers", qty: "½ lb", cost: 3.0 },
    { item: "Eggs", qty: "1 dozen", cost: 4.0, spansWeeks: true },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Porridge oats", qty: "1 bag", cost: 2.0, spansWeeks: true },
    { item: "Cheddar", qty: "½ lb", cost: 3.0 },
    { item: "Salt + pepper", qty: "stock", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 28,
  steadyStateWeekly: 16,
};

export const ieWeek2Stews: WeekPlan = {
  slug: "ie-week-2-stews",
  number: 2,
  cuisine: "irish",
  theme: "Stews & Coddle",
  title: "Week 2 — Stews & Coddle",
  description:
    "The slow pot on the back of the range, where a little cheap meat and a sack of root vegetables become days of dinner. Irish stew built on mutton bones and potatoes, Dublin coddle of sausage and rasher, a dark beef-and-stout braise — patient, warming, and stretched to the last spoonful.",
  context: `The one-pot stew is the genius of the cottage kitchen: a fistful of the cheapest meat — neck of mutton, a few sausages, a shin of beef — laid over layers of potato, onion and root, covered with water and left to its own slow devices over the fire. Irish stew in its oldest form is barely more than mutton, potato, onion and water, the potatoes half-melting to thicken the broth, and it is the better for its plainness. Dublin coddle is the Thursday-night pot of the tenements — sausages and rashers, potatoes and onions stewed pale and soft, a way to use up the week's pork ends before Friday's fast. Beef braised low in a bottle of dark stout is the Sunday version of the same thrift. Each pot deepens overnight, feeds again reheated, and asks only for a hunk of soda bread to finish the bowl.`,
  dishes: ["Irish stew", "Dublin coddle", "Beef & stout stew", "Mutton-and-barley pot"],
  proteinNote:
    "Neck of mutton, cheap sausages and rashers, and a little shin of beef carry the meat; pearl barley and the dairy underneath fill in the floor. The meat flavours the pot — the potatoes do the feeding.",
  bonus: false,
  preciousThread:
    "A neck of mutton on the bone (or a half-bottle of dark stout) — the cheapest cut and a splash of porter that give the whole pot its deep, long-cooked savour.",
  engine: [
    "Potatoes — a sack layered into every pot, half-melting to thicken the broth (the constant base)",
    "Brown & soda bread — a fresh loaf to mop every bowl, buttered thick",
    "Dairy — butter for the bread, milk and buttermilk on the table",
    "Onion/bacon base + oats — onions and bacon ends underneath every stew; oats and barley to thicken",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "beef-and-stout stew braised low with onions and root vegetables, soda bread to mop", estCalories: 600, estProtein: 22 },
    { day: "Mon", dinner: "irish stew of mutton, potato and onion, the broth thickened with melting spuds", estCalories: 560, estProtein: 20 },
    { day: "Tue", dinner: "dublin coddle — sausages, rashers, potato and onion stewed soft", estCalories: 580, estProtein: 19 },
    { day: "Wed", dinner: "mutton-and-barley pot, the last of the mutton stretched with pearl barley", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "reheated beef-and-stout stew over buttery champ", estCalories: 560, estProtein: 20 },
    { day: "Fri", dinner: "meatless root-vegetable stew thickened with barley and a soda farl", estCalories: 500, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: all the pot-ends simmered together into one rich stew, topped with a mash crust and baked (uses the week's leftovers)", estCalories: 520, estProtein: 17 },
  ],
  shopping: [
    { item: "Potatoes", qty: "10 lb", cost: 4.0, note: "layered into every pot" },
    { item: "Neck of mutton / lamb", qty: "1 lb", cost: 4.5 },
    { item: "Sausages + rashers", qty: "½ lb each", cost: 4.0 },
    { item: "Beef shin", qty: "¾ lb", cost: 4.0 },
    { item: "Carrots + parsnips", qty: "2 lb", cost: 2.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Pearl barley", qty: "1 bag", cost: 2.0, spansWeeks: true },
    { item: "Dark stout", qty: "1 can", cost: 2.0 },
    { item: "Wholemeal flour + bread soda", qty: "bag + box", cost: 2.5, spansWeeks: true },
    { item: "Butter + milk", qty: "½ lb + 1 qt", cost: 3.5, spansWeeks: true },
    { item: "Thyme + bay", qty: "small", cost: 1.5, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const ieWeek3Bacon: WeekPlan = {
  slug: "ie-week-3-bacon",
  number: 3,
  cuisine: "irish",
  theme: "Bacon & Cabbage",
  title: "Week 3 — Bacon & Cabbage",
  description:
    "The national dinner, and the cottager's whole economy in a pot. A cheap cut of cured bacon or a ham hock simmers slowly, the cabbage cooks in its salty liquor, and every part of the pig — and every drop of that broth — is made to count across a full week.",
  context: `Bacon and cabbage is the dinner the whole island claims, and it tells the story of the pig — the cottager's bank. A family that kept a pig cured it against the lean months, and a cut of that salt bacon, or a knuckly ham hock, simmered with a head of cabbage was Sunday dinner across rich and poor alike. The trick is in the broth: the cabbage cooks in the bacon's salty liquor, the potatoes are boiled to go alongside, and not a drop of that flavoured water is thrown out — it becomes the next day's soup. The cheaper collar and trimmings get hashed with potato; the hock falls off the bone into colcannon; the bone itself goes on to make a pot of broth. One pig's worth of cheap cured pork, properly worked, feeds a household for a week and wastes nothing.`,
  dishes: ["Bacon and cabbage", "Ham hock with colcannon", "Collar hash", "Bacon-broth and cabbage"],
  proteinNote:
    "Cured bacon, a ham hock, and collar are the meat of the week — salty, cheap, and stretched far; the dairy and a parsley sauce made on milk fill the rest.",
  bonus: false,
  preciousThread:
    "A knuckly ham hock — a few cents of bone and gristly meat that gives a whole week of dinners and a pot of broth its smoky, salty backbone.",
  engine: [
    "Potatoes — boiled to go with the bacon and mashed into the colcannon (the constant base)",
    "Brown & soda bread — a brown loaf to soak up the parsley sauce and broth",
    "Dairy — butter and a milk-based parsley sauce poured over the bacon",
    "Onion/bacon base + oats — the bacon itself is the base; onions in the broth, oats to thicken the soup",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "bacon and cabbage with parsley sauce and boiled potatoes", estCalories: 580, estProtein: 24 },
    { day: "Mon", dinner: "ham hock fallen off the bone, folded through colcannon", estCalories: 560, estProtein: 22 },
    { day: "Tue", dinner: "collar hash — bacon ends fried crisp with potato and onion", estCalories: 540, estProtein: 19 },
    { day: "Wed", dinner: "bacon-broth soup with cabbage, potato and a handful of oats", estCalories: 500, estProtein: 16 },
    { day: "Thu", dinner: "leftover bacon and cabbage fried into a colcannon cake with mustard", estCalories: 540, estProtein: 18 },
    { day: "Fri", dinner: "meatless cabbage and potato in the leftover broth, soda bread alongside", estCalories: 480, estProtein: 13 },
    { day: "Sat", dinner: "zero-waste: the ham bone simmered with the last cabbage, potato and oats into a thick broth (uses the week's leftovers)", estCalories: 500, estProtein: 17 },
  ],
  shopping: [
    { item: "Potatoes", qty: "8 lb", cost: 3.5, note: "boiled and mashed all week" },
    { item: "Cured bacon joint", qty: "1.5 lb", cost: 5.0 },
    { item: "Ham hock", qty: "1 large", cost: 3.0 },
    { item: "Bacon collar / trimmings", qty: "½ lb", cost: 2.5 },
    { item: "Cabbage", qty: "2 heads", cost: 3.0 },
    { item: "Onions", qty: "~2 lb", cost: 2.0, spansWeeks: true },
    { item: "Wholemeal flour + bread soda", qty: "bag + box", cost: 2.5, spansWeeks: true },
    { item: "Butter + milk", qty: "½ lb + 2 qt", cost: 4.0, spansWeeks: true },
    { item: "Parsley", qty: "1 bunch", cost: 1.5 },
    { item: "Porridge oats", qty: "stock", cost: 1.5, spansWeeks: true },
    { item: "Mustard", qty: "1 jar", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 17,
};

export const ieWeek4Bread: WeekPlan = {
  slug: "ie-week-4-bread",
  number: 4,
  cuisine: "irish",
  theme: "Brown Bread & Brotchán",
  title: "Week 4 — Brown Bread & Brotchán",
  description:
    "The buttermilk loaf and the soup pot, the warmest corner of the frugal kitchen. A bowl of brotchán roy thick with leeks and oatmeal, leek and potato soup, a brothy vegetable pot, and a cabbage-and-bacon broth — each one made whole by a slab of warm brown bread and butter.",
  context: `Before yeast was common in the cottage, bread was made in minutes: wholemeal flour, a spoon of bread soda, a splash of soured buttermilk, baked in the bastable pot over the fire into a dense, nutty brown loaf — no proving, no kneading, ready inside the hour. That loaf is the partner of the soup pot, and Irish soups are thrifty marvels. Brotchán roy is the old monastic broth of leeks, oats and milk, thickened with a handful of oatmeal until it is almost a porridge of vegetables. Leek and potato is its plainer cousin; a brothy pot of whatever roots the garden gives makes vegetable soup; and the liquor from a bacon pot, loaded with cabbage and potato, makes a meal of a broth. With a fresh-baked farl and a thick smear of butter, a bowl of soup is dinner — cheap, warm, and quick.`,
  dishes: ["Brotchán roy", "Leek & potato soup", "Vegetable soup", "Cabbage & bacon broth"],
  proteinNote:
    "Oatmeal and milk thicken the soups into something sustaining; a little bacon in the broth and the cheese-and-butter on the brown bread carry the protein floor. The leanest week — lean on the loaf.",
  bonus: false,
  preciousThread:
    "A bundle of leeks and a jug of buttermilk — sweet alliums and the tang that makes both the brotchán and the brown loaf sing for pennies.",
  engine: [
    "Potatoes — the body of every soup, blended thick or left in chunks (the constant base)",
    "Brown & soda bread — the whole point of the week: warm brown loaves and farls baked fresh, buttered",
    "Dairy — milk in the brotchán, butter on the bread, buttermilk in the loaf",
    "Onion/bacon base + oats — onions and a little bacon to start the pot; oatmeal to thicken every soup",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "brotchán roy — leek, oat and milk broth, with a warm brown loaf and butter", estCalories: 540, estProtein: 16 },
    { day: "Mon", dinner: "leek and potato soup, thick and buttery, with soda farl", estCalories: 500, estProtein: 14 },
    { day: "Tue", dinner: "vegetable soup of the garden roots, brown bread and cheddar alongside", estCalories: 520, estProtein: 15 },
    { day: "Wed", dinner: "cabbage and bacon broth with potato and a handful of oats", estCalories: 540, estProtein: 18 },
    { day: "Thu", dinner: "brotchán reheated thick over toasted brown bread, a poached egg on top", estCalories: 560, estProtein: 18 },
    { day: "Fri", dinner: "meatless leek-and-potato soup with extra oatmeal and a cheese farl", estCalories: 500, estProtein: 14 },
    { day: "Sat", dinner: "zero-waste: all the soup-ends combined into one thick pottage, stale brown bread fried as croutons (uses the week's leftovers)", estCalories: 480, estProtein: 14 },
  ],
  shopping: [
    { item: "Potatoes", qty: "8 lb", cost: 3.5, note: "the body of every soup" },
    { item: "Leeks", qty: "4 large", cost: 3.0 },
    { item: "Wholemeal flour", qty: "5 lb", cost: 3.0, spansWeeks: true },
    { item: "Bread soda", qty: "1 box", cost: 1.0, spansWeeks: true },
    { item: "Buttermilk", qty: "2 qt", cost: 3.5 },
    { item: "Butter + milk", qty: "1 lb + 3 qt", cost: 5.0, spansWeeks: true },
    { item: "Porridge oats", qty: "1 bag", cost: 2.0, spansWeeks: true },
    { item: "Carrots + celery + parsnip", qty: "2 lb", cost: 2.5 },
    { item: "Onions", qty: "~2 lb", cost: 2.0, spansWeeks: true },
    { item: "Bacon ends", qty: "¼ lb", cost: 1.5 },
    { item: "Cheddar", qty: "½ lb", cost: 3.0 },
    { item: "Eggs", qty: "6", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 26,
  steadyStateWeekly: 15,
};

export const ieWeek5Iasc: WeekPlan = {
  slug: "ie-week-5-iasc",
  number: 5,
  cuisine: "irish",
  theme: "Iasc / Fish",
  title: "Week 5 — Iasc / Fish",
  description:
    "Coastal thrift, where a frugal nation lived between the sea and the bog. A creamy fish chowder thick with potato, mussels gathered from the rocks and steamed in cider, herring rolled in oatmeal and fried, and a cheap mackerel grilled fresh off the pier — the bounty the poor coast could reach.",
  context: `For people on the western seaboard, the sea was the larder when the land failed. The fish were the cheap, oily, abundant ones — herring salted by the barrel, mackerel hauled in by the boat-load, and mussels and cockles gathered for nothing off the rocks at low tide. A chowder stretches a little fish and the day's broth with a base of potato and milk into a whole pot. Herring, the silver of the poor, is rolled in oatmeal and fried in bacon fat — the oats both stretch it and crisp it. Mussels steam open in a splash of cheap cider with onion. Mackerel, too oily to keep and so nearly given away, is grilled fresh the day it lands. Always there is the potato boiled alongside and the brown loaf to mop the liquor — the sea's protein laid over the land's constant base.`,
  dishes: ["Fish chowder", "Mussels in cider", "Herring fried in oatmeal", "Grilled mackerel"],
  proteinNote:
    "Cheap oily fish — herring, mackerel — and gathered mussels carry a generous protein week; the milk in the chowder and the oat coating add to it. The meatiest-feeling week, for the least money.",
  bonus: false,
  preciousThread:
    "A bag of mussels gathered for nothing and a splash of dry cider — the coast's free protein and a pennies' worth of apple sharpness that make a pot taste of the sea.",
  engine: [
    "Potatoes — the body of the chowder and boiled alongside every fish (the constant base)",
    "Brown & soda bread — a brown loaf to mop the chowder and the mussel liquor",
    "Dairy — milk and butter in the chowder, butter on the bread",
    "Onion/bacon base + oats — onion and a little bacon fat to start; oatmeal to coat the herring and thicken the chowder",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "fish chowder thick with potato, milk and a little smoked fish, brown bread to mop", estCalories: 560, estProtein: 24 },
    { day: "Mon", dinner: "mussels steamed open in cider and onion, brown bread for the broth", estCalories: 480, estProtein: 22 },
    { day: "Tue", dinner: "herring rolled in oatmeal and fried in bacon fat, with buttery champ", estCalories: 560, estProtein: 23 },
    { day: "Wed", dinner: "grilled mackerel with boiled potatoes and a smear of mustard butter", estCalories: 540, estProtein: 26 },
    { day: "Thu", dinner: "reheated chowder with extra potato, a soda farl alongside", estCalories: 520, estProtein: 20 },
    { day: "Fri", dinner: "oatmeal-fried herring (a fitting Friday fish) with mashed potato and butter", estCalories: 540, estProtein: 22 },
    { day: "Sat", dinner: "zero-waste: all the picked fish and mussel meat folded with leftover mash into fish cakes, fried in oatmeal (uses the week's leftovers)", estCalories: 520, estProtein: 21 },
  ],
  shopping: [
    { item: "Potatoes", qty: "8 lb", cost: 3.5, note: "chowder body and boiled alongside" },
    { item: "Mussels", qty: "2 lb", cost: 4.0 },
    { item: "Herring", qty: "4 fish", cost: 3.5 },
    { item: "Mackerel", qty: "3 fish", cost: 4.0 },
    { item: "Smoked / white fish offcuts", qty: "½ lb", cost: 3.0 },
    { item: "Dry cider", qty: "1 bottle", cost: 2.5 },
    { item: "Butter + milk", qty: "½ lb + 2 qt", cost: 4.0, spansWeeks: true },
    { item: "Porridge oats", qty: "stock", cost: 1.5, spansWeeks: true },
    { item: "Onions", qty: "~2 lb", cost: 2.0, spansWeeks: true },
    { item: "Wholemeal flour + bread soda", qty: "bag + box", cost: 2.5, spansWeeks: true },
    { item: "Bacon fat / lard", qty: "small", cost: 1.5, spansWeeks: true },
    { item: "Mustard + parsley", qty: "jar + bunch", cost: 2.0, spansWeeks: true },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const ieWeek6Oats: WeekPlan = {
  slug: "ie-week-6-oats",
  number: 6,
  cuisine: "irish",
  theme: "Oats & Barley",
  title: "Week 6 — Oats & Barley",
  description:
    "The grains and pulses that fed the island long before — and alongside — the potato. A savoury oat pudding sliced and fried, a long-simmered barley-and-mutton broth, and a thick pease pudding of dried peas — the oldest, cheapest sustenance in the Irish larder, made into proper dinners.",
  context: `Before the potato and beside it, the Irish ate oats and barley — the grains that grew in cold, wet ground and kept dry through the winter. Oatmeal was breakfast as stirabout, but it was dinner too: bound with onion, herbs and a little bacon fat, packed and set, then sliced and fried into a savoury oat pudding (the cousin of white and drisheen puddings). Barley, cheap and filling, simmers for hours with a scrap of mutton and root vegetables into a thick, sustaining broth that is half soup and half stew. Dried peas — the field peas of the cottage garden — soak overnight and cook down into a dense pease pudding, sliced cold or spread warm, that fed a family on next to nothing. These are the foods of true scarcity, the bottom of the larder, and the Irish cook made them warming and good.`,
  dishes: ["Savoury oat pudding", "Barley & mutton broth", "Pease pudding", "Oat-and-onion cakes"],
  proteinNote:
    "Dried peas and pearl barley do real protein work; a scrap of mutton and a little bacon in the puddings, plus the dairy, carry the rest. A surprisingly sustaining week on the cheapest grains.",
  bonus: false,
  preciousThread:
    "A handful of dried split peas and a scrap of mutton — the cheapest pulse and the smallest piece of meat, simmered until they give a whole pot its savour.",
  engine: [
    "Potatoes — boiled alongside and mashed into the oat cakes (the constant base)",
    "Brown & soda bread — an oaty brown loaf, buttered, beside every bowl",
    "Dairy — milk in the puddings, butter to fry and to spread",
    "Onion/bacon base + oats — the very theme: oats and barley with onion and a little bacon at the heart of every dinner",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "savoury oat pudding set, sliced and fried, with mashed potato and onion gravy", estCalories: 560, estProtein: 17 },
    { day: "Mon", dinner: "barley and mutton broth simmered thick, with brown bread", estCalories: 560, estProtein: 20 },
    { day: "Tue", dinner: "pease pudding with boiled potatoes and a little fried bacon", estCalories: 540, estProtein: 19 },
    { day: "Wed", dinner: "oat-and-onion cakes fried crisp, a poached egg and buttermilk alongside", estCalories: 520, estProtein: 16 },
    { day: "Thu", dinner: "reheated barley broth over champ, soda farl to mop", estCalories: 540, estProtein: 18 },
    { day: "Fri", dinner: "meatless pease pudding with mashed potato and a knob of butter", estCalories: 500, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: leftover pease pudding, oat pudding and barley fried together into a thick grain cake with onion (uses the week's leftovers)", estCalories: 500, estProtein: 17 },
  ],
  shopping: [
    { item: "Potatoes", qty: "8 lb", cost: 3.5, note: "boiled and mashed all week" },
    { item: "Pinhead / porridge oats", qty: "2 bags", cost: 3.0, spansWeeks: true },
    { item: "Pearl barley", qty: "2 bags", cost: 3.0, spansWeeks: true },
    { item: "Dried split peas", qty: "1 lb", cost: 2.0, spansWeeks: true },
    { item: "Mutton scrap / neck", qty: "¾ lb", cost: 3.5 },
    { item: "Bacon ends", qty: "¼ lb", cost: 1.5 },
    { item: "Onions", qty: "~3 lb", cost: 2.5, spansWeeks: true },
    { item: "Carrots + celery", qty: "1.5 lb", cost: 2.0 },
    { item: "Wholemeal flour + bread soda", qty: "bag + box", cost: 2.5, spansWeeks: true },
    { item: "Butter + milk", qty: "½ lb + 2 qt", cost: 4.0, spansWeeks: true },
    { item: "Eggs + buttermilk", qty: "6 + 1 qt", cost: 3.5, spansWeeks: true },
  ],
  firstShopTotal: 27,
  steadyStateWeekly: 15,
};

export const ieWeek7Fry: WeekPlan = {
  slug: "ie-week-7-fry",
  number: 7,
  cuisine: "irish",
  theme: "Fry & Féile",
  title: "Week 7 — Fry & Féile",
  description:
    "The fry-up brought to the supper table, and the festival bread that crowns the year. The full Irish as an evening meal, white pudding and potato hash, lacy boxty off the griddle, and a sweet, fruited barmbrack — the celebration end of the frugal week, every penny of pork and every crust made to count.",
  context: `When there was a little to spare — a feast day, a féile, the end of a good week — the Irish kitchen put on the fry. The 'full Irish' is itself a thrifty plate dressed as plenty: a rasher and a sausage, a slice of black and white pudding made from the cheapest offal and oatmeal, a fried egg, a fried potato cake and soda farl, all cooked in the one pan in the one fat. Served as supper it is a celebration that costs little. White pudding and the morning's leftover potato fry up together into a hash; boxty comes back, this time as the festive griddle cake; and the year's great sweet bread, the fruited **barmbrack**, studded with cheap dried fruit and traditionally baked with a ring hidden inside at Samhain, ends the arc on something sweet. Festival food, in the cucina-povera tradition, is simply the everyday larder given a little more care and a little more joy.`,
  dishes: ["The full Irish (as supper)", "White pudding & potato hash", "Boxty", "Barmbrack"],
  proteinNote:
    "The fry is the meatiest plate of the arc — rasher, sausage, pudding and egg — and the barmbrack and dairy round it out. The festival week, so the protein floor is comfortably met.",
  bonus: false,
  preciousThread:
    "A few slices of white and black pudding and a handful of dried fruit for the brack — cheap offal-and-oatmeal and a scattering of sultanas that turn an ordinary week into a féile.",
  engine: [
    "Potatoes — fried as cakes and hash, the base of the fry and the boxty (the constant base)",
    "Brown & soda bread — soda farls fried in the pan, and the fruited barmbrack baked from the same flour",
    "Dairy — butter to fry, buttermilk in the farls and the brack, milk on the table",
    "Onion/bacon base + oats — the rashers, sausages and oat-bound puddings of the fry are the savoury base itself",
  ],
  days: [
    { day: "Sun", isCookDay: true, dinner: "the full Irish as supper — rasher, sausage, black and white pudding, egg, fried farl and potato cake", estCalories: 620, estProtein: 24 },
    { day: "Mon", dinner: "white pudding and potato hash with a fried egg and fried onion", estCalories: 580, estProtein: 19 },
    { day: "Tue", dinner: "boxty pancakes off the griddle, with the last rashers", estCalories: 540, estProtein: 17 },
    { day: "Wed", dinner: "fried soda farls with black pudding and a poached egg", estCalories: 560, estProtein: 18 },
    { day: "Thu", dinner: "potato-cake hash with the last of the sausages and a slice of brack", estCalories: 560, estProtein: 18 },
    { day: "Fri", dinner: "meatless boxty with fried egg, cheese and buttermilk on the side", estCalories: 520, estProtein: 16 },
    { day: "Sat", dinner: "zero-waste: every pan-end — pudding, potato cake, rasher scraps — fried into one big supper hash, brack toasted and buttered after (uses the week's leftovers)", estCalories: 540, estProtein: 18 },
  ],
  shopping: [
    { item: "Potatoes", qty: "8 lb", cost: 3.5, note: "cakes, hash and boxty all week" },
    { item: "Rashers + sausages", qty: "½ lb each", cost: 4.5 },
    { item: "Black + white pudding", qty: "1 ring each", cost: 4.0 },
    { item: "Eggs", qty: "1.5 dozen", cost: 5.0, spansWeeks: true },
    { item: "Wholemeal + plain flour", qty: "bag each", cost: 3.0, spansWeeks: true },
    { item: "Bread soda + buttermilk", qty: "box + 1 qt", cost: 2.5, spansWeeks: true },
    { item: "Dried fruit (sultanas/raisins) for brack", qty: "½ lb", cost: 2.5 },
    { item: "Cold tea + sugar (for brack)", qty: "stock", cost: 1.0, spansWeeks: true },
    { item: "Butter + milk", qty: "1 lb + 2 qt", cost: 4.5, spansWeeks: true },
    { item: "Onions", qty: "~2 lb", cost: 2.0, spansWeeks: true },
    { item: "Cheddar", qty: "½ lb", cost: 3.0 },
  ],
  firstShopTotal: 30,
  steadyStateWeekly: 18,
};

export const irishWeeks: WeekPlan[] = [
  ieWeek1Spuds,
  ieWeek2Stews,
  ieWeek3Bacon,
  ieWeek4Bread,
  ieWeek5Iasc,
  ieWeek6Oats,
  ieWeek7Fry,
];
