"use client";

import { useSearchParams } from "next/navigation";
import { EligibilityFlow } from "@/components/EligibilityFlow";

export const EligibilityClient = () => {
  const searchParams = useSearchParams();
  const visaType = searchParams.get("visaType") || "";
  const destination = searchParams.get("destination") || "";
  const timeframe = searchParams.get("timeframe") || "";

  return (
    <EligibilityFlow
      initialVisaType={visaType}
      initialDestination={destination}
      initialTimeframe={timeframe}
    />
  );
};
