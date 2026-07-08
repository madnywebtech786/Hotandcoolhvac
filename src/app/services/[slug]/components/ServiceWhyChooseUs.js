import { ShieldCheck } from "lucide-react";
import { splitHeading } from "./splitHeading";

export default function ServiceWhyChooseUs({ service }) {
  const { whyChooseUs } = service;
  const { lead, accent } = splitHeading(whyChooseUs.title);
  const [featured, ...rest] = whyChooseUs.points;

  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Copy + featured point */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
              <ShieldCheck className="h-3.5 w-3.5 text-arc-600" strokeWidth={2.25} />
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                Why choose us
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
              {lead}
              {accent ? <span className="text-gradient-brand"> {accent}</span> : null}
            </h2>

            <p className="mt-5 font-sans text-base leading-relaxed text-ink-soft">
              {whyChooseUs.description}
            </p>

            {/* Featured point, elevated above the ledger */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-line bg-ink p-6 shadow-lift">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-arc-600/20 blur-3xl" />
              <span className="relative font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                What sets us apart most
              </span>
              <p className="relative mt-3 font-display text-lg font-semibold leading-snug text-white">
                {featured}
              </p>
            </div>
          </div>

          {/* Ledger list */}
          <div className="overflow-hidden rounded-3xl border border-line bg-surface-raised shadow-soft">
            {rest.map((point, index) => (
              <div
                key={point}
                className="group relative flex items-center gap-5 border-b border-line px-5 py-4 last:border-b-0 sm:px-7 sm:py-5"
              >
                <span
                  className="bg-gradient-brand absolute inset-y-0 left-0 w-0.75 scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-bold tabular-nums text-ink-faint/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-ink">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
