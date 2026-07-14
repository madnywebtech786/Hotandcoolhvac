"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../../constants/galleryData";

export default function GalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    function handleGridClick(event) {
      const target = event.target.closest("[data-gallery-index]");
      if (!target) return;
      setActiveIndex(Number(target.dataset.galleryIndex));
    }
    document.addEventListener("click", handleGridClick);
    return () => document.removeEventListener("click", handleGridClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const photo = galleryImages[activeIndex];

  const goNext = () => setActiveIndex((current) => (current + 1) % galleryImages.length);
  const goPrev = () =>
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project photo preview"
      className="fixed inset-0 z-100 bg-ink/90 backdrop-blur-sm"
      onClick={() => setActiveIndex(null)}
    >
      {/* Image layer, sits below the controls layer, click-outside-to-close */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-10 lg:p-16">
        <div
          className="relative h-full max-h-[90vh] w-full max-w-3xl lg:max-h-[92vh] lg:max-w-6xl"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 80vw, 90vw"
            className="mx-auto h-full max-h-[90vh] w-auto rounded-2xl object-contain shadow-lift lg:max-h-[92vh]"
          />
        </div>
      </div>

      {/* Controls layer, always on top, never covered by the image wrapper's hit area */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <button
          type="button"
          onClick={() => setActiveIndex(null)}
          aria-label="Close preview"
          className="pointer-events-auto absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-white transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
        >
          <X className="h-5 w-5" strokeWidth={2.25} />
        </button>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-ink/60 px-3.5 py-1.5 font-sans text-xs font-semibold text-white/70 sm:left-6 sm:top-6">
          {activeIndex + 1} / {galleryImages.length}
        </span>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goPrev();
          }}
          aria-label="Previous photo"
          className="pointer-events-auto absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-white transition-colors hover:bg-white/10 sm:left-5"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
          aria-label="Next photo"
          className="pointer-events-auto absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-white transition-colors hover:bg-white/10 sm:right-5"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
        </button>
      </div>
    </div>
  );
}
