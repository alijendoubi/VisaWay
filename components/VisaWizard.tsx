"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/components/ModalContext";

const recommendations = {
  student: "Prepare admission requirements and scholarship shortlist.",
  work: "Confirm employer sponsorship and gather contract documents.",
  professional: "Secure invitation letter and business itinerary."
};

export const VisaWizard = () => {
  const { open } = useModal();
  const [visaType, setVisaType] = useState("student");
  const [destination, setDestination] = useState("France");
  const [timeframe, setTimeframe] = useState("3-6 months");

  const recommendation = recommendations[visaType as keyof typeof recommendations];

  return (
    <section className="section-padding py-20" id="wizard">
      <div className="glass rounded-2xl p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">Visa Wizard</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">Get your next step in 60 seconds</h3>
            <p className="mt-2 text-sm text-ink/70">
              Tell us your visa type, destination, and timeframe to receive instant guidance.
            </p>
          </div>
          <Button variant="secondary" onClick={open} ariaLabel="Talk to an advisor">
            Talk to an Advisor
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-ink/60">Visa type</label>
            <select
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              value={visaType}
              onChange={(event) => setVisaType(event.target.value)}
              aria-label="Visa type"
            >
              <option value="student">Student Visa</option>
              <option value="work">Work Visa</option>
              <option value="professional">Professional Visa</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-ink/60">Destination</label>
            <select
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              aria-label="Destination"
            >
              {["France", "Germany", "Canada", "Italy", "Spain", "United Kingdom"].map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-ink/60">Timeframe</label>
            <select
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              value={timeframe}
              onChange={(event) => setTimeframe(event.target.value)}
              aria-label="Timeframe"
            >
              {["0-3 months", "3-6 months", "6-12 months"].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
            <p className="text-xs font-semibold uppercase text-ink/50">Recommended next step</p>
            <p className="mt-2 text-sm text-ink/70">{recommendation}</p>
            <p className="mt-2 text-xs text-ink/50">Destination: {destination} · {timeframe}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
