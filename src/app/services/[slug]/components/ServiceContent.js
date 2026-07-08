import { Phone, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { splitHeading } from "./splitHeading";

const QUICK_FACTS = [
  { icon: Clock3, label: "Response", value: "24/7 emergency dispatch" },
  { icon: ShieldCheck, label: "Coverage", value: "Licensed & insured techs" },
  { icon: CheckCircle2, label: "Guarantee", value: "Workmanship you can trust" },
];

export default function ServiceContent({ service }) {
  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.25] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-12">
          {/* Article body */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {service.content.map((block, index) => {
              const { lead, accent } = splitHeading(block.title);

              return (
                <article
                  key={block.title}
                  className="relative overflow-hidden rounded-4xl border border-line bg-surface-raised p-6 shadow-soft sm:p-9"
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-ink/[0.04] sm:text-8xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-center gap-3">
                    <span className="bg-gradient-brand flex h-1.5 w-8 shrink-0 rounded-full" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                      {String(index + 1).padStart(2, "0")} / {String(service.content.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="relative mt-4 font-display text-2xl font-bold leading-snug tracking-tight text-ink sm:text-[1.75rem]">
                    {lead}
                    {accent ? <span className="text-gradient-brand"> {accent}</span> : null}
                  </h2>

                  <div className="relative mt-5 space-y-4 font-sans text-[15px] leading-relaxed text-ink-soft">
                    {block.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>

                  {block.list ? (
                    <ul className="relative mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {block.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-line bg-surface-alt/60 px-3.5 py-3"
                        >
                          <span className="bg-gradient-brand mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full">
                            <CheckCircle2 className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                          </span>
                          <span className="font-sans text-[13px] leading-snug text-ink-soft">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              );
            })}
          </div>

          {/* Sidebar — stays pinned in view while the article scrolls */}
          <aside className="lg:col-span-1">
            <div className="flex flex-col gap-5 lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-4xl border border-line bg-ink p-7 shadow-lift">
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
                <div className="animate-drift pointer-events-none absolute -top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-arc-600/20 blur-3xl" />

                <div className="relative">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    Need this fixed?
                  </span>
                  <p className="mt-3 font-display text-xl font-bold leading-snug text-white">
                    Talk to a technician now.
                  </p>
                  <a
                    href="tel:+14035550199"
                    className="bg-gradient-brand mt-6 flex items-center justify-center gap-2.5 rounded-full px-6 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2.25} />
                    (403) 555-0199
                  </a>
                  <p className="mt-3 text-center font-sans text-xs text-white/40">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>

              <div className="rounded-4xl border border-line bg-surface-raised p-6 shadow-soft">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                  At a glance
                </p>
                <ul className="mt-4 flex flex-col gap-4">
                  {QUICK_FACTS.map((fact) => (
                    <li key={fact.label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-surface-alt text-arc-600">
                        <fact.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span>
                        <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                          {fact.label}
                        </span>
                        <span className="mt-0.5 block font-sans text-sm font-medium text-ink">
                          {fact.value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
