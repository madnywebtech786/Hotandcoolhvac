import Image from "next/image";

const STATS = [
  { value: "24/7", label: "Emergency response" },
  { value: "15+", label: "Years in Calgary" },
  { value: "20+", label: "Services offered" },
];

export default function AboutHero() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-surface pt-36 pb-0 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Case-tag label sitting above the headline */}
        <span
          className="animate-rise-in relative z-10 mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint sm:mb-6 sm:pl-8"
          style={{ animationDelay: "0.05s" }}
        >
          Est. Calgary, AB
        </span>

        {/* Oversized headline, deliberately left-bled and overlapped by the image */}
        <h1
          className="animate-rise-in relative z-10 mb-[-6vw] pl-0 font-display font-bold leading-[0.95] tracking-tight text-ink sm:pl-8 lg:-mb-24"
          style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)", animationDelay: "0.15s" }}
        >
          We fix it
          <br />
          <span className="text-gradient-brand">right the first</span>
          <br />
          time.
        </h1>

        {/* Image overlapping the headline's baseline, offset right */}
        <div
          className="animate-rise-in relative z-0 ml-auto mt-8 w-[86%] sm:w-3/4 lg:w-3/5"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-line shadow-lift sm:aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop"
              alt="Hot and Cool HVAC technician working on a heating system in Calgary"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent" />
          </div>

          {/* Stats strip pinned to the image's leading edge, spilling onto the surface below */}
          <div
            className="animate-rise-in relative z-10 -mt-10 ml-4 flex w-fit gap-6 rounded-3xl border border-line bg-surface-raised px-6 py-5 shadow-lift sm:ml-8 sm:gap-10 sm:px-8"
            style={{ animationDelay: "0.3s" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-gradient-brand font-display text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-sans text-[11px] leading-snug text-ink-faint sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting copy, tucked beneath the composition */}
        <p
          className="animate-rise-in relative mt-14 max-w-lg pb-20 font-sans text-lg leading-relaxed text-ink-soft sm:pb-28"
          style={{ animationDelay: "0.4s" }}
        >
          Hot and Cool HVAC exists to make heating, cooling, and plumbing
          problems feel simple again — honest diagnostics, fair pricing, and
          technicians who treat your home like their own.
        </p>
      </div>
    </section>
  );
}
