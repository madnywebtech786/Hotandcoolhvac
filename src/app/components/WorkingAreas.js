const AREAS = [
  "Calgary",
  "Airdrie",
  "Cochrane",
  "Okotoks",
  "Chestermere",
  "Strathmore",
  "Canmore",
  "Nanton",
];

export default function WorkingAreas() {
  return (
    <section id="working-areas" className="relative scroll-mt-36 overflow-hidden bg-surface py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
          </span>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ink-faint">
            Currently dispatching
          </span>
        </div>

        {/* Oversized gradient city name */}
        <div className="relative mt-8 flex justify-center py-4">
          <h2
            className="text-gradient-brand select-none text-center font-display font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 18vw, 9rem)" }}
          >
            CALGARY
          </h2>
        </div>

        <p className="mx-auto -mt-4 max-w-lg text-center font-sans text-lg leading-relaxed text-ink-soft sm:-mt-8">
          &amp; every surrounding community within reach. Wherever you are,
          our technicians are already on their way.
        </p>

        {/* Dispatch manifest on mobile, each community gets its own full-width row
            instead of competing for space in a row of chips or a fleeting marquee. */}
        <div className="mt-12 flex flex-col divide-y divide-line border-y border-line sm:hidden">
          {AREAS.map((area, index) => (
            <div key={area} className="flex items-center gap-4 py-4">
              <span className="font-display text-sm font-bold text-ink/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display text-xl font-semibold text-ink">
                {area}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="bg-gradient-brand h-1.5 w-1.5 shrink-0 animate-pulse-glow rounded-full" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                  Active
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Marquee ticker of areas served, sm and up, where there's room for it to breathe */}
        <div className="relative mt-16 hidden overflow-hidden border-y border-line py-5 sm:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-linear-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-linear-to-l from-surface to-transparent" />

          <div className="animate-marquee flex w-max items-center gap-10">
            {[...AREAS, ...AREAS, ...AREAS, ...AREAS].map((area, index) => (
              <span key={`${area}-${index}`} className="flex shrink-0 items-center gap-10">
                <span className="whitespace-nowrap font-display text-xl font-semibold text-ink lg:text-2xl">
                  {area}
                </span>
                <span className="bg-gradient-brand h-1.5 w-1.5 shrink-0 rounded-full" />
              </span>
            ))}
          </div>
        </div>

        {/* Status readout row */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
          {[
            { label: "Coverage zone", value: "Calgary Metro" },
            { label: "Dispatch", value: "24 / 7" },
            { label: "Communities served", value: "8+" },
            { label: "Service types", value: "4 specialties" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                {stat.label}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="tel:+14036336911"
            className="bg-gradient-brand inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
          >
            Confirm service in my area
          </a>
        </div>
      </div>
    </section>
  );
}
