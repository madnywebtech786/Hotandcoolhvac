"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "../constants/servicesData";
import { CATEGORY_ORDER, SERVICE_ICONS, SERVICE_SUMMARIES } from "../constants/serviceMeta";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState(CATEGORY_ORDER[0]);

  const filteredServices = useMemo(
    () => services.filter((service) => service.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="services" className="relative scroll-mt-36 overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              What we do
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Heating, cooling &amp; plumbing,
            <br />
            <span className="text-gradient-brand">handled with precision.</span>
          </h2>

          <p className="mt-6 font-sans text-lg leading-relaxed text-ink-soft">
            From emergency repairs to full installations, our licensed
            technicians cover every corner of home comfort across Calgary.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {CATEGORY_ORDER.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 font-sans text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-brand border-transparent text-white shadow-lift"
                    : "border-line-strong bg-surface-raised text-ink-soft hover:border-arc-500 hover:text-arc-600"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Services grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = SERVICE_ICONS[service.slug];
            const summary = SERVICE_SUMMARIES[service.slug];

            return (
              <div
                key={service.slug}
                className="group relative flex flex-col rounded-2xl border border-line bg-surface-raised p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-line-strong bg-surface-alt px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                  {service.category}
                </span>

                <div className="bg-gradient-brand relative mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-soft">
                  {Icon ? <Icon className="h-6 w-6 text-white" strokeWidth={2} /> : null}
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                  {service.title}
                </h3>

                <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                  {summary}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="group/link mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-arc-600 transition-colors hover:text-ember-600"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
