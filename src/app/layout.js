import { Sora, Archivo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  title: "Hot and Cool HVAC | Calgary Heating, Cooling & Plumbing Experts",
  description:
    "Hot and Cool HVAC provides trusted furnace, air conditioning, and plumbing services throughout Calgary and surrounding areas. Fast, honest, professional service you can rely on.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
