import type { ContactLink as ContactLinkData } from "@/data/site";

/** Outbound contact link. Email opens the mail app; everything else opens in a new tab. */
export function ContactLink({ link, className }: { link: ContactLinkData; className?: string }) {
  const external = !link.href.startsWith("mailto:");

  return (
    <a
      className={["contact-link", className].filter(Boolean).join(" ")}
      href={link.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span className="contact-link-label">{link.label}</span>
      <span className="contact-link-value">{link.display}</span>
      <span aria-hidden="true" className="arrow">
        ↗
      </span>
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  );
}
