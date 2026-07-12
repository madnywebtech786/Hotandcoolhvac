import Image from "next/image";
import { Wrench, Clock3, BadgeCheck, MapPin } from "lucide-react";

const FEATURES = [
  {
    icon: Wrench,
    title: "Expert workmanship",
    description:
      "Certified technicians who diagnose the root cause, not just the symptom, on every heating, cooling, and plumbing call.",
  },
  {
    icon: Clock3,
    title: "Always available",
    description:
      "Furnaces don't wait for business hours — neither do we. Round-the-clock emergency support across Calgary.",
  },
  {
    icon: BadgeCheck,
    title: "Honest, upfront service",
    description:
      "Clear explanations and fair recommendations, so you only pay for the work your system actually needs.",
  },
  {
    icon: MapPin,
    title: "Local & reliable",
    description:
      "Proudly Calgary-based, showing up fast for homes across the city and surrounding communities.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden bg-surface-alt py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_100%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-5/4 overflow-hidden rounded-4xl border border-line shadow-lift">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22731c9c93?q=80&w=1200&auto=format&fit=crop"
                  alt="Hot and Cool HVAC technician inspecting a residential furnace unit"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-6 w-56 rounded-2xl border border-line bg-surface-raised/95 p-5 shadow-lift backdrop-blur-sm sm:left-10">
                <p className="font-display text-3xl font-bold text-ink">6+</p>
                <p className="mt-1 font-sans text-xs leading-snug text-ink-faint">
                  Years keeping Calgary homes comfortable, year-round.
                </p>
              </div>

              <svg
                className="animate-spin-slow pointer-events-none absolute -top-8 -right-6 h-24 w-24 text-ember-300/70"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 7" />
              </svg>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                About Hot and Cool HVAC
              </span>
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Built on trust, tuned for
              <span className="text-gradient-brand"> precision.</span>
            </h2>

            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
              Hot and Cool HVAC is a Calgary-based heating, cooling, and
              plumbing company built around one goal: dependable comfort,
              delivered honestly. From emergency furnace repairs on the
              coldest nights to full air conditioning installs before summer
              hits, our technicians treat every home like their own —
              accurate diagnostics, quality parts, and clear communication
              from first call to final walkthrough.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className="relative overflow-hidden rounded-2xl border border-line bg-surface-raised p-5 shadow-soft"
                >
                  <span className="pointer-events-none absolute right-4 top-4 font-display text-2xl font-bold text-ink/8">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <div className="bg-gradient-brand relative inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-soft">
                      <feature.icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <dt className="mt-4 font-display text-base font-semibold text-ink">
                      {feature.title}
                    </dt>
                    <dd className="mt-1.5 font-sans text-sm leading-relaxed text-ink-soft">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
