"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/components/ui/cn";

export const Carousel = ({
  children,
  className,
  title
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth"
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        {title ? <p className="text-sm font-semibold text-ink">{title}</p> : <span />}
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy("left")}
            className="rounded-full border border-ink/10 p-2 text-ink/70 hover:border-ink/30"
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="rounded-full border border-ink/10 p-2 text-ink/70 hover:border-ink/30"
            aria-label="Scroll right"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {children}
      </div>
    </div>
  );
};
