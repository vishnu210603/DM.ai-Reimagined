// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Sun, Moon } from "lucide-react"
// import { useState } from "react"
// import { useTheme } from "./theme-provider"
// import { LoginModal } from "./login-modal"

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [showLogin, setShowLogin] = useState(false)
//   const { theme, toggleTheme } = useTheme()

//  const navLinkClass = `relative transition-all duration-300 transform hover:scale-105 
//   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
//   after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full ${
//     theme === "light" ? "text-gray-600 hover:text-red-600" : "text-gray-300 hover:text-red-400"
//   }`


//   return (
//     <>
//       <motion.nav
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
//           theme === "light" ? "bg-white/20 border-gray-200/20" : "bg-black/20 border-white/10"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className={`text-2xl font-bold drop-shadow-lg ${theme === "light" ? "text-gray-900" : "text-white"}`}>
//               DMI<span className="text-red-500 drop-shadow-lg">.AI</span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className={navLinkClass}>
//                 Features
//               </a>
//               <a href="#how-it-works" className={navLinkClass}>
//                 How it Works
//               </a>
//               <a href="#demo" className={navLinkClass}>
//                 Demo
//               </a>
//               <a href="#pricing" className={navLinkClass}>
//                 Pricing
//               </a>
//               <a href="#schedule" className={navLinkClass}>
//                 Schedule Call
//               </a>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button
//                 onClick={toggleTheme}
//                 className={`p-2 rounded-lg transition-colors ${
//                   theme === "light"
//                     ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                     : "text-gray-300 hover:text-white hover:bg-gray-800"
//                 }`}
//               >
//                 {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
//               </button>
//               <Button
//                 variant="ghost"
//                 onClick={() => setShowLogin(true)}
//                 className={`${theme === "light" ? "text-gray-900 hover:text-red-600" : "text-white hover:text-red-600"}`}
//               >
//                 Sign In
//               </Button>
//               <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
//                 Get Started
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex items-center space-x-2 md:hidden">
//               <button
//                 onClick={toggleTheme}
//                 className={`p-2 rounded-lg transition-colors ${
//                   theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
//               </button>
//               <button
//                 className={`${theme === "light" ? "text-gray-900" : "text-white"}`}
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               className={`md:hidden mt-4 pb-4 border-t ${theme === "light" ? "border-gray-200" : "border-gray-800"}`}
//             >
//               <div className="flex flex-col space-y-4 pt-4">
//                 <a href="#features" className={navLinkClass}>
//                   Features
//                 </a>
//                 <a href="#how-it-works" className={navLinkClass}>
//                   How it Works
//                 </a>
//                 <a href="#demo" className={navLinkClass}>
//                   Demo
//                 </a>
//                 <a href="#pricing" className={navLinkClass}>
//                   Pricing
//                 </a>
//                 <a href="#schedule" className={navLinkClass}>
//                   Schedule Call
//                 </a>
//                 <div className="flex flex-col space-y-2 pt-4">
//                 <Button
//   onClick={() => setShowLogin(true)}
//   className={`justify-start transition-all duration-300 rounded-md px-4 py-2
//     ${
//       theme === "light"
//         ? "text-gray-900 hover:text-red-600"
//         : "text-white  hover:text-red-600 border"
//     }`}
// >
//   Sign In
// </Button>

//                   <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 justify-start">
//                     Get Started
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </motion.nav>

//       <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
//     </>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { useTheme } from "./theme-provider"
import { LoginModal } from "./login-modal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navLinkClass = `relative transition-all duration-300 transform hover:scale-105 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full ${
      theme === "light" ? "text-gray-600 hover:text-red-600" : "text-gray-300 hover:text-red-400"
    }`

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
          theme === "light" ? "bg-white/20 border-gray-200/20" : "bg-black/20 border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`text-2xl font-bold drop-shadow-lg ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              DMI<span className="text-red-500 drop-shadow-lg">.AI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={navLinkClass}>Features</a>
              <a href="#how-it-works" className={navLinkClass}>How it Works</a>
              <a href="#demo" className={navLinkClass}>Demo</a>
              <a href="#pricing" className={navLinkClass}>Pricing</a>
              <a href="#schedule" className={navLinkClass}>Schedule Call</a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light"
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <Button
  onClick={() => setShowLogin(true)}
  className={`transition-all duration-300 rounded-md px-4 py-2 ${
    theme === "light"
      ? " text-white border border-gray-400 bg-black hover:scale-105"
      : "text-black hover:scale-105 border border-white/20 bg-white"
  }`}
>
  Sign In
</Button>

              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"
                }`}
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                className={`${theme === "light" ? "text-gray-900" : "text-white"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className={`md:hidden mt-4 pb-4 border-t ${theme === "light" ? "border-gray-200" : "border-gray-800"}`}
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#features" className={navLinkClass}>Features</a>
                <a href="#how-it-works" className={navLinkClass}>How it Works</a>
                <a href="#demo" className={navLinkClass}>Demo</a>
                <a href="#pricing" className={navLinkClass}>Pricing</a>
                <a href="#schedule" className={navLinkClass}>Schedule Call</a>

                {/* Mobile Buttons - Centered */}
                <div className="flex flex-col space-y-3 pt-6 items-center">
                  <Button
                    onClick={() => setShowLogin(true)}
                    className={`w-[160px] text-center transition-all duration-300 rounded-md px-4 py-2 ${
                      theme === "light"
                        ? "text-white hover:text-red-600"
                        : "text-white hover:text-red-600 border border-white/30 bg-white/10"
                    }`}
                  >
                    Sign In
                  </Button>
                  <Button className="w-[160px] text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}
