import { CloudRain, Thermometer, BadgePercent } from "lucide-react";

export const deals = [
  {
    id: "furnace-humidifier",
    code: "DEAL-01",
    spec: "SYS-HTG · HUMIDIFIER",
    icon: CloudRain,
    eyebrow: "Heating",
    title: "Free humidifier",
    subtitle: "with complete furnace installation",
    description:
      "Book a complete furnace installation and we'll include a whole-home humidifier at no extra cost, for balanced humidity all winter, without the separate install fee.",
    value: "Free",
    valueLabel: "humidifier included",
    terms: "Valid on complete furnace installations only. Cannot be combined with other offers.",
    ctaHref: "/services/furnace-installation",
    ctaLabel: "View furnace installation",
  },
  {
    id: "ac-thermostat",
    code: "DEAL-02",
    spec: "SYS-CLG · THERMOSTAT",
    icon: Thermometer,
    eyebrow: "Cooling",
    title: "Free thermostat",
    subtitle: "with complete AC installation",
    description:
      "Install a new air conditioning system with us and get a smart thermostat included, so you can dial in the exact comfort you want from day one.",
    value: "Free",
    valueLabel: "thermostat included",
    terms: "Valid on complete air conditioning installations only. Cannot be combined with other offers.",
    ctaHref: "/services/air-conditioning-installation",
    ctaLabel: "View AC installation",
  },
  {
    id: "first-time-25-off",
    code: "DEAL-03",
    spec: "SYS-NEW · $25 CREDIT",
    icon: BadgePercent,
    eyebrow: "New customers",
    title: "$25 off",
    subtitle: "your first service call",
    description:
      "First time booking with Hot and Cool HVAC? Take $25 off your first service call: heating, cooling, or plumbing, any issue, anywhere in Calgary Metro.",
    value: "$25",
    valueLabel: "off first visit",
    terms: "Valid for first-time customers only, one redemption per household. Cannot be combined with other offers.",
    ctaHref: "/contact",
    ctaLabel: "Book your first visit",
  },
];
