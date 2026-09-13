/* Elli5 — Sıkça Sorulan Sorular. Ana sayfa akordeonu + FAQPage JSON-LD. */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Yerel SEO ve Google İşletme çalışması ne kadar sürede sonuç verir?",
    a: "Google İşletme Profili düzenlemeleri genelde birkaç gün içinde haritada görünür. Bölgesel aramalarda sıralama iyileşmesi ise rekabete göre çoğunlukla 4–12 hafta arasında belirginleşir. Bu süreçte düzenli içerik, doğru kategoriler ve yorum akışı en büyük hızlandırıcıdır.",
  },
  {
    q: "Mobil uygulama maliyeti nasıl belirleniyor?",
    a: "Maliyeti ekran sayısı, entegrasyonlar (ödeme, harita, bildirim), backend ihtiyacı ve platform (yalnız Android / iOS+Android) belirler. Çoğu projede tek kod tabanından iki platforma çıktığımız için maliyet belirgin şekilde düşer. Keşif görüşmesinden sonra net bir kapsam ve sabit teklif paylaşıyoruz.",
  },
  {
    q: "Yapay zeka öneri sistemi küçük bir işletmeye ne katar?",
    a: "Öneri sistemi yalnızca dev platformlar için değil. Bir menüde 'yanında ne iyi gider', bir e-ticarette 'bunu alanlar şunu da aldı', bir uygulamada 'sana özel plan' gibi kişiselleştirmeler ortalama sepet tutarını ve kullanım süresini artırır. Veriniz büyüdükçe sistem daha isabetli hale gelir.",
  },
  {
    q: "Türkiye'nin her yerine hizmet veriyor musunuz?",
    a: "Evet. Merkezimiz Samsun'da; web, mobil uygulama ve yapay zeka projelerini Türkiye'nin her yerinden uzaktan yürütüyoruz. Yerinde çekim veya kurulum gerektiren işlerde konum planlamaya dahil edilir.",
  },
  {
    q: "Sadece web sitesi veya sadece sosyal medya için de çalışıyor musunuz?",
    a: "Elbette. Hizmetlerimizi tek tek alabilirsiniz. Ancak çoğu işletme için web + Google İşletme + sosyal medyayı birlikte kurgulamak, bütçeyi daha verimli kullandırır ve daha hızlı sonuç getirir.",
  },
  {
    q: "Proje bittikten sonra ne oluyor?",
    a: "Teslim ettiğimiz her şeyin sahibi sizsiniz: kodlar, hesaplar, tasarım dosyaları. İsterseniz bakım ve büyütme için aylık destek paketiyle devam ediyoruz, isterseniz tüm erişimleri devredip kendi ekibinize bırakıyoruz.",
  },
];
