import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="hero-canvas border-b border-line-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem]">{title}</h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
