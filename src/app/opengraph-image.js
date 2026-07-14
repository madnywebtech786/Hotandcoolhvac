import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "./constants/siteConfig";

export const alt = "Hot and Cool HVAC, Calgary Heating, Cooling & Plumbing Experts";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public", "images", "logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b1620",
          backgroundImage:
            "linear-gradient(135deg, #0b1620 0%, #0e3a44 55%, #1f8ca6 100%)",
          padding: "80px",
        }}
      >
        <img
          src={logoSrc}
          width={280}
          height={315}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#7fcbdd",
              marginTop: 20,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#f5941f",
              marginTop: 40,
              fontWeight: 600,
            }}
          >
            {siteConfig.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
