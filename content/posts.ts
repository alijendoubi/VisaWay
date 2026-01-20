export type BlogSection = {
  id: string;
  title: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "student-visa-checklist-2025",
    title: "The 2025 Student Visa Checklist You Can Actually Follow",
    date: "2025-02-12",
    readingTime: "6 min read",
    tags: ["Student Visa", "Checklist"],
    excerpt: "A practical checklist to keep your admission and visa files organized from day one.",
    sections: [
      {
        id: "preparation",
        title: "Start with your admission timeline",
        body: [
          "Align your visa file with university deadlines before you begin. It helps you collect documents in a calm, linear flow.",
          "Map out acceptance letters, tuition deposits, and proof of funds in one shared folder."
        ]
      },
      {
        id: "financials",
        title: "Organize proof of funding",
        body: [
          "Most embassies want clear documentation of tuition coverage and living expenses. Use a single summary sheet to describe your funding sources.",
          "VisaWay reviews financial statements and ensures translations match embassy requirements."
        ]
      },
      {
        id: "appointments",
        title: "Plan your appointment early",
        body: [
          "Appointments fill quickly in peak seasons. Aim to book at least eight weeks ahead.",
          "Keep all biometric confirmations in the same folder for faster embassy check-ins."
        ]
      }
    ]
  },
  {
    slug: "work-visa-sponsorship-guide",
    title: "Work Visa Sponsorship: What Employers Expect",
    date: "2025-01-28",
    readingTime: "5 min read",
    tags: ["Work Visa", "Employer"],
    excerpt: "A clear breakdown of how to align your contract, compliance, and embassy expectations.",
    sections: [
      {
        id: "contract",
        title: "Confirm your contract essentials",
        body: [
          "Your offer letter should mention role, salary, and start date in explicit terms.",
          "Embassies frequently verify employer credentials, so prepare notarized copies early."
        ]
      },
      {
        id: "compliance",
        title: "Support your employer compliance",
        body: [
          "Many countries require labor market approvals. VisaWay helps employers gather proof of recruitment efforts.",
          "Maintain a shared checklist so both parties submit documents on time."
        ]
      }
    ]
  },
  {
    slug: "business-visa-invitation-letter",
    title: "How to Secure a Strong Business Visa Invitation Letter",
    date: "2024-12-18",
    readingTime: "4 min read",
    tags: ["Professional Visa", "Business"],
    excerpt: "Invitation letters make or break business visa approvals. Here is how to get them right.",
    sections: [
      {
        id: "purpose",
        title: "Clarify the purpose of travel",
        body: [
          "Keep the invitation letter aligned with the business agenda and event itinerary.",
          "Include hosting company contact details and a direct reference to your visit."
        ]
      },
      {
        id: "supporting",
        title: "Match supporting documents",
        body: [
          "Attach your company registration, itinerary, and proof of employment to strengthen credibility.",
          "VisaWay can cross-check letter consistency with embassy templates."
        ]
      }
    ]
  },
  {
    slug: "embassy-interview-prep",
    title: "Embassy Interview Prep: Confidence Without Scripts",
    date: "2024-11-30",
    readingTime: "7 min read",
    tags: ["Interview", "Tips"],
    excerpt: "Prepare smartly for your interview with structure, honesty, and clarity.",
    sections: [
      {
        id: "mindset",
        title: "Build a calm interview mindset",
        body: [
          "You do not need rehearsed answers. You need a clear story about your goals and documents.",
          "Practice with a visa advisor who can simulate real embassy scenarios."
        ]
      },
      {
        id: "documents",
        title: "Know your key documents",
        body: [
          "Embassy officers expect quick access to admission letters, bank statements, and travel plans.",
          "Organize them in a logical order and bring both digital and paper copies."
        ]
      }
    ]
  },
  {
    slug: "visa-timeline-planning",
    title: "Visa Timeline Planning for Busy Professionals",
    date: "2024-10-15",
    readingTime: "5 min read",
    tags: ["Planning", "Professional Visa"],
    excerpt: "Plan a professional visa with minimal disruption by organizing milestones upfront.",
    sections: [
      {
        id: "schedule",
        title: "Map milestones backward",
        body: [
          "Start from your travel date and work backward for appointments, translations, and approvals.",
          "Use a shared calendar with your company to avoid last-minute rush."
        ]
      },
      {
        id: "fast-track",
        title: "Use priority lanes strategically",
        body: [
          "Some embassies offer priority submissions. Ensure eligibility and prepare extra fees in advance.",
          "VisaWay keeps a regional tracker of processing times for this purpose."
        ]
      }
    ]
  },
  {
    slug: "visa-document-mistakes",
    title: "Avoid These 8 Common Visa Document Mistakes",
    date: "2024-09-04",
    readingTime: "6 min read",
    tags: ["Documents", "Checklist"],
    excerpt: "Simple mistakes cause delays. Here is how to avoid the most common ones.",
    sections: [
      {
        id: "translations",
        title: "Incorrect translations",
        body: [
          "Always use certified translators and keep copies of the original documents.",
          "Mismatch in dates or names is a top reason for embassy clarification."
        ]
      },
      {
        id: "format",
        title: "Wrong file formatting",
        body: [
          "Embassies require specific photo sizes, file naming, and PDF formats.",
          "VisaWay provides a quick formatting checklist to avoid rework."
        ]
      }
    ]
  }
];

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
