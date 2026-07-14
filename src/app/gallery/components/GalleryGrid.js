import Image from "next/image";
import { galleryImages } from "../../constants/galleryData";

export default function GalleryGrid() {
  return (
    <section className="relative bg-surface pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
          {galleryImages.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              data-gallery-index={index}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-line bg-surface-alt text-left shadow-soft transition-shadow duration-300 hover:shadow-lift sm:mb-5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
