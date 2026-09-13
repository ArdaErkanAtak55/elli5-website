import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/content/stats";

export function ProcessSteps() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Nasıl çalışıyoruz"
        title="Keşiften büyümeye, dört adım"
        lead="Süreç şeffaf: her adımda ne yaptığımızı ve neyi teslim edeceğimizi bilirsiniz."
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => (
          <Reveal key={step.n} as="li" delay={i * 70}>
            <div className="relative h-full rounded-card border border-line bg-white p-6 shadow-soft">
              <span className="font-display text-3xl font-extrabold text-brand/20">
                {step.n}
              </span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
