export const profile = {
  name: "Parth Sahni",
  shortRole: "UI/UX Designer + Creative Developer",
  study: "Computer Science & Design",
  year: "Third Year",
  college: "Dayananda Sagar College of Engineering",
  collegeShort: "DSCE",
  cgpa: "9.5",
  city: "Bangalore",
  country: "India",
  timeZone: "Asia/Kolkata",
};

export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

/** The only contact methods shown on the site. */
export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:work.parthsahni@gmail.com", display: "work.parthsahni@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/parth-sahni-a8158b336/", display: "parth-sahni" },
  { label: "WhatsApp", href: "https://wa.me/917042506018", display: "+91 70425 06018" },
];

export const resumeHref = "/resume/parth-sahni-resume.pdf";

export const navLinks = [
  { href: "/#about", label: "About", index: "01" },
  { href: "/#process", label: "Process", index: "02" },
  { href: "/#work", label: "Projects", index: "03" },
  { href: "/#contact", label: "Contact", index: "04" },
];

export const capabilityGroups = [
  {
    label: "Design",
    items: ["UI/UX Design", "Figma", "Adobe Photoshop"],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    label: "Languages",
    items: ["C", "C++", "Java", "Python"],
  },
  {
    label: "Workflow",
    items: ["Git", "GitHub"],
  },
];

export const interests = [
  "UI/UX Design",
  "Visual Design",
  "Frontend Development",
  "Creative Web Design",
  "Interaction Design",
  "Video Editing",
  "Digital Experiences",
];

export const processSteps = [
  {
    title: "Research",
    text: "Before opening Figma, I look at how people already solve the problem: the apps they use, the reviews they leave, the steps they skip. It is cheaper to learn this now than after the screens exist.",
    outputs: ["Competitor review", "User notes", "Problem list"],
  },
  {
    title: "Define",
    text: "I reduce the brief to one line: who this is for, and what they should be able to do faster. Every decision after this gets checked against that line.",
    outputs: ["Problem statement", "User goals", "Scope"],
  },
  {
    title: "Ideate",
    text: "Fast, rough sketches in many directions. The aim is to find the right structure before getting attached to any visual idea.",
    outputs: ["Sketches", "Layout options"],
  },
  {
    title: "Wireframe",
    text: "Grey boxes with real copy. I map every screen and the paths between them so missing steps in the journey show up early.",
    outputs: ["User flows", "Low-fidelity screens"],
  },
  {
    title: "Design",
    text: "Type, colour, spacing and components turn into a system. On PlayDay that meant a dark base with one loud lime accent doing the navigation work across every sport.",
    outputs: ["Visual system", "Components", "High-fidelity screens"],
  },
  {
    title: "Prototype",
    text: "I wire the screens together and click through them as a user would. If a flow feels slow or confusing in a prototype, it will feel worse in the product.",
    outputs: ["Clickable prototype", "Interaction notes"],
  },
  {
    title: "Develop",
    text: "This is where the CSD side comes in. I build interfaces in HTML, CSS, JavaScript and React, so I design with real constraints in mind and can take a layout into the browser myself.",
    outputs: ["Responsive build", "Interaction states"],
  },
  {
    title: "Refine",
    text: "Spacing, empty states, edge cases, motion. I check the work on real screen sizes and fix whatever does not hold up.",
    outputs: ["Polish pass", "Accessibility checks"],
  },
];

/** Numbered sections on the home page, in order. Matches the (01)...(05) labels. */
export const homeSections = [
  { id: "about", label: "About" },
  { id: "capabilities", label: "Capabilities" },
  { id: "process", label: "Process" },
  { id: "work", label: "My Projects" },
  { id: "contact", label: "Contact" },
];
