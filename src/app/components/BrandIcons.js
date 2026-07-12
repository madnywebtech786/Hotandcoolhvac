// Lucide only ships generic glyphs, not brand marks — these are minimal
// inline SVGs for the actual WhatsApp/Facebook/Instagram/TikTok logos,
// sized and stroked to drop into the same icon slots lucide icons use.

export function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.858.505 3.652 1.463 5.223L2 22l4.897-1.427a9.96 9.96 0 0 0 5.107 1.398h.004c5.518 0 10.004-4.486 10.004-10.004C22.012 6.486 17.522 2 12.004 2zm0 18.184h-.003a8.15 8.15 0 0 1-4.16-1.14l-.298-.177-2.905.847.86-2.83-.194-.29a8.14 8.14 0 0 1-1.246-4.35c0-4.503 3.665-8.167 8.15-8.167 2.177 0 4.222.849 5.762 2.39a8.09 8.09 0 0 1 2.386 5.763c0 4.503-3.665 8.168-8.152 8.168z" />
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.9c0-.91.25-1.53 1.56-1.53h1.66V3.56C15.94 3.46 15 3.4 13.9 3.4c-2.3 0-3.87 1.4-3.87 3.98v2.42H7.3v3.14h2.73V21h3.47z" />
    </svg>
  );
}

export function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82c-.83-.83-1.3-1.95-1.3-3.15h-3.05v13.44a2.7 2.7 0 1 1-2.19-2.65v-3.1a5.8 5.8 0 1 0 5.24 5.76V9.4a6.68 6.68 0 0 0 3.9 1.25V7.6a3.9 3.9 0 0 1-2.6-1.78z" />
    </svg>
  );
}
