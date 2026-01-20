"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";

export const ContactForm = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const visaType = String(formData.get("visaType") || "").trim();

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !email.includes("@")) nextErrors.email = "Please enter a valid email.";
    if (!message) nextErrors.message = "Tell us about your visa goals.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, visaType, message })
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
        <Button type="submit" ariaLabel="Submit contact form" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
      <Toast message="Thanks! We will contact you shortly." open={toastOpen} onClose={() => setToastOpen(false)} />
    </>
  );
};
