import { Sora, Archivo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import { siteConfig } from "./constants/siteConfig";
import { buildLocalBusinessJsonLd } from "./lib/jsonLd";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
  },
  description:
    "Hot and Cool HVAC provides trusted furnace, air conditioning, and plumbing services throughout Calgary and surrounding areas. Fast, honest, professional service you can rely on.",
  keywords: [
    "HVAC Calgary",
    "furnace repair Calgary",
    "air conditioning installation Calgary",
    "plumbing services Calgary",
    "emergency heating repair",
    "24/7 HVAC service",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "Trusted furnace, air conditioning, and plumbing services throughout Calgary and surrounding areas.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "Trusted furnace, air conditioning, and plumbing services throughout Calgary and surrounding areas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildLocalBusinessJsonLd() }}
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
