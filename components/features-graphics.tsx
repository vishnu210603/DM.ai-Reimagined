"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"

export function FeaturesGraphics() {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Large Background Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        className="absolute top-10 right-10"
      >
        <div
          className={`w-64 h-64 rounded-full border-2 ${theme === "light" ? "border-red-200" : "border-red-900/30"}`}
        >
          <div
            className={`w-48 h-48 rounded-full border-2 m-8 ${
              theme === "light" ? "border-red-300" : "border-red-800/30"
            }`}
          >
            <div
              className={`w-32 h-32 rounded-full border-2 m-8 ${
                theme === "light" ? "border-red-400" : "border-red-700/30"
              }`}
            ></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 left-10"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-red-400">
          <path
            d="M20 100 L60 60 L100 100 L140 60 L180 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M20 120 L60 80 L100 120 L140 80 L180 120"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M20 140 L60 100 L100 140 L140 100 L180 140"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
        </svg>
      </motion.div>
    </div>
  )
}
