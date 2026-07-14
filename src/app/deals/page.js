import DealsHero from "./components/DealsHero";
import DealSection from "./components/DealSection";
import DealsCta from "./components/DealsCta";
import { deals } from "../constants/dealsData";

export const metadata = {
  title: "Current Deals | Hot and Cool HVAC",
  description:
    "Save on heating, cooling, and plumbing service with Hot and Cool HVAC's current deals, including a free humidifier with furnace installation, a free thermostat with AC installation, and $50 off your first service call.",
  alternates: {
    canonical: "/deals",
  },
};

export default function DealsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <DealsHero />
      {deals.map((deal, index) => (
        <DealSection key={deal.id} deal={deal} index={index} />
      ))}
      <DealsCta />
    </div>
  );
}
