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

// ── west-african ──
export * from "./recipes/akara";
export * from "./recipes/asaro";
export * from "./recipes/ayamase";
export * from "./recipes/banga-soup";
export * from "./recipes/bitterleaf-soup";
export * from "./recipes/boiled-rice";
export * from "./recipes/boiled-yam-and-sauce";
export * from "./recipes/coconut-rice";
export * from "./recipes/dodo";
export * from "./recipes/eba";
export * from "./recipes/efo-riro";
export * from "./recipes/egusi-soup";
export * from "./recipes/ewa-agoyin";
export * from "./recipes/gbegiri-and-ewedu";
export * from "./recipes/groundnut-soup";
export * from "./recipes/jollof-rice";
export * from "./recipes/kelewele";
export * from "./recipes/light-soup";
export * from "./recipes/moimoi";
export * from "./recipes/nigerian-stew";
export * from "./recipes/obe-ata";
export * from "./recipes/ogbono-soup";
export * from "./recipes/okro-soup";
export * from "./recipes/pepper-sauce";
export * from "./recipes/pepper-soup";
export * from "./recipes/red-red";
export * from "./recipes/waakye";

// ── filipino ──
export * from "./recipes/adobong-baboy";
export * from "./recipes/adobong-manok";
export * from "./recipes/adobong-sitaw";
export * from "./recipes/arroz-caldo";
export * from "./recipes/binagoongan";
export * from "./recipes/chopsuey";
export * from "./recipes/daing-na-bangus";
export * from "./recipes/dinuguan";
export * from "./recipes/garlic-rice-sinangag";
export * from "./recipes/ginisa-base";
export * from "./recipes/ginisang-gulay";
export * from "./recipes/ginisang-munggo";
export * from "./recipes/ginisang-sardinas";
export * from "./recipes/kanin";
export * from "./recipes/kare-kare";
export * from "./recipes/laing";
export * from "./recipes/nilaga";
export * from "./recipes/pinakbet";
export * from "./recipes/pritong-galunggong";
export * from "./recipes/sawsawan";
export * from "./recipes/sinigang-na-baboy";
export * from "./recipes/sinigang-na-hipon";
export * from "./recipes/sinigang-na-isda";
export * from "./recipes/tinola";
export * from "./recipes/tortang-giniling";
export * from "./recipes/tortang-talong";

// ── vietnamese ──
export * from "./recipes/banh-canh";
export * from "./recipes/banh-xeo";
export * from "./recipes/bun-dau-mam-tom";
export * from "./recipes/bun-rieu";
export * from "./recipes/ca-kho-to";
export * from "./recipes/canh-bi-do";
export * from "./recipes/canh-chua";
export * from "./recipes/canh-rau-muong";
export * from "./recipes/chao-ga";
export * from "./recipes/com-chien-duong-chau";
export * from "./recipes/com-tam";
export * from "./recipes/com-trang";
export * from "./recipes/dau-hu-sot-ca";
export * from "./recipes/dau-hu-xao";
export * from "./recipes/do-chua";
export * from "./recipes/ga-kho-gung";
export * from "./recipes/goi-cuon";
export * from "./recipes/nem-ran";
export * from "./recipes/nuoc-cham";
export * from "./recipes/nuoc-mau";
export * from "./recipes/rau-muong-xao-toi";
export * from "./recipes/suon-nuong";
export * from "./recipes/thit-kho";
export * from "./recipes/thit-xao-rau";
export * from "./recipes/trung-chien";
export * from "./recipes/trung-chung";

