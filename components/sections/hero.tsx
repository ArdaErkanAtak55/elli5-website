import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { primaryCta } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-canvas relative overflow-hidden border-b border-line-soft">
      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              İşletmenizi{" "}
              <span className="font-accent font-normal italic text-brand">
                geleceğe
              </span>{" "}
              taşıyan dijital güç
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              İşletmenizin web, mobil ve yapay zeka tarafındaki tüm dijital
              mimarisini tek elden, uçtan uca kuruyoruz.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/hizmetler" className={buttonClasses("primary", "lg", "w-full sm:w-auto")}>
                Hizmetlerimiz
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href={primaryCta.href}
                className={buttonClasses("outline", "lg", "w-full sm:w-auto")}
              >
                {primaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
