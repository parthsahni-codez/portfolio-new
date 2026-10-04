import Link from "next/link";
import { ContactLink } from "@/components/contact-link";
import { contactLinks, profile, resumeHref } from "@/data/site";

const pageLinks = [
  { href: "/work", label: "All projects" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-name">
          <span className="display">{profile.name}</span>
          <span className="site-footer-role">{profile.shortRole}</span>
        </div>

        <nav className="site-footer-col" aria-label="Footer">
          <span className="mono muted">Pages</span>
          {pageLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
          <a href={resumeHref} className="footer-link" target="_blank" rel="noreferrer">
            Resume (PDF)<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </nav>

        <div className="site-footer-col">
          <span className="mono muted">Contact</span>
          {contactLinks.map((link) => (
            <ContactLink key={link.label} link={link} className="footer-link" />
          ))}
        </div>
      </div>

      <div className="site-footer-base mono">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top" className="footer-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
