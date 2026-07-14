import Link from "next/link";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export default function FaqCta() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
          Still have a
          <span className="text-gradient-brand"> question?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
          If you couldn't find your answer above, a real technician is a call
          away, or send us your details and we'll follow up directly.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="tel:+14036336911"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-7 shadow-lift transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
            <div className="bg-gradient-brand relative flex h-11 w-11 items-center justify-center rounded-2xl shadow-lift">
              <Phone className="h-5 w-5 text-white" strokeWidth={2} />
            </div>
            <div className="relative mt-7 text-left">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Fastest answer
              </p>
              <p className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-white">
                403-633-6911
                <ArrowUpRight className="h-4 w-4 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </div>
          </a>

          <Link
            href="/contact"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line-strong bg-surface-raised p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-arc-300"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line-strong bg-surface-alt text-arc-600">
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
            </div>
            <div className="mt-7 text-left">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                Not urgent
              </p>
              <p className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-ink">
                Contact us online
                <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
