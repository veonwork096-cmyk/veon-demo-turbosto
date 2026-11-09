// Facts for the TurboSTO homepage. Source: veon/client.json and audit/notes/business.md (no invented values).

export const phones = [
  { href: "tel:+380507343992", label: "(050) 734-39-92", full: "+38 (050) 734-39-92" },
  { href: "tel:+380971244338", label: "(097) 124-43-38", full: "+38 (097) 124-43-38" },
] as const;

export const mainPhone = phones[0];
export const email = "post@turbosto.com.ua";

/** B-F006 */
export const hours = {
  callCenter: [
    { days: "Пн–Пт", time: "09:00–19:00" },
    { days: "Сб", time: "09:00–15:00" },
  ],
  sto: [
    { days: "Пн–Пт", time: "09:00–19:00" },
    { days: "Сб", time: "09:00–16:00" },
  ],
} as const;

/** B-F003 (rating and count from the footer of the current site; 4420 is not used, B-I003) */
export const rating = { value: "4,6", reviews: "1596" } as const;

export interface PriceRow { name: string; from: string; }
export interface PriceTab { id: string; tab: string; title: string; term: string; note?: string; rows: PriceRow[]; }

/** products_services[0], [1]; B-F010, B-F011 */
export const priceTabs: PriceTab[] = [
  {
    id: "turbo",
    tab: "Турбіна",
    title: "Ремонт турбіни",
    term: "Терміновий ремонт від 6 годин, зазвичай 1–2 дні.",
    note: "У ціні: ремкомплект, робота майстра, очищення і балансування.",
    rows: [
      { name: "Стандартний ремонт", from: "4200" },
      { name: "Капітальний ремонт", from: "5000" },
      { name: "Заміна картриджа", from: "4500" },
      { name: "Ремонт сервопривода", from: "1000" },
      { name: "Ремонт актуатора", from: "950" },
      { name: "Зняття і встановлення", from: "2500" },
    ],
  },
  {
    id: "pnvt",
    tab: "ПНВТ",
    title: "Ремонт ПНВТ (ТНВД)",
    term: "Термін ремонту 1–3 дні.",
    note: "Common Rail, Lucas, Zexel VRZ, вантажна та спецтехніка.",
    rows: [
      { name: "Поточний ремонт", from: "3000" },
      { name: "Капітальний ремонт", from: "5000" },
      { name: "Зняття і встановлення", from: "2500" },
    ],
  },
];

export interface Sto { city: string; slug: string; addresses: string[]; }

/** B-F007: 31 active addresses in 27 cities (contacts page of the current site) */
export const network: Sto[] = [
  { city: "Київ", slug: "kyiv", addresses: ["вул. Приколійна, 21", "вул. Ярославська, 57"] },
  { city: "Бориспіль", slug: "boryspil", addresses: ["Броварська, 46"] },
  { city: "Біла Церква", slug: "bila-tserkva", addresses: ["Сквирське шосе, 178"] },
  { city: "Вінниця", slug: "vinnytsia", addresses: ["Ватутіна, 1а", "Юківка, 109Б"] },
  { city: "Дніпро", slug: "dnipro", addresses: ["вул. Ударників, 27б"] },
  { city: "Житомир", slug: "zhytomyr", addresses: ["с. Довжик, Нескорених, 13"] },
  { city: "Запоріжжя", slug: "zaporizhzhia", addresses: ["Садівництва, 13"] },
  { city: "Івано-Франківськ", slug: "ivano-frankivsk", addresses: ["с. Угорники, Тисменицька, 249Б"] },
  { city: "Ковель", slug: "kovel", addresses: ["с. Дубове, Старожилів, 4"] },
  { city: "Кременчук", slug: "kremenchuk", addresses: ["Ярмаркова, 7Ж"] },
  { city: "Кривий Ріг", slug: "kryvyi-rih", addresses: ["Ферганська, 9"] },
  { city: "Кропивницький", slug: "kropyvnytskyi", addresses: ["Пашутінська, 14"] },
  { city: "Луцьк", slug: "lutsk", addresses: ["М. Скорика, 2а", "Котляревського, 19"] },
  { city: "Львів", slug: "lviv", addresses: ["вул. Зелена, 408", "вул. Зелена, 149Ю"] },
  { city: "Миколаїв", slug: "mykolaiv", addresses: ["Мала Морська, 54"] },
  { city: "Одеса", slug: "odesa", addresses: ["вул. Хімічна, 1"] },
  { city: "Полтава", slug: "poltava", addresses: ["Решетилівська, 26/1"] },
  { city: "Рівне", slug: "rivne", addresses: ["Василя Червонія, 39Б"] },
  { city: "Суми", slug: "sumy", addresses: ["Білопільський шлях, 21"] },
  { city: "Тернопіль", slug: "ternopil", addresses: ["с. Байківці, 15-го Квітня, 7"] },
  { city: "Ужгород", slug: "uzhhorod", addresses: ["с. Оноківці, Зелена, 3"] },
  { city: "Умань", slug: "uman", addresses: ["Царське село, 113"] },
  { city: "Харків", slug: "kharkiv", addresses: ["вул. Полтавський Шлях, 79"] },
  { city: "Хмельницький", slug: "khmelnytskyi", addresses: ["Гарнізонна, 30"] },
  { city: "Черкаси", slug: "cherkasy", addresses: ["Академіка Корольова, 6"] },
  { city: "Чернівці", slug: "chernivtsi", addresses: ["Енергетична, 3"] },
  { city: "Чернігів", slug: "chernihiv", addresses: ["Генерала Пухова, 49"] },
];

