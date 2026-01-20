"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { addSubmission } from "@/lib/eligibilityStore";
import { useModal } from "@/components/ModalContext";

const visaTypes = ["Student", "Work", "Professional"];
const destinations = ["France", "Germany", "Canada", "Italy", "Spain", "UK", "USA", "UAE", "Other"];
const timeframes = ["0-3 months", "3-6 months", "6-12 months"];
const ageRanges = ["18-21", "22-25", "26-30", "31-40", "40+"];
const languageLevels = ["Basic", "Intermediate", "Advanced"];
const budgets = ["Under 3,000", "3,000-6,000", "6,000-10,000", "10,000+"];

const steps = ["Visa", "Destination", "Timeframe", "Profile", "Results"];

export const EligibilityFlow = () => {
  const { open } = useModal();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const [showChecklistOptions, setShowChecklistOptions] = useState(false);

  const [formData, setFormData] = useState({
    visaType: "",
    destination: "",
    timeframe: "",
    nationality: "",
    ageRange: "",
    language: "",
    budget: "",
    hasSponsor: ""
  });

  useEffect(() => {
    track("eligibility_started", { source: "eligibility" });
  }, []);

  useEffect(() => {
    const visaType = searchParams.get("visaType") || "";
    const destination = searchParams.get("destination") || "";
    const timeframe = searchParams.get("timeframe") || "";
    setFormData((prev) => ({
      ...prev,
      visaType,
      destination,
      timeframe
    }));
  }, [searchParams]);

  const status = useMemo(() => {
    let score = 0;
    if (formData.hasSponsor === "yes") score += 1;
    if (formData.budget === "10,000+") score += 1;
    if (formData.timeframe === "6-12 months") score += 1;
    if (formData.language === "Advanced") score += 1;

    if (score >= 3) return "Strong fit";
    if (score >= 2) return "Promising with review";
    return "Needs advisor review";
  }, [formData]);

  const recommendations = useMemo(() => {
    const list = ["Prepare passport validity (6+ months)", "Gather proof of income or sponsor support"];
    if (formData.visaType === "Student") {
      list.push("Confirm admission timeline and tuition deposit", "Prepare academic transcripts and IELTS/TEF scores");
    }
    if (formData.visaType === "Work") {
      list.push("Align employment contract with embassy requirements", "Collect employer registration documents");
    }
    if (formData.visaType === "Professional") {
      list.push("Secure invitation letter and itinerary", "Prepare company introduction letter");
    }
    if (formData.timeframe === "0-3 months") {
      list.push("Book embassy appointment immediately");
    }
    return list;
  }, [formData]);

  const nextStep = () => {
    setError("");
    if (currentStep === 0 && !formData.visaType) {
      setError("Select a visa type to continue.");
      return;
    }
    if (currentStep === 1 && !formData.destination) {
      setError("Select a destination to continue.");
      return;
    }
    if (currentStep === 2 && !formData.timeframe) {
      setError("Select a timeframe to continue.");
      return;
    }
    if (currentStep === 3) {
      if (!formData.nationality || !formData.ageRange || !formData.language || !formData.budget || !formData.hasSponsor) {
        setError("Complete all profile fields to view results.");
        return;
      }
      addSubmission({
        ...formData,
        createdAt: new Date().toISOString()
      });
      track("eligibility_completed", { visaType: formData.visaType, destination: formData.destination });
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const previousStep = () => {
    setError("");
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase text-ink/60">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                index <= currentStep ? "bg-ink text-white" : "bg-ink/10 text-ink/60"
              }`}
            >
              {index + 1}
            </span>
            <span className={index === currentStep ? "text-ink" : "text-ink/50"}>{step}</span>
          </div>
        ))}
      </div>

      {currentStep === 0 && (
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-ink">Step 1: Select your visa type</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {visaTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFormData((prev) => ({ ...prev, visaType: type }))}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  formData.visaType === type ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink/70"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-ink">Step 2: Choose your destination</h3>
          <select
            className="mt-4 w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
            value={formData.destination}
            onChange={(event) => setFormData((prev) => ({ ...prev, destination: event.target.value }))}
          >
            <option value="">Select destination</option>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>
      )}

      {currentStep === 2 && (
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-ink">Step 3: Select your timeframe</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setFormData((prev) => ({ ...prev, timeframe }))}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  formData.timeframe === timeframe ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink/70"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-ink">Step 4: Your profile basics</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              placeholder="Nationality"
              value={formData.nationality}
              onChange={(event) => setFormData((prev) => ({ ...prev, nationality: event.target.value }))}
            />
            <select
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              value={formData.ageRange}
              onChange={(event) => setFormData((prev) => ({ ...prev, ageRange: event.target.value }))}
            >
              <option value="">Age range</option>
              {ageRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <select
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              value={formData.language}
              onChange={(event) => setFormData((prev) => ({ ...prev, language: event.target.value }))}
            >
              <option value="">English/French level</option>
              {languageLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <select
              className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
              value={formData.budget}
              onChange={(event) => setFormData((prev) => ({ ...prev, budget: event.target.value }))}
            >
              <option value="">Budget range (EUR)</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-ink">Do you have a sponsor?</p>
            <div className="mt-2 flex gap-3">
              {["yes", "no"].map((value) => (
                <button
                  key={value}
                  onClick={() => setFormData((prev) => ({ ...prev, hasSponsor: value }))}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    formData.hasSponsor === value ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink/70"
                  }`}
                >
                  {value === "yes" ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-ink">Step 5: Eligibility results</h3>
          <p className="mt-2 text-sm text-ink/70">
            This is a preliminary assessment, not a guarantee of visa approval.
          </p>
          <div className="mt-4 rounded-2xl bg-sky/10 p-4">
            <p className="text-sm font-semibold text-ink">Eligibility status</p>
            <p className="mt-1 text-lg font-semibold text-ink">{status}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-ink">Recommended next steps</p>
            <ul className="mt-2 space-y-2 text-sm text-ink/70">
              {recommendations.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => { track("cta_book_call", { source: "eligibility_results" }); open(); }}>
              Book a Free Consultation
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowChecklistOptions((prev) => !prev)}
              ariaLabel="Get checklist by email or WhatsApp"
            >
              Get Checklist by Email / WhatsApp
            </Button>
          </div>
          {showChecklistOptions && (
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:contact@visaway.live?subject=Visa%20Checklist%20Request"
                className="rounded-full border border-ink/10 px-4 py-2 text-ink/70"
              >
                Email checklist
              </a>
              <a
                href="https://wa.me/393514784570"
                className="rounded-full border border-ink/10 px-4 py-2 text-ink/70"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp checklist
              </a>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={previousStep} disabled={currentStep === 0} ariaLabel="Previous step">
          Back
        </Button>
        {currentStep < steps.length - 1 && (
          <Button onClick={nextStep} ariaLabel="Next step">
            Continue
          </Button>
        )}
      </div>
    </div>
  );
};
