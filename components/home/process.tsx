"use client";

import { useId, useState } from "react";
import { processSteps } from "@/data/site";

export function Process() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const total = String(processSteps.length).padStart(2, "0");

  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="process-head">
        <div className="section-label mono">
          <span>(03)</span>
          <span>How I work</span>
        </div>
        <h2 id="process-title" className="display process-title" data-reveal>
          Process
        </h2>
        <p className="process-lede">
          Eight steps, rarely in a straight line. Open any of them to see what happens there.
        </p>
      </div>

      <ol className="process-list">
        {processSteps.map((step, index) => {
          const isOpen = active === index;
          const number = String(index + 1).padStart(2, "0");
          const panelId = `${baseId}-panel-${index}`;
          const triggerId = `${baseId}-trigger-${index}`;

          return (
            <li key={step.title} className="process-row" data-open={isOpen || undefined}>
              <h3 className="process-row-heading">
                <button
                  type="button"
                  id={triggerId}
                  className="process-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActive(isOpen ? -1 : index)}
                >
                  <span className="process-number mono">{number}</span>
                  <span className="process-name display">{step.title}</span>
                  <span className="process-count mono" aria-hidden="true">
                    {number} / {total}
                  </span>
                  <span className="process-icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="process-panel"
                inert={!isOpen}
              >
                <div className="process-panel-inner">
                  <p className="process-text">{step.text}</p>
                  <ul className="process-outputs mono">
                    {step.outputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
