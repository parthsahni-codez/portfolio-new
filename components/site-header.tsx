"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { navLinks, profile, resumeHref } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("menu-open");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header" data-open={open || undefined}>
      <div className="site-header-bar">
        <Link href="/" className="brand" aria-label={`${profile.name}, home`}>
          <span className="brand-name">{profile.name}</span>
          <span className="brand-meta">Portfolio ©{new Date().getFullYear()}</span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav-link">
              <span className="site-nav-index">{link.index}</span>
              <span className="roll" data-text={link.label}>
                <span>{link.label}</span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="site-header-end">
          <a href={resumeHref} className="header-resume" target="_blank" rel="noreferrer">
            <span className="roll" data-text="Resume">
              <span>Resume</span>
            </span>
            <span aria-hidden="true" className="arrow">
              ↗
            </span>
            <span className="visually-hidden"> (PDF, opens in a new tab)</span>
          </a>
          <Link href="/#contact" className="header-cta">
            <span className="roll" data-text="Get in touch">
              <span>Get in touch</span>
            </span>
            <span aria-hidden="true" className="arrow">
              ↗
            </span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              style={{ "--i": index } as CSSProperties}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-menu-index">{link.index}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <a href={resumeHref} target="_blank" rel="noreferrer">
            Resume (PDF) <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
