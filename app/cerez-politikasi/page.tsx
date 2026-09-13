import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc } from "@/components/legal-doc";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Çerez Politikası", path: "/cerez-politikasi" }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalDoc title="Çerez Politikası" updated="[GG.AA.YYYY]">
      <p>
        Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük
        metin dosyalarıdır. Bu politika, <strong>{site.url}</strong> sitesinde çerez
        kullanımını açıklar.
      </p>

      <h2>Bu sitede hangi çerezler kullanılıyor?</h2>
      <p>
        Site <strong>izleme veya reklam çerezi kullanmaz</strong>. Analitik
        (Google Analytics vb.) araç da yüklü değildir. Yalnızca aşağıdaki durumlar
        söz konusudur:
      </p>
      <ul>
        <li>
          <strong>Zorunlu / teknik:</strong> Sitenin çalışması için gereken, kişisel
          veri toplamayan temel kayıtlar.
        </li>
        <li>
          <strong>Google Haritalar (üçüncü taraf):</strong> İletişim sayfasındaki
          gömülü harita yüklendiğinde Google, kendi çerezlerini yerleştirebilir. Bu
          çerezler Google’ın{" "}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
            çerez politikasına
          </a>{" "}
          tabidir.
        </li>
      </ul>

      <h2>İleride eklenebilecek çerezler</h2>
      <p>
        Site ileride analitik (ziyaretçi istatistiği) veya bir form servisi
        kullanmaya başlarsa, ilgili çerezler ve gerekiyorsa bir onay bildirimi
        eklenir; bu politika güncellenir.
      </p>

      <h2>Çerezleri nasıl yönetebilirsiniz?</h2>
      <p>
        Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz.
        Zorunlu çerezleri engellemek sitenin bazı bölümlerinin çalışmamasına neden
        olabilir. Yönetim adımları için tarayıcınızın yardım sayfasına bakabilirsiniz
        (Chrome, Safari, Firefox, Edge).
      </p>

      <h2>İletişim</h2>
      <p>
        Sorularınız için{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> ·{" "}
        <Link href="/gizlilik">Gizlilik Politikası</Link>
      </p>
    </LegalDoc>
  );
}
