import { ImageResponse } from "next/og";

export const alt = "T&M Synergy Limited — E&I Engineering, Metering & EPCC in South Sudan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0b",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "72px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 6, color: "#ef1d04" }}>
          <div style={{ width: 48, height: 3, background: "#ef1d04" }} />
          JUBA · SOUTH SUDAN · SINCE 2012
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>E&amp;I Engineering, Metering</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>&amp; EPCC Services</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 40, fontWeight: 800 }}>T&amp;M Synergy Limited</div>
          <div style={{ width: 160, height: 16, background: "#ef1d04" }} />
        </div>
      </div>
    ),
    size,
  );
}
