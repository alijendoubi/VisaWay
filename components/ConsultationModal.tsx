"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { Button } from "@/components/ui/Button";

export const ConsultationModal = () => {
  const { isOpen, close } = useModal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      setError("");
      setSuccess(false);
    }
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setError(data?.error || "Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    event.currentTarget.reset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-6"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">Book a Call</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">Book a Consultation</h3>
                <p className="mt-2 text-sm text-ink/70">
                  Choose a preferred slot and we will confirm via email and calendar invite.
                </p>
              </div>
              <button
                onClick={close}
                className="rounded-full p-2 text-ink/60 transition hover:bg-ink/5 focus-visible:focus-ring"
                aria-label="Close consultation modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {success ? (
              <div className="mt-6 rounded-2xl bg-sky/10 p-6">
                <h4 className="text-lg font-semibold text-ink">Booking received!</h4>
                <p className="mt-2 text-sm text-ink/70">
                  We will confirm your time by email and send a calendar invite shortly.
                </p>
                <div className="mt-4 flex gap-3">
                  <Button variant="secondary" onClick={close} ariaLabel="Close modal">
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="name"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    placeholder="Full name"
                    required
                    aria-label="Full name"
                  />
                  <input
                    name="email"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    placeholder="Email"
                    type="email"
                    required
                    aria-label="Email"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="phone"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    placeholder="Phone / WhatsApp"
                    aria-label="Phone or WhatsApp"
                  />
                  <input
                    name="destination"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    placeholder="Destination"
                    required
                    aria-label="Destination"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <select
                    name="visaType"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    aria-label="Visa type"
                  >
                    <option>Student Visa</option>
                    <option>Work Visa</option>
                    <option>Professional Visa</option>
                  </select>
                  <select
                    name="timezone"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    aria-label="Timezone"
                  >
                    <option value="+01:00">GMT+1 (Tunis)</option>
                    <option value="+00:00">GMT (London)</option>
                    <option value="+02:00">GMT+2 (Paris)</option>
                    <option value="-05:00">GMT-5 (New York)</option>
                  </select>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="preferredDate"
                    type="date"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    required
                    aria-label="Preferred date"
                  />
                  <input
                    name="preferredTime"
                    type="time"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                    required
                    aria-label="Preferred time"
                  />
                </div>
                <textarea
                  name="notes"
                  className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
                  rows={4}
                  placeholder="Tell us about your timeline"
                  aria-label="Timeline"
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-ink/60">
                    By submitting, you agree to be contacted by a VisaWay advisor. Your data stays confidential.
                  </p>
                  <Button type="submit" ariaLabel="Submit consultation request" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
