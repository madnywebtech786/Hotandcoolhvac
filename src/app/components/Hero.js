import Image from "next/image";
import { Phone, ShieldCheck, Snowflake, Flame, ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "24/7", label: "Emergency response" },
  { value: "15+", label: "Years serving Calgary" },
  { value: "100%", label: "Satisfaction focused" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Atmosphere layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.4] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="animate-drift absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-arc-100/70 blur-3xl" />
        <div
          className="animate-drift absolute top-1/3 -right-32 h-[24rem] w-[24rem] rounded-full bg-ember-100/60 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 pt-32 pb-24 sm:px-8 sm:pt-36 lg:flex-row lg:items-center lg:gap-12 lg:pb-32">
        {/* Copy column */}
        <div className="relative z-10 flex-1">
          <div
            className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
            </span>
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              Serving Calgary &amp; surrounding areas
            </span>
          </div>

          <h1
            className="animate-rise-in mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
            style={{ animationDelay: "0.15s" }}
          >
            Comfort you can
            <span className="relative mx-3 inline-block whitespace-nowrap">
              <span className="text-gradient-brand relative z-10">
                trust
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9.5C40 3 100 1 198 8"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  className="animate-[dash_1.2s_0.6s_ease-out_forwards]"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="var(--color-ember-500)" />
                    <stop offset="1" stopColor="var(--color-arc-500)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            engineered for every season.
          </h1>

          <p
            className="animate-rise-in mt-6 max-w-lg font-sans text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "0.25s" }}
          >
            Hot and Cool HVAC delivers precision heating, cooling, and plumbing
            service across Calgary — honest diagnostics, quality workmanship,
            and a team that shows up when it matters most.
          </p>

          <div
            className="animate-rise-in mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href="tel:+14035550199"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-7 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="bg-gradient-brand absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <Phone className="relative z-10 h-4 w-4" strokeWidth={2.25} />
              <span className="relative z-10">Call (403) 555-0199</span>
            </a>

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-line-strong bg-surface-raised px-7 py-4 font-sans text-sm font-semibold text-ink transition-colors hover:border-arc-500 hover:text-arc-600"
            >
              Explore our services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <dl
            className="animate-rise-in mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8"
            style={{ animationDelay: "0.45s" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 font-sans text-xs leading-snug text-ink-faint">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual column */}
        <div
          className="animate-rise-in relative z-10 flex-1"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Rotating dashed ring decoration */}
            <svg
              className="animate-spin-slow pointer-events-none absolute -top-10 -right-10 h-28 w-28 text-arc-300/70"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 8"
              />
            </svg>

            <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-line bg-steel-100 shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                alt="HVAC technician servicing a rooftop cooling unit in Calgary"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent" />
            </div>

            {/* Floating "cooling" card */}
            <div
              className="animate-rise-in absolute -left-6 top-10 hidden w-44 rounded-2xl border border-line bg-surface-raised/90 p-4 shadow-lift backdrop-blur-sm sm:block"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2 text-arc-600">
                <Snowflake className="h-4 w-4 animate-spin-slow" strokeWidth={2} />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                  Cooling
                </span>
              </div>
              <p className="mt-2 font-display text-xl font-bold text-ink">
                18°C
              </p>
              <p className="font-sans text-[11px] text-ink-faint">
                Target indoor temp
              </p>
            </div>

            {/* Floating "heating" card */}
            <div
              className="animate-rise-in absolute -bottom-8 -right-4 w-48 rounded-2xl border border-line bg-surface-raised/90 p-4 shadow-lift backdrop-blur-sm sm:right-6"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center gap-2 text-ember-600">
                <Flame className="h-4 w-4" strokeWidth={2} />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                  Heating
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-ink-soft" strokeWidth={2} />
                <p className="font-sans text-xs font-medium text-ink-soft">
                  Licensed &amp; insured technicians
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
