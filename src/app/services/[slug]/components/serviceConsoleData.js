// Category-level console readout copy for the service hero's diagnostic panel.
// Keeps stats truthful (no fabricated per-service numbers) while still varying
// by category so Heating/Cooling/Plumbing/HVAC each read distinctly.
export const CATEGORY_CONSOLE = {
  Heating: {
    label: "Heating system",
    metric: { name: "Response window", value: "24/7", unit: "dispatch" },
    signal: "Warm",
  },
  Cooling: {
    label: "Cooling system",
    metric: { name: "Response window", value: "24/7", unit: "dispatch" },
    signal: "Cool",
  },
  Plumbing: {
    label: "Plumbing system",
    metric: { name: "Response window", value: "24/7", unit: "dispatch" },
    signal: "Flow",
  },
  HVAC: {
    label: "HVAC system",
    metric: { name: "Response window", value: "24/7", unit: "dispatch" },
    signal: "Air",
  },
};
