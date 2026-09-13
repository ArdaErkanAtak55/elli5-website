import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { LeadForm, type Field } from "@/components/forms/lead-form";
import { CallbackForm } from "@/components/forms/callback-form";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Teklif Al",
  description:
    "Projeniz için net bir kapsam ve sabit fiyat teklifi alın. Formu doldurun, kısa bir keşif görüşmesinden sonra bağlayıcı teklifi paylaşalım.",
  path: "/teklif",
});

const steps = [
  { n: "01", t: "Formu doldurun", d: "İhtiyacınızı, bütçe aralığınızı ve zamanlamayı paylaşın." },
  { n: "02", t: "Keşif görüşmesi", d: "15–30 dakikalık bir görüşmeyle kapsamı netleştiririz." },
  { n: "03", t: "Sabit teklif", d: "Net kapsam, zaman planı ve sabit fiyatı yazılı olarak alırsınız." },
];

const fields: Field[] = [
  { name: "isletme", label: "İşletme / marka adı", required: true, full: true },
  {
    name: "hizmet",
    label: "İhtiyacınız olan hizmet",
    type: "select",
    required: true,
    full: true,
    options: [
      ...services.map((s) => s.title),
      "Birden fazla hizmet",
      "Emin değilim",
    ],
  },
  {
    name: "ozet",
    label: "Proje özeti",
    type: "textarea",
    required: true,
    full: true,
    placeholder: "Ne yapmak istediğinizi birkaç cümleyle anlatın.",
  },
  {
    name: "butce",
    label: "Tahmini bütçe",
    type: "select",
    options: [
      "25.000 ₺ altı",
      "25.000 – 50.000 ₺",
      "50.000 – 100.000 ₺",
      "100.000 – 250.000 ₺",
      "250.000 ₺ üzeri",
      "Emin değilim",
    ],
  },
  {
    name: "zaman",
    label: "Ne zaman başlamak istiyorsunuz?",
    type: "select",
    options: ["Hemen", "1 ay içinde", "1–3 ay içinde", "Henüz araştırıyorum"],
  },
  { name: "ad", label: "Ad Soyad", required: true },
  { name: "email", label: "E-posta", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
];

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Teklif Al", path: "/teklif" },
            ]),
          ),
        }}
      />
      <PageHeader
        eyebrow="Teklif Al"
        title="Projeniz için net kapsam ve sabit fiyat"
        lead="Ne istediğinizi biliyorsanız doğru yerdesiniz. Formu doldurun; kısa bir keşif görüşmesinden sonra bağlayıcı bir teklif paylaşalım."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <h2 className="text-2xl">Nasıl işliyor?</h2>
            <ol className="mt-6 space-y-5">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-display text-2xl font-extrabold text-brand/25">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-semibold text-carbon">{s.t}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <p className="mb-3 text-sm text-ink-soft">
                Yazmak yerine konuşmayı tercih ederseniz:
              </p>
              <CallbackForm compact />
            </div>
          </div>

          <Reveal className="rounded-xl2 border border-line bg-mist p-6 sm:p-8">
            <h2 className="text-2xl">Teklif formu</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Yıldızlı alanlar zorunludur. Ne kadar ayrıntı verirseniz teklif o
              kadar net olur.
            </p>
            <div className="mt-6">
              <LeadForm
                subject="Elli5 — Teklif talebi"
                fields={fields}
                submitLabel="Teklif iste"
                note={`Şu an form, bilgileri e-posta uygulamanızla iletir. Gönderemezseniz doğrudan ${site.contact.email} adresine yazabilirsiniz.`}
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
