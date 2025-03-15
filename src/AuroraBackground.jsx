// export default function AuroraBackground({ children, darkMode }) {
//     return (
//       <div className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}>
//         {/* Aurora Effect - Adjusted for Dark & Light Mode */}
//         <div className="absolute inset-0 flex">
//           {/* 🔥 Dark Mode (Black → Orange, Like Fire) */}
//           {darkMode && (
//             <>
//               <div className="absolute top-[-50%] left-[-50%] h-[220vh] w-[220vw] bg-gradient-to-br from-black via-gray-900 to-gray-700 opacity-80 blur-[220px] animate-pulse"></div>
//               <div className="absolute bottom-[-30%] right-[-30%] h-[140vh] w-[140vw] bg-gradient-to-bl from-orange-700 via-orange-500 to-orange-300 opacity-40 blur-[180px] animate-slow-spin"></div>
//             </>
//           )}
  
//           {/* 🔥 Light Mode (White → Blue, Like a Blue Flame) */}
//           {!darkMode && (
//             <>
//               <div className="absolute top-[-50%] left-[-50%] h-[220vh] w-[220vw] bg-gradient-to-br from-white via-blue-300 to-blue-500 opacity-60 blur-[200px] animate-pulse"></div>
//               <div className="absolute bottom-[-30%] right-[-30%] h-[140vh] w-[140vw] bg-gradient-to-bl from-blue-600 via-blue-700 to-white opacity-50 blur-[180px] animate-slow-spin"></div>
//             </>
//           )}
//         </div>
  
//         {/* Foreground Content */}
//         <div className="relative z-10 flex h-screen w-full items-center justify-center text-center px-6">
//           {children}
//         </div>
//       </div>
//     );
//   }
export default function AuroraBackground({ children, darkMode }) {
    return (
      <div className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}>
        {/* Aurora Effect - Adjusted for Dark & Light Mode */}
        <div className="absolute inset-0 flex">
          {/* 🌅 Dark Mode (Balanced Sunset Effect) */}
          {darkMode && (
            <>
              {/* Large, subtle background glow */}
              <div className="absolute top-[-50%] left-[-50%] h-[220vh] w-[220vw] bg-gradient-to-br from-black via-orange-400 to-amber-600 opacity-50 blur-[220px] animate-pulse"></div>

              {/* Secondary aurora layer to add a golden hue */}
              <div className="absolute bottom-[-30%] right-[-30%] h-[140vh] w-[140vw] bg-gradient-to-bl from-amber-600 via-orange-500 to-black opacity-40 blur-[180px] animate-slow-spin"></div>
            </>
          )}

          {/* ❄️ Light Mode (Blue Aurora Effect) */}
          {!darkMode && (
            <>
              <div className="absolute top-[-50%] left-[-50%] h-[220vh] w-[220vw] bg-gradient-to-br from-white via-blue-300 to-blue-500 opacity-60 blur-[200px] animate-pulse"></div>
              <div className="absolute bottom-[-30%] right-[-30%] h-[140vh] w-[140vw] bg-gradient-to-bl from-blue-600 via-blue-700 to-white opacity-50 blur-[180px] animate-slow-spin"></div>
            </>
          )}
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex h-screen w-full items-center justify-center text-center px-6">
          {children}
        </div>
      </div>
    );
}




