import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";

const REASONS = [
  "Licensed, background-checked HVAC and plumbing technicians.",
  "Transparent, upfront pricing with no hidden fees.",
  "24/7 emergency response across Calgary and surrounding areas.",
  "Accurate diagnostics before any repair recommendation.",
  "Quality parts and workmanship backed by our guarantee.",
  "Respectful service that treats your home like our own.",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                Why choose us
              </span>
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              The comfort experts
              <br />
              <span className="text-gradient-brand">Calgary counts on.</span>
            </h2>

            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
              We built Hot and Cool HVAC around a simple standard: show up
              fast, diagnose it right, and fix it once. Here's what that
              looks like in practice.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="bg-gradient-brand mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-ink-soft">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+14035550199"
              className="group mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" strokeWidth={2.25} />
              Call (403) 555-0199
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-4xl border border-line shadow-lift lg:max-w-none">
              <div className="relative aspect-4/5">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
                  alt="Hot and Cool HVAC technician completing a home service call in Calgary"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-52 rounded-2xl border border-line bg-surface-raised p-5 shadow-lift sm:-left-10">
              <p className="font-display text-3xl font-bold text-ink">24/7</p>
              <p className="mt-1 font-sans text-xs leading-snug text-ink-faint">
                Emergency support, every day of the year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
