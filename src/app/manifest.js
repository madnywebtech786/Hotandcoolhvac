import { siteConfig } from "./constants/siteConfig";

export default function manifest() {
  return {
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    short_name: siteConfig.shortName,
    description:
      "Trusted furnace, air conditioning, and plumbing services throughout Calgary and surrounding areas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f8ca6",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "1982x2229",
        type: "image/png",
      },
    ],
  };
}
