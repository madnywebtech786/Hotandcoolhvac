import { ShieldCheck, Clock3, Wrench, MessageSquare, Award, Users } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    description:
      "Every technician is licensed, background-checked, and fully insured before they ever step into your home.",
  },
  {
    icon: Clock3,
    title: "Always available",
    description:
      "Heating, cooling, and plumbing emergencies don't wait for business hours, and our dispatch doesn't either.",
  },
  {
    icon: Wrench,
    title: "Accurate diagnostics",
    description:
      "We diagnose the actual problem before recommending a fix, instead of guessing or upselling.",
  },
  {
    icon: MessageSquare,
    title: "Honest communication",
    description:
      "You'll always know what's wrong, what it costs, and why, explained in plain language, not jargon.",
  },
  {
    icon: Award,
    title: "Quality workmanship",
    description:
      "Every repair and installation is completed to a standard we'd be comfortable with in our own homes.",
  },
  {
    icon: Users,
    title: "Local & accountable",
    description:
      "We're a Calgary business serving Calgary homeowners. Our reputation here is what keeps us honest.",
  },
];

export default function WhyWereTheBest() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft">
            <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
              Why we're different
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            What sets us
            <span className="text-gradient-brand"> apart.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <div
              key={reason.title}
              className="relative overflow-hidden rounded-2xl border border-line bg-surface-raised p-6 shadow-soft"
            >
              <span className="pointer-events-none absolute right-4 top-4 font-display text-2xl font-bold text-ink/8">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="bg-gradient-brand relative inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-soft">
                <reason.icon className="h-5 w-5 text-white" strokeWidth={2} />
              </div>

              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-ink-soft">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
