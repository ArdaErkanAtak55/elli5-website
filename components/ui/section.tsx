import { cn } from "@/lib/utils";
import { Container } from "./container";

type Tone = "white" | "mist" | "dark";

const toneClass: Record<Tone, string> = {
  white: "bg-white",
  mist: "bg-mist",
  dark: "bg-carbon on-dark",
};

export function Section({
  id,
  tone = "white",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20 lg:py-28",
        toneClass[tone],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {lead ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead}</p>
      ) : null}
    </div>
  );
}
