type L = { en: string; ru: string; uz: string };
type LA = { en: string[]; ru: string[]; uz: string[] };

export interface Product {
  slug: string;
  group: 'base' | 'electronics';
  image: string;
  name: L;
  summary: L;
  specs: LA;
}

export const groups = {
  base: {
    title: {
      en: 'Copper Rod & Conversion Products',
      ru: 'Катанка и продукция передела',
      uz: 'Katanka va qayta ishlash mahsulotlari',
    },
    blurb: {
      en: 'Oxygen-free copper rod and high-volume conversion products drawn from AMMC cathode copper.',
      ru: 'Бескислородная катанка и массовая продукция передела из катодной меди АГМК.',
      uz: 'OKMK katod misidan olingan kislorodsiz katanka va yuqori hajmli qayta ishlash mahsulotlari.',
    },
  },
  electronics: {
    title: {
      en: 'Electronics-Grade Materials',
      ru: 'Материалы электронного класса',
      uz: 'Elektron darajadagi materiallar',
    },
    blurb: {
      en: 'Surface-sensitive products manufactured under clean-transfer conditions with full traceability, supported by in-house feed preparation (drawn wire and nuggets) for ED foil and bonding.',
      ru: 'Чувствительные к поверхности продукты в условиях clean-transfer с полной прослеживаемостью, при поддержке собственной подготовки сырья (волочёная проволока и nuggets) для ED-фольги и bonding.',
      uz: 'To‘liq kuzatuvchanlik bilan clean-transfer sharoitida ishlab chiqariladigan yuzaga sezgir mahsulotlar, ED folga va bonding uchun ichki xomashyo tayyorlash (cho‘zilgan sim va nuggets) ko‘magida.',
    },
  },
} as const;

