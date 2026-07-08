import { Target, Compass } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              What drives us
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Mission
            <span className="text-gradient-brand"> &amp; vision.</span>
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Mission */}
          <div className="relative overflow-hidden rounded-4xl border border-line bg-surface-raised p-8 shadow-soft sm:p-10">
            <span className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl font-bold text-ink/4">
              01
            </span>

            <div className="bg-gradient-brand relative flex h-12 w-12 items-center justify-center rounded-xl shadow-soft">
              <Target className="h-5 w-5 text-white" strokeWidth={2} />
            </div>

            <h3 className="relative mt-6 font-display text-xl font-bold text-ink sm:text-2xl">
              Our mission
            </h3>
            <p className="relative mt-3 font-sans text-base leading-relaxed text-ink-soft">
              Deliver honest, precise heating, cooling, and plumbing service
              to every Calgary homeowner we work with — diagnosing problems
              accurately, explaining them clearly, and fixing them right the
              first time.
            </p>
          </div>

          {/* Vision */}
          <div className="relative overflow-hidden rounded-4xl border border-line bg-ink p-8 shadow-soft sm:p-10">
            <span className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl font-bold text-white/5">
              02
            </span>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
              <Compass className="h-5 w-5 text-white" strokeWidth={2} />
            </div>

            <h3 className="relative mt-6 font-display text-xl font-bold text-white sm:text-2xl">
              Our vision
            </h3>
            <p className="relative mt-3 font-sans text-base leading-relaxed text-white/60">
              To be the HVAC and plumbing company Calgary homeowners
              recommend without hesitation — known for showing up fast,
              working honestly, and standing behind every job we complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
