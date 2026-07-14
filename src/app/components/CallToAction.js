import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-surface py-0 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 hidden bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)] sm:block" />

      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-ink px-6 py-16 shadow-lift sm:rounded-4xl sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0 opacity-[0.06]" />
            <div className="animate-drift absolute -top-1/3 left-1/2 h-128 w-lg -translate-x-1/2 rounded-full bg-arc-600/15 blur-3xl" />
            <div
              className="animate-drift absolute -bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-ember-600/15 blur-3xl"
              style={{ animationDelay: "-9s" }}
            />
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
              </span>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Dispatch ready
              </span>
            </div>

            <h2 className="mt-8 text-center font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Comfort problem?
              <br />
              <span className="text-gradient-brand">One call fixes it.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-center font-sans text-lg leading-relaxed text-white/60">
              No forms, no waiting on hold, no runaround. Talk to a real
              technician and get a straight answer on what it'll take to fix
              your heating, cooling, or plumbing issue.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="tel:+14036336911"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
              >
                <div className="bg-gradient-brand flex h-12 w-12 items-center justify-center rounded-2xl shadow-lift">
                  <Phone className="h-6 w-6 text-white" strokeWidth={2} />
                </div>

                <div className="mt-8">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    Fastest response
                  </p>
                  <p className="mt-2 flex items-center gap-2 font-display text-2xl font-bold text-white">
                    403-633-6911
                    <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                  <p className="mt-1 font-sans text-sm text-white/50">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </a>

              <a
                href="#services"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                  <MessageCircle className="h-6 w-6 text-white" strokeWidth={2} />
                </div>

                <div className="mt-8">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    Not urgent
                  </p>
                  <p className="mt-2 flex items-center gap-2 font-display text-2xl font-bold text-white">
                    Browse our services
                    <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                  <p className="mt-1 font-sans text-sm text-white/50">
                    See what we repair, install &amp; maintain
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
