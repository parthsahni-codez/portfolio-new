import type { CSSProperties } from "react";
import { profile } from "@/data/site";

const factGroups = [
  {
    title: "Person",
    facts: [
      { label: "Name", value: profile.name },
      { label: "Based in", value: `${profile.city}, ${profile.country}` },
    ],
  },
  {
    title: "Education",
    facts: [
      { label: "Studying", value: `${profile.study} (CSD)` },
      { label: "Year", value: profile.year },
      { label: "College", value: profile.college },
    ],
  },
  {
    title: "Practice",
    facts: [
      { label: "Focus", value: "UI/UX, visual design, frontend" },
      { label: "Also", value: "Video editing" },
    ],
  },
];

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="section-label mono">
        <span>(01)</span>
        <span>About</span>
      </div>

      <h2 id="about-title" className="about-quote display" data-reveal>
        I design it, <span className="outline">then I build it.</span>
      </h2>

      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <p>
            I&apos;m Parth, a {profile.study} student at {profile.college} in {profile.city}. Most of my time goes
            between Figma and a code editor, and I like it that way.
          </p>
          <p>
            I&apos;m drawn to interfaces with a point of view: strong typography, clear structure, and motion that
            explains something. Product flows, mobile apps and expressive websites are where I spend most of my
            energy right now.
          </p>
          <p>
            Knowing how things get built changes how I design them. I also edit video, which keeps me thinking about
            pacing and how things should move.
          </p>
        </div>

        <div className="about-facts" data-reveal="rows">
          {factGroups.map((group, groupIndex) => {
            const offset = factGroups.slice(0, groupIndex).reduce((sum, g) => sum + g.facts.length, 0);
            return (
              <div key={group.title} className="about-group">
                <h3 className="about-group-title mono">
                  <span className="muted">{String(groupIndex + 1).padStart(2, "0")}</span>
                  {group.title}
                </h3>
                <dl>
                  {group.facts.map((fact, index) => (
                    <div
                      key={fact.label}
                      className="about-fact"
                      style={{ "--i": offset + index } as CSSProperties}
                    >
                      <dt className="mono">{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
