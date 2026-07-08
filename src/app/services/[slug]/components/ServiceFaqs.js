"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function ServiceFaqs({ service }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = service.faqs;

  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-surface-alt py-20 sm:py-28">
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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-surface-raised shadow-soft transition-colors duration-300 ${
                  isOpen ? "border-arc-300" : "border-line"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-display text-sm font-bold transition-colors duration-300 ${
                      isOpen ? "text-gradient-brand" : "text-ink-faint"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 font-display text-base font-semibold leading-snug text-ink sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`bg-gradient-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-soft transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4 text-white" strokeWidth={2.5} />
                  </span>
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-[3.25rem] font-sans text-sm leading-relaxed text-ink-soft sm:pl-[3.5rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
