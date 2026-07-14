import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:gap-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-2 font-sans text-xs font-medium text-white/70 sm:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-500" />
          </span>
          Available 24/7 for emergencies
        </div>

        <a
          href="mailto:hotandcoolhvacltd@gmail.com"
          className="flex min-w-0 items-center gap-1.5 font-sans text-[11px] font-medium text-white/70 transition-colors hover:text-white sm:text-xs"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          <span className="truncate">hotandcoolhvacltd@gmail.com</span>
        </a>

        <a
          href="tel:+14036336911"
          className="flex shrink-0 items-center gap-1.5 font-sans text-[11px] font-semibold text-white transition-colors hover:text-arc-300 sm:text-xs"
        >
          <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} />
          403-633-6911
        </a>
      </div>
    </div>
  );
}
