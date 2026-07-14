"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_CATEGORIES } from "../constants/faqData";

const NAV_OFFSET = 144; // matches scroll-mt-36 used elsewhere for the fixed navbar

export default function FaqCategoryConsole() {
  const [activeKey, setActiveKey] = useState(FAQ_CATEGORIES[0].key);
  const [openId, setOpenId] = useState(`${FAQ_CATEGORIES[0].key}-0`);
  const sectionRefs = useRef({});
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        // Pick the entry closest to the top of the viewport among those intersecting.
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
        );
        setActiveKey(topMost.target.dataset.categoryKey);
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (key) => {
    const node = sectionRefs.current[key];
    if (!node) return;

    isClickScrolling.current = true;
    setActiveKey(key);

    const top = node.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });

    window.clearTimeout(scrollToCategory._timeout);
    scrollToCategory._timeout = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <section className="relative bg-surface pb-24 sm:pb-32">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Category selector rail, scroll-spy driven */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Browse by category
            </p>

            {/* Mobile: horizontal scroll tabs */}
            <div className="scrollbar-none mt-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = category.key === activeKey;
                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => scrollToCategory(category.key)}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 font-sans text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-brand border-transparent text-white shadow-lift"
                        : "border-line-strong bg-surface-raised text-ink-soft"
                    }`}
                  >
                    <category.icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop: vertical console list */}
            <div className="mt-4 hidden flex-col gap-1.5 lg:flex">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = category.key === activeKey;
                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => scrollToCategory(category.key)}
                    aria-current={isActive}
                    className={`group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-transparent bg-ink shadow-lift"
                        : "border-line bg-surface-raised hover:border-line-strong"
                    }`}
                  >
                    {isActive ? (
                      <span
                        className="bg-gradient-brand absolute inset-y-0 left-0 w-1"
                        aria-hidden="true"
                      />
                    ) : null}

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                        isActive
                          ? "border-white/15 bg-white/10 text-white"
                          : "border-line-strong bg-surface-alt text-ink-soft group-hover:text-arc-600"
                      }`}
                    >
                      <category.icon className="h-4 w-4" strokeWidth={2} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-sans text-sm font-semibold transition-colors duration-300 ${
                          isActive ? "text-white" : "text-ink"
                        }`}
                      >
                        {category.label}
                      </span>
                      <span
                        className={`block truncate font-sans text-xs transition-colors duration-300 ${
                          isActive ? "text-white/50" : "text-ink-faint"
                        }`}
                      >
                        {category.tagline}
                      </span>
                    </span>

                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 font-sans text-[11px] font-semibold tabular-nums transition-colors duration-300 ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-surface-alt text-ink-faint"
                      }`}
                    >
                      {category.faqs.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Continuous feed, every category's FAQs stacked in their own section */}
          <div className="flex flex-col gap-16">
            {FAQ_CATEGORIES.map((category) => (
              <div
                key={category.key}
                id={`faq-${category.key}`}
                data-category-key={category.key}
                ref={(node) => {
                  sectionRefs.current[category.key] = node;
                }}
                className="scroll-mt-36"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-surface-alt text-arc-600">
                    <category.icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {category.label}
                      <span className="text-gradient-brand"> questions.</span>
                    </h2>
                    <p className="mt-0.5 font-sans text-sm text-ink-faint">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4">
                  {category.faqs.map((faq, index) => {
                    const id = `${category.key}-${index}`;
                    const isOpen = openId === id;

                    return (
                      <div
                        key={faq.question}
                        className={`overflow-hidden rounded-2xl border bg-surface-raised shadow-soft transition-colors duration-300 ${
                          isOpen ? "border-arc-300" : "border-line"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : id)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center gap-4 px-6 py-5 text-left"
                        >
                          <span
                            className={`font-display text-sm font-bold transition-colors duration-300 ${
                              isOpen ? "text-gradient-brand" : "text-ink-faint"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="flex-1 font-display text-base font-semibold leading-snug text-ink sm:text-lg">
                            {faq.question}
                          </span>

                          <span
                            className={`bg-gradient-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-soft transition-transform duration-300 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            <Plus className="h-4 w-4 text-white" strokeWidth={2.5} />
                          </span>
                        </button>

                        <div
                          className="grid transition-all duration-300 ease-in-out"
                          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <p className="px-6 pb-6 pl-[3.25rem] font-sans text-sm leading-relaxed text-ink-soft sm:pl-[3.5rem]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
