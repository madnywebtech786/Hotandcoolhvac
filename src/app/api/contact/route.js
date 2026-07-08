import { services } from "../../constants/servicesData";

const VALID_SLUGS = new Set(services.map((service) => service.slug));
const PHONE_PATTERN = /^[0-9+()\-.\s]{7,20}$/;

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, services: selectedServices, address, notes } = body ?? {};

  if (typeof name !== "string" || name.trim().length < 2) {
    return Response.json({ error: "Please enter a valid name." }, { status: 400 });
  }

  if (typeof phone !== "string" || !PHONE_PATTERN.test(phone.trim())) {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  if (!Array.isArray(selectedServices) || selectedServices.length === 0) {
    return Response.json({ error: "Please select at least one service." }, { status: 400 });
  }

  if (!selectedServices.every((slug) => VALID_SLUGS.has(slug))) {
    return Response.json({ error: "One or more selected services are invalid." }, { status: 400 });
  }

  if (typeof address !== "string" || address.trim().length < 4) {
    return Response.json({ error: "Please enter a valid address." }, { status: 400 });
  }

  if (notes !== undefined && typeof notes !== "string") {
    return Response.json({ error: "Notes must be text." }, { status: 400 });
  }

  // No email/SMS provider is configured yet — logging server-side as a placeholder.
  // Wire this up to a real provider (e.g. Resend, SendGrid, Twilio) before launch.
  console.log("New contact request received:", {
    name: name.trim(),
    phone: phone.trim(),
    services: selectedServices,
    address: address.trim(),
    notes: notes?.trim() || null,
    receivedAt: new Date().toISOString(),
  });

  return Response.json({ success: true });
}
