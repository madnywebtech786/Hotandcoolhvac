import { siteConfig } from "../constants/siteConfig";

function sanitize(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function buildLocalBusinessJsonLd() {
  return sanitize({
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.logo}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    priceRange: "$$",
    areaServed: siteConfig.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry,
    },
    sameAs: siteConfig.sameAs,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  });
}

export function buildServiceJsonLd(service) {
  return sanitize({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.seo.metaTitle,
    description: service.seo.metaDescription,
    url: `${siteConfig.url}/services/${service.slug}`,
    category: service.category,
    areaServed: siteConfig.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    provider: {
      "@type": "HVACBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
  });
}

export function buildFaqPageJsonLd(faqs) {
  return sanitize({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

export function buildBreadcrumbJsonLd(items) {
  return sanitize({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  });
}
