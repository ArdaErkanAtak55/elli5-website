import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const { src, srcDark, width, height } = site.logo;
  const imageSrc = onDark && srcDark ? srcDark : src;
  const useImage = Boolean(imageSrc) && !(onDark && !srcDark);

  return (
    <Link
      href="/"
      aria-label={`${site.name} ana sayfa`}
      className={cn("inline-flex items-center", className)}
    >
      {useImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={site.name}
          width={width}
          height={height}
          className="h-[26px] w-auto sm:h-7"
        />
      ) : (
        <span
          className={cn(
            "font-display text-[1.35rem] font-extrabold tracking-tight",
            onDark ? "text-white" : "text-carbon",
          )}
        >
          Elli<span className="text-brand">5</span>
        </span>
      )}
    </Link>
  );
}
