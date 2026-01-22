"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";

export const ContactForm = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; phone?: string; destination?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const visaType = String(formData.get("visaType") || "").trim();
    const destination = String(formData.get("destination") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !email.includes("@")) nextErrors.email = "Please enter a valid email.";
    if (!phone) nextErrors.phone = "Please share a phone or WhatsApp number.";
    if (!destination) nextErrors.destination = "Please add your destination.";
    if (!message) nextErrors.message = "Tell us about your visa goals.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        visaType,
        destination,
        message,
        locale: document.documentElement.lang || "en",
        source: "contact_form"
      })
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setErrors({ message: data?.error || "Something went wrong." });
      return;
    }

    setToastOpen(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              name="name"
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              placeholder="Full name"
              aria-label="Full name"
            />
            {errors.name && <p className="mt-2 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <input
              name="email"
              type="email"
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              placeholder="Email address"
              aria-label="Email address"
            />
            {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              name="phone"
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              placeholder="Phone / WhatsApp"
              aria-label="Phone or WhatsApp"
            />
            {errors.phone && <p className="mt-2 text-xs text-red-500">{errors.phone}</p>}
          </div>
          <div>
            <input
              name="destination"
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              placeholder="Destination country"
              aria-label="Destination"
            />
            {errors.destination && <p className="mt-2 text-xs text-red-500">{errors.destination}</p>}
          </div>
        </div>
        <div>
          <select
            name="visaType"
            className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
            aria-label="Visa type"
          >
            <option>Student Visa</option>
            <option>Work Visa</option>
            <option>Professional Visa</option>
          </select>
        </div>
        <div>
          <textarea
            name="message"
            rows={5}
            className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
            placeholder="Tell us about your destination and timeline"
            aria-label="Message"
          />
          {errors.message && <p className="mt-2 text-xs text-red-500">{errors.message}</p>}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-ink/60">
            <p>We will respond within 24 hours.</p>
            <p>Your data is kept confidential and used only for visa support.</p>
          </div>
          <Button type="submit" ariaLabel="Submit contact form" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
        </div>
      </form>
      <Toast message="Thanks! We will respond within 24 hours." open={toastOpen} onClose={() => setToastOpen(false)} />
    </>
  );
};
