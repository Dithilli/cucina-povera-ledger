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

// ── Challenge #4 — Greece (Greek cucina povera) ──
export * from "./recipes/fasolada";
export * from "./recipes/gigantes-plaki";
export * from "./recipes/mavromatika-spanaki";
export * from "./recipes/dakos";
export * from "./recipes/skordalia";
export * from "./recipes/pot-of-gigantes";
export * from "./recipes/fakes";
export * from "./recipes/revithada";
export * from "./recipes/revithokeftedes";
export * from "./recipes/santorini-fava";
export * from "./recipes/fasolakia-ladera";
export * from "./recipes/briam";
export * from "./recipes/bamies";
export * from "./recipes/arakas-latheros";
export * from "./recipes/gemista";
export * from "./recipes/dolmadakia";
export * from "./recipes/lahanodolmades";
export * from "./recipes/horta-vrasta";
export * from "./recipes/spanakopita";
export * from "./recipes/spanakorizo";
export * from "./recipes/prasorizo";
export * from "./recipes/soupa-avgolemono";
export * from "./recipes/youvarlakia";
export * from "./recipes/kotopoulo-fricassee";
export * from "./recipes/marides-tiganites";
export * from "./recipes/bakaliaros-skordalia";
export * from "./recipes/psarosoupa";
export * from "./recipes/sardeles-sto-fourno";

// ── Challenge #5 — Levant ──
export * from "./recipes/pot-of-lentils";
export * from "./recipes/tahini-sauce";
export * from "./recipes/toum";
export * from "./recipes/mujaddara";
export * from "./recipes/mujaddara-hamra";
export * from "./recipes/shorbat-adas";
export * from "./recipes/ful-medames";
export * from "./recipes/hummus";
export * from "./recipes/msabbaha";
export * from "./recipes/balila";
export * from "./recipes/burghul-bi-banadoura";
export * from "./recipes/freekeh-bil-hummus";
export * from "./recipes/bulgur-pilaf";
export * from "./recipes/warak-enab";
export * from "./recipes/mahshi-koosa";
export * from "./recipes/sheikh-el-mahshi";
export * from "./recipes/bamia";
export * from "./recipes/loubia-bzeit";
export * from "./recipes/fasolia-yakhni";
export * from "./recipes/batata-harra";
export * from "./recipes/tabbouleh";
export * from "./recipes/fattoush";
export * from "./recipes/falafel";
export * from "./recipes/moutabal";
export * from "./recipes/labneh";
export * from "./recipes/fatteh";
export * from "./recipes/salatet-banadoura";

// ── Challenge — north-indian ──
export * from "./recipes/aloo-gobi";
export * from "./recipes/aloo-methi";
export * from "./recipes/baingan-bharta";
export * from "./recipes/bhindi-masala";
export * from "./recipes/boondi-raita";
export * from "./recipes/chana-dal";
export * from "./recipes/chole";
export * from "./recipes/dal-tadka";
export * from "./recipes/garam-masala";
export * from "./recipes/ghee";
export * from "./recipes/ginger-garlic-paste";
export * from "./recipes/jeera-aloo";
export * from "./recipes/jeera-rice";
export * from "./recipes/kadhi-pakora";
export * from "./recipes/kala-chana";
export * from "./recipes/khichdi";
export * from "./recipes/masoor-dal";
export * from "./recipes/matar-paneer";
export * from "./recipes/mixed-veg-pakora";
export * from "./recipes/moong-dal";
export * from "./recipes/palak-paneer";
export * from "./recipes/palak-saag";
export * from "./recipes/paneer-bhurji";
export * from "./recipes/rajma";
export * from "./recipes/roti";
export * from "./recipes/sarson-ka-saag";
export * from "./recipes/shahi-paneer";
export * from "./recipes/tahari";
export * from "./recipes/veg-pulao";

