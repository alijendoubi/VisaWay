"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/components/ui/cn";

export type AccordionItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div key={item.id} className="rounded-2xl border border-ink/10 bg-white/70 p-4">
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setActiveId(isOpen ? "" : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
            >
              <div>
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="text-xs text-ink/60">{item.description}</p>
              </div>
              <ChevronDown className={cn("h-5 w-5 transition", isOpen && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-3 space-y-2 text-sm text-ink/70">
                    {item.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
