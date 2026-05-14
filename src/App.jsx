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
    : "border-white/30 bg-white/20 text-white shadow-[0_18px_50px_rgba(37,99,235,0.14)] hover:border-white/45 hover:bg-white/30 hover:text-white";

  return (
    <div className={darkMode ? "dark" : ""}>
      <AuroraBackground darkMode={darkMode}>
        <div className="absolute right-4 top-4 z-20 flex gap-2 sm:right-6 sm:top-6">
          <button
            aria-label="Use light mode"
            title="Light mode"
            onClick={() => setDarkMode(false)}
            className={`grid h-11 w-11 place-items-center rounded-full border p-0 backdrop-blur-md transition outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
              darkMode
                ? "border-white/10 bg-gray-700/80 text-white/55 hover:bg-gray-600/85 hover:text-yellow-300"
                : "border-white bg-white text-yellow-500 shadow-[0_0_0_2px_rgba(255,255,255,0.45)]"
            }`}
          >
            <FaSun size={18} />
          </button>

          <button
            aria-label="Use dark mode"
            title="Dark mode"
            onClick={() => setDarkMode(true)}
            className={`grid h-11 w-11 place-items-center rounded-full border p-0 backdrop-blur-md transition outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
              darkMode
                ? "border-indigo-400 bg-gray-700/90 text-blue-300 shadow-[0_0_0_1px_rgba(129,140,248,0.45)]"
                : "border-white/40 bg-white/25 text-white/75 hover:bg-white/35 hover:text-white"
            }`}
          >
            <FaMoon size={18} />
          </button>
        </div>

        <main className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center">
          <h1
            className="text-balance text-5xl font-bold leading-tight text-white drop-shadow-lg sm:text-6xl"
          >
            Hi, I'm Jerry You
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-300">
            CS @ UofG
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