// ── american-south ──
export * from "./recipes/butter-beans";
export * from "./recipes/candied-yams";
export * from "./recipes/chicken-and-dumplings";
export * from "./recipes/chicken-andouille-gumbo";
export * from "./recipes/collard-greens";
export * from "./recipes/cornbread-dressing";
export * from "./recipes/cornbread";
export * from "./recipes/dirty-rice";
export * from "./recipes/fried-catfish";
export * from "./recipes/fried-chicken";
export * from "./recipes/fried-green-tomatoes";
export * from "./recipes/gumbo-zherbes";
export * from "./recipes/hoppin-john";
export * from "./recipes/hush-puppies";
export * from "./recipes/jambalaya";
export * from "./recipes/maque-choux";
export * from "./recipes/okra-gumbo";
export * from "./recipes/pot-of-red-beans";
export * from "./recipes/red-beans-and-rice";
export * from "./recipes/red-rice";
export * from "./recipes/salmon-croquettes";
export * from "./recipes/shrimp-etouffee";
export * from "./recipes/smothered-chicken";
export * from "./recipes/smothered-okra";
export * from "./recipes/smothered-pork-chops";
export * from "./recipes/the-trinity";
export * from "./recipes/white-rice";

// ── indonesian ──
export * from "./recipes/balado-teri";
export * from "./recipes/bumbu-dasar";
export * from "./recipes/gado-gado";
export * from "./recipes/ikan-goreng";
export * from "./recipes/karedok";
export * from "./recipes/lontong-sayur";
export * from "./recipes/nasi-goreng";
export * from "./recipes/nasi-putih";
export * from "./recipes/nasi-uduk";
export * from "./recipes/peanut-sauce";
export * from "./recipes/pecel";
export * from "./recipes/pepes-ikan";
export * from "./recipes/sambal-goreng-kentang";
export * from "./recipes/sambal-terasi";
export * from "./recipes/sayur-asem";
export * from "./recipes/sayur-lodeh";
export * from "./recipes/sayur-sop";
export * from "./recipes/soto-ayam";
export * from "./recipes/tahu-bacem";
export * from "./recipes/tahu-gejrot";
export * from "./recipes/tahu-goreng";
export * from "./recipes/telur-balado";
export * from "./recipes/tempe-bacem";
export * from "./recipes/tempe-mendoan";
export * from "./recipes/tempe-orek";
export * from "./recipes/tumis-kangkung";

// Docs
export * from "./docs/budget";
export * from "./docs/challenge";
export * from "./docs/manifesto";
export * from "./docs/culture-mexico";
export * from "./docs/culture-italy";
export * from "./docs/culture-ethiopia";
export * from "./docs/culture-levant";
export * from "./docs/culture-greece";
export * from "./docs/culture-levant";
export * from "./docs/culture-north-indian";
export * from "./docs/culture-american-south";
export * from "./docs/culture-indonesian";

// Weeks
export * from "./weeks/week-1-pasta";
export * from "./weeks/themes";
export * from "./weeks/mx-week-1-masa";
export * from "./weeks/mexican-themes";
export * from "./weeks/ethiopian-weeks";
export * from "./weeks/greek-weeks";
export * from "./weeks/levantine-weeks";
export * from "./weeks/north-indian-weeks";
export * from "./weeks/american-south-weeks";
export * from "./weeks/indonesian-weeks";

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

// Challenge #4 — Greece
import { fasolada } from "./recipes/fasolada";
import { gigantesPlaki } from "./recipes/gigantes-plaki";
import { mavromatikaSpanaki } from "./recipes/mavromatika-spanaki";
import { dakos } from "./recipes/dakos";
import { skordalia } from "./recipes/skordalia";
import { potOfGigantes } from "./recipes/pot-of-gigantes";
import { fakes } from "./recipes/fakes";
import { revithada } from "./recipes/revithada";
import { revithokeftedes } from "./recipes/revithokeftedes";
import { santoriniFava } from "./recipes/santorini-fava";
import { fasolakiaLadera } from "./recipes/fasolakia-ladera";
import { briam } from "./recipes/briam";
import { bamies } from "./recipes/bamies";
import { arakasLatheros } from "./recipes/arakas-latheros";
import { gemista } from "./recipes/gemista";
import { dolmadakia } from "./recipes/dolmadakia";
import { lahanodolmades } from "./recipes/lahanodolmades";
import { hortaVrasta } from "./recipes/horta-vrasta";
import { spanakopita } from "./recipes/spanakopita";
import { spanakorizo } from "./recipes/spanakorizo";
import { prasorizo } from "./recipes/prasorizo";
import { soupaAvgolemono } from "./recipes/soupa-avgolemono";
import { youvarlakia } from "./recipes/youvarlakia";
import { kotopouloFricassee } from "./recipes/kotopoulo-fricassee";
import { maridesTiganites } from "./recipes/marides-tiganites";
import { bakaliarosSkordalia } from "./recipes/bakaliaros-skordalia";
import { psarosoupa } from "./recipes/psarosoupa";
import { sardelesStoFourno } from "./recipes/sardeles-sto-fourno";

