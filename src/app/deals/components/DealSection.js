import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CircuitTrace from "./CircuitTrace";
import CircuitNode from "./CircuitNode";

export default function DealSection({ deal, index }) {
  const isReversed = index % 2 === 1;
  const accentBg = index % 2 === 0 ? "bg-arc-50" : "bg-ember-50";

  return (
    <section
      id={deal.id}
      className={`relative scroll-mt-28 overflow-hidden py-20 sm:py-28 ${
        index % 2 === 0 ? "bg-surface" : "bg-surface-alt"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div
          className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Node + copy column */}
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <CircuitNode>
                <deal.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
              </CircuitNode>
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                  {deal.code} · {deal.spec}
                </span>
                <p className="mt-1 font-sans text-sm font-semibold uppercase tracking-wider text-arc-600">
                  {deal.eyebrow}
                </p>
              </div>
            </div>

            <h2 className="mt-7 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
              {deal.title}
              <br />
              <span className="text-gradient-brand">{deal.subtitle}</span>
            </h2>

            <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
              {deal.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={deal.ctaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
              >
                {deal.ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="mt-6 flex items-start gap-2 font-mono text-[11px] leading-relaxed text-ink-faint">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-faint" strokeWidth={2} />
              {deal.terms}
            </p>
          </div>

          {/* Circuit trace + terminal readout column */}
          <div
            className={`flex flex-1 items-center gap-2 ${
              isReversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="hidden h-10 flex-1 lg:block">
              <CircuitTrace flip={isReversed} />
            </div>

            <div className="relative w-full max-w-xs shrink-0 overflow-hidden rounded-4xl border border-line bg-surface-raised p-8 text-center shadow-lift sm:max-w-sm lg:mx-0 mx-auto">
              <span className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${accentBg} blur-2xl`} />

              <p className="text-gradient-brand relative font-display text-6xl font-bold leading-none sm:text-7xl">
                {deal.value}
              </p>
              <p className="relative mt-3 font-sans text-sm font-semibold text-ink-soft">
                {deal.valueLabel}
              </p>

              <div className="relative mt-6 flex items-center justify-center gap-1.5 border-t border-line pt-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
                  Active now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
