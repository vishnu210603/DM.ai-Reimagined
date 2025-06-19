// "use client"

// import { motion } from "framer-motion"
// import { AnimatedBackground } from "./animated-background"
// import { Hero3DGraphic } from "./hero-3d-graphic"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"
// import { WaitlistModal } from "./waitlist-modal"
// import { useTheme } from "./theme-provider"
// import { ArrowRight, Sparkles } from "lucide-react"

// export function HeroSection() {
//   const [showWaitlist, setShowWaitlist] = useState(false)
//   const { theme } = useTheme()

//   const handleTryDemo = () => {
//     // Scroll to demo section
//     document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
//       <AnimatedBackground />

//       <div className="relative z-10 max-w-7xl mx-24 px-4 lg:px-0 w-full">
//         <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
//           {/* Left Side - Text Content with More Margin */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="space-y-8 lg:pl-8 xl:pl-12"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border backdrop-blur-sm ${
//                 theme === "light"
//                   ? "bg-red-50/80 border-red-200/50 text-red-700"
//                   : "bg-red-900/20 border-red-500/30 text-red-400"
//               }`}
//             >
//               <Sparkles size={16} />
//               <span className="text-sm font-medium">AI-Powered Design Platform</span>
//             </motion.div>

//             {/* Main Headline - Split into two lines */}
//             <motion.h1
//               className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
//                 theme === "light" ? "text-gray-900" : "text-white"
//               }`}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               Design Made
//               <br />
//               <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
//                 Intelligent
//               </span>
//             </motion.h1>

//             {/* Sub-headline */}
//             <motion.p
//               className={`text-xl md:text-2xl leading-relaxed max-w-2xl ${
//                 theme === "light" ? "text-gray-600" : "text-gray-300"
//               }`}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Transform your brand kit into launch-ready websites, mobile apps, and marketing materials — all powered by
//               advanced AI technology.
//             </motion.p>

//             {/* Feature Points */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="space-y-3"
//             >
//               {[
//                 "Generate complete websites in minutes",
//                 "Create mobile app designs automatically",
//                 "Maintain brand consistency across all platforms",
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                   <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>{feature}</span>
//                 </div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 pt-4"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   size="lg"
//                   onClick={handleTryDemo}
//                   className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-red-500/25 transition-all duration-300"
//                 >
//                   Try the Demo
//                   <ArrowRight className="ml-2" size={20} />
//                 </Button>
//               </motion.div>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   onClick={() => setShowWaitlist(true)}
//                   className={`border-2 px-8 py-4 text-lg font-semibold transition-all duration-300 ${
//                     theme === "light"
//                       ? "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
//                       : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
//                   }`}
//                 >
//                   Join Waitlist
//                 </Button>
//               </motion.div>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//               className="flex items-center space-x-8 pt-8"
//             >
//               <div>
//                 <div className={`text-2xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>10K+</div>
//                 <div className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
//                   Designs Created
//                 </div>
//               </div>
//               <div>
//                 <div className={`text-2xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>500+</div>
//                 <div className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>Happy Clients</div>
//               </div>
//               <div>
//                 <div className={`text-2xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>99%</div>
//                 <div className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>Satisfaction</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Bigger 3D Graphic */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, rotateY: -20 }}
//             animate={{ opacity: 1, x: 0, rotateY: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="relative h-[700px] lg:h-[800px] flex items-center justify-center"
//           >
//             <Hero3DGraphic />
//           </motion.div>
//         </div>
//       </div>

//       <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { AnimatedBackground } from "./animated-background"
import { Hero3DGraphic } from "./hero-3d-graphic"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { WaitlistModal } from "./waitlist-modal"
import { useTheme } from "./theme-provider"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const { theme } = useTheme()

  const handleTryDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-4 sm:mx-8 lg:mx-24 px-4 lg:px-0 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* === LEFT SIDE TEXT === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border backdrop-blur-sm ${
                theme === "light"
                  ? "bg-red-50/80 border-red-200/50 text-red-700"
                  : "bg-red-900/20 border-red-500/30 text-red-400"
              }`}
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">AI-Powered Design Platform</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Design Made
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Intelligent
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className={`text-lg sm:text-xl sm:w-max-md md:text-2xl leading-relaxed ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your brand kit into launch-ready websites, mobile apps, and marketing materials — all powered by
              advanced AI technology.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              {[
                "Generate complete websites in minutes",
                "Create mobile app designs automatically",
                "Maintain brand consistency across all platforms",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={handleTryDemo}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                >
                  Try the Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowWaitlist(true)}
                  className={`border-2 px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                    theme === "light"
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                  }`}
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-6 pt-8"
            >
              {[
                { label: "Designs Created", value: "10K+" },
                { label: "Happy Clients", value: "500+" },
                { label: "Satisfaction", value: "99%" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className={`text-2xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* === RIGHT SIDE GRAPHIC (Hidden on Mobile) === */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex relative h-[500px] sm:h-[600px] lg:h-[800px] items-center justify-center"
          >
            <Hero3DGraphic />
          </motion.div>
        </div>
      </div>

      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </section>
  )
}
