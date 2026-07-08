import { notFound } from "next/navigation";
import { services } from "../../constants/servicesData";
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
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <ServiceHero service={service} />
      <ServiceContent service={service} />
      <ServiceWhyChooseUs service={service} />
      <ServiceBenefits service={service} />
      <ServiceFaqs service={service} />
      <ServiceCta service={service} />
    </div>
  );
}
