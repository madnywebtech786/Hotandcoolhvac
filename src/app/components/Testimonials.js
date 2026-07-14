"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Clock3, BadgeCheck, Wrench, ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_ADVANCE_MS = 4500;

const STANDARDS = [
  {
    icon: ShieldCheck,
    stat: "Licensed & insured",
    description:
      "Every technician we send is licensed, background-checked, and fully insured before they ever step into your home.",
    tag: "Every job",
  },
  {
    icon: Clock3,
    stat: "24/7 dispatch",
    description:
      "Heating, cooling, and plumbing emergencies don't wait for business hours across Calgary and surrounding areas, and neither do we.",
    tag: "Emergency response",
  },
  {
    icon: BadgeCheck,
    stat: "Upfront pricing",
    description:
      "You'll know the cost and what it covers before any work begins, with no hidden fees and no surprise line items on the invoice.",
    tag: "Every estimate",
  },
  {
    icon: Wrench,
    stat: "Workmanship guarantee",
    description:
      "If something isn't right after we leave, we make it right. Every repair and installation is backed by our guarantee.",
    tag: "Every repair",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = STANDARDS[activeIndex];
  const intervalRef = useRef(null);

  const restartAutoAdvance = () => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % STANDARDS.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    restartAutoAdvance();
    return () => window.clearInterval(intervalRef.current);
  }, []);

  const goTo = (index) => {
    setActiveIndex((index + STANDARDS.length) % STANDARDS.length);
    restartAutoAdvance();
  };

  return (
    <section className="relative overflow-hidden bg-surface-alt py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              What you can count on
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Trusted on
            <span className="text-gradient-brand"> every street.</span>
          </h2>
        </div>

        {/* Featured standard panel */}
        <div className="relative mt-16 rounded-4xl border border-line bg-surface-raised p-8 shadow-lift sm:p-14">
          <div className="bg-gradient-brand absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl shadow-lift sm:left-14">
            <active.icon className="h-6 w-6 text-white" strokeWidth={2} />
          </div>

          <div key={activeIndex} className="animate-rise-in">
            <span className="inline-flex w-fit items-center rounded-full border border-line-strong bg-surface-alt px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
              {active.tag}
            </span>

            <p className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              {active.description}
            </p>

            <div className="mt-8 flex items-center justify-between gap-6 border-t border-line pt-6">
              <p className="font-display text-base font-semibold text-ink">{active.stat}</p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(activeIndex - 1)}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface-raised text-ink-soft transition-colors hover:border-arc-500 hover:text-arc-600"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={2.25} />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeIndex + 1)}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface-raised text-ink-soft transition-colors hover:border-arc-500 hover:text-arc-600"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Index dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {STANDARDS.map((standard, index) => (
            <button
              key={standard.stat}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`View standard ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-gradient-brand w-8" : "w-1.5 bg-line-strong"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
