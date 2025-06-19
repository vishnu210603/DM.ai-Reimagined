"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"

export function Hero3DGraphic() {
  const { theme } = useTheme()

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Tilted Cards Layout - More Distant */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-[800px] h-[700px] md:w-[550px] md:h-[680px]"
        style={{ transform: "perspective(1200px)" }}
      >
        {/* Card 1 - Brand Kit - Top Left */}
        <motion.div
          initial={{ opacity: 0, rotateX: 60, rotateY: -20 }}
          animate={{ opacity: 1, rotateX: 15, rotateY: -25 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`absolute w-48 h-64 md:w-56 md:h-72 rounded-xl shadow-2xl border ${
            theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
          }`}
          style={{
            left: "5%",
            top: "5%",
            transform: "rotateX(15deg) rotateY(-25deg) rotateZ(-8deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Brand Kit
            </h3>
            <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              Upload your brand assets and let AI understand your identity
            </p>
            <div className="mt-auto">
              <div className={`w-full h-2 rounded-full ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}>
                <div className="w-4/5 h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - AI Processing - Top Right */}
        <motion.div
          initial={{ opacity: 0, rotateX: 60, rotateY: 20 }}
          animate={{ opacity: 1, rotateX: 10, rotateY: 25 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`absolute w-48 h-64 md:w-56 md:h-72 rounded-xl shadow-2xl border ${
            theme === "light"
              ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
              : "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/30"
          }`}
          style={{
            right: "5%",
            top: "5%",
            transform: "rotateX(10deg) rotateY(25deg) rotateZ(8deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              AI Analysis
            </h3>
            <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              Advanced algorithms process your brand elements
            </p>
            <div className="mt-auto space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className={`flex-1 h-1 rounded ${theme === "light" ? "bg-blue-200" : "bg-blue-800"}`}></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className={`flex-1 h-1 rounded ${theme === "light" ? "bg-blue-200" : "bg-blue-800"}`}></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 - Website Generation - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, rotateX: 60, rotateY: -10 }}
          animate={{ opacity: 1, rotateX: 25, rotateY: -20 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`absolute w-48 h-64 md:w-56 md:h-72 rounded-xl shadow-2xl border ${
            theme === "light"
              ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
              : "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30"
          }`}
          style={{
            left: "5%",
            bottom: "5%",
            transform: "rotateX(25deg) rotateY(-20deg) rotateZ(-5deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mb-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>Website</h3>
            <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              Generate responsive websites automatically
            </p>
            <div className="mt-auto">
              <div
                className={`w-full h-16 rounded border ${theme === "light" ? "border-gray-200 bg-gray-50" : "border-gray-600 bg-gray-800"}`}
              >
                <div className="p-2 space-y-1">
                  <div className={`w-full h-2 rounded ${theme === "light" ? "bg-green-200" : "bg-green-800"}`}></div>
                  <div className={`w-3/4 h-2 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}></div>
                  <div className={`w-1/2 h-2 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 - Mobile App - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, rotateX: 60, rotateY: 30 }}
          animate={{ opacity: 1, rotateX: 30, rotateY: 20 }}
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={`absolute w-48 h-64 md:w-56 md:h-72 rounded-xl shadow-2xl border ${
            theme === "light"
              ? "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200"
              : "bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30"
          }`}
          style={{
            right: "5%",
            bottom: "5%",
            transform: "rotateX(30deg) rotateY(20deg) rotateZ(5deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Mobile App
            </h3>
            <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              Create mobile app designs instantly
            </p>
            <div className="mt-auto">
              <div
                className={`w-20 h-32 mx-auto rounded-lg border-2 ${theme === "light" ? "border-gray-300 bg-white" : "border-gray-600 bg-gray-800"}`}
              >
                <div className="p-2 space-y-2">
                  <div className={`w-full h-3 rounded ${theme === "light" ? "bg-purple-200" : "bg-purple-800"}`}></div>
                  <div className={`w-full h-2 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}></div>
                  <div className={`w-2/3 h-2 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
