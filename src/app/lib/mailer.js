import { readFile } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { buildContactRequestEmail } from "./contactEmailTemplate";

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "Email is not configured: GMAIL_USER and GMAIL_APP_PASSWORD must be set."
    );
  }

  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  return cachedTransporter;
}

export async function sendContactRequestEmail({
  name,
  phone,
  address,
  notes,
  serviceNames,
}) {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!recipient) {
    throw new Error(
      "Email is not configured: CONTACT_RECIPIENT_EMAIL must be set."
    );
  }

  const transporter = getTransporter();
  const { html, text } = buildContactRequestEmail({ name, phone, address, notes, serviceNames });
  const logoBuffer = await readFile(path.join(process.cwd(), "public", "images", "logo.png"));

  await transporter.sendMail({
    from: `"Hot and Cool HVAC Website" <${process.env.GMAIL_USER}>`,
    to: recipient,
    subject: `New service request from ${name}`,
    text,
    html,
    attachments: [
      {
        filename: "logo.png",
        content: logoBuffer,
        cid: "hotandcool-logo",
      },
    ],
  });
}
