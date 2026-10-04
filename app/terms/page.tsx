import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
};

const termsItems = [
  {
    heading: "Website usage",
    text: "This portfolio is provided for informational and professional purposes. You may browse the content for personal or professional review, but you should not misuse the site, interfere with its operation, or reproduce protected content without permission.",
  },
  {
    heading: "Intellectual property",
    text: "The content, design, photography, and code shown on this portfolio are owned by Parth Sahni unless otherwise stated. The portfolio may contain third-party links and external assets that remain the property of their respective owners.",
  },
  {
    heading: "Portfolio content",
    text: "Project descriptions and portfolio content are presented to communicate the designer's work and process. They are not guarantees of business outcomes, returns, or research claims.",
  },
  {
    heading: "External links",
    text: "This portfolio may contain links to external websites. These links are provided for convenience only and do not imply endorsement or responsibility for the content on those sites.",
  },
  {
    heading: "Accuracy",
    text: "Every effort is made to keep the site accurate and up to date, but information may change over time. The owner is not responsible for outdated information or external link content.",
  },
  {
    heading: "Limitation of liability",
    text: "This portfolio is provided as is. The owner does not accept liability for losses or damages arising from website use, access issues, or reliance on the information contained here.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms explain how this portfolio can be used and the limits of responsibility associated with it."
      items={termsItems}
    />
  );
}
