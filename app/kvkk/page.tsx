import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  ...pageMetadata({ title: "KVKK Aydınlatma Metni", path: "/kvkk" }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalDoc title="KVKK Aydınlatma Metni" updated="[GG.AA.YYYY]">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri
        sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin olarak sizi
        bilgilendirmek isteriz.
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <p>
        <strong>{site.legalName}</strong> (“Elli5”)
        <br />
        Adres: <strong>[Açık adres]</strong>
        <br />
        E-posta: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        <br />
        MERSIS / Vergi No: <strong>[Bilgi]</strong> · KEP:{" "}
        <strong>[KEP adresi]</strong>
      </p>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <ul>
        <li>Kimlik ve iletişim verileri: ad soyad, e-posta, telefon, işletme adı</li>
        <li>
          Talep içeriği: iletişim / dijital analiz formlarında paylaştığınız mesaj ve
          proje bilgileri
        </li>
        <li>
          İşlem güvenliği verileri: siteyi ziyaretinizde otomatik oluşan log kayıtları
          (IP, tarih-saat, tarayıcı bilgisi)
        </li>
      </ul>

      <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
      <ul>
        <li>Taleplerinizin karşılanması ve sizinle iletişime geçilmesi</li>
        <li>Teklif hazırlanması ve sözleşme süreçlerinin yürütülmesi</li>
        <li>Sunulan hizmetlerin iyileştirilmesi ve site güvenliğinin sağlanması</li>
        <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <h2>4. Hukuki Sebepler</h2>
      <p>
        Verileriniz; bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili
        olması (m.5/2-c), veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi
        (m.5/2-ç) ve ilgili kişinin temel hak ve özgürlüklerine zarar vermemek
        kaydıyla meşru menfaat (m.5/2-f) hukuki sebeplerine dayanılarak işlenir. Bu
        sebeplere dayanmayan hâllerde <strong>açık rızanız</strong> alınır.
      </p>

      <h2>5. Kişisel Verilerin Aktarılması</h2>
      <p>
        Verileriniz; hizmetin yürütülmesi için gerekli olduğu ölçüde altyapı
        sağlayıcılarımıza (barındırma / e-posta hizmeti), yasal merciler ile hukuki
        danışmanlarımıza, KVKK m.8 ve m.9’daki şartlara uygun olarak aktarılabilir.
        Yurt dışı aktarım söz konusu olduğunda mevzuattaki güvence yöntemleri
        uygulanır. Aktarım yapılan taraflar: <strong>[Liste]</strong>.
      </p>

      <h2>6. Toplama Yöntemi</h2>
      <p>
        Kişisel verileriniz; web sitemizdeki formlar, e-posta, telefon ve WhatsApp
        üzerinden ve siteyi kullanımınız sırasında otomatik yollarla toplanır.
      </p>

      <h2>7. Saklama Süresi</h2>
      <p>
        Verileriniz, işleme amacının gerektirdiği ve ilgili mevzuatta öngörülen süre
        boyunca (ör. ticari defter ve belgeler için 10 yıl) saklanır; sürenin
        sonunda silinir, yok edilir veya anonim hâle getirilir. Ayrıntı:{" "}
        <strong>[Saklama ve İmha Politikası bağlantısı]</strong>.
      </p>

      <h2>8. İlgili Kişi Olarak Haklarınız (KVKK m.11)</h2>
      <p>Kişisel verilerinize ilişkin olarak şu haklara sahipsiniz:</p>
      <ul>
        <li>İşlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme</li>
        <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde/dışında aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme</li>
        <li>Düzeltme/silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme</li>
        <li>Münhasıran otomatik sistemlerle analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
        <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde giderim talep etme</li>
      </ul>

      <h2>9. Başvuru Yöntemi</h2>
      <p>
        Taleplerinizi; yazılı olarak yukarıdaki adrese ıslak imzalı dilekçeyle,
        kayıtlı e-posta (KEP) adresinize veya sistemimizde kayıtlı e-posta adresiniz
        üzerinden <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>{" "}
        adresine iletebilirsiniz. Başvurularınız en geç 30 gün içinde
        sonuçlandırılır.
      </p>
    </LegalDoc>
  );
}
