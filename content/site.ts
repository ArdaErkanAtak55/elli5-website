/* =============================================================================
   Elli5 — Site geneli ayarlar (TEK KAYNAK)
   Buradaki YER TUTUCU değerleri gerçek bilgilerle değiştirmen yeterli.
   ========================================================================== */

export const site = {
  name: "Elli5",
  legalName: "Elli5 Yazılım, Medya ve Dijital Dönüşüm Ajansı",
  shortTitle: "Elli5 — Yazılım, Medya ve Dijital Dönüşüm Ajansı",
  description:
    "Elli5; Samsun merkezli yazılım, medya ve dijital dönüşüm ajansı. Mobil uygulama geliştirme, yapay zeka & öneri sistemleri, kurumsal web & Google İşletme ve sosyal medya yönetimi ile işletmenizin uçtan uca dijital mimarisini kuruyoruz.",

  /* Yayına alınca gerçek alan adınla değiştir (https:// ile, sonunda / olmadan) */
  url: "https://www.elli5.com.tr",

  locale: "tr_TR",
  region: "Türkiye",

  /* ---- İletişim ---- */
  contact: {
    email: "elli5dijital@gmail.com",
    /* Telefon geçici — kalıcı numara belirlenince güncelle. */
    phoneDisplay: "+90 542 688 26 93",
    phoneHref: "+905426882693",
    whatsapp: "905426882693", // wa.me/<numara>
    /* Fiziksel ofis yok — sokak adresi ve posta kodu bilerek boş bırakıldı. */
    addressLine: "",
    city: "Vezirköprü / Samsun",
    postalCode: "",
    country: "TR",
    hours: "Hafta içi 09:00 – 18:00",
    mapQuery: "Vezirköprü, Samsun",
  },

  /* ---- Sosyal medya (boş olanlar otomatik gizlenir) ---- */
  social: {
    instagram: "https://www.instagram.com/elli5dijital/",
    linkedin: "",
    x: "",
    youtube: "",
  },

  /* Hizmet verilen bölge — merkez Samsun, hizmet Türkiye geneli (uzaktan) */
  areaServed: "Türkiye",

  /* ---- LOGO ----
     src boşsa header/footer'da "Elli5" yazı logosu gösterilir.
     Kendi logonu koymak için:
       1) Dosyayı /public/logo/ altına at (tercihen .svg).
       2) src'yi "/logo/elli5.svg" yap.
       3) Koyu footer için ayrı beyaz sürüm varsa srcDark'a "/logo/elli5-beyaz.svg" yaz
          (yoksa boş bırak — footer'da yazı logosu kullanılır).
       4) width/height değerlerini logonun en-boy oranına göre ayarla (header'da ~30px yükseklik). */
  logo: {
    src: "/logo/elli5.svg",
    srcDark: "/logo/elli5-beyaz.svg",
    width: 388,
    height: 200,
  },
} as const;

/* ---- İş ortakları / müşteri logoları ----
   Logo dosyası hazır olan müşteriler için /public/clients/ altına SVG/PNG ekleyip
   logo alanına yolunu yaz. logo boş bırakılırsa isim rozeti gösterilir (bkz. ClientLogos).
   Diziyi boşaltırsan şerit gizlenir. */
export const clients: { name: string; logo: string }[] = [
  { name: "Saim Usta Pide ve Lahmacun", logo: "" },
  { name: "Ateş Kardeşler Restoran ve Fırın", logo: "" },
  { name: "FitFat", logo: "" },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      {
        label: "Mobil Uygulama Geliştirme",
        href: "/hizmetler/mobil-uygulama",
        description: "iOS ve Android için uçtan uca çözümler",
      },
      {
        label: "Yapay Zeka & Öneri Sistemleri",
        href: "/hizmetler/yapay-zeka",
        description: "AI destekli öneri motorları ve veri analizi",
      },
      {
        label: "Web & Google İşletme",
        href: "/hizmetler/web-google-isletme",
        description: "Kurumsal web, SEO ve harita optimizasyonu",
      },
      {
        label: "Sosyal Medya & Marka",
        href: "/hizmetler/sosyal-medya",
        description: "Dijital vitrin yönetimi ve kreatif medya",
      },
    ],
  },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

/** Hero, CTA bandı ve mobil menüde kullanılan üst-huni CTA */
export const primaryCta = {
  label: "Ücretsiz Dijital Analiz",
  href: "/dijital-analiz",
};

/** Header'daki her zaman görünür satış CTA'sı */
export const quoteCta = {
  label: "Teklif Al",
  href: "/teklif",
};
