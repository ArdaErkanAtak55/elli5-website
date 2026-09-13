import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { LeadForm, type Field } from "@/components/forms/lead-form";
import { faqs } from "@/content/faq";

const askFields: Field[] = [
  { name: "soru", label: "Sorunuz", type: "textarea", required: true, full: true },
  { name: "email", label: "E-posta", type: "email", required: true, full: true },
];

export function FaqSection() {
  return (
    <Section tone="white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Sık sorulanlar"
          title="Aklınıza takılanlar"
          lead="Cevabını aşağıda bulamadığınız bir soru varsa, formu doldurun — kısa sürede net bir yanıt verelim."
        />
        <div>
          <Accordion items={faqs} />

          <div className="mt-6 rounded-card border border-line bg-mist p-5 sm:p-6">
            <p className="text-sm font-semibold text-carbon">Aradığınız cevabı bulamadınız mı?</p>
            <p className="mt-1 text-xs text-ink-soft">
              Sorunuzu bırakın, e-postayla dönelim.
            </p>
            <div className="mt-4">
              <LeadForm
                subject="Elli5 — SSS sorusu"
                fields={askFields}
                submitLabel="Soruyu gönder"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
