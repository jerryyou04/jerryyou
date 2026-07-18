export const siteConfig = {
  name: "Jerry You",
  subtitle: "Computer Science @ University of Guelph",
  email: "mailto:jerryyou04@gmail.com",
  github: "https://github.com/jerryyou04",
  linkedin: "https://linkedin.com/in/jerryyou04",
  resume: "/resume",
};

export const navigation = [
  { label: "Experience", compactLabel: "Exp.", sectionId: "experience" },
  { label: "Projects", compactLabel: "Projects", sectionId: "projects" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    href: siteConfig.resume,
    icon: "resume",
    newTab: true,
  },
  {
    label: "Email",
    href: siteConfig.email,
    icon: "email",
    iconOnly: true,
  },
];

export const experiences = [
  {
    company: "TD Bank",
    role: "Software Developer Intern",
    dates: "Jan 2026 – Aug 2026",
    description: "Enterprise Risk Technology",
    technologies: [
      "Python",
      "JavaScript",
      "Jest",
      "ServiceNow",
      "MS SQL",
      "Power BI",
    ],
    logo: { type: "image", src: "/TD.png", alt: "TD Bank logo" },
  },
  {
    company: "Health Espresso",
    role: "Software Developer Intern",
    dates: "May 2025 – Aug 2025",
    description: "Application Development & Automation",
    technologies: [
      "TypeScript",
      "NestJS",
      "Flutter",
      "AWS",
      "Selenium",
      "PostgreSQL",
    ],
    logo: {
      type: "image",
      src: "/HE.png",
      alt: "Health Espresso logo",
    },
  },
  {
    company: "Johnson Electric",
    role: "Data Engineer Intern",
    dates: "Sep 2024 – Dec 2024",
    description: "Manufacturing Operations Digitization",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
      "Grafana",
      "Metabase",
    ],
    logo: {
      type: "image",
      src: "/JE.png",
      alt: "Johnson Electric logo",
    },
  },
  {
    company: "University of Guelph",
    role: "Software Developer Intern",
    dates: "May 2024 – Aug 2024",
    description: "Biomechanics Research Software",
    technologies: ["Python", "JavaScript", "Visual3D"],
    logo: {
      type: "image",
      src: "/UofG.jpg",
      alt: "University of Guelph logo",
    },
  },
];

// TODO(portfolio-content): Supply these URLs if the project repositories become public.
// They intentionally remain null so the UI never renders a fabricated or broken source link.
export const projectLinkPlaceholders = {
  pcTrackerGitHubUrl: null,
  geoTuringGitHubUrl: null,
};

export const projects = [
  {
    name: "PCTracker",
    description:
      "A PC hardware price-tracking platform that aggregates marketplace listings, records price changes, and helps users compare components while planning builds.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "eBay API",
      "Nginx",
      "Gunicorn",
    ],
    githubUrl: projectLinkPlaceholders.pcTrackerGitHubUrl,
    demoUrl: "https://pctracker.ca",
    preview: {
      src: "/PCTracker.png",
      alt: "PCTracker component search and price comparison interface",
    },
  },
  {
    name: "GeoTuring",
    description:
      "A real-time social-deduction game where players chat with a person or AI, then identify their opponent’s location or model family.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "OpenRouter",
    ],
    githubUrl: projectLinkPlaceholders.geoTuringGitHubUrl,
    demoUrl: "https://geoturing.com",
    preview: {
      src: "/GeoTuring.png",
      alt: "GeoTuring real-time chat and identity guessing interface",
    },
  },
];