/** B-F007: 21 addresses marked «Незабаром відкриття» */
export const comingSoon = [
  "Бровари", "Бурштин", "Бучач", "Вараш", "Вишневе", "Володимир", "Дрогобич",
  "Ізмаїл", "Ірпінь", "Кам'янець-Подільський", "Київ (Велика Кільцева, 4г)", "Коломия",
  "Кременець", "Могилів-Подільський", "Мукачево", "Олександрія", "Павлоград",
  "Петриківка", "Сарни", "Херсон", "Червоноград",
];

export const mapHref = (city: string, address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`TurboSTO, ${city}, ${address}`)}`;

/** products_services[3] */
export const shopCategories = [
  { name: "Картридж турбіни", count: "1619" },
  { name: "Клапан", count: "815" },
  { name: "Колесо компресора", count: "734" },
  { name: "Ротор", count: "687" },
  { name: "Прокладки", count: "428" },
  { name: "Ремкомплекти", count: "333" },
  { name: "Геометрія", count: "195" },
  { name: "Корпус", count: "155" },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/turbostoua/" },
  { name: "Facebook", href: "https://www.facebook.com/turbostouakyiv" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCrTJG3TryVMTXpjgbq4N4jQ/featured" },
  { name: "TikTok", href: "https://www.tiktok.com/@turbosto" },
] as const;

export const FUTURE = "Розділ у розробці";

// Questions: current homepage, block «Коли звертатися на діагностику?». Answers: prices and terms from client.json only.
export const symptoms = [
  { q: "Чути металевий стукіт чи скрегіт з-під капота?", a: "Не відкладайте: причину знайде майстер на діагностиці. Комп'ютерна діагностика безкоштовна за умови ремонту в TurboSTO." },
  { q: "Відчуваєте запах пального, і зросла його витрата?", a: "Варто перевірити паливну апаратуру: ПНВТ і форсунки. Ремонт ПНВТ від 3000 грн, термін 1–3 дні." },
  { q: "Авто часто глохне і важче розганяється?", a: "Причину покаже діагностика турбіни і паливної системи. Терміновий ремонт турбіни від 6 годин." },
  { q: "Коли маховик точно потрібно ремонтувати?", a: "Це вирішує майстер після огляду. Подзвоніть, і вам підкажуть найближче СТО." },
  { q: "Чорний дим із вихлопної труби із запахом гару?", a: "Перевірте турбіну і паливну систему якомога раніше. Стандартний ремонт турбіни від 4200 грн." },
] as const;
