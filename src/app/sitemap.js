import { services } from "./constants/servicesData";
import { siteConfig } from "./constants/siteConfig";

export default function sitemap() {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mission-vision", priority: 0.5, changeFrequency: "yearly" },
    { path: "/team", priority: 0.5, changeFrequency: "monthly" },
    { path: "/deals", priority: 0.8, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ].map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
