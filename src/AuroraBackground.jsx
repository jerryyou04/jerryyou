export default function AuroraBackground({ children, darkMode }) {
    return (
      <div className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}>
        {/* aurora effect for black and orange */}
        <div className="absolute inset-0 flex">
          {/* dark mode*/}
          {darkMode && (
            <>
              {/* space gradient with purple hue */}
              <div className="absolute top-[-50%] left-[-50%] h-[220vh] w-[220vw] bg-gradient-to-br from-black via-blue-950 to-indigo-900 opacity-70 blur-[220px] animate-pulse"></div>

              {/* secondary glow */}
              <div className="absolute bottom-[-30%] right-[-30%] h-[140vh] w-[140vw] bg-gradient-to-bl from-indigo-800 via-cyan-700 to-black opacity-50 blur-[180px] animate-slow-spin"></div>

              {/* stars layer */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(100)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{ // animations for stars randomly twinkling
                      width: `${Math.random() * 4.0}px`,
                      height: `${Math.random() * 4.0}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.8 + 0.2, // opacity
                      animation: Math.random() > 0.7 ? "twinkle 2s infinite alternate" : "none",
                      filter: `blur(${Math.random() * 2}px)`, // glow
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* blue sky effect (light mode) */}
          {!darkMode && (
            <>
              <div className="absolute top-[-50%] left-[-50%] h-[220vh] w-[220vw] bg-gradient-to-br from-white via-blue-300 to-blue-500 opacity-60 blur-[200px] animate-pulse"></div>
              <div className="absolute bottom-[-30%] right-[-30%] h-[140vh] w-[140vw] bg-gradient-to-bl from-blue-600 via-blue-700 to-white opacity-50 blur-[180px] animate-slow-spin"></div>

              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full" // snow falling effect
                    style={{
                      width: `${2 + Math.random() * 3}px`, // Random small snowflakes
                      height: `${2 + Math.random() * 3}px`,
                      top: `${-5}%`, // Start slightly off-screen
                      left: `${Math.random() * 100}%`,
                      opacity: 0.8 + Math.random() * 0.2, // Slight opacity variation
                      animation: `fallingSnow ${5 + Math.random() * 3}s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>
            </>

            
          )}
        </div>

        {/* content */}
        <div className="relative z-10 flex h-screen w-full items-center justify-center text-center px-6">
          {children}
        </div>

        <style>
            {`
              @keyframes fallingSnow {
                0% { transform: translateY(-10vh) translateX(0px); opacity: 1; }
                100% { transform: translateY(100vh) translateX(${Math.random() * 10 - 5}px); opacity: 0.2; }
              }

            
              @keyframes twinkle {
                0% { opacity: 0.3; }
                100% { opacity: 1; }
              }

            `}
        </style>
      </div>
    );
}




