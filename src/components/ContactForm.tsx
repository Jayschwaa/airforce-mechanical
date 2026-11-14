"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "fallback";

const ASSET_CLASSES = [
  "Multifamily",
  "Office",
  "Retail",
  "Industrial / logistics",
  "Healthcare",
  "Government / institutional",
  "Mixed portfolio",
];

const NEEDS = [
  "Pre-acquisition diligence",
  "Replacement program",
  "Planned maintenance",
  "Emergency service",
  "Plumbing",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus("sending");

    // Prepared up front so a failed send still leaves the visitor one click from reaching us.
    const body = [
      `Name: ${data.name}`,
      `Company / fund: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Asset class: ${data.assetClass || "-"}`,
      `Looking for: ${data.need || "-"}`,
      `Portfolio size: ${data.portfolio || "-"}`,
      "",
      data.message || "",
    ].join("\n");
    setMailto(
      `mailto:${SITE.email}?subject=${encodeURIComponent(`Portfolio consultation: ${data.company}`)}&body=${encodeURIComponent(body)}`,
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("fallback");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-sky-400/40 bg-sky-400/5 p-8" role="status">
        <p className="label text-sky-400">Received</p>
        <p className="display mt-3 text-3xl">Thank you. We will be in touch within one business day.</p>
        <p className="mt-4 text-sm text-white/65">
          If it is urgent, call Jason directly at{" "}
          <a href={SITE.phoneHref} className="text-sky-300 underline underline-offset-4">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <label className="block">
        <span className="label text-white/55">Full name *</span>
        <input name="name" required autoComplete="name" className="field mt-2" />
      </label>
      <label className="block">
        <span className="label text-white/55">Company / fund *</span>
        <input name="company" required autoComplete="organization" className="field mt-2" />
      </label>
      <label className="block">
        <span className="label text-white/55">Email *</span>
        <input name="email" type="email" required autoComplete="email" className="field mt-2" />
      </label>
      <label className="block">
        <span className="label text-white/55">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className="field mt-2" />
      </label>
      <label className="block">
        <span className="label text-white/55">Asset class</span>
        <select name="assetClass" defaultValue="" className="field mt-2">
          <option value="">Select</option>
          {ASSET_CLASSES.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="label text-white/55">What do you need?</span>
        <select name="need" defaultValue="" className="field mt-2">
          <option value="">Select</option>
          {NEEDS.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="label text-white/55">Portfolio size (units / sq ft / properties)</span>
        <input name="portfolio" className="field mt-2" />
      </label>
      <label className="block sm:col-span-2">
        <span className="label text-white/55">What are you looking to solve?</span>
        <textarea name="message" rows={4} className="field mt-2 resize-y" />
      </label>
      {/* Honeypot: hidden from people, filled by bots */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full sm:w-auto">
          {status === "sending" ? "Sending…" : "Request consultation"}
        </button>
        {status === "fallback" && (
          <p className="mt-4 text-sm leading-relaxed text-white/75" role="alert">
            We could not send that automatically.{" "}
            <a href={mailto} className="text-sky-300 underline underline-offset-4">
              Email it to us instead
            </a>{" "}
            (your details are filled in), or call{" "}
            <a href={SITE.phoneHref} className="text-sky-300 underline underline-offset-4">
              {SITE.phone}
            </a>
            .
          </p>
        )}
        <p className="mt-4 text-xs text-white/40">No obligation. We reply within one business day.</p>
      </div>
    </form>
  );
}
