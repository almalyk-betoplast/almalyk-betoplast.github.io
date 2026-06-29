export const defaultLang = 'en' as const;
export const locales = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof locales)[number];

export const languages: Record<Lang, { label: string; short: string }> = {
  en: { label: 'English', short: 'EN' },
  ru: { label: 'Русский', short: 'RU' },
  uz: { label: "O‘zbekcha", short: 'UZ' },
};

export const ui = {
  en: {
    meta: {
      siteDescription:
        'Almalyk MMC – Betoplast is a copper downstream producer turning AMMC cathode copper into oxygen-free rod, mass-conversion products, ED copper foil and electronics-grade materials.',
      tagline: 'Oxygen-free copper and electronics-grade materials',
    },
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      quality: 'Quality',
      howwework: 'How We Work',
      sustainability: 'Sustainability',
      contact: 'Contact',
    },
    common: {
      getInTouch: 'Get in touch',
      contactUs: 'Contact us',
      exploreProducts: 'Explore products',
      viewRange: 'View full product range',
      skipToContent: 'Skip to content',
    },
    footer: {
      desc: 'Almalyk MMC – Betoplast is a copper downstream producer turning AMMC cathode copper into oxygen-free rod, mass-conversion products, ED copper foil and electronics-grade materials.',
      navigate: 'Navigate',
      office: 'Registered office',
      rights: 'All rights reserved.',
      note: 'Copper rod · ED foil · electronics-grade materials',
      tin: 'TIN',
    },
    legalEntity: '"ALMALYK MMC–BETOPLAST" LLC JV',
    address: {
      line1: '131 Amir Temur Street, G‘afur G‘ulom MFY',
      line2: 'Olmaliq (Almalyk), Tashkent Region',
      country: 'Republic of Uzbekistan',
    },
    cta: {
      defaultHeading: 'Discuss supply, specifications and offtake',
      defaultText: 'Tell us your grade, format and volumes. We will come back with availability and terms.',
    },
    related: {
      eyebrow: 'Parent company',
      footerLabel: 'Parent company',
      text: 'Our parent company, BETOPLAST AG, is a Swiss energy and infrastructure house — power projects, mining, oil and gas, and energy trading. The copper we make feeds exactly that kind of power and electrification work.',
      cta: 'Visit BETOPLAST AG',
      sustainabilityLink: 'We make the copper; our parent company BETOPLAST AG builds the energy infrastructure',
    },
    home: {
      heroEyebrow: 'Copper downstream · Uzbekistan',
      heroH1: 'Oxygen-free copper,<br />engineered downstream.',
      heroLead:
        'Almalyk MMC – Betoplast converts AMMC cathode copper into oxygen-free rod, mass-conversion products, ED copper foil and electronics-grade materials — with controlled metal origin and documented quality from cathode to coil.',
      stats: [
        { v: 'OF / OFE', l: 'Oxygen-free copper grades' },
        { v: '1–15 µm', l: 'ED copper foil range' },
        { v: 'Ø8–25 mm', l: 'Copper rod diameters' },
        { v: 'CoA', l: 'Full batch traceability' },
      ],
      introEyebrow: 'What we make',
      introH2: 'A vertically integrated copper value chain',
      introLead:
        'Our model runs across two sites: a base site for copper rod and mass conversion, and a clean site for ED foil, wire bonding and electronics-grade products — connected by a controlled Clean Transfer that preserves purity and traceability.',
      capabilities: [
        { title: 'Oxygen-free copper rod', text: 'OF / OFE rod cast from AMMC cathode copper — the liquid base product and feedstock for everything downstream.' },
        { title: 'Mass conversion products', text: 'Busbar, strip, rectangular and round enamelled wire, litz wire, braid and shunts for industrial buyers.' },
        { title: 'ED copper foil', text: 'Electrodeposited foil 1–15 µm for battery and electronics supply chains, including HVLP / VSP grades.' },
        { title: 'Electronics-grade materials', text: 'Ultrafine bonding wire and clean-finished products with coatings, CoA and extended quality control.' },
      ],
      productsEyebrow: 'Products',
      productsH2: 'From liquid rod to electronics grade',
    },
    about: {
      heroEyebrow: 'About us',
      heroH1: 'A copper downstream joint venture',
      heroLead:
        'Almalyk MMC – Betoplast turns AMMC cathode copper into higher-value products, combining a liquid copper-rod stream with conversion and electronics-grade manufacturing.',
      whoEyebrow: 'Who we are',
      whoH2: 'Integrated from cathode to coil',
      whoP1:
        'Our joint venture builds a vertically integrated chain that processes AMMC / AGMK cathode copper into products with higher added value. The commercial logic combines a liquid stream of OF / OFE copper rod with conversion products, ED copper foil, wire bonding and special electronics-grade products.',
      whoP2:
        'This structure reduces dependence on any single market, improves sales flexibility and creates a strong basis for working with international traders, industrial buyers and long-term offtake partners.',
      archEyebrow: 'Production architecture',
      archH2: 'A two-site model',
      archLead:
        'Material moves between sites under a controlled Clean Transfer that preserves purity and traceability at every step.',
      sites: [
        { tag: 'Base site', title: 'Copper rod & conversion', text: 'Houses UPCAST continuous casting lines, drawing, slitting, cutting, enamelling, winding and packaging. Produces oxygen-free copper rod and high-volume conversion products — part sold externally, part transferred to the clean site.' },
        { tag: 'Clean site', title: 'Electronics-grade', text: 'Dedicated to processes sensitive to surface, contamination, gases and particles: ED copper foil, wire bonding, feed preparation and electronics-grade finishing — all under controlled traceability.' },
      ],
      rawEyebrow: 'Raw material base',
      rawH2: 'Controlled metal origin',
      rawText:
        'Feedstock is cathode copper from AMMC / AGMK, with batches selected against actual quality certificates. Controlled origin underpins our low-oxygen rod and the purity required for electronics-grade products downstream.',
      factLegal: 'Legal entity',
      factTin: 'TIN',
      factLocation: 'Location',
    },
    products: {
      heroEyebrow: 'Products',
      heroH1: 'Copper products, end to end',
      heroLead:
        'A single source spanning liquid copper rod, high-volume conversion products and surface-sensitive electronics-grade materials — all from controlled AMMC cathode copper.',
      ctaHeading: 'Need a specific grade or format?',
      ctaText: 'Send your specification — diameter, thickness, enamel class or foil grade — and we will confirm availability.',
    },
    quality: {
      heroEyebrow: 'Quality & traceability',
      heroH1: 'Documented quality, batch by batch',
      heroLead:
        'Quality is built around controlled metal origin, low oxygen, clean preparation of semi-finished products, lot traceability and documented supply quality.',
      features: [
        { title: 'OF / OFE grades', text: 'Oxygen-free (OF) and oxygen-free electronic (OFE) classes for different markets, against agreed specifications.' },
        { title: 'Recognised standards', text: 'Supply to ASTM C10200 / C10100 or equivalent standards where fixed in the specification and confirmed by certificates of analysis.' },
        { title: 'Lot traceability', text: 'Every batch carries a Certificate of Analysis and lot-level traceability from cathode through to finished coil.' },
      ],
      tableEyebrow: 'Quality architecture',
      tableH2: 'Controls at every stage',
      thElement: 'Control element',
      thApproach: 'Project approach',
      controls: [
        { el: 'Raw material', approach: 'AMMC / AGMK cathode copper; batches selected against actual quality certificates.' },
        { el: 'Copper rod', approach: 'Control of oxygen, conductivity, chemistry, surface, geometry and packaging.' },
        { el: 'Clean Transfer', approach: 'Transfer to the clean site in controlled packaging with traceability preserved.' },
        { el: 'ED / bonding feed', approach: 'Washing, drying and wire / nugget preparation; no oils or uncontrolled contact with foreign materials.' },
        { el: 'Documentation', approach: 'CoA per batch, lot traceability, quality control points and non-conformance protocols.' },
      ],
      ctaHeading: 'Request specifications and certificates',
      ctaText: 'We share grades, tolerances and CoA details against your application requirements.',
    },
    howwework: {
      heroEyebrow: 'How we work',
      heroH1: 'Reliable metal, documented supply',
      heroLead:
        'We combine long-term offtake, direct sales to industrial users and distribution through leading international traders — built on controlled origin and documented quality.',
      pillars: [
        { n: '01', title: 'Controlled origin', text: 'Every product starts from AMMC cathode copper with documented quality — a known, consistent metal source from the first step.' },
        { n: '02', title: 'Clean Transfer', text: 'Semi-finished material moves to the clean site in controlled packaging, with purity and traceability preserved throughout.' },
        { n: '03', title: 'Documented supply', text: 'Batches ship with a Certificate of Analysis and lot traceability, supported by quality control points and non-conformance protocols.' },
      ],
      marketsEyebrow: 'Markets & channels',
      marketsH2: 'Who we supply',
      marketsLead:
        'OF / OFE copper rod is the key external product, while higher-value materials — ED copper foil, wire bonding and electronics-grade products — add to the rod stream across our base and clean sites.',
      channels: [
        { p: 'OF / OFE copper rod', c: 'International traders, cable and wire groups, magnet-wire and special-conductor producers.' },
        { p: 'ED copper foil', c: 'Battery and electronics material buyers; qualification supplies across Asia, Europe and other industrial markets.' },
        { p: 'Wire bonding / ultrafine wire', c: 'Electronics industry and specialised component manufacturers.' },
        { p: 'Busbar / strip / magnet wire', c: 'Electrical, energy, automotive, industrial and project customers.' },
      ],
    },
    sustainability: {
      heroEyebrow: 'Sustainable approach',
      heroH1: 'Copper with responsibility',
      heroLead:
        'Controlled origin, efficient processing and products that serve the transition to cleaner, more electrified industry.',
      commitments: [
        { title: 'Responsible sourcing', text: 'Feedstock comes from AMMC cathode copper with documented origin — a transparent, traceable metal supply rather than mixed or unverified sources.' },
        { title: 'Integrated, traceable flow', text: 'A vertically integrated chain keeps copper inside one controlled flow from cathode to finished product, with purity and traceability preserved at every Clean Transfer between sites.' },
        { title: 'Copper for electrification', text: 'Our products feed the electrification economy — batteries, magnet wire, busbars and electronics that underpin renewable energy and efficient power systems.' },
        { title: 'Documented standards', text: 'We operate to clear quality and documentation standards across both sites — controlled processes, quality control points, Certificates of Analysis and lot traceability.' },
      ],
      ctaHeading: 'Building a responsible copper supply chain',
      ctaText: 'Talk to us about traceable, documented copper for your products.',
    },
    contact: {
      heroEyebrow: 'Contact us',
      heroH1: "Let's talk supply",
      heroLead: 'Tell us your grade, format and volumes. We will come back with availability and terms.',
      directTitle: 'Direct contact',
      emailLabel: 'Email',
      officeTitle: 'Registered office',
      legalTitle: 'Legal entity',
      tinLabel: 'TIN',
      includeTitle: 'What to include',
      includeList: [
        'Product and grade (e.g. OF rod Ø8 mm, ED foil 8 µm)',
        'Quantity and delivery timeframe',
        'Destination market and standard',
      ],
      fName: 'Full name',
      fCompany: 'Company',
      fEmail: 'Email',
      fCountry: 'Country',
      fInquiry: 'Inquiry type',
      fProduct: 'Product of interest',
      fMessage: 'Message',
      msgPlaceholder: 'Grade, format, volumes, timeframe…',
      selectPlaceholder: '— Select —',
      inquiryTypes: ['Offtake / supply', 'Sample / qualification', 'Distribution / trading', 'General inquiry'],
      submit: 'Send inquiry',
      statusSending: 'Sending…',
      statusOk: 'Thank you — your inquiry has been sent. We will be in touch shortly.',
      statusErr: 'Something went wrong. Please try again or email us directly.',
      statusNet: 'Network error. Please try again.',
      statusNotConfigured: 'Form endpoint not configured yet (set your Formspree ID in src/data/site.ts).',
    },
  },

  ru: {
    meta: {
      siteDescription:
        'Almalyk MMC – Betoplast — производитель медного передела: переработка катодной меди АГМК в бескислородную катанку, продукцию простого передела, ED-фольгу и материалы электронного класса.',
      tagline: 'Бескислородная медь и материалы электронного класса',
    },
    nav: {
      home: 'Главная',
      about: 'О компании',
      products: 'Продукция',
      quality: 'Качество',
      howwework: 'Как мы работаем',
      sustainability: 'Устойчивое развитие',
      contact: 'Контакты',
    },
    common: {
      getInTouch: 'Связаться',
      contactUs: 'Связаться с нами',
      exploreProducts: 'Смотреть продукцию',
      viewRange: 'Вся продукция',
      skipToContent: 'Перейти к содержимому',
    },
    footer: {
      desc: 'Almalyk MMC – Betoplast — производитель медного передела: переработка катодной меди АГМК в бескислородную катанку, продукцию простого передела, ED-фольгу и материалы электронного класса.',
      navigate: 'Навигация',
      office: 'Юридический адрес',
      rights: 'Все права защищены.',
      note: 'Медная катанка · ED-фольга · материалы электронного класса',
      tin: 'ИНН',
    },
    legalEntity: 'СП ООО «ALMALYK MMC–BETOPLAST»',
    address: {
      line1: 'ул. Амира Темура, 131, МФЙ Гафура Гуляма',
      line2: 'г. Олмалик (Алмалык), Ташкентская область',
      country: 'Республика Узбекистан',
    },
    cta: {
      defaultHeading: 'Обсудим поставки, спецификации и оффтейк',
      defaultText: 'Сообщите марку, формат и объёмы — вернёмся с наличием и условиями.',
    },
    related: {
      eyebrow: 'Материнская компания',
      footerLabel: 'Материнская компания',
      text: 'Наша материнская компания BETOPLAST AG — швейцарский энергетическо-инфраструктурный дом: энергопроекты, добыча полезных ископаемых, нефть и газ, энерготрейдинг. Медь, которую мы производим, питает как раз такие энергетические и электрификационные проекты.',
      cta: 'Перейти на BETOPLAST AG',
      sustainabilityLink: 'Мы производим медь; наша материнская компания BETOPLAST AG строит энергетическую инфраструктуру',
    },
    home: {
      heroEyebrow: 'Медный передел · Узбекистан',
      heroH1: 'Бескислородная медь,<br />инженерный передел.',
      heroLead:
        'Almalyk MMC – Betoplast перерабатывает катодную медь АГМК в бескислородную катанку, продукцию простого передела, ED-фольгу и материалы электронного класса — с контролируемым происхождением металла и документированным качеством от катода до бухты.',
      stats: [
        { v: 'OF / OFE', l: 'Бескислородные марки меди' },
        { v: '1–15 мкм', l: 'Диапазон ED-фольги' },
        { v: 'Ø8–25 мм', l: 'Диаметры катанки' },
        { v: 'CoA', l: 'Прослеживаемость партий' },
      ],
      introEyebrow: 'Что мы производим',
      introH2: 'Вертикально интегрированная цепочка по меди',
      introLead:
        'Модель построена на двух площадках: базовая — катанка и простой передел, чистая — ED-фольга, wire bonding и продукция электронного класса; их соединяет контролируемый Clean Transfer, сохраняющий чистоту и прослеживаемость.',
      capabilities: [
        { title: 'Бескислородная катанка', text: 'Катанка OF / OFE из катодной меди АГМК — ликвидный базовый продукт и сырьё для всего дальнейшего передела.' },
        { title: 'Продукция простого передела', text: 'Шины, лента, прямоугольный и круглый эмальпровод, лицендрат, плетёнка и шунты для промышленных покупателей.' },
        { title: 'ED-фольга', text: 'Электроосаждённая фольга 1–15 мкм для батарейных и электронных цепочек, включая марки HVLP / VSP.' },
        { title: 'Материалы электронного класса', text: 'Ультратонкая bonding-проволока и продукты чистого передела с покрытиями, CoA и расширенным контролем качества.' },
      ],
      productsEyebrow: 'Продукция',
      productsH2: 'От ликвидной катанки до электронного класса',
    },
    about: {
      heroEyebrow: 'О компании',
      heroH1: 'Совместное предприятие медного передела',
      heroLead:
        'Almalyk MMC – Betoplast перерабатывает катодную медь АГМК в продукцию с более высокой добавленной стоимостью, сочетая ликвидный поток катанки с переделом и производством электронного класса.',
      whoEyebrow: 'Кто мы',
      whoH2: 'Интеграция от катода до бухты',
      whoP1:
        'Наше СП строит вертикально интегрированную цепочку переработки катодной меди АГМК / AMMC в продукцию с более высокой добавленной стоимостью. Коммерческая логика сочетает ликвидный поток катанки OF / OFE с продукцией простого передела, ED-фольгой, wire bonding и специальными продуктами электронного класса.',
      whoP2:
        'Такая структура снижает зависимость от одного рынка, повышает гибкость продаж и создаёт прочную основу для работы с международными трейдерами, промышленными покупателями и долгосрочными оффтейк-партнёрами.',
      archEyebrow: 'Производственная архитектура',
      archH2: 'Двухплощадочная модель',
      archLead:
        'Материал перемещается между площадками по правилам контролируемого Clean Transfer, сохраняющего чистоту и прослеживаемость на каждом шаге.',
      sites: [
        { tag: 'Базовая площадка', title: 'Катанка и передел', text: 'Размещает линии непрерывного литья UPCAST, волочение, слиттинг, резку, эмалирование, намотку и упаковку. Производит бескислородную катанку и массовую продукцию передела — часть продаётся внешним покупателям, часть передаётся на чистую площадку.' },
        { tag: 'Чистая площадка', title: 'Электронный класс', text: 'Предназначена для процессов, чувствительных к поверхности, загрязнениям, газам и частицам: ED-фольга, wire bonding, подготовка сырья и доведение до электронного класса — всё под контролируемой прослеживаемостью.' },
      ],
      rawEyebrow: 'Сырьевая база',
      rawH2: 'Контролируемое происхождение металла',
      rawText:
        'Сырьё — катодная медь АГМК / AMMC, партии отбираются по фактическим сертификатам качества. Контролируемое происхождение обеспечивает низкокислородную катанку и чистоту, необходимую для продуктов электронного класса далее по цепочке.',
      factLegal: 'Юридическое лицо',
      factTin: 'ИНН',
      factLocation: 'Расположение',
    },
    products: {
      heroEyebrow: 'Продукция',
      heroH1: 'Медная продукция, от и до',
      heroLead:
        'Единый источник: ликвидная катанка, массовая продукция передела и чувствительные к поверхности материалы электронного класса — всё из контролируемой катодной меди АГМК.',
      ctaHeading: 'Нужна конкретная марка или формат?',
      ctaText: 'Пришлите спецификацию — диаметр, толщину, класс эмали или марку фольги — и мы подтвердим наличие.',
    },
    quality: {
      heroEyebrow: 'Качество и прослеживаемость',
      heroH1: 'Документированное качество, партия за партией',
      heroLead:
        'Качество строится вокруг контролируемого происхождения металла, низкого кислорода, чистой подготовки полуфабрикатов, прослеживаемости партий и документированного качества поставок.',
      features: [
        { title: 'Марки OF / OFE', text: 'Классы бескислородной меди OF и OFE для разных рынков, по согласованным спецификациям.' },
        { title: 'Признанные стандарты', text: 'Поставки по ASTM C10200 / C10100 или эквивалентным стандартам, если это зафиксировано в спецификации и подтверждено сертификатами анализа.' },
        { title: 'Прослеживаемость партий', text: 'Каждая партия сопровождается сертификатом анализа (CoA) и прослеживаемостью на уровне партии — от катода до готовой бухты.' },
      ],
      tableEyebrow: 'Архитектура качества',
      tableH2: 'Контроль на каждом этапе',
      thElement: 'Элемент контроля',
      thApproach: 'Проектный подход',
      controls: [
        { el: 'Сырьё', approach: 'Катодная медь АГМК / AMMC; отбор партий по фактическим сертификатам качества.' },
        { el: 'Катанка', approach: 'Контроль кислорода, проводимости, химии, поверхности, геометрии и упаковки.' },
        { el: 'Clean Transfer', approach: 'Передача на чистую площадку в контролируемой упаковке с сохранением прослеживаемости.' },
        { el: 'Сырьё для ED / bonding', approach: 'Мойка, сушка, подготовка проволоки / nuggets; запрет масел и неконтролируемого контакта с посторонними материалами.' },
        { el: 'Документация', approach: 'CoA на партию, прослеживаемость партий, контрольные точки качества и протоколы несоответствий.' },
      ],
      ctaHeading: 'Запросить спецификации и сертификаты',
      ctaText: 'Поделимся марками, допусками и данными CoA под требования вашего применения.',
    },
    howwework: {
      heroEyebrow: 'Как мы работаем',
      heroH1: 'Надёжный металл, документированная поставка',
      heroLead:
        'Мы сочетаем долгосрочный оффтейк, прямые продажи промышленным потребителям и дистрибуцию через ведущих международных трейдеров — на основе контролируемого происхождения и документированного качества.',
      pillars: [
        { n: '01', title: 'Контролируемое происхождение', text: 'Каждый продукт начинается с катодной меди АГМК с документированным качеством — известный, стабильный источник металла с первого шага.' },
        { n: '02', title: 'Clean Transfer', text: 'Полуфабрикат передаётся на чистую площадку в контролируемой упаковке, с сохранением чистоты и прослеживаемости на всех этапах.' },
        { n: '03', title: 'Документированная поставка', text: 'Партии отгружаются с сертификатом анализа и прослеживаемостью, при поддержке контрольных точек качества и протоколов несоответствий.' },
      ],
      marketsEyebrow: 'Рынки и каналы',
      marketsH2: 'Кому мы поставляем',
      marketsLead:
        'Катанка OF / OFE — ключевой внешний продукт, а материалы с более высокой добавленной стоимостью — ED-фольга, wire bonding и продукты электронного класса — дополняют поток катанки с базовой и чистой площадок.',
      channels: [
        { p: 'Катанка OF / OFE', c: 'Международные трейдеры, кабельные и проволочные группы, производители magnet wire и спецпроводников.' },
        { p: 'ED-фольга', c: 'Покупатели батарейных и электронных материалов; квалификационные поставки в Азии, Европе и на других индустриальных рынках.' },
        { p: 'Wire bonding / ультратонкая проволока', c: 'Электронная промышленность и специализированные производители компонентов.' },
        { p: 'Шины / лента / magnet wire', c: 'Электротехнические, энергетические, автомобильные, промышленные и проектные заказчики.' },
      ],
    },
    sustainability: {
      heroEyebrow: 'Устойчивый подход',
      heroH1: 'Медь с ответственностью',
      heroLead:
        'Контролируемое происхождение, эффективная переработка и продукция, которая служит переходу к более чистой и электрифицированной промышленности.',
      commitments: [
        { title: 'Ответственное происхождение', text: 'Сырьё — катодная медь АГМК с документированным происхождением: прозрачная, прослеживаемая поставка металла, а не смешанные или непроверенные источники.' },
        { title: 'Интегрированный прослеживаемый поток', text: 'Вертикально интегрированная цепочка держит медь в едином контролируемом потоке от катода до готового продукта, с сохранением чистоты и прослеживаемости при каждом Clean Transfer между площадками.' },
        { title: 'Медь для электрификации', text: 'Наша продукция питает экономику электрификации — батареи, magnet wire, шины и электронику, которые лежат в основе ВИЭ и эффективных энергосистем.' },
        { title: 'Документированные стандарты', text: 'Мы работаем по чётким стандартам качества и документации на обеих площадках — контролируемые процессы, контрольные точки, сертификаты анализа и прослеживаемость партий.' },
      ],
      ctaHeading: 'Строим ответственную цепочку поставок меди',
      ctaText: 'Обсудите с нами прослеживаемую, документированную медь для вашей продукции.',
    },
    contact: {
      heroEyebrow: 'Контакты',
      heroH1: 'Обсудим поставку',
      heroLead: 'Сообщите марку, формат и объёмы — вернёмся с наличием и условиями.',
      directTitle: 'Прямой контакт',
      emailLabel: 'Почта',
      officeTitle: 'Юридический адрес',
      legalTitle: 'Юридическое лицо',
      tinLabel: 'ИНН',
      includeTitle: 'Что указать',
      includeList: [
        'Продукт и марка (напр. катанка OF Ø8 мм, ED-фольга 8 мкм)',
        'Количество и срок поставки',
        'Рынок назначения и стандарт',
      ],
      fName: 'Имя и фамилия',
      fCompany: 'Компания',
      fEmail: 'Email',
      fCountry: 'Страна',
      fInquiry: 'Тип запроса',
      fProduct: 'Интересующий продукт',
      fMessage: 'Сообщение',
      msgPlaceholder: 'Марка, формат, объёмы, сроки…',
      selectPlaceholder: '— Выберите —',
      inquiryTypes: ['Оффтейк / поставка', 'Образец / квалификация', 'Дистрибуция / трейдинг', 'Общий вопрос'],
      submit: 'Отправить запрос',
      statusSending: 'Отправка…',
      statusOk: 'Спасибо — ваш запрос отправлен. Мы скоро свяжемся с вами.',
      statusErr: 'Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.',
      statusNet: 'Ошибка сети. Попробуйте ещё раз.',
      statusNotConfigured: 'Endpoint формы пока не настроен (укажите Formspree ID в src/data/site.ts).',
    },
  },

  uz: {
    meta: {
      siteDescription:
        'Almalyk MMC – Betoplast — mis qayta ishlash ishlab chiqaruvchisi: OKMK katod misini kislorodsiz katanka, oddiy qayta ishlash mahsulotlari, ED mis folga va elektron darajadagi materiallarga aylantiradi.',
      tagline: 'Kislorodsiz mis va elektron darajadagi materiallar',
    },
    nav: {
      home: 'Bosh sahifa',
      about: 'Kompaniya',
      products: 'Mahsulotlar',
      quality: 'Sifat',
      howwework: 'Qanday ishlaymiz',
      sustainability: 'Barqarorlik',
      contact: 'Aloqa',
    },
    common: {
      getInTouch: "Bog‘lanish",
      contactUs: "Biz bilan bog‘laning",
      exploreProducts: "Mahsulotlarni ko‘rish",
      viewRange: "Barcha mahsulotlar",
      skipToContent: "Asosiy qismga o‘tish",
    },
    footer: {
      desc: 'Almalyk MMC – Betoplast — mis qayta ishlash ishlab chiqaruvchisi: OKMK katod misini kislorodsiz katanka, oddiy qayta ishlash mahsulotlari, ED mis folga va elektron darajadagi materiallarga aylantiradi.',
      navigate: 'Navigatsiya',
      office: "Ro‘yxatdan o‘tgan manzil",
      rights: 'Barcha huquqlar himoyalangan.',
      note: 'Mis katanka · ED folga · elektron darajadagi materiallar',
      tin: 'STIR',
    },
    legalEntity: '"ALMALYK MMC–BETOPLAST" MCHJ QK',
    address: {
      line1: "Amir Temur ko‘chasi, 131-uy, G‘afur G‘ulom MFY",
      line2: 'Olmaliq shahri, Toshkent viloyati',
      country: "O‘zbekiston Respublikasi",
    },
    cta: {
      defaultHeading: "Yetkazib berish, spetsifikatsiya va offteykni muhokama qilamiz",
      defaultText: "Marka, format va hajmlarni yuboring — mavjudligi va shartlari bilan qaytamiz.",
    },
    related: {
      eyebrow: 'Bosh kompaniya',
      footerLabel: 'Bosh kompaniya',
      text: "Bizning bosh kompaniyamiz BETOPLAST AG — Shveytsariya energetika va infratuzilma uyi: energetika loyihalari, konchilik, neft va gaz, energiya savdosi. Biz ishlab chiqaradigan mis aynan shunday energetika va elektrlashtirish ishlarini taʼminlaydi.",
      cta: "BETOPLAST AG saytiga oʻtish",
      sustainabilityLink: "Biz misni ishlab chiqaramiz; bosh kompaniyamiz BETOPLAST AG energetika infratuzilmasini quradi",
    },
    home: {
      heroEyebrow: 'Mis qayta ishlash · O‘zbekiston',
      heroH1: 'Kislorodsiz mis,<br />muhandislik qayta ishlovi.',
      heroLead:
        'Almalyk MMC – Betoplast OKMK katod misini kislorodsiz katanka, oddiy qayta ishlash mahsulotlari, ED mis folga va elektron darajadagi materiallarga aylantiradi — metallning nazorat qilinadigan kelib chiqishi va katoddan g‘altakgacha hujjatlashtirilgan sifat bilan.',
      stats: [
        { v: 'OF / OFE', l: 'Kislorodsiz mis markalari' },
        { v: '1–15 µm', l: 'ED folga diapazoni' },
        { v: 'Ø8–25 mm', l: 'Katanka diametrlari' },
        { v: 'CoA', l: "Partiyalar bo‘yicha kuzatuvchanlik" },
      ],
      introEyebrow: 'Biz nima ishlab chiqaramiz',
      introH2: 'Vertikal integratsiyalashgan mis qiymat zanjiri',
      introLead:
        'Modelimiz ikki maydonda ishlaydi: asosiy maydon — katanka va oddiy qayta ishlash, toza maydon — ED folga, wire bonding va elektron darajadagi mahsulotlar; ularni tozalik va kuzatuvchanlikni saqlovchi nazorat qilinadigan Clean Transfer bog‘laydi.',
      capabilities: [
        { title: 'Kislorodsiz katanka', text: 'OKMK katod misidan quyilgan OF / OFE katanka — likvid asosiy mahsulot va keyingi barcha qayta ishlash uchun xomashyo.' },
        { title: 'Oddiy qayta ishlash mahsulotlari', text: 'Shinalar, lenta, to‘rtburchak va dumaloq emal sim, litsendrat, to‘qima va shuntlar — sanoat xaridorlari uchun.' },
        { title: 'ED mis folga', text: 'Batareya va elektronika zanjirlari uchun 1–15 µm elektrocho‘ktirilgan folga, jumladan HVLP / VSP markalari.' },
        { title: 'Elektron darajadagi materiallar', text: 'Ultraingichka bonding sim va qoplamali, CoA hamda kengaytirilgan sifat nazoratiga ega toza qayta ishlash mahsulotlari.' },
      ],
      productsEyebrow: 'Mahsulotlar',
      productsH2: 'Likvid katankadan elektron darajagacha',
    },
    about: {
      heroEyebrow: 'Kompaniya haqida',
      heroH1: 'Mis qayta ishlash bo‘yicha qo‘shma korxona',
      heroLead:
        'Almalyk MMC – Betoplast OKMK katod misini yuqori qo‘shilgan qiymatli mahsulotlarga aylantiradi, likvid katanka oqimini qayta ishlash va elektron darajadagi ishlab chiqarish bilan birlashtiradi.',
      whoEyebrow: 'Biz kimmiz',
      whoH2: 'Katoddan g‘altakgacha integratsiya',
      whoP1:
        'Qo‘shma korxonamiz OKMK / AMMC katod misini yuqori qo‘shilgan qiymatli mahsulotlarga qayta ishlovchi vertikal integratsiyalashgan zanjir quradi. Tijorat mantig‘i likvid OF / OFE katanka oqimini oddiy qayta ishlash mahsulotlari, ED folga, wire bonding va maxsus elektron darajadagi mahsulotlar bilan birlashtiradi.',
      whoP2:
        'Bunday tuzilma bitta bozorga bog‘liqlikni kamaytiradi, sotuv moslashuvchanligini oshiradi va xalqaro treyderlar, sanoat xaridorlari hamda uzoq muddatli offteyk hamkorlar bilan ishlash uchun mustahkam asos yaratadi.',
      archEyebrow: 'Ishlab chiqarish arxitekturasi',
      archH2: 'Ikki maydonli model',
      archLead:
        'Material maydonlar o‘rtasida har bir bosqichda tozalik va kuzatuvchanlikni saqlovchi nazorat qilinadigan Clean Transfer qoidalari bo‘yicha harakatlanadi.',
      sites: [
        { tag: 'Asosiy maydon', title: 'Katanka va qayta ishlash', text: 'UPCAST uzluksiz quyish liniyalari, cho‘zish, slitting, kesish, emallash, o‘rash va qadoqlashni joylashtiradi. Kislorodsiz katanka va yuqori hajmli qayta ishlash mahsulotlarini ishlab chiqaradi — bir qismi tashqi bozorga sotiladi, bir qismi toza maydonga uzatiladi.' },
        { tag: 'Toza maydon', title: 'Elektron daraja', text: 'Yuzaga, ifloslanishlarga, gazlar va zarrachalarga sezgir jarayonlar uchun mo‘ljallangan: ED folga, wire bonding, xomashyo tayyorlash va elektron darajaga yetkazish — barchasi nazorat qilinadigan kuzatuvchanlik ostida.' },
      ],
      rawEyebrow: 'Xomashyo bazasi',
      rawH2: 'Metallning nazorat qilinadigan kelib chiqishi',
      rawText:
        'Xomashyo — OKMK / AMMC katod misi, partiyalar haqiqiy sifat sertifikatlari asosida tanlanadi. Nazorat qilinadigan kelib chiqish past kislorodli katankani va keyingi elektron darajadagi mahsulotlar uchun zarur tozalikni ta’minlaydi.',
      factLegal: 'Yuridik shaxs',
      factTin: 'STIR',
      factLocation: 'Manzil',
    },
    products: {
      heroEyebrow: 'Mahsulotlar',
      heroH1: 'Mis mahsulotlari, boshidan oxirigacha',
      heroLead:
        'Yagona manba: likvid mis katanka, yuqori hajmli qayta ishlash mahsulotlari va yuzaga sezgir elektron darajadagi materiallar — barchasi nazorat qilinadigan OKMK katod misidan.',
      ctaHeading: 'Aniq marka yoki format kerakmi?',
      ctaText: 'Spetsifikatsiyangizni yuboring — diametr, qalinlik, emal klassi yoki folga markasi — biz mavjudligini tasdiqlaymiz.',
    },
    quality: {
      heroEyebrow: 'Sifat va kuzatuvchanlik',
      heroH1: 'Hujjatlashtirilgan sifat, har bir partiya',
      heroLead:
        'Sifat metallning nazorat qilinadigan kelib chiqishi, past kislorod, yarim tayyor mahsulotlarni toza tayyorlash, partiyalar kuzatuvchanligi va hujjatlashtirilgan yetkazib berish sifati atrofida quriladi.',
      features: [
        { title: 'OF / OFE markalari', text: 'Turli bozorlar uchun kelishilgan spetsifikatsiyalar asosida kislorodsiz mis (OF) va elektron kislorodsiz mis (OFE) klasslari.' },
        { title: 'Tan olingan standartlar', text: 'Spetsifikatsiyada belgilangan va tahlil sertifikatlari bilan tasdiqlangan hollarda ASTM C10200 / C10100 yoki ekvivalent standartlar bo‘yicha yetkazib berish.' },
        { title: 'Partiya kuzatuvchanligi', text: 'Har bir partiya tahlil sertifikati (CoA) va katoddan tayyor g‘altakgacha partiya darajasidagi kuzatuvchanlik bilan ta’minlanadi.' },
      ],
      tableEyebrow: 'Sifat arxitekturasi',
      tableH2: 'Har bir bosqichda nazorat',
      thElement: 'Nazorat elementi',
      thApproach: 'Loyiha yondashuvi',
      controls: [
        { el: 'Xomashyo', approach: 'OKMK / AMMC katod misi; partiyalar haqiqiy sifat sertifikatlari asosida tanlanadi.' },
        { el: 'Katanka', approach: 'Kislorod, o‘tkazuvchanlik, kimyo, yuza, geometriya va qadoqlash nazorati.' },
        { el: 'Clean Transfer', approach: 'Toza maydonga kuzatuvchanlikni saqlagan holda nazorat qilinadigan qadoqda uzatish.' },
        { el: 'ED / bonding xomashyosi', approach: 'Yuvish, quritish, sim / nuggets tayyorlash; moylar va begona materiallar bilan nazoratsiz aloqaning taqiqlanishi.' },
        { el: 'Hujjatlar', approach: 'Partiyaga CoA, partiya kuzatuvchanligi, sifat nazorat nuqtalari va nomuvofiqlik bayonnomalari.' },
      ],
      ctaHeading: 'Spetsifikatsiya va sertifikatlarni so‘rang',
      ctaText: 'Markalar, dopusklar va CoA ma’lumotlarini qo‘llanish talablaringizga mos ravishda ulashamiz.',
    },
    howwework: {
      heroEyebrow: 'Qanday ishlaymiz',
      heroH1: 'Ishonchli metall, hujjatlashtirilgan yetkazib berish',
      heroLead:
        'Biz uzoq muddatli offteyk, sanoat iste’molchilariga to‘g‘ridan-to‘g‘ri sotuv va yetakchi xalqaro treyderlar orqali taqsimotni birlashtiramiz — nazorat qilinadigan kelib chiqish va hujjatlashtirilgan sifat asosida.',
      pillars: [
        { n: '01', title: 'Nazorat qilinadigan kelib chiqish', text: 'Har bir mahsulot hujjatlashtirilgan sifatli OKMK katod misidan boshlanadi — birinchi qadamdan ma’lum, barqaror metall manbai.' },
        { n: '02', title: 'Clean Transfer', text: 'Yarim tayyor material toza maydonga nazorat qilinadigan qadoqda, barcha bosqichlarda tozalik va kuzatuvchanlikni saqlagan holda uzatiladi.' },
        { n: '03', title: 'Hujjatlashtirilgan yetkazib berish', text: 'Partiyalar tahlil sertifikati va kuzatuvchanlik bilan, sifat nazorat nuqtalari va nomuvofiqlik bayonnomalari ko‘magida jo‘natiladi.' },
      ],
      marketsEyebrow: 'Bozorlar va kanallar',
      marketsH2: 'Biz kimga yetkazib beramiz',
      marketsLead:
        'OF / OFE katanka asosiy tashqi mahsulot bo‘lib, yuqori qo‘shilgan qiymatli materiallar — ED folga, wire bonding va elektron darajadagi mahsulotlar — asosiy va toza maydonlardan katanka oqimini to‘ldiradi.',
      channels: [
        { p: 'OF / OFE katanka', c: 'Xalqaro treyderlar, kabel va sim guruhlari, magnet wire va maxsus o‘tkazgich ishlab chiqaruvchilar.' },
        { p: 'ED mis folga', c: 'Batareya va elektronika materiallari xaridorlari; Osiyo, Yevropa va boshqa sanoat bozorlarida kvalifikatsion yetkazib berishlar.' },
        { p: 'Wire bonding / ultraingichka sim', c: 'Elektronika sanoati va ixtisoslashgan komponent ishlab chiqaruvchilar.' },
        { p: 'Shina / lenta / magnet wire', c: 'Elektrotexnika, energetika, avtomobil, sanoat va loyiha buyurtmachilari.' },
      ],
    },
    sustainability: {
      heroEyebrow: 'Barqaror yondashuv',
      heroH1: 'Mas’uliyatli mis',
      heroLead:
        'Nazorat qilinadigan kelib chiqish, samarali qayta ishlash va tozaroq, ko‘proq elektrlashtirilgan sanoatga o‘tishga xizmat qiluvchi mahsulotlar.',
      commitments: [
        { title: 'Mas’uliyatli xomashyo manbai', text: 'Xomashyo — hujjatlashtirilgan kelib chiqishga ega OKMK katod misi: aralash yoki tasdiqlanmagan manbalar emas, balki shaffof, kuzatiladigan metall yetkazib berish.' },
        { title: 'Integratsiyalashgan, kuzatiladigan oqim', text: 'Vertikal integratsiyalashgan zanjir misni katoddan tayyor mahsulotgacha yagona nazorat qilinadigan oqimda saqlaydi, maydonlar o‘rtasidagi har bir Clean Transferda tozalik va kuzatuvchanlik bilan.' },
        { title: 'Elektrlashtirish uchun mis', text: 'Mahsulotlarimiz elektrlashtirish iqtisodiyotini ta’minlaydi — qayta tiklanuvchi energiya va samarali quvvat tizimlari asosidagi batareyalar, magnet wire, shinalar va elektronika.' },
        { title: 'Hujjatlashtirilgan standartlar', text: 'Biz ikkala maydonda ham aniq sifat va hujjatlashtirish standartlari bo‘yicha ishlaymiz — nazorat qilinadigan jarayonlar, sifat nazorat nuqtalari, tahlil sertifikatlari va partiya kuzatuvchanligi.' },
      ],
      ctaHeading: 'Mas’uliyatli mis yetkazib berish zanjirini quramiz',
      ctaText: 'Mahsulotlaringiz uchun kuzatiladigan, hujjatlashtirilgan mis haqida biz bilan gaplashing.',
    },
    contact: {
      heroEyebrow: 'Aloqa',
      heroH1: 'Yetkazib berishni muhokama qilamiz',
      heroLead: 'Marka, format va hajmlarni yuboring — mavjudligi va shartlari bilan qaytamiz.',
      directTitle: "To‘g‘ridan-to‘g‘ri aloqa",
      emailLabel: 'Email',
      officeTitle: "Ro‘yxatdan o‘tgan manzil",
      legalTitle: 'Yuridik shaxs',
      tinLabel: 'STIR',
      includeTitle: 'Nimani ko‘rsatish kerak',
      includeList: [
        'Mahsulot va marka (masalan, OF katanka Ø8 mm, ED folga 8 µm)',
        'Miqdor va yetkazib berish muddati',
        'Maqsadli bozor va standart',
      ],
      fName: 'To‘liq ism',
      fCompany: 'Kompaniya',
      fEmail: 'Email',
      fCountry: 'Mamlakat',
      fInquiry: 'So‘rov turi',
      fProduct: 'Qiziqtirgan mahsulot',
      fMessage: 'Xabar',
      msgPlaceholder: 'Marka, format, hajmlar, muddat…',
      selectPlaceholder: '— Tanlang —',
      inquiryTypes: ['Offteyk / yetkazib berish', 'Namuna / kvalifikatsiya', 'Distributsiya / treyding', 'Umumiy so‘rov'],
      submit: 'So‘rov yuborish',
      statusSending: 'Yuborilmoqda…',
      statusOk: 'Rahmat — so‘rovingiz yuborildi. Tez orada bog‘lanamiz.',
      statusErr: 'Xatolik yuz berdi. Qayta urinib ko‘ring yoki bizga to‘g‘ridan-to‘g‘ri yozing.',
      statusNet: 'Tarmoq xatosi. Qayta urinib ko‘ring.',
      statusNotConfigured: 'Forma endpointi hali sozlanmagan (src/data/site.ts da Formspree ID ni kiriting).',
    },
  },
} as const;
