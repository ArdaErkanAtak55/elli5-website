import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";

export function LegalDoc({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Yasal" title={title} />
      <Section tone="white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm text-ink-soft">Son güncelleme: {updated}</p>
          <div className="mt-3 rounded-card border border-line bg-mist p-4 text-sm leading-relaxed text-ink-soft">
            Bu metin standart bir taslaktır. <strong>[Köşeli parantez]</strong> içindeki
            alanları işletmenize özel bilgilerle doldurun ve yayına almadan önce bir
            hukuk danışmanına kontrol ettirin.
          </div>

          <div className="legal-body mt-8 space-y-6 text-[0.98rem] leading-relaxed text-ink">
            {children}
          </div>

          <p className="mt-10 border-t border-line pt-6 text-sm text-ink-soft">
            <Link href="/" className="font-semibold text-brand">
              Ana sayfaya dön
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
