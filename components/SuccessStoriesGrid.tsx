"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { Button } from "@/components/ui/Button";

const stories = [
  {
    id: "hiba-fr",
    visa: "Student",
    destination: "France",
    name: "Hiba",
    timeframe: "7 weeks",
    obstacle: "Proof of funds and housing confirmation",
    outcome: "Accepted into a Paris engineering school with a 12-month visa.",
    narrative:
      "Hiba needed to align her proof of funds with a tight campus housing deadline. We organized her funding statements, coordinated a verified accommodation letter, and built a clean submission pack that got approved on the first review."
  },
  {
    id: "omar-de",
    visa: "Work",
    destination: "Germany",
    name: "Omar",
    timeframe: "6 weeks",
    obstacle: "Employer compliance documents",
    outcome: "Relocated to Berlin as a data analyst.",
    narrative:
      "Omar's employer required a fast compliance check. We managed the checklist and synchronized with HR to keep the timeline intact. The embassy approved his work visa without additional requests."
  },
  {
    id: "sana-uae",
    visa: "Professional",
    destination: "UAE",
    name: "Sana",
    timeframe: "3 weeks",
    obstacle: "Invitation letter formatting",
    outcome: "Business visa approved for a Dubai summit.",
    narrative:
      "Sana needed a corrected invitation letter for a UAE business event. We rebuilt the letter format, clarified the itinerary, and provided a unified document pack."
  },
  {
    id: "yassine-ca",
    visa: "Student",
    destination: "Canada",
    name: "Yassine",
    timeframe: "9 weeks",
    obstacle: "Scholarship proof and timeline",
    outcome: "Scholarship and visa secured for Toronto.",
    narrative:
      "Yassine had multiple funding sources. We prepared a summary funding letter and ordered the paperwork so the visa officer could verify each source quickly."
  },
  {
    id: "leila-es",
    visa: "Work",
    destination: "Spain",
    name: "Leila",
    timeframe: "5 weeks",
    obstacle: "Family relocation documentation",
    outcome: "Startup transfer approved for Madrid.",
    narrative:
      "Leila needed to include family documents in her work visa. We coordinated translations and notarization across three offices and delivered a complete file."
  },
  {
    id: "nader-it",
    visa: "Professional",
    destination: "Italy",
    name: "Nader",
    timeframe: "4 weeks",
    obstacle: "Multi-city itinerary",
    outcome: "Conference tour visa approved for Milan.",
    narrative:
      "Nader had multiple business stops. We mapped a unified itinerary and provided proof of accommodation for each city, ensuring a seamless approval."
  }
];

const filters = ["All", "Student", "Work", "Professional"];

export const SuccessStoriesGrid = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof stories[number] | null>(null);

  const filtered = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    return stories.filter((story) => {
      const matchesFilter = active === "All" || story.visa === active;
      const matchesSearch =
        !normalized ||
        story.destination.toLowerCase().includes(normalized) ||
        story.name.toLowerCase().includes(normalized);
      return matchesFilter && matchesSearch;
    });
  }, [active, search]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              active === filter
                ? "border-ink bg-ink text-white"
                : "border-ink/10 bg-white text-ink/70 hover:border-ink/20"
            )}
          >
            {filter}
          </button>
        ))}
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by destination"
          className="ml-auto w-full rounded-full border border-ink/10 px-4 py-2 text-sm focus-visible:focus-ring md:w-64"
          aria-label="Search by destination"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((story) => (
          <div key={story.id} className="glass rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase text-sky">{story.visa} Visa · {story.destination}</p>
            <h3 className="mt-3 text-lg font-semibold text-ink">{story.name} · {story.timeframe}</h3>
            <p className="mt-2 text-sm text-ink/70">Obstacle: {story.obstacle}</p>
            <p className="mt-2 text-sm text-ink">Outcome: {story.outcome}</p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => setSelected(story)}
              ariaLabel="Read case study"
            >
              Read case study
            </Button>
          </div>
        ))}
      </div>
      <p className="text-xs text-ink/60">Results vary. Visa approvals depend on embassy decisions.</p>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-6">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-soft" role="dialog" aria-modal="true">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase text-sky">
                  {selected.visa} Visa · {selected.destination}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{selected.name} · {selected.timeframe}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full p-2 text-ink/60 transition hover:bg-ink/5 focus-visible:focus-ring"
                aria-label="Close case study"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 space-y-3 text-sm text-ink/70">
              <p><span className="font-semibold text-ink">Key obstacle:</span> {selected.obstacle}</p>
              <p><span className="font-semibold text-ink">Outcome:</span> {selected.outcome}</p>
              <p>{selected.narrative}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="secondary" onClick={() => setSelected(null)} ariaLabel="Close case study">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
