/**
 * Tasarım kontrolü için ekran görüntüleri.
 *   node scripts/screenshots.mjs           (sunucu http://localhost:3000 çalışıyor olmalı)
 * Çıktı: scripts/shots/
 */
import { mkdirSync } from "node:fs";
import puppeteer from "puppeteer-core";

const CHROME =
  process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE_URL || "http://localhost:3000";
const OUT = new URL("./shots/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
mkdirSync(OUT, { recursive: true });

const pages = [
  ["home", "/"],
  ["hizmetler", "/hizmetler"],
  ["calismalar", "/calismalar"],
  ["case", "/calismalar/fitness-takip-uygulamasi"],
  ["hakkimizda", "/hakkimizda"],
  ["blog", "/blog"],
  ["blog-post", "/blog/kucuk-isletmeler-icin-yapay-zeka-oneri-sistemleri"],
  ["iletisim", "/iletisim"],
  ["dijital-analiz", "/dijital-analiz"],
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--hide-scrollbars"],
});

for (const [name, path] of pages) {
  for (const [label, width] of [["desktop", 1280], ["mobile", 390]]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    await page.goto(BASE + path, { waitUntil: "networkidle0" });
    await page.evaluate(() =>
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible")),
    );
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: `${OUT}${name}-${label}.png`, fullPage: true });
    await page.close();
    console.log(`${name}-${label}`);
  }
}

await browser.close();
