export type EligibilitySubmission = {
  visaType: string;
  destination: string;
  timeframe: string;
  nationality: string;
  ageRange: string;
  language: string;
  budget: string;
  hasSponsor: string;
  createdAt: string;
};

const submissions: EligibilitySubmission[] = [];

export const addSubmission = (submission: EligibilitySubmission) => {
  submissions.push(submission);
  if (typeof window !== "undefined") {
    const existing = JSON.parse(localStorage.getItem("eligibility_submissions") || "[]");
    existing.push(submission);
    localStorage.setItem("eligibility_submissions", JSON.stringify(existing));
  }
};

export const getSubmissions = () => submissions;
