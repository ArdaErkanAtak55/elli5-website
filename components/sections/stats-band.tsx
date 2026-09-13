import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/content/stats";

export function StatsBand() {
  return (
    <Section tone="mist" className="py-14 sm:py-16 lg:py-20">
      <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div className="text-center lg:text-left">
              <dt className="font-display text-4xl font-extrabold text-carbon sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-ink-soft">{s.label}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