// Challenge #5 — Levant
import { potOfLentils } from "./recipes/pot-of-lentils";
import { tahiniSauce } from "./recipes/tahini-sauce";
import { toum } from "./recipes/toum";
import { mujaddara } from "./recipes/mujaddara";
import { mujaddaraHamra } from "./recipes/mujaddara-hamra";
import { shorbatAdas } from "./recipes/shorbat-adas";
import { fulMedames } from "./recipes/ful-medames";
import { hummus } from "./recipes/hummus";
import { msabbaha } from "./recipes/msabbaha";
import { balila } from "./recipes/balila";
import { burghulBiBanadoura } from "./recipes/burghul-bi-banadoura";
import { freekehBilHummus } from "./recipes/freekeh-bil-hummus";
import { bulgurPilaf } from "./recipes/bulgur-pilaf";
import { warakEnab } from "./recipes/warak-enab";
import { mahshiKoosa } from "./recipes/mahshi-koosa";
import { sheikhElMahshi } from "./recipes/sheikh-el-mahshi";
import { bamia } from "./recipes/bamia";
import { loubiaBzeit } from "./recipes/loubia-bzeit";
import { fasoliaYakhni } from "./recipes/fasolia-yakhni";
import { batataHarra } from "./recipes/batata-harra";
import { tabbouleh } from "./recipes/tabbouleh";
import { fattoush } from "./recipes/fattoush";
import { falafel } from "./recipes/falafel";
import { moutabal } from "./recipes/moutabal";
import { labneh } from "./recipes/labneh";
import { fatteh } from "./recipes/fatteh";
import { salatetBanadoura } from "./recipes/salatet-banadoura";
// north-indian
import { alooGobi } from "./recipes/aloo-gobi";
import { alooMethi } from "./recipes/aloo-methi";
import { bainganBharta } from "./recipes/baingan-bharta";
import { bhindiMasala } from "./recipes/bhindi-masala";
import { boondiRaita } from "./recipes/boondi-raita";
import { chanaDal } from "./recipes/chana-dal";
import { chole } from "./recipes/chole";
import { dalTadka } from "./recipes/dal-tadka";
import { garamMasala } from "./recipes/garam-masala";
import { ghee } from "./recipes/ghee";
import { gingerGarlicPaste } from "./recipes/ginger-garlic-paste";
import { jeeraAloo } from "./recipes/jeera-aloo";
import { jeeraRice } from "./recipes/jeera-rice";
import { kadhiPakora } from "./recipes/kadhi-pakora";
import { kalaChana } from "./recipes/kala-chana";
import { khichdi } from "./recipes/khichdi";
import { masoorDal } from "./recipes/masoor-dal";
import { matarPaneer } from "./recipes/matar-paneer";
import { mixedVegPakora } from "./recipes/mixed-veg-pakora";
import { moongDal } from "./recipes/moong-dal";
import { palakPaneer } from "./recipes/palak-paneer";
import { palakSaag } from "./recipes/palak-saag";
import { paneerBhurji } from "./recipes/paneer-bhurji";
import { rajma } from "./recipes/rajma";
import { roti } from "./recipes/roti";
import { sarsonKaSaag } from "./recipes/sarson-ka-saag";
import { shahiPaneer } from "./recipes/shahi-paneer";
import { tahari } from "./recipes/tahari";
import { vegPulao } from "./recipes/veg-pulao";
// american-south
import { butterBeans } from "./recipes/butter-beans";
import { candiedYams } from "./recipes/candied-yams";
import { chickenAndDumplings } from "./recipes/chicken-and-dumplings";
import { chickenAndouilleGumbo } from "./recipes/chicken-andouille-gumbo";
import { collardGreens } from "./recipes/collard-greens";
import { cornbreadDressing } from "./recipes/cornbread-dressing";
import { cornbread } from "./recipes/cornbread";
import { dirtyRice } from "./recipes/dirty-rice";
import { friedCatfish } from "./recipes/fried-catfish";
import { friedChicken } from "./recipes/fried-chicken";
import { friedGreenTomatoes } from "./recipes/fried-green-tomatoes";
import { gumboZherbes } from "./recipes/gumbo-zherbes";
import { hoppinJohn } from "./recipes/hoppin-john";
import { hushPuppies } from "./recipes/hush-puppies";
import { jambalaya } from "./recipes/jambalaya";
import { maqueChoux } from "./recipes/maque-choux";
import { okraGumbo } from "./recipes/okra-gumbo";
import { potOfRedBeans } from "./recipes/pot-of-red-beans";
import { redBeansAndRice } from "./recipes/red-beans-and-rice";
import { redRice } from "./recipes/red-rice";
import { salmonCroquettes } from "./recipes/salmon-croquettes";
import { shrimpEtouffee } from "./recipes/shrimp-etouffee";
import { smotheredChicken } from "./recipes/smothered-chicken";
import { smotheredOkra } from "./recipes/smothered-okra";
import { smotheredPorkChops } from "./recipes/smothered-pork-chops";
import { theTrinity } from "./recipes/the-trinity";
import { whiteRice } from "./recipes/white-rice";
// indonesian
import { baladoTeri } from "./recipes/balado-teri";
import { bumbuDasar } from "./recipes/bumbu-dasar";
import { gadoGado } from "./recipes/gado-gado";
import { ikanGoreng } from "./recipes/ikan-goreng";
import { karedok } from "./recipes/karedok";
import { lontongSayur } from "./recipes/lontong-sayur";
import { nasiGoreng } from "./recipes/nasi-goreng";
import { nasiPutih } from "./recipes/nasi-putih";
import { nasiUduk } from "./recipes/nasi-uduk";
import { peanutSauce } from "./recipes/peanut-sauce";
import { pecel } from "./recipes/pecel";
import { pepesIkan } from "./recipes/pepes-ikan";
import { sambalGorengKentang } from "./recipes/sambal-goreng-kentang";
import { sambalTerasi } from "./recipes/sambal-terasi";
import { sayurAsem } from "./recipes/sayur-asem";
import { sayurLodeh } from "./recipes/sayur-lodeh";
import { sayurSop } from "./recipes/sayur-sop";
import { sotoAyam } from "./recipes/soto-ayam";
import { tahuBacem } from "./recipes/tahu-bacem";
import { tahuGejrot } from "./recipes/tahu-gejrot";
import { tahuGoreng } from "./recipes/tahu-goreng";
import { telurBalado } from "./recipes/telur-balado";
import { tempeBacem } from "./recipes/tempe-bacem";
import { tempeMendoan } from "./recipes/tempe-mendoan";
import { tempeOrek } from "./recipes/tempe-orek";
import { tumisKangkung } from "./recipes/tumis-kangkung";

