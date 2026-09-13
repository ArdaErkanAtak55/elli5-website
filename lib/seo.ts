import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Faq } from "@/content/faq";
import type { Service } from "@/content/services";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

type PageMetaInput = {
  title: string;
  description?: string;
  path?: string;
  /** true ise layout'taki "%s — Elli5" şablonu uygulanmaz (başlık aynen kullanılır) */
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description = site.description,
  path = "/",
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} — ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

/* ----------------------------- JSON-LD ----------------------------- */

/** Sokak adresi / posta kodu yoksa (fiziksel ofis yok) şemadan boş alan olarak sızmasın. */
function postalAddressJsonLd() {
  return {
    "@type": "PostalAddress",
    ...(site.contact.addressLine ? { streetAddress: site.contact.addressLine } : {}),
    addressLocality: site.contact.city,
    ...(site.contact.postalCode ? { postalCode: site.contact.postalCode } : {}),
    addressCountry: site.contact.country,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.description,
    email: site.contact.email,
    address: postalAddressJsonLd(),
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    image: absoluteUrl("/opengraph-image"),
    url: site.url,
    telephone: site.contact.phoneDisplay,
    email: site.contact.email,
    priceRange: "₺₺",
    address: postalAddressJsonLd(),
    areaServed: { "@type": "Country", name: site.areaServed },
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(service: Service) {
  const path = `/hizmetler/${service.id}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} — ${site.name}`,
    description: service.intro,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
    },
    areaServed: { "@type": "Country", name: site.areaServed },
    audience: {
      "@type": "Audience",
      audienceType: service.audience,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
