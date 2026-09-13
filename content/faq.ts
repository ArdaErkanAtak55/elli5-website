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

/* Hizmet bazlı SSS — her /hizmetler/<slug> sayfasında ayrı FAQPage schema'sı için. */
export const serviceFaqs: Record<string, Faq[]> = {
  "mobil-uygulama": [
    {
      q: "Native mi geliştiriyorsunuz, yoksa tek kod tabanından mı çıkıyorsunuz?",
      a: "Projeye göre karar veriyoruz. Çoğu ürün için tek kod tabanından iOS ve Android'e aynı anda çıkan modern bir yaklaşım kullanıyoruz; bu hem geliştirme süresini hem maliyeti düşürür. Performans kritik veya platforma özel donanım erişimi gereken projelerde native geliştirmeyi öneriyoruz.",
    },
    {
      q: "Bir mobil uygulama ne kadar sürede tamamlanır?",
      a: "Orta ölçekli bir uygulama (kullanıcı hesabı, birkaç ana ekran, temel entegrasyonlar) genelde 6-10 hafta sürer. Kapsam netleştikten sonra keşif görüşmesinde ekran ekran bir takvim paylaşıyoruz.",
    },
    {
      q: "Uygulama yayınlandıktan sonra bakım ve güncelleme alıyor musunuz?",
      a: "Evet. Mağaza sürüm güncellemeleri, işletim sistemi uyumluluğu ve yeni özellik talepleri için aylık bakım paketi sunuyoruz; isterseniz teslimden sonra tüm erişimleri devralıp kendi ekibinizle de devam edebilirsiniz.",
    },
  ],
  "yapay-zeka": [
    {
      q: "Öneri sistemi kurmak için ne kadar veriye ihtiyacımız var?",
      a: "Kesin bir alt sınır yok; az veriyle içerik tabanlı (content-based) modellerle başlayıp kullanım arttıkça işbirlikçi filtrelemeye geçebiliyoruz. Yeni kullanıcı ve yeni ürün için 'soğuk başlangıç' (cold start) senaryolarını da kurgunun içine dahil ediyoruz.",
    },
    {
      q: "Mevcut web sitemize veya mobil uygulamamıza entegre olur mu?",
      a: "Evet. Öneri motorunu genelde bir API olarak kuruyoruz; mevcut ürününüz bu API'ye istek atıp önerileri anlık alır. Hangi teknolojiyi kullanıyor olursanız olun entegrasyon mümkün.",
    },
    {
      q: "Sonuçları nasıl ölçüyorsunuz?",
      a: "Tıklama oranı, sepete ekleme, dönüşüm ve ortalama sipariş tutarı gibi metriklerle A/B test kurup önerilerin gerçek etkisini panolarla raporluyoruz — 'çalışıyor sanıyoruz' değil, rakamla gösteriyoruz.",
    },
  ],
  "web-google-isletme": [
    {
      q: "Google İşletme Profilim zaten var, sadece optimizasyon yeterli mi?",
      a: "Çoğu zaman evet. Mevcut profili devralıp kategori, açıklama, fotoğraf ve gönderi düzenini SEO'ya uygun hale getiriyoruz; profil hiç yoksa sıfırdan kurup doğrulama sürecini de yönetiyoruz.",
    },
    {
      q: "Web sitesi ne kadar sürede teslim edilir?",
      a: "Tanıtım sitesi 2-3 hafta, çok sayfalı kurumsal site 4-6 hafta içinde yayına alınır. İçerik ve görsellerin size ait olduğu projelerde süre kısalır.",
    },
    {
      q: "Hosting ve alan adı bize mi ait olacak?",
      a: "Evet, hosting ve alan adını kendi adınıza aldırmanızı öneriyoruz — böylece siteniz her zaman sizin mülkiyetinizde kalır. İsterseniz kurulum ve yıllık yenileme takibini biz üstleniriz.",
    },
  ],
  "sosyal-medya": [
    {
      q: "Aylık pakete ayda kaç gönderi ve hangi platformlar dahil?",
      a: "Paket kapsamı işletmenize göre belirlenir; genelde Instagram ağırlıklı olmak üzere haftalık 3-5 paylaşım, story akışı ve aylık bir performans raporu içerir. İhtiyaca göre platform ve sıklık artırılabilir.",
    },
    {
      q: "Fotoğraf ve video çekimi işletmemizde mi yapılıyor?",
      a: "Evet, ürün ve mekan çekimleri yerinde yapılır; kurgu ve son işlemler stüdyoda tamamlanır. Uzaktan yürütülen hesaplar için mevcut görsel arşivinizle de çalışabiliyoruz.",
    },
    {
      q: "Marka kimliği çalışmasını sosyal medya yönetiminden ayrı da alabilir miyim?",
      a: "Evet, marka kimliği (logo, renk, tipografi, kullanım kılavuzu) tek seferlik bağımsız bir proje olarak da yürütülebilir; sonrasında sosyal medya yönetimine geçmek zorunlu değildir.",
    },
  ],
};
