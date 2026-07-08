import { Flame, Snowflake, Droplets, Wind, LayoutGrid } from "lucide-react";

// Category-level FAQ content, written fresh rather than reused from the
// per-service FAQ lists in servicesData.js — those are service-specific
// ("do you repair all furnace brands"), these are category-wide concerns
// a homeowner has before they've even picked a service.
export const FAQ_CATEGORIES = [
  {
    key: "general",
    label: "General",
    icon: LayoutGrid,
    tagline: "Booking, pricing & how we work",
    faqs: [
      {
        question: "Do you offer 24/7 emergency service?",
        answer:
          "Yes. Heating, cooling, and plumbing emergencies don't wait for business hours, and neither do we. Our technicians are available around the clock to respond to urgent breakdowns throughout Calgary and surrounding communities.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "Hot and Cool HVAC proudly serves homeowners throughout Calgary and the surrounding communities, including all quadrants of the city.",
      },
      {
        question: "Will you give me an honest recommendation, or just try to sell a replacement?",
        answer:
          "We believe in honest, upfront advice. If a repair is the right call, we'll explain exactly what's needed and complete quality work. If replacement truly offers better long-term value, we'll walk you through your options without pressure.",
      },
      {
        question: "How quickly can a technician reach my home?",
        answer:
          "We prioritize fast response times across Calgary and surrounding areas, especially for urgent heating, cooling, and plumbing emergencies where every hour matters.",
      },
      {
        question: "How much will my service call cost?",
        answer:
          "Every home and issue is different, so we provide clear, upfront pricing before any work begins — no hidden fees and no surprises on the invoice. You'll always know the cost and what it covers before we start.",
      },
      {
        question: "Are your technicians licensed and insured?",
        answer:
          "Yes. Every technician we send is licensed, background-checked, and fully insured, so you can feel confident having them in your home.",
      },
      {
        question: "How do I book a service call?",
        answer:
          "Call us directly for the fastest response, or submit a request through our online form with your details and the service you need. We'll follow up promptly to schedule a visit.",
      },
      {
        question: "Do you offer any guarantee on your work?",
        answer:
          "Yes. Every repair and installation is backed by our workmanship guarantee, so if something isn't right after we leave, we'll make it right.",
      },
    ],
  },
  {
    key: "heating",
    label: "Heating",
    icon: Flame,
    tagline: "Furnaces, boilers & winter comfort",
    faqs: [
      {
        question: "Do you repair all furnace, AC, and boiler brands?",
        answer:
          "Our technicians repair most major furnace, air conditioning, and boiler brands, along with modern high-efficiency systems commonly installed in Calgary homes.",
      },
      {
        question: "How often should my furnace be serviced?",
        answer:
          "We recommend a professional tune-up once a year, ideally before winter sets in. Regular maintenance catches small issues early and keeps your system running efficiently through Calgary's coldest months.",
      },
      {
        question: "Why does my heating bill keep climbing even though I haven't changed anything?",
        answer:
          "Rising bills usually point to declining efficiency — clogged filters, aging components, or a system working harder than it should. A diagnostic visit can identify exactly what's driving the increase.",
      },
      {
        question: "How long does a furnace or boiler typically last?",
        answer:
          "Most furnaces last 15 to 20 years and boilers can last even longer with proper maintenance. Age alone isn't always a reason to replace — we'll assess your system's actual condition before recommending anything.",
      },
      {
        question: "What's the difference between repairing and replacing my heating system?",
        answer:
          "It comes down to age, repair history, and efficiency. If your system is older, has needed frequent repairs, or is significantly less efficient than newer models, replacement often makes better long-term financial sense — we'll walk you through the real numbers either way.",
      },
      {
        question: "Is it normal for my furnace to make noise when it starts up?",
        answer:
          "A brief hum or click on startup is normal. Banging, squealing, or grinding noises are not, and usually signal a component that needs attention before it fails completely.",
      },
    ],
  },
  {
    key: "cooling",
    label: "Cooling",
    icon: Snowflake,
    tagline: "Air conditioning & summer readiness",
    faqs: [
      {
        question: "When should I schedule my AC tune-up?",
        answer:
          "Spring, before the first heat wave hits, is ideal. It gives us time to catch and fix any issues while your system is idle, rather than during the peak of summer when repairs take longer to schedule.",
      },
      {
        question: "What size air conditioner do I need for my home?",
        answer:
          "Sizing depends on your home's square footage, layout, insulation, and window exposure — not just a rule of thumb. We calculate proper sizing so your system cools evenly without short-cycling or wasting energy.",
      },
      {
        question: "Why is my AC running but not cooling the house?",
        answer:
          "This is usually caused by low refrigerant, a dirty condenser coil, a failing compressor, or airflow restrictions. It's rarely something to diagnose over the phone — a technician can pinpoint the cause quickly on-site.",
      },
      {
        question: "How often should I change my air filter?",
        answer:
          "Most households should change their filter every 1 to 3 months, more often if you have pets or run your system heavily during summer. A clogged filter is one of the most common — and most avoidable — causes of cooling problems.",
      },
      {
        question: "Is it worth upgrading to a high-efficiency air conditioner?",
        answer:
          "If your current unit is older or you're facing a major repair, a high-efficiency system can meaningfully lower your summer energy bills. We'll give you honest guidance based on your specific system and usage, not a blanket recommendation.",
      },
    ],
  },
  {
    key: "plumbing",
    label: "Plumbing",
    icon: Droplets,
    tagline: "Pipes, drains & water systems",
    faqs: [
      {
        question: "Do you handle both HVAC and plumbing issues?",
        answer:
          "Yes. From furnace and air conditioning repair to drain cleaning, toilet replacement, and water heater service, our technicians cover the full range of home comfort and plumbing needs.",
      },
      {
        question: "What should I do if I have a burst pipe or major leak?",
        answer:
          "Shut off your home's main water valve immediately to limit damage, then call us right away. Burst pipes and major leaks are treated as emergencies, with technicians dispatched as quickly as possible.",
      },
      {
        question: "How do I know if my home has Poly-B or Kitec plumbing?",
        answer:
          "These materials were common in Calgary-area homes built between the 1980s and early 2000s. If you're unsure what's behind your walls, we can inspect your plumbing and let you know whether replacement should be a priority.",
      },
      {
        question: "Why does my drain keep clogging even after I clear it?",
        answer:
          "Recurring clogs usually mean the blockage wasn't fully cleared, or there's a deeper issue like root intrusion, pipe scaling, or a slope problem. Professional-grade augering reaches further and clears more thoroughly than store-bought tools.",
      },
      {
        question: "How long does a water heater or tankless system last?",
        answer:
          "Traditional tank water heaters typically last 8 to 12 years, while tankless systems can last 15 to 20 years with proper maintenance. We can assess your current unit's condition and tell you honestly whether repair or replacement makes more sense.",
      },
      {
        question: "Do you offer emergency plumbing service outside business hours?",
        answer:
          "Yes. Plumbing emergencies like burst pipes, major leaks, and sewer backups are handled 24/7, because water damage doesn't wait for morning.",
      },
    ],
  },
  {
    key: "hvac",
    label: "HVAC",
    icon: Wind,
    tagline: "Air quality & whole-home systems",
    faqs: [
      {
        question: "How often should my air ducts be cleaned?",
        answer:
          "Most homes benefit from duct cleaning every 3 to 5 years, though homes with pets, allergies, or recent renovations may need it more frequently. Cleaner ducts mean better airflow and improved indoor air quality.",
      },
      {
        question: "Will duct cleaning actually improve my indoor air quality?",
        answer:
          "Yes. Removing built-up dust, debris, and allergens from your ductwork reduces what's being circulated through your home every time your system runs, which is especially noticeable for household members with allergies or respiratory sensitivities.",
      },
      {
        question: "Does a water softener really make a difference?",
        answer:
          "In hard water areas like Calgary, yes — a softener protects your pipes, water heater, and appliances from mineral buildup, extending their lifespan and improving efficiency, while also making soaps and detergents work better.",
      },
      {
        question: "What's the benefit of a sump pump if my basement has never flooded?",
        answer:
          "A sump pump is preventative protection, not a reactive fix. It's far cheaper to install one before a flood than to deal with water damage, mold remediation, and ruined belongings after the fact.",
      },
      {
        question: "Can you service systems that combine heating, cooling, and air quality equipment?",
        answer:
          "Yes. Our technicians are experienced across full HVAC systems, not just single components, so we can look at how your furnace, air conditioning, ductwork, and air quality equipment work together as a whole.",
      },
    ],
  },
];

export const TOTAL_FAQ_COUNT = FAQ_CATEGORIES.reduce(
  (sum, category) => sum + category.faqs.length,
  0
);
