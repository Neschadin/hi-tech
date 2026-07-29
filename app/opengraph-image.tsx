import { ImageResponse } from "next/og";

import { site } from "@/lib/content/site";

export const alt = `${site.name} — сервісний центр у Черкасах`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 72,
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #226cd1 100%)",
        color: "#fff",
        fontFamily: "sans-serif"
      }}
    >
      <div style={{ fontSize: 28, opacity: 0.85, marginBottom: 16 }}>
        Черкаси · з 2005
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 980
        }}
      >
        Hi-Tech — сервісний центр з ремонту техніки
      </div>
      <div style={{ fontSize: 28, marginTop: 28, opacity: 0.9, maxWidth: 900 }}>
        Ноутбуки · принтери та МФУ · авторизований сервіс Lenovo
      </div>
    </div>,
    { ...size }
  );
}
