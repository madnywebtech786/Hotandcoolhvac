// A glowing junction node on the circuit trace, reused for the icon anchor
// and the terminal endpoint of each deal's schematic.
export default function CircuitNode({ children, size = "lg" }) {
  const dimensions = size === "lg" ? "h-16 w-16" : "h-10 w-10";

  return (
    <span className={`relative flex shrink-0 items-center justify-center ${dimensions}`}>
      <span className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-30 blur-md" />
      <span className="bg-gradient-brand relative flex h-full w-full items-center justify-center rounded-2xl border border-white/40 shadow-lift">
        {children}
      </span>
    </span>
  );
}
