import Link from "next/link";
import { Phone, ArrowUpRight, Terminal } from "lucide-react";

export default function DealsCta() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-line-strong bg-surface-raised px-6 py-14 text-center shadow-lift sm:px-14 sm:py-16">
          <span className="pointer-events-none absolute left-5 top-5 h-5 w-5 border-l-2 border-t-2 border-arc-300" />
          <span className="pointer-events-none absolute right-5 top-5 h-5 w-5 border-r-2 border-t-2 border-arc-300" />
          <span className="pointer-events-none absolute bottom-5 left-5 h-5 w-5 border-b-2 border-l-2 border-ember-300" />
          <span className="pointer-events-none absolute bottom-5 right-5 h-5 w-5 border-b-2 border-r-2 border-ember-300" />

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-line-strong bg-surface-alt px-4 py-1.5">
            <Terminal className="h-3.5 w-3.5 text-arc-600" strokeWidth={2.25} />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Claim sequence
            </span>
          </div>

          <h2 className="mt-7 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Ready to activate
            <br />
            <span className="text-gradient-brand">your savings?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
            Mention the deal code when you call or request service online,
            and we'll apply it to your visit, no coupons to print, no
            surprises.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+14036336911"
              className="bg-gradient-brand group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" strokeWidth={2.25} />
              Call 403-633-6911
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-line-strong bg-surface px-8 py-4 font-sans text-sm font-semibold text-ink transition-colors hover:border-arc-500 hover:text-arc-600"
            >
              Request service online
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
