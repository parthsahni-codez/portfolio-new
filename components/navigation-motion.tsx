"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { homeSections } from "@/data/site";

type Phase = "idle" | "in" | "out";
type Destination = { href: string; pathname: string; kicker: string; title: string };

const CURTAIN_IN_MS = 650;
const CURTAIN_OUT_MS = 800;

const pageLabels: Record<string, string> = {
  "/": "Index",
  "/work": "Projects",
  "/resume": "Resume",
  "/privacy": "Privacy",
  "/terms": "Terms",
};

function describe(url: URL): Destination {
  const hash = url.hash.slice(1);
  const section = homeSections.find((entry) => entry.id === hash);
  const project = projects.find((entry) => url.pathname === `/work/${entry.slug}`);

  let kicker = "Next page";
  let title = pageLabels[url.pathname] ?? "Loading";
  if (project) {
    kicker = `Project ${project.number}`;
    title = project.title;
  } else if (section) {
    kicker = `Section ${String(homeSections.indexOf(section) + 1).padStart(2, "0")}`;
    title = section.label;
  }

  return { href: url.pathname + url.search + url.hash, pathname: url.pathname, kicker, title };
}

const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

/** Eased scroll to a y position. Any wheel, touch or key input from the user cancels it. */
function animateScroll(to: number, onDone: () => void) {
  const from = window.scrollY;
  const distance = to - from;
  if (Math.abs(distance) < 2) {
    onDone();
    return () => {};
  }

  const duration = Math.min(1400, Math.max(650, Math.abs(distance) * 0.4));
  let start: number | undefined;
  let frame = 0;

  const cancel = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("keydown", cancel);
  };

  const step = (now: number) => {
    start ??= now;
    const progress = Math.min(1, (now - start) / duration);
    window.scrollTo(0, from + distance * easeInOutQuart(progress));
    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      cancel();
      onDone();
    }
  };

  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("keydown", cancel);
  frame = requestAnimationFrame(step);
  return cancel;
}

/** Document y of an element's layout box, ignoring transforms such as the page entrance animation. */
function layoutTop(element: HTMLElement) {
  let top = 0;
  for (let node: HTMLElement | null = element; node; node = node.offsetParent as HTMLElement | null) {
    top += node.offsetTop;
  }
  return top;
}

function scrollPadding() {
  return parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
}

function scrollToTarget(target: HTMLElement, hash: string) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const to = Math.min(max, Math.max(0, layoutTop(target) - scrollPadding()));

  return animateScroll(to, () => {
    if (hash && location.hash !== hash) history.pushState(history.state, "", hash);
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });

    // Brief cue on the section that was just reached.
    target.removeAttribute("data-arrived");
    void target.offsetWidth;
    target.setAttribute("data-arrived", "");
    window.setTimeout(() => target.removeAttribute("data-arrived"), 1600);
  });
}

/**
 * Handles motion for every internal link click:
 * - same page + #section: eased scroll to the section
 * - another page: a curtain wipes over, the route changes underneath, the curtain lifts away
 */
export function NavigationMotion() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [destination, setDestination] = useState<Destination | null>(null);
  const cancelScroll = useRef<() => void>(() => {});
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms));

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin) return;
      // Files (the resume PDF, images) are not app routes: let the browser open them.
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Same page: scroll there instead of jumping.
      if (url.pathname === location.pathname && url.search === location.search) {
        const target = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : document.body;
        if (!target || reduceMotion) return;
        event.preventDefault();
        cancelScroll.current();
        // Wait a frame so a closing mobile menu can release the scroll lock first.
        requestAnimationFrame(() => {
          cancelScroll.current = scrollToTarget(target === document.body ? document.documentElement : target, url.hash);
        });
        return;
      }

      // Another page: play the curtain, then navigate underneath it.
      if (reduceMotion) return;
      event.preventDefault();
      cancelScroll.current();
      timers.current.forEach(window.clearTimeout);
      timers.current = [];

      const next = describe(url);
      setDestination(next);
      setPhase("in");
      later(() => router.push(next.href), CURTAIN_IN_MS);
      // Safety net: never leave the curtain down if navigation stalls.
      later(() => setPhase((current) => (current === "in" ? "out" : current)), 6000);
    };

    window.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("click", onClick, true);
      cancelScroll.current();
      timers.current.forEach(window.clearTimeout);
    };
  }, [router]);

  // Lift the curtain once the destination route has rendered.
  useEffect(() => {
    if (phase !== "in" || !destination || pathname !== destination.pathname) return;
    const lift = window.setTimeout(() => {
      // Next's hash scroll ignores the sticky header, so line the section up while still covered.
      const hash = new URL(destination.href, location.href).hash;
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (target) window.scrollTo(0, layoutTop(target) - scrollPadding());
      setPhase("out");
    }, 150);
    return () => window.clearTimeout(lift);
  }, [pathname, phase, destination]);

  // Reset to the resting state once the curtain has fully lifted.
  useEffect(() => {
    if (phase !== "out") return;
    const done = window.setTimeout(() => setPhase("idle"), CURTAIN_OUT_MS);
    return () => window.clearTimeout(done);
  }, [phase]);

  return (
    <div className="curtain" data-phase={phase} aria-hidden="true">
      <div className="curtain-inner">
        <span className="curtain-kicker mono">
          <span>(Next)</span>
          <span>{destination?.kicker}</span>
        </span>
        <span className="curtain-title-mask">
          <span className="curtain-title display">{destination?.title}</span>
        </span>
        <span className="curtain-bar" />
      </div>
    </div>
  );
}
