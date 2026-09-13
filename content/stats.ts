/* Elli5 — İstatistik şeridi. YER TUTUCU rakamlar — gerçek verilerle değiştir. */

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "20+", label: "Tamamlanan dijital proje" },
  { value: "6", label: "Farklı sektör" },
  { value: "4", label: "Ana hizmet alanı" },
  { value: "%100", label: "Kod ve hesap sahipliği müşteride" },
];

/* "Neden Elli5" değer önerileri */
export type Value = {
  icon: "layers" | "compass" | "line-chart" | "cpu";
  title: string;
  body: string;
};

export const values: Value[] = [
  {
    icon: "layers",
    title: "Uçtan uca mimari",
    body: "Tasarım, geliştirme, altyapı ve yayın tek elden. Parça parça değil, bütün bir dijital sistem kuruyoruz.",
  },
  {
    icon: "compass",
    title: "Her ölçekte aynı disiplin",
    body: "Tek sayfalık bir siteye de, kapsamlı bir mobil ürüne de aynı mühendislik titizliğiyle yaklaşıyoruz.",
  },
  {
    icon: "line-chart",
    title: "Ölçülebilir sonuç",
    body: "Her işin sonunda bakılacak bir metrik var: arama, çağrı, indirme, kayıt. Süsleme değil, çıktı.",
  },
  {
    icon: "cpu",
    title: "Modern teknoloji",
    body: "Projeye en uygun güncel teknolojiler ve yapay zeka öneri sistemleri — hızlı, güvenli ve sürdürülebilir.",
  },
];

/* "Nasıl çalışıyoruz" — süreç adımları */
export type Step = { n: string; title: string; body: string };

export const process: Step[] = [
  {
    n: "01",
    title: "Keşif & Analiz",
    body: "İşinizi, hedefinizi ve mevcut dijital durumunuzu çıkarıyoruz. Ücretsiz dijital analiz tam da bu.",
  },
  {
    n: "02",
    title: "Strateji & Mimari",
    body: "Kapsamı, teknoloji seçimini ve yol haritasını netleştiriyoruz. Sabit teklif burada çıkar.",
  },
  {
    n: "03",
    title: "Geliştirme & Üretim",
    body: "Tasarım, kod, içerik ve altyapı paralel ilerler. Ara sürümleri düzenli gösteririz.",
  },
  {
    n: "04",
    title: "Lansman & Büyüme",
    body: "Yayına alır, ölçer ve iyileştiririz. İsteğe bağlı aylık destekle büyümeye devam.",
  },
];
