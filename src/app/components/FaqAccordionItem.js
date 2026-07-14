"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqAccordionItem({ faq, index, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-surface-raised shadow-soft transition-colors duration-300 ${
        isOpen ? "border-arc-300" : "border-line"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
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
}
