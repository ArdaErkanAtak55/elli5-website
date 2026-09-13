/* Elli5 — Blog. Örnek içerikle çalışır iskele.
   Yeni yazı eklemek için diziye yeni bir nesne ekle; body blok tabanlıdır. */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingMinutes: number;
  category: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "google-isletme-profili-ile-bolgede-one-cikmak",
    title: "Google İşletme Profili ile bölgenizde ilk sırada görünmek",
    description:
      "Yerel bir işletmenin telefonundan arama yapan müşteriye ulaşmasının en hızlı yolu: doğru kurulmuş bir Google İşletme Profili ve düzenli yerel SEO.",
    date: "2026-07-14",
    readingMinutes: 5,
    category: "Web & Google İşletme",
    body: [
      {
        type: "p",
        text: "Bir müşteri 'yakınımdaki kahvaltıcı', 'Samsun oto tamir' ya da 'Atakum kuaför' yazdığında Google, arama yapan kişiye en yakın ve en güvenilir gördüğü işletmeleri harita kutusunda sıralar. Bu kutuda görünmek, çoğu yerel işletme için web sitesinden bile önemlidir.",
      },
      { type: "h2", text: "Profilinizi hangi sinyaller yükseltir?" },
      {
        type: "ul",
        items: [
          "Eksiksiz bilgi: adres, telefon, çalışma saatleri, kategori ve hizmet listesi",
          "Düzenli ve gerçek fotoğraflar — dış cephe, iç mekân, ürün/hizmet",
          "Sürekli gelen ve yanıtlanan müşteri yorumları",
          "Sitenizle tutarlı isim, adres, telefon bilgisi (NAP tutarlılığı)",
          "Google Güncellemeleri (post) ile canlı tutulan bir profil",
        ],
      },
      {
        type: "p",
        text: "Bu sinyallerin hepsi yönetilebilir. Önemli olan bir kez düzenleyip bırakmak değil, profili canlı bir kanal gibi işletmek.",
      },
      { type: "h2", text: "Web sitesi hâlâ gerekli mi?" },
      {
        type: "p",
        text: "Evet. Profil müşteriyi bulur; site ise güven verir ve dönüşümü tamamlar. Menü, fiyat aralığı, sıkça sorulanlar, kayıt veya rezervasyon formu gibi içerikler sitede yaşar. Hızlı açılan, mobil öncelikli bir site aynı zamanda yerel SEO'nun temel taşıdır.",
      },
      {
        type: "quote",
        text: "Yerel işletmelerin çoğu için ilk 100 müşteri, reklamdan değil, doğru kurulmuş bir profilden ve birkaç iyi yorumdan gelir.",
      },
      {
        type: "p",
        text: "İşletmenizin mevcut durumunu ücretsiz dijital analizle çıkarabiliriz: profil ne durumda, hangi aramalarda görünüyorsunuz, ilk hangi adım en çok kazandırır.",
      },
    ],
  },
  {
    slug: "kucuk-isletmeler-icin-yapay-zeka-oneri-sistemleri",
    title: "Küçük işletmeler için yapay zeka öneri sistemleri",
    description:
      "Öneri sistemleri yalnızca Netflix ve Amazon için değil. İşbirlikçi filtreleme, içerik tabanlı ve hibrit yaklaşımların küçük bir işletmeye nasıl değer kattığını anlatıyoruz.",
    date: "2026-08-02",
    readingMinutes: 6,
    category: "Yapay Zeka & Öneri Sistemleri",
    body: [
      {
        type: "p",
        text: "Öneri sistemi (recommender system), bir kullanıcının ilgisini çekme ihtimali en yüksek içeriği, ürünü veya aksiyonu tahmin eden yazılımdır. Netflix'in sıradaki diziyi, Spotify'ın haftalık listeyi önermesinin arkasındaki mantık budur — ve aynı mantık çok daha küçük ölçekte de çalışır.",
      },
      { type: "h2", text: "Üç temel yaklaşım" },
      {
        type: "ul",
        items: [
          "İşbirlikçi filtreleme: 'Senin gibi davrananlar şunu da beğendi.' En yaygın yöntem.",
          "İçerik tabanlı filtreleme: 'Daha önce seçtiklerine benzer özellikte olanlar.'",
          "Hibrit: İkisini birleştirir; az veriyle bile daha isabetli sonuç verir.",
        ],
      },
      { type: "h2", text: "Pratikte neye benziyor?" },
      {
        type: "p",
        text: "Bir restoran uygulamasında 'bu yemeğin yanına en çok şunu alıyorlar'; bir e-ticarette 'birlikte sık alınanlar'; bir fitness uygulamasında 'geçmiş tercihlerine göre bugünkü öğün planın'. Hepsi aynı altyapının farklı yüzleri.",
      },
      {
        type: "p",
        text: "Bu kişiselleştirmeler ortalama sepet tutarını, uygulamada geçirilen süreyi ve geri dönüş oranını ölçülebilir şekilde artırır.",
      },
      { type: "h2", text: "Ne zaman başlanmalı?" },
      {
        type: "p",
        text: "Elinizde birkaç yüz işlem/etkileşim verisi biriktiği anda basit bir model bile fark yaratır. Sistem, veri büyüdükçe kendini iyileştirir. Önemli olan veriyi baştan doğru yapıda toplamak — bu yüzden öneri altyapısını ürün mimarisinin bir parçası olarak düşünmek gerekir.",
      },
      {
        type: "quote",
        text: "Öneri sistemi bir 'ekstra özellik' değil; verinizi zamanla değer üreten bir varlığa dönüştüren altyapıdır.",
      },
    ],
  },
  {
    slug: "mobil-uygulama-maliyetini-ne-belirler",
    title: "Mobil uygulama maliyetini ne belirler?",
    description:
      "Ekran sayısı, entegrasyonlar, backend ve platform seçimi bir mobil uygulamanın bütçesini nasıl etkiler? Çapraz platform geliştirme maliyeti neden düşürür?",
    date: "2026-08-21",
    readingMinutes: 5,
    category: "Mobil Uygulama Geliştirme",
    body: [
      {
        type: "p",
        text: "'Bir uygulama ne kadar tutar?' sorusunun tek bir cevabı yok, çünkü uygulama dediğimiz şey bir vitrin sitesi kadar basit de olabilir, bir bankacılık sistemi kadar karmaşık da. Ama maliyeti belirleyen değişkenler bellidir.",
      },
      { type: "h2", text: "Bütçeyi belirleyen beş değişken" },
      {
        type: "ul",
        items: [
          "Ekran ve akış sayısı: Kaç farklı görünüm, kaç kullanıcı yolculuğu var?",
          "Entegrasyonlar: Ödeme, harita, bildirim, e-fatura, kargo, sosyal giriş…",
          "Backend ihtiyacı: Kullanıcı hesabı, veritabanı, yönetim paneli gerekiyor mu?",
          "Platform: Yalnızca Android mı, iOS + Android mi?",
          "Tasarım özgünlüğü: Hazır bileşenler mi, tamamen özel bir tasarım sistemi mi?",
        ],
      },
      { type: "h2", text: "Çapraz platform yaklaşımı maliyeti neden düşürür?" },
      {
        type: "p",
        text: "Tamamen native geliştirmede iOS ve Android için iki ayrı kod tabanı, çoğu zaman iki ayrı ekip demektir. Çapraz platform araçlarıyla tek kod tabanından iki platforma çıkarsınız; bu da geliştirme ve bakım maliyetini belirgin biçimde azaltır. Performans açısından kritik bazı modüller gerektiğinde yine native yazılabilir. Elli5'te teknolojiyi projeye göre seçiyoruz.",
      },
      {
        type: "quote",
        text: "En pahalı uygulama, kapsamı netleşmeden başlanan uygulamadır. Keşif aşaması bütçenin en iyi yatırımıdır.",
      },
      {
        type: "p",
        text: "Elli5'te önce ücretsiz bir keşif görüşmesi yapıyor, ardından net bir kapsam ve sabit teklif paylaşıyoruz. Böylece sürprizle karşılaşmıyorsunuz.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
