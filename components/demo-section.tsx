"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useTheme } from "./theme-provider"

export function DemoSection() {
  const { theme } = useTheme()

  return (
    <section id="demo" className={`py-20 ${theme === "light" ? "bg-gray-50" : "bg-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
              See DMI.AI in Action
            </h2>
            <p className={`text-xl mb-8 leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              Watch how our AI transforms a simple brand kit into a complete digital ecosystem in minutes. From websites
              to mobile apps, everything perfectly aligned with your brand identity.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                  Generate responsive websites automatically
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                  Create mobile app designs instantly
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                  Produce marketing materials at scale
                </span>
              </div>
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            className="relative"
            style={{ transform: "perspective(1000px)" }}
          >
            <div
              className={`backdrop-blur-sm rounded-2xl p-8 border shadow-2xl ${
                theme === "light" ? "bg-white/80 border-gray-200/50" : "bg-gray-800/80 border-gray-700/50"
              }`}
            >
              {/* Enhanced Demo Preview */}
              <div
                className={`aspect-video rounded-lg flex items-center justify-center mb-6 border shadow-inner relative overflow-hidden ${
                  theme === "light"
                    ? "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300/50"
                    : "bg-gradient-to-br from-gray-900 to-black border-gray-700/50"
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                    {[...Array(48)].map((_, i) => (
                      <div
                        key={i}
                        className={`border ${theme === "light" ? "border-gray-400" : "border-gray-600"}`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Demo Content */}
                <div className="text-center relative z-10">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <Play className="text-white ml-1 drop-shadow-lg" size={24} />
                    </div>
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150 -z-10"></div>
                  </div>
                  <p className={theme === "light" ? "text-gray-500" : "text-gray-400"}>Interactive Demo</p>

                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-red-500/20 rounded-lg"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 bg-red-500/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-6 w-4 h-4 bg-red-500/40 rounded-sm"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>Brand Analysis</span>
                  <span className="text-green-500">✓ Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>Website Generation</span>
                  <span className="text-green-500">✓ Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={theme === "light" ? "text-gray-600" : "text-gray-300"}>Mobile App Design</span>
                  <span className="text-yellow-500">⏳ In Progress</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
