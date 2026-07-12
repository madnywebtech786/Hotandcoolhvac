import TeamHero from "./components/TeamHero";
import TeamGrid from "./components/TeamGrid";
import AboutCta from "../about/components/AboutCta";

export const metadata = {
  title: "Our Team | Hot and Cool HVAC",
  description:
    "Meet the licensed, background-checked heating, cooling, and plumbing technicians behind Hot and Cool HVAC's service across Calgary.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-1 flex-col">
      <TeamHero />
      <TeamGrid />
      <AboutCta />
    </div>
  );
}
