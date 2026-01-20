"use client";

import { useMemo, useState } from "react";
import { cn } from "@/components/ui/cn";

const stories = [
  { name: "Hiba", visa: "Student", outcome: "Accepted into a Paris engineering school", country: "France" },
  { name: "Omar", visa: "Work", outcome: "Relocated to Berlin as a data analyst", country: "Germany" },
  { name: "Sana", visa: "Professional", outcome: "Business visa for Dubai summit", country: "UAE" },
  { name: "Yassine", visa: "Student", outcome: "Scholarship and visa for Toronto", country: "Canada" },
  { name: "Leila", visa: "Work", outcome: "Startup transfer to Madrid", country: "Spain" },
  { name: "Nader", visa: "Professional", outcome: "Conference tour across Milan", country: "Italy" }
];

const filters = ["All", "Student", "Work", "Professional"];

export const SuccessStoriesGrid = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return stories;
    return stories.filter((story) => story.visa === active);
  }, [active]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
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
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((story) => (
          <div key={`${story.name}-${story.outcome}`} className="glass rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase text-sky">{story.visa} Visa</p>
            <h3 className="mt-3 text-lg font-semibold text-ink">{story.outcome}</h3>
            <p className="mt-2 text-sm text-ink/70">{story.name} · {story.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