export const products: Product[] = [
  {
    slug: 'of-ofe-copper-rod',
    group: 'base',
    image: '/images/products/rod.jpg',
    name: { en: 'OF / OFE Copper Rod', ru: 'Катанка OF / OFE', uz: 'OF / OFE mis katanka' },
    summary: {
      en: 'Oxygen-free copper rod from AMMC cathodes — the base liquid product and feedstock for downstream conversion. Ø8 mm is the primary commercial diameter.',
      ru: 'Бескислородная катанка из катодов АГМК — базовый ликвидный продукт и сырьё для дальнейшего передела. Основной товарный диаметр — Ø8 мм.',
      uz: 'OKMK katodlaridan kislorodsiz mis katanka — asosiy likvid mahsulot va keyingi qayta ishlash uchun xomashyo. Asosiy tijorat diametri — Ø8 mm.',
    },
    specs: {
      en: ['Ø8, Ø12.5, Ø16, Ø20, Ø25 mm', 'Coils with CoA', 'Batch-level traceability'],
      ru: ['Ø8, Ø12,5, Ø16, Ø20, Ø25 мм', 'Бухты с CoA', 'Прослеживаемость партий'],
      uz: ['Ø8, Ø12.5, Ø16, Ø20, Ø25 mm', 'CoA bilan g‘altaklar', 'Partiya darajasida kuzatuvchanlik'],
    },
  },
  {
    slug: 'busbar',
    group: 'base',
    image: '/images/products/busbar.jpg',
    name: { en: 'Copper Busbar', ru: 'Медные шины', uz: 'Mis shinalar' },
    summary: {
      en: 'Copper busbar for electrical and power applications — cut, straightened and perforated to specification.',
      ru: 'Медные шины для электротехнических и силовых применений — резка, правка и перфорация по спецификации.',
      uz: 'Elektrotexnika va quvvat qo‘llanishlari uchun mis shinalar — spetsifikatsiya bo‘yicha kesish, to‘g‘rilash va perforatsiya.',
    },
    specs: {
      en: ['Cutting & straightening', 'Perforation', 'General-industrial grade'],
      ru: ['Резка и правка', 'Перфорация', 'Общепромышленное качество'],
      uz: ['Kesish va to‘g‘rilash', 'Perforatsiya', 'Umumsanoat sifati'],
    },
  },
  {
    slug: 'copper-strip',
    group: 'base',
    image: '/images/products/strip.jpg',
    name: { en: 'Copper Strip', ru: 'Медная лента', uz: 'Mis lenta' },
    summary: {
      en: 'Copper strip and tape in coils, slit, rewound and packaged for shipment.',
      ru: 'Медная лента и полоса в рулонах — слиттинг, перемотка и упаковка для отгрузки.',
      uz: 'G‘altaklardagi mis lenta va tasma — slitting, qayta o‘rash va jo‘natishga qadoqlash.',
    },
    specs: {
      en: ['Slitting & rewinding', 'Coil packaging', 'Strip & tape'],
      ru: ['Слиттинг и перемотка', 'Рулонная упаковка', 'Лента и полоса'],
      uz: ['Slitting va qayta o‘rash', 'G‘altak qadoqlash', 'Lenta va tasma'],
    },
  },
  {
    slug: 'rectangular-wire',
    group: 'base',
    image: '/images/products/rect-wire.jpg',
    name: { en: 'Rectangular Wire', ru: 'Прямоугольный провод', uz: 'To‘rtburchak sim' },
    summary: {
      en: 'Rectangular copper wire supplied bare or with enamel / insulation.',
      ru: 'Прямоугольный медный провод — голый или с эмалью / изоляцией.',
      uz: 'To‘rtburchak mis sim — yalang‘och yoki emal / izolyatsiya bilan.',
    },
    specs: {
      en: ['Bare or insulated', 'Enamelled options', 'Profile to spec'],
      ru: ['Голый или с изоляцией', 'Варианты с эмалью', 'Профиль по спецификации'],
      uz: ['Yalang‘och yoki izolyatsiyali', 'Emal variantlari', 'Spetsifikatsiya bo‘yicha profil'],
    },
  },
  {
    slug: 'round-enamelled-wire',
    group: 'base',
    image: '/images/products/enamelled.jpg',
    name: { en: 'Round Enamelled Wire', ru: 'Круглый эмальпровод', uz: 'Dumaloq emal sim' },
    summary: {
      en: 'Round enamelled copper wire in standard diameters and enamel classes.',
      ru: 'Круглый эмалированный медный провод типовых диаметров и классов эмали.',
      uz: 'Standart diametrlar va emal klasslaridagi dumaloq emal mis sim.',
    },
    specs: {
      en: ['Standard diameters', 'Multiple enamel classes'],
      ru: ['Типовые диаметры', 'Различные классы эмали'],
      uz: ['Standart diametrlar', 'Turli emal klasslari'],
    },
  },
  {
    slug: 'litz-braid-shunts',
    group: 'base',
    image: '/images/products/litz.jpg',
    name: {
      en: 'Litz Wire, Braid & Shunts',
      ru: 'Лицендрат, плетёнка и шунты',
      uz: 'Litsendrat, to‘qima va shuntlar',
    },
    summary: {
      en: 'Litz wire, copper braid, shunts and current jumpers for high-frequency and flexible-conductor needs.',
      ru: 'Лицендрат, медная плетёнка, шунты и токовые перемычки для высокочастотных и гибких применений.',
      uz: 'Yuqori chastotali va egiluvchan o‘tkazgich ehtiyojlari uchun litsendrat, mis to‘qima, shuntlar va tok ko‘priklari.',
    },
    specs: {
      en: ['Litz wire', 'Copper braid', 'Shunts & jumpers'],
      ru: ['Лицендрат', 'Медная плетёнка', 'Шунты и перемычки'],
      uz: ['Litsendrat', 'Mis to‘qima', 'Shuntlar va ko‘priklar'],
    },
  },
  {
    slug: 'ed-copper-foil',
    group: 'electronics',
    image: '/images/products/ed-foil.jpg',
    name: { en: 'ED Copper Foil', ru: 'ED медная фольга', uz: 'ED mis folga' },
    summary: {
      en: 'Electrodeposited copper foil 1–15 µm for battery and electronics applications, including HVLP / VSP / high-frequency grades.',
      ru: 'Электроосаждённая медная фольга 1–15 мкм для батарейных и электронных применений, включая марки HVLP / VSP / высокочастотные.',
      uz: 'Batareya va elektronika qo‘llanishlari uchun 1–15 µm elektrocho‘ktirilgan mis folga, jumladan HVLP / VSP / yuqori chastotali markalar.',
    },
    specs: {
      en: ['1–15 µm thickness', 'Battery & electronics foil', 'HVLP / VSP / high-frequency'],
      ru: ['Толщина 1–15 мкм', 'Батарейная и электронная фольга', 'HVLP / VSP / высокочастотная'],
      uz: ['1–15 µm qalinlik', 'Batareya va elektronika folgasi', 'HVLP / VSP / yuqori chastotali'],
    },
  },
  {
    slug: 'wire-bonding',
    group: 'electronics',
    image: '/images/products/bonding.jpg',
    name: {
      en: 'Wire Bonding / Ultrafine Wire',
      ru: 'Wire bonding / ультратонкая проволока',
      uz: 'Wire bonding / ultraingichka sim',
    },
    summary: {
      en: 'Bare and coated ultrafine copper bonding wire for interconnects in electronic components, including Pd-coated and modified grades.',
      ru: 'Голая и с покрытием ультратонкая медная bonding-проволока для межсоединений в электронных компонентах, включая Pd-покрытие и модифицированные марки.',
      uz: 'Elektron komponentlardagi o‘zaro ulanishlar uchun yalang‘och va qoplamali ultraingichka mis bonding sim, jumladan Pd-qoplamali va modifikatsiyalangan markalar.',
    },
    specs: {
      en: ['Bare Cu bonding wire', 'Pd-coated / modified', 'Ultrafine diameters'],
      ru: ['Голая Cu bonding-проволока', 'Pd-покрытие / модифицированные', 'Ультратонкие диаметры'],
      uz: ['Yalang‘och Cu bonding sim', 'Pd-qoplamali / modifikatsiyalangan', 'Ultraingichka diametrlar'],
    },
  },
  {
    slug: 'electronics-grade-hub',
    group: 'electronics',
    image: '/images/products/egrade.jpg',
    name: { en: 'Electronics-Grade Hub', ru: 'Хаб электронного класса', uz: 'Elektron daraja markazi' },
    summary: {
      en: 'Conversion products finished to electronics grade — E-STRIP, E-BUSBAR and E-MAGWIRE with clean packaging, coatings, CoA and extended QC.',
      ru: 'Продукция передела, доведённая до электронного класса — E-STRIP, E-BUSBAR и E-MAGWIRE с чистой упаковкой, покрытиями, CoA и расширенным контролем качества.',
      uz: 'Elektron darajaga yetkazilgan qayta ishlash mahsulotlari — toza qadoqlash, qoplamalar, CoA va kengaytirilgan sifat nazoratiga ega E-STRIP, E-BUSBAR va E-MAGWIRE.',
    },
    specs: {
      en: ['E-STRIP / E-BUSBAR / E-MAGWIRE', 'Clean packaging & coatings', 'CoA + extended QC'],
      ru: ['E-STRIP / E-BUSBAR / E-MAGWIRE', 'Чистая упаковка и покрытия', 'CoA + расширенный QC'],
      uz: ['E-STRIP / E-BUSBAR / E-MAGWIRE', 'Toza qadoqlash va qoplamalar', 'CoA + kengaytirilgan QC'],
    },
  },
];
