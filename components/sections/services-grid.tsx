import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <Section id="hizmetler-ozet" tone="white">
      <SectionHeading
        eyebrow="Hizmetler"
        title="Dört alanda, tek bir dijital sistem"
        lead="Her hizmeti ayrı ayrı alabilirsiniz; birlikte kurgulandığında bütçenizi daha verimli kullanır, daha hızlı sonuç getirir."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.id} as="article" delay={i * 70}>
            <Link
              href={`/hizmetler#${service.id}`}
              className="group flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-line hover:shadow-card"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-xl">{service.title}</h3>
              <p className="mt-2 flex-1 text-[0.975rem] leading-relaxed text-ink-soft">
                {service.short}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Detayına git
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
