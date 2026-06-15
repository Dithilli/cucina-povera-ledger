// Barrel for the curated content library: recipes, docs, week plans.
// Re-exports every module and exposes typed aggregate arrays the app reads.

import type { Recipe, ContentDoc, WeekPlan, WeekTheme } from "./types";

export * from "./types";

// Recipes
export * from "./recipes/frittata-di-pasta";
export * from "./recipes/pasta-al-pomodoro-e-tonno";
export * from "./recipes/pasta-alla-norma";
export * from "./recipes/pasta-cacio-e-uova";
export * from "./recipes/pasta-e-ceci";
export * from "./recipes/pasta-e-fagioli";
export * from "./recipes/pasta-e-patate";
export * from "./recipes/spaghetti-con-la-mollica";
export * from "./recipes/uova-in-purgatorio";
// Week 2 — Bread
export * from "./recipes/ribollita";
export * from "./recipes/pappa-al-pomodoro";
export * from "./recipes/panzanella";
export * from "./recipes/acquacotta";
export * from "./recipes/fettunta";
// Week 3 — Eggs
export * from "./recipes/frittata-di-patate";
export * from "./recipes/herb-frittata";
export * from "./recipes/stracciatella";
export * from "./recipes/eggs-baked-over-greens";
// Week 4 — Legumes
export * from "./recipes/fagioli-all-uccelletto";
export * from "./recipes/lenticchie-in-umido";
export * from "./recipes/zuppa-di-legumi";
export * from "./recipes/cannellini-su-fettunta";
// Week 5 — Polenta
export * from "./recipes/polenta-e-fagioli";
export * from "./recipes/polenta-concia";
export * from "./recipes/polenta-mushroom-ragu";
export * from "./recipes/soft-polenta-egg";
export * from "./recipes/grilled-polenta-greens";
// Bonus — Sicilian
export * from "./recipes/pasta-con-le-sarde";
export * from "./recipes/caponata";
export * from "./recipes/sarde-a-beccafico";
// Bonus — Garden
export * from "./recipes/cicoria";
export * from "./recipes/minestrone";
export * from "./recipes/scarola-e-fagioli";
export * from "./recipes/peperonata";
// Bases — components the weeks build on (with full instructions)
export * from "./recipes/tomato-sugo";
export * from "./recipes/lemon-pangrattato";
export * from "./recipes/pot-of-chickpeas";
export * from "./recipes/pot-of-cannellini";
export * from "./recipes/spaghetti-aglio-olio";

// ── Challenge #2 — Mexico (La Cocina del Maíz) ──
export * from "./recipes/corn-tortillas";
export * from "./recipes/chilaquiles-rojos";
export * from "./recipes/quesadillas-de-maiz";
export * from "./recipes/frijoles-de-la-olla";
export * from "./recipes/frijoles-refritos";
export * from "./recipes/frijoles-charros";
export * from "./recipes/salsa-roja-asada";
export * from "./recipes/salsa-verde";
export * from "./recipes/huevos-a-la-mexicana";
export * from "./recipes/huevos-rancheros";
export * from "./recipes/pozole-rojo";
export * from "./recipes/esquites";
export * from "./recipes/tamales-de-frijol";
export * from "./recipes/nopales-con-huevo";
export * from "./recipes/calabacitas";
export * from "./recipes/rajas-con-crema";
export * from "./recipes/tinga-de-pollo";
export * from "./recipes/picadillo";
export * from "./recipes/frijoles-puercos";
export * from "./recipes/sopes";
export * from "./recipes/tlacoyos";
export * from "./recipes/huaraches";
export * from "./recipes/gorditas";
export * from "./recipes/tacos-dorados";
export * from "./recipes/enchiladas-rojas";
export * from "./recipes/enfrijoladas";
export * from "./recipes/huevos-en-salsa-verde";
export * from "./recipes/huevos-en-salsa-roja";
export * from "./recipes/migas";
export * from "./recipes/sopa-de-guias";
export * from "./recipes/mole";
export * from "./recipes/chiles-rellenos";