// ── persian ──
export * from "./recipes/abgoosht";
export * from "./recipes/adas-polo";
export * from "./recipes/adasi";
export * from "./recipes/ash-anar";
export * from "./recipes/ash-jo";
export * from "./recipes/ash-reshteh";
export * from "./recipes/baghali-polo";
export * from "./recipes/barbari-bread";
export * from "./recipes/borani-bademjan";
export * from "./recipes/chelo";
export * from "./recipes/dami-gojeh";
export * from "./recipes/estamboli-polo";
export * from "./recipes/gheymeh";
export * from "./recipes/ghormeh-sabzi";
export * from "./recipes/kashk-e-bademjan";
export * from "./recipes/khoresh-bademjan";
export * from "./recipes/khoresh-karafs";
export * from "./recipes/kuku-bademjan";
export * from "./recipes/kuku-sabzi";
export * from "./recipes/kuku-sibzamini";
export * from "./recipes/loobia-polo";
export * from "./recipes/mast-o-khiar";
export * from "./recipes/mirza-ghasemi";
export * from "./recipes/sabzi-polo";
export * from "./recipes/tahchin";
export * from "./recipes/torshi";

// ── portuguese ──
export * from "./recipes/acorda-alentejana";
export * from "./recipes/acorda-de-alho";
export * from "./recipes/arroz-branco";
export * from "./recipes/arroz-de-feijao";
export * from "./recipes/arroz-de-grelos";
export * from "./recipes/arroz-de-tomate";
export * from "./recipes/bacalhau-a-bras";
export * from "./recipes/bacalhau-gomes-de-sa";
export * from "./recipes/bolinhos-de-bacalhau";
export * from "./recipes/broa";
export * from "./recipes/caldeirada";
export * from "./recipes/caldo-verde";
export * from "./recipes/canja-de-galinha";
export * from "./recipes/cozido-a-portuguesa";
export * from "./recipes/favas-guisadas";
export * from "./recipes/feijoada-transmontana";
export * from "./recipes/jaquinzinhos";
export * from "./recipes/jardineira";
export * from "./recipes/migas-de-pao";
export * from "./recipes/ovos-mexidos-com-grelos";
export * from "./recipes/pataniscas-de-bacalhau";
export * from "./recipes/peixinhos-da-horta";
export * from "./recipes/piri-piri";
export * from "./recipes/refogado";
export * from "./recipes/sardinhas-assadas";
export * from "./recipes/sopa-de-feijao";

// ── korean ──
export * from "./recipes/anchovy-kelp-stock";
export * from "./recipes/bap";
export * from "./recipes/bibim-guksu";
export * from "./recipes/bibimbap";
export * from "./recipes/doenjang-jjigae";
export * from "./recipes/dubu-jorim";
export * from "./recipes/gaji-namul";
export * from "./recipes/gamja-jorim";
export * from "./recipes/gukbap";
export * from "./recipes/gyeran-jjim";
export * from "./recipes/gyeran-mari";
export * from "./recipes/jeyuk-bokkeum";
export * from "./recipes/kimchi-bokkeumbap";
export * from "./recipes/kimchi-jeon";
export * from "./recipes/kimchi-jjigae";
export * from "./recipes/kimchi";
export * from "./recipes/kongnamul-bap";
export * from "./recipes/kongnamul-guk";
export * from "./recipes/kongnamul-muchim";
export * from "./recipes/miyeokguk";
export * from "./recipes/myeolchi-bokkeum";
export * from "./recipes/nurungji";
export * from "./recipes/pajeon";
export * from "./recipes/sigeumchi-namul";
export * from "./recipes/ssamjang";
export * from "./recipes/sundubu-jjigae";
export * from "./recipes/tteokguk";

// ── japanese ──
export * from "./recipes/agedashi-dofu";
export * from "./recipes/butadon";
export * from "./recipes/chawanmushi";
export * from "./recipes/dashi";
export * from "./recipes/gohan";
export * from "./recipes/gomadare";
export * from "./recipes/hijiki-no-nimono";
export * from "./recipes/hiyayakko";
export * from "./recipes/kabocha-no-nimono";
export * from "./recipes/kayaku-gohan";
export * from "./recipes/kiriboshi-daikon";
export * from "./recipes/mabo-dofu";
export * from "./recipes/misoshiru";
export * from "./recipes/nasu-dengaku";
export * from "./recipes/nikujaga";
export * from "./recipes/nukazuke";
export * from "./recipes/ochazuke";
export * from "./recipes/ojiya";
export * from "./recipes/omurice";
export * from "./recipes/oyakodon";
export * from "./recipes/saba-misoni";
export * from "./recipes/takikomi-gohan";
export * from "./recipes/tamago-don";
export * from "./recipes/tamagoyaki";
export * from "./recipes/unohana";
export * from "./recipes/yosenabe";
export * from "./recipes/zosui";

