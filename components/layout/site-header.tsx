"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { nav, primaryCta, quoteCta, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { buttonClasses } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-shadow",
        scrolled ? "border-line shadow-soft" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand"
                      : "text-carbon/80 hover:text-carbon",
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-4 transition-transform group-hover:rotate-180" aria-hidden />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-card">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-mist"
                      >
                        <span className="block text-sm font-semibold text-carbon">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-ink-soft">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-brand"
                    : "text-carbon/80 hover:text-carbon",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            href={primaryCta.href}
            className="hidden whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-carbon transition-colors hover:text-brand xl:inline-flex"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={quoteCta.href}
            className={buttonClasses("primary", "md", "whitespace-nowrap")}
          >
            {quoteCta.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-carbon lg:hidden"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen ? (
        <div className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobil menü">
            <Link
              href="/"
              onClick={closeMobile}
              className={cn(
                "border-b border-line-soft py-3.5 text-base font-semibold",
                pathname === "/" ? "text-brand" : "text-carbon",
              )}
            >
              Ana Sayfa
            </Link>
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-line-soft py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-carbon"
                    aria-expanded={openGroup === item.label}
                    onClick={() =>
                      setOpenGroup((g) => (g === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-5 text-ink-soft transition-transform",
                        openGroup === item.label && "rotate-180 text-brand",
                      )}
                    />
                  </button>
                  {openGroup === item.label ? (
                    <div className="flex flex-col pb-2 pl-3">
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="py-2.5 text-sm font-medium text-brand"
                      >
                        Tüm hizmetler
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobile}
                          className="py-2.5 text-sm text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className={cn(
                    "border-b border-line-soft py-3.5 text-base font-semibold",
                    isActive(item.href) ? "text-brand" : "text-carbon",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href={quoteCta.href}
                onClick={closeMobile}
                className={buttonClasses("primary", "lg", "w-full")}
              >
                {quoteCta.label}
              </Link>
              <Link
                href={primaryCta.href}
                onClick={closeMobile}
                className={buttonClasses("outline", "lg", "w-full")}
              >
                {primaryCta.label}
              </Link>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="inline-flex h-11 w-full items-center justify-center gap-2 text-sm font-medium text-carbon/80"
              >
                <Phone className="size-4" aria-hidden />
                {site.contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
