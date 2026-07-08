import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-4/5 max-w-lg overflow-hidden rounded-4xl border border-line shadow-lift lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                alt="Hot and Cool HVAC technician diagnosing a heating system in Calgary"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                Our story
              </span>
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Built on
              <span className="text-gradient-brand"> straight answers.</span>
            </h2>

            <div className="mt-6 space-y-5 font-sans text-lg leading-relaxed text-ink-soft">
              <p>
                Too many HVAC and plumbing calls end with more confusion than
                answers — vague diagnoses, pressure to replace equipment that
                didn't need replacing. Hot and Cool HVAC was built to work
                differently.
              </p>
              <p>
                Every technician who walks into your home is trained to
                diagnose the actual problem first, explain it in plain
                language, and recommend the repair that makes sense — not
                the one that pads the invoice.
              </p>
              <p>
                Today, that standard runs through everything we do — furnace
                repairs on Calgary's coldest nights, full air conditioning
                installs, drain cleaning, and water heater replacements —
                across heating, cooling, and plumbing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
