import type { Metadata } from "next";
import Image from "next/image";
import { Services } from "@/components/sections/Services";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";

export const metadata: Metadata = {
  title: "Services",
  description: "VisaWay services for student, work, and professional visas."
};

const comparison = [
  { label: "Admission support", student: "Included", work: "Optional", professional: "N/A" },
  { label: "Document audit", student: "Full", work: "Full", professional: "Full" },
  { label: "Embassy appointment", student: "Managed", work: "Managed", professional: "Express" },
  { label: "Interview prep", student: "Included", work: "Included", professional: "Optional" },
  { label: "Post-submission follow-up", student: "Yes", work: "Yes", professional: "Yes" }
];

const destinations = [
  { name: "France", image: "/images/destinations/france.jpg" },
  { name: "Germany", image: "/images/destinations/germany.jpg" },
  { name: "Italy", image: "/images/destinations/italy.jpg" },
  { name: "Canada", image: "/images/destinations/canada.jpg" },
  { name: "UK", image: "/images/destinations/uk.jpg" },
  { name: "USA", image: "/images/destinations/usa.jpg" }
];

export default function ServicesPage() {
  return (
    <div>
      <section className="section-padding py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Visa Services</p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">
              Choose a service built around your destination.
            </h1>
            <p className="text-sm text-ink/70">
              Compare pathways, understand what is included, and get a clear roadmap before you commit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/eligibility" ariaLabel="Check eligibility">Check Eligibility</Button>
              <Button variant="secondary" href="/contact" ariaLabel="Book consultation">Book Free Consultation</Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <Image
              src="/images/destinations/spain.jpg"
              alt="Visa services"
              width={640}
              height={480}
              className="h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <Services />

      <section className="section-padding py-10">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-ink">Service comparison</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-ink/50">
                  <th className="py-3">Support</th>
                  <th>Student</th>
                  <th>Work</th>
                  <th>Business</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-ink/5">
                    <td className="py-3 font-medium text-ink">{row.label}</td>
                    <td>{row.student}</td>
                    <td>{row.work}</td>
                    <td>{row.professional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding py-10">
        <Carousel title="Destination highlights">
          {destinations.map((destination) => (
            <div key={destination.name} className="min-w-[240px] snap-start rounded-2xl bg-white shadow-soft">
              <Image
                src={destination.image}
                alt={destination.name}
                width={420}
                height={320}
                className="h-40 w-full rounded-2xl object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-ink">{destination.name}</p>
                <p className="text-xs text-ink/60">Typical processing: 4–10 weeks</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="section-padding pb-20">
        <div className="rounded-3xl bg-cta-gradient px-8 py-10 text-white shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Want a full visa roadmap?</h3>
              <p className="mt-2 text-sm text-white/80">Complete the eligibility check in under 60 seconds.</p>
            </div>
            <Button href="/eligibility" ariaLabel="Get my roadmap">
              Get my roadmap
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