import { budget } from "./docs/budget";
import { challenge } from "./docs/challenge";
import { manifesto } from "./docs/manifesto";
import { cultureMexico } from "./docs/culture-mexico";
import { cultureItaly } from "./docs/culture-italy";
import { cultureEthiopia } from "./docs/culture-ethiopia";
import { cultureGreece } from "./docs/culture-greece";
import { cultureLevant } from "./docs/culture-levant";
import { cultureNorthIndian } from "./docs/culture-north-indian";
import { cultureAmericanSouth } from "./docs/culture-american-south";
import { cultureIndonesian } from "./docs/culture-indonesian";

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
import { greekWeeks } from "./weeks/greek-weeks";
import { levantineWeeks } from "./weeks/levantine-weeks";
import { northIndianWeeks } from "./weeks/north-indian-weeks";
import { americanSouthWeeks } from "./weeks/american-south-weeks";
import { indonesianWeeks } from "./weeks/indonesian-weeks";

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
  // Challenge #4 — Greece
  fasolada,
  gigantesPlaki,
  mavromatikaSpanaki,
  dakos,
  skordalia,
  potOfGigantes,
  fakes,
  revithada,
  revithokeftedes,
  santoriniFava,
  fasolakiaLadera,
  briam,
  bamies,
  arakasLatheros,
  gemista,
  dolmadakia,
  lahanodolmades,
  hortaVrasta,
  spanakopita,
  spanakorizo,
  prasorizo,
  soupaAvgolemono,
  youvarlakia,
  kotopouloFricassee,
  maridesTiganites,
  bakaliarosSkordalia,
  psarosoupa,
  sardelesStoFourno,
  // Challenge #5 — Levant
  potOfLentils,
  tahiniSauce,
  toum,
  mujaddara,
  mujaddaraHamra,
  shorbatAdas,
  fulMedames,
  hummus,
  msabbaha,
  balila,
  burghulBiBanadoura,
  freekehBilHummus,
  bulgurPilaf,
  warakEnab,
  mahshiKoosa,
  sheikhElMahshi,
  bamia,
  loubiaBzeit,
  fasoliaYakhni,
  batataHarra,
  tabbouleh,
  fattoush,
  falafel,
  moutabal,
  labneh,
  fatteh,
  salatetBanadoura,
  // north-indian
  alooGobi,
  alooMethi,
  bainganBharta,
  bhindiMasala,
  boondiRaita,
  chanaDal,
  chole,
  dalTadka,
  garamMasala,
  ghee,
  gingerGarlicPaste,
  jeeraAloo,
  jeeraRice,
  kadhiPakora,
  kalaChana,
  khichdi,
  masoorDal,
  matarPaneer,
  mixedVegPakora,
  moongDal,
  palakPaneer,
  palakSaag,
  paneerBhurji,
  rajma,
  roti,
  sarsonKaSaag,
  shahiPaneer,
  tahari,
  vegPulao,
  // american-south
  butterBeans,
  candiedYams,
  chickenAndDumplings,
  chickenAndouilleGumbo,
  collardGreens,
  cornbreadDressing,
  cornbread,
  dirtyRice,
  friedCatfish,
  friedChicken,
  friedGreenTomatoes,
  gumboZherbes,
  hoppinJohn,
  hushPuppies,
  jambalaya,
  maqueChoux,
  okraGumbo,
  potOfRedBeans,
  redBeansAndRice,
  redRice,
  salmonCroquettes,
  shrimpEtouffee,
  smotheredChicken,
  smotheredOkra,
  smotheredPorkChops,
  theTrinity,
  whiteRice,
  // indonesian
  baladoTeri,
  bumbuDasar,
  gadoGado,
  ikanGoreng,
  karedok,
  lontongSayur,
  nasiGoreng,
  nasiPutih,
  nasiUduk,
  peanutSauce,
  pecel,
  pepesIkan,
  sambalGorengKentang,
  sambalTerasi,
  sayurAsem,
  sayurLodeh,
  sayurSop,
  sotoAyam,
  tahuBacem,
  tahuGejrot,
  tahuGoreng,
  telurBalado,
  tempeBacem,
  tempeMendoan,
  tempeOrek,
  tumisKangkung,
];

export const docs: ContentDoc[] = [
  budget,
  challenge,
  manifesto,
  cultureMexico,
  cultureItaly,
  cultureEthiopia,
  cultureGreece,
  cultureLevant,
  cultureNorthIndian,
  cultureAmericanSouth,
  cultureIndonesian,
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
  // Challenge #4 — Greece
  ...greekWeeks,
  // Challenge #5 — Levant
  ...levantineWeeks,
  // north-indian
  ...northIndianWeeks,
  // american-south
  ...americanSouthWeeks,
  // indonesian
  ...indonesianWeeks,
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
  ...greekWeeks,
  ...levantineWeeks,
  ...northIndianWeeks,
  ...americanSouthWeeks,
  ...indonesianWeeks,
];
