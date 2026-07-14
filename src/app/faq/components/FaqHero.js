import { HelpCircle } from "lucide-react";
import { FAQ_CATEGORIES, TOTAL_FAQ_COUNT } from "../constants/faqData";

export default function FaqHero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-36 pb-16 sm:pt-48 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.4] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="animate-drift absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-arc-100/70 blur-3xl" />
        <div
          className="animate-drift absolute top-1/3 -right-32 h-[24rem] w-[24rem] rounded-full bg-ember-100/60 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div
              className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft"
              style={{ animationDelay: "0.05s" }}
            >
              <HelpCircle className="h-3.5 w-3.5 text-arc-600" strokeWidth={2.25} />
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                Support knowledge base
              </span>
            </div>

            <h1
              className="animate-rise-in mt-7 max-w-2xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "0.15s" }}
            >
              Answers, sorted by
              <span className="text-gradient-brand"> system.</span>
            </h1>

            <p
              className="animate-rise-in mt-6 max-w-lg font-sans text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "0.25s" }}
            >
              Every question we hear most often from Calgary homeowners,
              organized by heating, cooling, plumbing, and HVAC so you can
              jump straight to what you need.
            </p>
          </div>

          {/* Oversized total, echoing the WorkingAreas "oversized gradient stat" motif */}
          <div
            className="animate-rise-in shrink-0 text-left lg:text-right"
            style={{ animationDelay: "0.35s" }}
          >
            <p
              className="text-gradient-brand select-none font-display font-bold leading-none tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
            >
              {TOTAL_FAQ_COUNT}
            </p>
            <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Questions indexed
            </p>
          </div>
        </div>

        {/* Category scanner, chip row with per-category counts (the category
            rail below already covers this job on mobile, so it's desktop-only here) */}
        <div
          className="animate-rise-in mt-14 hidden flex-wrap gap-3 border-t border-line pt-8 sm:flex"
          style={{ animationDelay: "0.45s" }}
        >
          {FAQ_CATEGORIES.map((category) => (
            <div
              key={category.key}
              className="group flex items-center gap-2.5 rounded-full border border-line-strong bg-surface-raised py-2 pl-2 pr-4 shadow-soft"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-arc-600">
                <category.icon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="font-sans text-sm font-semibold text-ink">
                {category.label}
              </span>
              <span className="font-sans text-xs font-semibold tabular-nums text-ink-faint">
                {category.faqs.length}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
