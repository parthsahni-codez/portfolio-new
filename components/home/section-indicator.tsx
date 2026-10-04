"use client";

import { useEffect, useState } from "react";
import { homeSections } from "@/data/site";

/**
 * Fixed "03 / 06 Capabilities" counter that follows whichever section crosses the middle
 * of the screen. Hidden over the hero and the footer so it never covers them.
 */
export function SectionIndicator() {
  const [active, setActive] = useState(-1);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("index");
    const footer = document.querySelector(".site-footer");
    const elements = homeSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === hero) return setActive(-1);
          const index = homeSections.findIndex((section) => section.id === entry.target.id);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    const footerObserver = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));

    if (hero) sectionObserver.observe(hero);
    elements.forEach((element) => sectionObserver.observe(element));
    if (footer) footerObserver.observe(footer);

    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const current = homeSections[Math.max(active, 0)];
  const pad = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="section-indicator mono" aria-hidden="true" data-hidden={active < 0 || footerVisible || undefined}>
      <span className="section-indicator-count">
        <span key={active} className="section-indicator-current">
          {pad(Math.max(active, 0) + 1)}
        </span>
        <span className="muted">/ {pad(homeSections.length)}</span>
      </span>
      <span key={current.id} className="section-indicator-label">
        {current.label}
      </span>
      <span className="section-indicator-progress" />
    </div>
  );
}
