import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Shows the project's image. Falls back to a typographic cover in the project's colours
 * if a project has no image yet.
 */
export function ProjectVisual({ project, sizes, priority, className }: ProjectVisualProps) {
  const style = {
    "--cover-bg": project.cover.background,
    "--cover-ink": project.cover.ink,
    "--cover-accent": project.cover.accent,
    "--cover-chars": project.cover.word.length,
    ...(project.image && { "--media-ratio": `${project.image.width} / ${project.image.height}` }),
  } as CSSProperties;

  return (
    <div className={["project-visual", className].filter(Boolean).join(" ")} style={style}>
      {project.image ? (
        <div className="project-visual-media" data-fit={project.image.fit}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes={project.image.fit === "logo" ? "(max-width: 760px) 75vw, 610px" : sizes}
            priority={priority}
            className="project-visual-image"
            data-fit={project.image.fit}
          />
        </div>
      ) : (
        <div className="project-cover" role="img" aria-label={`${project.title} cover`}>
          <span className="project-cover-word" aria-hidden="true">
            {project.cover.word}
          </span>
          <span className="project-cover-label mono" aria-hidden="true">
            {project.number} / {project.category}
          </span>
        </div>
      )}
    </div>
  );
}
