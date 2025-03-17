import { useState } from "react";
import AuroraBackground from "./AuroraBackground";
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaRegFileAlt } from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <AuroraBackground darkMode={darkMode}>
        {/* dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="group absolute top-6 right-6 p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition outline-none focus:outline-none focus-visible:ring-0 active:ring-0 select-none"
        >
          {darkMode ? (
            <FaSun className="text-white group-hover:text-yellow-300 transition" size={20} />
          ) : (
            <FaMoon className="text-gray-400 group-hover:text-blue-400 transition" size={20} />
          )}
        </button>



        <div className="text-center">
          {/* title white*/}
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Hi, I'm Jerry You
          </h1>
          {/* grey subtitle */}
          <p className="text-lg text-gray-300 mt-2">
            CS @ UofG
          </p>

          {/* white social links*/}
          <div className="mt-6 flex justify-center space-x-12 flex-nowrap">
            <a href="https://github.com/jerryyou04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-gray-300 transition">
              <FaGithub size={24} /> GitHub
            </a>
            <a href="https://linkedin.com/in/jerryyou04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-gray-300 no-underline transition">
              <FaLinkedin size={24} /> LinkedIn
            </a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-gray-300 transition">
              <FaRegFileAlt size={24} /> Resume
            </a>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}