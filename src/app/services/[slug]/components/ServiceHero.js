import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, ChevronRight, Radio, SquareActivity } from "lucide-react";
import { SERVICE_ICONS } from "../../../constants/serviceMeta";
import { SERVICE_PLACEHOLDER_IMAGE } from "./serviceImages";
import { CATEGORY_CONSOLE } from "./serviceConsoleData";
import { splitHeading } from "./splitHeading";

export default function ServiceHero({ service }) {
  const Icon = SERVICE_ICONS[service.slug];
  const readout = CATEGORY_CONSOLE[service.category];
  const { lead, accent } = splitHeading(service.hero.title);

  return (
    <section className="relative overflow-hidden bg-surface pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.4] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="animate-drift absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-arc-100/70 blur-3xl" />
        <div
          className="animate-drift absolute top-1/3 -right-32 h-[24rem] w-[24rem] rounded-full bg-ember-100/60 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="animate-rise-in flex items-center gap-1.5 font-sans text-sm text-ink-faint"
          style={{ animationDelay: "0.05s" }}
        >
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          <Link href="/#services" className="transition-colors hover:text-ink">
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          <span className="text-ink-soft">{service.title}</span>
        </nav>

        <div className="mt-10 flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-12">
          {/* Copy column */}
          <div className="relative z-10 flex-1">
            <div
              className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft"
              style={{ animationDelay: "0.1s" }}
            >
              {Icon ? <Icon className="h-3.5 w-3.5 text-arc-600" strokeWidth={2.25} /> : null}
              <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
                {service.category}
              </span>
            </div>

            <h1
              className="animate-rise-in mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
              style={{ animationDelay: "0.18s" }}
            >
              {lead}
              {accent ? <span className="text-gradient-brand"> {accent}</span> : null}
            </h1>

            <p
              className="animate-rise-in mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "0.26s" }}
            >
              {service.hero.description}
            </p>

            <div
              className="animate-rise-in mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.34s" }}
            >
              <a
                href="tel:+14035550199"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-7 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="bg-gradient-brand absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <Phone className="relative z-10 h-4 w-4" strokeWidth={2.25} />
                <span className="relative z-10">Call (403) 555-0199</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-line-strong bg-surface-raised px-7 py-4 font-sans text-sm font-semibold text-ink transition-colors hover:border-arc-500 hover:text-arc-600"
              >
                Request this service
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Visual column — diagnostic console */}
          <div
            className="animate-rise-in relative z-10 flex-1"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <svg
                className="animate-spin-slow pointer-events-none absolute -top-10 -right-10 h-24 w-24 text-arc-300/50"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                />
              </svg>

              {/* Console housing */}
              <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-ink shadow-lift">
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />

                {/* Console header bar */}
                <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-500" />
                    </span>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      {readout.label} monitor
                    </span>
                  </div>
                  <Radio className="h-3.5 w-3.5 text-white/30" strokeWidth={2} />
                </div>

                {/* Feed viewport */}
                <div className="relative m-3 aspect-4/5 overflow-hidden rounded-3xl sm:aspect-video lg:aspect-4/5">
                  <Image
                    src={SERVICE_PLACEHOLDER_IMAGE}
                    alt={`${service.title} — Hot and Cool HVAC technician on-site in Calgary`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover grayscale-[15%]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/5 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-b from-arc-900/10 via-transparent to-transparent" />

                  {/* Scanning sweep */}
                  <div
                    className="animate-scan-line pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-arc-300/0 via-arc-300/15 to-arc-300/0"
                    aria-hidden="true"
                  />

                  {/* Corner reticles */}
                  <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-white/40" />
                  <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-white/40" />
                  <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-white/40" />
                  <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-white/40" />

                  {/* Feed label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 backdrop-blur-sm">
                      {Icon ? <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2} /> : null}
                      <span className="font-sans text-xs font-semibold text-white">
                        {service.title}
                      </span>
                    </div>
                    <span className="rounded-full border border-white/15 bg-ink/60 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-white/60 backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Readout strip */}
                <div className="relative grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-3">
                  <div className="bg-ink px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <SquareActivity className="h-3 w-3 text-arc-300" strokeWidth={2} />
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        {readout.metric.name}
                      </span>
                    </div>
                    <p className="mt-1.5 font-display text-lg font-bold text-white">
                      {readout.metric.value}
                      <span className="ml-1 font-sans text-[11px] font-normal text-white/40">
                        {readout.metric.unit}
                      </span>
                    </p>
                  </div>

                  <div className="bg-ink px-5 py-4">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      Signal
                    </span>
                    <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="bg-gradient-brand animate-meter-fill h-full w-full rounded-full" />
                    </div>
                    <p className="mt-1.5 font-sans text-xs font-medium text-white/70">
                      {readout.signal} — nominal
                    </p>
                  </div>

                  <div className="col-span-2 bg-ink px-5 py-4 sm:col-span-1">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      Coverage
                    </span>
                    <p className="mt-1.5 font-display text-sm font-bold text-white">
                      Calgary Metro
                    </p>
                    <p className="mt-0.5 font-sans text-[11px] text-white/40">
                      Licensed &amp; insured
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