// ── Challenge — Ashkenazi (Schmaltz & Onions) ──
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

// ── Gap-fill recipes: dishes named in week menus that had no recipe ──
export * from "./recipes/crawfish-etouffee";
export * from "./recipes/adobo-flakes";
export * from "./recipes/freekeh-bil-laban";
export * from "./recipes/tahu-isi";
export * from "./recipes/sayur-bayam";
export * from "./recipes/tempe-balado";
export * from "./recipes/tahu-balado";
export * from "./recipes/lotek";

// ── andean ──
export * from "./recipes/chupe-de-quinua";
export * from "./recipes/sopa-de-mani";
export * from "./recipes/locro-de-papa";
export * from "./recipes/chairo-paceno";
export * from "./recipes/papa-a-la-huancaina";
export * from "./recipes/causa-limena";
export * from "./recipes/ocopa-arequipena";
export * from "./recipes/papa-rellena";
export * from "./recipes/seco-de-frejoles";
export * from "./recipes/carapulcra";
export * from "./recipes/aji-de-gallina";
export * from "./recipes/olluquito";
export * from "./recipes/quinua-pesque";
export * from "./recipes/quinua-atamalada";
export * from "./recipes/kispino";
export * from "./recipes/sopa-de-quinua";
export * from "./recipes/humitas";
export * from "./recipes/pastel-de-choclo";
export * from "./recipes/mote-con-queso";
export * from "./recipes/choclo-con-queso";
export * from "./recipes/tamales-andinos";
export * from "./recipes/sopa-de-habas";
export * from "./recipes/habas-guisadas";
export * from "./recipes/lentejas-andinas";
export * from "./recipes/anticuchos";
export * from "./recipes/salchipapas";
export * from "./recipes/aji-amarillo-base";
export * from "./recipes/salsa-criolla";

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
export * from "./docs/culture-west-african";
export * from "./docs/culture-filipino";
export * from "./docs/culture-vietnamese";
export * from "./docs/culture-persian";
export * from "./docs/culture-portuguese";
export * from "./docs/culture-korean";
export * from "./docs/culture-japanese";
export * from "./docs/culture-ashkenazi";
export * from "./docs/culture-andean";

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
export * from "./weeks/west-african-weeks";
export * from "./weeks/filipino-weeks";
export * from "./weeks/vietnamese-weeks";
export * from "./weeks/persian-weeks";
export * from "./weeks/portuguese-weeks";
export * from "./weeks/korean-weeks";
export * from "./weeks/japanese-weeks";
export * from "./weeks/ashkenazi-weeks";
export * from "./weeks/andean-weeks";

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
// west-african
import { akara } from "./recipes/akara";
import { asaro } from "./recipes/asaro";
import { ayamase } from "./recipes/ayamase";
import { bangaSoup } from "./recipes/banga-soup";
import { bitterleafSoup } from "./recipes/bitterleaf-soup";
import { boiledRice } from "./recipes/boiled-rice";
import { boiledYamAndSauce } from "./recipes/boiled-yam-and-sauce";
import { coconutRice } from "./recipes/coconut-rice";
import { dodo } from "./recipes/dodo";
import { eba } from "./recipes/eba";
import { efoRiro } from "./recipes/efo-riro";
import { egusiSoup } from "./recipes/egusi-soup";
import { ewaAgoyin } from "./recipes/ewa-agoyin";
import { gbegiriAndEwedu } from "./recipes/gbegiri-and-ewedu";
import { groundnutSoup } from "./recipes/groundnut-soup";
import { jollofRice } from "./recipes/jollof-rice";
import { kelewele } from "./recipes/kelewele";
import { lightSoup } from "./recipes/light-soup";
import { moimoi } from "./recipes/moimoi";
import { nigerianStew } from "./recipes/nigerian-stew";
import { obeAta } from "./recipes/obe-ata";
import { ogbonoSoup } from "./recipes/ogbono-soup";
import { okroSoup } from "./recipes/okro-soup";
import { pepperSauce } from "./recipes/pepper-sauce";
import { pepperSoup } from "./recipes/pepper-soup";
import { redRed } from "./recipes/red-red";
import { waakye } from "./recipes/waakye";
// filipino
import { adobongBaboy } from "./recipes/adobong-baboy";
import { adobongManok } from "./recipes/adobong-manok";
import { adobongSitaw } from "./recipes/adobong-sitaw";
import { arrozCaldo } from "./recipes/arroz-caldo";
import { binagoongan } from "./recipes/binagoongan";
import { chopsuey } from "./recipes/chopsuey";
import { daingNaBangus } from "./recipes/daing-na-bangus";
import { dinuguan } from "./recipes/dinuguan";
import { garlicRiceSinangag } from "./recipes/garlic-rice-sinangag";
import { ginisaBase } from "./recipes/ginisa-base";
import { ginisangGulay } from "./recipes/ginisang-gulay";
import { ginisangMunggo } from "./recipes/ginisang-munggo";
import { ginisangSardinas } from "./recipes/ginisang-sardinas";
import { kanin } from "./recipes/kanin";
import { kareKare } from "./recipes/kare-kare";
import { laing } from "./recipes/laing";
import { nilaga } from "./recipes/nilaga";
import { pinakbet } from "./recipes/pinakbet";
import { pritongGalunggong } from "./recipes/pritong-galunggong";
import { sawsawan } from "./recipes/sawsawan";
import { sinigangNaBaboy } from "./recipes/sinigang-na-baboy";
import { sinigangNaHipon } from "./recipes/sinigang-na-hipon";
import { sinigangNaIsda } from "./recipes/sinigang-na-isda";
import { tinola } from "./recipes/tinola";
import { tortangGiniling } from "./recipes/tortang-giniling";
import { tortangTalong } from "./recipes/tortang-talong";
// vietnamese
import { banhCanh } from "./recipes/banh-canh";
import { banhXeo } from "./recipes/banh-xeo";
import { bunDauMamTom } from "./recipes/bun-dau-mam-tom";
import { bunRieu } from "./recipes/bun-rieu";
import { caKhoTo } from "./recipes/ca-kho-to";
import { canhBiDo } from "./recipes/canh-bi-do";
import { canhChua } from "./recipes/canh-chua";
import { canhRauMuong } from "./recipes/canh-rau-muong";
import { chaoGa } from "./recipes/chao-ga";
import { comChienDuongChau } from "./recipes/com-chien-duong-chau";
import { comTam } from "./recipes/com-tam";
import { comTrang } from "./recipes/com-trang";
import { dauHuSotCa } from "./recipes/dau-hu-sot-ca";
import { dauHuXao } from "./recipes/dau-hu-xao";
import { doChua } from "./recipes/do-chua";
import { gaKhoGung } from "./recipes/ga-kho-gung";
import { goiCuon } from "./recipes/goi-cuon";
import { nemRan } from "./recipes/nem-ran";
import { nuocCham } from "./recipes/nuoc-cham";
import { nuocMau } from "./recipes/nuoc-mau";
import { rauMuongXaoToi } from "./recipes/rau-muong-xao-toi";
import { suonNuong } from "./recipes/suon-nuong";
import { thitKho } from "./recipes/thit-kho";
import { thitXaoRau } from "./recipes/thit-xao-rau";
import { trungChien } from "./recipes/trung-chien";
import { trungChung } from "./recipes/trung-chung";
// persian
import { abgoosht } from "./recipes/abgoosht";
import { adasPolo } from "./recipes/adas-polo";
import { adasi } from "./recipes/adasi";
import { ashAnar } from "./recipes/ash-anar";
import { ashJo } from "./recipes/ash-jo";
import { ashReshteh } from "./recipes/ash-reshteh";
import { baghaliPolo } from "./recipes/baghali-polo";
import { barbariBread } from "./recipes/barbari-bread";
import { boraniBademjan } from "./recipes/borani-bademjan";
import { chelo } from "./recipes/chelo";
import { damiGojeh } from "./recipes/dami-gojeh";
import { estamboliPolo } from "./recipes/estamboli-polo";
import { gheymeh } from "./recipes/gheymeh";
import { ghormehSabzi } from "./recipes/ghormeh-sabzi";
import { kashkEBademjan } from "./recipes/kashk-e-bademjan";
import { khoreshBademjan } from "./recipes/khoresh-bademjan";
import { khoreshKarafs } from "./recipes/khoresh-karafs";
import { kukuBademjan } from "./recipes/kuku-bademjan";
import { kukuSabzi } from "./recipes/kuku-sabzi";
import { kukuSibzamini } from "./recipes/kuku-sibzamini";
import { loobiaPolo } from "./recipes/loobia-polo";
import { mastOKhiar } from "./recipes/mast-o-khiar";
import { mirzaGhasemi } from "./recipes/mirza-ghasemi";
import { sabziPolo } from "./recipes/sabzi-polo";
import { tahchin } from "./recipes/tahchin";
import { torshi } from "./recipes/torshi";
// portuguese
import { acordaAlentejana } from "./recipes/acorda-alentejana";
import { acordaDeAlho } from "./recipes/acorda-de-alho";
import { arrozBranco } from "./recipes/arroz-branco";
import { arrozDeFeijao } from "./recipes/arroz-de-feijao";
import { arrozDeGrelos } from "./recipes/arroz-de-grelos";
import { arrozDeTomate } from "./recipes/arroz-de-tomate";
import { bacalhauABras } from "./recipes/bacalhau-a-bras";
import { bacalhauGomesDeSa } from "./recipes/bacalhau-gomes-de-sa";
import { bolinhosDeBacalhau } from "./recipes/bolinhos-de-bacalhau";
import { broa } from "./recipes/broa";
import { caldeirada } from "./recipes/caldeirada";
import { caldoVerde } from "./recipes/caldo-verde";
import { canjaDeGalinha } from "./recipes/canja-de-galinha";
import { cozidoAPortuguesa } from "./recipes/cozido-a-portuguesa";
import { favasGuisadas } from "./recipes/favas-guisadas";
import { feijoadaTransmontana } from "./recipes/feijoada-transmontana";
import { jaquinzinhos } from "./recipes/jaquinzinhos";
import { jardineira } from "./recipes/jardineira";
import { migasDePao } from "./recipes/migas-de-pao";
import { ovosMexidosComGrelos } from "./recipes/ovos-mexidos-com-grelos";
import { pataniscasDeBacalhau } from "./recipes/pataniscas-de-bacalhau";
import { peixinhosDaHorta } from "./recipes/peixinhos-da-horta";
import { piriPiri } from "./recipes/piri-piri";
import { refogado } from "./recipes/refogado";
import { sardinhasAssadas } from "./recipes/sardinhas-assadas";
import { sopaDeFeijao } from "./recipes/sopa-de-feijao";
// korean
import { anchovyKelpStock } from "./recipes/anchovy-kelp-stock";
import { bap } from "./recipes/bap";
import { bibimGuksu } from "./recipes/bibim-guksu";
import { bibimbap } from "./recipes/bibimbap";
import { doenjangJjigae } from "./recipes/doenjang-jjigae";
import { dubuJorim } from "./recipes/dubu-jorim";
import { gajiNamul } from "./recipes/gaji-namul";
import { gamjaJorim } from "./recipes/gamja-jorim";
import { gukbap } from "./recipes/gukbap";
import { gyeranJjim } from "./recipes/gyeran-jjim";
import { gyeranMari } from "./recipes/gyeran-mari";
import { jeyukBokkeum } from "./recipes/jeyuk-bokkeum";
import { kimchiBokkeumbap } from "./recipes/kimchi-bokkeumbap";
import { kimchiJeon } from "./recipes/kimchi-jeon";
import { kimchiJjigae } from "./recipes/kimchi-jjigae";
import { kimchi } from "./recipes/kimchi";
import { kongnamulBap } from "./recipes/kongnamul-bap";
import { kongnamulGuk } from "./recipes/kongnamul-guk";
import { kongnamulMuchim } from "./recipes/kongnamul-muchim";
import { miyeokguk } from "./recipes/miyeokguk";
import { myeolchiBokkeum } from "./recipes/myeolchi-bokkeum";
import { nurungji } from "./recipes/nurungji";
import { pajeon } from "./recipes/pajeon";
import { sigeumchiNamul } from "./recipes/sigeumchi-namul";
import { ssamjang } from "./recipes/ssamjang";
import { sundubuJjigae } from "./recipes/sundubu-jjigae";
import { tteokguk } from "./recipes/tteokguk";
// japanese
import { agedashiDofu } from "./recipes/agedashi-dofu";
import { butadon } from "./recipes/butadon";
import { chawanmushi } from "./recipes/chawanmushi";
import { dashi } from "./recipes/dashi";
import { gohan } from "./recipes/gohan";
import { gomadare } from "./recipes/gomadare";
import { hijikiNoNimono } from "./recipes/hijiki-no-nimono";
import { hiyayakko } from "./recipes/hiyayakko";
import { kabochaNoNimono } from "./recipes/kabocha-no-nimono";
import { kayakuGohan } from "./recipes/kayaku-gohan";
import { kiriboshiDaikon } from "./recipes/kiriboshi-daikon";
import { maboDofu } from "./recipes/mabo-dofu";
import { misoshiru } from "./recipes/misoshiru";
import { nasuDengaku } from "./recipes/nasu-dengaku";
import { nikujaga } from "./recipes/nikujaga";
import { nukazuke } from "./recipes/nukazuke";
import { ochazuke } from "./recipes/ochazuke";
import { ojiya } from "./recipes/ojiya";
import { omurice } from "./recipes/omurice";
import { oyakodon } from "./recipes/oyakodon";
import { sabaMisoni } from "./recipes/saba-misoni";
import { takikomiGohan } from "./recipes/takikomi-gohan";
import { tamagoDon } from "./recipes/tamago-don";
import { tamagoyaki } from "./recipes/tamagoyaki";
import { unohana } from "./recipes/unohana";
import { yosenabe } from "./recipes/yosenabe";
import { zosui } from "./recipes/zosui";

