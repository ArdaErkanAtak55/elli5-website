import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const methods = [
  {
    title: "İşbirlikçi filtreleme",
    body: "“Senin gibi davrananlar şunu da beğendi.” En yaygın ve en güçlü yöntem.",
  },
  {
    title: "İçerik tabanlı",
    body: "“Daha önce seçtiklerine benzer özellikte olanlar.” Az veriyle bile çalışır.",
  },
  {
    title: "Hibrit",
    body: "İkisini birleştirir; en isabetli ve dayanıklı öneriyi üretir.",
  },
];

export function AiSpotlight() {
  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,206,209,0.55), rgba(0,206,209,0) 70%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-2xl">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-turq">
          <Sparkles className="size-4" aria-hidden />
          Yapay Zeka &amp; Öneri Sistemleri
        </p>
        <h2 className="text-3xl sm:text-4xl">
          Verinizi, değer üreten bir öneri motoruna dönüştürüyoruz
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Öneri sistemleri yalnızca dev platformlar için değil. Bir menüde “yanında
          ne iyi gider”, bir mağazada “birlikte alınanlar”, bir uygulamada “sana özel
          plan” — hepsi ortalama sepeti ve kullanım süresini artırır.
        </p>
      </div>

      <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
        {methods.map((m, i) => (
          <Reveal key={m.title} delay={i * 80}>
            <div className="h-full rounded-card border border-white/12 bg-white/[0.04] p-6">
              <h3 className="text-base text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Link
        href="/hizmetler/yapay-zeka"
        className="relative mt-9 inline-flex items-center gap-1.5 text-sm font-semibold text-turq hover:text-white"
      >
        Yapay zeka hizmetimizi inceleyin
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </Section>
  );
}
