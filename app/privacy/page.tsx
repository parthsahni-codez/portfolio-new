import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

const privacyItems = [
  {
    heading: "Data collected",
    text: "This site only collects information that is necessary for basic website operation and contact. This includes form submissions or email messages that you send directly through the contact links on this site.",
  },
  {
    heading: "Use of information",
    text: "Any information you send is used only to respond to your inquiry or provide the requested information. It is not used for marketing or sales purposes.",
  },
  {
    heading: "Third parties",
    text: "This website may link to external services such as GitHub or LinkedIn. Those sites have their own privacy practices and are not controlled by this portfolio.",
  },
  {
    heading: "Retention",
    text: "Any direct communication received through the portfolio is kept only as long as needed to respond to the message or maintain a relevant business record.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This privacy policy explains what data is collected on this site and how it is used."
      items={privacyItems}
    />
  );
}
