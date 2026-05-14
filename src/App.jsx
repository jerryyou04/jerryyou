import { createElement, useState } from "react";
import AuroraBackground from "./AuroraBackground";
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaRegFileAlt } from "react-icons/fa";

const links = [
  {
    href: "https://github.com/jerryyou04",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/jerryyou04",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "/resume",
    label: "Resume",
    Icon: FaRegFileAlt,
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const linkClass = darkMode
    ? "border-white/15 bg-white/10 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] hover:border-white/30 hover:bg-white/15 hover:text-white"
    : "border-slate-900/10 bg-white/55 text-slate-900 shadow-[0_18px_50px_rgba(37,99,235,0.14)] hover:border-blue-500/30 hover:bg-white/75 hover:text-blue-800";

  return (
    <div className={darkMode ? "dark" : ""}>
      <AuroraBackground darkMode={darkMode}>
        <div
          className={`absolute right-4 top-4 z-20 flex rounded-full border p-1 backdrop-blur-md sm:right-6 sm:top-6 ${
            darkMode
              ? "border-white/10 bg-black/25 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              : "border-white/60 bg-white/35 shadow-[0_12px_40px_rgba(37,99,235,0.18)]"
          }`}
        >
          <button
            aria-label="Use light mode"
            title="Light mode"
            onClick={() => setDarkMode(false)}
            className={`grid h-10 w-10 place-items-center rounded-full border-0 p-0 transition outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
              darkMode
                ? "bg-transparent text-white/50 hover:bg-white/10 hover:text-yellow-200"
                : "bg-white text-yellow-500 shadow-sm"
            }`}
          >
            <FaSun size={17} />
          </button>

          <button
            aria-label="Use dark mode"
            title="Dark mode"
            onClick={() => setDarkMode(true)}
            className={`grid h-10 w-10 place-items-center rounded-full border-0 p-0 transition outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
              darkMode
                ? "bg-white/15 text-blue-200 shadow-sm"
                : "bg-transparent text-slate-500 hover:bg-white/40 hover:text-blue-600"
            }`}
          >
            <FaMoon size={16} />
          </button>
        </div>

        <main className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center">
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.24em] ${
              darkMode ? "text-cyan-100/75" : "text-blue-900/60"
            }`}
          >
            CS @ UofG
          </p>

          <h1
            className={`text-balance text-5xl font-bold leading-tight drop-shadow-lg sm:text-6xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Hi, I'm Jerry You
          </h1>

          <p
            className={`mt-4 max-w-xl text-base leading-7 sm:text-lg ${
              darkMode ? "text-slate-200/80" : "text-slate-700"
            }`}
          >
            Software developer focused on practical systems, automation, and clean user-facing tools.
          </p>

          <div className="mt-8 grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
            {links.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-14 items-center justify-center gap-2.5 rounded-lg border px-5 text-sm font-semibold no-underline backdrop-blur-md transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${linkClass}`}
              >
                {createElement(Icon, {
                  className: "transition group-hover:scale-110",
                  size: 21,
                })}
                {label}
              </a>
            ))}
          </div>
        </main>
      </AuroraBackground>
    </div>
  );
}