// ── Challenge #3 — Ethiopia & Eritrea (Beyaynetu) ──
export * from "./recipes/teff-injera";
export * from "./recipes/berbere";
export * from "./recipes/niter-kibbeh";
export * from "./recipes/pot-of-red-lentils";
export * from "./recipes/misir-wot";
export * from "./recipes/misir-alicha";
export * from "./recipes/shiro-wot";
export * from "./recipes/bozena-shiro";
export * from "./recipes/kik-alicha";
export * from "./recipes/ater-kik-alicha";
export * from "./recipes/kik-wot";
export * from "./recipes/yemisir-kik";
export * from "./recipes/ful";
export * from "./recipes/tsebhi-birsen";
export * from "./recipes/tsebhi-shiro";
export * from "./recipes/doro-wot";
export * from "./recipes/zigni";
export * from "./recipes/beyaynetu";
export * from "./recipes/dinich-wot";
export * from "./recipes/gomen";
export * from "./recipes/atakilt-wot";
export * from "./recipes/shiro-fitfit";
export * from "./recipes/azifa";
export * from "./recipes/timatim-fitfit";
export * from "./recipes/dabo-kolo";
export * from "./recipes/hilbet";
export * from "./recipes/kategna";
export * from "./recipes/fasolia";
export * from "./recipes/telba-fitfit";
export * from "./recipes/misir-fitfit";

// ── Challenge #4 — Ashkenazi (Schmaltz & Onions) ──
export * from "./recipes/schmaltz-and-gribenes";
export * from "./recipes/caramelized-onions";
export * from "./recipes/pot-of-white-beans";
export * from "./recipes/challah";
export * from "./recipes/potato-latkes";
export * from "./recipes/potato-kugel";
export * from "./recipes/knish";
export * from "./recipes/potato-onion-soup";
export * from "./recipes/chopped-herring";
export * from "./recipes/herring-in-sour-cream";
export * from "./recipes/schmaltz-herring";
export * from "./recipes/vinegret";
export * from "./recipes/kasha-varnishkes";
export * from "./recipes/mushroom-barley-soup";
export * from "./recipes/kasha-with-mushroom-gravy";
export * from "./recipes/lima-bean-soup";
export * from "./recipes/holishkes";
export * from "./recipes/borscht";
export * from "./recipes/sweet-and-sour-cabbage";
export * from "./recipes/tzimmes";
export * from "./recipes/cheese-blintzes";
export * from "./recipes/lokshen-kugel";
export * from "./recipes/farmer-cheese-and-noodles";
export * from "./recipes/cold-beet-borscht";
export * from "./recipes/schav";
export * from "./recipes/eggs-and-onions";
export * from "./recipes/matzo-brei";
export * from "./recipes/schmaltz-on-rye";
export * from "./recipes/baked-eggs-with-onions";
export * from "./recipes/cholent";
export * from "./recipes/chicken-soup-with-kneydlach";
export * from "./recipes/gefilte-fish";
export * from "./recipes/roast-chicken-with-schmaltz";
export * from "./recipes/kreplach";

// Docs
export * from "./docs/budget";
export * from "./docs/challenge";
export * from "./docs/manifesto";
export * from "./docs/culture-mexico";
export * from "./docs/culture-italy";
export * from "./docs/culture-ethiopia";
export * from "./docs/culture-ashkenazi";

// Weeks
export * from "./weeks/week-1-pasta";
export * from "./weeks/themes";
export * from "./weeks/mx-week-1-masa";
export * from "./weeks/mexican-themes";
export * from "./weeks/ethiopian-weeks";
export * from "./weeks/ashkenazi-weeks";

import { frittataDiPasta } from "./recipes/frittata-di-pasta";
import { pastaAlPomodoroETonno } from "./recipes/pasta-al-pomodoro-e-tonno";
import { pastaAllaNorma } from "./recipes/pasta-alla-norma";
import { pastaCacioEUova } from "./recipes/pasta-cacio-e-uova";
import { pastaECeci } from "./recipes/pasta-e-ceci";
import { pastaEFagioli } from "./recipes/pasta-e-fagioli";
import { pastaEPatate } from "./recipes/pasta-e-patate";
import { spaghettiConLaMollica } from "./recipes/spaghetti-con-la-mollica";
import { uovaInPurgatorio } from "./recipes/uova-in-purgatorio";

import { ribollita } from "./recipes/ribollita";
import { pappaAlPomodoro } from "./recipes/pappa-al-pomodoro";
import { panzanella } from "./recipes/panzanella";
import { acquacotta } from "./recipes/acquacotta";
import { fettunta } from "./recipes/fettunta";

import { frittataDiPatate } from "./recipes/frittata-di-patate";
import { herbFrittata } from "./recipes/herb-frittata";
import { stracciatella } from "./recipes/stracciatella";
import { eggsBakedOverGreens } from "./recipes/eggs-baked-over-greens";

import { fagioliAllUccelletto } from "./recipes/fagioli-all-uccelletto";
import { lenticchieInUmido } from "./recipes/lenticchie-in-umido";
import { zuppaDiLegumi } from "./recipes/zuppa-di-legumi";
import { cannelliniSuFettunta } from "./recipes/cannellini-su-fettunta";

