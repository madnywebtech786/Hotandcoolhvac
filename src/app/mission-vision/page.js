import MissionVisionHero from "./components/MissionVisionHero";
import MissionVisionContent from "./components/MissionVisionContent";
import AboutCta from "../about/components/AboutCta";

export const metadata = {
  title: "Mission & Vision | Hot and Cool HVAC",
  description:
    "The mission, vision, and values behind Hot and Cool HVAC — honest diagnostics, precision workmanship, and dependable heating, cooling, and plumbing service for Calgary homeowners.",
};

export default function MissionVisionPage() {
  return (
    <div className="flex flex-1 flex-col">
      <MissionVisionHero />
      <MissionVisionContent />
      <AboutCta />
    </div>
  );
}
