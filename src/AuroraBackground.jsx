export default function AuroraBackground({ children, darkMode }) {
    return (
      <div className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}>
        {/* aurora effect for black and orange */}
        <div className="absolute inset-0 flex">
          {/* dark mode*/}
          {darkMode && (
            <>
              {/* Deep Space Gradient with a Slight Purple Hue */}
              <div className="absolute top-[-50%] left-[-50%] h-[220vh] w-[220vw] bg-gradient-to-br from-black via-blue-950 to-indigo-900 opacity-70 blur-[220px] animate-pulse"></div>

              {/* Subtle Secondary Glow (Aurora Effect) */}
              <div className="absolute bottom-[-30%] right-[-30%] h-[140vh] w-[140vw] bg-gradient-to-bl from-indigo-800 via-cyan-700 to-black opacity-50 blur-[180px] animate-slow-spin"></div>

              {/* ✨ Stars Layer */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(100)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: `${Math.random() * 2.5}px`,
                      height: `${Math.random() * 2.5}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.8 + 0.2, // opacity
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
            </>

            
          )}
        </div>

        {/* content */}
        <div className="relative z-10 flex h-screen w-full items-center justify-center text-center px-6">
          {children}
        </div>
      </div>
    );
}




