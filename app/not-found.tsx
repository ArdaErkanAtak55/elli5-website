import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl sm:text-3xl">Sayfa bulunamadı</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonClasses("primary", "md")}>
          Ana sayfa
        </Link>
        <Link href="/iletisim" className={buttonClasses("outline", "md")}>
          İletişime geç
        </Link>
      </div>
    </Container>
  );
}
