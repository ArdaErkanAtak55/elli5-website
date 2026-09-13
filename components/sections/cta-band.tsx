import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site, primaryCta, quoteCta } from "@/content/site";

export function CtaBand() {
  return (
    <section className="bg-carbon on-dark">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
            İşletmeniz için ücretsiz dijital analiz alın
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            15 dakikalık bir görüşmeyle mevcut durumunuzu çıkarır, ilk hangi adımın
            en çok kazandıracağını net olarak söyleriz. Bağlayıcı değil.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className={buttonClasses("onDark", "lg", "w-full sm:w-auto")}
            >
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="size-4" aria-hidden />
              {site.contact.phoneDisplay}
            </a>
          </div>
          <p className="mt-5 text-sm text-white/55">
            Ne istediğinizi biliyorsanız{" "}
            <Link href={quoteCta.href} className="font-semibold text-white underline underline-offset-4">
              doğrudan teklif alın
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
