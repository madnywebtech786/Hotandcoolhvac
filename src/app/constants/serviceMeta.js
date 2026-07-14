import {
  Flame,
  Wrench,
  Siren,
  Gauge,
  Snowflake,
  ShoppingBag,
  Waves,
  ToiletIcon,
  ShieldAlert,
  PipetteIcon,
  Replace,
  Droplets,
  ArrowDownToLine,
  FlaskConical,
  Wind,
  CloudRain,
  Filter,
} from "lucide-react";

export const CATEGORY_ORDER = ["Heating", "Cooling", "Plumbing", "HVAC"];

export const SERVICE_ICONS = {
  "furnace-repair": Wrench,
  "furnace-installation": Flame,
  "emergency-heating-support": Siren,
  "furnace-tune-up": Gauge,
  "air-conditioning-installation": Snowflake,
  "air-conditioning-repair": Wrench,
  "air-conditioning-tune-up": Gauge,
  "air-conditioner-sales": ShoppingBag,
  "drain-cleaning-augering": Waves,
  "toilet-repairs-replacements": ToiletIcon,
  "boiler-repair-emergency-services": ShieldAlert,
  "emergency-plumbing-services": PipetteIcon,
  "poly-b-pipe-replacement": Replace,
  "kitec-in-floor-heating-replacement": Replace,
  "water-softener-installation-services": Droplets,
  "sump-pump-installation-replacement": ArrowDownToLine,
  "hot-water-tank-repair": FlaskConical,
  "tankless-water-heater-installation-services": FlaskConical,
  "tankless-water-heater-repair-services": FlaskConical,
  "residential-duct-cleaning": Wind,
  "humidifier-installation": CloudRain,
  "water-purification-system": Filter,
};

export const SERVICE_SUMMARIES = {
  "furnace-repair":
    "Fast, accurate diagnostics to restore reliable heat from any major furnace brand.",
  "furnace-installation":
    "Properly sized, professionally installed furnaces built for Calgary winters.",
  "emergency-heating-support":
    "Round-the-clock response when your heat fails and can't wait until morning.",
  "furnace-tune-up":
    "Preventative maintenance that catches small issues before they become breakdowns.",
  "air-conditioning-installation":
    "Right-sized cooling systems installed for quiet, efficient summer comfort.",
  "air-conditioning-repair":
    "Precise repairs that restore cooling fast and address the root cause.",
  "air-conditioning-tune-up":
    "Seasonal inspections that keep your AC efficient before the heat arrives.",
  "air-conditioner-sales":
    "Honest guidance to help you choose the right high-efficiency system.",
  "drain-cleaning-augering":
    "Professional-grade clearing for stubborn clogs and slow-draining fixtures.",
  "toilet-repairs-replacements":
    "Reliable repairs and replacements that solve the problem at its source.",
  "boiler-repair-emergency-services":
    "Expert boiler diagnostics and repairs, including 24/7 emergency response.",
  "emergency-plumbing-services":
    "Rapid response for burst pipes, major leaks, and urgent plumbing failures.",
  "poly-b-pipe-replacement":
    "Proactive repiping that protects your home from aging Poly-B failures.",
  "kitec-in-floor-heating-replacement":
    "Complete replacement of aging Kitec plumbing and radiant heating systems.",
  "water-softener-installation-services":
    "Hard water treatment systems that protect your plumbing and appliances.",
  "sump-pump-installation-replacement":
    "Dependable basement protection against flooding and water intrusion.",
  "hot-water-tank-repair":
    "Prompt repairs to restore consistent, reliable hot water.",
  "tankless-water-heater-installation-services":
    "On-demand hot water systems installed for efficiency and space savings.",
  "tankless-water-heater-repair-services":
    "Specialized diagnostics and repair for tankless water heating systems.",
  "residential-duct-cleaning":
    "Cleaner air and better HVAC efficiency through professional duct cleaning.",
  "humidifier-installation":
    "Whole-home humidifiers that fix dry winter air, static shock, and cracked floors.",
  "water-purification-system":
    "Whole-home filtration for cleaner, better-tasting water at every tap.",
};
