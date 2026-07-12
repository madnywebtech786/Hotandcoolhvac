import { Target, Compass, ShieldCheck, HeartHandshake, Gauge, Users } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Honesty first",
    description:
      "We diagnose before we recommend. If a repair is the right call, that's what we say — no upselling, no unnecessary replacements.",
  },
  {
    icon: Gauge,
    title: "Precision workmanship",
    description:
      "Every repair and install is completed to a standard we'd be comfortable with in our own homes, not just good enough to pass.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for your home",
    description:
      "Clean work, clear communication, and technicians who treat every property like it's their own from first call to final walkthrough.",
  },
  {
    icon: Users,
    title: "Local accountability",
    description:
      "We're a Calgary business serving Calgary homeowners. Our reputation here is what keeps us honest, job after job.",
  },
];

export default function MissionVisionContent() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Mission */}
          <div className="relative overflow-hidden rounded-4xl border border-line bg-surface-raised p-8 shadow-soft sm:p-12">
            <span className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl font-bold text-ink/4 sm:text-9xl">
              01
            </span>

            <div className="bg-gradient-brand relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft">
              <Target className="h-6 w-6 text-white" strokeWidth={2} />
            </div>

            <h2 className="relative mt-8 font-display text-2xl font-bold text-ink sm:text-3xl">
              Our mission
            </h2>
            <p className="relative mt-4 font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
              Deliver honest, precise heating, cooling, and plumbing service
              to every Calgary homeowner we work with — diagnosing problems
              accurately, explaining them clearly, and fixing them right the
              first time. Comfort shouldn't come with confusion or guesswork,
              and we built Hot and Cool HVAC to prove it doesn't have to.
            </p>
          </div>

          {/* Vision */}
          <div className="relative overflow-hidden rounded-4xl border border-line bg-ink p-8 shadow-soft sm:p-12">
            <span className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl font-bold text-white/5 sm:text-9xl">
              02
            </span>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
              <Compass className="h-6 w-6 text-white" strokeWidth={2} />
            </div>

            <h2 className="relative mt-8 font-display text-2xl font-bold text-white sm:text-3xl">
              Our vision
            </h2>
            <p className="relative mt-4 font-sans text-base leading-relaxed text-white/60 sm:text-lg">
              To be the HVAC and plumbing company Calgary homeowners
              recommend without hesitation — known for showing up fast,
              working honestly, and standing behind every job we complete,
              from routine tune-ups to the coldest 2 a.m. emergency calls.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                How we get there
              </span>
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
              The values behind
              <span className="text-gradient-brand"> every job.</span>
            </h3>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="relative overflow-hidden rounded-2xl border border-line bg-surface-raised p-6 shadow-soft"
              >
                <span className="pointer-events-none absolute right-4 top-4 font-display text-2xl font-bold text-ink/8">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="bg-gradient-brand relative inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-soft">
                  <value.icon className="h-5 w-5 text-white" strokeWidth={2} />
                </div>

                <h4 className="mt-4 font-display text-base font-semibold text-ink">
                  {value.title}
                </h4>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
