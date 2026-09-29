import { ImageResponse } from "next/og";

export const alt =
  "Flexiparabola II – Industrial Services. Engenharia e serviços técnicos para a indústria. Tondela, Portugal.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f3f1",
          color: "#1b1e22",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#1a4e86" }}>
          FLEXIPARABOLA II
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 600, lineHeight: 1.12, maxWidth: 920 }}>
            Engenharia e serviços técnicos para a indústria
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#4e565e" }}>
            Tondela, Portugal
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