import { polentaEFagioli } from "./recipes/polenta-e-fagioli";
import { polentaConcia } from "./recipes/polenta-concia";
import { polentaMushroomRagu } from "./recipes/polenta-mushroom-ragu";
import { softPolentaEgg } from "./recipes/soft-polenta-egg";
import { grilledPolentaGreens } from "./recipes/grilled-polenta-greens";

import { pastaConLeSarde } from "./recipes/pasta-con-le-sarde";
import { caponata } from "./recipes/caponata";
import { sardeABeccafico } from "./recipes/sarde-a-beccafico";

import { cicoria } from "./recipes/cicoria";
import { minestrone } from "./recipes/minestrone";
import { scarolaEFagioli } from "./recipes/scarola-e-fagioli";
import { peperonata } from "./recipes/peperonata";

import { tomatoSugo } from "./recipes/tomato-sugo";
import { lemonPangrattato } from "./recipes/lemon-pangrattato";
import { potOfChickpeas } from "./recipes/pot-of-chickpeas";
import { potOfCannellini } from "./recipes/pot-of-cannellini";
import { spaghettiAglioOlio } from "./recipes/spaghetti-aglio-olio";

// Challenge #2 — Mexico
import { cornTortillas } from "./recipes/corn-tortillas";
import { chilaquilesRojos } from "./recipes/chilaquiles-rojos";
import { quesadillasDeMaiz } from "./recipes/quesadillas-de-maiz";
import { frijolesDeLaOlla } from "./recipes/frijoles-de-la-olla";
import { frijolesRefritos } from "./recipes/frijoles-refritos";
import { frijolesCharros } from "./recipes/frijoles-charros";
import { salsaRojaAsada } from "./recipes/salsa-roja-asada";
import { salsaVerde } from "./recipes/salsa-verde";
import { huevosALaMexicana } from "./recipes/huevos-a-la-mexicana";
import { huevosRancheros } from "./recipes/huevos-rancheros";
import { pozoleRojo } from "./recipes/pozole-rojo";
import { esquites } from "./recipes/esquites";
import { tamalesDeFrijol } from "./recipes/tamales-de-frijol";
import { nopalesConHuevo } from "./recipes/nopales-con-huevo";
import { calabacitas } from "./recipes/calabacitas";
import { rajasConCrema } from "./recipes/rajas-con-crema";
import { tingaDePollo } from "./recipes/tinga-de-pollo";
import { picadillo } from "./recipes/picadillo";
import { frijolesPuercos } from "./recipes/frijoles-puercos";
import { sopes } from "./recipes/sopes";
import { tlacoyos } from "./recipes/tlacoyos";
import { huaraches } from "./recipes/huaraches";
import { gorditas } from "./recipes/gorditas";
import { tacosDorados } from "./recipes/tacos-dorados";
import { enchiladasRojas } from "./recipes/enchiladas-rojas";
import { enfrijoladas } from "./recipes/enfrijoladas";
import { huevosEnSalsaVerde } from "./recipes/huevos-en-salsa-verde";
import { huevosEnSalsaRoja } from "./recipes/huevos-en-salsa-roja";
import { migas } from "./recipes/migas";
import { sopaDeGuias } from "./recipes/sopa-de-guias";
import { mole } from "./recipes/mole";
import { chilesRellenos } from "./recipes/chiles-rellenos";

// Challenge #3 — Ethiopia & Eritrea
import { teffInjera } from "./recipes/teff-injera";
import { berbere } from "./recipes/berbere";
import { niterKibbeh } from "./recipes/niter-kibbeh";
import { potOfRedLentils } from "./recipes/pot-of-red-lentils";
import { misirWot } from "./recipes/misir-wot";
import { misirAlicha } from "./recipes/misir-alicha";
import { shiroWot } from "./recipes/shiro-wot";
import { bozenaShiro } from "./recipes/bozena-shiro";
import { kikAlicha } from "./recipes/kik-alicha";
import { aterKikAlicha } from "./recipes/ater-kik-alicha";
import { kikWot } from "./recipes/kik-wot";
import { yemisirKik } from "./recipes/yemisir-kik";
import { ful } from "./recipes/ful";
import { tsebhiBirsen } from "./recipes/tsebhi-birsen";
import { tsebhiShiro } from "./recipes/tsebhi-shiro";
import { doroWot } from "./recipes/doro-wot";
import { zigni } from "./recipes/zigni";
import { beyaynetu } from "./recipes/beyaynetu";
import { dinichWot } from "./recipes/dinich-wot";
import { gomen } from "./recipes/gomen";
import { atakiltWot } from "./recipes/atakilt-wot";
import { shiroFitfit } from "./recipes/shiro-fitfit";
import { azifa } from "./recipes/azifa";
import { timatimFitfit } from "./recipes/timatim-fitfit";
import { daboKolo } from "./recipes/dabo-kolo";
import { hilbet } from "./recipes/hilbet";
import { kategna } from "./recipes/kategna";
import { fasolia } from "./recipes/fasolia";
import { telbaFitfit } from "./recipes/telba-fitfit";
import { misirFitfit } from "./recipes/misir-fitfit";

