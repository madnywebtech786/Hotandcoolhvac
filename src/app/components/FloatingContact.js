import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./BrandIcons";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
];

const WHATSAPP_HREF = "https://wa.me/14035550199";

export default function FloatingContact() {
  return (
    <>
      {/* Sticky social cluster — center-right of the viewport */}
      <div
        aria-label="Follow us on social media"
        className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 sm:right-4 sm:flex lg:right-6"
      >
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface-raised/90 text-ink-soft shadow-lift backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:border-arc-500 hover:text-arc-600"
          >
            <Icon className="h-4.5 w-4.5" />
          </a>
        ))}
      </div>

      {/* WhatsApp button — fixed bottom-right, all breakpoints */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366] opacity-40" />
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>

      {/* Mobile fallback for the social cluster — inline row above the WhatsApp button */}
      <div
        aria-label="Follow us on social media"
        className="fixed bottom-24 right-4 z-40 flex flex-col gap-2.5 sm:hidden"
      >
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface-raised/90 text-ink-soft shadow-lift backdrop-blur-sm transition-colors duration-300 hover:border-arc-500 hover:text-arc-600"
          >
            <Icon className="h-4.5 w-4.5" />
          </a>
        ))}
      </div>
    </>
  );
}
