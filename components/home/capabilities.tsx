import { capabilityGroups, interests } from "@/data/site";

export function Capabilities() {
  return (
    <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities-head">
        <div className="section-label mono">
          <span>(02)</span>
          <span>Toolkit</span>
        </div>
        <h2 id="capabilities-title" className="display capabilities-title" data-reveal>
          Capabilities
        </h2>
      </div>

      <div className="capabilities-grid">
        {capabilityGroups.map((group, groupIndex) => (
          <div key={group.label} className="capability-group" data-reveal>
            <div className="capability-group-head mono">
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              <h3>{group.label}</h3>
              <span className="muted">({group.items.length})</span>
            </div>
            <ul className="capability-list">
              {group.items.map((item) => (
                <li key={item} className="capability-item display">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="interests" data-reveal>
        <span className="mono muted">Areas I keep coming back to</span>
        <p className="interests-list">
          {interests.map((interest, index) => (
            <span key={interest}>
              {interest}
              {index < interests.length - 1 && <span className="interests-sep"> / </span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
