import { About } from "@/components/home/about";
import { Capabilities } from "@/components/home/capabilities";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { SectionIndicator } from "@/components/home/section-indicator";
import { SelectedWork } from "@/components/home/selected-work";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <>
      <PageTransition>
        <Hero />
        <About />
        <Capabilities />
        <Process />
        <SelectedWork />
        <Contact />
      </PageTransition>
      {/* Outside the animated wrapper so its fixed positioning stays relative to the viewport. */}
      <SectionIndicator />
    </>
  );
}
