import { Gift, Radio } from "lucide-react";
import { deals } from "../../constants/dealsData";

export default function DealsHero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-36 pb-20 sm:pt-48 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.5] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="animate-drift absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-arc-100/70 blur-3xl" />
        <div
          className="animate-drift absolute top-1/3 -right-32 h-[24rem] w-[24rem] rounded-full bg-ember-100/60 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Schematic frame housing the headline */}
        <div className="relative overflow-hidden rounded-4xl border border-line-strong bg-surface-raised/60 px-6 py-14 shadow-soft backdrop-blur-sm sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5]" />

          {/* Corner reticles */}
          <span className="pointer-events-none absolute left-5 top-5 h-5 w-5 border-l-2 border-t-2 border-arc-300 sm:left-8 sm:top-8" />
          <span className="pointer-events-none absolute right-5 top-5 h-5 w-5 border-r-2 border-t-2 border-arc-300 sm:right-8 sm:top-8" />
          <span className="pointer-events-none absolute bottom-5 left-5 h-5 w-5 border-b-2 border-l-2 border-ember-300 sm:bottom-8 sm:left-8" />
          <span className="pointer-events-none absolute bottom-5 right-5 h-5 w-5 border-b-2 border-r-2 border-ember-300 sm:bottom-8 sm:right-8" />

          <div className="relative flex flex-col items-center text-center">
            <div
              className="animate-rise-in flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft"
              style={{ animationDelay: "0.05s" }}
            >
              <Radio className="h-3.5 w-3.5 text-arc-600" strokeWidth={2.25} />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                {deals.length} offers online
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-500" />
              </span>
            </div>

            <h1
              className="animate-rise-in mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "0.15s" }}
            >
              Live
              <span className="text-gradient-brand"> savings</span> schematic.
            </h1>

            <p
              className="animate-rise-in mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "0.25s" }}
            >
              Active offers, wired straight from installation to
              savings, no fine-print maze, just what you get and how to
              claim it.
            </p>

            <div
              className="animate-rise-in mt-10 flex flex-wrap items-center justify-center gap-3"
              style={{ animationDelay: "0.35s" }}
            >
              {deals.map((deal) => (
                <span
                  key={deal.id}
                  className="flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-3.5 py-2 font-mono text-[11px] font-semibold tracking-wider text-ink-soft shadow-soft"
                >
                  <deal.icon className="h-3.5 w-3.5 text-arc-600" strokeWidth={2} />
                  {deal.code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
