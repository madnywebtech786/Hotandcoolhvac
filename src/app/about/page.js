import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import MissionVision from "./components/MissionVision";
import WhyWereTheBest from "./components/WhyWereTheBest";
import Testimonials from "../components/Testimonials";
import AboutCta from "./components/AboutCta";

export const metadata = {
  title: "About Us | Hot and Cool HVAC",
  description:
    "Hot and Cool HVAC is a Calgary-based heating, cooling, and plumbing company built on honest diagnostics, quality workmanship, and straightforward communication.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <WhyWereTheBest />
      <Testimonials />
      <AboutCta />
    </div>
  );
}
