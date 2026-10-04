import { PageTransition } from "@/components/page-transition";

type LegalPageProps = {
  title: string;
  intro: string;
  items: { heading: string; text: string }[];
};

export function LegalPage({ title, intro, items }: LegalPageProps) {
  return (
    <PageTransition>
      <section className="page-head">
        <div className="section-label mono">
          <span>(Legal)</span>
          <span>Site policy</span>
        </div>
        <h1 className="page-title page-title-small display">{title}</h1>
        <p className="page-lede">{intro}</p>
      </section>

      <ol className="legal-list">
        {items.map((item, index) => (
          <li key={item.heading} className="legal-row">
            <span className="mono muted">{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </PageTransition>
  );
}
