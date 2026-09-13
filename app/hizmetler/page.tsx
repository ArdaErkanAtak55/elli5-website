import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { buttonClasses } from "@/components/ui/button";
import { services } from "@/content/services";
import { process } from "@/content/stats";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hizmetler",
  description:
    "Mobil uygulama geliştirme, yapay zeka & öneri sistemleri, web & Google İşletme ve sosyal medya & marka. Elli5 ile uçtan uca dijital mimari.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Hizmetler", path: "/hizmetler" },
            ]),
          ),
        }}
      />
      <PageHeader
        eyebrow="Hizmetler"
        title="Uçtan uca dijital mimari"
        lead="Dört alanda çalışıyoruz. Tek tek de alabilirsiniz, birlikte de — çoğu işletme için ikisini birleştirmek daha hızlı sonuç getirir."
      />

      <Section tone="white">
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} as="article" delay={i * 70}>
              <Link
                href={`/hizmetler/${service.id}`}
                className="group flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h2 className="mt-5 text-xl">{service.title}</h2>
                <p className="mt-2 flex-1 text-[0.975rem] leading-relaxed text-ink-soft">
                  {service.short}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    {service.pricing}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand">
                    Detayları incele
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-soft">
          Fiyatlar başlangıç bütçesidir; net teklif keşif görüşmesinden sonra çıkar.
          Paketli seçenekler yakında.
        </p>
      </Section>

      <Section tone="mist">
        <div className="rounded-xl2 bg-carbon on-dark p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">Nasıl çalışıyoruz</h2>
              <p className="mt-3 text-white/70">
                Süreç şeffaf: her adımda ne yaptığımızı ve neyi teslim edeceğimizi
                bilirsiniz.
              </p>
              <Link
                href="/dijital-analiz"
                className={buttonClasses("onDark", "lg", "mt-6")}
              >
                Ücretsiz Dijital Analiz
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {process.map((step) => (
                <li key={step.n} className="rounded-card border border-white/12 bg-white/[0.04] p-5">
                  <span className="font-display text-2xl font-extrabold text-turq">
                    {step.n}
                  </span>
                  <h3 className="mt-1 text-base text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}
