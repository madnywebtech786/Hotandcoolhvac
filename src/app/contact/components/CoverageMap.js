import { MapPin, Navigation } from "lucide-react";

// Rough relative positions (percent of panel) to suggest Calgary's real
// geographic layout — Airdrie/Cochrane north, Chestermere/Strathmore east,
// Okotoks/Nanton south, Canmore west in the foothills — without needing an
// actual map tile provider.
const AREAS = [
  { name: "Calgary", top: "50%", left: "48%", primary: true },
  { name: "Airdrie", top: "18%", left: "54%" },
  { name: "Cochrane", top: "26%", left: "22%" },
  { name: "Chestermere", top: "46%", left: "80%" },
  { name: "Strathmore", top: "38%", left: "92%" },
  { name: "Okotoks", top: "82%", left: "38%" },
  { name: "Canmore", top: "30%", left: "6%" },
  { name: "Nanton", top: "94%", left: "30%" },
];

export default function CoverageMap() {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-line bg-ink shadow-lift">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.1]" />
      <div className="animate-drift pointer-events-none absolute -bottom-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-arc-600/20 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-2">
          <Navigation className="h-3.5 w-3.5 text-arc-300" strokeWidth={2} />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Coverage map
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-500" />
          </span>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Dispatching now
          </span>
        </div>
      </div>

      {/* Relative-position "map" */}
      <div className="relative h-72 sm:h-80">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
          aria-hidden="true"
        >
          <defs>
            <pattern id="coverage-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#coverage-grid)" />
        </svg>

        {/* Connecting lines from Calgary to each community */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          {AREAS.filter((area) => !area.primary).map((area) => (
            <line
              key={area.name}
              x1="48%"
              y1="50%"
              x2={area.left}
              y2={area.top}
              stroke="var(--color-arc-300)"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.35"
            />
          ))}
        </svg>

        {AREAS.map((area) => (
          <div
            key={area.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: area.top, left: area.left }}
          >
            {area.primary ? (
              <div className="relative flex flex-col items-center">
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-50" />
                  <span className="bg-gradient-brand relative flex h-4 w-4 items-center justify-center rounded-full shadow-lift">
                    <MapPin className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                </span>
                <span className="mt-2 whitespace-nowrap rounded-full border border-white/15 bg-ink/80 px-3 py-1 font-sans text-xs font-bold text-white backdrop-blur-sm">
                  {area.name}
                </span>
              </div>
            ) : (
              <div className="group relative flex flex-col items-center">
                <span className="h-2 w-2 rounded-full bg-arc-300 shadow-[0_0_0_4px_rgba(126,196,245,0.15)]" />
                <span className="mt-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-sans text-[11px] font-medium text-white/70 backdrop-blur-sm">
                  {area.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="relative grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-3">
        <div className="bg-ink px-5 py-4">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-white/40">
            Zone
          </span>
          <p className="mt-1 font-display text-sm font-bold text-white">Calgary Metro</p>
        </div>
        <div className="bg-ink px-5 py-4">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-white/40">
            Communities
          </span>
          <p className="mt-1 font-display text-sm font-bold text-white">{AREAS.length} active</p>
        </div>
        <div className="col-span-2 bg-ink px-5 py-4 sm:col-span-1">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-white/40">
            Dispatch
          </span>
          <p className="mt-1 font-display text-sm font-bold text-white">24 / 7</p>
        </div>
      </div>
    </div>
  );
}