// Challenge #4 — Ashkenazi (Schmaltz & Onions)
import { schmaltzAndGribenes } from "./recipes/schmaltz-and-gribenes";
import { caramelizedOnions } from "./recipes/caramelized-onions";
import { potOfWhiteBeans } from "./recipes/pot-of-white-beans";
import { challah } from "./recipes/challah";
import { potatoLatkes } from "./recipes/potato-latkes";
import { potatoKugel } from "./recipes/potato-kugel";
import { knish } from "./recipes/knish";
import { potatoOnionSoup } from "./recipes/potato-onion-soup";
import { choppedHerring } from "./recipes/chopped-herring";
import { herringInSourCream } from "./recipes/herring-in-sour-cream";
import { schmaltzHerring } from "./recipes/schmaltz-herring";
import { vinegret } from "./recipes/vinegret";
import { kashaVarnishkes } from "./recipes/kasha-varnishkes";
import { mushroomBarleySoup } from "./recipes/mushroom-barley-soup";
import { kashaWithMushroomGravy } from "./recipes/kasha-with-mushroom-gravy";
import { limaBeanSoup } from "./recipes/lima-bean-soup";
import { holishkes } from "./recipes/holishkes";
import { borscht } from "./recipes/borscht";
import { sweetAndSourCabbage } from "./recipes/sweet-and-sour-cabbage";
import { tzimmes } from "./recipes/tzimmes";
import { cheeseBlintzes } from "./recipes/cheese-blintzes";
import { lokshenKugel } from "./recipes/lokshen-kugel";
import { farmerCheeseAndNoodles } from "./recipes/farmer-cheese-and-noodles";
import { coldBeetBorscht } from "./recipes/cold-beet-borscht";
import { schav } from "./recipes/schav";
import { eggsAndOnions } from "./recipes/eggs-and-onions";
import { matzoBrei } from "./recipes/matzo-brei";
import { schmaltzOnRye } from "./recipes/schmaltz-on-rye";
import { bakedEggsWithOnions } from "./recipes/baked-eggs-with-onions";
import { cholent } from "./recipes/cholent";
import { chickenSoupWithKneydlach } from "./recipes/chicken-soup-with-kneydlach";
import { gefilteFish } from "./recipes/gefilte-fish";
import { roastChickenWithSchmaltz } from "./recipes/roast-chicken-with-schmaltz";
import { kreplach } from "./recipes/kreplach";

import { budget } from "./docs/budget";
import { challenge } from "./docs/challenge";
import { manifesto } from "./docs/manifesto";
import { cultureMexico } from "./docs/culture-mexico";
import { cultureItaly } from "./docs/culture-italy";
import { cultureEthiopia } from "./docs/culture-ethiopia";
import { cultureAshkenazi } from "./docs/culture-ashkenazi";

import { week1Pasta } from "./weeks/week-1-pasta";
import {
  week2Bread,
  week3Eggs,
  week4Legumes,
  week5Polenta,
  bonusSicilian,
  bonusGarden,
} from "./weeks/themes";
import { mexicanWeeks } from "./weeks/mexican-themes";
import { ethiopianWeeks } from "./weeks/ethiopian-weeks";
import { ashkenaziWeeks } from "./weeks/ashkenazi-weeks";

