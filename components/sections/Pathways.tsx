"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Carousel } from "@/components/ui/Carousel";
import { useTranslations } from "@/components/i18n/LocaleProvider";

const tabs = ["Student", "Work", "Business"] as const;

type TabType = (typeof tabs)[number];

const pathwayData: Record<TabType, AccordionItem[]> = {
  Student: [
    {
      id: "eligibility",
      title: "Eligibility review",
      description: "Assess your profile, funding, and academic readiness.",
      details: ["Common mistake: missing proof of funds", "We match your profile with embassy requirements"]
    },
    {
      id: "documents",
      title: "Document strategy",
      description: "Build an embassy-ready file with clear checklists.",
      details: ["Common mistake: inconsistent translations", "We pre-audit every document"]
    },
    {
      id: "appointment",
      title: "Appointment prep",
      description: "Secure appointments and prep for interviews.",
      details: ["Common mistake: late appointment booking", "We plan timelines backward"]
    },
    {
      id: "submission",
      title: "Submission",
      description: "Final checks before embassy submission.",
      details: ["Common mistake: missing supporting letters", "We validate all forms"]
    },
    {
      id: "followup",
      title: "Follow-up",
      description: "Track status and respond to embassy requests.",
      details: ["Common mistake: slow responses", "We monitor updates daily"]
    }
  ],
  Work: [
    {
      id: "eligibility",
      title: "Eligibility review",
      description: "Contract, role, and employer compliance check.",
      details: ["Common mistake: incomplete contract", "We align employer documents"]
    },
    {
      id: "documents",
      title: "Document strategy",
      description: "Align employer paperwork with embassy rules.",
      details: ["Common mistake: missing compliance approvals", "We maintain a checklist"]
    },
    {
      id: "appointment",
      title: "Appointment prep",
      description: "Interview readiness + appointment scheduling.",
      details: ["Common mistake: incomplete biometrics", "We prep you in advance"]
    },
    {
      id: "submission",
      title: "Submission",
      description: "Embassy submission and tracking.",
      details: ["Common mistake: inconsistent employment dates", "We verify all details"]
    },
    {
      id: "followup",
      title: "Follow-up",
      description: "Stay aligned with employer + embassy responses.",
      details: ["Common mistake: missing embassy messages", "We monitor daily updates"]
    }
  ],
  Business: [
    {
      id: "eligibility",
      title: "Eligibility review",
      description: "Business purpose and itinerary validation.",
      details: ["Common mistake: weak invitation letter", "We refine travel purpose"]
    },
    {
      id: "documents",
      title: "Document strategy",
      description: "Company documents + invitation pack.",
      details: ["Common mistake: missing company registration", "We verify all documents"]
    },
    {
      id: "appointment",
      title: "Appointment prep",
      description: "Plan appointments for fast approval.",
      details: ["Common mistake: late scheduling", "We prioritize early booking"]
    },
    {
      id: "submission",
      title: "Submission",
      description: "Submission and courier coordination.",
      details: ["Common mistake: unclear itinerary", "We tighten your schedule"]
    },
    {
      id: "followup",
      title: "Follow-up",
      description: "Track status and update your travel plan.",
      details: ["Common mistake: no follow-up plan", "We track updates for you"]
    }
  ]
};

const destinations = [
  { name: "France", image: "/images/destinations/france.jpg", time: "4-8 weeks" },
  { name: "Germany", image: "/images/destinations/germany.jpg", time: "6-10 weeks" },
  { name: "Italy", image: "/images/destinations/italy.jpg", time: "4-7 weeks" },
  { name: "Canada", image: "/images/destinations/canada.jpg", time: "6-12 weeks" },
  { name: "UK", image: "/images/destinations/uk.jpg", time: "3-6 weeks" },
  { name: "Spain", image: "/images/destinations/spain.jpg", time: "4-7 weeks" },
  { name: "USA", image: "/images/destinations/usa.jpg", time: "6-10 weeks" },
  { name: "UAE", image: "/images/destinations/uae.jpg", time: "2-4 weeks" }
];

export const Pathways = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Student");
  const visaParam = activeTab === "Business" ? "Professional" : activeTab;
  const { t } = useTranslations();

  const items = useMemo(() => pathwayData[activeTab], [activeTab]);

  return (
    <section className="section-padding py-16">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{t("pathways.eyebrow")}</p>
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">{t("pathways.title")}</h2>
        <p className="text-sm text-ink/70">{t("pathways.subtitle")}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink/70"
            }`}
          >
            {tab === "Student" && t("pathways.tab.student")}
            {tab === "Work" && t("pathways.tab.work")}
            {tab === "Business" && t("pathways.tab.business")}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Accordion items={items} />
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink">{t("pathways.timeline")}</p>
          <p className="mt-2 text-sm text-ink/70">{t("pathways.timelineSubtitle")}</p>
          <div className="mt-4 space-y-3 text-sm text-ink/70">
            <div className="flex items-center justify-between rounded-xl bg-ink/5 px-4 py-3">
              <span>Eligibility</span>
              <span>Week 1</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-ink/5 px-4 py-3">
              <span>Documents</span>
              <span>Weeks 2-4</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-ink/5 px-4 py-3">
              <span>Appointment</span>
              <span>Weeks 4-6</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-ink/5 px-4 py-3">
              <span>Submission</span>
              <span>Week 6+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Carousel title={t("pathways.destinationPicker")}>
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="relative min-w-[220px] snap-start overflow-hidden rounded-2xl bg-white shadow-soft"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={420}
                height={320}
                className="h-36 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-ink">{destination.name}</p>
                <p className="text-xs text-ink/60">Typical range: {destination.time}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          href={`/eligibility?visaType=${encodeURIComponent(visaParam)}&destination=France&timeframe=3-6%20months`}
          ariaLabel={t("cta.getRoadmap")}
        >
          {t("cta.getRoadmap")}
        </Button>
        <Button
          variant="secondary"
          href={`/eligibility?visaType=${encodeURIComponent(visaParam)}`}
          ariaLabel="Check eligibility"
        >
          {t("cta.checkEligibility")}
        </Button>
      </div>
    </section>
  );
};
