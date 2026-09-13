import { ImageResponse } from "next/og";

export const alt = "Elli5 — Yazılım, Medya ve Dijital Dönüşüm Ajansı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 14,
              height: 44,
              background: "#E3000F",
              borderRadius: 4,
            }}
          />
          <span style={{ fontSize: 30, color: "#45494f" }}>
            Samsun · Yazılım · Medya · Dijital Dönüşüm
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 132, fontWeight: 800, color: "#1C1C1C", letterSpacing: -4 }}>
            Elli<span style={{ color: "#E3000F" }}>5</span>
          </span>
          <span style={{ fontSize: 40, color: "#45494f", maxWidth: 900, marginTop: 8 }}>
            İşletmenizi geleceğe taşıyan dijital güç
          </span>
        </div>

        <span style={{ fontSize: 26, color: "#6b7075" }}>elli5.com.tr</span>
      </div>
    ),
    size,
  );
}
