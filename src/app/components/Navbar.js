"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowUpRight, ChevronDown, User, Target, Users } from "lucide-react";
import { services } from "../constants/servicesData";
import { CATEGORY_ORDER, SERVICE_ICONS } from "../constants/serviceMeta";

const ABOUT_LINKS = [
  { label: "About Us", href: "/about", description: "Our story, mission & values", icon: User },
  { label: "Mission & Vision", href: "/mission-vision", description: "What drives everything we do", icon: Target },
  { label: "Our Team", href: "/team", description: "Meet the technicians", icon: Users },
];

const HOME_LINK = { label: "Home", href: "/" };

const NAV_LINKS = [
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_BY_CATEGORY = CATEGORY_ORDER.reduce((acc, category) => {
  acc[category] = services.filter((service) => service.category === category);
  return acc;
}, {});

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const aboutCloseTimeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeoutRef.current);
      clearTimeout(aboutCloseTimeoutRef.current);
    };
  }, []);

  const openServicesMenu = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const scheduleCloseServicesMenu = () => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const openAboutMenu = () => {
    clearTimeout(aboutCloseTimeoutRef.current);
    setIsAboutOpen(true);
  };

  const scheduleCloseAboutMenu = () => {
    clearTimeout(aboutCloseTimeoutRef.current);
    aboutCloseTimeoutRef.current = setTimeout(() => setIsAboutOpen(false), 150);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setOpenMobileCategory(null);
    setIsMobileAboutOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-7xl px-4 sm:top-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 rounded-full border border-line bg-surface-raised/80 py-3 pl-5 pr-3 shadow-lift backdrop-blur-md">
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink">
            Hot<span className="text-gradient-brand">&amp;</span>Cool
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href={HOME_LINK.href}
              className="rounded-full px-4 py-2 font-sans text-sm font-medium text-ink-soft transition-colors duration-200 hover:bg-surface-alt hover:text-ink"
            >
              {HOME_LINK.label}
            </Link>

            {/* About dropdown */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={openAboutMenu}
              onMouseLeave={scheduleCloseAboutMenu}
            >
              <button
                type="button"
                onClick={() => setIsAboutOpen((open) => !open)}
                aria-expanded={isAboutOpen}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors duration-200 ${
                  isAboutOpen ? "bg-surface-alt text-ink" : "text-ink-soft hover:bg-surface-alt hover:text-ink"
                }`}
              >
                About
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.25}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full z-20 mt-3 w-80 -translate-x-1/2 origin-top rounded-3xl border border-line bg-surface-raised p-3 shadow-lift transition-all duration-200 ${
                  isAboutOpen
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-1">
                  {ABOUT_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsAboutOpen(false)}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-surface-alt"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-surface text-ink-soft transition-colors duration-150 group-hover:border-arc-300 group-hover:text-arc-600">
                        <link.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span>
                        <span className="block font-sans text-sm font-medium text-ink">
                          {link.label}
                        </span>
                        <span className="block font-sans text-xs text-ink-faint">
                          {link.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServicesMenu}
              onMouseLeave={scheduleCloseServicesMenu}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((open) => !open)}
                aria-expanded={isServicesOpen}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors duration-200 ${
                  isServicesOpen ? "bg-surface-alt text-ink" : "text-ink-soft hover:bg-surface-alt hover:text-ink"
                }`}
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.25}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full z-20 mt-3 w-xl -translate-x-1/2 origin-top rounded-3xl border border-line bg-surface-raised p-3 shadow-lift transition-all duration-200 ${
                  isServicesOpen
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                <div className="grid max-h-104 grid-cols-2 gap-1 overflow-y-auto p-1">
                  {CATEGORY_ORDER.map((category) => (
                    <div key={category} className="mb-1">
                      <p className="px-3 pb-1 pt-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                        {category}
                      </p>
                      {SERVICES_BY_CATEGORY[category].map((service) => {
                        const Icon = SERVICE_ICONS[service.slug];
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-surface-alt"
                          >
                            {Icon ? (
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-surface text-ink-soft transition-colors duration-150 group-hover:border-arc-300 group-hover:text-arc-600">
                                <Icon className="h-4 w-4" strokeWidth={2} />
                              </span>
                            ) : null}
                            <span className="font-sans text-sm font-medium text-ink">
                              {service.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>

                <Link
                  href="/#services"
                  onClick={() => setIsServicesOpen(false)}
                  className="mt-1 flex items-center justify-center gap-1.5 rounded-2xl bg-surface-alt px-4 py-3 font-sans text-sm font-semibold text-ink-soft transition-colors hover:text-arc-600"
                >
                  View all services
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </Link>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 font-sans text-sm font-medium text-ink-soft transition-colors duration-200 hover:bg-surface-alt hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+14035550199"
              className="bg-gradient-brand hidden items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2.25} />
              (403) 555-0199
            </a>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface-alt lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right-to-left drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-surface-raised shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

        <div className="relative flex items-center justify-between border-b border-line px-6 py-5">
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Hot<span className="text-gradient-brand">&amp;</span>Cool
          </span>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface-alt"
          >
            <X className="h-4 w-4" strokeWidth={2.25} />
          </button>
        </div>

        <nav className="relative flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          <Link
            href={HOME_LINK.href}
            onClick={closeDrawer}
            className={`group flex items-center justify-between rounded-2xl px-4 py-4 font-display text-lg font-semibold text-ink transition-all duration-300 hover:bg-surface-alt ${
              isDrawerOpen ? "animate-rise-in" : ""
            }`}
            style={{ animationDelay: isDrawerOpen ? "0s" : "0s" }}
          >
            {HOME_LINK.label}
            <ArrowUpRight className="h-4 w-4 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>

          {/* About accordion */}
          <div
            className={`border-b border-line ${isDrawerOpen ? "animate-rise-in" : ""}`}
            style={{ animationDelay: isDrawerOpen ? "0.05s" : "0s" }}
          >
            <button
              type="button"
              onClick={() => setIsMobileAboutOpen((open) => !open)}
              aria-expanded={isMobileAboutOpen}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-4 font-display text-lg font-semibold text-ink transition-colors duration-200 hover:bg-surface-alt"
            >
              About
              <ChevronDown
                className={`h-4 w-4 text-ink-faint transition-transform duration-300 ${
                  isMobileAboutOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2.25}
              />
            </button>

            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isMobileAboutOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-0.5 pb-2 pl-2 pr-2">
                  {ABOUT_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeDrawer}
                      className="rounded-xl px-4 py-2.5 font-sans text-sm font-medium text-ink-soft transition-colors hover:bg-surface-alt hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services accordion */}
          <div
            className={isDrawerOpen ? "animate-rise-in" : ""}
            style={{ animationDelay: isDrawerOpen ? "0.1s" : "0s" }}
          >
            {CATEGORY_ORDER.map((category) => {
              const isCategoryOpen = openMobileCategory === category;
              return (
                <div key={category} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileCategory(isCategoryOpen ? null : category)
                    }
                    aria-expanded={isCategoryOpen}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-4 font-display text-lg font-semibold text-ink transition-colors duration-200 hover:bg-surface-alt"
                  >
                    {category}
                    <ChevronDown
                      className={`h-4 w-4 text-ink-faint transition-transform duration-300 ${
                        isCategoryOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2.25}
                    />
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isCategoryOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-0.5 pb-2 pl-2 pr-2">
                        {SERVICES_BY_CATEGORY[category].map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={closeDrawer}
                            className="rounded-xl px-4 py-2.5 font-sans text-sm font-medium text-ink-soft transition-colors hover:bg-surface-alt hover:text-ink"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeDrawer}
              className={`group flex items-center justify-between rounded-2xl px-4 py-4 font-display text-lg font-semibold text-ink transition-all duration-300 hover:bg-surface-alt ${
                isDrawerOpen ? "animate-rise-in" : ""
              }`}
              style={{ animationDelay: isDrawerOpen ? `${0.15 + index * 0.05}s` : "0s" }}
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        <div className="relative border-t border-line p-4">
          <a
            href="tel:+14035550199"
            onClick={closeDrawer}
            className="bg-gradient-brand flex items-center justify-center gap-2.5 rounded-full px-6 py-4 font-sans text-sm font-semibold text-white shadow-lift"
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} />
            (403) 555-0199
          </a>
          <p className="mt-3 text-center font-sans text-xs text-ink-faint">
            Available 24/7 for emergencies
          </p>
        </div>
      </div>
    </>
  );
}