// The challenge recipe pool — dishes the menu generator may draw from, tagged
// by cuisine (Italian cucina povera + Mexican cocina del maíz).
export const recipes: Recipe[] = [
  frittataDiPasta,
  pastaAlPomodoroETonno,
  pastaAllaNorma,
  pastaCacioEUova,
  pastaECeci,
  pastaEFagioli,
  pastaEPatate,
  spaghettiConLaMollica,
  uovaInPurgatorio,
  // Week 2 — Bread
  ribollita,
  pappaAlPomodoro,
  panzanella,
  acquacotta,
  fettunta,
  // Week 3 — Eggs
  frittataDiPatate,
  herbFrittata,
  stracciatella,
  eggsBakedOverGreens,
  // Week 4 — Legumes
  fagioliAllUccelletto,
  lenticchieInUmido,
  zuppaDiLegumi,
  cannelliniSuFettunta,
  // Week 5 — Polenta
  polentaEFagioli,
  polentaConcia,
  polentaMushroomRagu,
  softPolentaEgg,
  grilledPolentaGreens,
  // Bonus — Sicilian
  pastaConLeSarde,
  caponata,
  sardeABeccafico,
  // Bonus — Garden
  cicoria,
  minestrone,
  scarolaEFagioli,
  peperonata,
  // Bases (with instructions) — the engine the weeks build on
  tomatoSugo,
  lemonPangrattato,
  potOfChickpeas,
  potOfCannellini,
  spaghettiAglioOlio,
  // Challenge #2 — Mexico (La Cocina del Maíz)
  cornTortillas,
  chilaquilesRojos,
  quesadillasDeMaiz,
  frijolesDeLaOlla,
  frijolesRefritos,
  frijolesCharros,
  salsaRojaAsada,
  salsaVerde,
  huevosALaMexicana,
  huevosRancheros,
  pozoleRojo,
  esquites,
  tamalesDeFrijol,
  nopalesConHuevo,
  calabacitas,
  rajasConCrema,
  tingaDePollo,
  picadillo,
  frijolesPuercos,
  sopes,
  tlacoyos,
  huaraches,
  gorditas,
  tacosDorados,
  enchiladasRojas,
  enfrijoladas,
  huevosEnSalsaVerde,
  huevosEnSalsaRoja,
  migas,
  sopaDeGuias,
  mole,
  chilesRellenos,
  // Challenge #3 — Ethiopia & Eritrea (Beyaynetu)
  teffInjera,
  berbere,
  niterKibbeh,
  potOfRedLentils,
  misirWot,
  misirAlicha,
  shiroWot,
  bozenaShiro,
  kikAlicha,
  aterKikAlicha,
  kikWot,
  yemisirKik,
  ful,
  tsebhiBirsen,
  tsebhiShiro,
  doroWot,
  zigni,
  beyaynetu,
  dinichWot,
  gomen,
  atakiltWot,
  shiroFitfit,
  azifa,
  timatimFitfit,
  daboKolo,
  hilbet,
  kategna,
  fasolia,
  telbaFitfit,
  misirFitfit,
  // Challenge #4 — Ashkenazi (Schmaltz & Onions)
  schmaltzAndGribenes,
  caramelizedOnions,
  potOfWhiteBeans,
  challah,
  potatoLatkes,
  potatoKugel,
  knish,
  potatoOnionSoup,
  choppedHerring,
  herringInSourCream,
  schmaltzHerring,
  vinegret,
  kashaVarnishkes,
  mushroomBarleySoup,
  kashaWithMushroomGravy,
  limaBeanSoup,
  holishkes,
  borscht,
  sweetAndSourCabbage,
  tzimmes,
  cheeseBlintzes,
  lokshenKugel,
  farmerCheeseAndNoodles,
  coldBeetBorscht,
  schav,
  eggsAndOnions,
  matzoBrei,
  schmaltzOnRye,
  bakedEggsWithOnions,
  cholent,
  chickenSoupWithKneydlach,
  gefilteFish,
  roastChickenWithSchmaltz,
  kreplach,
];

export const docs: ContentDoc[] = [
  budget,
  challenge,
  manifesto,
  cultureMexico,
  cultureItaly,
  cultureEthiopia,
  cultureAshkenazi,
];

// The themed arc — all seven Italian weeks. Week 1 is fully built out (it is
// also a WeekPlan); the rest are themes the generator turns into plans.
export const weekThemes: WeekTheme[] = [
  week1Pasta,
  week2Bread,
  week3Eggs,
  week4Legumes,
  week5Polenta,
  bonusSicilian,
  bonusGarden,
  // Challenge #2 — Mexico
  ...mexicanWeeks,
  // Challenge #3 — Ethiopia & Eritrea
  ...ethiopianWeeks,
  // Challenge #4 — Ashkenazi (Schmaltz & Onions)
  ...ashkenaziWeeks,
];

// Weeks that are fully built out into executable plans (engine + days + shopping).
export const weeks: WeekPlan[] = [
  week1Pasta,
  week2Bread,
  week3Eggs,
  week4Legumes,
  week5Polenta,
  bonusSicilian,
  bonusGarden,
  ...mexicanWeeks,
  ...ethiopianWeeks,
  ...ashkenaziWeeks,
];
