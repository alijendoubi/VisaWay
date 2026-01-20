"use client";

import { useEffect } from "react";
import { cn } from "@/components/ui/cn";

export const Toast = ({
  message,
  open,
  onClose
}: {
  message: string;
  open: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-xl bg-ink px-4 py-3 text-sm text-white shadow-soft transition",
        open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
};
