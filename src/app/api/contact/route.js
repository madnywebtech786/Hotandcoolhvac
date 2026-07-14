import { services } from "../../constants/servicesData";
import { sendContactRequestEmail } from "../../lib/mailer";

const VALID_SLUGS = new Set(services.map((service) => service.slug));
const SERVICE_TITLES_BY_SLUG = new Map(services.map((service) => [service.slug, service.title]));

const NAME_PATTERN = /^[\p{L}][\p{L}'.\- ]{1,79}$/u;
const PHONE_PATTERN = /^[0-9+()\-.\s]{7,20}$/;
const ADDRESS_MAX_LENGTH = 300;
const NOTES_MAX_LENGTH = 1000;

// Strips control characters (including CR/LF, which could otherwise be used
// for SMTP/email header injection once these values reach the mailer) while
// leaving normal printable text, including non-Latin scripts, untouched.
function sanitizeText(value) {
  return value.replace(/[\p{Cc}\p{Cf}]/gu, "").trim();
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, services: selectedServices, address, notes } = body ?? {};

  if (typeof name !== "string") {
    return Response.json({ error: "Please enter a valid name." }, { status: 400 });
  }
  const cleanName = sanitizeText(name);
  if (!NAME_PATTERN.test(cleanName)) {
    return Response.json({ error: "Please enter a valid name." }, { status: 400 });
  }

  if (typeof phone !== "string") {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  const cleanPhone = sanitizeText(phone);
  if (!PHONE_PATTERN.test(cleanPhone)) {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  if (!Array.isArray(selectedServices) || selectedServices.length === 0) {
    return Response.json({ error: "Please select at least one service." }, { status: 400 });
  }
  if (!selectedServices.every((slug) => typeof slug === "string" && VALID_SLUGS.has(slug))) {
    return Response.json({ error: "One or more selected services are invalid." }, { status: 400 });
  }

  if (typeof address !== "string") {
    return Response.json({ error: "Please enter a valid address." }, { status: 400 });
  }
  const cleanAddress = sanitizeText(address);
  if (cleanAddress.length < 4 || cleanAddress.length > ADDRESS_MAX_LENGTH) {
    return Response.json({ error: "Please enter a valid address." }, { status: 400 });
  }

  if (notes !== undefined && typeof notes !== "string") {
    return Response.json({ error: "Notes must be text." }, { status: 400 });
  }
  const cleanNotes = notes ? sanitizeText(notes).slice(0, NOTES_MAX_LENGTH) : "";

  const serviceNames = selectedServices.map((slug) => SERVICE_TITLES_BY_SLUG.get(slug));

  try {
    await sendContactRequestEmail({
      name: cleanName,
      phone: cleanPhone,
      address: cleanAddress,
      notes: cleanNotes || null,
      serviceNames,
    });
  } catch (error) {
    console.error("Failed to send contact request email:", error);
    return Response.json(
      { error: "We couldn't send your request. Please call us directly." },
      { status: 500 }
    );
  }

  return Response.json({ success: true });
}
