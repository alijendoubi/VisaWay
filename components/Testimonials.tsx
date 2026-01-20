import { SectionTitle } from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Meriem H.",
    role: "Master's applicant, France",
    quote:
      "VisaWay turned a stressful process into a clear checklist. My university admission and visa were ready on time."
  },
  {
    name: "Ahmed B.",
    role: "Software engineer, Canada",
    quote:
      "They reviewed every document, prepared my interview, and answered within hours. I felt truly supported."
  },
  {
    name: "Salma R.",
    role: "Business traveler, Germany",
    quote:
      "Fast, professional, and transparent. My business visa was approved in the first submission."
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding py-20">
      <SectionTitle
        eyebrow="Testimonials"
        title="Real stories from global clients"
        description="VisaWay is trusted by students and professionals across Tunisia and beyond."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="glass rounded-2xl p-6">
            <p className="text-sm text-ink/70">“{testimonial.quote}”</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs text-ink/60">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
