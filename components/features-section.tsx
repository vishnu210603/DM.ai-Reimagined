"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Palette, Smartphone, Globe, Brain } from "lucide-react"
import { useTheme } from "./theme-provider"
import { FeaturesGraphics } from "./features-graphics"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Design",
    description:
      "Advanced AI algorithms that understand your brand and create consistent designs across all platforms.",
  },
  {
    icon: Palette,
    title: "Brand Kit Integration",
    description: "Upload your brand assets once and watch AI generate on-brand content automatically.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Output",
    description: "Generate websites, mobile apps, and marketing materials from a single brand input.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Go from concept to launch-ready assets in minutes, not weeks.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every design is optimized for mobile devices and responsive across all screen sizes.",
  },
  {
    icon: Sparkles,
    title: "Smart Automation",
    description: "Automate repetitive design tasks and focus on strategy and creativity.",
  },
]

export function FeaturesSection() {
  const { theme } = useTheme()

  return (
    <section id="features" className={`py-20 relative ${theme === "light" ? "bg-gray-50" : "bg-gray-900"}`}>
      <FeaturesGraphics />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
            Powerful Features for Modern Brands
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Everything you need to create, manage, and scale your brand's digital presence with AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`backdrop-blur-sm border rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 shadow-2xl hover:shadow-red-500/10 ${
                theme === "light" ? "bg-white/80 border-gray-200/50" : "bg-gray-800/80 border-gray-700/50"
              }`}
              style={{
                transform: "perspective(1000px)",
                boxShadow:
                  theme === "light"
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm border border-red-500/30">
                <feature.icon className="text-red-500" size={24} />
              </div>
              <h3
                className={`text-xl font-semibold mb-3 drop-shadow-lg ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
