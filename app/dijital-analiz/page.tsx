import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { LeadForm, type Field } from "@/components/forms/lead-form";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ücretsiz Dijital Analiz",
  description:
    "İşletmenizin dijital durumunu ücretsiz analiz edelim: web siteniz, Google İşletme profiliniz, sosyal medyanız ve mobil ihtiyacınız. 15 dakikalık görüşme, bağlayıcı değil.",
  path: "/dijital-analiz",
});

const included = [
  "Google İşletme Profili ve harita görünürlüğü kontrolü",
  "Web sitesi hız, mobil uyum ve SEO taraması",
  "Sosyal medya vitrininin hızlı değerlendirmesi",
  "Mobil uygulama / yapay zeka fırsatlarının tespiti",
  "Önceliklendirilmiş, uygulanabilir bir aksiyon listesi",
];

const fields: Field[] = [
  { name: "isletme", label: "İşletme Adı", required: true },
  { name: "sektor", label: "Sektör / faaliyet alanı", required: true },
  {
    name: "sehir",
    label: "Şehir / ilçe",
    placeholder: "ör. Atakum / Samsun",
  },
  {
    name: "mevcut",
    label: "Şu an neleriniz var?",
    type: "select",
    options: [
      "Web sitem var",
      "Google İşletme profilim var",
      "Sosyal medya hesaplarım aktif",
      "Hiçbiri / yeni başlıyorum",
    ],
  },
  {
    name: "hedef",
    label: "Bu analizden beklentiniz",
    type: "textarea",
    full: true,
    placeholder: "ör. Bölgemde aranınca ilk çıkmak istiyorum.",
  },
  { name: "ad", label: "Ad Soyad", required: true },
  { name: "email", label: "E-posta", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
];

export default function AuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Ücretsiz Dijital Analiz", path: "/dijital-analiz" },
            ]),
          ),
        }}
      />
      <PageHeader
        eyebrow="Ücretsiz Dijital Analiz"
        title="İşletmeniz dijitalde nerede duruyor?"
        lead="15 dakikalık bir görüşmeyle mevcut durumunuzu çıkarır, ilk hangi adımın en çok kazandıracağını net olarak söyleriz. Satış görüşmesi değil, durum tespiti."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl">Analizde neler var?</h2>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.975rem] text-ink">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-card border border-line bg-mist p-5 text-sm leading-relaxed text-ink-soft">
              Analiz sonrası bir rapor ve öneri listesi paylaşırız. Devam etmek
              tamamen size kalmış — hiçbir yükümlülük yok.
            </p>
          </div>

          <div className="rounded-xl2 border border-line bg-mist p-6 sm:p-8">
            <h2 className="text-2xl">Analiz talebi</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Formu doldurun, 1 iş günü içinde bir görüşme saati önerelim.
            </p>
            <div className="mt-6">
              <LeadForm
                subject="Elli5 — Ücretsiz Dijital Analiz talebi"
                fields={fields}
                submitLabel="Ücretsiz analiz iste"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
