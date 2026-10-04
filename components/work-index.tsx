"use client";

import Link from "next/link";
import { useState } from "react";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/data/projects";

/**
 * Index list of projects. On pointer devices, hovering or focusing a row swaps the
 * preview in a sticky frame. On touch, each row carries its own preview instead.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="work-index">
      <ol className="work-index-list">
        {projects.map((project, index) => (
          <li key={project.slug} className="work-index-row" data-active={active === index || undefined}>
            <Link
              href={`/work/${project.slug}`}
              className="work-index-link"
              onPointerEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span className="work-index-number mono">{project.number}</span>
              <span className="work-index-title display">{project.title}</span>
              <span className="work-index-meta mono">
                <span>{project.category}</span>
                {project.year && <span className="muted">{project.year}</span>}
              </span>
              <span className="work-index-thumb">
                <ProjectVisual project={project} sizes="100vw" />
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="work-index-preview" aria-hidden="true">
        <div className="work-index-preview-frame">
          {projects.map((project, index) => (
            <div key={project.slug} className="work-index-preview-item" data-active={active === index || undefined}>
              <ProjectVisual project={project} sizes="(max-width: 1200px) 45vw, 620px" />
            </div>
          ))}
        </div>
        <div className="work-index-preview-caption mono">
          <span>{projects[active].number}</span>
          <span>{projects[active].discipline}</span>
        </div>
      </div>
    </div>
  );
}
