import { ContactLink } from "@/components/contact-link";
import { contactLinks } from "@/data/site";

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="section-label mono">
        <span>(05)</span>
        <span>Say hello</span>
      </div>

      <h2 id="contact-title" className="contact-title display">
        <span className="contact-word" data-reveal>
          Contact
        </span>{" "}
        <span className="contact-word contact-word-me outline" data-reveal>
          Me
        </span>
      </h2>

      <div className="contact-grid">
        <p className="contact-lede">Have a project, a question, or want to talk design? Get in touch.</p>

        <ul className="contact-actions" aria-label="Contact methods">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <ContactLink link={link} className="contact-action" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
