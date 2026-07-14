import ServiceFaqAccordionItem from "./ServiceFaqAccordionItem";

export default function ServiceFaqs({ service }) {
  const faqs = service.faqs;

  return (
    <section className="relative scroll-mt-36 overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_100%,black,transparent)]" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              Common questions
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
            {service.title}
            <span className="text-gradient-brand"> FAQs.</span>
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <ServiceFaqAccordionItem
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
