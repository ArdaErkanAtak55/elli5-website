import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind sınıflarını çakışmasız birleştirir. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const trDate = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** "2026-08-02" -> "2 Ağustos 2026" */
export function formatDateTR(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return trDate.format(new Date(Date.UTC(y, m - 1, d)));
}
