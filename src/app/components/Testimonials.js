"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_ADVANCE_MS = 3000;

/*
  PLACEHOLDER CONTENT — replace every quote, name, and neighborhood below
  with real customer reviews before this goes live. Nothing here is a real
  testimonial from an actual Hot and Cool HVAC customer.
*/
const TESTIMONIALS = [
  {
    quote:
      "[Placeholder — replace with a real review] Our furnace died on the coldest night of the year and they had someone out within the hour. Genuinely relieved.",
    name: "[Placeholder Name]",
    area: "[Placeholder Neighborhood], Calgary",
    service: "Emergency Heating",
  },
  {
    quote:
      "[Placeholder — replace with a real review] Explained exactly what was wrong with our AC before touching anything. No upsell, no pressure, just a fair fix.",
    name: "[Placeholder Name]",
    area: "[Placeholder Neighborhood], Calgary",
    service: "Air Conditioning Repair",
  },
  {
    quote:
      "[Placeholder — replace with a real review] Replaced our Poly-B plumbing without tearing the house apart. Clean work, showed up on time both days.",
    name: "[Placeholder Name]",
    area: "[Placeholder Neighborhood], Calgary",
    service: "Poly-B Pipe Replacement",
  },
  {
    quote:
      "[Placeholder — replace with a real review] Booked a tune-up before winter and they caught a cracked heat exchanger we didn't know about. Saved us a much worse call later.",
    name: "[Placeholder Name]",
    area: "[Placeholder Neighborhood], Calgary",
    service: "Furnace Tune-Up",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TESTIMONIALS[activeIndex];
  const intervalRef = useRef(null);

  const restartAutoAdvance = () => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    restartAutoAdvance();
    return () => window.clearInterval(intervalRef.current);
  }, []);

  const goTo = (index) => {
    setActiveIndex((index + TESTIMONIALS.length) % TESTIMONIALS.length);
    restartAutoAdvance();
  };

  return (
    <section className="relative overflow-hidden bg-surface-alt py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              From homeowners we've helped
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Trusted on
            <span className="text-gradient-brand"> every street.</span>
          </h2>
        </div>

        {/* Featured quote panel */}
        <div className="relative mt-16 rounded-4xl border border-line bg-surface-raised p-8 shadow-lift sm:p-14">
          <div className="bg-gradient-brand absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl shadow-lift sm:left-14">
            <Quote className="h-6 w-6 text-white" strokeWidth={2} fill="currentColor" />
          </div>

          <div key={activeIndex} className="animate-rise-in">
            <span className="inline-flex w-fit items-center rounded-full border border-line-strong bg-surface-alt px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
              {active.service}
            </span>

            <p className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              "{active.quote}"
            </p>

            <div className="mt-8 flex items-center justify-between gap-6 border-t border-line pt-6">
              <div>
                <p className="font-display text-base font-semibold text-ink">{active.name}</p>
                <p className="mt-0.5 font-sans text-sm text-ink-faint">{active.area}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(activeIndex - 1)}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface-raised text-ink-soft transition-colors hover:border-arc-500 hover:text-arc-600"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={2.25} />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeIndex + 1)}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface-raised text-ink-soft transition-colors hover:border-arc-500 hover:text-arc-600"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Index dots + count */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name + index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`View testimonial ${index + 1}`}
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
