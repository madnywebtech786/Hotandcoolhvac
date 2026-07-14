import { Phone, Radio } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-36 pb-16 sm:pt-48 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.4] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="animate-drift absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-arc-100/70 blur-3xl" />
        <div
          className="animate-drift absolute top-1/3 -right-32 h-[24rem] w-[24rem] rounded-full bg-ember-100/60 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div
              className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
              </span>
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                Dispatch ready
              </span>
            </div>

            <h1
              className="animate-rise-in mt-7 max-w-2xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "0.15s" }}
            >
              Let's get your
              <span className="text-gradient-brand"> comfort sorted.</span>
            </h1>

            <p
              className="animate-rise-in mt-6 max-w-lg font-sans text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "0.25s" }}
            >
              Tell us what's going on and where you're located, and we'll follow
              up to schedule your service. For anything urgent, calling
              directly is always the fastest route to a technician.
            </p>
          </div>

          {/* Direct-line console card */}
          <a
            href="tel:+14036336911"
            className="animate-rise-in group relative w-full max-w-sm shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-ink p-6 shadow-lift transition-transform duration-300 hover:-translate-y-1"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-arc-600/20 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Direct line
              </span>
              <Radio className="h-3.5 w-3.5 text-white/30" strokeWidth={2} />
            </div>

            <div className="relative mt-5 flex items-center gap-4">
              <span className="bg-gradient-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lift">
                <Phone className="h-5 w-5 text-white" strokeWidth={2} />
              </span>
              <span>
                <span className="block font-display text-2xl font-bold text-white">
                  403-633-6911
                </span>
                <span className="mt-0.5 block font-sans text-xs text-white/50">
                  Available 24/7 for emergencies
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
