import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { values } from "@/content/stats";

export function WhyElli5() {
  return (
    <Section tone="mist">
      <SectionHeading
        eyebrow="Neden Elli5"
        title="Ajans değil, teknoloji ortağı"
        lead="Parça iş değil bütün bir sistem kuruyoruz — ve sonunda bakılacak somut bir çıktı bırakıyoruz."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.title} as="article" delay={i * 70}>
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft">
              <Icon name={v.icon} className="size-6 text-brand" />
              <h3 className="mt-4 text-lg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
