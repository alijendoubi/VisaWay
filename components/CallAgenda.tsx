import { SectionTitle } from "@/components/ui/SectionTitle";

const agenda = [
  "Eligibility snapshot + priority risks",
  "Document checklist tailored to destination",
  "Timeline planning with appointment strategy",
  "Personalized next steps and advisor support"
];

export const CallAgenda = () => {
  return (
    <section className="section-padding py-16">
      <div className="glass rounded-2xl p-8">
        <SectionTitle
          eyebrow="Free Call"
          title="What you get on the free call"
          description="A structured 20-minute session that gives you immediate clarity."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {agenda.map((item) => (
            <div key={item} className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/70">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
