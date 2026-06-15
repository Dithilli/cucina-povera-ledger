# World Cuisine Arcs — Research Reference

> **Status: RESEARCH ONLY. Not yet seed data.** These are candidate cuisines for
> extending the challenge beyond Italian *cucina povera*. Nothing here has been
> converted into `Recipe`/`WeekTheme`/`WeekPlan` objects or seeded into the DB.
> Treat this as a curated idea bank, not the source of truth.

## What this is

The app is **challenge-agnostic**: *cucina povera* is challenge #1, not the app
(see `CLAUDE.md` rule 3 and the `Cuisine = "italian" | (string & {})` type in
`src/content/types.ts`). This document collects **24 of the world's great
"magnificent-from-almost-nothing" peasant cuisines**, each sketched as a **7-week
challenge arc** in the same register as the Italian one: themed weeks built around
a humble staple or technique, real named dishes, a protein strategy that clears
~100 g/day cheaply, zero waste, and each week's single allowed luxury (the
"precious thread").

These are the cuisines **beyond** the four already selected to build first
(Mexican/Mesoamerican, Levantine, North Indian, American South/Soul/Creole), so
those four are intentionally not duplicated here.

## How it maps to the content model

When one of these is promoted from research to seed data:

- Each **week** → a `WeekTheme` (and, when fully built out, a `WeekPlan`) under
  `src/content/weeks/`, registered in `src/content/index.ts`.
- Each **dish** → a `Recipe` under `src/content/recipes/` with real `perServing`
  macros and a best-effort `estCostPerServing` (numbers come from real recipes,
  never invented — see the hybrid-generator rule).
- The **"precious thread"** maps naturally to a week's one luxury / `preciousThread`.
- The **"modern move"** is the per-dish `modernMove` field.
- The **"zero-waste hero"** is a `zeroWasteHero: true` recipe.

## Curation note

24 cuisines × ~5 dishes each is far more than any one challenge needs — this is a
deliberately wide net to curate down from. Sources are cited per cuisine so any
agent building these out can verify dishes and pull real macro/cost data.

---

# Latin America

## Andean (Peruvian & Bolivian Highland) — feed a body for cents at 3,800m by turning frost, dirt-cheap tubers, and ají into food that tastes like a feast.
- **Why it fits:** Highland cuisine was engineered by Quechua and Aymara farmers to survive Andean scarcity — freeze-drying potatoes underfoot to last a decade, stretching one chicken into a creamy stew with stale bread, and seasoning bland staples with a fistful of ají. Poverty cooking the Inca state ran on, still genuinely delicious.
- **Staple pillars:** Tubers (fresh potato, chuño/tunta), grains (quinua, mote/choclo, barley), legumes (habas/fava, beans), preserved/fermented (chuño, mote, chicha de jora), fat (oil, dripping, queso fresco), aromatics (onion, garlic, huacatay/black mint, cumin, ají paste).
- **Protein strategy:** Eggs scrambled into chuño (chuño phuti), fava beans + quinua, queso fresco/paria folded into sauces, cheap offal (hen, tripe for cau cau), small lake fish (ispi, pejerrey) — dairy and legumes over prime meat to clear ~100g/day on ~$55/week.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Potatoes & tubers | Golden, creamy, ají-warm | Papa a la huancaína; Causa limeña; Ocopa | Good queso fresco |
| 2 | Chuño & freeze-drying | Earthy, smoky, slate-grey | Chuño phuti (egg-scrambled); Chairo | A few eggs to bind the phuti |
| 3 | Quinua & grains | Toasty, milky, herbaceous | Quinua atamalada; Sopa de quinua; Pesque de quinua | Queso paria melted in |
| 4 | Corn / choclo | Sweet, plump, husk-steamed | Humitas; Pastel de choclo; Mote | Butter/lard in the choclo dough |
| 5 | Legumes & beans | Hearty, ochre, stew-thick | Locro de zapallo; Chupe de habas y cebada; Picante de habas | Fresh fava + cheese |
| 6 | Ají & sauces | Bright, fiery, green-gold | Ají de gallina; Llajwa; Rocoto relleno | A jar of ají amarillo paste |
| 7 | Dairy & cheese | Molten, white, comforting | Queso humacha; Queso frito; Rocoto relleno gratin | The week's queso paria |

- **Zero-waste hero:** **Ají de gallina** — yesterday's boiled hen, its broth, and *stale bread soaked into the sauce* become a luxurious creamy chili stew over already-cooked potatoes. Runner-up: chuño phuti, rescuing rock-hard preserved potato into a silky egg scramble.
- **Modern move:** Treat the ají/huancaína/ocopa bases as restaurant emulsions — blend ají amarillo, queso fresco, and hot liquid to a glossy pourable sauce, plate as a swoosh under the tuber. Pennies, fine-dining mouthfeel.
- **Sources:** https://perudelights.com/quinoa-atamalada-eating-the-andean-way/ · https://www.boliviabella.com/revuelto-de-chuno.html · https://en.wikipedia.org/wiki/Aj%C3%AD_de_gallina · https://en.cocina-boliviana.com/recetas/main-course/queso-humacha

## Brazilian (Northeastern Sertão) — drought-forged genius: rice, beans, and cassava stretched into a banquet, nothing wasted, every grain made to sing.
- **Why it fits:** Born in the semi-arid sertão from the survival cooking of *vaqueiros* and *sertanejos*, engineered to feed bodies through droughts on shelf-stable staples — cowpeas, sun-dried meat, cassava flour — yet one of Brazil's most soulful food cultures. *Baião de dois* is praised as "the creativity and strength of the sertão people, made nutritious from few ingredients."
- **Staple pillars:** rice + *farinha de mandioca* + corn (*flocão*/hominy); cowpea (*feijão de corda*) & *feijão verde*; *carne de sol*/*carne seca*; pork lard, *dendê*, coconut; onion, garlic, *coentro*, *pimenta-de-cheiro*, lime.
- **Protein strategy:** the cowpea is the everyday engine (*baião de dois* = complete protein cheaply); eggs in *farofa*/*cuscuz*; offal (*buchada*, *sarapatel*) wastes nothing; salty *carne de sol*/*charque* seasons far more than its weight; *queijo coalho* + dried shrimp; corn *mungunzá* with milk.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Feijão de corda (cowpea core) | Earthy beans, smoke, garlic, cilantro, lime | Baião de dois; feijão verde refogado; bean tutu | A knob of cured charque |
| 2 | Farinha de mandioca & farofa | Toasty, crunchy, golden, buttery | Farofa de ovo; paçoca de carne de sol; pirão | A spoon of banha (pork lard) |
| 3 | Cuscuz & milho | Sweet-savory corn, steam, coconut | Cuscuz nordestino recheado; mungunzá; canjica | Fresh grated coconut |
| 4 | Tapioca & goma | Clean, chewy, white, blank-canvas | Tapioca (sweet & savory); beiju; bolo de goma | Squeaky queijo coalho |
| 5 | Arroz & baião | Fluffy grains carrying everything | Baião de dois com queijo coalho; arroz de leite; galinha caipira rice | A little manteiga de garrafa |
| 6 | Carne de sol & vísceras | Salt, sear, deep meaty funk | Carne de sol com macaxeira; escondidinho; buchada/sarapatel | The week's fresh carne de sol |
| 7 | Coco & dendê (Afro-Bahian finale) | Glowing red palm oil, coconut, chili | Acarajé with vatapá; vatapá; moqueca-style fish | A bottle of dendê + dried shrimp |

- **Zero-waste hero:** **Pirão** — yesterday's fish heads, bones, or trimmings simmered into broth, then thickened with *farinha de mandioca* into a glossy savory porridge. Runner-up: *paçoca de carne de sol*, pounding stale toasted cassava flour with leftover dried-beef scraps into an addictive mince.
- **Modern move:** Treat *carne de sol* like charcuterie — control the cure, low-temp confit/sous-vide render so it turns silky and rosy, then sear hard for a Maillard crust; finish with a *farofa* "soil" and a *pirão* quenelle.
- **Sources:** https://en.wikipedia.org/wiki/Bai%C3%A3o_de_dois · https://en.wikipedia.org/wiki/Carne_de_sol · https://en.wikipedia.org/wiki/Escondidinho

## Puerto Rican / Caribbean — a culture that turns rice, plantain, and a fistful of salt cod into feasts; restriction is the recipe.
- **Why it fits:** Cocina criolla was forged by Taíno foragers, enslaved Africans, and rationed jíbaro farmers who built a whole table from viandas, dried legumes, salt-preserved cod, and an aromatic green base — abundance engineered from scarcity, now a national identity.
- **Staple pillars:** medium-grain rice + viandas (plantain, yuca, ñame, batata, breadfruit); gandules (pigeon peas) & habichuelas; bacalao (salt cod), olives/capers, escabeche; lard/olive oil + achiote oil; sofrito/recaíto (recao/culantro, ají dulce, garlic, onion, cubanelle).
- **Protein strategy:** legume backbone (gandules, habichuelas guisadas) most days, stretched by eggs (serenata, mangú), rehydrated bacalao, and small amounts of pork (skin, hock, a little pernil) as seasoning protein.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Rice & gandules | Achiote-orange rice, earthy peas, smoky pegao | Arroz con gandules; asopao de gandules; habichuelas guisadas | A little pork/jamón |
| 2 | Sofrito / recaíto base | Green, herbaceous, garlicky | Sofrito/recaíto; pollo guisado; carne guisada | Good achiote/annatto oil |
| 3 | Plantain — green & ripe | Crisp salty tostones vs caramel maduros | Tostones; amarillos/maduros; mofongo | Chicharrón / pork cracklings |
| 4 | Bacalao / salt cod | Briny, oceanic, vinegar-bright | Bacalaítos; serenata de bacalao; bacalao guisado | The salt cod itself |
| 5 | Viandas / roots | Starchy, buttery roots, olive-oil drizzle | Viandas con bacalao; guineos en escabeche; funche | Olive oil, capers & olives |
| 6 | Beans / habichuelas | Deep stewed legumes, calabaza-thickened | Habichuelas guisadas; sancocho; arroz con habichuelas | A ham hock / smoked bone |
| 7 | Masa & wrapped fritters | Green-plantain masa, fried & leaf-steamed | Pasteles; alcapurrias; guanimes | Plantain leaves + picadillo pork |

- **Zero-waste hero:** **Mofongo** — yesterday's fried green plantain (or tostone offcuts) mashed in a pilón with garlic, chicharrón scrap, and broth; pair with reduced bacalao-soaking liquid so even the salt-cod brine isn't wasted.
- **Modern move:** Treat **pegao like socarrat** — finish rice over high heat for a deliberate crackling crust, plate crisp-side up; reduce sofrito into a concentrated "sofrito jam."
- **Sources:** https://en.wikipedia.org/wiki/Puerto_Rican_cuisine · https://www.discoverpuertorico.com/article/guide-to-traditional-puerto-rican-food · https://senseandedibility.com/serenata-codfish-salad/

## Oaxacan / Southern Mexican — corn, beans, and chiles spun into a feast: the original "make miracles from a milpa."
- **Why it fits:** Pre-Hispanic Zapotec and Mixtec cooking is built on the *milpa* (corn-bean-squash) and the *comal*, wringing complete deeply-flavored meals from a handful of staples plus seasonal/foraged finds — luxury here is a pinch of toasted ant, not a slab of steak.
- **Staple pillars:** nixtamalized masa (tortillas, tlayudas, tetelas, chochoyones); black beans; dried chiles, vinegar pickles (chileajo), salted-dried meat; *asiento* (pork lard), pepita/sesame oils; garlic, white onion, avocado leaf, epazote, native herbs.
- **Protein strategy:** daily black beans + eggs + quesillo/queso fresco; pepitas and sesame in salsas; foraged insects (chapulines, chicatanas) by the spoonful; a small ration of salted *tasajo*/*cecina* across many tortillas.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Masa & nixtamal | Toasty corn, smoky asiento, charred salsa | Tlayuda sencilla; memelas w/ asiento & beans; molotes | A little quesillo |
| 2 | Black beans | Earthy, anise-sweet avocado leaf, garlic | Frijoles negros de la olla con hoja de aguacate; refritos; tetelas | A few slices of tasajo/cecina |
| 3 | Chiles & moles | Deep, layered, bittersweet | Mole amarillo; mole coloradito; chileajo de verduras | Drinking chocolate/cacao for the mole |
| 4 | Native green herbs | Bright, grassy, anise & licorice | Tamales de chepil; fish/eggs in hoja santa; rice w/ hierba de conejo | Hoja santa |
| 5 | Foraged & corn fungus | Funky, nutty, mushroom-earthy | Quesadillas de huitlacoche; salsa de chicatana; sopa de guías con chochoyones | Chapulines / chicatanas |
| 6 | Salsas & seeds | Smoky, nutty, crunchy | Salsa de chile pasilla Oaxaqueño; salsa macha; pepián | Chile pasilla Mixe |
| 7 | Masa antojitos & milpa | Crisp-edged, herby, communal | Tetelas; segueza; caldo de piedra | Fresh chepil / squash blossoms |

