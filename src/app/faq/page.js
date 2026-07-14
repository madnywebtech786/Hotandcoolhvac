import FaqHero from "./components/FaqHero";
import FaqCategoryConsole from "./components/FaqCategoryConsole";
import FaqCta from "./components/FaqCta";
import { FAQ_CATEGORIES } from "./constants/faqData";
import { buildFaqPageJsonLd } from "../lib/jsonLd";

export const metadata = {
  title: "Frequently Asked Questions | Hot and Cool HVAC",
  description:
    "Answers to the most common heating, cooling, plumbing, and HVAC questions from Calgary homeowners, organized by category.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const allFaqs = FAQ_CATEGORIES.flatMap((category) => category.faqs);

  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildFaqPageJsonLd(allFaqs) }}
      />
      <FaqHero />
      <FaqCategoryConsole />
      <FaqCta />
    </div>
  );
}
