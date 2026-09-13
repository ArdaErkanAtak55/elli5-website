import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc } from "@/components/legal-doc";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Gizlilik Politikası", path: "/gizlilik" }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalDoc title="Gizlilik Politikası" updated="[GG.AA.YYYY]">
      <p>
        Bu Gizlilik Politikası, <strong>{site.url}</strong> web sitesini
        ziyaretiniz sırasında verilerinizin nasıl toplandığını, kullanıldığını ve
        korunduğunu açıklar. Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgi
        için <Link href="/kvkk">KVKK Aydınlatma Metni</Link>’ni inceleyebilirsiniz.
      </p>

      <h2>Hangi verileri topluyoruz?</h2>
      <ul>
        <li>
          <strong>Bize ilettikleriniz:</strong> iletişim ve dijital analiz
          formlarında girdiğiniz ad soyad, e-posta, telefon, işletme adı ve mesaj
          içeriği.
        </li>
        <li>
          <strong>Otomatik teknik veriler:</strong> barındırma sağlayıcımızın
          sunucu kayıtlarında oluşan IP adresi, tarih-saat ve tarayıcı bilgisi.
        </li>
      </ul>

      <h2>Verileri ne için kullanıyoruz?</h2>
      <ul>
        <li>Taleplerinize yanıt vermek ve sizinle iletişim kurmak</li>
        <li>Teklif ve proje süreçlerini yürütmek</li>
        <li>Site güvenliğini ve teknik sürekliliğini sağlamak</li>
      </ul>
      <p>
        Formda paylaştığınız bilgiler pazarlama listelerine <strong>otomatik
        eklenmez</strong>; yalnızca talebinizle ilgili olarak kullanılır.
      </p>

      <h2>Form gönderimleri</h2>
      <p>
        Site şu an bir form altyapısı yerine e-posta yönlendirmesi kullanmaktadır;
        formu gönderdiğinizde bilgiler e-posta uygulamanız aracılığıyla{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> adresine
        iletilir. İleride bir form servisi (ör. Formspree/Web3Forms) devreye
        alınırsa bu bölüm güncellenecektir.
      </p>

      <h2>Üçüncü taraf hizmetler</h2>
      <ul>
        <li>
          <strong>Google Haritalar:</strong> İletişim sayfasındaki gömülü harita
          Google tarafından sağlanır ve Google çerez yerleştirebilir.
        </li>
        <li>
          <strong>Barındırma / altyapı:</strong> Site <strong>[barındırma
          sağlayıcı]</strong> üzerinde barındırılır.
        </li>
        <li>
          <strong>Yazı tipleri:</strong> Web fontları site sunucusundan sunulur
          (üçüncü taraf font sağlayıcısına istek gönderilmez).
        </li>
      </ul>

      <h2>Çerezler</h2>
      <p>
        Site, zorunlu olmayan izleme çerezleri kullanmaz. Ayrıntı için{" "}
        <Link href="/cerez-politikasi">Çerez Politikası</Link>’na bakın.
      </p>

      <h2>Veri güvenliği</h2>
      <p>
        Verilerinizin yetkisiz erişime, kayba ve kötüye kullanıma karşı korunması
        için makul teknik ve idari tedbirler uygulanır (şifreli bağlantı, erişim
        kısıtı, güncel altyapı).
      </p>

      <h2>Haklarınız ve iletişim</h2>
      <p>
        Verilerinize erişme, düzeltme veya silinmesini isteme haklarınız için{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>{" "}
        adresinden bize ulaşabilirsiniz.
      </p>
    </LegalDoc>
  );
}
