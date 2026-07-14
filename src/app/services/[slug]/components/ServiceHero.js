import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, ChevronRight } from "lucide-react";
import { SERVICE_ICONS } from "../../../constants/serviceMeta";
import { getServiceImage } from "./serviceImages";
import { splitHeading } from "./splitHeading";

export default function ServiceHero({ service }) {
  const Icon = SERVICE_ICONS[service.slug];
  const { lead, accent } = splitHeading(service.hero.title);

  return (
    <section className="relative overflow-hidden bg-surface pt-36 pb-20 sm:pt-48 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.4] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
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
                href="tel:+14036336911"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-7 py-4 font-sans text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="bg-gradient-brand absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <Phone className="relative z-10 h-4 w-4" strokeWidth={2.25} />
                <span className="relative z-10">Call 403-633-6911</span>
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

          {/* Visual column */}
          <div
            className="animate-rise-in relative z-10 flex-1"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rotating dashed ring decoration */}
              <svg
                className="animate-spin-slow pointer-events-none absolute -top-10 -right-10 h-24 w-24 text-arc-300/70"
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

              <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-line shadow-lift sm:aspect-video lg:aspect-4/5">
                <Image
                  src={getServiceImage(service.slug)}
                  alt={`${service.title}, Hot and Cool HVAC technician on-site in Calgary`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3.5 py-2 backdrop-blur-md">
                  {Icon ? <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2} /> : null}
                  <span className="font-sans text-xs font-semibold text-white">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Floating service badge */}
              <div className="animate-rise-in absolute -right-5 -bottom-6 flex items-center gap-3 rounded-2xl border border-line bg-surface-raised/95 p-4 shadow-lift backdrop-blur-sm sm:right-6">
                <span className="bg-gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-soft">
                  {Icon ? <Icon className="h-5 w-5 text-white" strokeWidth={2} /> : null}
                </span>
                <span>
                  <span className="block font-display text-sm font-bold leading-snug text-ink">
                    {service.title}
                  </span>
                  <span className="block font-sans text-[11px] text-ink-faint">
                    Licensed &amp; insured
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
