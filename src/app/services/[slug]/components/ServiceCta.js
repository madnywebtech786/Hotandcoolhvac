import Link from "next/link";
import { Phone, ArrowUpRight, LayoutGrid } from "lucide-react";

export default function ServiceCta({ service }) {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
          Ready to get your
          <br />
          <span className="text-gradient-brand">{service.title.toLowerCase()} sorted?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
          Call now for the fastest response, or send us your details and
          we'll be in touch to schedule your service.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+14035550199"
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-8 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="bg-gradient-brand absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <Phone className="relative z-10 h-4 w-4" strokeWidth={2.25} />
            <span className="relative z-10">Call (403) 555-0199</span>
          </a>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-line-strong bg-surface-raised px-8 py-4 font-sans text-sm font-semibold text-ink transition-colors hover:border-arc-500 hover:text-arc-600"
          >
            Request service online
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <Link
          href="/#services"
          className="group mt-8 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-ink-soft transition-colors hover:text-arc-600"
        >
          <LayoutGrid className="h-4 w-4" strokeWidth={2.25} />
          Browse all services
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
