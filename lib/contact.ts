import { site } from "@/content/site";

/**
 * Form gönderimi — ŞU AN: mailto ile kullanıcının e-posta uygulamasını açar.
 *
 * GERÇEK ENDPOINT'E GEÇİŞ:
 *   1) Formspree / Web3Forms / kendi API route'unuzdan bir uç nokta alın.
 *   2) FORM_ENDPOINT'i doldurun.
 *   3) submitLead içindeki `fetch` bloğunun yorumunu kaldırın, mailto bloğunu silin.
 */
export const FORM_ENDPOINT = ""; // ör. "https://formspree.io/f/xxxxxxx"

export type LeadFields = Record<string, string>;

export async function submitLead(subject: string, fields: LeadFields): Promise<void> {
  const cleaned = Object.entries(fields).filter(([, v]) => v && v.trim());

  // --- Gerçek endpoint varsa onu kullan ---
  if (FORM_ENDPOINT) {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...Object.fromEntries(cleaned) }),
    });
    if (!res.ok) throw new Error("Gönderim başarısız");
    return;
  }

  // --- Endpoint yoksa: mailto ---
  const body = cleaned.map(([k, v]) => `${k}: ${v}`).join("\n");
  const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  if (typeof window !== "undefined") {
    window.location.href = href;
  }
}
