import FaqAccordionItem from "./FaqAccordionItem";

const FAQS = [
  {
    question: "Do you offer 24/7 emergency service?",
    answer:
      "Yes. Heating, cooling, and plumbing emergencies don't wait for business hours, and neither do we. Our technicians are available around the clock to respond to urgent breakdowns throughout Calgary and surrounding communities.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Hot and Cool HVAC proudly serves homeowners throughout Calgary and the surrounding communities, including all quadrants of the city.",
  },
  {
    question: "Do you repair all furnace, AC, and boiler brands?",
    answer:
      "Our technicians repair most major furnace, air conditioning, and boiler brands, along with modern high-efficiency systems commonly installed in Calgary homes.",
  },
  {
    question: "Will you give me an honest recommendation, or just try to sell a replacement?",
    answer:
      "We believe in honest, upfront advice. If a repair is the right call, we'll explain exactly what's needed and complete quality work. If replacement truly offers better long-term value, we'll walk you through your options without pressure.",
  },
  {
    question: "How quickly can a technician reach my home?",
    answer:
      "We prioritize fast response times across Calgary and surrounding areas, especially for urgent heating, cooling, and plumbing emergencies where every hour matters.",
  },
  {
    question: "Do you handle both HVAC and plumbing issues?",
    answer:
      "Yes. From furnace and air conditioning repair to drain cleaning, toilet replacement, and water heater service, our technicians cover the full range of home comfort and plumbing needs.",
  },
];

export default function Faqs() {
  return (
    <section id="faqs" className="relative scroll-mt-36 overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_100%,black,transparent)]" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              Common questions
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Frequently asked
            <br />
            <span className="text-gradient-brand">questions.</span>
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <FaqAccordionItem
              key={faq.question}
              faq={faq}
              index={index}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
