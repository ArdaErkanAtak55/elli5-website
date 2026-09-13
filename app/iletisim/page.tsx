import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { LeadForm, type Field } from "@/components/forms/lead-form";
import { CallbackForm } from "@/components/forms/callback-form";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, XIcon } from "@/components/social-icons";

export const metadata: Metadata = pageMetadata({
  title: "İletişim",
  description:
    "Elli5 ile iletişime geçin. Samsun merkezli yazılım, medya ve dijital dönüşüm ajansı. İşletmeniz için doğru dijital adımı birlikte belirleyelim.",
  path: "/iletisim",
});

const fields: Field[] = [
  { name: "isletme", label: "İşletme Adı", required: true, full: true },
  {
    name: "hizmet",
    label: "İhtiyacınız Olan Dijital Hizmet",
    type: "select",
    required: true,
    full: true,
    options: [...services.map((s) => s.title), "Emin değilim / hepsini konuşalım"],
  },
  { name: "ad", label: "Ad Soyad", required: true },
  { name: "email", label: "E-posta", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel" },
  { name: "mesaj", label: "Kısaca ihtiyacınız", type: "textarea", full: true },
];

export default function ContactPage() {
  const socials = [
    { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: site.social.x, label: "X", Icon: XIcon },
    { href: site.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  ].filter((s) => s.href);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "İletişim", path: "/iletisim" },
            ]),
          ),
        }}
      />
      <PageHeader
        eyebrow="İletişim"
        title="Konuşalım"
        lead="İşletmenizi, hedefinizi ve mevcut dijital durumunuzu bize kısaca anlatın; en kısa sürede dönüş yapalım."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl">Bize ulaşın</h2>
            <ul className="mt-6 space-y-5">
              <InfoItem icon={<Phone className="size-5" />} label="Telefon">
                <a href={`tel:${site.contact.phoneHref}`} className="hover:text-brand">
                  {site.contact.phoneDisplay}
                </a>
              </InfoItem>
              <InfoItem icon={<Mail className="size-5" />} label="E-posta">
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                  {site.contact.email}
                </a>
              </InfoItem>
              <InfoItem icon={<MapPin className="size-5" />} label="Adres">
                {site.contact.addressLine}
                <br />
                {site.contact.postalCode} {site.contact.city}
              </InfoItem>
              <InfoItem icon={<Clock className="size-5" />} label="Çalışma saatleri">
                {site.contact.hours}
              </InfoItem>
            </ul>

            {socials.length ? (
              <div className="mt-8">
                <p className="text-sm font-medium text-carbon">Sosyal medya</p>
                <div className="mt-3 flex gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-carbon hover:text-carbon"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 overflow-hidden rounded-card border border-line">
              <iframe
                title="Elli5 konum"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.contact.mapQuery,
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full"
              />
            </div>

            <div className="mt-6">
              <CallbackForm />
            </div>
          </div>

          <div className="rounded-xl2 border border-line bg-mist p-6 sm:p-8">
            <h2 className="text-2xl">Proje talebi</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Yıldızlı alanlar zorunludur. Formu göndermek sizi bir şeye bağlamaz.
            </p>
            <div className="mt-6">
              <LeadForm
                subject="Elli5 — İletişim formu"
                fields={fields}
                submitLabel="Talebi gönder"
                note="Şu an form, mesajı e-posta uygulamanızla iletir. Gönderemezseniz doğrudan info@elli5.com.tr adresine yazabilirsiniz."
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
        {icon}
      </span>
      <span className="text-sm">
        <span className="block font-medium text-carbon">{label}</span>
        <span className="mt-0.5 block leading-relaxed text-ink-soft">{children}</span>
      </span>
    </li>
  );
}
