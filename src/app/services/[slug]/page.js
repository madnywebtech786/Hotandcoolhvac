import { notFound } from "next/navigation";
import { services } from "../../constants/servicesData";
import { buildServiceJsonLd, buildFaqPageJsonLd, buildBreadcrumbJsonLd } from "../../lib/jsonLd";
import ServiceHero from "./components/ServiceHero";
import ServiceContent from "./components/ServiceContent";
import ServiceWhyChooseUs from "./components/ServiceWhyChooseUs";
import ServiceBenefits from "./components/ServiceBenefits";
import ServiceFaqs from "./components/ServiceFaqs";
import ServiceCta from "./components/ServiceCta";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      url: `/services/${slug}`,
      images: [`/images/services/${slug}.webp`],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildServiceJsonLd(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildFaqPageJsonLd(service.faqs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <ServiceHero service={service} />
      <ServiceContent service={service} />
      <ServiceWhyChooseUs service={service} />
      <ServiceBenefits service={service} />
      <ServiceFaqs service={service} />
      <ServiceCta service={service} />
    </div>
  );
}
