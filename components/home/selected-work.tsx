import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { projects, type Project } from "@/data/projects";

function ProjectSpread({ project, index }: { project: Project; index: number }) {
  return (
    <article className="spread">
      <div className="spread-head">
        <span className="spread-number display" aria-hidden="true">
          {project.number}
        </span>
        <h3 className="spread-title display">
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
      </div>

      <div className="spread-body">
        {/* Same destination as the title link, so it is hidden from keyboard and screen readers. */}
        <Link
          href={`/work/${project.slug}`}
          className="spread-visual"
          data-reveal="image"
          tabIndex={-1}
          aria-hidden="true"
        >
          <ProjectVisual
            project={project}
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 60vw, 820px"
            priority={index === 0}
          />
          <span className="spread-cta mono">
            Case study <span className="arrow">↗</span>
          </span>
        </Link>

        <div className="spread-info" data-reveal>
          <dl className="spread-facts mono">
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Discipline</dt>
              <dd>{project.discipline}</dd>
            </div>
            {project.year && (
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            )}
            {project.tools.length > 0 && (
              <div>
                <dt>Tools</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
            )}
          </dl>
          <p className="spread-summary">{project.summary}</p>
          <Link className="spread-button" href={`/work/${project.slug}`}>
            <span>View project</span>
            <span aria-hidden="true" className="arrow">
              →
            </span>
            <span className="visually-hidden">: {project.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="work-header">
        <div className="section-label mono">
          <span>(04)</span>
          <span>Index of projects</span>
        </div>
        <h2 id="work-title" className="work-title display" data-reveal>
          My Projects
          <span className="work-count mono" aria-hidden="true">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </h2>
      </div>

      <div className="spreads">
        {projects.map((project, index) => (
          <ProjectSpread key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="work-foot">
        <Link href="/work" className="text-link">
          <span>View all projects</span>
          <span aria-hidden="true" className="arrow">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
