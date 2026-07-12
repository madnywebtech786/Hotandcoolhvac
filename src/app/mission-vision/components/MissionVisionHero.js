import { Compass } from "lucide-react";

export default function MissionVisionHero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.4] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="animate-drift absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-arc-100/70 blur-3xl" />
        <div
          className="animate-drift absolute top-1/3 -right-32 h-[24rem] w-[24rem] rounded-full bg-ember-100/60 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div
          className="animate-rise-in mx-auto flex w-fit items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 shadow-soft"
          style={{ animationDelay: "0.05s" }}
        >
          <Compass className="h-3.5 w-3.5 text-arc-600" strokeWidth={2.25} />
          <span className="font-sans text-sm font-medium tracking-wide text-ink-soft">
            What drives us
          </span>
        </div>

        <h1
          className="animate-rise-in mx-auto mt-7 max-w-3xl text-center font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
          style={{ animationDelay: "0.15s" }}
        >
          Mission
          <span className="text-gradient-brand"> &amp; vision.</span>
        </h1>

        <p
          className="animate-rise-in mx-auto mt-6 max-w-xl text-center font-sans text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "0.25s" }}
        >
          The standard we hold ourselves to on every call, and the reputation
          we're building one Calgary home at a time.
        </p>
      </div>
    </section>
  );
}
