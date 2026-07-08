import { Sparkles } from "lucide-react";
import { splitHeading } from "./splitHeading";

export default function ServiceBenefits({ service }) {
  const { benefits } = service;
  const { lead, accent } = splitHeading(benefits.title);

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 hidden bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)] sm:block" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-14 shadow-lift sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0 opacity-[0.06]" />
            <div className="animate-drift absolute -top-1/3 left-1/2 h-128 w-lg -translate-x-1/2 rounded-full bg-arc-600/15 blur-3xl" />
            <div
              className="animate-drift absolute -bottom-1/3 right-0 h-96 w-96 rounded-full bg-ember-600/15 blur-3xl"
              style={{ animationDelay: "-9s" }}
            />
          </div>

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                <Sparkles className="h-4.5 w-4.5 text-white" strokeWidth={2} />
              </span>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                What you gain
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
              {lead}
              {accent ? <span className="text-gradient-brand"> {accent}</span> : null}
            </h2>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {benefits.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
                >
                  <span className="bg-gradient-brand mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
