"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "5 Brand Kits",
      "50 AI-Generated Designs",
      "Basic Website Templates",
      "Mobile App Mockups",
      "Email Support",
      "Standard Export Formats",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing businesses and agencies",
    features: [
      "Unlimited Brand Kits",
      "500 AI-Generated Designs",
      "Premium Website Templates",
      "Advanced Mobile App Designs",
      "Priority Support",
      "All Export Formats",
      "Custom Brand Guidelines",
      "Team Collaboration",
      "API Access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Unlimited AI Generations",
      "Custom AI Model Training",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Custom Integrations",
      "Advanced Analytics",
      "White-label Solutions",
      "SLA Guarantee",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const { theme } = useTheme()
  const [selectedPlan, setSelectedPlan] = useState<string | null>("Professional")

  return (
    <section id="pricing" className={`py-20 ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
            Choose Your Plan
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Scale your design capabilities with AI-powered solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{
                y: -10,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPlan(plan.name)}
              className={`relative backdrop-blur-sm border-2 rounded-2xl p-8 shadow-2xl transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.name
                  ? "border-red-500 shadow-red-500/20"
                  : plan.popular
                    ? theme === "light"
                      ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-red-100"
                      : "bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/50 shadow-red-500/10"
                    : theme === "light"
                      ? "bg-white/80 border-gray-200/50 hover:border-red-200/50"
                      : "bg-gray-900/80 border-gray-700/50 hover:border-red-500/50"
              }`}
              style={{ transform: "perspective(1000px)" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {selectedPlan === plan.name && (
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold ${
                      selectedPlan === plan.name || plan.popular
                        ? "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                        : theme === "light"
                          ? "text-gray-900"
                          : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        selectedPlan === plan.name || plan.popular
                          ? "bg-gradient-to-r from-red-500 to-orange-500"
                          : theme === "light"
                            ? "bg-green-500"
                            : "bg-green-600"
                      }`}
                    >
                      <Check size={12} className="text-white" />
                    </div>
                    <span className={`${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                  selectedPlan === plan.name || plan.popular
                    ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-red-500/25"
                    : theme === "light"
                      ? "bg-gray-900 hover:bg-gray-800 text-white"
                      : "bg-white hover:bg-gray-100 text-gray-900"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex justify-center space-x-8 mt-6">
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" size={20} />
              <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" size={20} />
              <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" size={20} />
              <span className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Money-back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