// Ashkenazi (Schmaltz & Onions)
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

// Gap-fill recipes (dishes named in week menus that had no recipe)
import { crawfishEtouffee } from "./recipes/crawfish-etouffee";
import { adoboFlakes } from "./recipes/adobo-flakes";
import { freekehBilLaban } from "./recipes/freekeh-bil-laban";
import { tahuIsi } from "./recipes/tahu-isi";
import { sayurBayam } from "./recipes/sayur-bayam";
import { tempeBalado } from "./recipes/tempe-balado";
import { tahuBalado } from "./recipes/tahu-balado";
import { lotek } from "./recipes/lotek";

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
import { cultureWestAfrican } from "./docs/culture-west-african";
import { cultureFilipino } from "./docs/culture-filipino";
import { cultureVietnamese } from "./docs/culture-vietnamese";
import { culturePersian } from "./docs/culture-persian";
import { culturePortuguese } from "./docs/culture-portuguese";
import { cultureKorean } from "./docs/culture-korean";
import { cultureJapanese } from "./docs/culture-japanese";
import { cultureAshkenazi } from "./docs/culture-ashkenazi";
import { cultureAndean } from "./docs/culture-andean";

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
import { westAfricanWeeks } from "./weeks/west-african-weeks";
import { filipinoWeeks } from "./weeks/filipino-weeks";
import { vietnameseWeeks } from "./weeks/vietnamese-weeks";
import { persianWeeks } from "./weeks/persian-weeks";
import { portugueseWeeks } from "./weeks/portuguese-weeks";
import { koreanWeeks } from "./weeks/korean-weeks";
import { japaneseWeeks } from "./weeks/japanese-weeks";
import { ashkenaziWeeks } from "./weeks/ashkenazi-weeks";
import { andeanWeeks } from "./weeks/andean-weeks";

