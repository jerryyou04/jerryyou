import { createElement, useEffect, useState } from "react";
import {
  FiArrowUp,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import {
  experiences,
  navigation,
  projects,
  siteConfig,
  socialLinks,
} from "./data/portfolio";

const THEME_STORAGE_KEY = "jerry-you-portfolio-theme";

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  resume: FiFileText,
};

function getInitialTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  } catch {
    // Storage can be unavailable in strict privacy contexts; light remains the default.
  }

  return "light";
}

function scrollToSection(sectionId, { moveFocus = false } = {}) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  section.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  if (moveFocus) {
    section.focus({ preventScroll: true });
  }
}

function Header({ theme, onToggleTheme }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button
          className="wordmark"
          type="button"
          onClick={() => scrollToSection("top")}
          aria-label="Jerry You, back to top"
        >
          Jerry You
        </button>

        <nav className="primary-nav" aria-label="Primary navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.label}>
                <button
                  className="nav-link"
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  aria-label={item.label}
                >
                  <span className="nav-label-full">{item.label}</span>
                  <span className="nav-label-compact" aria-hidden="true">
                    {item.compactLabel}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Use ${nextTheme} theme`}
          title={`Use ${nextTheme} theme`}
        >
          {theme === "dark" ? (
            <FiSun aria-hidden="true" />
          ) : (
            <FiMoon aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="content-shell hero-content">
        <h1 id="hero-title">{siteConfig.name}</h1>
        <p className="hero-subtitle">{siteConfig.subtitle}</p>

        <div className="social-links" aria-label="Contact and profile links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`social-link${link.iconOnly ? " social-link--icon-only" : ""}`}
              aria-label={link.iconOnly ? "Email Jerry You" : link.label}
              title={link.label}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noreferrer" : undefined}
            >
              {createElement(socialIcons[link.icon], { "aria-hidden": true })}
              {!link.iconOnly && <span>{link.label}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", theme === "dark" ? "#08090b" : "#f5f6f8");

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // The selected theme still applies for this session when storage is unavailable.
    }
  }, [theme]);

  return (
    <div className="site-frame">
      <button
        className="skip-link"
        type="button"
        onClick={() => scrollToSection("main-content", { moveFocus: true })}
      >
        Skip to content
      </button>

      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          )
        }
      />

      <main id="main-content" tabIndex="-1">
        <Hero />

        <section
          className="content-shell page-section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <SectionHeading id="experience-heading">Experience</SectionHeading>
          <div className="experience-list">
            {experiences.map((experience) => (
              <ExperienceItem key={experience.company} experience={experience} />
            ))}
          </div>
        </section>

        <section
          className="content-shell page-section"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <SectionHeading id="projects-heading">Featured projects</SectionHeading>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="content-shell site-footer">
        <p>© {new Date().getFullYear()} Jerry You</p>
        <button
          className="back-to-top"
          type="button"
          onClick={() => scrollToSection("top")}
        >
          Back to top
          <FiArrowUp aria-hidden="true" />
        </button>
      </footer>
    </div>
  );
}
