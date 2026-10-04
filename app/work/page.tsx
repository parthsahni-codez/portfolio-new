import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { WorkIndex } from "@/components/work-index";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected UI/UX and web design projects by Parth Sahni.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="page-head">
        <div className="section-label mono">
          <span>(Index)</span>
          <span>{String(projects.length).padStart(2, "0")} projects</span>
        </div>
        <h1 className="page-title display">Projects</h1>
        <p className="page-lede">
          Mobile apps, websites and interface studies. Hover a project to preview it, select it to open the case
          study.
        </p>
      </section>

      <WorkIndex projects={projects} />
    </PageTransition>
  );
}
