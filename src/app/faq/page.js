import FaqHero from "./components/FaqHero";
import FaqCategoryConsole from "./components/FaqCategoryConsole";
import FaqCta from "./components/FaqCta";

export const metadata = {
  title: "Frequently Asked Questions | Hot and Cool HVAC",
  description:
    "Answers to the most common heating, cooling, plumbing, and HVAC questions from Calgary homeowners, organized by category.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-1 flex-col">
      <FaqHero />
      <FaqCategoryConsole />
      <FaqCta />
    </div>
  );
}
