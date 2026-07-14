// A horizontal schematic trace connecting an icon node to a terminal node,
// styled like current flowing through a circuit — the signature visual
// device of the Deals page. `flip` mirrors the flow direction for
// alternating sections.
export default function CircuitTrace({ flip = false }) {
  return (
    <svg
      className={`h-full w-full ${flip ? "scale-x-[-1]" : ""}`}
      viewBox="0 0 400 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 L140 20 L160 6 L180 34 L200 6 L220 34 L240 20 L400 20"
        stroke="var(--color-line-strong)"
        strokeWidth="2"
      />
      <path
        d="M0 20 L140 20 L160 6 L180 34 L200 6 L220 34 L240 20 L400 20"
        stroke="url(#circuit-gradient)"
        strokeWidth="2.5"
        strokeDasharray="10 14"
        className="animate-circuit-flow"
      />
      <defs>
        <linearGradient id="circuit-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-ember-500)" />
          <stop offset="1" stopColor="var(--color-arc-500)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
