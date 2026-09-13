import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./logo";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, XIcon } from "@/components/social-icons";

const kurumsal = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "Teklif Al", href: "/teklif" },
  { label: "Ücretsiz Dijital Analiz", href: "/dijital-analiz" },
  { label: "İletişim", href: "/iletisim" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: site.social.x, label: "X", Icon: XIcon },
    { href: site.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  ].filter((s) => s.href);

  return (
    <footer className="bg-carbon on-dark">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Samsun merkezli, Türkiye geneline hizmet veren yazılım, medya ve
              dijital dönüşüm ajansı. Web, mobil ve yapay zeka tarafında uçtan uca
              dijital mimari.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Hizmetler">
            {services.map((s) => (
              <FooterLink key={s.id} href={`/hizmetler/${s.id}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Kurumsal">
            {kurumsal.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="İletişim">
            <FooterRow icon={<MapPin className="size-4" />}>
              {[site.contact.addressLine, site.contact.city].filter(Boolean).join(", ")}
            </FooterRow>
            <FooterRow icon={<Phone className="size-4" />}>
              <a href={`tel:${site.contact.phoneHref}`} className="hover:text-white">
                {site.contact.phoneDisplay}
              </a>
            </FooterRow>
            <FooterRow icon={<Mail className="size-4" />}>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </FooterRow>
            <FooterRow icon={<Clock className="size-4" />}>{site.contact.hours}</FooterRow>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link href="/gizlilik" className="hover:text-white/80">Gizlilik</Link>
            <Link href="/kvkk" className="hover:text-white/80">KVKK</Link>
            <Link href="/cerez-politikasi" className="hover:text-white/80">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-white/60">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}

function FooterRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 text-white/40" aria-hidden>{icon}</span>
      <span>{children}</span>
    </li>
  );
}
