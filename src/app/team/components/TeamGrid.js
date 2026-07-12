import { User, ShieldCheck } from "lucide-react";

/*
  PLACEHOLDER TEAM CONTENT — replace every name, role, and bio below with
  real staff details (and swap the icon avatar for an actual photo) before
  this goes live. Nothing here represents an actual Hot and Cool HVAC employee.
*/
const TEAM = [
  {
    name: "Denys",
    role: "Lead HVAC Technician",
    bio: "Leads every diagnosis with the same standard: find the real problem before recommending a fix.",
  },
  
];

export default function TeamGrid() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              Licensed &amp; insured
            </span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            The technicians
            <span className="text-gradient-brand"> you'll meet.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, index) => (
            <div
              key={member.name + index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="pointer-events-none absolute right-4 top-4 font-display text-2xl font-bold text-ink/8">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="bg-gradient-brand relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-soft">
                <User className="h-7 w-7 text-white" strokeWidth={1.75} />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                {member.name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-arc-600">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.25} />
                {member.role}
              </p>

              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
