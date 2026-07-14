"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Radio } from "lucide-react";
import { deals } from "../constants/dealsData";

const FAN_TRANSFORMS = [
  "lg:-rotate-6 lg:-translate-x-16 lg:translate-y-3",
  "lg:rotate-0 lg:translate-y-0",
  "lg:rotate-6 lg:translate-x-16 lg:translate-y-3",
];

export default function DealsTeaser() {
  const [drawnIndex, setDrawnIndex] = useState(1);

  return (
    <section className="relative overflow-hidden bg-surface-alt py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <Radio className="h-3.5 w-3.5 text-arc-600" strokeWidth={2.25} />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {deals.length} offers online
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Save more on the work
            <br />
            <span className="text-gradient-brand">you already need.</span>
          </h2>

          <p className="mt-5 font-sans text-base text-ink-soft lg:hidden">
            Tap a card to see the offer.
          </p>
          <p className="mt-5 hidden font-sans text-base text-ink-soft lg:block">
            Hover a card to draw it from the deck.
          </p>
        </div>

        {/* Fanned card deck, collapses to a plain stack below lg */}
        <div className="mt-16 flex flex-col items-center gap-6 lg:mt-24 lg:h-104 lg:flex-row lg:items-center lg:justify-center lg:gap-0">
          {deals.map((deal, index) => {
            const isDrawn = drawnIndex === index;

            return (
              <Link
                key={deal.id}
                href={`/deals#${deal.id}`}
                onMouseEnter={() => setDrawnIndex(index)}
                onFocus={() => setDrawnIndex(index)}
                className={`group relative flex w-full max-w-sm shrink-0 flex-col overflow-hidden rounded-4xl border bg-surface-raised p-7 shadow-lift transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:w-72 lg:p-8 ${
                  FAN_TRANSFORMS[index]
                } ${
                  isDrawn
                    ? "z-20 border-arc-300 lg:-translate-y-6 lg:rotate-0 lg:scale-105"
                    : "z-10 border-line lg:opacity-90"
                }`}
                style={{ zIndex: isDrawn ? 20 : 10 - Math.abs(index - drawnIndex) }}
              >
                {/* Card face texture */}
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.25]" />
                <span
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand blur-3xl transition-opacity duration-500 ${
                    isDrawn ? "opacity-25" : "opacity-10"
                  }`}
                />

                {/* Header: code + eyebrow */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                    {deal.code}
                  </span>
                  <span className="rounded-full border border-line-strong bg-surface-alt px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-arc-600">
                    {deal.eyebrow}
                  </span>
                </div>

                {/* Suit-style icon mark, large and centered like a face card */}
                <div className="relative mt-8 flex flex-1 flex-col items-center text-center">
                  <span className="relative flex h-16 w-16 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-xl" />
                    <span className="bg-gradient-brand relative flex h-full w-full items-center justify-center rounded-2xl border border-white/40 shadow-lift">
                      <deal.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                    </span>
                  </span>

                  <p className="text-gradient-brand mt-5 font-display text-5xl font-bold leading-none">
                    {deal.value}
                  </p>
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    {deal.valueLabel}
                  </p>

                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                    {deal.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-snug text-ink-soft">
                    {deal.subtitle}
                  </p>
                </div>

                <span className="relative mt-6 inline-flex items-center justify-center gap-1.5 border-t border-line pt-5 font-sans text-sm font-semibold text-arc-600 transition-colors group-hover:text-ember-600">
                  See details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center lg:mt-10">
          <Link
            href="/deals"
            className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-line-strong bg-surface-raised px-7 py-4 font-sans text-sm font-semibold text-ink transition-colors hover:border-arc-500 hover:text-arc-600"
          >
            View all deals
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
