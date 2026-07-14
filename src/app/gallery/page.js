import GalleryHero from "./components/GalleryHero";
import GalleryGrid from "./components/GalleryGrid";
import GalleryCta from "./components/GalleryCta";
import GalleryLightbox from "./components/GalleryLightbox";

export const metadata = {
  title: "Project Gallery | Hot and Cool HVAC",
  description:
    "Browse real heating, cooling, and plumbing projects completed by Hot and Cool HVAC across Calgary and surrounding areas.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-1 flex-col">
      <GalleryHero />
      <GalleryGrid />
      <GalleryCta />
      <GalleryLightbox />
    </div>
  );
}
