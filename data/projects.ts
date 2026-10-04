export type ProjectCover = {
  /** Background of the generated cover when no image is available. */
  background: string;
  /** Main type colour on the cover. */
  ink: string;
  /** Secondary accent used for small details. */
  accent: string;
  /** Large word set on the cover. */
  word: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  discipline: string;
  year?: string;
  summary: string;
  description?: string;
  /** Real project imagery. Leave undefined until an asset exists. */
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** "contain" keeps device mockups whole; "logo" shows a small mark centred at a capped size. */
    fit?: "cover" | "contain" | "logo";
    /** Required attribution for third-party imagery. */
    credit?: { text: string; href: string };
  };
  cover: ProjectCover;
  role?: string;
  /** Only tools confirmed for this project. Empty renders nothing. */
  tools: string[];
  /** What the project covers. Only list things that were actually designed. */
  scope: { heading: string; items: string[] };
  /** What the project set out to do. Only from the brief or existing write-ups. */
  goal?: string;
  approach?: { heading: string; items: string[] };
  features?: string[];
  prototypeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "playday",
    number: "01",
    title: "PlayDay Sports App",
    category: "Mobile App",
    discipline: "UI/UX Design",
    year: "2024",
    summary:
      "A sports app for finding venues, matching with players and booking a game, designed end to end for mobile.",
    description:
      "PlayDay is a sports venue discovery, matchmaking, scheduling and booking app. I designed the full mobile experience: getting in, finding a venue, finding people to play with, and booking a slot for cricket, football, pickleball or badminton, all the way to a QR confirmation at the gate.",
    image: {
      src: "/images/playday-project.png",
      alt: "PlayDay splash screen on a phone: lime trophy mark, the PlayDay wordmark and Get Started and Sign In buttons over a dark stadium",
      width: 1432,
      height: 768,
      fit: "contain",
    },
    cover: { background: "#000000", ink: "#d4ff1e", accent: "#d4ff1e", word: "PlayDay" },
    role: "UI/UX Designer",
    tools: ["Figma", "Photoshop"],
    scope: {
      heading: "Screens designed",
      items: [
        "Splash screen",
        "Sign in / Register",
        "Home dashboard",
        "Matchmaking",
        "Athlete profile",
        "Booking and scheduling",
        "Discovery and search",
        "Cricket booking",
        "Football booking",
        "Pickleball booking",
        "Badminton booking",
        "Booking confirmation",
        "QR code",
        "Venue details",
      ],
    },
    goal: "Bring venue discovery, finding people to play with, scheduling and booking into one mobile app, from the first screen to a QR confirmation at the gate.",
    features: [
      "Venue discovery and search",
      "Matchmaking with other players",
      "Athlete profiles",
      "Booking and scheduling for cricket, football, pickleball and badminton",
      "Booking confirmation with a QR code",
      "Venue details",
    ],
    approach: {
      heading: "Design direction",
      items: [
        "Dark premium interface",
        "Neon lime accents",
        "Sports-focused visual language",
        "A consistent UI system across every sport",
      ],
    },
    prototypeUrl:
      "https://www.figma.com/proto/lTYWkqjXWH5gQDPpLI3DB2/PlayDay?node-id=1-134&p=f&viewport=30%2C228%2C0.13&t=UcF0wAmLmei4PQ5X-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A134&page-id=0%3A1",
  },
  {
    slug: "swiggy-login",
    number: "02",
    title: "Swiggy Login Page",
    category: "Login Experience",
    discipline: "UI/UX Design",
    summary:
      "A focused study of one screen: the Swiggy login, reworked for clearer hierarchy, responsive layouts and better feedback.",
    description:
      "A UI/UX project centred on the Swiggy login experience. The work looks at a single, high-traffic moment and asks how hierarchy, layout and small interface details can make getting in feel quicker and clearer.",
    image: {
      src: "/images/swiggy-icon.png",
      alt: "Swiggy app icon: a white location pin shaped like an S on an orange rounded square",
      width: 1600,
      height: 1600,
      fit: "contain",
    },
    prototypeUrl:
      "https://www.figma.com/proto/XMJYDi7z1Deg6gqzBsmx7t/Untitled?node-id=4-12&p=f&viewport=1811%2C663%2C0.16&t=8fc3ilR35Vmxbpxr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A12&show-proto-sidebar=1&page-id=",
    cover: { background: "#fff1e6", ink: "#ffffff", accent: "#3d1d00", word: "Swiggy" },
    role: "UI/UX Designer",
    tools: ["Figma"],
    goal: "Rework the Swiggy login so the hierarchy is clearer, the layout adapts across screen sizes, and the interface gives better feedback.",
    approach: {
      heading: "Design approach",
      items: [
        "Followed patterns people already know from Swiggy and Zomato to keep the flow usable and consistent",
        "Built components with Auto Layout and reusable styles so the design stays clean and scalable",
        "Paid close attention to spacing, typography and colour balance",
      ],
    },
    features: [
      "Login interface",
      "Splash screen flow and tab navigation with smooth transitions",
      "Home screen and food category pages",
      "Responsive layouts",
      "Micro-interactions",
    ],
    scope: {
      heading: "Focus areas",
      items: [
        "Login interface",
        "Visual hierarchy",
        "User experience",
        "Responsive design",
        "Interface details",
        "Micro-interactions",
      ],
    },
  },
  {
    slug: "monster-energy",
    number: "03",
    title: "Monster Energy Drink Website",
    category: "Web Design",
    discipline: "Visual + Web Design",
    summary:
      "A concept website built around the energy of the brand: bold type, hard contrast and a sport-driven visual language.",
    description:
      "A self-initiated web design project exploring an immersive, Monster Energy inspired digital experience. This is a concept piece, not an official Monster Energy website or a client commission.",
    image: {
      src: "/images/monster-energy-can.jpg",
      alt: "A black Monster Energy can with the green claw logo, photographed against a dark backdrop",
      width: 1920,
      height: 1280,
      credit: {
        text: "Photo: DYVER, CC BY-SA 4.0, via Wikimedia Commons",
        href: "https://commons.wikimedia.org/wiki/File:Monster_Energy_Mega_can.jpg",
      },
    },
    prototypeUrl:
      "https://www.figma.com/proto/AmltFIoTLcs2z3ISnrjyAI/Monster-India?node-id=37-15436&p=f&viewport=714%2C60%2C0.09&t=NDsKFy3Wz85TQebc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    cover: { background: "#0a0a0a", ink: "#9be22d", accent: "#f2f2f2", word: "Monster" },
    tools: [],
    goal: "Create an immersive, Monster Energy inspired web experience: high energy, bold typography and strong visual compositions.",
    scope: {
      heading: "Visual direction",
      items: [
        "High energy",
        "Bold typography",
        "Strong visual compositions",
        "Dark, high-contrast aesthetic",
        "Sport and performance language",
        "Interactive web experience",
      ],
    },
  },
  {
    slug: "nestmates",
    number: "04",
    title: "NestMates Website",
    category: "Website",
    discipline: "UI/UX + Web Design",
    summary: "A website and interface project for NestMates, built around the idea of finding your people.",
    description: "A website and UI project for NestMates.",
    image: {
      src: "/images/nestmates-logo.png",
      alt: "NestMates logo: a house icon in a violet rounded square beside the wordmark and the line Find your people",
      width: 610,
      height: 195,
      fit: "logo",
    },
    prototypeUrl:
      "https://www.figma.com/proto/vZVMocgzWtTHceekBIoYkX/NestMates?node-id=1-659&p=f&viewport=160%2C29%2C0.1&t=xXdGwh7SejYqKVwI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A659&page-id=0%3A1",
    cover: { background: "#fefefe", ink: "#2b2a26", accent: "#b4532a", word: "NestMates" },
    tools: [],
    scope: {
      heading: "Project",
      items: ["Website design", "User interface"],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  return { next, previous };
}
