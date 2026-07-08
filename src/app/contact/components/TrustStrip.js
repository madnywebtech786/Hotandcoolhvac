import { ShieldCheck, Clock3, BadgeCheck, Wrench } from "lucide-react";

const SIGNALS = [
  {
    icon: ShieldCheck,
    value: "Licensed",
    label: "& fully insured technicians",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "emergency dispatch",
  },
  {
    icon: BadgeCheck,
    value: "Upfront",
    label: "pricing, no hidden fees",
  },
  {
    icon: Wrench,
    value: "Guaranteed",
    label: "workmanship on every job",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-surface pb-4 sm:pb-8">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-soft sm:grid-cols-4">
          {SIGNALS.map((signal) => (
            <div
              key={signal.value}
              className="flex flex-col gap-3 bg-surface-raised px-5 py-6 sm:px-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line-strong bg-surface-alt text-arc-600">
                <signal.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink sm:text-lg">
                  {signal.value}
                </p>
                <p className="mt-0.5 font-sans text-xs leading-snug text-ink-faint">
                  {signal.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
