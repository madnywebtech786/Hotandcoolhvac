import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";

export default function GalleryCta() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Ready to be our
          <br />
          <span className="text-gradient-brand">next project?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
          Whether it's a routine tune-up or a full installation, we bring the
          same care to every job across Calgary.
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
            className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-line-strong bg-surface-raised px-8 py-4 font-sans text-sm font-semibold text-ink transition-colors hover:border-arc-500 hover:text-arc-600"
          >
            Request service online
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
