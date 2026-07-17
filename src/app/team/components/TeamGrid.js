import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const TEAM = [
  {
    name: "Denys",
    role: "Lead HVAC Technician",
    bio: "Leads every diagnosis with the same standard: find the real problem before recommending a fix.",
    image: "/images/team.webp",
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

        <div className="mx-auto mt-14 grid max-w-lg grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, index) => (
            <div
              key={member.name + index}
              className="group relative flex flex-col overflow-hidden rounded-4xl border border-line bg-surface-raised shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Hot and Cool HVAC`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/5 to-transparent" />

                <span className="pointer-events-none absolute right-4 top-4 font-display text-2xl font-bold text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3.5 py-2 backdrop-blur-md">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-arc-300" strokeWidth={2.25} />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white">
                    {member.role}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  {member.name}
                </h3>
                <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
