import Link from "next/link";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { CATEGORY_ORDER } from "../constants/serviceMeta";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Mission & Vision", href: "/mission-vision" },
  { label: "Our Team", href: "/team" },
  { label: "Services", href: "/#services" },
  { label: "Working areas", href: "/#working-areas" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="animate-drift pointer-events-none absolute -bottom-1/2 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-arc-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:px-8">
        {/* Oversized brand mark + direct lines */}
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
          <div>
            <p className="font-display text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl">
              Hot<span className="text-gradient-brand">&amp;</span>Cool
            </p>
            <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              HVAC &amp; Plumbing — Calgary
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="tel:+14035550199"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
            >
              <span className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-lift">
                <Phone className="h-4 w-4 text-white" strokeWidth={2.25} />
              </span>
              <span>
                <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Call anytime
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 font-display text-lg font-bold text-white">
                  (403) 555-0199
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 px-5 py-4 backdrop-blur-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <MapPin className="h-4 w-4 text-white/70" strokeWidth={2.25} />
              </span>
              <span>
                <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Coverage
                </span>
                <span className="mt-0.5 block font-display text-lg font-bold text-white">
                  Calgary Metro
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-3">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigate
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Services
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {CATEGORY_ORDER.map((category) => (
                <li key={category}>
                  <Link
                    href="/#services"
                    className="font-sans text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Status
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
              </span>
              <span className="font-sans text-sm font-medium text-white/70">
                Dispatching 24/7
              </span>
            </div>
            <p className="mt-4 max-w-[16rem] font-sans text-sm leading-relaxed text-white/50">
              Heating, cooling &amp; plumbing emergencies handled around the
              clock, every day of the year.
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} Hot and Cool HVAC. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/40">
            Calgary, Alberta
          </p>
        </div>
      </div>
    </footer>
  );
}
