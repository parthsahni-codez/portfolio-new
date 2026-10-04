import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { profile, resumeHref } from "@/data/site";

/** Splits a word into letters that rise in one after another on load. */
function RisingWord({ word, offset = 0 }: { word: string; offset?: number }) {
  return (
    <span className="rise-word" aria-hidden="true">
      {word.split("").map((letter, index) => (
        <span key={index} className="rise-letter" style={{ "--i": index + offset } as CSSProperties}>
          {letter}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero" id="index" aria-labelledby="hero-title">
      <div className="hero-meta mono">
        <span>(Portfolio)</span>
        <span className="hero-meta-mid">
          {profile.study}, {profile.collegeShort}
        </span>
        {/* Shown on small screens, where the header has no room for the Resume button. */}
        <a className="hero-meta-end resume-link" href={resumeHref} target="_blank" rel="noreferrer">
          Resume <span aria-hidden="true">↗</span>
          <span className="visually-hidden"> (PDF, opens in a new tab)</span>
        </a>
      </div>

      <h1 id="hero-title" className="hero-name">
        <span className="visually-hidden">
          {profile.name}, {profile.shortRole}
        </span>
        <RisingWord word="PARTH" />
        <RisingWord word="SAHNI" offset={5} />
      </h1>

      <div className="hero-body">
        <figure className="hero-portrait">
          <div className="hero-portrait-frame">
            <Image
              src="/images/hero-portrait-viewpoint.jpg"
              alt="Parth Sahni leaning on a railing at a hilltop viewpoint, misty valley behind him"
              fill
              priority
              quality={90}
              sizes="(max-width: 640px) 50vw, (max-width: 1100px) 30vw, 340px"
              className="hero-portrait-image"
            />
          </div>
        </figure>

        <div className="hero-role" aria-hidden="true">
          <span className="hero-role-line">
            <span className="hero-role-small mono">(A)</span>UI/UX Designer
          </span>
          <span className="hero-role-line outline">
            <span className="hero-role-small mono">(B)</span>+ Creative Developer
          </span>
        </div>

        <div className="hero-intro">
          <p className="hero-lede">
            <span className="hero-lede-line">I design interfaces in Figma and build them in code.</span>{" "}
            <span className="hero-lede-line hero-lede-sub">
              A {profile.year.toLowerCase()} {profile.study} student at {profile.college}, working where visual
              design and frontend meet.
            </span>
          </p>
          <Link href="#work" className="hero-cta">
            <span>See my projects</span>
            <span aria-hidden="true" className="hero-cta-arrow">
              <span className="arrow">↓</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="hero-foot mono">
        <span>Scroll</span>
        <span className="hero-foot-line" aria-hidden="true" />
        <span>04 Projects</span>
      </div>
    </section>
  );
}