- **Zero-waste hero:** **Sopa de guías con chochoyones** — a rainy-season pot using the *entire* squash plant (vines, leaves, baby squash, blossoms) + chepil, thickened with masa dumplings pinched from leftover dough. Runner-up: **segueza**, turning coarsely cracked toasted dry corn into a hearty chile stew.
- **Modern move:** Build on freshly nixtamalized hand-ground masa toasted hard on a screaming comal; finish with controlled smoke and acid — a quenelle of pasilla-Mixe salsa macha or pineapple-vinegar chileajo brine, toasted seeds/insects for contrast.
- **Sources:** https://saltandwind.com/the-seven-moles-to-eat-oaxaca-mexico/ · https://www.thechoppingblock.com/blog/sopa-de-guias-con-chochoynes-oaxaca-squash-vine-soup-with-masa-dumplings · https://myoaxacankitchen.com/what-is-hoja-santa/ · https://muybuenoblog.com/chile-pasilla-oaxaqueno-salsa/

---

# East Asia

## Korean — magnificence from a fistful of grain, a crock of fermented soybean, and whatever the garden gave you.
- **Why it fits:** For centuries Korean farming households stretched rationed rice with cheaper grains and built meals around fermented-soybean *jang* and a rotating cast of seasoned vegetable *banchan*; Buddhist temple cooks turned the same restriction into a 1,600-year-old near-zero-waste art.
- **Staple pillars:** rice extended with barley (*boribap*), potatoes; soybeans (tofu, *kongnamul*, the *jang* trinity), mung beans; *doenjang*/*ganjang*/*gochujang*, kimchi, salted *jeotgal*/dried anchovies; toasted sesame & perilla oil; garlic, scallion, ginger, gochugaru.
- **Protein strategy:** soy backbone — tofu, *sundubu*, *kongnamul* sprouts, eggs (*gyeran-jjim*) — plus tiny dried anchovies (*myeolchi*) stir-fried as *bokkeum* and in nearly every stock, with pork used sparingly as a flavor-carrier.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Bap — stretch the grain | Nutty, earthy, chewy barley + rice | Boribap w/ namul; doenjang-jjigae; ssamjang | Toasted perilla oil, by the drop |
| 2 | Jang — the fermented trinity | Deep, salty-savory, aged umami | Doenjang-jjigae; gochujang-glazed dishes; ssamjang | A spoon of aged guk-ganjang |
| 3 | Kongnamul & dubu | Clean crunchy sprouts; silky custard tofu | Kongnamul-gukbap; sundubu-jjigae; kongnamul-muchim | Eggs cracked into the sundubu |
| 4 | Banchan economy | Sweet-savory sticky mitbanchan | Myeolchi-bokkeum; gyeran-jjim; gamja-jorim; sigeumchi-namul | A bag of dried myeolchi anchovies |
| 5 | Kimchi — the living preserve | Funky, sour, fiery, alive | Kimchi-jjigae; kimchi kongnamul-guk; kimchi-bokkeumbap | Thin slices of pork belly |
| 6 | Sachal-eumsik (temple frugality) | Pure, seasonal, allium-free | Pyogo-bap; gaji-jijim; dureup-muchim | Dried shiitake / foraged spring shoots |
| 7 | Bibimbap — the consolidation | Every color, every leftover, one bowl | Bibimbap; dolsot-bibimbap; sungnyung | One fried egg + a thread of gochujang |

- **Zero-waste hero:** **Nurungji** — the golden scorched-rice crust, eaten crisp, simmered into *nurungji-tang*, or steeped into *sungnyung*. Sibling: **kimchi-jjigae**, the canonical fate of over-sour kimchi.
- **Modern move:** Build on a properly extracted **anchovy-kelp dashi (myeolchi-dasima yuksu)** and *layer the three jangs* (doenjang for body, guk-ganjang for salt+aroma, a whisper of gochujang for heat+color). Pair with the *dolsot* hot-stone-bowl move for tableside nurungji.
- **Sources:** https://en.wikipedia.org/wiki/Korean_cuisine · https://en.wikipedia.org/wiki/Korean_temple_cuisine · https://www.greatbritishchefs.com/features/korean-fermentation-jangs-and-kimchi · https://www.beyondkimchee.com/nurungji-scorched-rice/ · https://www.koreanbapsang.com/myulchi-bokkeum-stir-fried-anchovies/

## Japanese (washoku / shojin) — magnificent meals coaxed from rice, soybeans, and seaweed by people who refused to waste a single grain.
- **Why it fits:** Japanese peasants and Zen monks built nourishing, beautiful food from the cheapest plant matter — soybeans in every form, milled-rice byproducts, sea vegetables — under religious and economic restriction. *Shojin ryori* forbade meat, fish, even onion/garlic, yet defines Kyoto temple meals; *mottainai* turned cold rice into *ochazuke* and tofu dregs into a beloved side.
- **Staple pillars:** short-grain rice + bran (*nuka*); soybeans as tofu, *aburaage*, *okara*, *yuba*, miso, natto; miso, *tsukemono* (nukazuke, umeboshi); toasted sesame oil/paste; *dashi* (kombu + katsuobushi), negi, ginger, shiitake.
- **Protein strategy:** soybean stack — natto (~15-18g/serving), tofu, okara, aburaage — backed by eggs (*tamagoyaki*) and Japan's cheapest fish: grilled salted *saba* and *iwashi*.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Rice & the meal's heart | Clean rice, warm miso, a quick pickle | Steamed gohan; misoshiru (tofu + wakame); onigiri w/ umeboshi | Real umeboshi |
| 2 | Dashi, the umami spine | Smoky-marine broth, glossy greens | Awase dashi; kenchin-jiru; ohitashi | A bag of premium katsuobushi |
| 3 | Miso, the fermented economy | Deep brown, salty-sweet, caramelized | Saba misoni; nasu dengaku; daikon + aburaage miso soup | Saikyo white miso for misozuke |
| 4 | Tofu & the soybean stack | Silky white, golden-fried, custard-soft | Hiyayakko; agedashi tofu; goma-dofu | Fresh yuba |
| 5 | Tsukemono & the nuka pot | Bright, sour, crunchy, alive | Nukazuke; umeboshi; asazuke | Aged kombu in the nukadoko |
| 6 | Mixed rice & frugal proteins | Earthy, soy-glazed, mushroom-deep | Takikomi gohan; natto gohan; kinpira gobo | A few dried shiitake |
| 7 | Mottainai finale | Comforting, layered, nothing left | Ochazuke over yesterday's rice; unohana; tamagoyaki | Good sencha for the ochazuke |

