"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/components/ui/cn";

const faqs = [
  {
    question: "How long does the visa process take?",
    answer:
      "It depends on the destination and visa type. We provide a timeline after the initial eligibility review."
  },
  {
    question: "Do you help with scholarships?",
    answer:
      "Yes. Our student visa team supports scholarship research, applications, and proof documents."
  },
  {
    question: "Can you review my documents only?",
    answer:
      "Absolutely. We offer standalone document review and optimization services."
  },
  {
    question: "Do you serve countries outside Tunisia?",
    answer:
      "Yes. VisaWay supports international clients, with core operations in North Africa and Europe."
  }
];

export const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="section-padding py-20" id="faq">
      <SectionTitle
        eyebrow="FAQ"
        title="Answers to the questions you ask most"
        description="We keep the process transparent from day one."
      />
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = active === index;
          return (
            <div key={faq.question} className="glass rounded-2xl p-5">
              <button
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setActive(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="text-base font-semibold text-ink">{faq.question}</span>
                <ChevronDown className={cn("h-5 w-5 transition", isOpen && "rotate-180")} />
              </button>
              {isOpen && (
                <p id={`faq-${index}`} className="mt-3 text-sm text-ink/70">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
