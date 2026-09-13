import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { Accordion } from "@/components/ui/accordion";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { services } from "@/content/services";
import { serviceFaqs } from "@/content/faq";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata(
  props: PageProps<"/hizmetler/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.short,
    path: `/hizmetler/${service.id}`,
  });
}

export default async function ServiceDetailPage(props: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const faqs = serviceFaqs[service.id] ?? [];
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Hizmetler", path: "/hizmetler" },
              { name: service.title, path: `/hizmetler/${service.id}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />
      {faqs.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      ) : null}

      <PageHeader eyebrow="Hizmetler" title={service.title} lead={service.intro} />

      <div className="border-b border-line bg-white">
        <Container className="py-5">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-carbon"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Tüm hizmetler
          </Link>
        </Container>
      </div>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
              <Icon name={service.icon} className="size-6" />
            </span>

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

            <Link href="/dijital-analiz" className={buttonClasses("primary", "md", "mt-8")}>
              Bu hizmet için ücretsiz analiz alın
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-card border border-line bg-white p-7 shadow-soft">
              <h2 className="text-lg">Neler dahil?</h2>
              <ul className="mt-4 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {faqs.length ? (
        <Section tone="mist">
          <h2 className="text-2xl sm:text-3xl">{service.title} hakkında sık sorulanlar</h2>
          <div className="mt-8 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Section>
      ) : null}

      <Section tone="white">
        <h2 className="text-2xl">Diğer hizmetlerimiz</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {otherServices.map((s) => (
            <Link
              key={s.id}
              href={`/hizmetler/${s.id}`}
              className="group flex flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={s.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base">{s.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                İncele
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
