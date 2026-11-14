import { SITE } from "@/lib/site";

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field; report success so they do not retry.
  if (clean(body.website)) return Response.json({ ok: true });

  const name = clean(body.name, 200);
  const company = clean(body.company, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const assetClass = clean(body.assetClass, 100);
  const need = clean(body.need, 100);
  const portfolio = clean(body.portfolio, 300);
  const message = clean(body.message, 5000);

  if (!name || !company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return Response.json({ error: "Email is not configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Company / fund", company],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Asset class", assetClass || "-"],
    ["Looking for", need || "-"],
    ["Portfolio size", portfolio || "-"],
    ["Message", message || "-"],
  ];

  const to = (process.env.CONTACT_TO_EMAIL ?? SITE.email)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Air Force Mechanical Website <website@airforceteam.com>",
      to,
      reply_to: `${name.replace(/[<>"]/g, "")} <${email}>`,
      subject: `Portfolio consultation request: ${company} (${name})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>Air Force Mechanical: consultation request</h2><table cellpadding="6">${rows
        .map(
          ([k, v]) =>
            `<tr><td valign="top"><strong>${k}</strong></td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend rejected the email", res.status, await res.text());
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
