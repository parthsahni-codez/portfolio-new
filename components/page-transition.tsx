import type { ReactNode } from "react";

/**
 * Wraps each page. Every route renders a fresh wrapper, so its entrance animation plays
 * as the navigation curtain lifts (see NavigationMotion).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="page">{children}</div>;
}