import { chupeDeQuinua } from "./recipes/chupe-de-quinua";
import { sopaDeMani } from "./recipes/sopa-de-mani";
import { locroDePapa } from "./recipes/locro-de-papa";
import { chairoPaceno } from "./recipes/chairo-paceno";
import { papaALaHuancaina } from "./recipes/papa-a-la-huancaina";
import { causaLimena } from "./recipes/causa-limena";
import { ocopaArequipena } from "./recipes/ocopa-arequipena";
import { papaRellena } from "./recipes/papa-rellena";
import { secoDeFrejoles } from "./recipes/seco-de-frejoles";
import { carapulcra } from "./recipes/carapulcra";
import { ajiDeGallina } from "./recipes/aji-de-gallina";
import { olluquito } from "./recipes/olluquito";
import { quinuaPesque } from "./recipes/quinua-pesque";
import { quinuaAtamalada } from "./recipes/quinua-atamalada";
import { kispino } from "./recipes/kispino";
import { sopaDeQuinua } from "./recipes/sopa-de-quinua";
import { humitas } from "./recipes/humitas";
import { pastelDeChoclo } from "./recipes/pastel-de-choclo";
import { moteConQueso } from "./recipes/mote-con-queso";
import { chocloConQueso } from "./recipes/choclo-con-queso";
import { tamalesAndinos } from "./recipes/tamales-andinos";
import { sopaDeHabas } from "./recipes/sopa-de-habas";
import { habasGuisadas } from "./recipes/habas-guisadas";
import { lentejasAndinas } from "./recipes/lentejas-andinas";
import { anticuchos } from "./recipes/anticuchos";
import { salchipapas } from "./recipes/salchipapas";
import { ajiAmarilloBase } from "./recipes/aji-amarillo-base";
import { salsaCriolla } from "./recipes/salsa-criolla";

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
  // west-african
  akara,
  asaro,
  ayamase,
  bangaSoup,
  bitterleafSoup,
  boiledRice,
  boiledYamAndSauce,
  coconutRice,
  dodo,
  eba,
  efoRiro,
  egusiSoup,
  ewaAgoyin,
  gbegiriAndEwedu,
  groundnutSoup,
  jollofRice,
  kelewele,
  lightSoup,
  moimoi,
  nigerianStew,
  obeAta,
  ogbonoSoup,
  okroSoup,
  pepperSauce,
  pepperSoup,
  redRed,
  waakye,
  // filipino
  adobongBaboy,
  adobongManok,
  adobongSitaw,
  arrozCaldo,
  binagoongan,
  chopsuey,
  daingNaBangus,
  dinuguan,
  garlicRiceSinangag,
  ginisaBase,
  ginisangGulay,
  ginisangMunggo,
  ginisangSardinas,
  kanin,
  kareKare,
  laing,
  nilaga,
  pinakbet,
  pritongGalunggong,
  sawsawan,
  sinigangNaBaboy,
  sinigangNaHipon,
  sinigangNaIsda,
  tinola,
  tortangGiniling,
  tortangTalong,
  // vietnamese
  banhCanh,
  banhXeo,
  bunDauMamTom,
  bunRieu,
  caKhoTo,
  canhBiDo,
  canhChua,
  canhRauMuong,
  chaoGa,
  comChienDuongChau,
  comTam,
  comTrang,
  dauHuSotCa,
  dauHuXao,
  doChua,
  gaKhoGung,
  goiCuon,
  nemRan,
  nuocCham,
  nuocMau,
  rauMuongXaoToi,
  suonNuong,
  thitKho,
  thitXaoRau,
  trungChien,
  trungChung,
  // persian
  abgoosht,
  adasPolo,
  adasi,
  ashAnar,
  ashJo,
  ashReshteh,
  baghaliPolo,
  barbariBread,
  boraniBademjan,
  chelo,
  damiGojeh,
  estamboliPolo,
  gheymeh,
  ghormehSabzi,
  kashkEBademjan,
  khoreshBademjan,
  khoreshKarafs,
  kukuBademjan,
  kukuSabzi,
  kukuSibzamini,
  loobiaPolo,
  mastOKhiar,
  mirzaGhasemi,
  sabziPolo,
  tahchin,
  torshi,
  // portuguese
  acordaAlentejana,
  acordaDeAlho,
  arrozBranco,
  arrozDeFeijao,
  arrozDeGrelos,
  arrozDeTomate,
  bacalhauABras,
  bacalhauGomesDeSa,
  bolinhosDeBacalhau,
  broa,
  caldeirada,
  caldoVerde,
  canjaDeGalinha,
  cozidoAPortuguesa,
  favasGuisadas,
  feijoadaTransmontana,
  jaquinzinhos,
  jardineira,
  migasDePao,
  ovosMexidosComGrelos,
  pataniscasDeBacalhau,
  peixinhosDaHorta,
  piriPiri,
  refogado,
  sardinhasAssadas,
  sopaDeFeijao,
  // korean
  anchovyKelpStock,
  bap,
  bibimGuksu,
  bibimbap,
  doenjangJjigae,
  dubuJorim,
  gajiNamul,
  gamjaJorim,
  gukbap,
  gyeranJjim,
  gyeranMari,
  jeyukBokkeum,
  kimchiBokkeumbap,
  kimchiJeon,
  kimchiJjigae,
  kimchi,
  kongnamulBap,
  kongnamulGuk,
  kongnamulMuchim,
  miyeokguk,
  myeolchiBokkeum,
  nurungji,
  pajeon,
  sigeumchiNamul,
  ssamjang,
  sundubuJjigae,
  tteokguk,
  // japanese
  agedashiDofu,
  butadon,
  chawanmushi,
  dashi,
  gohan,
  gomadare,
  hijikiNoNimono,
  hiyayakko,
  kabochaNoNimono,
  kayakuGohan,
  kiriboshiDaikon,
  maboDofu,
  misoshiru,
  nasuDengaku,
  nikujaga,
  nukazuke,
  ochazuke,
  ojiya,
  omurice,
  oyakodon,
  sabaMisoni,
  takikomiGohan,
  tamagoDon,
  tamagoyaki,
  unohana,
  yosenabe,
  zosui,
  // Ashkenazi (Schmaltz & Onions)
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
  // andean
  chupeDeQuinua,
  sopaDeMani,
  locroDePapa,
  chairoPaceno,
  papaALaHuancaina,
  causaLimena,
  ocopaArequipena,
  papaRellena,
  secoDeFrejoles,
  carapulcra,
  ajiDeGallina,
  olluquito,
  quinuaPesque,
  quinuaAtamalada,
  kispino,
  sopaDeQuinua,
  humitas,
  pastelDeChoclo,
  moteConQueso,
  chocloConQueso,
  tamalesAndinos,
  sopaDeHabas,
  habasGuisadas,
  lentejasAndinas,
  anticuchos,
  salchipapas,
  ajiAmarilloBase,
  salsaCriolla,
  // Gap-fill recipes (dishes named in week menus that had no recipe)
  crawfishEtouffee,
  adoboFlakes,
  freekehBilLaban,
  tahuIsi,
  sayurBayam,
  tempeBalado,
  tahuBalado,
  lotek,
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
  cultureWestAfrican,
  cultureFilipino,
  cultureVietnamese,
  culturePersian,
  culturePortuguese,
  cultureKorean,
  cultureJapanese,
  cultureAshkenazi,
  cultureAndean,
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
  // west-african
  ...westAfricanWeeks,
  // filipino
  ...filipinoWeeks,
  // vietnamese
  ...vietnameseWeeks,
  // persian
  ...persianWeeks,
  // portuguese
  ...portugueseWeeks,
  // korean
  ...koreanWeeks,
  // japanese
  ...japaneseWeeks,
  // Ashkenazi (Schmaltz & Onions)
  ...ashkenaziWeeks,
  // andean
  ...andeanWeeks,
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
  ...westAfricanWeeks,
  ...filipinoWeeks,
  ...vietnameseWeeks,
  ...persianWeeks,
  ...portugueseWeeks,
  ...koreanWeeks,
  ...japaneseWeeks,
  ...ashkenaziWeeks,
  ...andeanWeeks,
];
