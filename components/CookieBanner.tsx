"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("visaway-cookie");
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: "accepted" | "declined") => {
    localStorage.setItem("visaway-cookie", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-soft md:left-auto md:right-6 md:max-w-md">
      <p className="text-sm text-ink/70">
        We use cookies to personalize your experience. Choose your preference.
      </p>
      <div className="mt-4 flex gap-3">
        <Button variant="primary" size="sm" onClick={() => handleChoice("accepted")}
          ariaLabel="Accept cookies">
          Accept
        </Button>
        <Button variant="ghost" size="sm" onClick={() => handleChoice("declined")}
          ariaLabel="Decline cookies">
          Decline
        </Button>
      </div>
    </div>
  );
};
