import { notFound } from "next/navigation";
import { servicesData, getServiceData, serviceSlugs } from "../../../lib/servicesData";
import ServiceHero from "../../../components/ServiceHero";
import ServiceAbout from "../../../components/ServiceAbout";
import ServiceFeatures from "../../../components/ServiceFeatures";

import ServiceIncluded from "../../../components/ServiceIncluded";
import ServiceWhyUs from "../../../components/ServiceWhyUs";
import ServiceDestinations from "../../../components/ServiceDestinations";
import ServiceFAQ from "../../../components/ServiceFAQ";
import ServiceCTA from "../../../components/ServiceCTA";
import ServiceRelated from "../../../components/ServiceRelated";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceData(params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} | The Get Set Go Holidays`,
    description: service.subtitle,
    openGraph: {
      title: `${service.name} | The Get Set Go Holidays`,
      description: service.subtitle,
      images: [{ url: service.heroImage, width: 1200, height: 630 }],
    },
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceData(params.slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ServiceAbout content={service.content} />
      <ServiceFeatures features={service.features} />

      <ServiceIncluded items={service.included} />
      <ServiceWhyUs items={service.whyChooseUs} />
      <ServiceDestinations destinations={service.destinations} />
      <ServiceFAQ faqs={service.faqs} />
      <ServiceCTA heroImage={service.heroImage} />
      <ServiceRelated currentSlug={service.slug} />
    </>
  );
}
