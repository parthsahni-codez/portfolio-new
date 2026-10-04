import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectVisual } from "@/components/project-visual";
import { getAdjacentProjects, projects, type Project } from "@/data/projects";

function PrototypeButton({ project, className }: { project: Project; className?: string }) {
  if (!project.prototypeUrl) return null;

  return (
    <a
      className={["spread-button", className].filter(Boolean).join(" ")}
      href={project.prototypeUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span>View Figma Prototype</span>
      <span aria-hidden="true" className="arrow">
        ↗
      </span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

function List({ items, numbered }: { items: string[]; numbered?: boolean }) {
  return (
    <ul className="case-scope-list">
      {items.map((item, index) => (
        <li key={item}>
          {numbered && <span className="mono muted">{String(index + 1).padStart(2, "0")}</span>}
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const { next } = getAdjacentProjects(project.slug);

  // Only sections with real content are shown, numbered in order.
  const sections: { title: string; content: ReactNode }[] = [
    { title: "Overview", content: <p className="case-lead">{project.description ?? project.summary}</p> },
    ...(project.goal ? [{ title: "Goal", content: <p className="case-lead">{project.goal}</p> }] : []),
    ...(project.approach
      ? [{ title: project.approach.heading, content: <List items={project.approach.items} /> }]
      : []),
    ...(project.features ? [{ title: "Key features", content: <List items={project.features} /> }] : []),
    { title: project.scope.heading, content: <List items={project.scope.items} numbered /> },
  ];

  return (
    <article className="case">
      <div className="case-top mono">
        <Link href="/#work" className="text-link">
          <span aria-hidden="true" className="arrow">
            ←
          </span>
          <span>All projects</span>
        </Link>
        <span>
          Project {project.number} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <header className="case-head">
        <h1 className="case-title display">{project.title}</h1>

        <dl className="case-facts">
          <div>
            <dt className="mono muted">Category</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt className="mono muted">Discipline</dt>
            <dd>{project.discipline}</dd>
          </div>
          {project.role && (
            <div>
              <dt className="mono muted">My role</dt>
              <dd>{project.role}</dd>
            </div>
          )}
          {project.year && (
            <div>
              <dt className="mono muted">Year</dt>
              <dd>{project.year}</dd>
            </div>
          )}
          {project.tools.length > 0 && (
            <div>
              <dt className="mono muted">Tools</dt>
              <dd>{project.tools.join(", ")}</dd>
            </div>
          )}
        </dl>

        <PrototypeButton project={project} className="case-cta" />
      </header>

      <figure className="case-figure">
        <ProjectVisual project={project} sizes="(max-width: 1400px) 100vw, 1400px" priority className="case-visual" />
        {project.image?.credit && (
          <figcaption className="case-credit">
            <a href={project.image.credit.href} target="_blank" rel="noreferrer">
              {project.image.credit.text}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </figcaption>
        )}
      </figure>

      <div className="case-sections">
        {sections.map((section, index) => (
          <section key={section.title} className="case-section" data-reveal>
            <h2 className="case-section-title mono">
              <span className="muted">({String(index + 1).padStart(2, "0")})</span>
              {section.title}
            </h2>
            <div className="case-section-body">{section.content}</div>
          </section>
        ))}
      </div>

      {project.prototypeUrl && (
        <div className="case-prototype" data-reveal>
          <p className="case-lead">See the full flow, screen by screen, in the interactive prototype.</p>
          <PrototypeButton project={project} />
        </div>
      )}

      <Link href={`/work/${next.slug}`} className="case-next">
        <span className="mono muted">Next project / {next.number}</span>
        <span className="case-next-title display">{next.title}</span>
        <span aria-hidden="true" className="case-next-arrow">
          →
        </span>
      </Link>
    </article>
  );
}
