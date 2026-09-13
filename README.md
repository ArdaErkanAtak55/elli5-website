# Elli5 — Kurumsal Web Sitesi

**Elli5 — Yazılım, Medya ve Dijital Dönüşüm Ajansı** için kapsamlı, çok sayfalı ve
mobil öncelikli kurumsal web sitesi.

- **Framework:** Next.js 16 (App Router) · React 19 · TypeScript
- **Stil:** Tailwind CSS v4 (CSS-first `@theme`)
- **Fontlar:** Montserrat (başlık) · Inter (metin) · Instrument Serif (vurgu) — `next/font`
- **İkonlar:** lucide-react + inline SVG (sosyal)
- **Animasyon:** IntersectionObserver tabanlı hafif `Reveal` bileşeni (bağımlılık yok)

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
npm run start    # üretim sunucusu
npm run lint
```

## İçeriği nereden düzenlerim?

Tüm metin ve ayarlar `content/` altındadır — bileşenlere dokunmadan güncelleyebilirsin:

| Dosya | İçerik |
|---|---|
| `content/site.ts` | **İletişim bilgileri, sosyal medya, adres, telefon, WhatsApp, alan adı, menü.** Önce burayı doldur. |
| `content/services.ts` | 4 hizmet: kapsam, teknoloji, kimler için |
| `content/cases.ts` | Çalışmalar / vaka çalışmaları (metrikler yer tutucu) |
| `content/faq.ts` | Sıkça sorulan sorular |
| `content/stats.ts` | İstatistik şeridi, "Neden Elli5" değerleri, süreç adımları |
| `content/blog.ts` | Blog yazıları (blok tabanlı; yeni yazı = diziye yeni nesne) |

### Yayına almadan önce güncellenecek YER TUTUCULAR

- `content/site.ts` → `url`, `contact.*`, `social.*`
- `content/stats.ts` → gerçek istatistik rakamları
- `content/cases.ts` → `results` metrikleri, gerçek müşteri adları/görselleri
- `public/logo/elli5.svg` (+ `elli5-beyaz.svg`) ve `app/icon.svg` → logo & favicon · yol/oran `content/site.ts > logo`
- Yasal sayfalar: `app/gizlilik`, `app/kvkk`, `app/cerez-politikasi`

## İletişim formu

Şu an form, alanları **`mailto:`** ile ziyaretçinin e-posta uygulamasına aktarır
(backend yok). Gerçek bir uç noktaya (Formspree / Web3Forms / API route) geçmek için:

1. `lib/contact.ts` içindeki `FORM_ENDPOINT` sabitini doldur.
2. Endpoint dolu olduğunda kod otomatik olarak `fetch` ile POST eder; mailto devre dışı kalır.

## SEO

- Sayfa başına `metadata` (`lib/seo.ts` → `pageMetadata`)
- JSON-LD: `Organization` (layout), `ProfessionalService` + `FAQPage` (ana sayfa),
  `BreadcrumbList` (iç sayfalar), `BlogPosting` (yazılar)
- `app/sitemap.ts`, `app/robots.ts`, dinamik `app/opengraph-image.tsx`
- `lang="tr"`, `metadataBase` = `content/site.ts` → `url`

## Deploy

**Vercel** (önerilir): repoyu bağla, otomatik algılar. Ortam değişkeni gerekmez.
Alternatif olarak Node çalıştıran her yerde `npm run build && npm run start`.
