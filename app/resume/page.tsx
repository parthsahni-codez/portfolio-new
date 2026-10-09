import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { projects } from "@/data/projects";
import { capabilityGroups, interests, profile, resumeHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Education, skills and projects of ${profile.name}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <PageTransition>
      <section className="page-head">
        <div className="section-label mono">
          <span>(CV)</span>
          <span>Updated resume</span>
        </div>
        <h1 className="page-title display">Resume</h1>
        <p className="page-lede">
          {profile.name}. {profile.shortRole}.
        </p>
        <a className="button-link page-head-action" href={resumeHref} target="_blank" rel="noreferrer">
          <span>Open resume (PDF)</span>
          <span aria-hidden="true" className="arrow">
            ↗
          </span>
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </section>

      <div className="resume">
        <section className="resume-row" aria-labelledby="resume-education">
          <h2 id="resume-education" className="mono muted">
            Education
          </h2>
          <div>
            <p className="resume-strong">{profile.college}</p>
            <p>
              {profile.study} (CSD), {profile.year.toLowerCase()}
            </p>
            <p>CGPA: {profile.cgpa}</p>
          </div>
        </section>

        <section className="resume-row" aria-labelledby="resume-projects">
          <h2 id="resume-projects" className="mono muted">
            Projects
          </h2>
          <ul className="resume-list">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="resume-project">
                  <span className="resume-strong">{project.title}</span>
                  <span className="muted">
                    {project.category}, {project.discipline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-row" aria-labelledby="resume-skills">
          <h2 id="resume-skills" className="mono muted">
            Skills
          </h2>
          <dl className="resume-skills">
            {capabilityGroups.map((group) => (
              <div key={group.label}>
                <dt className="resume-strong">{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-row" aria-labelledby="resume-interests">
          <h2 id="resume-interests" className="mono muted">
            Interests
          </h2>
          <p>{interests.join(", ")}</p>
        </section>
      </div>
    </PageTransition>
  );
}
