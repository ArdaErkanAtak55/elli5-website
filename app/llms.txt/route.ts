import { site } from "@/content/site";
import { services } from "@/content/services";
import { posts } from "@/content/blog";

/* AI/LLM crawler'lar (ChatGPT, Perplexity, Gemini vb.) için site özeti.
   Spec: https://llmstxt.org — Markdown, statik olarak /llms.txt altında sunulur. */
export const dynamic = "force-static";

export function GET() {
  const abs = (p: string) => new URL(p, site.url).toString();

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.legalName}. Merkez: ${site.contact.city}, ${site.region}. Hizmet alanı: ${site.areaServed} (uzaktan).`,
    "",
    "## Hizmetler",
    "",
    ...services.map(
      (s) => `- [${s.title}](${abs(`/hizmetler/${s.id}`)}): ${s.short}`,
    ),
    "",
    "## Sayfalar",
    "",
    `- [Hizmetler](${abs("/hizmetler")}): Tüm hizmetlerin genel bakışı`,
    `- [Ücretsiz Dijital Analiz](${abs("/dijital-analiz")}): İşletmeler için ücretsiz dijital durum analizi talebi`,
    `- [Teklif Al](${abs("/teklif")}): Proje teklifi talep formu`,
    `- [Hakkımızda](${abs("/hakkimizda")}): Ajans hakkında bilgi`,
    `- [İletişim](${abs("/iletisim")}): İletişim bilgileri ve form`,
    "",
    "## Blog",
    "",
    ...posts.map((p) => `- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.description}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
