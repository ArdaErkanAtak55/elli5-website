import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { CtaBand } from "@/components/sections/cta-band";
import { values } from "@/content/stats";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hakkımızda",
  description:
    "Elli5, Samsun merkezli, Türkiye geneline hizmet veren bir yazılım, medya ve dijital dönüşüm ajansı. Tek bir teknoloji ortağı, uçtan uca dijital sistem.",
  path: "/hakkimizda",
});

const principles = [
  "Önce işi anlarız, sonra teknoloji seçeriz — tersi değil.",
  "Teslim ettiğimiz her şeyin sahibi müşteridir: kod, hesap, tasarım.",
  "Ara sürümleri düzenli gösteririz; sürprizle bitmez.",
  "Yaptığımız işin sonunda bakılacak bir metrik bırakırız.",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Hakkımızda", path: "/hakkimizda" },
            ]),
          ),
        }}
      />
      <PageHeader
        eyebrow="Hakkımızda"
        title="Ajans değil, teknoloji ortağı"
        lead="Elli5; Samsun merkezli, Türkiye geneline hizmet veren bir yazılım, medya ve dijital dönüşüm ajansı. Tek sayfalık bir siteye de, ulusal bir mobil uygulamaya da aynı mühendislik disipliniyle yaklaşıyoruz."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="space-y-4 text-[1.05rem] leading-relaxed text-ink">
              <p>
                Elli5, işletmelerin dijitalde dağınık araçlarla boğuştuğunu görerek
                kuruldu. Bir tarafta web ajansı, bir tarafta sosyal medya ekibi, bir
                tarafta yazılımcı — aralarında konuşmayan parçalar.
              </p>
              <p>
                Biz bunun yerine <strong>tek bir teknoloji ortağı</strong> olmayı
                seçtik. Tasarım, geliştirme, içerik, altyapı ve yayın aynı çatı
                altında. Böylece işletme sahibi tek bir muhatapla çalışır, sistem
                de bütün olarak kurulur.
              </p>
              <p>
                Bugün mobil uygulama geliştirmeden yapay zeka öneri sistemlerine,
                Google İşletme yönetiminden marka kimliğine kadar geniş bir alanda
                üretiyoruz — ama odak hep aynı: işletmeyi bir adım öne taşıyan,
                sahiplenilebilir bir dijital sistem.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl2 border border-line bg-mist p-7">
              <h2 className="text-lg">Çalışma prensiplerimiz</h2>
              <ul className="mt-4 space-y-3">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Değerlerimiz" title="Bizi tarif eden dört şey" />
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

      <Section tone="white">
        <div className="rounded-xl2 border border-line bg-white p-8 text-center shadow-soft sm:p-12">
          <h2 className="text-2xl sm:text-3xl">Ekip</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            Yazılım, tasarım ve dijital pazarlamayı bir araya getiren küçük ve
            uzman bir ekibiz. Ekip tanıtımı yakında bu sayfada.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
