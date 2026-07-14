import ContactHero from "./components/ContactHero";
import TrustStrip from "./components/TrustStrip";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Contact Us | Hot and Cool HVAC",
  description:
    "Request heating, cooling, or plumbing service from Hot and Cool HVAC in Calgary. Call directly for emergencies, or send your details online and we'll follow up to schedule your visit.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ContactHero />
      <TrustStrip />
      <ContactForm />
    </div>
  );
}
