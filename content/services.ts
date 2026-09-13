/* Elli5 — Hizmetler. Ana sayfa kartları + /hizmetler detay bölümleri buradan beslenir. */

export type Service = {
  id: string; // anchor (#id)
  icon: "smartphone" | "brain" | "map-pin" | "megaphone";
  title: string;
  /** Ana sayfa kartı için kısa açıklama */
  short: string;
  /** Detay bölümü giriş cümlesi */
  intro: string;
  /** Neler dahil */
  includes: string[];
  /** Kimler için */
  audience: string;
  /** Başlangıç bütçesi — YER TUTUCU, netleştir. Paketli seçenekler yakında eklenecek. */
  pricing: string;
};

export const services: Service[] = [
  {
    id: "mobil-uygulama",
    icon: "smartphone",
    title: "Mobil Uygulama Geliştirme",
    short:
      "Fikirden mağaza yayınına kadar, iOS ve Android'de çalışan uçtan uca çözümler.",
    intro:
      "Fikir aşamasından mağaza yayınına kadar tüm süreci tek elden yönetiyoruz. Projeye en uygun modern teknolojilerle; hızlı, ölçeklenebilir ve bakımı kolay uygulamalar kuruyoruz.",
    includes: [
      "Ürün keşfi, akış tasarımı ve tıklanabilir prototip",
      "iOS ve Android için uygulama geliştirme",
      "Kullanıcı hesabı, veritabanı, bildirim ve analitik altyapısı",
      "Backend / API mimarisi ve üçüncü parti entegrasyonlar",
      "App Store & Google Play yayını, sürüm ve bakım desteği",
    ],
    audience:
      "İşini mobile taşımak isteyen işletmeler, dikey pazar uygulamaları ve ölçeklenmek isteyen girişimler.",
    pricing: "Kapsama göre projeye özel teklif",
  },
  {
    id: "yapay-zeka",
    icon: "brain",
    title: "Yapay Zeka & Öneri Sistemleri",
    short:
      "AI destekli öneri motorları, veri analizi ve algoritma geliştirme.",
    intro:
      "Kullanıcı davranışını okuyan öneri sistemleri (recommender systems) kuruyoruz: işbirlikçi filtreleme, içerik tabanlı ve hibrit yaklaşımlarla her kullanıcıya en doğru içeriği, ürünü veya aksiyonu öneriyoruz.",
    includes: [
      "Öneri motoru: işbirlikçi filtreleme, içerik tabanlı ve hibrit modeller",
      "Kişiselleştirme ve segmentasyon altyapısı",
      "Veri analizi, panolar ve otomatik raporlama",
      "Yapay zeka destekli özellikler: akıllı arama, özetleme, asistan",
      "Algoritma geliştirme ve mevcut ürüne entegrasyon",
    ],
    audience:
      "İçerik, ürün veya hizmet kataloğu büyüyen; verisini kişiselleştirmeye ve otomasyona dönüştürmek isteyen ekipler.",
    pricing: "40.000 – 150.000 ₺ (kapsam / pakete göre)",
  },
  {
    id: "web-google-isletme",
    icon: "map-pin",
    title: "Web & Google İşletme",
    short:
      "Kurumsal web siteleri, yerel SEO ve Google Haritalar optimizasyonu.",
    intro:
      "Bölgesinde aranınca ilk çıkan işletme olmanızı sağlıyoruz. Hızlı açılan kurumsal bir site, doğru kurgulanmış bir Google İşletme Profili ve sürekli yerel SEO ile telefonunu eline alan müşteriye ulaşırsınız.",
    includes: [
      "Kurumsal / tanıtım web sitesi tasarımı ve geliştirme",
      "Google İşletme Profili kurulumu, doğrulama ve yönetimi",
      "Yerel SEO: bölgesel anahtar kelimeler, içerik ve teknik iyileştirme",
      "Google Haritalar konum ve kategori optimizasyonu",
      "Yorum toplama akışı ve itibar yönetimi",
    ],
    audience:
      "Restoran, klinik, atölye, showroom — kısacası dijitalde görünür olması gereken tüm işletmeler.",
    pricing: "Web sitesi 15.000 ₺'den, kurumsal site 50.000 ₺'den başlar",
  },
  {
    id: "sosyal-medya",
    icon: "megaphone",
    title: "Sosyal Medya & Marka",
    short:
      "Dijital vitrin yönetimi, kreatif medya ve marka kimliği.",
    intro:
      "Sosyal medya işletmenizin dijital vitrini. İçerik planından çekime, marka kimliğinden topluluk yönetimine kadar bu vitrini tutarlı ve profesyonel tutuyoruz.",
    includes: [
      "İçerik stratejisi ve aylık yayın planı",
      "Kreatif tasarım, fotoğraf ve kısa video üretimi",
      "Marka kimliği: logo, renk, tipografi, kullanım kılavuzu",
      "Topluluk yönetimi ve mesaj / yorum takibi",
      "Reklam kurgusu ve performans raporu",
    ],
    audience:
      "Vitrinini profesyonelleştirmek, tanınırlığını artırmak ve düzenli içerik üretmek isteyen markalar.",
    pricing: "Aylık 15.000 ₺'den başlar",
  },
];
