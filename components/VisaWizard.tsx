"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/components/i18n/LocaleProvider";

const recommendations = {
  student: "Prepare admission requirements and scholarship shortlist.",
  work: "Confirm employer sponsorship and gather contract documents.",
  professional: "Secure invitation letter and business itinerary."
};

const visaOptions = [
  { label: "Select visa type", value: "" },
  { label: "Student Visa", value: "student" },
  { label: "Work Visa", value: "work" },
  { label: "Professional Visa", value: "professional" }
];

const destinations = ["", "France", "Germany", "Canada", "Italy", "Spain", "United Kingdom", "USA", "UAE", "Other"];
const timeframes = ["", "0-3 months", "3-6 months", "6-12 months"];

export const VisaWizard = () => {
  const router = useRouter();
  const { locale } = useTranslations();
  const [visaType, setVisaType] = useState("");
  const [destination, setDestination] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [error, setError] = useState("");

  const recommendation = useMemo(() => {
    if (!visaType) return "Choose a visa type to see next steps.";
    return recommendations[visaType as keyof typeof recommendations];
  }, [visaType]);

  const handleSubmit = () => {
    if (!visaType || !destination || !timeframe) {
      setError("Select all fields to continue.");
      return;
    }
    setError("");
    track("eligibility_started", { source: "wizard" });
    const params = new URLSearchParams({ visaType, destination, timeframe });
    router.push(`/${locale}/eligibility?${params.toString()}`);
  };

  return (
    <section className="section-padding py-20" id="wizard">
      <div className="glass rounded-2xl p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">Visa Wizard</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">Get a personalized roadmap in 60 seconds</h3>
            <p className="mt-2 text-sm text-ink/70">
              Tell us your visa type, destination, and timeframe to receive instant guidance.
            </p>
          </div>
          <Button variant="secondary" onClick={handleSubmit} ariaLabel="Check eligibility">
            Check Eligibility
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
              {visaOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
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
              {destinations.map((country) => (
                <option key={country || "placeholder"} value={country}>
                  {country || "Select destination"}
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
              {timeframes.map((value) => (
                <option key={value || "placeholder"} value={value}>
                  {value || "Select timeframe"}
                </option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
            <p className="text-xs font-semibold uppercase text-ink/50">Recommended next step</p>
            <p className="mt-2 text-sm text-ink/70">{recommendation}</p>
            <p className="mt-2 text-xs text-ink/50">
              {destination ? `Destination: ${destination}` : "Destination: --"} · {timeframe || "Timeframe: --"}
            </p>
          </div>
        </div>
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      </div>
    </section>
  );
};
