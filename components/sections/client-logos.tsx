import { Container } from "@/components/ui/container";
import { clients } from "@/content/site";

/* İş ortağı / müşteri logoları şeridi.
   Logolar hazır olduğunda content/site.ts > clients dizisini doldur.
   (Basit <img> kullanıyoruz: logolar küçük ve dekoratif, next/image gereksiz.) */
export function ClientLogos() {
  if (!clients.length) return null;

  // Kesintisiz kayma için listeyi iki kez basıyoruz
  const loop = [...clients, ...clients];

  return (
    <section className="border-b border-line bg-white py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
          İş ortaklarımız
        </p>
        <div className="mt-6 overflow-hidden">
          <ul className="marquee items-center gap-10 sm:gap-14">
            {loop.map((client, i) => (
              <li
                key={`${client.name}-${i}`}
                className="flex shrink-0 items-center justify-center"
              >
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={40}
                    loading="lazy"
                    className="h-9 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
                  />
                ) : (
                  <span className="flex h-11 w-32 items-center justify-center rounded-lg border border-dashed border-line-soft bg-mist text-xs font-medium text-ink-soft">
                    {client.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