- **Zero-waste hero:** **Ochazuke** — the last cold rice revived by hot tea/dashi, topped with leftover grilled salmon, umeboshi, or nori. And **unohana**, rescuing *okara* by dry-roasting and simmering with carrot and burdock. All-arc backbone: **niban dashi** (Week 2's spent kombu/katsuobushi re-simmered into a second stock).
- **Modern move:** *Misozuke* — marinating tofu, egg yolk, or cheap saba in Saikyo white miso 1-3 days; enzymes and salt cure a $1 ingredient so it grills up lacquered and deeply savory. Pair with the shojin *go mi / go shiki / go ho* (five tastes, colors, methods) discipline.
- **Sources:** https://www.atlasobscura.com/foods/shojin-ryori-japanese-temple-cuisine · https://www.justonecookbook.com/ichiju-sansai/ · https://www.justonecookbook.com/how-to-make-dashi/ · https://www.masterclass.com/articles/nukadoko-recipe · https://www.justonecookbook.com/okara-unohana/ · https://www.justonecookbook.com/ochazuke/

## Cantonese & Southern Chinese — a coastal-and-paddy cuisine that wrings deep umami from a fistful of rice, a smear of ferment, and the parts everyone else throws away.
- **Why it fits:** Born in the rice paddies and fishing villages of Guangdong, built on stretching one ingredient across a week — a single salted fish flavoring a whole pot of rice, every part of pig and fish used, pungent preserves standing in for fresh protein. "Magnificent food from almost nothing" is the literal design brief of clay-pot rice and pork-patty-with-salted-fish.
- **Staple pillars:** jasmine rice (and its second life as congee/jook and scorched crust); soy/tofu/fermented bean curd (furu, nam yu); preserved & dried (mui choy, zha cai, dong cai, salted fish *haam yu*, dried shrimp, conpoy); rendered pork fat & cured meat (lap cheong, lap yuk) as seasoning; ginger, scallion, garlic, white pepper, dried tangerine peel.
- **Protein strategy:** protein as a *seasoning layered over rice* — a thin steamed pork patty feeding a family, eggs in three forms (fresh, salted duck, century) in one custard, tofu and yong tau foo, small whole fish and dace paste, offal in congee, tiny amounts of dried shrimp/conpoy for huge umami. Bones become the congee/stock base.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Jook (Congee) | Clean, savory, white-pepper warmth, silky | Pei daan sau yuk juk (century egg & pork); fish congee w/ dace & dried shrimp; pork-liver topping | A few century/preserved duck eggs |
| 2 | Mui Choy & preserves | Dark, sweet-salty, deeply braised | Mei cai kou rou (pork belly w/ mui choy); steamed minced pork w/ zha cai | One piece of pork belly, shared |
| 3 | Salted fish (Haam Yu) | Pungent, intense, rice-driven | Haam yu jing yuk beng (pork patty w/ salted fish); salted-fish fried rice | A single small salted fish |
| 4 | Tofu & Furu | Creamy, savory, garlicky, veg-bright | Hakka yong tau foo (stuffed tofu); furu/nam yu stir-fried ong choy | A jar of red fermented bean curd |
| 5 | Lap Mei (cured meats) | Smoky, sweet, wine-cured, glossy | Lap mei fan (rice w/ lap cheong + lap yuk); steamed chicken w/ sausage | A couple links lap cheong + lap yuk |
| 6 | Bo Zai Fan (clay-pot rice) | Crackling, caramelized, charred edges | Bo zai fan w/ lap cheong, lap yuk & cracked egg; salted-fish variant | A clay pot + an egg per pot |
| 7 | Dried-seafood finale | Luxurious, glossy, fiery-savory | Homemade XO sauce; conpoy-and-egg-white fried rice | Conpoy (dried scallop) — the one splurge |

- **Zero-waste hero:** **Guoba / 鍋巴** — the scorched clay-pot rice crust, coaxed by drizzling oil down the pot rim and listening for the crackle. Plus yesterday's hardened rice reborn as morning congee, and fish bones/heads simmered into its stock.
- **Modern move:** Build flavor in controlled layers; treat dried seafood (conpoy, dried shrimp) as an aromatic "tare," blooming it in oil first so glutamates infuse the fat. Precision rim-drizzle + low-heat-and-listen for a perfect Maillard *guoba*.
- **Sources:** https://thewoksoflife.com/mei-cai-kou-rou-pork-belly/ · https://thewoksoflife.com/steamed-pork-salted-fish/ · https://woksoflove.com/authentic-cantonese-clay-pot-rice-bao-zai-fan/ · https://thewoksoflife.com/xo-sauce-recipe/

## Vietnamese — magnificence wrung from broken grains, fermented fish, and a pot of caramel.
- **Why it fits:** For most of its history Vietnam ran on subsistence farming and fishing; its defining technique — *kho* — was engineered so families ate less precious meat and more cheap rice, intensely sweet-salty to stretch a few scraps. Even *cơm tấm* (broken rice) is poverty by design: fractured grains too damaged to export, saved by Mekong Delta farmers.
- **Staple pillars:** broken rice (tấm) + leftover rice for cháo; pork-belly scraps and caramel (nước màu); nước mắm, mắm tôm, đồ chua pickles; đậu hũ (tofu), trứng (eggs); garlic, shallot, scallion, chili, fresh herbs.
- **Protein strategy:** eggs and tofu carry the daily floor (trứng chiên nước mắm, đậu hũ sốt cà chua); a single braise of pork belly or whole river fish (cá kho) stretches across meals; dried shrimp + tôm rim add concentrated protein; mắm/nước mắm make rice and vegetables eat like a full meal.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Broken rice (cơm tấm) | Smoky, savory, the fractured grain as the point | Cơm tấm w/ grilled pork; trứng chiên nước mắm; đồ chua | Charcoal-grilled pork belly |
| 2 | The caramel braise (kho) | Sweet-salty, mahogany glaze, slow simmer | Thịt kho trứng (pork & egg in coconut water); gà kho gừng | Pork belly scraps, braised to last |
| 3 | Tofu & egg | Soft, golden, tomato-bright | Đậu hũ sốt cà chua; trứng chưng | A drizzle of good fish sauce |
| 4 | Nước mắm / nước chấm | Bright, salty-sweet-sour, herbaceous | Rice w/ nước chấm; bún w/ herbs; tôm rim | A handful of small shrimp |
| 5 | Greens & pickles | Garlicky, crunchy, tangy | Rau muống xào tỏi; canh rau muống; đồ chua | A spoon of oyster sauce |
| 6 | River fish braise (cá kho tộ) | Dark, peppery, caramel + fish sauce | Cá kho tộ; canh chua cá (from the same fish) | One whole catfish or mackerel |
| 7 | Mắm — fermented soul | Pungent, funky, transformative umami | Bún đậu mắm tôm; rice w/ mắm + greens | A jar of mắm tôm |

- **Zero-waste hero:** **Cháo** — rice porridge from yesterday's rice, finished with whatever's on hand. Sibling: the **kho pot itself** (better on day three). The Week 6 fish does double duty — braised one night, trimmings into canh chua the next.
- **Modern move:** Treat nước màu like a gastrique and **build the caramel to the edge of bitter** (deep amber before deglazing with fish sauce + coconut water). Pair with a nước chấm balanced "slightly stronger than comfortable" (per Andrea Nguyen) for a sharp pop of acid and salt.
- **Sources:** https://en.wikipedia.org/wiki/Kho_(cooking_technique) · https://www.wokandkin.com/ca-kho-to/ · https://www.vietworldkitchen.com/blog/2008/11/basic-vietnamese-dipping-sauce-nuoc-cham.html · https://takestwoeggs.com/chao-ga-vietnamese-chicken-rice-porridge/

---

# South & Southeast Asia

## South Indian (Tamil/Kerala Tiffin) — fermentation turns two pennies of rice and lentil into a week of complete-protein meals.
- **Why it fits:** Built on the cheapest crops of the wet South — paddy rice, urad/toor dal, tamarind, coconut — original poverty cuisine: soaked grain and pulse, fermented overnight by wild bacteria, stretched across idli, dosa, and gruel. No refrigeration, oven, or meat required.
- **Staple pillars:** par-boiled rice, idli rava, leftover rice; urad dal (batter), toor dal (sambar/rasam), chana/moong (adai, podi); overnight idli-dosa batter, curd/buttermilk (moru), tamarind, pickles; coconut + gingelly/sesame oil; mustard seed, curry leaf, asafoetida, dried chili.
- **Protein strategy:** rice + urad/toor dal is *complementary* (complete protein via fermented batter and dal stews). Layer curd/buttermilk, an egg, a few rupees of small oily fish on the coast. Adai (multi-lentil dosa) and paruppu podi are the protein-density power moves.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Fermented batter | Sour, soft, steam-leavened | Idli; plain dosa; coconut chutney | Fresh grated coconut |
| 2 | Lentils / dal | Earthy, tempered, complete-protein | Toor dal sambar; paruppu podi; medu vada | Gingelly (sesame) oil |
| 3 | Rasam / tamarind | Thin, peppery, tangy, digestive | Paruppu rasam; milagu (pepper) rasam; rasam-saadham | Black pepper & garlic |
| 4 | Coconut (Kerala) | Mellow, milky, grated-coconut comfort | Thoran; avial; olan | Fresh coconut milk |
| 5 | Podi & spice powders | Dry, roasted, shelf-stable | Idli milagai podi (gunpowder); curry-leaf podi; ellu podi | Cashews (festive podi-rice) |
| 6 | Rice (whole & repurposed) | Soft-grain mains and gruels | Curd rice (thayir saadham); lemon rice; kanji | Ghee |
| 7 | Coastal tiffin & protein | Eggs, curd, small fish over batter | Adai; meen curry w/ kudampuli; mathi (sardine) fry | Small oily fish (sardine/mackerel) |

- **Zero-waste hero:** **Idli upma** — yesterday's hardened idlis crumbled and sautéed with mustard seed, curry leaf, a spoon of gunpowder. (Stale rice → kanji/curd rice plays the same trick.)
- **Modern move:** Control the ferment like a sourdough — measured rice:urad (4:1), precise hydration, temp/time staging — for cloud-light idli and lacy dosa, plus a screaming cast-iron tawa and a brush of gingelly oil.
- **Sources:** https://en.wikipedia.org/wiki/Idli · https://en.wikipedia.org/wiki/Rasam_(dish) · https://en.wikipedia.org/wiki/Thoran

## Sri Lankan — a fistful of red rice, a coconut, and a pinch of dried fish stretch into a fortnight of curries.
- **Why it fits:** Built on the cheapest tropical abundance — rice, coconut, lentils, foraged greens, a sliver of cured fish — where parippu simmers at least once a day and a few chips of Maldive fish *are* the protein. One tree (jackfruit, the "rice tree") and a single coconut make a full table.
- **Staple pillars:** red/white rice + rice-flour hoppers (appa) and string hoppers (idiyappam); red masoor lentils (parippu/dhal); umbalakada (Maldive fish), dried sprats, tamarind; fresh grated coconut and coconut milk (kiri hodi); curry leaves, pandan, cinnamon, mustard seed, shallot, green chili.
- **Protein strategy:** red-lentil parippu at most meals (twice daily in coconut milk), a daily egg in an egg hopper, dried sprats and umbalakada pounded into sambols, high-fat coconut padding calories so legume protein isn't burned for fuel; jackfruit seeds (kos ata).

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Rice & curry | Turmeric-gold, chili-red, brinjal-purple | Parippu; wambatu moju; papadum | A daily egg |
| 2 | Parippu / dhal | Creamy red-lentil, mustard-tempered | Parippu; parippu vade; dhal w/ tempered shallots | Fresh coconut for coconut milk |
| 3 | Coconut & sambols | Snowy coconut, fiery chili, lime-bright | Pol sambol; lunu miris; katta sambol | Maldive fish (umbalakada) |
| 4 | Jackfruit (polos / kos) | Pulled-meat brown, tamarind-dark, cinnamon | Polos curry; kos ata curry; ripe varaka | Cinnamon & curry leaves |
| 5 | Hoppers & string hoppers | Lacy bowl-pancakes, golden gravy | Egg hoppers (biththara appa); idiyappam; kiri hodi | An egg in the hopper |
| 6 | Greens & mallung | Shredded emerald greens flecked with coconut | Gotu kola mallung; cassava-leaf mallum; kola kanda | A handful of dried sprats |
| 7 | Dried fish & treacle | Smoky umbalakada-brown, kithul-amber | Seeni sambol; umbalakada sambola; curd w/ kithul treacle | Kithul treacle / jaggery |

- **Zero-waste hero:** **Kola kanda** — an Ayurvedic herbal rice porridge simmering broken/leftover rice with coconut milk and gotu kola; alongside **kanji**, rescuing surplus rice, while every coconut is scraped to the shell.
- **Modern move:** Slow-braise young jackfruit (polos) 1–1.5 hrs in roasted curry powder, tamarind, cinnamon, coconut milk until it shreds like pulled pork — a flavor sponge plated against crisp lacy hoppers.
- **Sources:** https://www.islandsmile.org/sri-lankan-dhal-curry-parippu/ · https://www.theflavorbender.com/sri-lankan-jackfruit-curry-polos/ · https://www.linsfood.com/maldive-fish-sri-lankan-cooking/

## Filipino (Lutong Bahay) — frugality is a technology: vinegar, salt, sun, and fermentation turn spoilage into flavor.
- **Why it fits:** Lutong bahay was forged by colonial-era scarcity and tropical heat — adobo, tuyo, daing, and bagoong all exist because pre-refrigeration Filipinos preserved meager protein in vinegar, salt, and sun. Rice extends everything; "no food is ever wasted" is a stated cultural value.
- **Staple pillars:** steamed rice + day-old rice for sinangag; monggo (mung beans); bagoong, tuyo & daing, patis, suka; pork/lard, coconut oil, gata; garlic, onion, ginger, tomato (ginisa base), calamansi, tamarind.
- **Protein strategy:** monggo carries legume protein; eggs power tortang giniling and the silog plate; small/dried fish (galunggong, tuyo, daing, dilis) for pennies; tokwa (tofu); a *little* pork (liempo scraps, ground giniling) or chicharon as seasoning-meat.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Rice & the ginisa base | Toasty garlic, day-old rice, garlic-onion-tomato | Sinangag; tapsilog-style plate; arroz caldo | A couple of eggs (the silog itlog) |
| 2 | Monggo & legumes | Earthy mung beans in the ginisa | Ginisang munggo; munggo w/ malunggay; w/ ampalaya leaves | Crushed chicharon / a little liempo |
| 3 | Adobo & the vinegar method | Suka + soy + garlic + bay | Adobong manok/baboy; adobong sitaw at kalabasa; adobong pusit | A little pork belly (liempo) |
| 4 | Dried & small fish | Salt, smoke, sun | Daing na bangus; tuyo; pritong galunggong | A fresh galunggong, fried whole |
| 5 | Sour soups | Tamarind sourness, ginger warmth | Sinigang na baboy; tinolang manok; sinigang na isda | A fresh fish head/tail for broth |
| 6 | Eggs & tokwa | Golden omelets, fried tofu, soy-vinegar | Tortang giniling; tokwa't baboy; tortang talong | Eggs (the binding luxury) |
| 7 | Bagoong & the fermented finish | Briny fermented shrimp paste | Binagoongan baboy; kare-kare w/ bagoong; ginisang bagoong | Gata (coconut milk) |

- **Zero-waste hero:** **Sinangag** — yesterday's rice, dried overnight, seared crisp in garlic and lard, paired with scrap protein (fried egg, flaked tuyo).
- **Modern move:** Treat the ginisa and adobo braise like a French reduction — caramelize the garlic-onion-tomato base hard, build a glossy reduced adobo sauce, finish with crisp-fried aromatics.
- **Sources:** https://businessmirror.com.ph/2021/09/14/galunggong-poor-mans-fish-no-more/ · https://brewminate.com/the-history-and-lore-of-adobo-how-a-vinegar-powered-classic-became-a-filipino-icon/ · https://www.kawalingpinoy.com/sinangag/

## Indonesian / Javanese — a fermentation engine turns cheap soybeans, rice, and a fingertip of shrimp paste into a complete-protein peasant table.
- **Why it fits:** Tempe was born in 17th-century Java as a staple of the lower classes — noble texts barely mention it because it was poor-people's food — yet fermentation makes the humblest soybean a complete protein. The cuisine feeds a household on rice, soy, peanuts, and garden vegetables, with costly stuff as seasoning.
- **Staple pillars:** nasi (rice), lontong; tempe and tahu (the fermented-soy engine), peanuts; terasi (shrimp paste), petis, ikan asin & teri, kecap manis; coconut milk (santan), frying oil; shallot, garlic, chili, galangal, candlenut, bay, palm sugar, tamarind.
- **Protein strategy:** tempe/tahu does the heavy lifting (100g tempe ≈ 20g protein). Daily tempe + tahu (~40g) + an egg + peanut sauce + a scatter of teri/ikan asin clears ~100g/day without meat; fermentation boosts digestibility and B-vitamins.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Nasi — the rice foundation | Clean rice, lalapan, sharp condiment | Nasi putih + lalapan; sambal terasi; nasi uduk | Terasi (toasted shrimp paste) |
| 2 | Tempe — the soy engine | Sweet-dark braise, caramel stir-fry | Tempe bacem; tempe orek; tempe mendoan | Kecap manis (sweet soy) |
| 3 | Tahu — the white twin | Silky tofu in spice and gravy | Tahu tempe bacem; tahu bumbu rujak; tahu goreng | A little santan |
| 4 | Sambal & terasi | Chili paste that makes plain rice a meal | Sambal terasi matang; sambal tomat; sambal teri | Ikan teri (tiny salted fish) |
| 5 | Peanut sauce | Blanched vegetables in peanut sauce | Gado-gado; pecel; karedok | Peanuts |
| 6 | Sayur & lalapan | Coconut-milk and tamarind vegetable pots | Sayur lodeh; sayur asem; raw lalapan | An egg (boiled into the bowl) |
| 7 | Small & salted fish | Crisp fried fish, rice, sambal, raw greens | Pecel lele; balado teri kacang; ikan asin goreng | A little ikan asin |

- **Zero-waste hero:** **Nasi goreng** — day-old rice stir-fried with garlic, sweet soy, sambal, and tempe/egg scraps; born to keep pre-refrigeration leftover rice from spoiling. Honorable mention: **tempe gembus**, fermented from ampas tahu (okara) into a second protein from factory waste.
- **Modern move:** Treat tempe like a dry-aged ingredient — a slow bacem braise in coconut water, palm sugar, and aromatics until sugars caramelize, then a hard flash-fry for a lacquered crackling crust over a custardy interior.
- **Sources:** https://en.wikipedia.org/wiki/Tempeh · https://en.wikipedia.org/wiki/Nasi_goreng · https://en.wikipedia.org/wiki/Sayur_lodeh

---

# Sub-Saharan Africa

## West African (Nigerian & Ghanaian) — magnificent food built on cassava, beans, and a spoonful of red palm oil.
- **Why it fits:** Nigerian and Ghanaian home cooking is engineered around cheap storable staples — rice, cassava, beans, groundnuts — stretched with dried fish, crayfish, and pepper into deeply-seasoned one-pots; cassava (gari) alone feeds ~200 million across West Africa. Built on fermentation, drying, and pounding.
- **Staple pillars:** rice and fermented cassava (gari → eba, fufu); black-eyed peas/cowpeas and red kidney beans; dried/smoked fish, ground crayfish, fermented locust bean (iru/dawadawa); red palm oil and groundnut paste; onion, scotch bonnet, ginger, tomato.
- **Protein strategy:** black-eyed peas (akara, moimoi, waakye) and red beans carry the floor; groundnut paste makes protein-and-fat-dense stews; dried fish and ground crayfish season a whole pot for pennies; eggs and smoked fish top up; egusi (melon seed) doubles as thickener and protein.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Jollof & one-pot rice | Tomato, onion, scotch bonnet, smoky "party rice" | Jollof Rice; Waakye | A whole smoked fish for the pot |
| 2 | Beans (red red & the floor) | Red palm oil, caramelized onion, soft beans | Red Red; Gbegiri | Real red palm oil |
| 3 | Black-eyed peas, two ways | Fried crisp vs steamed silk | Akara; Moimoi | Eggs folded into the moimoi |
| 4 | Groundnut (peanut power) | Toasty peanut, tomato, ginger, chili | Groundnut Soup / Nkatenkwan | Bone-in chicken |
| 5 | Egusi & the leafy pot | Ground melon seed, greens, palm oil, crayfish | Egusi Soup; efo riro-style greens | Ground crayfish + dried fish |
| 6 | Cassava (gari → eba & fufu) | Fermented, pounded, swallow-and-soup | Eba and Fufu as "swallows" | A pounded-yam upgrade for one feast |
| 7 | Plantain & palm-oil finish | Sweet-ripe, ginger-cayenne, crisp | Kelewele; Dodo | Extra palm/red oil for frying |

- **Zero-waste hero:** **Soakings (garri "drink") and shitor.** Leftover gari soaked cold with sugar, peanuts, coconut; **shitor din** (fried pepper-and-dried-fish/crayfish chili oil) preserves cheap dried-fish trimmings into a months-keeping condiment. Leftover waakye/jollof reheats into next-day fried rice.
- **Modern move:** Treat the smoky base as a Maillard project — toast egusi or groundnut paste in red palm oil before adding liquid, and chase the prized "party jollof" bottom-pot char. Finish with a fresh raw scotch-bonnet/ginger "ata" relish.
- **Sources:** https://en.wikipedia.org/wiki/Waakye · https://en.wikipedia.org/wiki/Egusi · https://en.wikipedia.org/wiki/Garri · https://www.africanbites.com/groundnutpeanut-soup/ · https://demandafrica.com/food/recipes/kelewele-ghana-spicy-fried-plantains/

## Ethiopian & Eritrean — a fermented grain, a pot of legumes, and a spoon of spiced butter: proof that fasting and feasting are the same table.
- **Why it fits:** For up to two-thirds of the year a large share of Ethiopians/Eritreans observe Orthodox fasts forbidding all animal products, so the everyday "beyaynetu" platter is built from teff, lentils, peas, chickpeas, greens — shiro so humble it was historically the only wot many families ate except festivals.
- **Staple pillars:** teff injera (sour fermented flatbread) and kita/dabo; red lentils (misir), chickpea/broad-bean flour (shiro), yellow split peas (kik); the days-long injera ferment and dried/ground spice pastes; niter kibbeh (spiced clarified butter); berbere + mountains of slow-sweated onion.
- **Protein strategy:** cooked red lentils ~18g/cup, chickpeas/shiro ~14g/cup, yellow split peas comparable. A daily plate of misir wot + shiro + kik over teff injera passes 100g without meat. Toasted flax (telba) and sunflower seeds for fasting-day protein/fat; doro, beef zigni, ayib cheese are feast-day top-ups.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Injera & teff | Sour, lacy, nutty | 100% teff injera; kita; dabo kolo | A bag of true ivory teff flour |
| 2 | Misir (red-lentil wot) | Fiery brick-red, silky, berbere-deep | Misir wot; misir alicha | A jar of fresh-toasted berbere |
| 3 | Shiro (chickpea/bean-flour) | Velvety, garlicky, weeknight-fast | Shiro wot (tegabino); bozena shiro; shiro fitfit | A nub of niter kibbeh |
| 4 | Kik & alicha (gentle peas) | Sunny yellow, soothing, turmeric-bright | Kik alicha; ater kik alicha | Korarima + besobela (sacred basil) |
| 5 | Gomen & greens | Grassy, garlicky, restorative | Gomen (collards); atakilt wot | A wedge of fresh ayib cheese |
| 6 | Eritrean crossover | The same pot, a Red-Sea accent | Tsebhi birsen; tsebhi shiro; hilbet | A handful of dried faba beans |
| 7 | The feast (beyaynetu) | The full fasting platter + one indulgence | Beyaynetu spread; doro wot or zigni; kategna | One whole chicken (doro) |

- **Zero-waste hero:** **Fitfit / firfir** — torn day-old injera revived in berbere and niter kibbeh; or **kategna**, fresh injera toasted and smeared with the same. **Telba fitfit** folds leftover injera into ground flaxseed.
- **Modern move:** Treat berbere and niter kibbeh as a bloomed-spice base — toast and grind berbere fresh, then bloom it in niter kibbeh over low heat before building the wot. The "spiced-fat foundation + long onion sweat" is a French mirepoix's discipline.
- **Sources:** https://en.wikipedia.org/wiki/Ethiopian_cuisine · https://en.wikipedia.org/wiki/Shiro_(food) · https://en.wikipedia.org/wiki/Niter_kibbeh · https://en.wikipedia.org/wiki/Fit-fit · https://www.daringgourmet.com/niter-kibbeh-ethiopian-spiced-clarified-butter/

## Senegalese — magnificence wrung from a single pot of broken rice, one fish, and a fistful of fermented funk.
- **Why it fits:** Built on the cheapest grains in the market (broken rice rejected by exporters, drought-proof millet and fonio) stretched by groundnuts, black-eyed peas, and intensely concentrated dried/fermented fish — peasant thrift turned into the most celebrated cuisine in West Africa, where one fish flavors a pot for ten.
- **Staple pillars:** broken rice, millet, fonio; black-eyed peas (niébé), groundnut/peanut paste; guedj (salt-fermented dried fish), yet (fermented sea snail), netetou (fermented locust bean); peanut/groundnut oil and paste; onion, garlic, lime, scotch-bonnet, parsley, mustard, tamarind (dahkar), hibiscus (bissap).
- **Protein strategy:** black-eyed pea fritters (accara) and ndambe; thick groundnut-paste stews (mafe/domoda); pennies of guedj/yet/netetou for outsized umami so a little fresh fish goes far. Thiakry's yogurt/millet and bissap calyx add dairy protein and micronutrients.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Broken rice + the one-pot | Tomato, scotch-bonnet, garlic-parsley roff, scorched-rice crunch | Ceebu jën (thiéboudienne); ceebu jën bu weex | One whole fresh fish, stuffed w/ roff |
| 2 | Fermented funk (umami pantry) | Salt, low-tide brine, slow-cooked depth | Guedj-spiked braises; netetou sauce feuille; yet-laced rice | A spoon of netetou + a knob of guedj |
| 3 | Groundnut (the paste that stretches) | Toasty peanut, tomato, sweet potato, jaxatu | Mafé; domoda | A small cut of tougher lamb/beef |
| 4 | Black-eyed peas (niébé) | Onion, oil, crisp fritter edges, soft bean | Accara; ndambe | Fresh palm/peanut oil for frying |
| 5 | Yassa & lime (the acid week) | Slow-jammed onion, lime, Dijon mustard | Yassa ganaar (chicken); yassa jën (fish) | Dijon mustard + a bag of limes |
| 6 | Millet & fonio (dryland grains) | Nutty, fluffy, yogurt-cool, raisin-sweet | Thiéré (steamed millet couscous); fonio pilaf; thiakry | Fresh thick yogurt + raisins |
| 7 | Bissap & scraps (zero-waste finale) | Tart ruby hibiscus, tamarind, fish-bone richness | Bissap (calyx reused); tamarind dahkar relish; fish-frame broth rice | Hibiscus calyx + tamarind pods |

- **Zero-waste hero:** **Xoon** — the scorched caramelized broken-rice crust scraped from the ceebu jën pot (Senegal's answer to socarrat), prized not discarded; plus simmering leftover fish frames and steeping spent bissap calyces a second time.
- **Modern move:** Treat the fermented pantry (guedj, yet, netetou) as a deliberate umami seasoning — toast and grind into a fine "Senegalese dashi" powder — and finish the *xoon* under high direct heat (or a torch) like socarrat.
- **Sources:** https://en.wikipedia.org/wiki/Thieboudienne · https://www.196flavors.com/senegal-thieboudienne/ · https://en.wikipedia.org/wiki/Chakery · https://en.wikipedia.org/wiki/Peanut_stew

## East African (Kenyan & Tanzanian) — a coast-to-highlands cuisine that "stretches the week" by turning maize, beans, and coconut into feasts, reserving meat for the fire.
- **Why it fits:** Built on the literal logic of frugality — *sukuma wiki* means "push/stretch the week," and *githeri* (boiled maize + beans) has fed Kenyan schoolchildren since the 1920s. Grilled meat (*nyama choma*) is special-occasion; the daily table runs on grain, legume, and a thin thread of fat or spice.
- **Staple pillars:** maize meal (ugali), rice (wali), wheat (chapati/mandazi); dried beans, pigeon peas (mbaazi), cowpeas, groundnuts; sun-dried omena/dagaa (silver sardines), dried maize and beans; coconut milk (Swahili coast), a little oil/ghee inland; onion, tomato, garlic, ginger, chili, and the Zanzibar "pilau masala."
- **Protein strategy:** beans + maize (*githeri*) is a complete-protein backbone eaten daily; pigeon peas in coconut (*mbaazi za nazi*). The cheap animal hero is **omena/dagaa** — dried Lake Victoria sardines (~29g/100g, eaten bones-in for calcium). Groundnuts, eggs, cultured milk (mala) stretch further; nyama choma is the rare splurge.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Ugali (maize meal) | Toasted maize, green, smoke | Ugali na sukuma wiki; ugali + omena wet-fry; leftover-ugali fries | A knob of butter/ghee in the ugali |
| 2 | Beans & Githeri | One-pot legume stews | Githeri; madondo; mukimo/irio | Smoked/cured meat scrap |
| 3 | Coconut Coast (Nazi) | Coconut cream, clove, lime | Mbaazi za nazi; wali wa nazi; maharagwe ya nazi | One fresh coconut for first-press cream |
| 4 | Dagaa / Omena (tiny fish) | Dried fish, chili, tomato | Omena wet-fry w/ kachumbari; dagaa in coconut sauce | Fresh chili + lime |
| 5 | Chapati & fried breads | Flaky wheat, sugar, cardamom | Chapati (laminated); mandazi; mahamri | Cardamom + coconut milk in the dough |
| 6 | Rice & Spice (Pilau) | Caramelized onion, cumin, clove | Pilau; biriani ya kuku; kachumbari | Whole pilau masala |
| 7 | The Fire (Nyama Choma) | Char, salt, lime, raw onion | Nyama choma; kachumbari; ugali to mop | The meat — the once-a-week splurge |

- **Zero-waste hero:** **Leftover-ugali fries.** Day-old firm ugali slices clean into batons, egg-and-breadcrumb dipped (or salted), shallow-fried crisp with kachumbari. Crumbled stale ugali also goes back into fresh ugali or becomes croutons.
- **Modern move:** **First-press coconut cream + bloomed whole spices.** Press thick first extraction (*nazi ya kwanza*) separately from thin second press; build on the thin milk, finish with the rich first press off heat (keeps coconut sauces glossy/unsplit). Toast whole pilau-masala in oil before the rice.
- **Sources:** https://en.wikipedia.org/wiki/Sukuma_wiki · https://en.wikipedia.org/wiki/Mukimo · https://www.kaluhiskitchen.com/mbaazi-wa-nazi/ · https://eastafricachef.com/omena-stew-recipe-authentic-kenyan-silver-sardine-delight/

---

# Mediterranean & MENA

## Greek — when the land is poor and the sea is salty, you eat the legume, the weed, and the stale rusk — and make it taste like sunshine.
- **Why it fits:** Greek peasant cooking is built on *ladera* (oil-cooked vegetables), *ospria* (legumes), and foraged *horta* — meatless legume-stretched meals to feed a family on almost nothing. Fasolada, once dismissed as "poor man's food," is called the national dish.
- **Staple pillars:** dried beans/lentils/split peas (fasolia, fakes, fava); barley rusk and bread (paximadi); olive oil as the load-bearing fat; wild greens (horta); ferments/preserves (yogurt, feta, brined olives, capers, salt-cured small fish); onion, garlic, tomato, oregano, dill, lemon, wild fennel.
- **Protein strategy:** legumes first — fasolada, fakes, revithia, gigantes, Santorini fava (15–18g/bowl). Layer the *avgolemono* technique (egg + lemon) to fortify soups with cheap egg protein, add Greek yogurt and a little feta, and small oily fish (sardines, anchovies).

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Beans — the national bowl | White beans, tomato, celery, carrot, oil | Fasolada; gigantes plaki; gigantes salad | Unfiltered new-harvest olive oil |
| 2 | Lentils & chickpeas | Earthy lentils, chickpeas, bay, vinegar | Fakes; revithia/revithada; revithokeftedes | Good red-wine vinegar |
| 3 | Wild greens — horta | Bitter boiled greens, lemon, oil | Horta vrasta; hortopita; tsouknidopita (nettle) | A little feta in the pie |
| 4 | Bread & rusk | Stale barley turned to gold, tomato, oregano | Dakos; paximadia w/ oil; bread & tomato kayanas | Sour xynomizithra cheese |
| 5 | Ladera — oil-braised vegetables | Slow-cooked beans, okra, tomato, oil | Fasolakia ladera; bamies; briam | Brined capers |
| 6 | Fava & split peas | Golden split-pea purée, raw onion, lemon | Santorini fava; fava me karamelomena kremmydia; trahana | Salt-cured anchovies on top |
| 7 | Egg, lemon & the sea | Velvet egg-lemon broth, yogurt, small fish | Soupa avgolemono; marides tiganites; strapatsada | Thick strained Greek yogurt |

- **Zero-waste hero:** **Dakos.** Barley *paximadi* (double-baked rock-hard to keep for months) moistened with grated tomato and olive oil softens back into a full meal — stale "waste" bread reborn, no cooking.
- **Modern move:** Treat *avgolemono* like an emulsion — temper whole eggs whipped with lemon into hot broth off-heat for a silky glossy protein-rich veil over fasolada or fakes.
- **Sources:** https://www.dianekochilas.com/glossary-of-edible-wild-greens-2/ · https://en.wikipedia.org/wiki/Fasolada · https://thegreekfoodie.com/dakos-kritikos/

## Moroccan / Maghreb — semolina, legumes, and a preserved pantry: a Berber peasant table where a fistful of saffron or one preserved lemon makes humble grain a feast.
- **Why it fits:** Built on the cheapest staples of the Amazigh countryside — hand-rolled semolina, dried legumes, barley, day-old flatbread, olive oil, a few preserved aromatics — stretched by slow steaming and one-pot soups. Sardines and chickpea-bread soups like lablabi were "the poor man's food."
- **Staple pillars:** semolina (couscous, msemen, harcha) + barley + round khobz; chickpeas, brown/red lentils, dried fava; preserved lemons, smen (aged butter), brine-cured olives, harissa; olive oil, argan oil, a little smen; ras el hanout, chermoula, fenugreek, cumin, tomato + pepper bases.
- **Protein strategy:** legumes carry the day — harira (lentils + chickpeas), bissara (puréed fava), lablabi (chickpea broth), rfissa (lentils + bread). Stack a daily legume base with eggs (poached into kefta tagine or onto lablabi), sardines a few times a week, plus yogurt/buttermilk (l'ben).

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | The Friday couscous | Golden semolina, seven vegetables, buttery broth | Couscous aux sept légumes; couscous Tfaya; seksu belboula | Smen (aged preserved butter) |
| 2 | Khobz & the bread table | Round crusty loaves, olive oil | Khobz; batbout; zaalouk; taktouka | Good Beldi olives |
| 3 | Fava & the breakfast purée | Velvety green-gold fava, cumin, oil slick | Bissara/bessara; fava-and-egg breakfast | Cold-pressed olive oil (or argan) |
| 4 | Chickpea & lentil soups | Ramadan tomato broth, flour-thickened, lemon | Harira; lablabi (poached egg); chorba | Saffron threads |
| 5 | Preserved lemon & vegetable tagines | Slow-cooked roots, salty-sour citrus lift | Vegetable tagine w/ preserved lemon & olives; kefta tagine w/ eggs; loubia | Preserved lemon |
| 6 | Cheap Atlantic sardines | Silvery oily fish, green chermoula | Sardines mariées (chermoula-stuffed); grilled sardines; sardine kefta | Chermoula (w/ a thread of saffron) |
| 7 | Semolina griddle breakfasts | Flaky layered griddle breads, honey, mint tea | Msemen; harcha; baghrir | Wildflower honey (or amlou) |

- **Zero-waste hero:** **Rfissa** and **lablabi** both resurrect bread — rfissa tears day-old msemen/trid into a fenugreek-ras-el-hanout lentil broth; lablabi melts stale khobz into a garlic-cumin chickpea broth.
- **Modern move:** The **triple-steam couscous** technique — steaming the grain three times over the broth (not hydrating from a kettle), hand-rolling with oil between steams, for impossibly light broth-perfumed semolina. Plate with a chermoula or preserved-lemon emulsion.
- **Sources:** https://en.wikipedia.org/wiki/Rfissa · https://www.196flavors.com/lablabi/ · https://salimaskitchen.com/fava-bean-soup/

## Persian / Iranian — stretch one pot of rice, a fistful of legumes, and a whole garden of cheap herbs into feasts, where even the scorched bottom of the pot is the most fought-over prize.
- **Why it fits:** Structurally peasant-frugal: the *ash* (thick pottage) and *abgoosht* traditions extend a tiny amount of meat across many bowls with beans, barley, and greens, while *tahdig* canonizes thrift by turning the burnt crust into the dish everyone fights over. Herbs bought in huge cheap bundles (*sabzi*); preservation (dried limes, kashk, pomegranate molasses).
- **Staple pillars:** long-grain rice (chelo/polo), barley, reshteh noodles, flatbreads (sangak, lavash); lentils (*adas*), chickpeas, white and red kidney beans; kashk (dried whey), dried limes (*limoo amani*), pomegranate molasses, barberries; a little butter/oil for tahdig and mint-oil; onion, turmeric, garlic, and mountains of parsley, cilantro, dill, fenugreek, mint.
- **Protein strategy:** legumes first — *ash reshteh* and *adasi* stack lentils + chickpeas + kidney beans + barley; eggs in *kuku* (herb frittata); kashk and yogurt as toppings; walnuts; meat only in small amounts stretched through abgoosht and ghormeh sabzi.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Rice & tahdig | Golden, buttery, crackling crust | Chelo ba tahdig; tahchin-style crust; potato tahdig | Saffron |
| 2 | Herbs / sabzi & kuku | Bright green, grassy, egg-bound | Kuku sabzi; kuku bademjan; sabzi khordan herb plate | Walnuts & barberries |
| 3 | Lentils / adas | Earthy brown, cinnamon-warm, raisin-sweet | Adasi; adas polo | Dates & raisins |
| 4 | The ash thick-soup family | Dense, herby, noodle-tangled | Ash reshteh; ash-e jo (barley) | A drizzle of kashk |
| 5 | Kashk & eggplant | Smoky, tangy, caramelized | Kashk-e bademjan; mirza ghasemi | More kashk + mint oil (nana dagh) |
| 6 | Beans & the stretched stew | Brothy then mashed, two meals in one | Abgoosht / dizi over sangak | A single lamb shank |
| 7 | Dried-herb & preserved sourness | Deep-green, fermenty, sour-dark | Ghormeh sabzi; ash-e anar | Dried limes & pomegranate molasses |

- **Zero-waste hero:** **Tahdig** — the scorched pot-bottom crowned. Its truest frugal form is **nan tahdig**, laying stale lavash/sangak under the rice so yesterday's hardened bread crisps into the most coveted bite.
- **Modern move:** Build tahdig as a deliberate inverted "rice cake" — parboil, layer the base with a saffron-yogurt-butter slurry, cook hot to set then steam low under a cloth-wrapped lid (*dam*), flip out whole like a tarte tatin.
- **Sources:** https://persianmama.com/kuku-bademjan-eggplant-frittata/ · https://www.themediterraneandish.com/tahdig-recipe-crispy-persian-rice/ · https://www.196flavors.com/iran-abgoosht/

## Portuguese — turn stale bread, salt cod, and a fistful of garlic into a feast; the Alentejo motto is *pão, azeite, alho, coentros*.
- **Why it fits:** *Cozinha pobre* is canonical peasant cooking — açorda boils water, garlic, and stale bread into a meal; bacalhau is the salt-preserved "faithful friend" with 365+ preparations because dirt-poor households had to ring every change out of one dried fish. Caldo verde is at heart just potato, kale, and water.
- **Staple pillars:** broa (maize bread), rustic pão, rice, potato; dried beans (feijão), fava, chickpeas; bacalhau, canned/grilled sardines, chouriço & morcela as seasoning; olive oil (*azeite*); garlic, coriander, bay, onion, lemon.
- **Protein strategy:** stretch a *little* salt cod across potato and egg (à brás, bolinhos), bean stews and fava, eggs poached into the broth (açorda, migas), cheap oily fish (fresh or canned sardines). Chouriço/morcela and a knob of cheese add a protein top-up.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Bacalhau — the faithful friend | Salt cod, potato, egg, olive, onion, oil | Bacalhau à Brás; à Gomes de Sá; pataniscas | One good thick loin of bacalhau |
| 2 | Bread sops (Alentejo) | Stale bread, garlic, coriander, poached egg | Açorda à Alentejana; migas; açorda de marisco | A fistful of fresh coriander |
| 3 | Caldo verde & greens (Minho) | Couve-galega/kale, potato, oil, broth | Caldo verde; sopa de couve com feijão | A coin of real chouriço |
| 4 | Beans & the interior | Dried beans, fava, chickpea, cabbage, pork scraps | Feijoada à transmontana; favas guisadas; arroz de feijão | Smoked morcela/chouriço |
| 5 | Sardines & oily fish | Sardinhas, coarse salt, bread, peppers, lemon | Sardinhas assadas; caldeirada de peixe; sopa de cação | Fresh summer sardines |
| 6 | Broa & arroz | Maize bread, tomato, rice, oil, garlic | Broa de milho; arroz de tomate; arroz de feijão | A bottle of good azeite |
| 7 | Eggs & the convalescent pot | Eggs, rice, chicken bones, mint, garlic, bread | Canja de galinha; açorda crowned w/ egg; ovos com pão e azeite | A whole boiling hen / good eggs |

- **Zero-waste hero:** **Açorda / migas** — yesterday's hard bread reborn: açorda soaks stale chunks in garlic-coriander broth with a poached egg; migas fries crumbs in oil and garlic until they bind. Runner-up: **bolinhos/pataniscas de bacalhau**, stretching cod scraps with potato and flour.
- **Modern move:** Treat açorda as a sauce, not a mush — emulsify garlic, coriander, and warm olive oil into a loose *pestada*, fold in barely-set bread, slide a 63°C egg on top. (Or confit the bacalhau gently in olive oil before flaking into à brás for silky, never-dry cod.)
- **Sources:** https://www.visitportugal.com/en/content/traditional-portuguese-recipes-a%C3%A7orda-%C3%A0-alentejana-bread-stew · https://en.wikipedia.org/wiki/Caldo_verde · https://www.portugalist.com/alentejo-food/

---

# Northern/Eastern Europe & North America

## Polish / Eastern European — fermentation, frugality, and fat turn a sack of cabbage, rye, and potatoes into a feast.
- **Why it fits:** Canonical peasant cuisine — buckwheat fed common folk while nobility ate wheat, and bigos had a "Hultajski" (Rogue's) version stretching scarce meat with cabbage. Preservation (kiszenie, smoking, curing) let rural homes eat well through long winters on almost nothing.
- **Staple pillars:** rye, kasza gryczana (buckwheat), potato, wheat flour; white runner beans (fasola Piękny Jaś); kiszona kapusta (sauerkraut), zakwas (sour rye starter), dried mushrooms; słonina/smalec (lard), butter, smoked bacon (boczek); onion, garlic, marjoram, caraway, bay, allspice, dried porcini.
- **Protein strategy:** twaróg (farmer's curd) and eggs, white runner beans and bacon (fasolka po bretońsku), a single white sausage or smoked kiełbasa across a whole pot, and pulse-plus-dairy stacking (kasza + egg, pierogi + twaróg); a boiled egg crowning żurek.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Kapusta / fermented cabbage | Sour, funky, caraway, lard-glossed | Kiszona kapusta; kapuśniak; kapusta zasmażana | Smoked boczek rendered for depth |
| 2 | Ziemniaki / potato | Crisp, golden, sour-cream cooled | Placki ziemniaczane; kopytka | A spoon of soured cream + dill |
| 3 | Żyto / rye & sour bread | Tangy, fermented, marjoram, smoky | Zakwas → żurek/żur in a bread bowl | One biała kiełbasa + boiled egg |
| 4 | Kasza gryczana / buckwheat | Nutty, toasty, mushroom-forest | Kasza gryczana z grzybami i cebulą; buckwheat w/ a fried egg | Dried wild porcini |
| 5 | Fasola / legumes | Velvety, tomato-smoke, slow-simmered | Fasolka po bretońsku; bean-and-bacon stew on Piękny Jaś | A length of smoked kiełbasa |
| 6 | Pierogi / dumplings | Tender dough, buttery, caramelized onion | Pierogi ruskie; pierogi z kapustą i grzybami | Brown butter + extra twaróg |
| 7 | Bigos / hunter's stew finale | Deep, winey, prune-sweet, long-braised | Bigos; bigos hultajski (the frugal everyman) | Game/pork off-cuts, prunes, red wine |

- **Zero-waste hero:** Żurek built on **zakwas** — fermented rye flour-and-water scraps become the soul of a whole soup; pair with a stale-rye bread bowl and crown with leftover boiled-egg ends and white sausage.
- **Modern move:** Treat lacto-fermentation as deliberate seasoning — controlled kiszenie of cabbage and a brightly cultured zakwas give restaurant-grade acidity and umami; finish with brown butter and a sour-cream/herb counterpoint.
- **Sources:** https://www.polonist.com/polish-zurek-soup/ · https://www.everydayhealthyrecipes.com/authentic-polish-bigos-stew-recipe/ · https://www.polana.com/blogs/blog/kasza-ancient-grains-in-polish-cuisine

## Irish — world-class flavor wrung from a single tuber, a sack of oats, and the milk left over after churning.
- **Why it fits:** For two centuries the rural Irish lived on potatoes, oatmeal, buttermilk, and the odd scrap of bacon — a true poverty cuisine forged through "hungry July" and the Famine, where ingenuity made survival taste like comfort.
- **Staple pillars:** pinhead/rolled oats and the potato; kale, cabbage, leeks, nettles; buttermilk, salted/smoked herring & mackerel; Irish butter and bacon/pork drippings; scallions, leeks, onions, parsley.
- **Protein strategy:** dairy (buttermilk, farmhouse cheese, butter), eggs, oats blended into white pudding, offal and pork scraps (drisheen, crubeens, coddle bacon), oily cured fish (smoked mackerel, salt herring).

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | The Potato | Earthy, buttery, allium-bright | Champ; colcannon; boxty | Cultured Irish butter in the well |
| 2 | Oats | Toasty, nutty, porridge-to-pudding | Steel-cut porridge; Donegal oatcakes; white pudding | Suet + a little pork liver |
| 3 | Cabbage & Kale | Green, sweet, slightly sulfurous | Colcannon; kale-and-bacon braise | A single rasher of smoked bacon |
| 4 | Buttermilk & Dairy Bread | Tangy crumb, malty crust | Brown soda bread; white soda farl; griddle bread | Aged Irish farmhouse cheese |
| 5 | Bacon & Pork Scraps | Salty, porky, slow-simmered | Dublin coddle; bacon and cabbage; crubeens | Whole sausages in the coddle |
| 6 | Offal & Blood | Deep, spiced, frugal-rich | Drisheen; black-and-white pudding fry | Drisheen w/ tripe, the Cork way |
| 7 | Cured & Preserved Fish | Briny, smoky, oily-fresh | Smoked mackerel pâté; soused herring; oatmeal-crusted herring | Cold-smoked Atlantic mackerel |

- **Zero-waste hero:** **Boxty** — grated raw + leftover mashed potato bound with the day's buttermilk and a little flour, frying yesterday's spuds into a crisp golden cake; its name ("poor-house bread") is a monument to using everything.
- **Modern move:** Cultured-butter basting and a screaming cast-iron sear — brown the colcannon or boxty into a lacquered caramelized crust, finish with brown-butter and herb oil.
- **Sources:** https://www.dailymaverick.co.za/article/2019-03-15-boxty-colcannon-irish-cuisine-or-the-art-of-staying-alive-in-difficult-times/ · https://en.wikipedia.org/wiki/White_pudding · https://www.insightguides.com/inspire-me/blog/irish-food

## Jewish / Ashkenazi — the shtetl ethos of using every scrap of the chicken and every crust of bread.
- **Why it fits:** Born of genuine poverty in Eastern European shtetls, where chicken was a luxury and butter couldn't touch meat — so Jews rendered every bit of skin and fat into schmaltz, stretched grain and beans across the Sabbath, and made cured herring and a torn loaf taste like celebration.
- **Staple pillars:** rye bread, challah, barley, buckwheat/kasha, potato; white/lima beans (in cholent); brined/schmaltz herring, sauerkraut, pickles; schmaltz (rendered chicken/goose fat) and its byproduct gribenes; yellow onion, garlic, black pepper, caraway, bay.
- **Protein strategy:** eggs are the cheap workhorse (egg salad, eier mit tzibeles, matzo brei); cured herring; beans + barley + a small cut of cheap meat or bone in cholent stretch one protein over a 16–18-hour stew; dairy (cottage cheese, sour cream) and offal/derma (kishke).

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Schmaltz & gribenes | Rendered golden fat, crackling skin, sweet onion | Schmaltz; gribenes; chopped liver | A whole chicken, broken down — nothing wasted |
| 2 | Eggs | Soft eggs, raw onion bite, fat-slicked | Eier mit tzibeles; egg salad; matzo brei | Fresh dill + a spoon of schmaltz |
| 3 | Beans & barley (cholent) | Long, dark, savory Sabbath slow-stew | Cholent; kishke; hamin-style whole eggs | A modest cut of brisket or flanken |
| 4 | Herring & cured fish | Briny, sharp, oniony, cold | Schmaltz herring; forshmak; herring in sour cream | Sour cream & a tart grated apple |
| 5 | Bread (rye & challah) | Caraway rye, eggy braided challah | Caraway rye; challah; day-old-challah kugel | White wheat flour & eggs for challah |
| 6 | Kasha (buckwheat) | Nutty toasted groats, onion, bow-ties | Kasha varnishkes; buckwheat porridge; kasha-stuffed cabbage | Egg-noodle farfalle fried in schmaltz |
| 7 | Potato | Crisp-edged, custardy, starchy | Potato latkes; potato kugel; potatonik | Goose schmaltz & applesauce |

- **Zero-waste hero:** **Matzo brei** — softened broken matzo (or stale challah) bound with egg and fried in schmaltz. Runner-up: forshmak, folding soaked stale bread/matzah into chopped herring.
- **Modern move:** Treat schmaltz like a finishing oil and gribenes like a garnish — confit aromatics low and slow, then deploy the rendered fat and crackling bits as a salty umami crunch on eggs, kasha, latkes, or chopped liver.
- **Sources:** https://toriavey.com/schmaltz-and-gribenes/ · https://www.myjewishlearning.com/the-nosher/the-history-of-kasha-varnishkes/ · https://en.wikipedia.org/wiki/Forshmak

## Appalachian — mountain self-sufficiency: a year of preserved corn, dried beans, and foraged green made into feasts when fresh food is months away.
- **Why it fits:** Grew from isolated mountain homesteads where families lived on what they grew, hunted, foraged, dried, and canned — the "three sisters" plus a hog, stretched through winter. Beans-and-corn knowledge ties together the region's Cherokee, African, and European peoples; nearly every dish wastes nothing.
- **Staple pillars:** cornmeal & hominy (cornbread, grits, fried mush, cornpone); dried beans (pinto "soup beans," shucky/leather britches); preserved/fermented vegetables (chow chow, pickled beans, kraut); pork fat (fatback, streak o' lean, lard, cracklin's); foraged/garden aromatics (ramps, wild onions, sochan, creasy greens).
- **Protein strategy:** dried pinto beans (soup beans w/ fatback or ham hock), eggs, buttermilk/clabber and dairy, a little cured pork for flavor/fat, plus seasonal hunted/foraged add-ins (rabbit/squirrel stew, river fish); beans + cornbread = a near-complete protein daily.

| Week | Theme | Palette | Signature dishes | Precious thread |
|---|---|---|---|---|
| 1 | Corn | Toasted corn, buttermilk tang, cast-iron crust | Cast-iron buttermilk cornbread (no sugar); fried cornmeal mush; grits | Cracklin' folded into cracklin' cornbread |
| 2 | Soup beans | Earthy beans, smoke, onion, vinegar bite | Pinto soup beans w/ ham hock; cornpone; fried potatoes | A small ham hock |
| 3 | Leather britches & preserving | Concentrated "beefy" beans, salt-cure | Leather britches (shucky beans) rehydrated & stewed; pickled (sour) corn; kraut | A few strips of streak o' lean |
| 4 | Greens | Bitter green, hot bacon grease, vinegar | Killed (wilted) lettuce; creasy greens; poke sallet (parboiled 2-3 changes — never raw) | Reserved bacon grease |
| 5 | Foraging | Garlicky ramps, woodsy mushroom | Fried ramps w/ potatoes & eggs; fried morels; sochan & wild greens | A flush of fresh morels |
| 6 | Pork & the hog | Sausage, sawmill gravy, rendered lard | Sausage gravy over biscuits; fried apples; fatback fried crisp | Fresh breakfast sausage |
| 7 | Apples & celebration | Molasses-dark spice, slow-cooked apple | Dried apple stack cake; apple butter; fried apples | Molasses (the one sweetener splurge) |

- **Zero-waste hero:** Fried cornmeal mush — yesterday's cooked grits/mush set firm overnight, sliced and fried crisp in pork fat. (Stale cornbread → "cornbread and milk" or crumbled into soup beans.)
- **Modern move:** Treat dried beans and leather britches like a slow brodo — long gentle simmer with a smoked-pork "umami bomb," finish with acid (chow chow or pickle brine) and fat; deglaze foraged ramps/morels in brown butter, plate with a crisp cornbread crouton.
- **Sources:** https://www.wideopencountry.com/appalachian-recipes/ · https://www.osgf.org/blog/2021/10/13/leather-britches-an-appalachian-tradition · https://www.tastingtable.com/2012380/appalachian-foods-to-try/
