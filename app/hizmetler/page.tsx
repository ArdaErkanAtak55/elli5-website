import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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

      {/* Hızlı gezinme */}
      <div className="border-b border-line bg-white">
        <Container className="flex flex-wrap items-center gap-2 py-5">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-line bg-mist px-3.5 py-1.5 text-sm font-medium text-carbon/75 transition-colors hover:border-carbon hover:text-carbon"
            >
              {s.title}
            </a>
          ))}
          <p className="w-full pt-1 text-xs text-ink-soft sm:w-auto sm:pt-0">
            Fiyatlar başlangıç bütçesidir; net teklif keşif görüşmesinden sonra
            çıkar. Paketli seçenekler yakında.
          </p>
        </Container>
      </div>

      {services.map((service, i) => (
        <Section key={service.id} id={service.id} tone={i % 2 === 0 ? "white" : "mist"}>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl">{service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{service.intro}</p>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-carbon">
                Kimler için?
              </p>
              <p className="mt-1.5 text-[0.975rem] leading-relaxed text-ink-soft">
                {service.audience}
              </p>

              <div className="mt-6 inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 rounded-xl border border-line bg-white px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  Başlangıç bütçesi
                </span>
                <span className="text-[0.975rem] font-semibold text-carbon">
                  {service.pricing}
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-card border border-line bg-white p-7 shadow-soft">
                <h3 className="text-lg">Neler dahil?</h3>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                      <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dijital-analiz"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  Bu hizmet için ücretsiz analiz alın
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section tone="white">
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
