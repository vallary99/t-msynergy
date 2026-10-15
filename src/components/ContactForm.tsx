"use client";

import { useState } from "react";
import { company } from "@/lib/site";

/**
 * Opens the visitor's email app with the enquiry filled in, so it works with no backend.
 * To receive submissions directly, point `onSubmit` at a form service (Formspree, Resend, etc.).
 */
export function ContactForm({ services }: { services: string[] }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Client Enquiry: ${d.get("service") || "General"} — ${d.get("company") || d.get("name")}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Company: ${d.get("company")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone")}`,
      `Service: ${d.get("service")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 block w-full border-0 border-b-2 border-line bg-transparent px-0 py-3 text-ink placeholder:text-steel/60 focus:border-brand focus:ring-0 focus:outline-none";
  const label = "font-label text-xs font-semibold uppercase tracking-[0.18em] text-ink";

  return (
    <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
      <label className="block">
        <span className={label}>Full name *</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className={label}>Company</span>
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className={label}>Email *</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className={label}>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Service</span>
        <select name="service" className={field} defaultValue="">
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
          <option>Safety signage and safety solutions</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Project details *</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project"
          className={field}
        />
      </label>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary">
          Send inquiry
        </button>
        <p role="status" className="text-sm text-steel">
          {sent ? `Your email app should now open. If it doesn't, write to ${company.email}.` : ""}
        </p>
      </div>
    </form>
  );
}
