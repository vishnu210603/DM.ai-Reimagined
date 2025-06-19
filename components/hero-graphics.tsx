"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"

export function HeroGraphics() {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Design Elements */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotate: -10 }}
        animate={{ opacity: 0.6, y: 0, rotate: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 left-10 md:left-20"
      >
        <div
          className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl backdrop-blur-sm border shadow-2xl ${
            theme === "light" ? "bg-white/80 border-gray-200/50" : "bg-gray-900/80 border-gray-700/50"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-red-500">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* AI Brain Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
        animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-32 right-10 md:right-20"
      >
        <div
          className={`w-20 h-20 md:w-28 md:h-28 rounded-full backdrop-blur-sm border shadow-2xl ${
            theme === "light"
              ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-200/50"
              : "bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-red-500">
              <path
                d="M9.5 2A2.5 2.5 0 0 0 7 4.5V7H4.5A2.5 2.5 0 0 0 2 9.5V14.5A2.5 2.5 0 0 0 4.5 17H7V19.5A2.5 2.5 0 0 0 9.5 22H14.5A2.5 2.5 0 0 0 17 19.5V17H19.5A2.5 2.5 0 0 0 22 14.5V9.5A2.5 2.5 0 0 0 19.5 7H17V4.5A2.5 2.5 0 0 0 14.5 2H9.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 1V3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 21V23" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="1.5" />
              <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="1.5" />
              <path d="M1 12H3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 12H23" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="1.5" />
              <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Design Tools */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 0.5, x: 0, rotate: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-32 left-5 md:left-16"
      >
        <div
          className={`w-14 h-14 md:w-20 md:h-20 rounded-xl backdrop-blur-sm border shadow-2xl ${
            theme === "light" ? "bg-white/80 border-gray-200/50" : "bg-gray-900/80 border-gray-700/50"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-red-500">
              <path
                d="M12 19L7 14L9.5 11.5L12 14L22 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Mobile Device */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: 15 }}
        animate={{ opacity: 0.4, y: 0, rotate: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-20 right-5 md:right-16"
      >
        <div
          className={`w-12 h-20 md:w-16 md:h-24 rounded-lg backdrop-blur-sm border shadow-2xl ${
            theme === "light" ? "bg-white/90 border-gray-200/50" : "bg-gray-900/90 border-gray-700/50"
          }`}
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-2">
            <div className={`w-full h-2 rounded-full mb-1 ${theme === "light" ? "bg-red-200" : "bg-red-900/50"}`}></div>
            <div className={`w-full h-2 rounded-full mb-1 ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}></div>
            <div className={`w-3/4 h-2 rounded-full ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}></div>
          </div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -100, -200],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            bottom: "10%",
          }}
        >
          <div className="w-2 h-2 bg-red-400 rounded-full blur-sm"></div>
        </motion.div>
      ))}
    </div>
  )
}
