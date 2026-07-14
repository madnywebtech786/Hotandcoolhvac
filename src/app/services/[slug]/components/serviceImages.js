// Real per-service photography, one image per slug at
// public/images/services/{slug}.webp.
export function getServiceImage(slug) {
  return `/images/services/${slug}.webp`;
}
