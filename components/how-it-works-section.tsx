"use client"

import { motion } from "framer-motion"
import { Upload, Brain, Download } from "lucide-react"
import { useTheme } from "./theme-provider"

const steps = [
  {
    icon: Upload,
    title: "Upload Your Brand Kit",
    description: "Share your logos, colors, fonts, and brand guidelines with our AI system.",
    details: ["Logo files (PNG, SVG)", "Color palette", "Typography", "Brand guidelines"],
  },
  {
    icon: Brain,
    title: "AI Learns Your Brand",
    description: "Our intelligent system analyzes your brand identity and creates a comprehensive style guide.",
    details: ["Brand analysis", "Style extraction", "Pattern recognition", "Design rules"],
  },
  {
    icon: Download,
    title: "Generate & Launch",
    description: "Get launch-ready websites, apps, and marketing materials that perfectly match your brand.",
    details: ["Website templates", "Mobile app designs", "Marketing materials", "Export & deploy"],
  },
]

export function HowItWorksSection() {
  const { theme } = useTheme()

  return (
    <section id="how-it-works" className={`py-20 ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
            How It Works
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Three simple steps to transform your brand into a complete digital ecosystem.
          </p>
        </motion.div>

        <div className="relative">
          {/* Refined Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px transform -translate-y-1/2 z-0">
            <div className="relative w-full h-full">
              {/* Main gradient line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
              {/* Animated flowing effect */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 w-32 bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative backdrop-blur-sm border rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
                  theme === "light" ? "bg-white/80 border-gray-200/50" : "bg-gray-900/80 border-gray-700/50"
                }`}
                style={{ transform: "perspective(1000px)" }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="relative mx-auto mb-6 w-20 h-20">
                  <div className="bg-gradient-to-br from-red-600 to-red-700 w-full h-full rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <step.icon className="text-white drop-shadow-lg" size={32} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-red-600/30 rounded-2xl blur-xl scale-110 -z-10"></div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3
                    className={`text-2xl font-semibold mb-4 drop-shadow-lg ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed mb-6 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    {step.description}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                      <span className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Refined Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* Arrow background glow */}
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md scale-150"></div>
                      {/* Main arrow */}
                      <div
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center border-2 shadow-lg ${
                          theme === "light"
                            ? "bg-white border-red-300 text-red-500"
                            : "bg-gray-800 border-red-500/50 text-red-400"
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full border ${
              theme === "light"
                ? "bg-red-50 border-red-200 text-red-700"
                : "bg-red-900/20 border-red-500/30 text-red-400"
            }`}
          >
            <span className="font-semibold">Ready to get started?</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
