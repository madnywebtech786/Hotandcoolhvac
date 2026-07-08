"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { services } from "../constants/servicesData";
import { CATEGORY_ORDER } from "../constants/serviceMeta";

const SERVICES_BY_CATEGORY = CATEGORY_ORDER.reduce((acc, category) => {
  acc[category] = services.filter((service) => service.category === category);
  return acc;
}, {});

export default function ServiceMultiSelect({ value, onChange, name = "services" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (slug) => {
    if (value.includes(slug)) {
      onChange(value.filter((item) => item !== slug));
    } else {
      onChange([...value, slug]);
    }
  };

  const removeService = (slug, event) => {
    event.stopPropagation();
    onChange(value.filter((item) => item !== slug));
  };

  return (
    <div ref={containerRef} className="relative">
      {value.map((slug) => (
        <input key={slug} type="hidden" name={name} value={slug} />
      ))}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border bg-surface px-4 py-3 text-left transition-colors duration-200 ${
          isOpen ? "border-arc-500" : "border-line-strong hover:border-arc-300"
        }`}
      >
        {value.length === 0 ? (
          <span className="font-sans text-sm text-ink-faint">
            Select the services you need
          </span>
        ) : (
          <span className="flex flex-wrap gap-2">
            {value.map((slug) => {
              const service = services.find((item) => item.slug === slug);
              return (
                <span
                  key={slug}
                  className="bg-gradient-brand inline-flex items-center gap-1.5 rounded-full py-1 pl-3 pr-1.5 font-sans text-xs font-semibold text-white"
                >
                  {service?.title}
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(event) => removeService(slug, event)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        removeService(slug, event);
                      }
                    }}
                    className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
                    aria-label={`Remove ${service?.title}`}
                  >
                    <X className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                </span>
              );
            })}
          </span>
        )}

        <ChevronDown
          className={`h-4 w-4 shrink-0 text-ink-faint transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2.25}
        />
      </button>

      <div
        className={`absolute z-20 mt-2 w-full origin-top rounded-2xl border border-line bg-surface-raised shadow-lift transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="max-h-80 overflow-y-auto p-2">
          {CATEGORY_ORDER.map((category) => (
            <div key={category} className="mb-1 last:mb-0">
              <p className="px-3 pb-1 pt-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                {category}
              </p>
              {SERVICES_BY_CATEGORY[category].map((service) => {
                const isSelected = value.includes(service.slug);
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => toggleService(service.slug)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 ${
                      isSelected ? "bg-surface-alt" : "hover:bg-surface-alt"
                    }`}
                  >
                    <span className="font-sans text-sm font-medium text-ink">
                      {service.title}
                    </span>
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-150 ${
                        isSelected
                          ? "bg-gradient-brand border-transparent"
                          : "border-line-strong"
                      }`}
                    >
                      {isSelected ? (
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
