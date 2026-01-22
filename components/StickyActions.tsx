"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export const StickyActions = () => {
  return (
    <>
      <a
        href="https://wa.me/393520337275"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-cta-gradient px-4 py-3 text-sm font-semibold text-white shadow-soft"
        aria-label="Chat with VisaWay on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 sm:hidden">
        <Link
          href="/eligibility"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft"
          aria-label="Check eligibility"
        >
          <Sparkles className="h-4 w-4" />
          Check eligibility
        </Link>
      </div>
    </>
  );
};
