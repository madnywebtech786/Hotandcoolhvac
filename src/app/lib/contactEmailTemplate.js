function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const INK = "#0b1620";
const INK_SOFT = "#47586a";
const INK_FAINT = "#8695a3";
const SURFACE_ALT = "#fafbfb";
const LINE = "#e1e6ea";
const ARC_500 = "#2ba7c4";
const ARC_600 = "#1f8ca6";
const EMBER_500 = "#f5941f";
const EMBER_600 = "#d97d0c";

function buildDetailRow({ label, value }) {
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid ${LINE};" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="120" valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: ${INK_FAINT};">
              ${escapeHtml(label)}
            </td>
            <td valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; font-weight: 600; color: ${INK}; line-height: 1.5;">
              ${value}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

export function buildContactRequestEmail({ name, phone, address, notes, serviceNames }) {
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeAddress = escapeHtml(address);
  const safeNotes = notes ? escapeHtml(notes).replace(/\n/g, "<br />") : null;

  const serviceChips = serviceNames
    .map(
      (service) => `
        <span style="display: inline-block; margin: 0 6px 6px 0; padding: 6px 14px; border-radius: 999px; background-color: ${SURFACE_ALT}; border: 1px solid ${LINE}; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: 600; color: ${INK};">
          ${escapeHtml(service)}
        </span>`
    )
    .join("");

  const rows = [
    buildDetailRow({ label: "Name", value: safeName }),
    buildDetailRow({
      label: "Phone",
      value: `<a href="tel:${safePhone.replace(/[^0-9+]/g, "")}" style="color: ${ARC_600}; text-decoration: none;">${safePhone}</a>`,
    }),
    buildDetailRow({ label: "Address", value: safeAddress }),
  ];

  if (safeNotes) {
    rows.push(
      buildDetailRow({
        label: "Notes",
        value: `<span style="font-weight: 400; color: ${INK_SOFT};">${safeNotes}</span>`,
      })
    );
  }

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New service request</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: ${SURFACE_ALT}; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${SURFACE_ALT};">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 8px rgba(11,22,32,0.06), 0 24px 48px -12px rgba(11,22,32,0.18);">

            <!-- Gradient accent bar -->
            <tr>
              <td style="height: 6px; line-height: 6px; font-size: 0; background-color: ${EMBER_500}; background-image: linear-gradient(90deg, ${EMBER_600} 0%, ${EMBER_500} 30%, #f2a08a 50%, #7fcbdd 72%, ${ARC_500} 100%);">&nbsp;</td>
            </tr>

            <!-- Header -->
            <tr>
              <td style="background-color: ${INK}; padding: 28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="middle" width="52">
                      <img src="cid:hotandcool-logo" width="44" height="49" alt="Hot and Cool HVAC" style="display: block; border: 0;" />
                    </td>
                    <td valign="middle" style="padding-left: 12px;">
                      <span style="font-family: Arial, Helvetica, sans-serif; font-size: 19px; font-weight: 700; color: #ffffff;">
                        Hot and Cool HVAC
                      </span>
                      <br />
                      <span style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #8fa3ad;">
                        New website lead
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 32px;">
                <p style="margin: 0 0 4px; font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 700; color: ${INK};">
                  New service request
                </p>
                <p style="margin: 0 0 24px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: ${INK_FAINT};">
                  Submitted through the contact form on hotandcoolhvac.ca
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                  ${rows.join("")}
                </table>

                <p style="margin: 0 0 10px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: ${INK_FAINT};">
                  Services requested
                </p>
                <div>
                  ${serviceChips}
                </div>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 28px;">
                  <tr>
                    <td align="center" style="border-radius: 999px; background-color: ${EMBER_500}; background-image: linear-gradient(150deg, ${EMBER_600} 0%, ${EMBER_500} 30%, #f2a08a 50%, #7fcbdd 72%, ${ARC_500} 100%);">
                      <a href="tel:${safePhone.replace(/[^0-9+]/g, "")}" style="display: inline-block; padding: 14px 28px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none;">
                        Call ${safeName.split(" ")[0]} back &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 20px 32px; background-color: ${SURFACE_ALT}; border-top: 1px solid ${LINE};">
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: ${INK_FAINT};">
                  Hot and Cool HVAC &middot; Calgary Metro &middot; Automated lead notification
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    "New service request from the Hot and Cool HVAC website:",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Address: ${address}`,
    `Services: ${serviceNames.join(", ")}`,
    `Notes: ${notes || "(none)"}`,
  ].join("\n");

  return { html, text };
}
