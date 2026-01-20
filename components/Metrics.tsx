const metrics = [
  { value: "12+", label: "Years of advisory experience" },
  { value: "4,200", label: "Visa files prepared" },
  { value: "32", label: "Partner universities" },
  { value: "18", label: "Corporate mobility partners" }
];

export const Metrics = () => {
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-soft md:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className="text-2xl font-semibold text-ink">{metric.value}</p>
          <p className="text-sm text-ink/70">{metric.label}</p>
        </div>
      ))}
    </div>
  );
};
